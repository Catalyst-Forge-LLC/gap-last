# Gap Last

Reconstruct what happened before committing to an explanation.

This folder is the instrument repo for **Gap Last** (method:
constraint-first reconstruction). Start at [`GENESIS.md`](GENESIS.md).
Run the skill from [`skills/gaplast/SKILL.md`](skills/gaplast/SKILL.md).
Method sources live in [`docs/`](docs/).

Site: [gaplast.dev](https://gaplast.dev).
Rechecked 10 September 2026: npm [`gaplast`](https://www.npmjs.com/package/gaplast)
is still version `0.0.0`, description “Name hold.” The usable product is
the skill in this repo, not that package. This tree is MIT and **private**
until Sam publishes. Do not publish from an agent.

A labeled ordinary incident (intermittent CI unlink) is on the
[site home](https://gaplast.dev).

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
The living spec and paper stay in `docs/` for the instrument. They are
not site pages. Do not publish to npm from an agent.
