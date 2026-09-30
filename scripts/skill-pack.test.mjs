import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { test } from "node:test";
import { inflateSync } from "node:zlib";
import { syncSkills } from "./sync-skill-static.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function temporary(t) {
  const dir = mkdtempSync(join(tmpdir(), "gaplast-packs-"));
  t.after(() => {
    if (dirname(dir) !== resolve(tmpdir())) throw new Error("Temporary path escaped parent");
    rmSync(dir, { recursive: true, force: true });
  });
  return dir;
}

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))
    .flatMap((entry) => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]);
}

function zipEntries(buffer) {
  const entries = new Map();
  let offset = 0;
  while (buffer.readUInt32LE(offset) === 0x04034b50) {
    assert.equal(buffer.readUInt16LE(offset + 8), 0, "STORE ZIP");
    const size = buffer.readUInt32LE(offset + 18);
    const nameSize = buffer.readUInt16LE(offset + 26);
    const extraSize = buffer.readUInt16LE(offset + 28);
    const name = buffer.subarray(offset + 30, offset + 30 + nameSize).toString();
    const start = offset + 30 + nameSize + extraSize;
    entries.set(name, buffer.subarray(start, start + size));
    offset = start + size;
  }
  assert.equal(buffer.readUInt32LE(offset), 0x02014b50, "central directory follows members");
  assert.equal(buffer.readUInt16LE(buffer.length - 12), entries.size, "EOCD member count");
  return entries;
}

test("catalog bundles preserve every source byte in folders and ZIPs", (t) => {
  const outputDir = temporary(t);
  const names = syncSkills({ outputDir });
  assert.deepEqual(names, ["gaplast", "gaplast-engineering"]);
  for (const name of names) {
    const source = join(root, "skills", name);
    const archive = zipEntries(readFileSync(join(outputDir, `${name}.zip`)));
    const expected = files(source).map((path) => `${name}/${relative(source, path).replace(/\\/g, "/")}`);
    assert.deepEqual([...archive.keys()].sort(), expected.sort());
    for (const path of files(source)) {
      const member = relative(source, path);
      assert.deepEqual(readFileSync(join(outputDir, name, member)), readFileSync(path));
      assert.deepEqual(archive.get(`${name}/${member.replace(/\\/g, "/")}`), readFileSync(path));
    }
    const labelText = readFileSync(join(source, "SKILL_FACTS.md"), "utf8");
    const token = labelText.match(/#sf1\.([A-Za-z0-9_-]+)/)[1];
    const label = JSON.parse(inflateSync(Buffer.from(token, "base64url")));
    assert.equal(label.instructions_reach.filesystem, "read-write");
    assert.equal(labelText.match(/^\s+filesystem:\s*(.*)$/m)[1].trim(), label.instructions_reach.filesystem);
    assert.ok(labelText.includes(`| Filesystem | ${label.instructions_reach.filesystem} |`));
    for (const artifact of label.bundled_artifacts) assert.ok(expected.includes(`${name}/${artifact.path}`));
  }
});

test("an incomplete pack leaves existing outputs intact", (t) => {
  const isolated = temporary(t);
  cpSync(join(root, "skills"), join(isolated, "skills"), { recursive: true });
  const outputDir = join(isolated, "output");
  syncSkills({ root: isolated, outputDir });
  const previous = readFileSync(join(outputDir, "gaplast.zip"));
  rmSync(join(isolated, "skills", "gaplast-engineering", "references", "engineering-spec.md"));
  assert.throws(() => syncSkills({ root: isolated, outputDir }), /Missing or invalid skill member/);
  assert.deepEqual(readFileSync(join(outputDir, "gaplast.zip")), previous);
});

test("catalog paths cannot escape the output directory", (t) => {
  const isolated = temporary(t);
  cpSync(join(root, "skills"), join(isolated, "skills"), { recursive: true });
  writeFileSync(join(isolated, "skills", "catalog.json"), JSON.stringify([{ name: "../outside", requiredMembers: [] }]));
  assert.throws(() => syncSkills({ root: isolated, outputDir: join(isolated, "output") }), /Invalid skill name/);
});

function runCase(caseName, file, args = [], input) {
  const result = spawnSync(process.execPath, [join(root, "fixtures", "engineering", caseName, file), ...args], {
    encoding: "utf8", input,
  });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout;
}

test("existing JSON handoff completes without an adapter", () => {
  const json = runCase("existing-handoff", "tool-a.mjs", ["--json"]);
  assert.equal(runCase("existing-handoff", "tool-b.mjs", [], json).trim(), "1 finding(s)");
});

test("similar validators preserve distinct caller contracts", async () => {
  const { importRecord, issuePublicRecord } = await import("../fixtures/engineering/no-change/validators.mjs");
  assert.equal(importRecord("Ab12"), true);
  assert.equal(issuePublicRecord("Ab12"), false);
  assert.equal(issuePublicRecord("ab12"), true);
  assert.equal(importRecord("../abc"), false);
});

test("caching experiment can rule out the proposed bottleneck", () => {
  const fresh = JSON.parse(runCase("reopen", "diagnostic.mjs", ["--fresh"]));
  const cached = JSON.parse(runCase("reopen", "diagnostic.mjs", ["--cached"]));
  assert.equal(fresh.kind, "fixture");
  assert.equal(fresh.totalMs - cached.totalMs, 5);
  assert.equal(cached.renderMs, 400);
  assert.equal(cached.totalMs, cached.renderMs);
});
