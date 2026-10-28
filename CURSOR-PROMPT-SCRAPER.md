# Prompt Cursor — criar o scraper + VitePress (sf6-wiki)

Cole este prompt inteiro no Cursor Agent/Composer na pasta do projeto (vazia ou só com `AGENTS.md` / `DESIGN-SYSTEM.md` se já tiver copiado).

Você vai **criar e concluir** o projeto **sf6-wiki**. Trabalhe em **loop**: implemente → rode comandos → leia a saída → corrija → repita. **Não declare concluído** e **não peça confirmação entre iterações** até TODOS os critérios de aceite passarem.

Se `AGENTS.md` e `DESIGN-SYSTEM.md` existirem na raiz, **obedeça-os**. Se não existirem, crie-os conforme as seções “AGENTS” e “Design” abaixo antes de codar o tema.

---

## 1. Objetivo do produto

- Scraper em **TypeScript (Node)** que coleta dados de **Street Fighter 6** da **SuperCombo Wiki**.
- Gera **Markdown + imagens** para um site **VitePress**.
- **Uma linguagem só**: TypeScript para scraper e documentação.
- **Histórico**: Git (cada scrape bem-sucedido sobrescreve artefatos de forma idempotente; commits = versões).
- Escopo mínimo obrigatório: personagem **Ryu** completo. Depois: todos os personagens do hub.
- Conteúdo por personagem: **overview, moves, frame data, combos, strategy, matchups, resources** (+ imagens).

Fonte:
- Hub: https://wiki.supercombo.gg/w/Street_Fighter_6
- API: `https://wiki.supercombo.gg/api.php` com `action=parse&page=...&prop=text|sections&redirects=1&format=json`
- **NÃO** usar browser/Cloudflare como caminho principal de scrape. O HTML de `parse` é o conteúdo de `.mw-parser-output` e é o que os seletores descrevem.

---

## 2. Stack obrigatória

| Papel | Escolha |
|-------|---------|
| Linguagem | TypeScript strict, ESM (`"type": "module"`) |
| Package manager | **pnpm** |
| HTTP | `ofetch` ou `undici` |
| HTML | `cheerio` |
| Runner | `tsx` |
| Docs | `vitepress` |
| Testes | `vitest` |
| Lint | `@antfu/eslint-config` (sem Prettier separado) |
| Opcional | `zod`, `p-limit` |

Scripts:
- `pnpm scrape` (default Ryu)
- `pnpm scrape -- all`
- `pnpm docs:dev` / `docs:build` / `docs:preview`
- `pnpm test` / `lint` / `typecheck`

---

## 3. Estrutura do repositório

```text
sf6-wiki/
├── package.json
├── pnpm-lock.yaml
├── eslint.config.js
├── AGENTS.md
├── DESIGN-SYSTEM.md
├── README.md
├── scraper/
│   ├── src/
│   │   ├── index.ts
│   │   ├── mediawiki.ts
│   │   ├── characters.ts
│   │   ├── images.ts
│   │   ├── write-md.ts
│   │   ├── types.ts
│   │   └── parse/
│   │       ├── overview.ts
│   │       ├── moves.ts
│   │       ├── frame-data.ts
│   │       ├── combos.ts
│   │       ├── strategy.ts
│   │       ├── matchups.ts
│   │       └── resources.ts
│   └── fixtures/
└── docs/
    ├── .vitepress/
    │   ├── config.ts
    │   └── theme/          # force-dark + custom.css (DESIGN-SYSTEM)
    ├── architecture/
    │   └── selectors.md    # copiar a seção 5 deste prompt
    ├── index.md
    ├── characters/
    │   └── ryu/
    │       ├── overview.md
    │       ├── moves.md
    │       ├── frame-data.md
    │       ├── combos.md
    │       ├── strategy.md
    │       ├── matchups.md
    │       └── resources.md
    └── public/
        └── characters/ryu/
```

Páginas MediaWiki → arquivos:

