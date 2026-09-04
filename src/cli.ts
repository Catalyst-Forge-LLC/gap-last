#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { processFailureMessage, processInput, processOk } from "./process.js";

const usage = `gaplast — emit or validate a reconstruction.

Don't invent a cause until you can name the gap.

Usage:
  gaplast [file]           read file or stdin; write markdown
  gaplast validate [file]  validate reconstruction markdown or JSON
  gaplast --help

JSON reconstructions are projected to markdown. Markdown reconstructions
are checked for section order, then re-emitted. A raw packet that is not
a reconstruction gets a thin open bound and no hypotheses. The CLI does
not call a model and does not hunt the web.
`;

function readInput(path: string | undefined): string {
  if (!path || path === "-") {
    return readFileSync(0, "utf8");
  }
  return readFileSync(path, "utf8");
}

function main(argv: string[]): number {
  const args = argv.slice(2);
  if (args.includes("-h") || args.includes("--help")) {
    process.stdout.write(usage);
    return 0;
  }

  const command = args[0] === "validate" ? "validate" : "emit";
  const file = command === "validate" ? args[1] : args[0];

  let text: string;
  try {
    text = readInput(file);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    process.stderr.write(`gaplast: could not read input: ${message}\n`);
    return 2;
  }

  let result;
  try {
    result = processInput(text);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    process.stderr.write(`gaplast: ${message}\n`);
    return 1;
  }

  if (command === "validate") {
    if (result.kind === "skeleton") {
      process.stderr.write(
        "gaplast: input is not a reconstruction (no Bound event section).\n",
      );
      return 1;
    }
    if (!processOk(result)) {
      process.stderr.write(`${processFailureMessage(result)}\n`);
      return 1;
    }
    process.stderr.write("ok\n");
    return 0;
  }

  if (result.kind === "reconstruction" && !processOk(result)) {
    process.stderr.write(`${processFailureMessage(result)}\n`);
    return 1;
  }

  process.stdout.write(result.markdown);
  if (!result.markdown.endsWith("\n")) process.stdout.write("\n");
  return 0;
}

process.exitCode = main(process.argv);
