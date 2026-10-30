# sf6-wiki

Street Fighter 6 character documentation site: a **TypeScript** scraper pulls SuperCombo Wiki pages via the MediaWiki API and writes **VitePress** Markdown + local images.

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io) 9+

## Setup

```bash
pnpm install
```

## Scrape

Default (Ryu):

```bash
pnpm scrape
```

All characters from the SF6 hub:

```bash
pnpm scrape -- all
```

### MediaWiki API only

Default fetch host is the SuperCombo mirror `https://srk.shib.live/api.php` (same data as production; CF-friendly for Node — same approach as [sf6-sensei](https://github.com/RyoSogawa/sf6-sensei)). Calls use `action=parse` (`prop=text|sections`, `redirects=1`). Article `/w/…` HTML URLs are refused.

Attribution links still point at `https://wiki.supercombo.gg`. **Images hotlink** to `https://srk.shib.live/images/…` (full-size, no local download by default).

If a response is challenge HTML (`Just a moment` / `cf-challenge` / Anubis), that response is treated as failure; the client may fall back to `.cache/wiki` dumps. Optional env:

| Variable | Effect |
|----------|--------|
| `SF6_API_BASE` | Override API URL (default `https://srk.shib.live/api.php`) |
| `SF6_WIKI_ORIGIN` | Override image/origin host (default `https://srk.shib.live`) |
| `SUPERCOMBO_COOKIE` | Browser cookies if you force `wiki.supercombo.gg` |
| `SF6_CACHE_FIRST=1` | Prefer `.cache/wiki` before hitting the network |
| `SF6_DOWNLOAD_IMAGES=1` | Also download images into `docs/public/characters/<slug>/` |
| `SF6_FORCE=1` | Re-scrape even if Markdown already exists |

## Docs

```bash
pnpm docs:dev
pnpm docs:build
pnpm docs:preview
```

Appearance: light + dark with the VitePress sun/moon toggle (see `DESIGN-SYSTEM.md`).

### GitHub Pages

Push to `main` (or run **Actions → Deploy site to GitHub Pages**) builds VitePress and deploys via [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

In the repo: **Settings → Pages → Source = GitHub Actions**.

Site URL (project pages): `https://street-fighter-community-ai.github.io/sf6-wiki/`

## Quality

```bash
pnpm test
pnpm lint
pnpm typecheck
```

## Layout

| Path | Role |
|------|------|
| `scraper/` | CLI + parsers (pure HTML → typed data) |
| `docs/characters/` | Generated Markdown (do not hand-edit) |
| `docs/public/characters/` | Generated images |
| `docs/ia-training/` | Guide for AI agents generating drill YAML |
| `docs/public/ia-training/examples/` | Gold `sf6-drill/v1` YAML samples |
| `AGENTS.md` | Agent / contributor constraints |

## History

Successful scrapes overwrite character artifacts idempotently. **Git commits are the version history** of wiki snapshots.

## Attribution

Frame data, strategy, and media are sourced from the [SuperCombo Wiki](https://wiki.supercombo.gg/w/Street_Fighter_6). Not affiliated with Capcom. Street Fighter is a Capcom trademark.