| Conteúdo | Título API | MD |
|----------|------------|-----|
| Overview texto | `Street Fighter 6/<Name>/Introduction` | `overview.md` |
| Movelist | `Street Fighter 6/<Name>` | `moves.md` |
| Frame data | `Street Fighter 6/<Name>/Frame data` (URL `Frame_data`) | `frame-data.md` |
| Combos | `.../Combos` | `combos.md` |
| Strategy | `.../Strategy` | `strategy.md` |
| Matchups | `.../Matchups` | `matchups.md` |
| Resources | `.../Resources` | `resources.md` |

Personagens de referência já mapeados (mesmo padrão DOM): **Ryu, Cammy, Chun-Li, Ken**.

---

## 4. Design (VitePress)

Seguir **`DESIGN-SYSTEM.md`**. Resumo obrigatório:

- **Force dark only** — sem toggle light.
- Visual: quiet dark estilo Grok Bot + acentos SF6.
- Tokens: bg `#0b0b0f`, elevated `#14141a`, mute `#1c1c24`, border `#2a2a33`, text `#ececf1`, mute text `#9b9ba8`, accent `#e10600`, cyan `#3de7ff`, gold `#f5c518` (raro).
- Radius `10px` / `6px`; bordas 1px; sem shadow pesada.
- Tabelas densas e legíveis; mono em frame data/combos.
- Mapear tokens → variáveis `--vp-c-*` em `docs/.vitepress/theme/custom.css`.

Se `DESIGN-SYSTEM.md` não existir, crie-o com esses tokens antes do tema.

---

## 5. Seletores CSS / padrões DOM (Cheerio)

Validado em Ryu, Cammy, Chun-Li, Ken. Usar no HTML de `action=parse`.

### Raiz
- Conteúdo: tratar root do parse como `.mw-parser-output` (API já devolve o miolo).

### Abas do personagem
- Container: `div.sc-rounded`
- Itens: `span.plainlinks > a > div.sc-btn`
- Ordem: Overview, Combos, Strategy, Matchups, Frame Data, Resources (+ externos)
- Ativa: `a.mw-selflink.selflink` (sem `href`)
- Frame Data path: `/w/Street_Fighter_6/<Name>/Frame_data`
- Introduction **não** tem abas

### Overview / movelist (`Street Fighter 6/<Name>`)
- Seções via `h2`/`h3` ids genéricos (`#Introduction`, `#Normals`, …). Pode haver extras (ex. Chun-Li `#Serenity_Stream`) — **não** hardcodar lista completa.
- Golpe: `h5[id]` (ex. `#5LP`) + corpo
- Bloco: `.movedata-container`
  - Imagens move: `.movedata-flex-images .move-image .movedatacargoimage-img img.mw-file-element`
  - Hitbox: `.hitbox-image img.mw-file-element`
  - Mini frames: `.movedata-flex-framedata` → `.movedata-flex-framedata-table`
  - Inputs Classic/Modern: texto após ícones `SF6_Classic.png` / `SF6_Modern.png` (sem classe dedicada no texto)
- Tabelas: `table.wikitable`, `table.rounded-table`
- **Não** depender de `.infobox`

### Introduction → overview.md
- Prosa `p`; tabelas Classic/Modern `rounded-table` / `wikitable`

### Frame data
- Vitals: `table.cargoTable.noMerge.sortable`
- Golpes: `table.cargoDynamicTable.display`
- Tabber: `.tabber` / `a.tabber__tab` / `article.tabber__panel`
- Colunas (mapear por texto do `th`): input, Damage, Startup, Active, Recovery, Total, Hit Adv, Block Adv, Guard, Cancel, Hitconfirm
- Linhas: `tbody tr` (pode ter `data-details`); advantage com `<span style="color">` → text content

### Combos
- Preferir: `table.wikitable.sortable.sf6-combotable`
- Fallback: `table.wikitable.sortable` (Chun-Li às vezes sem `sf6-combotable`)
- Grupo: primeira row `th[colspan]`
- Colunas header: `tr.sf6-combotable-header` quando existir
- Colunas comuns (por header text): Combo, Position, Damage, Drive Gauge, Super Gauge, Difficulty, Notes, Video

