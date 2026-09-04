---
title: Run the skill
description: The skill is a folder. Get it into a skills directory, then ask an agent to reconstruct.
order: 2
---

The skill is a folder: `SKILL.md` plus what that file reads. Get the folder, then put it in a skills directory. The CLI in this repo validates a reconstruction. It does not call a model.

Wiring a reconstruction file by hand is the [template](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/docs/reconstruction-template.md). That is filling a file, not installing the skill.

## Download the ZIP

[Download gaplast.zip](/skills/gaplast.zip)

Unpack it. Move the `gaplast` folder (the one that contains `SKILL.md`) into a skills directory.

On claude.ai, skip unpacking. Upload the ZIP under Settings, Customize, Skills.

## Clone the repo

```bash
git clone https://github.com/Catalyst-Forge-LLC/gap-last.git
```

Copy `skills/gaplast/` from the clone into a skills directory.

## Install from npm

The ZIP or the clone is the way to get the skill today. After a real publish:

```bash
pnpm add -D gaplast
```

Copy `node_modules/gaplast/skills/gaplast/` into a skills directory.

## Skills directories

- Claude Code, every project: `~/.claude/skills/gaplast/`
- Claude Code, one repo: `.claude/skills/gaplast/`
- Cursor: `.cursor/skills/gaplast/` or `~/.cursor/skills/gaplast/`

The folder you drop in must be named `gaplast` and must contain `SKILL.md`.

## What you say

- Run Gap Last on this claim.
- `/full` on this packet.
- `/bound` only. Do not invent a cause.
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

A raw packet that is not a reconstruction gets a thin open bound and no hypotheses. No cause is invented.
