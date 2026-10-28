# Agent Instructions

## Package manager
- Use **pnpm** only (`pnpm install`; do not write npm/yarn lockfiles).

## Commands
| Task | Command |
|------|---------|
| Scrape Ryu | `pnpm scrape` |
| Scrape all | `pnpm scrape -- all` |
| Docs dev | `pnpm docs:dev` |
| Docs build | `pnpm docs:build` |
| Test | `pnpm test` |
| Lint | `pnpm lint` |
| Typecheck | `pnpm typecheck` |

## Architecture
- `scraper/` = TypeScript CLI. Use MediaWiki **API** (`/api.php`) only — not browser HTML as the primary path.
- `docs/` = VitePress source. `docs/characters/**` and `docs/public/characters/**` are **scrape outputs**.
- Parsers: HTML → typed data → `write-md.ts`. Keep HTTP/FS out of parse modules.

## Generated files
- Do not hand-fix scraped Markdown/images; change parsers and re-run `pnpm scrape`.
- Committing generated MD + images is intentional (Git = scrape history).

## Design / UI
- Follow **`DESIGN-SYSTEM.md`** for VitePress theme, colors, borders, typography, and tables.
- Light + dark themes with VitePress appearance toggle (`appearance: true`).

## Conventions
- TypeScript strict, ESM.
- Vitest + fixtures under `scraper/fixtures/`.
- Cheerio selectors: document in scraper parse modules / `CURSOR-PROMPT-SCRAPER.md` when they change.
- Rate-limit image downloads; one failed image must not fail the whole run.
- Attribute SuperCombo Wiki in generated page footers.

## External references
| Need | File |
|------|------|
| Setup | `README.md` |
| Visual system | `DESIGN-SYSTEM.md` |
| DOM selectors | `CURSOR-PROMPT-SCRAPER.md` (selectors section) |

## Out of scope
- Do not scrape Capcom official sites or authenticated APIs.
- Do not bypass Cloudflare with stolen cookies; API `action=parse` is the supported path.
