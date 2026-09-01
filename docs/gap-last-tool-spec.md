---
title: "Gap Last: tool spec"
date: 2026-08-31
draft: true
tags: [catalyst-forge, gap-last, tools]
---

# Gap Last: tool spec

*Instrument contract, 2026-08-31. Paper:
`docs/constraint-first-reconstruction.md`.*

**Working title:** Gap Last
**Site:** [gaplast.dev](https://gaplast.dev)
**npm:** [`gaplast@0.0.0`](https://www.npmjs.com/package/gaplast)
(Apache-2.0 name hold, 2026-08-30)
**Formal method:** Constraint-first reconstruction

---

## What it is

Gap Last is the default way to understand something you
observed, were told, or otherwise came to be aware of. Bound
the thing. Spend what is already known. Name the leftover
gaps. Only then invent a cause, a theory, or a next question.

It is not only for disasters and comment-section fights. A
parent, a patient, a founder, and an agent meet the same
shape: something arrived, you did not get to rerun it, and a
story is already forming.

The default holds until something else is shown to be the
right instrument. If you can run the experiment, run it. If
you can prove the theorem, prove it. If the bottleneck is
sampling, do the statistics. Those are graduations, not the
starting posture.

Everyday sentence: *Don't invent a cause until you can name the
gap.*

The hinge under that sentence: you cannot answer **how**
something happened until you have a solid **what**. How is a
mechanism. What is the object. A how aimed at a thin what is
just a story with better vocabulary.

> Pursue the "how" at your folly if you fail to frame the
> correct "what".

The prohibition is the product. The gap moves when the object
moves. New stories still have to point at the new gap.

## The wrong question

"Who caused it?" and "what's my theory?" skip the what. The
what of the event is the bound: what happened, where, in what
order, at what scale. Skip that and every clever mechanism you
invent will scale the wrong object.

The common failure is not a missing how. It is cementing a
flawed or incomplete what too fast. Limited perspective, a
favorite mental model, a preconceived villain, an inclination
you already had: any of those will hand you a noun and call it
settled. Wednesday's "glacier collapse" was that move. Once
the what is cemented, every later how looks like work.

A collapsed chain is a wrong question. "China or climate?" was
two late-stage stories competing before the scar, the runout,
and the people in the path were even separated. Right answers
to that pair still leave you lost, because the question was
the elephant: one noun doing the work that four parts of a
chain were supposed to do.

## Who it is for

- Anyone trying to understand a thing they did not get to
  rerun
- A learner or seeker who can feel a story hardening
- A team writing a postmortem
- An AI agent that otherwise jumps to a villain
- Anyone who already learns this way and wants the stop rule
  named

## When you can set it down

When the default has been shown otherwise:

- A proof you can actually write
- A controlled experiment you can actually run
- A statistics problem whose bottleneck is sampling or
  identification
- Time-limited action against an opponent (that is OODA's job,
  and the clock is real)

Domain expertise is not a substitute for the order. It is what
you spend in step 4.

## What the tool does

**Input:** a thing you observed, were told, or became aware
of. Optional competing stories. Links if you have them.

**Output, in this order only:**

1. Bound event: what happened, where, when, at what scale
2. Fact layers: settled / provisional / still open
3. Causal chain parts: initiation, amplification, exposure,
   response
4. Hoop failures: mechanisms the traces already kill
5. Named residual gaps: the only legal homes for a new
   hypothesis
6. Allowed hypotheses: only those that point at a named gap;
   more than one if needed
7. Discriminating traces: what would move a gap toward settled
8. Remainder: what is still unknown, stated as a result
9. Reconstruction log: if a later trace changed the object,
   record the old bound, the new bound, and what the leftover
   question became

If a user asks "who caused it?" first, the tool does not
answer first. That is often the wrong question. It
reconstructs, then answers only inside the gaps that survive.

If a later trace moves the object, the tool reopens step 1. It
does not treat that as humiliation or as a license to invent.

## The stop questions

Use these in a conversation without running the whole
protocol:

- What part of the chain is this claim about?
- Has it already failed a hoop test?
- Is this a residual gap, or leftover storytelling?
- Did a new trace move the object, and if so, what is the gap
  *now*?

A shorter form, when you only have one breath: *Is that the
what, or are you already on a how?*

And when the what looks done: *Did you cement a first noun, or
can you still reopen it?*

## How a better trace can change the work

Settled, provisional, and open are labels for the current
description, not a final map. A better trace can:

- **kill** a mechanism (distant resonance, ice-only burst)
- **shrink** a gap (rock led)
- **shift** a gap (the last increment now has to act on
  bedrock, not hanging ice alone)
- **split** a gap (preconditioning of the face versus the
  flood's water budget versus who was in the path)

The first gap is often retired rather than answered. A tighter
what creates a different leftover.

## Learners and OODA

I posed this to Grok after the Thursday images: effective
learners already run a feedback loop. It is a cousin of OODA.
Grok named how decide differs.

Effective learners do not defend the first frame. They take in
a trace, update the object, throw out mechanisms that no
longer fit, and only then spend attention on what is still
open. When Thursday's images arrived, the move was to
re-orient: rock led, ice followed, the leftover question
moved.

I have used OODA for years as the correction term in a life
that does not get a smooth path. Walking is a controlled fall.
The smoothness depends on the speed of your OODA loops. Boyd
put the danger in **orient**, not in observe. Bad orientation
freezes a story. Good orientation destroys the old picture
fast enough to act.

Gap Last is a slower, reconstructive version of that loop:

1. Observe and bound
2. Orient by constraint and elimination
3. Decide only inside a named gap
4. Act by looking for a discriminating trace
5. Loop when the bound event shifts

I called it a cousin, not the same thing. OODA is for
time-limited action against an opponent. Gap Last is for
understanding, including the cases where acting on a false
cause is worse than leaving a gap. You still loop. You refuse
to treat "decide" as "pick a villain."

Agents and comment threads fail the same way: first plausible
story, then commitment. A learner is allowed to retire a
question.

## Worked miniature: Langtang Lirung

The method was named on this flood. Same order applies to
quieter things.

**First claim (08-30):** Chinese hydro construction caused a
Himalayan glacier collapse, and media will call it climate.

**Wednesday bound (provisional):** ice came off Langtang
Lirung. Cloudy, dusty images. Enough to say ice moved. Not
enough to name what failed first.

**Thursday bound (after a clearer satellite pass):** north-face
rock avalanche on Langtang Lirung, ice included, then a long
runout. Shugar: a big bedrock failure that took part of the
glacier with it. Cook: the rock collapsed; the glacier was
cargo. Source writeup:
[Onmanorama, 2026-08-28](https://www.onmanorama.com/news/world/2026/08/28/satellite-images-reveal-massive-bedrock-collaps-nepal-floods.amp.html).

Gap Last should produce something like:

- **Initiation:** bedrock under the glacier tongue failed on
  the north face (~5,200 m). Ice went with the rock. A
  tighter what, not a new villain. The Wednesday label
  "glacier collapse" failed a hoop test as the whole
  initiation.
- **Amplification:** the mass dropped into Lendi/Lhende Khola,
  stayed mobile in a steep narrow valley, and ice melt plus
  sediment turned it into a debris flood. River color green to
  brown is sediment load, not a separate mystery.
- **Exposure:** villages and border works buried downstream.
  The death count is a flood story even if the start is a
  slope story. Hydropower works sat in the runout. That can
  explain deaths without explaining the scar.
- **Hoop failures:** distant blasting "ringing" a mountain
  like a bridge; an ice-only burst as the whole start.
  Onmanorama and the Cook/Shugar interviews do not mention
  construction at the scar.
- **Residual gaps (now):** why that particular slab let go
  that morning (thaw, water in joints, a last increment nobody
  has isolated). Climate as a possible precondition (weakening
  permafrost "glue") is live; Cook and Shugar will not call it
  the precise trigger. The flood's water budget and who was in
  the path are separate gaps, not rivals to the scar.

The satellite story did not fill the last-increment gap. It
killed a simpler ice-only picture. That is what spending the
known is supposed to do.

The leftover question moved: from "why did that ice detach?"
to "why did that rock slab fail, taking ice with it?" The
first question was aimed at the wrong object.

## Agent contract

An implementation should refuse to:

- lead with a preferred actor
- collapse initiation, amplification, and exposure into one
  word
- output a novel mechanism before hoop-testing the known
- treat correlation in the same region as location on the scar
- present leftover uncertainty as indecision rather than a
  result
- defend the first bound when a later trace moves the object
- treat a retired gap as a failure, or a tighter object as a
  new license to invent
- treat "one-off event" as a permission slip to skip the
  order on everything else

Suggested commands:

- `/bound`
- `/hoop`
- `/gap`
- `/reopen`: apply a new trace; record how the object and the
  leftover question moved
- `/full`: run the steps, including the log if the bound has
  shifted

Package name on the registry: `gaplast`
Invoke: `gaplast`

## Guardrails

- A hypothesis is illegal until it points at a named gap.
- First principles are for killing mechanisms, not decorating
  a favorite one.
- Do not freeze an early description. Names of the event will
  change. Earthquake to GLOF to glacier collapse to
  bedrock-plus-ice is the warning. A cemented what is how a
  limited perspective, a favorite model, or a preconceived
  inclination becomes the whole object.
- Keep multiple stories alive in a real gap. One leftover
  cause is often a ruling theory in costume.
- The framework is not a ruling theory. If an experiment
  exists, run it.
- Stay open. Stay constrained. New stories still have to
  point at the new gap.
- Track what you do not know on purpose. Remainder is a
  result.

## Outstanding product questions

- How much source-gathering should the agent do before
  bounding the event? Too little and the description freezes
  early. Too much and the tool becomes a generic research
  assistant.
- Should Gap Last score confidence, or only separate settled /
  provisional / open?
- How does it handle events that are not physical (policy
  fights, personal decisions, market moves) without stretching
  "scar" and "trace" into mush? This matters more now that the
  default is broader than a landslide.
- What is the minimum useful output for a non-tech user? A
  one-screen version might be: the what, killed stories, open
  gaps, and (if needed) how the bound moved.
- Versioning: the Langtang case answers "should it keep a
  reconstruction log?" with yes. The public description
  changed in a day. The tool should show Wednesday's bound and
  Thursday's bound, not only the latest.

## Failure modes

- **Slogan drift:** people say "Gap Last" and still start with
  a theory.
- **False completeness:** a neat writeup that still missed a
  trace.
- **Partisan laundering:** using the ritual to defer a
  conclusion the traces already support.
- **Category error:** applying it as delay where a trial, a
  proof, or OODA (act now) is the right instrument.
- **Frozen bound:** treating the first label as settled so a
  better trace has nowhere to land. Cementing an incomplete
  what, then spending the rest of the day on how.
- **Single-pass orientation:** first plausible story, then
  commitment. The learner's opposite.
- **Narrowing the default:** treating Gap Last as a disaster
  toy and going back to invent-first everywhere else.

## Changelog

- **2026-08-30:** Method named. Package name set to `gaplast`.
- **2026-08-31:** Thursday satellite pass folded in.
  Gap-moves, reconstruction log, `/reopen`, OODA cousin.
  Default broadened past one-off events. Hinge and maxim
  hung. Order and steps preserved.
- **2026-09-04:** Vault paths and sister-project lineage
  removed from this tree. Method contract kept.
