---
title: Run the skill
description: Give an agent the folder so it keeps the Gap Last method. The CLI checks a reconstruction. It does not propose a cause.
order: 2
---

The skill is a folder you give an agent so it keeps the [Gap Last method](/method). Get the folder into a skills directory, then ask it to reconstruct. The CLI in this repo checks a reconstruction file. It does not call a model, and it does not propose a cause.

Filling a file by hand is the [template](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/docs/reconstruction-template.md). That is writing the reconstruction, not installing the skill.

The primary way to start is this page or the [GitHub repo](https://github.com/Catalyst-Forge-LLC/gap-last). Rechecked 10 September 2026: npm [`gaplast`](https://www.npmjs.com/package/gaplast) is a name hold (`0.0.0`). It does not contain this implementation.

## Download the ZIP

[Download gaplast.zip](/skills/gaplast.zip)

Unpack it. Move the `gaplast` folder (the one that contains `SKILL.md`) into a skills directory.

On claude.ai, skip unpacking. Upload the ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/gap-last.git
```

Copy `skills/gaplast/` from the clone into a skills directory.

## npm is a reservation

Do not `pnpm add gaplast` expecting the skill. After a real publish, this page will say so.

## Skills directories

- Claude Code, every project: `~/.claude/skills/gaplast/`
- Claude Code, one repo: `.claude/skills/gaplast/`
- Cursor: `.cursor/skills/gaplast/` or `~/.cursor/skills/gaplast/`

The folder you drop in must be named `gaplast` and must contain `SKILL.md`.

## What you say

- Run Gap Last on this claim.
- `/full` on this packet.
- `/bound` only. Do not propose a cause yet.
- `/reopen` with this new trace.
- Who caused it? (The skill reconstructs first.)

## What it does not run on

A proof you can actually write. A controlled experiment you can actually run. A statistics problem whose bottleneck is sampling. Time-limited action against an opponent. That last one is OODA's job. Say so and stop.

## CLI

From a clone of this repo:

```bash
pnpm install
pnpm gaplast validate path/to/reconstruction.json
pnpm gaplast path/to/reconstruction.json
```

A raw packet that is not a reconstruction gets a thin open bound and no hypotheses. No cause is proposed.
