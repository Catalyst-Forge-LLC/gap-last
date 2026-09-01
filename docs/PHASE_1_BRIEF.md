# Gap Last — Phase 1 architecture brief

_Structured capture of planning and architecture **before** code scaffolding. Goal: Phase 2 (or a new agent/session) can start from this file + `.forgetrail/workflow_tracking.json` without re-reading the whole Phase 1 chat._

**Status:** `locked`  
**Last updated:** `2026-09-04`  
**Phase 1 exit:** Locked 2026-09-04. Sam confirmed MIT, GitHub `Catalyst-Forge-LLC/gap-last`, and proceed to M2 (not FilePress-first).

Source: `GENESIS.md` (builder spec, 2026-08-31) plus Sam's 2026-09-01 stack overlay (ForgeTrail, FilePress, LocalSlip). Method conflicts: tool spec wins for product behavior; paper wins for rationale.

---

## 1. Problem and outcome

**What we are building (2–4 sentences):**

Gap Last is the default way to understand something you observed, were told, or otherwise came to be aware of. Bound the thing. Spend what is already known. Name the leftover gaps. Only then invent a cause, a theory, or a next question. The prohibition is the product: people and agents skip that order, cement a first noun, collapse a chain into one villain, and call the story work.

**Project archetype:** `product`

**What “done” looks like for v1 (measurable where possible):**

- A person or agent in this folder can paste a claim and get the nine reconstruction sections in order, no villain first (M1 — already in-tree).
- `pnpm test` fails if a fixture output contains an allowed hypothesis with no `points-at` (M2).
- A stranger can say “run this through Gap Last” and land on the sentence plus a way to run the skill (M3 site).

---

## 2. Users and hero flow

**Primary user(s):**

- A person who heard a claim, rumor, headline, symptom, or postmortem and a story is already forming.
- An agent asked “who caused it?” or “what's my theory?” first.
- Specialists who want the paper coupled to the instrument (not a slogan).

**The single most important workflow (hero flow) end-to-end:**

Paste a claim (or an existing reconstruction plus a new trace) → emit a reconstruction artifact with the nine outputs in that order only → if a later trace moves the object, `/reopen` and log old bound / new bound / leftover question.

**Secondary workflows (if any) for v1:**

- `/bound`, `/hoop`, `/gap` as partials; stop questions without dumping nine sections.
- Human checklist via `docs/reconstruction-template.md` with no agent.
- Langtang fixture replay: Wednesday `/full`, Thursday `/reopen` moves the leftover.

---

## 3. Constraints

_Hard requirements the stack and design must respect._

- **Technical:** Local-first skill. TypeScript, ESM only, pnpm, Node 20+. Windows is a first-class path. Markdown reconstruction is source of truth; JSON is a projection. Fetch only user-named URLs. No required cloud backend. Do not exfiltrate reconstructions.
- **Business / timeline:** Doors already held: `gaplast.dev`, `gaplast@0.0.0` name hold. User publishes npm; agents do not. GitHub: `https://github.com/Catalyst-Forge-LLC/gap-last.git`. License for this tree: MIT.
- **Explicit non-goals for v1:** Generic research assistant; numeric confidence; replacing experiment / proof / statistics / OODA; full ACH matrix; enterprise RCA; publishing the Grok transcript; promoting unpublished drafts onto the public site unless Sam asks; a new epistemology.

---

## 4. Stack and tooling

_Confirmed choices only after user sign-off. Mirror the same choices into `CONTEXT_PROMPT.md` → Tech Stack in Phase 2._

