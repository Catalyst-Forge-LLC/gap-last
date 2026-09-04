#!/usr/bin/env node
/**
 * Project the method paper onto site/pages/paper.md as a marked draft.
 * Source of truth stays docs/constraint-first-reconstruction.md.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcPath = join(root, "docs", "constraint-first-reconstruction.md");
const destPath = join(root, "site", "pages", "paper.md");

const src = readFileSync(srcPath, "utf8");
const fm = src.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
let body = fm ? src.slice(fm[0].length) : src;
body = body.replace(/^\s*# Constraint-first reconstruction\s*\r?\n+/, "");

const out = `---
title: Constraint-first reconstruction
description: Working draft of the Gap Last method paper. How to shrink the unknown before you invent it.
order: 4
---

This is a working draft. The public order is on [the Gap Last method](/method). This page is the longer argument, still in motion.

${body.trim()}
`;

writeFileSync(destPath, out);
