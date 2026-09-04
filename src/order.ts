import { requiredSectionTitles } from "./types.js";

export interface HeadingHit {
  title: string;
  index: number;
  raw: string;
}

const numbered = /^#{2,3}\s+(\d+)\.\s+(.+?)\s*$/;
const plain = /^#{2,3}\s+(.+?)\s*$/;

function normalizeTitle(title: string): string {
  return title.replace(/[:.]$/, "").trim().toLowerCase();
}

const requiredNormalized = requiredSectionTitles.map((title) =>
  normalizeTitle(title),
);

const villainFirst = [
  "who caused it",
  "who caused it?",
  "the cause",
  "root cause",
  "villain",
];

export function extractHeadings(markdown: string): HeadingHit[] {
  const hits: HeadingHit[] = [];
  for (const [index, line] of markdown.split(/\r?\n/).entries()) {
    const numberedMatch = line.match(numbered);
    if (numberedMatch) {
      hits.push({
        title: numberedMatch[2],
        index,
        raw: line,
      });
      continue;
    }
    const plainMatch = line.match(plain);
    if (plainMatch && !plainMatch[1].startsWith("Summary")) {
      hits.push({ title: plainMatch[1], index, raw: line });
    }
  }
  return hits;
}

export function firstRequiredSection(
  headings: HeadingHit[],
): string | undefined {
  for (const heading of headings) {
    const normalized = normalizeTitle(heading.title);
    if (requiredNormalized.includes(normalized)) {
      return heading.title;
    }
    if (villainFirst.includes(normalized)) {
      return heading.title;
    }
  }
  return undefined;
}

export function sectionOrderErrors(markdown: string): string[] {
  const headings = extractHeadings(markdown);
  const errors: string[] = [];
  const seen: string[] = [];

  const first = firstRequiredSection(headings);
  if (!first) {
    errors.push(
      "section-order: no bound event heading. First output block must be the bound.",
    );
    return errors;
  }
  if (normalizeTitle(first) !== "bound event") {
    errors.push(
      `section-order: first section is "${first}", not Bound event. Do not answer who caused it first.`,
    );
  }

  let expected = 0;
  for (const heading of headings) {
    const normalized = normalizeTitle(heading.title);
    const position = requiredNormalized.indexOf(normalized);
    if (position === -1) continue;
    if (position < expected) {
      errors.push(
        `section-order: "${heading.title}" appears after a later required section.`,
      );
      continue;
    }
    if (position > expected) {
      const missing = requiredSectionTitles.slice(expected, position);
      errors.push(
        `section-order: missing ${missing.join(", ")} before "${heading.title}".`,
      );
    }
    seen.push(normalized);
    expected = position + 1;
  }

  const missingTail = requiredNormalized.filter((title) => !seen.includes(title));
  if (missingTail.length > 0) {
    errors.push(
      `section-order: missing required sections: ${missingTail.join(", ")}.`,
    );
  }

  return errors;
}

export function looksLikeReconstructionMarkdown(text: string): boolean {
  const headings = extractHeadings(text);
  return headings.some(
    (heading) => normalizeTitle(heading.title) === "bound event",
  );
}