| Area            | Choice   | Status (proposed / confirmed) | Notes / WHY |
| --------------- | -------- | ----------------------------- | ----------- |
| Instrument v1   | Cursor / agent skill `gaplast` | confirmed (GENESIS F20) | Digest in `skills/gaplast/SKILL.md`. Spec wins on conflict. |
| Language        | TypeScript, ESM | confirmed (N5) | `package.json` `"type": "module"` |
| Package manager | pnpm | confirmed | House default |
| CLI (M2)        | Node 20+, stdin or file in, markdown out | confirmed | Not a website. Name `gaplast`. Validates and emits. Does not call a model. |
| Site (M3)       | FilePress (`getfilepress`) under `site/` | proposed (Sam named FilePress) | House pattern. Static `build/`. No admin UI, no database. |
| Local ports     | LocalSlip | proposed (Sam named LocalSlip) | Named slips when FilePress or preview runs. FilePress already has `ensure-lease`. |
| Lifecycle       | ForgeTrail | proposed (Sam named ForgeTrail) | Tracking in `.forgetrail/`. Do not vendor the methodology tree. |
| DB / backend    | none | confirmed | Local-first. Drop PocketBase + auth. |
| Auth / storage  | none / local files | confirmed | Write reconstructions where the user said. |
| State persistence | A-local | confirmed | Site is static. Skill runs in the user's agent. |
| Styling         | FilePress theme tokens | proposed | Only when M3 is pulled. |
| Deploy / CI     | FilePress static build → gaplast.dev | proposed | M3. Do not invent a new engine. |
| npm             | `gaplast`, private until Sam publishes | confirmed | Name hold is a different stub. Agents never publish. |

**State persistence:** No state needs to outlive the browser for v1. Reconstructions are files the user keeps. Site is prerendered markdown.

---

## 5. Data model (sketch)

_Entities and relationships — not full schemas. Enough for Phase 2 scaffolding._

**Core entities:**

- **Reconstruction** (markdown artifact): summary view + sections 1–9 in order only.
- **Bound event** (`bound-id`: `bound-1`, `bound-2`, …): what / where / when / scale / sequence / layer.
- **Fact layer item:** settled / provisional / open.
- **Causal chain parts:** initiation, amplification, exposure, response (kept separate).
- **Hoop failure:** mechanism killed + constraint that killed it.
- **Residual gap** (`gap-id`): live question. Retired gaps leave the live list and stay in the log.
- **Allowed hypothesis** (`hypothesis-id`): illegal unless `points-at` is a current `gap-id`.
- **Discriminating trace** (`trace-id` optional).
- **Remainder:** unknown stated as a result.
- **Reconstruction log:** bound-moves only (killed / shrunk / shifted / split). Not every wording tweak.
- **Commands:** `/bound` `/hoop` `/gap` `/reopen` `/full`.

**Relationships:**

- Hypothesis → live gap (`points-at`).
- Log entry → old bound, new bound, leftover question.
- `/reopen` consumes an existing reconstruction + a new trace.

**Existing data / migration:** Langtang packets in `fixtures/`. Copied method drafts in `docs/`. No import from another app's format.

---

## 6. Integrations and external systems

| Integration | Purpose | Auth / secrets | Risk notes |
| ------------- | ------- | -------------- | ---------- |
| Named URLs only | Fetch traces the user named | none | Do not hunt the open web for a cause |
| FilePress (`getfilepress`) | M3 site | none for v1 | Link local engine (`z:\workspace\filepress`) or pin npm. Do not hand-roll. |
| LocalSlip | Named local ports | none | `localslip claim …` / FilePress `ensure-lease` |
| GitHub | https://github.com/Catalyst-Forge-LLC/gap-last.git | user | Remote provided 2026-09-04 |
| npm `gaplast` | Name hold already published | Sam publishes | Agents never `npm publish` |
| License | MIT | confirmed | This tree. Hold stub on npm stays Apache-2.0 until Sam replaces it. |

---

## 6a. Content-generation pattern (only if LLM-produced content)

Reconstructions are produced by **the user's agent** following the skill (BYO-LLM in their host). This repo's M2 CLI validates and emits markdown; it does not call a model. M3 site copy is hand-authored FilePress posts.

