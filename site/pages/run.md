---
title: Install in your agent
description: Give an agent the folder so it keeps the Gap Last method. The four-line exercise needs no install. The CLI checks a reconstruction. It does not propose a cause.
order: 2
---

The four-line exercise on the [home page](/) needs no install. This page is for the skill: an agent that keeps the [Gap Last method](/method).

Filling a file by hand uses the [template](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/docs/reconstruction-template.md). That is writing the reconstruction, not installing the skill.

The CLI in this repo checks a reconstruction file. It does not call a model, and it does not propose a cause.

npm [`gaplast`](https://www.npmjs.com/package/gaplast) is a name hold (`0.0.0`). It does not contain this implementation. Do not install that package expecting the skill.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project or user skills folder | Readable skill folder | Host listing / discovery not independently verified in this docs pass |
| Claude Code | Project or `~/.claude/skills/` | Readable skill folder | Same |
| Claude.ai | Uploaded skill zip | Chat | Same |
| Other agents that read `SKILL.md` | Manual copy | Readable skill folder | Unverified; follow that host’s skill docs |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A plausible reconstruction alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

## Cursor

### Get it

Download [gaplast.zip](/skills/gaplast.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder with the tool spec and reconstruction template.

Put that folder in the project you are reconstructing:

`.cursor/skills/gaplast/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

If Cursor lists installed skills, confirm `gaplast` is listed. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading. A model’s unsupported “yes, loaded” is not independent proof.

### Try it

Paste this packet, then ask:

> Use Gap Last on this claim. Follow the installed Gap Last skill. Reconstruct first. Do not name a cause until you have named the gap. “None yet justified” is allowed for eliminations and hypotheses.
>
> `pnpm test` failed twice on GitHub Actions `ubuntu-latest` at 09:14 and 09:31 on 8 September 2026. The same commit passed locally on Windows. The error was `EPERM: unlink dist/cli.js`. The third Actions run passed. No source change.

### Find the result

The reconstruction appears in chat by default. Success looks like this shape, not identical wording from every model:

- What was observed, marked for certainty
- Eliminations only when an observation contradicts them — or an explicit “none yet justified”
- A leftover gap, named as a question
- A candidate hypothesis only for that question, if one is allowed — or none
- No “who caused it?” as the first move

That the example behaved is not the same check as discovery. The hypothesis is not the established cause.

When you want a durable file, ask for a named Markdown path that matches the template headings.

## Claude Code

### Get it

Download [gaplast.zip](/skills/gaplast.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put the folder in the repo:

`.claude/skills/gaplast/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/gaplast/` instead.

### Confirm it

If Claude Code lists skills, confirm `gaplast`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Paste this packet, then ask:

> Use Gap Last on this claim. Follow the installed Gap Last skill. Reconstruct first. Do not name a cause until you have named the gap. “None yet justified” is allowed for eliminations and hypotheses.
>
> `pnpm test` failed twice on GitHub Actions `ubuntu-latest` at 09:14 and 09:31 on 8 September 2026. The same commit passed locally on Windows. The error was `EPERM: unlink dist/cli.js`. The third Actions run passed. No source change.

### Find the result

The reconstruction appears in chat by default. Look for observations, justified eliminations or “none yet justified,” a named leftover gap, and no early cause. Optional: ask for a named Markdown file using the template headings.

## Claude.ai

### Get it

Download [gaplast.zip](/skills/gaplast.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip. The archive must include `SKILL.md` and `references/`.

### Confirm it

If the product shows installed skills, confirm `gaplast`. Otherwise ask the chat to summarize what the Gap Last skill requires before naming a cause.

### Try it

Paste this packet, then ask:

> Use Gap Last on this claim. Follow the installed Gap Last skill. Reconstruct first. Do not name a cause until you have named the gap. “None yet justified” is allowed for eliminations and hypotheses.
>
> `pnpm test` failed twice on GitHub Actions `ubuntu-latest` at 09:14 and 09:31 on 8 September 2026. The same commit passed locally on Windows. The error was `EPERM: unlink dist/cli.js`. The third Actions run passed. No source change.

### Find the result

The reconstruction appears in the chat. Look for observations, justified eliminations or “none yet justified,” and a named leftover gap before any cause.

## After the reconstruction

There is no apply skill. Read the leftover question. A later trace can move it. Asking to reopen with new evidence is for new traces, not for swapping in a preferred cause.

### Update or remove

Replace the installed `gaplast` folder (or re-upload the zip) to update. Delete that folder or remove the uploaded skill to uninstall. Copied skills do not refresh when an npm package changes. This product’s npm name is a reservation anyway.

## Other ways to ask

Once the first run works, you can say:

- Run a full reconstruction on this packet.
- Bound only. Do not propose a cause yet.
- Reopen with this new trace.
- Who caused it? (The skill reconstructs first.)

Slash forms such as `/full`, `/bound`, and `/reopen` are protocol requests inside the skill. They are not registered host commands unless your host registers them. Natural language is enough. Those are later shortcuts. They are not the install check.

## What it does not run on

A proof you can actually write. A controlled experiment you can actually run. A statistics problem whose bottleneck is sampling. Time-limited action against an opponent. That last one is OODA's job. Say so and stop.

## Other methods

### Fill a file by hand

The [template](https://github.com/Catalyst-Forge-LLC/gap-last/blob/master/docs/reconstruction-template.md) is the nine-section artifact. No agent required.

### Clone

```bash
git clone https://github.com/Catalyst-Forge-LLC/gap-last.git
```

Copy `skills/gaplast/` into the same destination you would use above. That folder already includes `references/`.

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

Same folder shape. Discovery and first-use checks are the same.
