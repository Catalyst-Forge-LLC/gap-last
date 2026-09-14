---
title: Install in your agent
description: Give an agent the folder so it keeps the Gap Last method. The four-line exercise needs no install. The CLI checks a reconstruction. It does not propose a cause.
order: 2
---

The four-line exercise on the [home page](/) needs no install. This page is for the skill: an agent that keeps the [Gap Last method](/method).

Filling a file by hand uses the [template](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/docs/reconstruction-template.md). That is writing the reconstruction, not installing the skill.

The CLI in this repo checks a reconstruction file. It does not call a model, and it does not propose a cause.

npm [`gaplast`](https://www.npmjs.com/package/gaplast) is a name hold (`0.0.0`). It does not contain this implementation.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download [gaplast.zip](/skills/gaplast.zip).

### Add it

Unzip it. You should see `SKILL.md`.

Put that folder in the project you are reconstructing:

`.cursor/skills/gaplast/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

Ask Cursor to use Gap Last on the incident below. If it writes observations, what is already eliminated, and a leftover question *before* a cause, it found the skill.

### Try it

Paste this packet, then ask:

> Use Gap Last on this claim. Follow the installed Gap Last skill. Reconstruct first. Do not name a cause until you have named the gap.
>
> `pnpm test` failed twice on GitHub Actions `ubuntu-latest` at 09:14 and 09:31 on 8 September 2026. The same commit passed locally on Windows. The error was `EPERM: unlink dist/cli.js`. The third Actions run passed. No source change.

### Find the result

Success looks like this shape, not identical wording from every model:

- What was observed, marked for certainty
- At least one mechanism already eliminated
- A leftover gap, named as a question
- A candidate hypothesis only for that question, if one is allowed
- No “who caused it?” as the first move

The hypothesis is not the established cause.

## Claude Code

### Get it

Download [gaplast.zip](/skills/gaplast.zip).

### Add it

Unzip, then put the folder in the repo:

`.claude/skills/gaplast/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/gaplast/` instead.

### Confirm it

Same check as Cursor: observations, eliminations, and a named gap before a cause.

### Try it

Same request as [Cursor](#try-it).

### Find the result

Same shape as [Cursor](#find-the-result). When you want the work to stay, ask for the nine-section file.

## Claude.ai

### Get it

Download [gaplast.zip](/skills/gaplast.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request below. If the agent reconstructs before it explains, it loaded the skill.

### Try it

Same packet and request as [Cursor](#try-it).

### Find the result

The reconstruction appears in the chat.

## After the reconstruction

There is no apply skill. Read the leftover question. A later trace can move it. `/reopen` is for new evidence, not for swapping in a preferred cause.

## Other ways to ask

Once the first run works:

- `/full` on this packet.
- `/bound` only. Do not propose a cause yet.
- `/reopen` with this new trace.
- Who caused it? (The skill reconstructs first.)

Those are later shortcuts. They are not the install check.

## What it does not run on

A proof you can actually write. A controlled experiment you can actually run. A statistics problem whose bottleneck is sampling. Time-limited action against an opponent. That last one is OODA's job. Say so and stop.

## Other methods

### Fill a file by hand

The [template](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/docs/reconstruction-template.md) is the nine-section artifact. No agent required.

### Clone

```bash
git clone https://github.com/Catalyst-Forge-LLC/gap-last.git
```

Copy `skills/gaplast/` into the same destination you would use above.

### CLI

From a clone of this repo. Validates or emits a reconstruction. No model call.

```bash
pnpm install
pnpm gaplast validate path/to/reconstruction.json
pnpm gaplast path/to/reconstruction.json
```

A raw packet that is not a reconstruction gets a thin open bound and no hypotheses. No cause is proposed.

### npm is a reservation

Do not `pnpm add gaplast` expecting the skill or the CLI. After a real publish, this page will say so.

### Install for all projects

- Cursor: `~/.cursor/skills/gaplast/`
- Claude Code: `~/.claude/skills/gaplast/`

Same folder shape. The first-run check is the same.