| Field | Value |
| ----- | ----- |
| **Pattern** | BYO-LLM (skill in the user's agent). No runtime LLM API in this repo. |
| **Provider / model** | User's host (Cursor, Grok, etc.) |
| **Env vars** | none for v1 |
| **Validator / paths** | M2: reconstruction JSON projection; hypothesis must point at a live gap |

---

## 7. Hardest problems and risks

1. **Slogan drift:** people say “Gap Last” and still start with a theory. The output order is the guard.
2. **False completeness:** neat writeup that missed a trace the user supplied.
3. **Scaffolding the wrong spine:** treating this as a PocketBase web app or scaffolding FilePress before the validator exists.
4. **Fixture “improvement”:** inventing a last-increment trigger the Langtang traces do not isolate.
5. **German firm Gaplast:** different industry. Do not pick a fight. The public sentence and the `.dev` door are the distance.

---

## 8. Architectural decisions (numbered)

**D1.** Skill-first v1. CLI is M2. FilePress site is M3. WHY: GENESIS §15. Rejected: web app first.

**D2.** Markdown reconstruction is the original. JSON is a projection. WHY: GENESIS §7. Rejected: JSON-first, ACH-native.

**D3.** TypeScript, ESM, pnpm, Node 20+. Package name `gaplast`, private until Sam publishes. WHY: house defaults + N5. Rejected: Python, CommonJS.

**D4.** FilePress under `site/` when M3 is pulled. WHY: house pattern; markdown → static. Rejected: bespoke SvelteKit, PocketBase.

**D5.** LocalSlip for named local ports. WHY: Sam named it; FilePress already leases. Rejected: hardcoded Vite ports.

**D6.** Local-first. No PocketBase, no auth, no runtime LLM API. WHY: N1, F20–F22. Rejected: accounts, cloud model route.

**D7.** User packet + named URLs only. WHY: §7.4. Rejected: live search API in v1.

**D8.** Layers only (settled / provisional / open). No 0–100. WHY: Q2. Rejected: numeric confidence.

---

## 9. Open questions (before or during Phase 2)

| # | Question | Owner / resolve by |
| - | -------- | ------------------ |
| Q11 | License for the real package? | MIT (confirmed 2026-09-04). Hold stub on npm stays Apache-2.0 until Sam replaces it. |
| Q12 | GitHub remote / Pages project name? | `Catalyst-Forge-LLC/gap-last` |
| — | FilePress / LocalSlip before M2? | Keep GENESIS order: M2 now, M3 later. |
| Q6, Q9 | Formal name stay constraint-first? Blinded validation later? | Paper-only; do not block M1–M2 |

GENESIS §18 Q1–Q10 stay at their v1 defaults unless Sam reopens them.

---

## 10. Explicitly out of scope (v1)

- Generic research crawler or unsolicited browsing
- Numeric confidence scores
- Replacing experiment, proof, statistics, or OODA
- Full ACH matrix product
- Enterprise RCA (CAPA, action tracking, ISO templates)
- Publishing the Grok transcript
- Promoting unpublished drafts onto the public site unless Sam asks
- `npm publish` from an agent
- PocketBase, auth, payments
- MCP surface (only if the CLI is already boring — M4)
- Non-physical hoop-test examples (M4 unless pulled)

---

## 11. First feature batch (post-scaffold)

Ordered. Do not start until this brief is locked.

1. `package.json` name `gaplast`, private, `"type": "module"`, pnpm.
2. Reconstruction JSON schema + validator (hypothesis must `points-at` a live gap; section order).
3. Tests against Langtang Wednesday `/full` and Thursday `/reopen`; “who caused it?” does not answer first.
4. CLI: stdin or file in, reconstruction markdown out.
5. Skill files listed in the package `files` field.
6. Only if Sam pulls it forward: FilePress `site/` via `getfilepress` / `create-site`, LocalSlip lease for the dev port. Sentence first on the homepage. Do not dump the eight steps as the hero.

---

## 12. Handoff checklist (before leaving Phase 1)

- [x] User has confirmed stack, folder shape, data sketch, hero flow, and v1 boundaries
- [x] This brief is **locked** (remaining items only in §9)
- [x] `.forgetrail/workflow_tracking.json` updated: `decisions[]` for each major D#; `phases["1-architecture"]` notes summarize sign-off
- [x] Phase 2 opener will read **this file** + `.forgetrail/workflow_tracking.json` first
