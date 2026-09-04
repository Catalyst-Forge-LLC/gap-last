import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { parseReconstructionMarkdown } from "./parse.js";
import { processInput, processOk } from "./process.js";
import { renderReconstruction } from "./render.js";
import {
  coerceReconstruction,
  liveGapIds,
  validateReconstruction,
  validateUnknown,
} from "./validate.js";
import type { Reconstruction } from "./types.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function readFixture(name: string): Reconstruction {
  const raw = readFileSync(
    join(root, "fixtures", "reconstructions", name),
    "utf8",
  );
  return coerceReconstruction(JSON.parse(raw));
}

const wednesday = readFixture("langtang-wednesday.json");
const thursday = readFixture("langtang-thursday.json");

test("Wednesday /full validates and keeps glacier collapse provisional", () => {
  const result = validateReconstruction(wednesday);
  assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
  assert.equal(wednesday.boundEvent.layer, "provisional");
  assert.match(wednesday.boundEvent.firstNounRisk ?? "", /glacier collapse/i);
  assert.equal(
    wednesday.reconstructionLog[0]?.leftover,
    "Why did that ice detach?",
  );
});

test("Thursday /reopen moves the leftover and logs both bounds", () => {
  const result = validateReconstruction(thursday);
  assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
  const leftovers = thursday.reconstructionLog.map((row) => row.leftover);
  assert.equal(leftovers[0], "Why did that ice detach?");
  assert.equal(
    leftovers[1],
    "Why did that rock slab fail, taking ice with it?",
  );
  assert.deepEqual(thursday.summary?.boundMoved, {
    from: "Why did that ice detach?",
    to: "Why did that rock slab fail, taking ice with it?",
  });
  assert.equal(liveGapIds(thursday).has("why-ice-detach"), false);
  assert.equal(liveGapIds(thursday).has("last-increment"), true);
  assert.doesNotMatch(
    thursday.remainder,
    /the trigger was (thaw|water in joints)/i,
  );
});

test("allowed hypothesis without points-at is invalid", () => {
  const broken: Reconstruction = {
    ...wednesday,
    allowedHypotheses: [
      {
        hypothesisId: "china-did-it",
        claim: "China caused it.",
        pointsAt: "",
      },
    ],
  };
  const result = validateReconstruction(broken);
  assert.equal(result.ok, false);
  assert.ok(
    result.errors.some((error) => error.code === "hypothesis-missing-points-at"),
  );
});

test("hypothesis that points at a retired gap is invalid", () => {
  const broken: Reconstruction = {
    ...thursday,
    allowedHypotheses: [
      {
        hypothesisId: "old-ice-story",
        claim: "The ice detached because of hanging ice alone.",
        pointsAt: "why-ice-detach",
      },
    ],
  };
  const result = validateReconstruction(broken);
  assert.equal(result.ok, false);
  assert.ok(
    result.errors.some(
      (error) => error.code === "hypothesis-points-at-retired-or-unknown",
    ),
  );
});

test("who-caused-it first fails section order", () => {
  const villainFirst = `# Reconstruction: fight

## Who caused it?

China.

## 1. Bound event

- **What happened:** ice moved
- **Layer of this bound:** open

## 2. Fact layers

### Settled

-

### Provisional

-

### Open

-

## 3. Causal chain

### Initiation

-

### Amplification

-

### Exposure

-

### Response

-

## 4. Hoop failures

| Mechanism killed | Constraint that kills it (geometry, timing, energy, record, location, incentive) |
| --- | --- |
|  |  |

## 5. Named residual gaps

| gap-id | Question | Notes |
| --- | --- | --- |
|  |  |  |

## 6. Allowed hypotheses

| hypothesis-id | Claim | points-at |
| --- | --- | --- |
|  |  |  |

## 7. Discriminating traces

| Would move which gap | What to look for |
| --- | --- |
|  |  |

## 8. Remainder

open

## 9. Reconstruction log

| bound-id | Bound (short) | Leftover question | What arrived |
| --- | --- | --- |
| bound-1 |  |  | initial |
`;
  const processed = processInput(villainFirst);
  assert.equal(processOk(processed), false);
  assert.ok(
    processed.orderErrors.some((error) => /who caused it/i.test(error)),
  );
});

test("numeric confidence field is rejected", () => {
  const raw = {
    ...wednesday,
    confidence: 87,
  };
  const result = validateUnknown(raw);
  assert.equal(result.ok, false);
  assert.ok(
    result.errors.some((error) => error.code === "scoring-field-forbidden"),
  );
});

test("JSON projection round-trips through markdown", () => {
  const markdown = renderReconstruction(thursday);
  const parsed = parseReconstructionMarkdown(markdown);
  const again = validateReconstruction(parsed);
  assert.equal(again.ok, true, JSON.stringify(again.errors, null, 2));
  assert.equal(parsed.boundEvent.whatHappened, thursday.boundEvent.whatHappened);
  assert.equal(parsed.allowedHypotheses[0]?.pointsAt, "last-increment");
  assert.equal(
    parsed.reconstructionLog[1]?.leftover,
    "Why did that rock slab fail, taking ice with it?",
  );
});

test("raw who-caused-it packet emits a skeleton, not a winner", () => {
  const packet = readFileSync(
    join(root, "fixtures", "langtang-wednesday.md"),
    "utf8",
  );
  const processed = processInput(packet);
  assert.equal(processed.kind, "skeleton");
  assert.equal(processed.reconstruction.allowedHypotheses.length, 0);
  assert.equal(processed.reconstruction.boundEvent.layer, "open");
  assert.match(processed.markdown, /## 1\. Bound event/);
  assert.doesNotMatch(
    processed.markdown,
    /## (Who caused it|The cause|Root cause)/i,
  );
  assert.match(processed.reconstruction.remainder, /No cause was invented/);
});

test("CLI validate fails a hypothesis with no points-at", () => {
  const broken = {
    ...wednesday,
    allowedHypotheses: [
      {
        hypothesisId: "orphan",
        claim: "A story with no gap.",
        pointsAt: "",
      },
    ],
  };
  const cli = join(root, "dist", "cli.js");
  const result = spawnSync(process.execPath, [cli, "validate", "-"], {
    input: JSON.stringify(broken),
    encoding: "utf8",
  });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /hypothesis-missing-points-at/);
});

test("pnpm gaplast validate runs the Thursday fixture", () => {
  const result = spawnSync(
    "pnpm",
    [
      "gaplast",
      "validate",
      "fixtures/reconstructions/langtang-thursday.json",
    ],
    {
      cwd: root,
      encoding: "utf8",
      shell: process.platform === "win32",
    },
  );
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.match(result.stderr, /^ok\b/m);
});

test("CLI emit writes markdown for a valid reconstruction", () => {
  const cli = join(root, "dist", "cli.js");
  const result = spawnSync(process.execPath, [cli, "-"], {
    input: JSON.stringify(wednesday),
    encoding: "utf8",
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /## 1\. Bound event/);
  assert.match(result.stdout, /## 5\. Named residual gaps/);
  assert.match(result.stdout, /why-ice-detach/);
});
