---
title: Method
description: The Gap Last method. Say what happened. Use what is already known, fully. Name what is still unknown. Only then propose a hypothesis, and only for the question you named.
order: 1
---

The **Gap Last method** is what you do when something arrived, you did not get to rerun it, and a story is already forming. You can do this without an account or an agent. The skill and the CLI keep the same order. The formal name is **constraint-first reconstruction**. A [working draft of the method paper](/paper) is here if you want the longer argument.

Say ***what*** happened as tightly as the evidence allows, and mark how sure you are. Use what is already known, fully: the geometry, the timing, what the record can and cannot show. Name what is still unknown, as a question. Only then propose a hypothesis, and only for the question you named. When better evidence arrives, expect the question to move, and let it.

The order is a reasoning safeguard. A thin cause aims the next warning system, or the next fix, at the wrong object. Someone will build those on whatever cause you write down. The method does not promise that a causal account will always be available.

A labeled ordinary incident, an intermittent CI unlink, is on the [home page](/).

## Four lines

For a person with no tool running:

1. The ***what***, as tightly as you can say it. Mark it.
2. One mechanism the geometry, timing, or record already eliminates.
3. The leftover gap, named as a question.
4. Whether ***how*** or "who caused it?" is even the right question yet.

## One-screen

When you have one breath, say four things and stop:

1. What happened, and how sure you are.
2. Stories the evidence already eliminates.
3. What is still unknown, as questions.
4. Whether later evidence moved the question.

Do not smuggle a cause you have not yet allowed yourself.

## The reconstruction

When you want the work to stay, you fill a file. Nine sections, that order only. A new explanation may stand only in a question you have already named.

1. Bound event. What happened, where, when, at what scale.
2. Fact layers. What you can settle, what is still provisional, what is open.
3. Causal chain. What started it, what carried it, who stood in its path, what anyone did after.
4. Hoop failures. Stories the traces already eliminate.
5. Named residual gaps. The leftover questions. The only places a new hypothesis may stand.
6. Allowed hypotheses. Only those that answer a named leftover question.
7. Discriminating traces. What would settle a question if it arrived.
8. Remainder. What is still unknown, stated as a result.
9. Reconstruction log. If later evidence changed the object: old question, new question.

[Template](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/docs/reconstruction-template.md).

### Excerpt from the desk-stamp incident

Illustrative. Same fictional CI flake as the [home page](/).

**Bound event.** `pnpm test` returned `EPERM: unlink dist/cli.js` on two of three GitHub Actions runs for commit `a1b2c3`, 8 September 2026.

**Hoop failure.** “The committed test source changed between the failing and passing runs” is eliminated: the same commit was used locally and on all three Actions runs. That does not eliminate a flaky or environment-sensitive test. If nothing yet contradicts a story, write “none yet justified.”

**Named residual gap.** Why did unlink fail on two of three Actions runs for the same commit?

**Allowed hypothesis.** Leftover `dist/` on a reused runner. Points at that gap only.

**Discriminating trace.** The next failure’s log shows `dist/` present before `tsc`.

A flood, a death, a failed launch, a family story: each is a chain, and each link asks a different question. Early stories press those questions into one. The file keeps them apart.

The last section is the plaque on the fence. It says which gap this closed, how sure you were, and what evidence would move it, so the next person who finds what you built does not have to guess why it stands. That is the debt the Gap Last method owes [Chesterton's Fence](/posts/2026-09-04-the-other-side-of-chestertons-fence).

## Stop questions

Use these in a conversation without running the whole file:

- What part of the chain is this claim about: the start, the carry, or who stood in the path?
- Has the evidence already eliminated it?
- Is this a leftover question, or leftover storytelling?
- Did new evidence move the object, and if so, what is the question now?
- Is this an inherited fence you are about to clear unread, or a new one you are about to build on a first noun?
- Are you treating the leftover you named as the last gap, or as the question you have now?

A shorter form: is that the ***what***, or are you already on a ***how***?
