import { readFileSync } from "node:fs";
const report = JSON.parse(readFileSync(0, "utf8"));
if (!Array.isArray(report.findings)) throw new Error("Expected findings array");
process.stdout.write(`${report.findings.length} finding(s)\n`);
