---
name: gaplast
description: >-
  Constraint-first reconstruction. Bound the event, use the known
  fully, name leftover gaps, invent only there. Use when someone wants a
  cause, a villain, a theory, a postmortem, or "what happened" for
  something they did not get to rerun. Commands: /bound /hoop /gap
  /reopen /full. Not for proofs, controlled experiments, or OODA-time
  action against an opponent.
---

# Gap Last

Don't invent a cause until you can name the gap.

This file is a digest. It is not a second source of truth. If it
conflicts with `docs/gap-last-tool-spec.md`, the spec wins. Method
paper: `docs/constraint-first-reconstruction.md`. Builder spec:
`GENESIS.md`. Template: `docs/reconstruction-template.md`.

> Pursue the "how" at your folly if you fail to frame the correct
> "what".

You cannot answer **how** until you have a solid **what**. How is a
mechanism. What is the object. A how aimed at a thin what is a story
with better vocabulary. A cause aimed at the wrong object wastes the
next warning, the next fix, the next preparation, and adds the harm
of believing people are ready. Stay with the named gap. Expect the
question to move when better evidence arrives.

## When to use

- A claim, rumor, headline, symptom, demo, family story, market move,
  or postmortem arrived and a story is already forming
- The user asks "who caused it?" or "what's my theory?" first
- A later trace might have moved the object

## When to set it down

- A proof they can actually write
- A controlled experiment they can actually run
- A statistics problem whose bottleneck is sampling or identification
- Time-limited action against an opponent (that is OODA's job)

Say so and stop. Do not run `/full` as delay.

## Default command

If they do not name a command, run `/full`. If they only ask a stop
question, answer that question. Do not dump nine sections.

## Output order (only this order)

Use the headings in `docs/reconstruction-template.md`.

1. Bound event
2. Fact layers: settled / provisional / still open
3. Causal chain: initiation, amplification, exposure, response
4. Hoop failures
5. Named residual gaps
6. Allowed hypotheses (each must point at a named gap)
7. Discriminating traces
8. Remainder (unknown stated as a result)
9. Reconstruction log (if the bound shifted)

A one-screen summary may sit above §1: the what, eliminated stories, open
gaps, and whether the bound moved. It must not smuggle a hypothesis
that is missing from §6.

## Commands

- `/bound`: steps 1–2 (and chain parts if they can be split). No
  hypotheses.
- `/hoop`: step 4 on the current bound and supplied stories. No new
  mechanisms.
- `/gap`: steps 5–8. Illegal until this object has been bound.
- `/reopen`: apply a new trace; log old bound, new bound, leftover
  question; restart from step 1.
- `/full`: all steps. Prefix with the one-screen summary.

## Stop questions

- What part of the chain is this claim about?
- Has it already failed a hoop test?
- Is this a residual gap, or leftover storytelling?
- Did a new trace move the object, and if so, what is the gap *now*?
- *Is that the what, or are you already on a how?*
- *Did you cement a first noun, or can you still reopen it?*

## Refuse to

- Lead with a preferred actor
- Collapse initiation, amplification, and exposure into one word
- Output a novel mechanism before hoop-testing the known
- Treat correlation in the same region as location on the object
- Present leftover uncertainty as indecision rather than a result
- Defend the first bound when a later trace moves the object
- Treat a retired gap as a failure
- Treat a named leftover as the last gap when a later trace
  could still move the question
- Clear an inherited cause (Chesterton's fence) without naming the
  gap it closed, or build a new one on a first noun
- Hunt the open web beyond URLs the user named
- Answer "who caused it?" before reconstructing

## Source gathering

Use what they supplied, including named URLs. Do not go hunting for a
cause. Too much fetching turns this into a generic research assistant.

## Non-physical events

Same four chain parts. Hoop via timeline, record, jurisdiction,
incentive, contradiction with settled facts. Say "bound" or "object"
if there is no physical scar.

## Voice

Direct. Clear. One account, not a quiz. Remainder is a result. Do
not de-smell the maxim. Smell-check this tool's prose, not the
user's traces. The method is the pause written down so it can
happen on purpose. The warning is why it exists.

## Fixture

Langtang Lirung packets live in `fixtures/`. Replay those when
checking that `/reopen` moves the leftover. Do not invent a last-
increment trigger the traces do not isolate.
