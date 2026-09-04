import type { Reconstruction } from "./types.js";

function bullets(items: string[]): string {
  if (items.length === 0) return "-";
  return items.map((item) => `- ${item}`).join("\n");
}

function cell(value: string | undefined): string {
  return (value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

export function renderReconstruction(reconstruction: Reconstruction): string {
  const title = reconstruction.title ?? "untitled";
  const summary = reconstruction.summary;
  const bound = reconstruction.boundEvent;
  const chain = reconstruction.causalChain;
  const moved = summary?.boundMoved;
  const movedLine =
    moved === undefined
      ? "no"
      : moved === false
        ? "no"
        : `yes: ${moved.from} → ${moved.to}`;

  const hoopRows =
    reconstruction.hoopFailures.length === 0
      ? "|  |  |"
      : reconstruction.hoopFailures
          .map(
            (row) =>
              `| ${cell(row.mechanismKilled)} | ${cell(row.constraint)} |`,
          )
          .join("\n");

  const gapRows =
    reconstruction.residualGaps.length === 0
      ? "|  |  |  |"
      : reconstruction.residualGaps
          .map(
            (row) =>
              `| ${cell(row.gapId)} | ${cell(row.question)} | ${cell(row.notes)} |`,
          )
          .join("\n");

  const hypothesisRows =
    reconstruction.allowedHypotheses.length === 0
      ? "|  |  |  |"
      : reconstruction.allowedHypotheses
          .map(
            (row) =>
              `| ${cell(row.hypothesisId)} | ${cell(row.claim)} | ${cell(row.pointsAt)} |`,
          )
          .join("\n");

  const traceRows =
    reconstruction.discriminatingTraces.length === 0
      ? "|  |  |"
      : reconstruction.discriminatingTraces
          .map((row) => `| ${cell(row.gapId)} | ${cell(row.lookFor)} |`)
          .join("\n");

  const logRows =
    reconstruction.reconstructionLog.length === 0
      ? "| bound-1 |  |  | initial |"
      : reconstruction.reconstructionLog
          .map(
            (row) =>
              `| ${cell(row.boundId)} | ${cell(row.bound)} | ${cell(row.leftover)} | ${cell(row.whatArrived)} |`,
          )
          .join("\n");

  return `# Reconstruction: ${title}

*Gap Last artifact. Sections stay in this order. A hypothesis that
does not point at a named residual gap is illegal. If a later trace
moves the object, add a log entry and rewrite from the bound down.*

## Summary

- **What:** ${summary?.what ?? bound.whatHappened}
- **Killed:** ${summary?.killed.join("; ") || "none"}
- **Open gaps:** ${summary?.openGaps.join("; ") || "(none named)"}
- **Bound moved?** ${movedLine}

## 1. Bound event

- **What happened:** ${bound.whatHappened}
- **Where:** ${bound.where ?? ""}
- **When:** ${bound.when ?? ""}
- **Scale:** ${bound.scale ?? ""}
- **Sequence:** ${bound.sequence ?? ""}
- **Layer of this bound:** ${bound.layer}
- **First-noun risk:** ${bound.firstNounRisk ?? ""}
${bound.boundId ? `- **bound-id:** ${bound.boundId}\n` : ""}
## 2. Fact layers

### Settled

${bullets(reconstruction.factLayers.settled)}

### Provisional

${bullets(reconstruction.factLayers.provisional)}

### Open

${bullets(reconstruction.factLayers.open)}

## 3. Causal chain

### Initiation

${chain.initiation || "-"}

### Amplification

${chain.amplification || "-"}

### Exposure

${chain.exposure || "-"}

### Response

${chain.response || "-"}

## 4. Hoop failures

| Mechanism killed | Constraint that kills it (geometry, timing, energy, record, location, incentive) |
| --- | --- |
${hoopRows}

## 5. Named residual gaps

| gap-id | Question | Notes |
| --- | --- | --- |
${gapRows}

## 6. Allowed hypotheses

*Illegal unless \`points-at\` is a live gap-id from §5.*

| hypothesis-id | Claim | points-at |
| --- | --- | --- |
${hypothesisRows}

## 7. Discriminating traces

| Would move which gap | What to look for |
| --- | --- |
${traceRows}

## 8. Remainder

${reconstruction.remainder}

## 9. Reconstruction log

| bound-id | Bound (short) | Leftover question | What arrived |
| --- | --- | --- |
${logRows}
`;
}

export function renderSkeleton(packet: string): Reconstruction {
  const trimmed = packet.trim();
  const firstLine =
    trimmed.split(/\r?\n/).find((line) => line.trim().length > 0) ??
    "unbound packet";
  return {
    title: "unbound packet",
    summary: {
      what: firstLine.replace(/^#+\s*/, "").slice(0, 200),
      killed: [],
      openGaps: [],
      boundMoved: false,
    },
    boundEvent: {
      boundId: "bound-1",
      whatHappened: trimmed || "(empty input)",
      layer: "open",
      firstNounRisk:
        "A first noun in this packet may already be cemented. This is not yet a bound.",
    },
    factLayers: {
      settled: [],
      provisional: [],
      open: ["The packet has not been reconstructed. Almost everything is open."],
    },
    causalChain: {
      initiation: "Not split. Do not invent an initiation.",
      amplification: "Not split.",
      exposure: "Not split.",
      response: "Not split.",
    },
    hoopFailures: [],
    residualGaps: [],
    allowedHypotheses: [],
    discriminatingTraces: [],
    remainder:
      "This input is not a reconstruction. The bound is thin. No cause was invented. Run the skill, or supply a reconstruction artifact.",
    reconstructionLog: [
      {
        boundId: "bound-1",
        bound: "unbound packet",
        leftover: "What happened, where, when, at what scale?",
        whatArrived: "initial",
      },
    ],
  };
}
