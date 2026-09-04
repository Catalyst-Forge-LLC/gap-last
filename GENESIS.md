# GENESIS: Gap Last

Status: builder spec, 2026-08-31. What the tool does, not how to code it.
Hand this file to a coding agent. Do not invent a stack until the
order below can be run.

**Product:** Gap Last
**Method:** Constraint-first reconstruction
**Sentence:** Don't invent a cause until you can name the gap.
**Hinge:** You cannot answer how until you have a solid what.
**Maxim (protect, do not de-smell):**

> Pursue the "how" at your folly if you fail to frame the correct "what".

**Site:** [gaplast.dev](https://gaplast.dev)
**npm:** [`gaplast`](https://www.npmjs.com/package/gaplast) (Apache-2.0
name hold `0.0.0`, 2026-08-30; user publishes, agents do not)
**Invoke:** `gaplast`

Method sources live in `docs/`. If this file and a method source
conflict, the tool spec wins for product behavior and the paper
wins for rationale. Do not copy unpublished drafts into this tree.
The Grok transcript stays out of this repo.

---

## 0. Summary

Gap Last is the default way to understand something you observed, were
told, or otherwise came to be aware of. Bound the thing. Spend what is
already known. Name the leftover gaps. Only then invent a cause, a
theory, or a next question.

The prohibition is the product. The tool exists because people and
agents skip that order: they cement a first noun, collapse a chain into
one villain, and call the story work.

This repo turns that stop rule into something you can run: a checklist
for a person, a skill for an agent, later a CLI and a site. v1 is the
skill plus a reconstruction artifact that keeps the nine outputs in
order and records when a later trace moves the object.

The flood that named it (Langtang Lirung, late August 2026) is the
golden fixture, not the scope. A parent, a patient, a founder, and an
agent meet the same shape: something arrived, you did not get to rerun
it, and a story is already forming. A cause that is not accurate
enough spends the next mitigation on the wrong object. The
prohibition is how that care stays aimed.

---

## 1. Current state

Honest inventory. The spec is worthless if it plans around imagined
payload.

### 1.1 Doors already held

| Door | Status (2026-08-30 / 08-31) |
| --- | --- |
| `gaplast.dev` | Held the afternoon the method was named. Not a live site. |
| `gaplast@0.0.0` on npm | Name hold, published 2026-08-30, 17:51 UTC. Apache-2.0. Description: "Name hold." Two-file stub. |
| Package name | `gaplast`, not the hyphenated `gap-last` Grok also offered. Folder may stay `gap-last`. |
| Skill payload | None until this repo ships one. |
| FilePress site | None. House pattern is smellcheck: `getfilepress` under `site/`. |
| GitHub | None yet. Sister tools live under `Catalyst-Forge-LLC`. Do not create a remote unless asked. |
| German firm Gaplast | Exists; packaging, different industry. Do not pick a fight. The public sentence and the `.dev` door are the distance. |

### 1.2 What is already written

- Tool spec: `docs/gap-last-tool-spec.md`
- Working paper: `docs/constraint-first-reconstruction.md`
- Worked miniature: Langtang Lirung, Wednesday bound vs Thursday bound,
  in both the spec and the paper
- Agent contract, commands, guardrails, failure modes: in the spec
- Open product questions: listed here in §18; do not pretend they are
  closed

### 1.3 What does not exist yet

- Installable skill on npm beyond the name-hold stub
- CLI that emits a reconstruction
- Site at gaplast.dev
- Tests against the Langtang fixture
- JSON schema for the reconstruction artifact
- Non-physical worked example (policy, market, personal decision)

---

## 2. Problem statement

Most of what a person or an agent tries to understand cannot be rerun.
School science still teaches hypothesis-first as the only respectable
path. That method is powerful where you can intervene. It is the wrong
default.

Three errors show up in the same afternoon:

1. **Cemented what.** A first noun is treated as settled. The rest of
   the work is how. Limited perspective, a favorite model, or a
   preconceived inclination did the cementing. Wednesday's "glacier
   collapse" was that move.
2. **Ruling theory.** One story is chosen early. Evidence is gathered
   in its favor. Often the how that grew on a cemented what.
3. **Collapsed chain.** Initiation, amplification, exposure, and
   response are treated as a single question: who caused it?

Agents fail the same way as comment threads: first plausible story,
then commitment. "Be more rigorous" prompts do not stop that. A skill
that will not output a villain until the chain and gaps are named does.

The scarce resource is not a clever hypothesis. It is a description
tight enough to rule out most stories, and a leftover gap that can
hold what you still do not know.

---

## 3. Prior art, and the actual gap

Reconstruction is old. This product does not invent a continent of
knowing. It specifies an order, a prohibition, a stop rule, and a loop
that is allowed to retire its own questions.

### 3.1 Methods this work already names as debts

- Historical science (Carol Cleland): present traces of past events;
  rival hypotheses; search for a smoking gun
- Process tracing (Van Evera, Bennett, Collier): hoop tests,
  smoking-gun tests, straw-in-the-wind, doubly decisive tests
- Multiple working hypotheses (T. C. Chamberlin, 1890): do not marry a
  ruling theory
- Accident investigation, forensic reconstruction, diagnostic
  reasoning, Analysis of Competing Hypotheses (Heuer)
- Boyd's OODA: kinship in the loop, especially in **orient**. Cousin,
  not synonym. OODA decides under an opponent and a clock. Gap Last
  decides only inside a named gap, and will leave the gap

Cleland's pattern often proliferates rival hypotheses once puzzling
traces appear. Gap Last delays that proliferation until the observation
has been thickened and the known has been spent on elimination. That
is a procedural difference, not a new epistemology.

### 3.2 Tools that already exist

| Class | What it covers | What it does not do |
| --- | --- | --- |
| ACH software (PARC / Heuer; newer: ach-workbench, Intel Workbench) | Evidence-vs-hypothesis matrix; rank by inconsistency; diagnosticity | Starts after hypotheses exist. Does not force a bound event or a chain split first. Intelligence-community skin. |
| RCA suites (Causelink, TapRooT, EasyRCA) | 5 Whys, fishbone, cause maps, incident timelines, action tracking | Built to pick a preventable root cause for a process you own. Easy to collapse initiation/exposure. Hypothesis-early. Enterprise. |
| 5 Whys / fishbone templates | Fast linear drill, or categorical brainstorm | 5 Whys invents a how on the first noun. Fishbone proliferates causes before hoop-testing the known. |
| Community Notes / newsroom RCA | Shared correction of a public claim | Platform-specific; not a general stop rule; no reconstruction log of a moving object. |
| "First principles" and "think step by step" agent prompts | Decorative rigor | No prohibition. Models still lead with a preferred actor. |

The gap is real. Nobody ships a small public instrument whose whole
job is: **do not invent until the leftover gap is named**, and **reopen
the object when a better trace arrives**. RCA wants a root cause.
ACH wants a ranked hypothesis set. Gap Last will leave remainder
unknown and call that a result.

### 3.3 House neighbors (not competitors)

Skill shelf with TemperPass, Cold-eye, Detangler, Smell Check,
anticonfab. This one is for *understanding*.

- **Nth-order** follows consequences forward. Gap Last refuses to skip
  backward into a preferred cause.
- **Reality math** is the stool leg. Gap Last is that reflex specified
  as a stop rule.
- **Plan-first / DRY_RUN:** do not write until the plan is named. Same
  shape: do not invent until the gap is named.
- **anticonfab:** models as fluent hypothesis machines. Gap Last is
  the refusal half, aimed at causes rather than unsourced sentences.
- **Smell Check:** prose hygiene. Gap Last is not a writing spray.

---

## 4. Goals and non-goals

### 4.1 Goals (v1)

1. Keep a person or an agent in the specified order.
2. Emit a reconstruction artifact with the nine outputs, in that order
   only.
3. Refuse to answer "who caused it?" first.
4. Record when a later trace moves the object (reconstruction log).
5. Make remainder visible as a result, not as indecision.
6. Ship a skill a non-specialist can invoke without reading process
   tracing.
7. Keep the paper and the tool coupled: Gap Last implements
   constraint-first reconstruction.

### 4.2 Non-goals (v1)

- A generic research assistant or news crawler
- Numeric confidence scores or "probability of climate"
- Replacing experiment, proof, statistics, or OODA
- A full ACH matrix product
- Enterprise RCA (CAPA, action tracking, ISO templates)
- Scoring virality or "works across all domains" as a claim
- Publishing the Grok transcript
- Promoting unpublished drafts onto the public site unless Sam asks
- `npm publish` from an agent
- A new epistemology

### 4.3 When the user may set it down

The default holds until something else is shown to be the right
instrument:

- A proof you can actually write
- A controlled experiment you can actually run
- A statistics problem whose bottleneck is sampling or identification
- Time-limited action against an opponent (OODA's job; the clock is
  real)

Domain expertise is not a substitute for the order. It is what you
spend in the hoop pass.

---

## 5. Names and split

Lock these. Do not reopen in a build chat.

| Layer | Name |
| --- | --- |
| Public instrument | Gap Last (two words in prose) |
| Formal method | Constraint-first reconstruction |
| Subtitle | How to shrink the unknown before you invent it |
| Site sentence | Don't invent a cause until you can name the gap. |
| npm / invoke / skill id | `gaplast` |
| Repo folder | `gap-last` |
| Commands | `/bound` `/hoop` `/gap` `/reopen` `/full` |

Non-specialists use the tool without reading process tracing.
Specialists inspect the paper and see the debts. The homepage must
keep them coupled.

Spread path (from the naming sitting): tool, then language, then
paper. Do not wait for the paper to be journal-ready before the skill
can run.

---

## 6. Core domain concepts

These words are load-bearing. Do not flatten them into "analysis."

**Bound event.** What happened, where, when, at what scale, in what
order. The what. A noun in a headline is not a bound. "Glacier
collapse" was a first noun. The Thursday bound was a north-face rock
avalanche carrying ice, then a long runout.

**Trace.** Something left behind that constrains the bound: an image,
a timestamp, a record, a location, a material, an incentive. Not a
rerun.

**Fact layer.** Settled / provisional / open. Labels for the current
description, not a final map. A better trace can move an item between
layers.

**Causal chain parts.** Keep them separate:

- **Initiation:** what started
- **Amplification:** what made it grow or stay mobile
- **Exposure:** who or what was in the path
- **Response:** what was done after

A claim that does not say which part it is about is a collapsed chain.

**Hoop test.** A mechanism the traces already kill. Geometry, timing,
energy, materials, records, incentives. First principles are a knife
for this pass, not a license to decorate a favorite machine.

**Residual gap.** The only legal home for a new hypothesis. Named as a
question. If you cannot name it, you are not ready to invent.

**Allowed hypothesis.** Points at a named gap. More than one if
needed. Prefer mechanisms that need the least new machinery.

**Discriminating trace.** What would move a gap toward settled. Not a
confirming anecdote.

**Remainder.** What is still unknown, stated as a result. Managed
ignorance: track what you do not know on purpose.

**Gap-move.** A better trace can kill, shrink, shift, or split a gap.
The first gap is often retired rather than answered. A tighter what
creates a different leftover.

**Reconstruction log.** If a later trace changed the object: old bound,
new bound, what the leftover question became. Wednesday and Thursday,
not only the latest.

**Cemented what.** The common failure. A limited perspective, a
favorite model, or inclination handed you a noun, and you treated it
as settled.

---

## 7. The reconstruction artifact (the file format)

Gap Last does not wrap another app's disk format. The reconstruction
*is* the format. v1 treats markdown as the source of truth. JSON is a
projection for tests and a future CLI, not a second original.

### 7.1 Required sections, in this order only

See `docs/reconstruction-template.md`. An implementation that reorders
these, or that prints a cause before a named gap, has failed.

1. Bound event
2. Fact layers (settled / provisional / open)
3. Causal chain (initiation, amplification, exposure, response)
4. Hoop failures
5. Named residual gaps
6. Allowed hypotheses (each must cite a gap id)
7. Discriminating traces
8. Remainder
9. Reconstruction log (omit the body only if the bound has never
   shifted; still keep the heading)

A one-screen **summary** may sit above section 1. It is a view, not a
tenth step. It must not contain a hypothesis that is missing from
section 6.

### 7.2 Identifiers

- `gap-id`: stable slug inside one reconstruction (`last-increment`,
  `water-budget`, `who-in-path`)
- `hypothesis-id`: stable slug; illegal unless `points-at` is a
  current `gap-id`
- `bound-id`: `bound-1`, `bound-2`, ... in the log
- `trace-id`: optional; useful when `/reopen` cites what arrived

Retired gaps stay in the log. They leave the live gap list.

### 7.3 JSON projection (for tests)

Same keys as the headings. Hypotheses without `points-at`, or
`points-at` values that are not live gaps, are invalid. A validator
is in scope for M2. Do not invent extra scoring fields in v1.

### 7.4 Source gathering (v1 default)

Locked for v1 so a builder is not stuck. Reopen later if needed.

- `/bound` uses what the user supplied, including pasted quotes and
  URLs they named. It may fetch those URLs. It does not go hunting.
- `/full` may fetch named URLs and quote them as traces. It does not
  become a generic research agent.
- Unsolicited browsing to "find the real cause" is out of order.

Too little source work freezes an early description. Too much turns
the tool into a search engine with a ritual. v1 errs toward the
user's packet, then `/reopen` when a better trace arrives.

---

## 8. Functional requirements

### 8.1 Input

F1. Accept a thing the user observed, was told, or became aware of.
    Plain text is enough.

F2. Accept optional competing stories, labeled as stories, not as
    facts.

F3. Accept optional links. Fetch only those, per §7.4.

F4. Accept an existing reconstruction plus a new trace (`/reopen`).

F5. If the first user move is "who caused it?" or "what's my theory?",
    do not answer first. Reconstruct, then answer only inside gaps
    that survive.

### 8.2 Output order

F6. Emit sections 1–9 in order. No cause before a named gap.

F7. Every hoop failure names the mechanism killed and the constraint
    that killed it (geometry, timing, energy, record, location,
    incentive). "Unlikely" is not a hoop.

F8. Every allowed hypothesis points at a named residual gap. A
    hypothesis that does not is illegal output.

F9. Keep multiple hypotheses alive in a real gap. One leftover cause
    is often a ruling theory in costume.

F10. Remainder is required even when it is short. "None" is allowed
     only if every live question has a discriminating trace already
     in hand, which is rare.

F11. If the bound has shifted in this session or in the log, say how
     the leftover question moved.

### 8.3 Commands

F12. `/bound`: steps 1–2, plus chain parts if they can be split from
     the current description. No hypotheses.

F13. `/hoop`: step 4 on the current bound and supplied stories. No
     new mechanisms.

F14. `/gap`: steps 5–8. Illegal if `/bound` has not been run on this
     object (in-session or via an existing artifact).

F15. `/reopen`: apply a new trace; write a log entry; re-run from
     step 1; do not treat the move as humiliation or as a license to
     invent.

F16. `/full`: all steps, including the log if the bound has shifted.
     Prefix with the one-screen summary (§10).

F17. Stop questions (no full protocol) must still be answerable:

     - What part of the chain is this claim about?
     - Has it already failed a hoop test?
     - Is this a residual gap, or leftover storytelling?
     - Did a new trace move the object, and if so, what is the gap
       *now*?
     - Shorter: *Is that the what, or are you already on a how?*
     - When the what looks done: *Did you cement a first noun, or can
       you still reopen it?*

### 8.4 Gap-moves

F18. The tool must be able to record that a trace **killed**,
     **shrunk**, **shifted**, or **split** a gap. Vocabulary from the
     spec. Do not only "update the answer."

F19. A retired gap is not a failure. A tighter object is not a new
     license to invent.

### 8.5 Surfaces

F20. **Skill.** Cursor / agent skill `gaplast`. Digest in
     `skills/gaplast/SKILL.md`. Spec wins on conflict.

F21. **Checklist.** The template in `docs/reconstruction-template.md`
     is the human form. A person can fill it without an agent.

F22. **CLI (M2, not M1).** `gaplast` reads text or a file, writes a
     reconstruction markdown. Same order. No website required for M2.

F23. **Site (M3).** gaplast.dev. FilePress, house pattern. Couple the
     instrument and the method. Do not dump the eight steps as the
     hero. Sentence first. Paper linked, not pasted as the homepage.

F24. **npm package.** Name `gaplast`. Skill files in the tarball the
     way smellcheck ships `skills/` and `rules/`. User publishes.

---

## 9. Agent contract

An implementation should refuse to:

1. Lead with a preferred actor
2. Collapse initiation, amplification, and exposure into one word
3. Output a novel mechanism before hoop-testing the known
4. Treat correlation in the same region as location on the scar
5. Present leftover uncertainty as indecision rather than a result
6. Defend the first bound when a later trace moves the object
7. Treat a retired gap as a failure, or a tighter object as a new
   license to invent
8. Treat "one-off event" as a permission slip to skip the order on
   everything else
9. Fetch the open web to decorate a story the user did not ask to
   research
10. Print a how on a what it has not bound

Positive duties:

- Stay open. Stay constrained. New stories still have to point at the
  new gap.
- Track what you do not know on purpose.
- If the user is in OODA time (act now, opponent, clock), say so and
  set the protocol down. Do not use Gap Last as delay.

---

## 10. Human surfaces

### 10.1 One-screen (minimum useful output)

The spec left this open. v1 default, reopenable:

1. The what (bound), marked settled / provisional / first-noun risk
2. Stories already eliminated
3. Open gaps, as questions
4. If the bound moved: old leftover vs new leftover

This is the summary block on `/full` and the whole of a short `/bound`
when the user has one breath.

### 10.2 Four lines (from the paper)

For a person with no tool running:

1. The what, as tightly as you can say it. Mark it.
2. One mechanism the geometry, timing, or record already eliminates.
3. The leftover gap, named as a question.
4. Whether "how" or "who caused it?" is even the right question yet.

### 10.3 Voice

House overlay: Smell Check. Direct > clever. Clear > profound. No em
dashes in publishable prose on the site. Do not de-smell the maxim or
verbatim testimony. "Gap Last," "hoop," "remainder," "bound," and
"cemented what" are corpus terms. Keep them.

The skill is not a writing spray. Do not smell-check the user's traces.
Smell-check the tool's own output.

---

## 11. Golden fixture: Langtang Lirung

The method was named on this flood. Tests should be able to replay it.
Source writeup cited in the spec:
[Onmanorama, 2026-08-28](https://www.onmanorama.com/news/world/2026/08/28/satellite-images-reveal-massive-bedrock-collaps-nepal-floods.amp.html).

A correct `/full` on the Thursday packet looks like this in outline.
Details live in the spec and paper. Do not "improve" the leftover into
a trigger the traces do not isolate.

**Wednesday bound (provisional):** ice came off Langtang Lirung.
Cloudy, dusty images. Enough to say ice moved. Not enough to name
what failed first. Leftover closer to: why did that ice detach?

**Thursday bound:** north-face rock avalanche on Langtang Lirung, ice
included, then a long runout. Shugar: a big bedrock failure that took
part of the glacier with it. Cook: the rock collapsed; the glacier was
cargo. Leftover: why did that rock slab fail, taking ice with it?

**Initiation:** bedrock under the glacier tongue failed on the north
face (~5,200 m). Ice went with the rock. "Glacier collapse" as the
whole initiation failed a hoop test.

**Amplification:** mass into Lendi/Lhende Khola; steep narrow valley;
ice melt plus sediment; debris flood. River color green to brown is
sediment load.

**Exposure:** villages and border works buried downstream. Hydropower
works sat in the runout. That can explain deaths without explaining
the scar.

**Hoop failures:** distant blasting "ringing" a mountain like a
bridge; an ice-only burst as the whole start. Construction at the
scar is not in the Cook/Shugar interviews.

**Residual gaps (live):** last increment on that slab (thaw, water in
joints, something nobody has isolated). Climate as possible
preconditioning of permafrost "glue" is live; not the precise
trigger. Flood water budget and who was in the path are separate
gaps, not rivals to the scar.

A build that answers "China or climate?" as the headline has failed
the fixture, even if the prose is careful.

Fixture files: `fixtures/langtang-wednesday.md` (input packet) and
`fixtures/langtang-thursday.md` (new trace for `/reopen`). Expected
shape is the outline above, not a canned essay.

---

## 12. Non-functional requirements

N1. **Local-first.** v1 skill runs in the user's agent with the user's
    packet. No required cloud backend.

N2. **Privacy.** Do not exfiltrate reconstructions. If a future CLI
    writes files, write where the user said.

N3. **Safety of claims.** Do not assert living people caused a death
    or a disaster from correlation. Named researchers in the fixture
    are cited as sources of a bound, not as villains.

N4. **License.** This tree is MIT (confirmed 2026-09-04). npm name-hold
    stub stays Apache-2.0 until Sam replaces it. Do not change the
    hold stub from this repo. Agents never `npm publish`.

N5. **Stack defaults** (house, unless the format forbids them):
    TypeScript, ESM only, `package.json` `"type": "module"`, pnpm,
    Node 20+. Site: FilePress (`getfilepress`) if M3 is in the same
    repo. Agents never `npm publish`.

N6. **Performance.** A `/bound` on a short packet should return
    without a research loop. `/full` on Langtang-scale input should
    complete in one agent turn plus named-URL fetches.

N7. **Idempotence of order.** Running `/hoop` twice on the same bound
    may refine wording. It may not introduce a new cause.

N8. **Platform.** Skill is markdown; CLI is Node. Windows is a first-
    class path (`z:\workspace\...`).

---

## 13. Edge cases

Builders fail these. Handle them on purpose.

E1. **User leads with a villain.** Reconstruct first. The villain may
    survive as an exposure hypothesis. It does not get to skip
    initiation.

E2. **User pastes two rival headlines and wants a winner.** Split the
    chain. They may both be live on different parts. "China or
    climate?" is the elephant: one noun doing four jobs.

E3. **New trace moves the object.** `/reopen`. Log it. Retire the old
    leftover. Do not answer the old question on the new object.

E4. **No traces, only a rumor.** Bound is thin and must be labeled
    provisional or open. Hoop what you can (internal contradiction,
    missing location). Remainder is most of the page. Do not invent
    traces.

E5. **Conjunctive causes.** Several true parts that are not rivals
    (preconditioning and last increment; exposure and initiation).
    Do not force a single winner.

E6. **Non-physical event** (policy, market, family story, product
    demo). Same four chain parts. Hoop tests become timeline,
    jurisdiction, incentives, records, contradiction with settled
    facts. Do not pretend those are seismograms. Do not stretch
    "scar" into mush; say "object" or "bound" if there is no slope.

E7. **User can run the experiment.** Say so. Graduate off this
    instrument. Offer the bound they already have as a starting
    description for the test.

E8. **OODA time.** Clock is real. Do not delay action with eight
    steps. Name that this is the wrong instrument.

E9. **Partisan laundering.** User wants the ritual so they can defer a
    conclusion the traces already support. If a mechanism has failed
    a hoop, say it failed. Remainder is not a hiding place.

E10. **False completeness.** Neat writeup, missed a trace the user
     supplied. If the packet contains a location, scale, or time the
     bound omitted, the bound is wrong.

E11. **Empty gap list and a confident how.** Invalid. Either the how
     is a hoop-survivor already in the chain (then it is description,
     not a new hypothesis) or the tool skipped step 5.

E12. **Single allowed hypothesis in a wide gap.** Flag it. Keep a
     second working hypothesis or say why the gap is already that
     small.

E13. **"One-off, so skip."** Refuse. The default is broader than
     disasters.

E14. **Request to score 0–100 confidence.** v1: refuse the number.
     Use settled / provisional / open. (Open product question, §18.)

E15. **Hypothesis that points at a retired gap.** Illegal. Point at
     the live leftover.

E16. **User asks only the stop questions.** Answer those. Do not dump
     nine sections.

E17. **Conflicting traces, no resolution.** Bound stays layered.
     Provisional vs open. Do not average them into a noun.

E18. **Tool's own first bound was wrong.** Same as E3. No special
     pleading.

---

## 14. Failure modes the product must resist

From the spec. Treat these as test themes.

- **Slogan drift:** people say "Gap Last" and still start with a
  theory. The output order is the guard.
- **False completeness:** neat writeup, missed trace.
- **Partisan laundering:** ritual as delay.
- **Category error:** delay where a trial, a proof, or OODA is right.
- **Frozen bound:** first label treated as settled.
- **Single-pass orientation:** first plausible story, then commitment.
- **Narrowing the default:** disaster toy, invent-first everywhere
  else.

---

## 15. Milestones

### M1. Runnable from this folder (now)

- This `GENESIS.md`
- Spec and paper in `docs/`
- Reconstruction template
- Skill `skills/gaplast/SKILL.md` that an agent in this repo can
  follow
- Langtang input fixtures (not a canned answer key essay)
- Cursor rule pointing at the spec

Success: open this folder, ask "run Gap Last on this claim," get the
nine sections in order, no villain first.

### M2. Package a builder can test

- `package.json` name `gaplast`, private until Sam publishes
- TypeScript ESM
- Validator: hypothesis must point at a live gap; section order
- Tests: Langtang Wednesday `/full`; Thursday `/reopen` moves the
  leftover; "who caused it?" does not answer first
- CLI: stdin or file in, markdown out
- Skill shipped in the package files list

Success: `pnpm test` fails if a fixture output contains an allowed
hypothesis with no `points-at`.

### M3. Public doors with payload

- FilePress site on gaplast.dev
- Sentence and coupling on the homepage
- Paper and spec as docs, not the hero wall of eight steps
- Real npm version beyond `0.0.0` (Sam publishes)
- One-screen / four lines visible without an account

Success: a stranger can say "run this through Gap Last" and land on
the sentence plus a way to run the skill.

### M4. After v1, only if pulled

- Non-physical hoop-test examples
- Optional confidence later, if Sam wants numbers
- Blinded reconstructions against later official findings
- MCP surface (only if the CLI is already boring)

---

## 16. Acceptance criteria

A1. Given a user message that starts "Was it China or climate?", the
    first output block is a bound event and chain split, not a winner.

A2. Given the Wednesday Langtang packet, "glacier collapse" is
    labeled provisional (or equivalent), not settled initiation.

A3. Given the Thursday trace on that reconstruction, `/reopen`
    retires "why did that ice detach?" and writes a log entry with
    old bound, new bound, and the new leftover.

A4. Given a construction-as-far-field-resonator story, output
    includes a hoop failure (energy / attenuation / location), not a
    maybe.

A5. Given hydropower in the runout, exposure may be live while
    initiation-by-construction is not, unless a scar-location trace
    appears.

A6. Given an allowed-hypothesis section, every item cites a live gap.
    A validator or a review agent can check this mechanically.

A7. Given no remaining traces, remainder is explicit and is not
    worded as the tool being unsure of itself.

A8. Given "we need to act in the next ten minutes against an
    opponent," the tool says this is OODA's job and does not run
    `/full` as delay.

A9. Given a policy fight with no slope, the chain parts still appear;
    the word "scar" is not required.

A10. Given the skill file and the spec disagree, behavior follows the
     spec.

A11. An agent in this repo does not run `npm publish`.

A12. Site copy (when it exists) does not lead with a preferred actor
     in the Langtang miniature.

---

## 17. Suggested implementation shape (still what, not how)

Leave libraries to the builder. The shape that matches the rest of
the shelf:

```
gap-last/
  GENESIS.md                 this file
  docs/                      method sources + template
  fixtures/                  Langtang packets
  skills/gaplast/SKILL.md    published skill
  src/                       later: cli, validate
  site/                      later: FilePress
```

M1 does not need `src/`. Do not scaffold a website in M1.

---

## 18. Open questions

Do not close these in code by accident. v1 defaults are marked.

| # | Question | v1 default |
| --- | --- | --- |
| Q1 | How much source-gathering before bounding? | User packet + named URLs only (§7.4) |
| Q2 | Score confidence, or only settled / provisional / open? | Layers only. No 0–100. |
| Q3 | Non-physical hoop tests without mushy "scar"? | Same chain; say bound/object; hoop via record/timeline/incentive |
| Q4 | Minimum useful output for a non-tech user? | One-screen summary (§10.1) |
| Q5 | Reconstruction log verbosity vs news-cycle diary? | Log bound-moves only, not every wording tweak |
| Q6 | Formal name: constraint-first vs subtractive reconstruction? | Keep constraint-first until Sam changes it |
| Q7 | Can eight steps shrink for public use without losing the prohibition? | Public sees sentence + one-screen; full order stays in the artifact |
| Q8 | Conjunctive causes? | Separate gaps, not a forced winner (E5) |
| Q9 | Blinded validation against official findings? | Not v1 |
| Q10 | Line between "spend the known" and "ignore an uncomfortable unknown"? | If the user supplied it, it goes in a layer. Ignoring it is a bug. |
| Q11 | License for the real package? | MIT (2026-09-04). Stub on npm stays Apache-2.0 until Sam replaces it. |
| Q12 | GitHub remote / Pages project name? | `Catalyst-Forge-LLC/gap-last` |

Paper-only questions (Q6, Q9) do not block M1–M2.

---

## 19. How to run from this folder (M1)

1. Open `z:\workspace\gap-last` as the workspace.
2. Read `skills/gaplast/SKILL.md`. On conflict, read
   `docs/gap-last-tool-spec.md`.
3. Paste a claim. If you do not say a command, treat it as `/full`.
4. For a moving object, paste the new trace and say `/reopen`.
5. Fill `docs/reconstruction-template.md` by hand if you want no
   agent.

Do not implement M2 in the same sitting unless asked. The skill is
enough to keep the order.

---

## 20. Provenance

Named 2026-08-30 in a Grok sitting on an X post about Langtang Lirung
and a claim that Chinese hydro construction caused a Himalayan glacier
collapse. Follow-up 2026-08-31 folded the Thursday satellite pass,
gap-moves, reconstruction log, `/reopen`, and the OODA cousin (Sam
posed the kinship; Grok named how decide differs). Default broadened past one-off
events. Maxim hung verbatim.

This GENESIS is the builder spec for the instrument. It is not a
second paper. Do not cite it as doctrine over the paper or the spec.
