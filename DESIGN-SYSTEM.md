# Design System — sf6-wiki (VitePress)

Tone: **Grok Bot–like dark UI** (quiet neutrals, high contrast, light borders, no heavy shadows) + **SF6 accents** (red / cyan / rare gold).

## Appearance
- VitePress: `appearance: true` — light + dark with the built-in sun/moon toggle in the nav.
- Default follows system preference; user choice persists in `localStorage`.
- Tokens live in `docs/.vitepress/theme/custom.css` (`:root` = light, `html.dark` = dark).

## Color tokens
Map these to VitePress CSS variables (`--vp-c-bg`, `--vp-c-brand-1`, etc.) in `docs/.vitepress/theme/custom.css`.

### Dark (`html.dark`)

| Token | Hex | Role |
|-------|-----|------|
| `--bg` | `#0b0b0f` | Page background |
| `--bg-elevated` | `#14141a` | Sidebar, cards, elevated surfaces |
| `--bg-mute` | `#1c1c24` | Hover, code blocks, table header |
| `--border` | `#2a2a33` | Default 1px borders |
| `--text` | `#ececf1` | Body text |
| `--text-mute` | `#9b9ba8` | Secondary / captions |
| `--accent` | `#e10600` | Brand / links / active tab / focus ring |
| `--accent-2` | `#3de7ff` | Notation chips, badges, secondary highlights |
| `--accent-3` | `#f5c518` | Rare: section callouts, “arcade” emphasis |

### Light (`:root`)

| Token | Hex | Role |
|-------|-----|------|
| `--bg` | `#f5f5f7` | Page background |
| `--bg-elevated` | `#ffffff` | Sidebar, cards, elevated surfaces |
| `--bg-mute` | `#ebebef` | Hover, code blocks, table header |
| `--border` | `#d8d8e0` | Default 1px borders |
| `--text` | `#1a1a22` | Body text |
| `--text-mute` | `#5c5c6a` | Secondary / captions |
| `--accent` | `#e10600` | Same brand red |
| `--accent-2` | `#0891b2` | Cyan tuned for light surfaces |
| `--accent-3` | `#c9a012` | Gold tuned for light surfaces |

### Usage rules
- Primary interactive color = `--accent` (red).
- Cyan (`--accent-2`) only for move notation / tags — not for every link.
- Gold (`--accent-3`) sparingly (≤1 emphasis per view).
- Do not introduce pure white backgrounds or gray light-mode leftovers.

## Radius & borders
| Token | Value |
|-------|-------|
| `--radius` | `10px` |
| `--radius-sm` | `6px` |

- Default border: `1px solid var(--border)`.
- Cards: `background: var(--bg-elevated)`; hover = slightly lighter border, **no** large drop shadows (Grok-like).
- Focus: `outline: 2px solid var(--accent)`; offset 2px.

## Typography
- UI / prose: VitePress default sans (or Inter-equivalent).
- Frame data, combo strings, inputs: monospace (`ui-monospace`, `Menlo`, `Consolas`, fallbacks).
- Body line-height comfortable (~1.7); avoid all-caps shouting headings.
- H1/H2 weight semibold; keep hierarchy clear, not decorative.

## Layout density
- Docs sidebar + content like a calm product UI, not a busy gaming portal.
- Generous spacing between sections; tables may be denser than prose.
- Prefer content width readable for long strategy text.

## Components

### Links
- Default: `--text` or muted; hover/active: `--accent`.
- Visited: same as default (no purple).

### Tables (frame data / combos)
- Header: `background: var(--bg-mute)`; bottom border accent optional (`1px solid` red at low opacity).
- Rows: subtle zebra on `--bg` / `--bg-elevated`.
- Cells with frame advantage: preserve semantic color only if scraped; otherwise keep neutral + bold numbers.
- Horizontal scroll wrapper OK for wide tables; sticky first column optional.

### Code / notation
- Inline code: `bg-mute`, `radius-sm`, cyan tint only for known input tokens if styled.
- Do not rainbow the whole page with `text-color--N` from the wiki — normalize to theme tokens.

### Cards / callouts
- Info: border `--border`, bg elevated.
- Warning / patch: left border `--accent-3` or `--accent`.

### Images
- Character portraits and move images on dark surface; slight `radius-sm`.
- No heavy glow filters.

## VitePress mapping (implement once)
| Design token | Typical VP var |
|--------------|----------------|
| `--bg` | `--vp-c-bg` |
| `--bg-elevated` | `--vp-c-bg-soft` / `--vp-sidebar-bg-color` |
| `--bg-mute` | `--vp-c-bg-mute` |
| `--border` | `--vp-c-divider` / `--vp-c-border` |
| `--text` | `--vp-c-text-1` |
| `--text-mute` | `--vp-c-text-2` |
| `--accent` | `--vp-c-brand-1` / `--vp-c-brand-2` |

## Do / Don’t
- Do keep the chrome quiet so frame-data tables stay readable.
- Do force dark everywhere (home, chars, search).
- Don’t copy Capcom logos beyond mirrored wiki assets with attribution.
- Don’t add neon gradients, glassmorphism stacks, or light mode “just in case”.
