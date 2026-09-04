# Gap Last - Project Context Prompt

_Handoff document. Merge of `docs/PHASE_1_BRIEF.md` (locked 2026-09-04)._

Don't invent a cause until you can name the gap. Method:
constraint-first reconstruction. Spec wins over the skill digest.
Paper wins for rationale. GENESIS is the builder spec, not a second
paper. A cause that is not accurate enough spends the next
mitigation on the wrong object.

## Tech Stack

- **Instrument:** Cursor / agent skill `skills/gaplast/SKILL.md`
- **Language:** TypeScript, ESM only, Node 20+
- **Package manager:** pnpm
- **Package:** `gaplast`, private until Sam publishes
- **CLI:** `gaplast` reads stdin or a file, writes reconstruction
  markdown. Validates. Does not call a model.
- **Site (M3, not now):** FilePress (`getfilepress`) under `site/`
- **Local ports (M3):** LocalSlip
- **Lifecycle:** ForgeTrail in `.forgetrail/`
- **DB / auth / runtime LLM:** none
- **License:** MIT for this tree. npm name-hold stub stays Apache-2.0
  until Sam replaces it.
- **GitHub:** https://github.com/Catalyst-Forge-LLC/gap-last.git

## Project Structure

```
gap-last/
  GENESIS.md
  docs/                      method sources, template, PHASE_1_BRIEF
  fixtures/                  Langtang packets + reconstruction JSON
  skills/gaplast/SKILL.md
  src/                       validate, parse, render, cli
  site/                      later: FilePress
```

## Data Model

Markdown reconstruction is the source of truth. JSON is a projection.

| Entity | Purpose | Key fields |
| --- | --- | --- |
| Reconstruction | Nine sections in order | boundEvent, residualGaps, allowedHypotheses, remainder, reconstructionLog |
| Bound event | The what | layer: settled / provisional / open |
| Residual gap | Only legal home for a new hypothesis | gapId, question |
| Allowed hypothesis | Illegal unless points-at is a live gap | hypothesisId, pointsAt |
| Log entry | Bound-moves only | boundId, leftover, whatArrived |

Hypothesis → live gap (`pointsAt`). Retired gaps leave the live list
and stay in the log.

## Key Architectural Decisions

- **D1 (Phase 1):** Skill first, CLI M2, FilePress site M3. WHY: the
  prohibition is the product. Rejected: web app first.
- **D2:** Markdown original, JSON projection. WHY: the reconstruction
  is the format.
- **D3:** TypeScript, ESM, pnpm, Node 20+. WHY: house defaults.
- **D4:** FilePress for the site when M3 is pulled. WHY: house pattern.
- **D5:** LocalSlip names local ports. WHY: Vite shuffle.
- **D6:** Local-first. No PocketBase, no auth, no runtime LLM in this
  repo. WHY: CLI validates; the user's agent reconstructs.
- **D7:** User packet + named URLs only. WHY: not a research assistant.
- **D8:** Layers only. No 0–100. WHY: GENESIS Q2.
- **D9 (2026-09-04):** License MIT. WHY: Sam confirmed.
- **D10 (2026-09-04):** Remote is Catalyst-Forge-LLC/gap-last. WHY: Sam
  provided it. Keep M2 then M3. FilePress not pulled forward.

## Critical Patterns

- Code owns section order and `points-at`. The CLI does not invent a
  cause. A raw packet becomes a thin open skeleton with no hypotheses.
- Validation errors name the failure (`hypothesis-missing-points-at`),
  not "invalid."
- Do not invent a last-increment trigger the Langtang traces do not
  isolate.
- On Windows, `pnpm exec gaplast` needs this package linked to itself
  (`devDependency` `gaplast: link:.`). Prefer `pnpm gaplast`.
- Do not answer "who caused it?" first. First required section is
  Bound event.
- Agents never `npm publish`.
- Windows is a first-class path.
- Do not pull in private corpus tools from other projects.
  Do not publish unpublished drafts as site pages.

## Design Philosophy

- Remainder is a result, not indecision.
- A retired gap is not a failure.
- Do not de-smell the maxim.

## Writing/Voice Rules

Direct. Clear. Smell-check the tool's output, not the user's traces.
No em dashes in publishable site prose later. Keep corpus terms:
Gap Last, hoop, remainder, bound, cemented what.

## Current Feature State

### Complete

- M1 skill, spec, paper, template, Langtang input packets
- Phase 1 brief locked
- M2 validator, JSON fixtures, CLI emit/validate, tests
- M3 FilePress site under `site/` (sentence first; Method holds the
  order; spec and paper stay in `docs/`, not as site pages)
- LocalSlip lease `gaplast-site` on 5200

### In Progress

- Live deploy to gaplast.dev when Sam wants Cloudflare Pages shipped

### Not Started

- Real npm version beyond the name-hold stub (Sam publishes)

## Recent Changes

### Session 2026-09-04 draft purge

- Sam: purge what we need. Deleted the home receipt. Stripped
  out-of-scope draft lineage from the spec, paper, and GENESIS.
  Method contract and Langtang kept. History rewritten for a public
  remote.

### Session 2026-09-04 site cut

- Sam: /spec and /paper had pulled unpublished drafts. Unpublished
  those routes. Deed now holds the nine-section order and the stop
  questions.

### Session 2026-09-04 later

- Sam: proceed (M3). FilePress site, LocalSlip 5200, homepage sentence
  first. Did not npm publish. Did not dump eight steps as the hero.

### Session 2026-09-04

- Sam: MIT, GitHub repo, proceed (M2, not FilePress-first).
- Locked PHASE_1_BRIEF. Scaffolded `src/`, Langtang reconstruction
  projections, `pnpm test`.
