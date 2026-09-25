---
title: Reconstruct what happened before committing to an explanation.
description: Reconstruct what happened before committing to an explanation. Gap Last separates observations, constraints, and unresolved questions, then proposes hypotheses that address the remaining gap.
order: 0
---

A test failed twice on CI, passed locally, and passed on the third Actions run with no code change. A story is already forming. Gap Last is the pause that writes down what you observed, what you can already rule out, and what is still unknown, before you commit to a cause.

The formal name is **constraint-first reconstruction**. You can use the four-line exercise without a paper, an account, or an agent.

## A worked incident (illustrative)

Fictional weekend CLI, **desk-stamp**. Labeled example, not a scientific validation of the method.

**Observed**

- `pnpm test` failed twice on GitHub Actions `ubuntu-latest` at 09:14 and 09:31 on 8 September 2026.
- The same commit passed locally on Windows.
- The error was `EPERM: unlink dist/cli.js`.
- The third Actions run passed. No source change.

**Eliminated (only what the evidence rules out)**

- “The committed test source changed between the failing and passing runs.” The same commit was used locally and on all three Actions runs.

That does **not** eliminate a flaky test, an environment-sensitive test bug, or timing dependence. Passing once is not evidence that the test cannot be faulty. If nothing yet contradicts a story, write “none yet justified” rather than inventing an elimination.

**Remaining question**

- Why did unlink fail on two of three Actions runs for the same commit?

**Candidate hypothesis**

- A leftover `dist/` from a previous job on a reused runner. The directory existing before this compiler step does not yet tell us how it got there. Inspect the checkout, cache restore, earlier steps, and runner workspace history before choosing that explanation.

**What would distinguish it**

- The next failure’s Actions log showing `dist/` already present before `tsc`.

The hypothesis is not the established cause. It is a candidate that answers the named question. When the evidence is thin, the reconstruction may stop with observations, open questions, and no justified elimination or candidate.

## Four lines, no tool required

1. The ***what***, as tightly as you can say it. Mark how sure you are.
2. What the evidence rules out, or “nothing yet.”
3. The leftover gap, named as a question.
4. Whether ***how*** or “who caused it?” is even the right question yet.

Those four lines are the start. When you want the work to stay, fill the [nine-section reconstruction](/method). When you want an agent to keep that order, [install the skill in your agent](/run). The CLI in this repo checks a reconstruction file. It does not call a model.

[The Gap Last method](/method) · [Install in your agent](/run) · [Posts](/posts) · [GitHub](https://github.com/Catalyst-Forge-LLC/gap-last)

## What the pieces are for

| Piece | Job |
| --- | --- |
| Four-line exercise | A conversation or a sticky note. No install. |
| Nine-section file | The artifact you keep. Outline and a filled excerpt: [Method](/method) |
| Skill | An agent follows the same order. [Install in your agent](/run) |
| CLI | Validates or emits the file. No model call |
| [Working paper](/paper) | The longer argument. Not required to start |
| [Posts](/posts) | Langtang, Chesterton's Fence, and [Gap Last is not the last gap](/posts/2026-09-23-gap-last-is-not-the-last-gap) |

npm [`gaplast`](https://www.npmjs.com/package/gaplast) is a name hold (`0.0.0`, rechecked 10 September 2026). It does not contain this implementation. Do not `pnpm add gaplast` expecting the skill or the CLI.

The week that named this is a late-August 2026 flood off [Langtang Lirung](/posts/2026-08-31-langtang-the-bound-moved). You do not need that event to begin.

The name is [Gap Last, not Last Gap](/posts/2026-09-23-gap-last-is-not-the-last-gap). Naming a leftover question is not the same as knowing you have the last one. A later trace can move the question.

Chesterton's Fence says find out why the fence stands before you clear it away. Gap Last stands on [the other side of that fence](/posts/2026-09-04-the-other-side-of-chestertons-fence): name the gap before you build one. Both refuse a cause written down ahead of the question.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
