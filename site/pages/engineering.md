---
title: Name the question before choosing the change.
description: Apply Gap Last to features, integrations, refactors, and architecture decisions. Separate evidence from goals and ideas, then choose the smallest sufficient response.
order: 3
---

Gap Last engineering examines what deserves to become code. An absent
feature does not establish a need. A declared goal does not need a
fabricated defect to make it legitimate.

| Scope | Skill | Result |
| --- | --- | --- |
| Reconstruct a past event or claim | `gaplast` | Nine-section reconstruction |
| Investigate a software change | `gaplast-engineering` | Short assessment or compact decision record |

The shared discipline is to bound what you know, name what remains
unanswered, and keep a proposed response inside that question. The
engineering skill does not require the incident's causal-chain sections.

## Install and try it

Download [gaplast-engineering.zip](/skills/gaplast-engineering.zip).
Unzip into the host's skills directory:

| Host | Project path or installation |
| --- | --- |
| Cursor | `.cursor/skills/gaplast-engineering/` |
| Claude Code | `.claude/skills/gaplast-engineering/` |
| Codex | `~/.codex/skills/gaplast-engineering/` (user installation) |
| Claude.ai or another ZIP-capable host | Upload the ZIP |

The folder contains `SKILL.md`, `SKILL_FACTS.md`, and two references.
Confirm the host lists the skill or visibly reads `SKILL.md`; copying a
folder alone does not prove discovery. Host UI discovery has not been
independently verified for every host. From a checkout, copy
`skills/gaplast-engineering/` instead. Copied installations need replacing
when you update. npm `gaplast` remains a name reservation.

Try this fictional packet:

> Use Gap Last engineering. I want agents to carry inspect-one findings
> into summarize-one without asking me to paste them. Nothing is reported
> broken. inspect-one supports `--format json --output findings.json`;
> summarize-one accepts that file and returns the findings count. Their
> individual commands are documented, but there is no handoff recipe.
> There is no runnable implementation in this packet. Assess only.

A useful result accepts the declared goal, identifies the existing file
contract, and proposes verifying a recipe before adding conversion code.
It does not claim the commands ran. The remaining question is whether
that existing handoff completes the job in the real environment.

## Keep the response proportionate

For a small question, a short answer is enough. For a consequential
decision, keep a [compact record](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/skills/gaplast-engineering/references/decision-template.md):
starting point, evidence, unresolved question, alternatives, distinguishing
check, decision, verification, and reopening conditions.

Observed problems, declared goals, and exploratory ideas stay distinct.
Tests answer testable questions. Documentation, a recipe, an adapter,
an existing-tool improvement, consolidation, a new tool, or no change
can each be sufficient. New tools need a concrete unmet job and a reason
the smaller options cannot solve it.

The [six behavior exercises](https://github.com/Catalyst-Forge-LLC/gap-last/tree/master/fixtures/engineering)
include an existing undocumented JSON handoff, a semantic mismatch,
similar functions with different constraints, and a check that overturns
an initial caching proposal. They are fictional evaluation inputs.

## What runs where

The skill runs in your agent. It does not supply a universal runtime,
an apply skill, or implementation permission. Use existing authorization
for the task. Other Catalyst Forge tools are optional.

The local `gaplast` CLI continues to validate and emit **reconstruction**
artifacts. It does not validate engineering records or call a model.
Return an assessment in chat, or ask for a named Markdown record. Keep
proposed changes separate from applied and verified results.
