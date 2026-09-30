# Gap Last engineering evaluation — 2026-09-30

A fresh-context Codex evaluator assessed each of the six fictional cases
once using the installed `gaplast-engineering` pack. Review against the
[behavior rubric](../fixtures/engineering/README.md) found that all six
showed the intended decision behavior. No skill correction was indicated.

This was one bounded evaluation, not a reliability estimate, a comparison
with an unassisted agent, or scientific validation of Gap Last. It does
not establish behavior on real repositories or across every host.

## Inputs and isolation

- Source revision: `a30c45852d575f5fea40ffefed273cb8d76582b6`.
- Installed pack: four source-matching files copied from the generated
  site installation; ZIP SHA256
  `e74c06681d659673612f28611b9863d81c182ac4cf7c3c2434bf72ea0d8d6a5a`.
- Host: Codex desktop on Windows, PowerShell, Node 24.17.0.
- The evaluator received the installed skill and six neutrally numbered
  raw case directories. The rubric, expected answers, and prior findings
  were excluded from its context. Each case was assessed once by the
  same evaluator; these are not six independent evaluator samples.
- Local checks and temporary assessment files were authorized. Product
  edits, network activity, publication, and deployment were outside scope.
- Raw input files remained unchanged. The six original result files are
  retained below so review does not depend on the temporary workspace.

## Observed decisions

| Case and raw input | Retained result | Evidence and outcome |
| --- | --- | --- |
| [Dashboard](../fixtures/engineering/dashboard/request.md) | [Case 1](evaluations/2026-09-30/case-1.md) | Treated the absent dashboard as an exploratory idea; named the missing cross-repository job and justified no build. Explicitly reported document inspection only. |
| [Declared goal](../fixtures/engineering/declared-goal/request.md) | [Case 2](evaluations/2026-09-30/case-2.md) | Accepted the desired handoff without inventing a defect; proposed an existing-file recipe and acceptance check. Explicitly labeled the commands unexecuted because no implementation was supplied. |
| [Existing handoff](../fixtures/engineering/existing-handoff/request.md) | [Case 3](evaluations/2026-09-30/case-3.md) | Inspected both scripts, discovered A's undocumented `--json`, and ran the pipeline successfully: `1 finding(s)`. Recommended documenting the option and recipe rather than adding an adapter. |
| [Semantic mismatch](../fixtures/engineering/semantic-mismatch/request.md) | [Case 4](evaluations/2026-09-30/case-4.md) | Distinguished completed analysis from checks plus human release approval. Rejected direct status forwarding and identified missing decision evidence; no runtime or release claim. |
| [Different validators](../fixtures/engineering/no-change/request.md) | [Case 5](evaluations/2026-09-30/case-5.md) | Ran 36 assertions over nine inputs and supplied callers. Preserved uppercase legacy import versus lowercase public issuance; recommended no consolidation without a demonstrated maintenance benefit. |
| [Caching proposal](../fixtures/engineering/reopen/request.md) | [Case 6](evaluations/2026-09-30/case-6.md) | Ran fresh/cached diagnostics and recognized fixed fictional accounting, not measured timings. Parsing changed from 5 to 0 while rendering stayed 400; reopened the question around rendering and real stage evidence. |

The retained [validator check](evaluations/2026-09-30/no-change-check.mjs)
preserves the evaluator's assertions, with only its import path rebased
to the canonical fixture. Replay from the repository root with
`node docs/evaluations/2026-09-30/no-change-check.mjs`. Case 3 and case 6
retain their exact commands and outputs; run them from their corresponding
fixture directory. Cases 1, 2, and 4 have no runnable implementation.

## What remains unverified

The successful pipeline covers one report and count, not arbitrary schema
compatibility. Validator checks cover the supplied local contracts and
callers. The caching case supplies no production trace or performance
target. The exercise did not test automatic skill discovery in host UIs,
real portfolio integrations, repeated runs, or changes in model behavior.
These limits remain visible in the retained assessments. Future evidence
should justify a narrow correction rather than another mandatory procedure.
