---
title: Léxico de notação
description: Tokens canônicos que o compilador sf6-drill/v1 aceita — use só esta lista.
---

# Léxico de notação

Alinhado a SuperCombo + o que [`sequenceToSteps` / `tokenToMask`](/mods/drill-yaml) realmente compilam. Se o token **não** estiver aqui, não invente — use `steps:` ou peça confirmação.

## Separadores

| Símbolo | Efeito | Default de gap |
|---------|--------|----------------|
| `>` | Cancel | `cancel_gap` (6f) |
| `,` | Link | `link_gap` (14f) |
| `~` | Follow-up / chain / TC | `followup_gap` (4f) |

## Delay

| Token | Efeito |
|-------|--------|
| `dl.5f` | Espera 5 frames |
| `dl.12` | Espera 12 frames |
| `dl.2LP` | `delay_default` (3f) + move `2LP` |

## Normals e botões

Formato: `[direção][BOTÃO]`.

- Direções numpad: `1`–`9` (`5` = standing / neutro)
- Botões: `LP` `MP` `HP` `LK` `MK` `HK`
- Atalhos: `P` (=LP), `K` (=LK), `PP` (LP+MP), `KK` (LK+MK)
- Exemplos: `5HK`, `2LP`, `6HP`, `3MP`, `2PP`, `5LP~LP` → escreva `5LP~LP` (o `~` é separador)

`j.` / `8j.` no início são **ignorados no mask** (não simulam airborne de verdade).

## Specials / supers (motion + botão)

- Motions: `236`, `214`, `623`, `421`, `22`, `360`-ish digits, `236236`, etc.
- Exemplos: `236HP`, `214LP`, `623PP`, `236PP`, `22P`

O compilador expandе cada dígito da motion com `motion_step` (default 2f) e depois segura o botão `button_hold` (3f).

## Throws

| Token | Mask |
|-------|------|
| `throw` / `LPLK` | LP+LK neutro |
| `6.throw` / `f.throw` | forward throw |
| `4.throw` / `b.throw` | back throw |

## Deslocamento

| Token | Efeito aproximado |
|-------|-------------------|
| `66` / `FF` / `WALK` | walk forward ~12f |
| `44` / `BB` | walk back ~12f |
| `DR` / `PDR` / `DRC` | **heurística** de dash (não é DR perfeito) — ver [limitações](/ia-training/limitacoes) |

## Contexto (NÃO é input)

Remova da `sequence` ou deixe só em texto:

- `CH`, `PC`, `AA`
- `CH 5MK` → label “CH 5MK convert”; sequence começa em `5MK` ou documenta que o dummy já está em hitstun (treino ofensivo)

## `steps` explícitos

Quando a notação de combo não basta:

```yaml
steps:
  - move: 5HK
    hold: 3f
  - wait: 4f
  - move: throw
  - walk: 4
    frames: 10f
  - hold: 5HK
    frames: 5f
```

| Step | Uso |
|------|-----|
| `move` | Token do léxico |
| `wait` | Gap em frames |
| `walk` | Direção `2`/`4`/`6`/`8`… |
| `hold` | Segurar mask N frames |
| `raw` | Escape hatch — **IA não deve usar** |

## Mapa rápido personagem → exemplos válidos

| Personagem | Sequences típicas válidas |
|------------|---------------------------|
| A.K.I. | `5HK > 2PP~K, 2LP > 2LP > 236HP` · `5HK > 214LP~6P` · `5MP > 214LP~6P` |
| Ryu | `5MK > 236HP` · `2MK > 236MP` · `5HP > 623HP` |
| Sagat | `2MK > 236LK` · strings de Tiger Nexus via slots separados por ender |

Detalhes de rotas: páginas Combos de cada personagem.
