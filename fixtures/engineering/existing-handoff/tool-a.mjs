const report = { findings: [{ id: "f1", message: "Check the install path." }] };
process.stdout.write(process.argv.includes("--json")
  ? `${JSON.stringify(report)}\n`
  : "# Findings\n\nf1: Check the install path.\n");
