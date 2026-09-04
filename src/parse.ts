import { looksLikeReconstructionMarkdown, sectionOrderErrors } from "./order.js";
import type { FactLayer, Reconstruction } from "./types.js";

function normalizeHeading(title: string): string {
  return title.replace(/[:.?]$/, "").trim().toLowerCase();
}

function splitByHeading(
  markdown: string,
  level: 2 | 3,
): Map<string, string> {
  const marks = level === 2 ? "##" : "###";
  const heading = new RegExp(
    `^${marks}\\s+(?:\\d+\\.\\s+)?(.+?)\\s*$`,
  );
  const sections = new Map<string, string[]>();
  let current: string | undefined;
  for (const line of markdown.split(/\r?\n/)) {
    if (level === 3 && /^##\s+/.test(line) && !/^###\s+/.test(line)) {
      current = undefined;
      continue;
    }
    const match = line.match(heading);
    if (match) {
      current = normalizeHeading(match[1]);
      if (!sections.has(current)) sections.set(current, []);
      continue;
    }
    if (current) sections.get(current)?.push(line);
  }
  return new Map(
    [...sections.entries()].map(([key, lines]) => [key, lines.join("\n").trim()]),
  );
}

function field(section: string, label: string): string {
  const match = section.match(
    new RegExp(`\\*\\*${label}:\\*\\*\\s*(.*)$`, "im"),
  );
  return match?.[1]?.trim() ?? "";
}

function listItems(block: string): string[] {
  return block
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*-\s*/, "").trim())
    .filter((line) => line.length > 0 && line !== "-");
}

function parseTable(block: string): string[][] {
  const rows: string[][] = [];
  let sawHeader = false;
  for (const line of block.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|")) {
      if (sawHeader) break;
      continue;
    }
    const cells = trimmed
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());
    if (cells.every((cell) => /^:?-+:?$/.test(cell))) continue;
    if (!sawHeader) {
      sawHeader = true;
      continue;
    }
    if (cells.every((cell) => cell.length === 0)) continue;
    rows.push(cells);
  }
  return rows;
}

function asLayer(value: string): FactLayer {
  if (value === "settled" || value === "provisional" || value === "open") {
    return value;
  }
  return "open";
}

export function parseReconstructionMarkdown(markdown: string): Reconstruction {
  const titleMatch = markdown.match(/^#\s+Reconstruction:\s*(.+)$/m);
  const h2 = splitByHeading(markdown, 2);
  const boundSection = h2.get("bound event") ?? "";
  const layersSection = h2.get("fact layers") ?? "";
  const chainSection = h2.get("causal chain") ?? "";
  const hoopSection = h2.get("hoop failures") ?? "";
  const gapSection = h2.get("named residual gaps") ?? "";
  const hypothesisSection = h2.get("allowed hypotheses") ?? "";
  const tracesSection = h2.get("discriminating traces") ?? "";
  const remainderSection = h2.get("remainder") ?? "";
  const logSection = h2.get("reconstruction log") ?? "";
  const summarySection = h2.get("summary") ?? "";

  const layers = splitByHeading(`## Fact layers\n${layersSection}`, 3);
  const chain = splitByHeading(`## Causal chain\n${chainSection}`, 3);

  const hoopRows = parseTable(hoopSection);
  const gapRows = parseTable(gapSection);
  const hypothesisRows = parseTable(hypothesisSection);
  const traceRows = parseTable(tracesSection);
  const logRows = parseTable(logSection);

  const movedLine = field(summarySection, "Bound moved\\?");
  let boundMoved: { from: string; to: string } | false | undefined;
  if (/^yes:/i.test(movedLine)) {
    const parts = movedLine.replace(/^yes:\s*/i, "").split("→");
    if (parts.length === 2) {
      boundMoved = { from: parts[0].trim(), to: parts[1].trim() };
    }
  } else if (/^no/i.test(movedLine)) {
    boundMoved = false;
  }

  return {
    title: titleMatch?.[1]?.trim(),
    summary: summarySection
      ? {
          what: field(summarySection, "What"),
          killed: field(summarySection, "Killed")
            .split(";")
            .map((item) => item.trim())
            .filter((item) => item && item !== "none"),
          openGaps: field(summarySection, "Open gaps")
            .split(";")
            .map((item) => item.trim())
            .filter((item) => item && item !== "(none named)"),
          boundMoved,
        }
      : undefined,
    boundEvent: {
      boundId: field(boundSection, "bound-id") || undefined,
      whatHappened: field(boundSection, "What happened"),
      where: field(boundSection, "Where") || undefined,
      when: field(boundSection, "When") || undefined,
      scale: field(boundSection, "Scale") || undefined,
      sequence: field(boundSection, "Sequence") || undefined,
      layer: asLayer(field(boundSection, "Layer of this bound")),
      firstNounRisk: field(boundSection, "First-noun risk") || undefined,
    },
    factLayers: {
      settled: listItems(layers.get("settled") ?? ""),
      provisional: listItems(layers.get("provisional") ?? ""),
      open: listItems(layers.get("open") ?? ""),
    },
    causalChain: {
      initiation: layersOrDash(chain.get("initiation")),
      amplification: layersOrDash(chain.get("amplification")),
      exposure: layersOrDash(chain.get("exposure")),
      response: layersOrDash(chain.get("response")),
    },
    hoopFailures: hoopRows.map((row) => ({
      mechanismKilled: row[0] ?? "",
      constraint: row[1] ?? "",
    })),
    residualGaps: gapRows.map((row) => ({
      gapId: row[0] ?? "",
      question: row[1] ?? "",
      notes: row[2] || undefined,
    })),
    allowedHypotheses: hypothesisRows.map((row) => ({
      hypothesisId: row[0] ?? "",
      claim: row[1] ?? "",
      pointsAt: row[2] ?? "",
    })),
    discriminatingTraces: traceRows.map((row) => ({
      gapId: row[0] ?? "",
      lookFor: row[1] ?? "",
    })),
    remainder: remainderSection,
    reconstructionLog: logRows.map((row) => ({
      boundId: row[0] ?? "",
      bound: row[1] ?? "",
      leftover: row[2] ?? "",
      whatArrived: row[3] ?? "",
    })),
  };
}

function layersOrDash(value: string | undefined): string {
  if (!value || value === "-") return value ?? "";
  return value;
}

export { looksLikeReconstructionMarkdown, sectionOrderErrors };