### Strategy
- `h2`/`h3` + `p`; `span.text-color--N` para inputs — normalizar para MD limpo + mono
- `wikitable` / às vezes `sf6-combotable`

### Matchups
- Um `h2` por oponente; heading pode parecer vazio → nome via `span.sc-char-icon a[title|href]`
- Ícone: `span.sc-char-icon img.mw-file-element`
- Favorabilidade + `table.wikitable` por oponente
- `h4` (punishes, safe jumps…) sob cada oponente

### Imagens
| Tipo | Pattern |
|------|---------|
| Portrait | `SF6_<Name>_Portrait.png` |
| Icon | `SF6_<Name>_Icon.png` |
| Move | `SF6_<Name>_<move>.png` (case pode variar) |
| Hitbox | `…_hitbox.png` |
| Classic/Modern | `SF6_Classic.png`, `SF6_Modern.png` |

- Sempre ler `img.mw-file-element[src]` ou `a.mw-file-description[href]` — hash `/images/thumb/x/xx/` **não** é previsível
- Absolutizar com `https://wiki.supercombo.gg`
- Preferir original: remover `/thumb/` e `/NNpx-...`
- Salvar em `docs/public/characters/<slug>/`
- MD deve usar paths locais (`/characters/ryu/...`), não só URL remota
- `p-limit` + falha de imagem não aborta o scrape
- Rodapé de cada MD: fonte SuperCombo + timestamp ISO

Persistir esta seção também em `docs/architecture/selectors.md`.

---

## 6. Regras de engenharia

1. Parsers puros testáveis; I/O só em `mediawiki.ts`, `images.ts`, `write-md.ts`, `index.ts`.
2. Vitest com fixtures HTML reais enxutas (frame-data + combos + movedata no mínimo).
3. Idempotência do scrape.
4. User-Agent identificável + delay entre requests; não martelar a wiki.
5. Não editar MD gerado “na mão” para corrigir conteúdo — corrigir parser.
6. README: install, scrape, docs, Git como histórico, atribuição SuperCombo.
7. Código/comentários em inglês; MD gerado em inglês (fonte EN).

### AGENTS.md (criar se ausente — manter curto)
- pnpm only; tabela de commands; API-only scrape; generated files; pointer para `DESIGN-SYSTEM.md`; out of scope Capcom/cookies.

---

## 7. Ordem de implementação

1. Scaffold pnpm + TS + ESLint + `AGENTS.md` + `DESIGN-SYSTEM.md` + VitePress dark theme mínimo + README  
2. `mediawiki.ts` + smoke Ryu Introduction  
3. Parsers Ryu na ordem: overview → moves → frame-data → combos → strategy → matchups → resources  
4. `images.ts` + rewrite de src no MD  
5. `pnpm scrape` end-to-end Ryu  
6. Vitest parsers críticos  
7. Nav VitePress `characters/ryu/*`  
8. Lista do hub + `scrape all` sem quebrar Ryu  
9. Só então encerrar  

---

## 8. Critérios de aceite (TODOS)

1. `pnpm install` ok  
2. `pnpm lint` e `pnpm typecheck` ok  
3. `pnpm scrape` (Ryu) exit 0  
4. MD reais (não placeholder) em `docs/characters/ryu/` para overview, moves, frame-data, combos, strategy, matchups, resources  
5. `frame-data.md` e `combos.md` com tabelas Markdown e dados reais  
6. Imagens em `docs/public/characters/ryu/` e MD com paths locais  
7. `pnpm docs:build` exit 0  
8. Site dark-only conforme DESIGN-SYSTEM  
9. README completo  
10. ≥3 testes Vitest passando em parsers  
11. `docs/architecture/selectors.md` presente  

Se algo falhar: corrija e rode de novo. Ao terminar, resuma comandos e artefatos gerados.

---

## 9. Skills / contexto (informativo)

O humano pode ter skills do skills.sh (`vitepress`, `vitest`, `antfu`, TDD, web-design-guidelines, frontend-design). Use-as quando relevantes; em conflito, prevalecem **este prompt**, `AGENTS.md` e `DESIGN-SYSTEM.md`.
