#!/usr/bin/env node
/**
 * Publish the living spec and paper as FilePress pages.
 * Source of truth stays in docs/. Strip draft: true so the site can render them.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pages = join(root, "site", "pages");
mkdirSync(pages, { recursive: true });

function publish(srcRel, destName, extraFrontmatter) {
  const raw = readFileSync(join(root, srcRel), "utf8");
  if (!raw.startsWith("---")) {
    throw new Error(`${srcRel} is missing frontmatter`);
  }
  const end = raw.indexOf("\n---", 3);
  if (end < 0) throw new Error(`${srcRel} has unclosed frontmatter`);
  const fmLines = raw
    .slice(3, end)
    .split("\n")
    .map((line) => line.replace(/\r$/, ""))
    .filter((line) => !/^draft:\s*/.test(line));
  for (const [key, value] of Object.entries(extraFrontmatter)) {
    const pattern = new RegExp(`^${key}:`);
    const next = `${key}: ${value}`;
    const idx = fmLines.findIndex((line) => pattern.test(line));
    if (idx === -1) fmLines.push(next);
    else fmLines[idx] = next;
  }
  const body = raw.slice(end + 4).replace(/^\r?\n/, "");
  writeFileSync(
    join(pages, destName),
    `---\n${fmLines.join("\n")}\n---\n\n${body}`,
  );
}

publish("docs/gap-last-tool-spec.md", "spec.md", {
  order: "4",
  description:
    '"Public manual for Gap Last. The reconstruction order, not a second homepage."',
});
publish("docs/constraint-first-reconstruction.md", "paper.md", {
  order: "5",
  description:
    '"Working paper: how to shrink the unknown before you invent it."',
});
