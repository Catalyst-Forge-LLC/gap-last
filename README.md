# Gap Last

Reconstruct what happened before committing to an explanation.

## Install in your agent

1. Download [gaplast.zip](https://gaplast.dev/skills/gaplast.zip) (includes `SKILL.md` and `references/`).
2. Put the folder where your agent reads skills (`.cursor/skills/gaplast/`, `.claude/skills/gaplast/`, or upload the zip on Claude.ai).
3. Ask:

> Use Gap Last on this claim. Follow the installed Gap Last skill. Reconstruct first. Do not name a cause until you have named the gap. “None yet justified” is allowed for eliminations and hypotheses.
>
> `pnpm test` failed twice on GitHub Actions `ubuntu-latest` at 09:14 and 09:31 on 8 September 2026. The same commit passed locally on Windows. The error was `EPERM: unlink dist/cli.js`. The third Actions run passed. No source change.

Full host routes: [gaplast.dev/run](https://gaplast.dev/run).

The four-line exercise on the [home page](https://gaplast.dev) needs no install. npm [`gaplast`](https://www.npmjs.com/package/gaplast) is a name hold (`0.0.0`). It does not contain this implementation.

Skill source: [`skills/gaplast/SKILL.md`](skills/gaplast/SKILL.md). Method sources also live in [`docs/`](docs/). Builder notes: [`GENESIS.md`](GENESIS.md).

Posts: [Langtang](https://gaplast.dev/posts/2026-08-31-langtang-the-bound-moved), [Chesterton's Fence](https://gaplast.dev/posts/2026-09-04-the-other-side-of-chestertons-fence).

## CLI

```bash
pnpm install
pnpm test
pnpm gaplast validate fixtures/reconstructions/langtang-thursday.json
pnpm gaplast fixtures/reconstructions/langtang-wednesday.json
```

`pnpm gaplast` is the command. `pnpm exec gaplast` also works after
install. This package is linked to itself so Windows can find the bin.

Reads a reconstruction (JSON or markdown) and writes canonical
markdown. A raw packet that is not a reconstruction gets a thin open
bound and no hypotheses. The CLI does not call a model.

Repo: [Catalyst-Forge-LLC/gap-last](https://github.com/Catalyst-Forge-LLC/gap-last).

## Site

FilePress under `site/`. LocalSlip lease `gaplast-site` on 5200.

```bash
pnpm site:dev
pnpm site:build
pnpm ship
```

Sentence first on the homepage. Method holds the nine-section order.
Posts stay under `site/posts/`. The living spec and paper stay in
`docs/` for the instrument. They are not site pages. Do not publish
to npm from an agent.

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)
