# Validator consolidation assessment

Keep the two validation contracts separate. The functions look similar, but their callers serve different jobs: `importRecord` must accept uppercase ASCII in legacy IDs, while `issuePublicRecord` must enforce lowercase ASCII for new public IDs and URL consistency.

`validators.mjs` implements those constraints explicitly: the imported-ID regex accepts `[A-Za-z0-9]`, and the public-ID regex accepts `[a-z0-9]`; both require strings of length 1 through 16. The two exported callers use the corresponding validator. No additional callers are supplied.

The distinguishing check was whether an uppercase legacy ID produces different outcomes while shared boundaries agree. A temporary `local-check.mjs` exercised both validators and both callers. Running `node .\local-check.mjs` exited 0 and passed 36 assertions over nine inputs:

- `Legacy7` was accepted by the import path and rejected by the public path.
- `public7`, `123`, and a 16-character lowercase ID were accepted by both.
- A 17-character ID, an empty string, punctuation, a non-ASCII character, and a non-string were rejected by both.

A single permissive validator would weaken public issuance; a single restrictive validator would reject supported imports. A shared internal helper with explicit policy could preserve behavior, but the supplied evidence provides no maintenance problem or benefit that warrants adding that abstraction. Recommend no implementation change.

These checks cover the local fixture and supplied callers, not every possible input or a larger application's usage. Reopen if duplicated maintenance becomes demonstrably costly, or requirements converge; any consolidation must preserve the divergent uppercase case and the shared boundaries. Only the temporary check and this assessment were added; the implementation was preserved.
