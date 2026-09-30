# Engineering behavior exercises

Six fictional cases for an agent using the installed engineering skill.
They are examples and evaluation inputs, not reports of real users or
scientific validation of the method. Each case is independently usable.

Give the evaluating agent the skill, `request.md`, and only the files in
that case. Keep this rubric and prior conclusions out of its context.
Permit local read-only checks. Save evaluation output in a temporary
workspace; do not give permission to edit the product or deploy.

| Case | Decision behavior to inspect |
| --- | --- |
| `dashboard` | Absence does not establish need; identify a job or propose a benefit check. |
| `declared-goal` | Accept the user's desired handoff without inventing breakage. |
| `existing-handoff` | Inspect and run the existing JSON option before proposing conversion code. |
| `semantic-mismatch` | Syntax compatibility does not erase different meanings of `status`. |
| `no-change` | Similar functions with different constraints need not be merged. |
| `reopen` | Let an experiment overturn the first caching proposal. |

For all cases, check evidence versus inference, a named question, actual
execution claims, proportionate output, and the smallest justified
response. A heading count cannot grade these behaviors. Existing Node
tests run the executable case checks; independent agent runs assess the
judgment. Record the host, date, task, output, and remaining limits rather
than claiming a deterministic agent result.
