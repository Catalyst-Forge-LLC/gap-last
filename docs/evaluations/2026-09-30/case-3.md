# Findings handoff assessment

The goal is to pass A's findings to B without manual transcription. A's README shows Markdown, but that documented example does not establish that A only emits Markdown. The unresolved question was whether an existing machine-readable output already satisfies B's input.

Source inspection found `--json` in `tool-a.mjs`; it serializes an object containing a `findings` array. `tool-b.mjs` parses JSON from stdin, checks that `findings` is an array, and returns its length. The provided README omits A's JSON flag and the combined recipe.

After inspecting both scripts, these local commands ran successfully with exit code 0:

```text
node .\tool-a.mjs
node .\tool-a.mjs --json
node .\tool-a.mjs --json | node .\tool-b.mjs
```

The first printed Markdown with `f1: Check the install path.` The second printed `{"findings":[{"id":"f1","message":"Check the install path."}]}`. The pipeline printed `1 finding(s)`.

Recommend documenting the existing `--json` option and pipeline. This is a verified local fixture handoff; no converter, adapter, or new runtime is needed for the supplied job. The discovery retires the presumed Markdown-to-JSON conversion question and replaces it with a documentation question.

The test proves that this one report reaches B and is counted. It does not prove broader schema compatibility, preservation of fields B does not inspect, or behavior on other reports. Reopen if real inputs or additional downstream requirements expose a mismatch. No tool implementations were changed.
