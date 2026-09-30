# Contracts

inspect-one accepts `--output <file>` and `--format json`; it writes
`{"findings":[{"id":"f1","message":"Example"}]}` for this fixture.
summarize-one reads a JSON file path and returns the findings count.
Both are local CLIs. There is no runnable implementation in this packet.

The README documents each command separately but has no handoff recipe.
