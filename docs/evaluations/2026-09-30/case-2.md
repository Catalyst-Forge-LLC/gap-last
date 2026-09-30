# Agent handoff assessment

The declared goal is for an agent to carry an `inspect-one` report into `summarize-one` without asking for pasted findings. Nothing is reported broken. The question is whether the existing file handoff already meets that goal.

The supplied `contracts.md` says that `inspect-one` writes a JSON file using `--format json` and `--output <file>`, and `summarize-one` reads a JSON file path. It also states that the documentation lacks a handoff recipe. This supports trying a recipe before an adapter, orchestrator, or new tool.

Proposed recipe, not executed:

```text
inspect-one <repo> --format json --output <report.json>
summarize-one <report.json>
```

The agent should pass the exact output path to the second command after successful completion of the first. This requires local execution and read/write access to the selected report location, not user transcription.

Recommend documenting and trying this recipe. There is no runnable implementation in this packet, so the handoff is supported by the supplied contracts but remains unverified. Acceptance is that an agent writes the report and obtains the expected count from that same file without a paste step; the fixture contract predicts one finding. A failed handoff due to incompatible data would justify investigating a narrow adapter. A failure of path access or agent command sequencing would instead reopen those constraints. No tools were edited.
