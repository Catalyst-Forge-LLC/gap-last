// A controlled fictional packet: stage accounting, not wall-clock timing.
// The query can carry a later trace; inspect --fresh and --cached results.
const cached = process.argv.includes("--cached");
const stages = { parseMs: cached ? 0 : 5, renderMs: 400 };
process.stdout.write(`${JSON.stringify({ kind: "fixture", cached, ...stages,
  totalMs: stages.parseMs + stages.renderMs })}\n`);
