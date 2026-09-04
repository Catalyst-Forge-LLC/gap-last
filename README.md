# Gap Last

Don't invent a cause until you can name the gap.

This folder is the instrument repo for **Gap Last** (method:
constraint-first reconstruction). Start at [`GENESIS.md`](GENESIS.md).
Run the skill from [`skills/gaplast/SKILL.md`](skills/gaplast/SKILL.md).
Copied sources live in [`docs/`](docs/).

Site (held, not live): [gaplast.dev](https://gaplast.dev).
npm name hold: [`gaplast`](https://www.npmjs.com/package/gaplast).
This tree is MIT and **private** until Sam publishes. Do not publish
from an agent.

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
```

Sentence first on the homepage. The deed holds the nine-section order.
The living spec and paper stay in `docs/` for the instrument. They are
not site pages. Do not publish to npm from an agent.
