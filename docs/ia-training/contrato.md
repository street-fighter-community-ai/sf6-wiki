---
title: Contrato para a IA
description: Checklist obrigatório para gerar YAML sf6-drill/v1 a partir deste site.
---

# Contrato para a IA

Use este documento como **contrato** ao gerar drills. Se algo conflitar com páginas de personagem, preferir dados do personagem + esta seção; **nunca** inventar `raw_inputs` ou `title.mData*`.

## Regra #1 (ler antes de tudo)

O YAML descreve o que o **dummy grava e executa** no Action Record — **golpes em notação SuperCombo** (`236MK~P`, `5HK > 214LP`, `throw`…).

| Correto | Errado |
|---------|--------|
| Dummy faz Demon Flip enders; **você** bloqueia no jogo | `action: block` / `crouch_block` / `punish` / `anti_air` |
| `sequence:` ou `steps:` com `move` / `wait` / `walk` / `hold` | `steps:` com intenções abstratas |
| `label:` no slot | `name:` no slot |
| `training.stage` + `playback` | `training.dummy_settings.block_settings` |
| `weight: 1`–`3` relativo | `weight: 25` como porcentagem |
| Tags só em `meta.tags` (e texto no `label`) | `tags:` dentro do slot como se fossem actions |

Treino “defensivo vs Akuma” ⇒ `character: Akuma`, slots = variações do **ataque do Akuma**. O block/punish é o que o **humano** pratica — **não** entra no YAML.

### Anti-exemplo (NÃO gerar)

```yaml
# ERRADO — inventa menu de treino + ações do jogador
slots:
  - name: "Defesa contra chute baixo"
    steps:
      - action: crouch_block
      - action: punish
```

### Exemplo mínimo correto (defesa vs Demon Flip)

```yaml
schema: sf6-drill/v1
meta:
  title: "Defesa vs Akuma Demon Flip"
  author: gemini
  tags: [akuma, role:dummy, mixup, blockstring, anti_air, intermediate]
  description: |
    Dummy = Akuma. Player pratica stand/crouch block e AA.
    Slots = enders do Demon Raid (236K). Fonte: characters/akuma/frame-data
character: Akuma
training:
  stage: center
  playback: random
  player_drive: full
  dummy_drive: full
slots:
  - id: 1
    label: Demon Flip ~P (overhead)
    weight: 2
    sequence: "236MK~P"
  - id: 2
    label: Demon Flip ~K (low)
    weight: 2
    sequence: "236MK~K"
  - id: 3
    label: Demon Flip empty (low)
    weight: 1
    sequence: "236MK"
```

## Entrada típica do usuário

- Personagem (nome, slug ou id)
- Objetivo do treino (ex.: “blockstring do 5HK”, “oki pós 236HP”, “anti-air”)
- Opcional: corner / midscreen, Drive do dummy, matchup

## Saída obrigatória

Um único documento YAML com:

```yaml
schema: sf6-drill/v1
meta:
  title: "..."          # obrigatório, descritivo
  author: gemini        # ou o nome do agente
  tags: [...]           # ver Taxonomia
  description: |
    ...
character: "..."        # nome/slug/id resolvido pelo site
training: { ... }       # ver Contexto
defaults: { ... }       # só se precisar sobrescrever
slots: [ ... ]          # 1–8
```

Entregar **só o YAML** (ou YAML + 2–3 linhas de como importar). Não entregar JSON a menos que peçam.

## Checklist (antes de responder)

1. `schema: sf6-drill/v1` presente.
2. `character` válido (existe no roster / [IDs](/mods/drill-yaml#character)).
3. Cada slot tem `sequence:` **ou** `steps:` (não misturar os dois no mesmo slot).
4. Máximo **8** slots.
5. Tags da [taxonomia](/ia-training/taxonomia) (`role`, objetivo).
6. Alternativas `A/B` do wiki viraram **slots separados** ([Slots](/ia-training/slots)).
7. Prefixos `CH` / `PC` / `AA` estão em `label`/`description`, não como input mágico.
8. Tokens só do [léxico](/ia-training/notacao); se incerto, usar `steps:` + `wait`.
9. Timing crítico (meaty, frametrap, tick throw) → preferir `steps:` com `wait: Nf`.
10. Consultou [limitações](/ia-training/limitacoes) (`DR`, charge, hold).
11. `training.stage` / gauges coerentes com o objetivo.
12. Citou a página de origem (ex.: Combos do personagem) em `description`.

## O que a IA deve ler neste site

| Precisa de… | Onde |
|-------------|------|
| Rotas / BnB | `/characters/{slug}/combos` |
| O que o golpe faz | `/characters/{slug}/moves`, `frame-data` |
| Plano de jogo / oki | `/characters/{slug}/strategy` |
| Situação vs X | `/characters/{slug}/matchups` |
| Como escrever YAML | `/mods/drill-yaml` + esta seção |
| Exemplos bons | `/ia-training/exemplos`, `/ia-training/biblioteca` |

## Anti-padrões

- Inventar cancel windows ou “é +5 então…” sem fonte.
- Um único slot com `5LP/2LP/5LK > …` (barra = ambiguidade).
- Colocar `raw_inputs: [16,16,…]` no YAML.
- Assumir que `DR` no compilador = Drive Rush perfeito do jogo.
- Drill de **hit confirm** marcado só como blockstring (tags erradas).
- Traduzir tags (`anti_air`, `punish`, `blockstring`) em `action:` — tags são **rótulos**, não inputs.
- Copiar campos do JSON nativo (`block_type`, `dummy_guard`, …) para dentro do YAML humano — ver [Drill YAML](/mods/drill-yaml), não [montar-json](/mods/montar-json), ao **escrever** YAML.
- Usar `name` / `dummy_settings` / `block_settings` — não existem em `sf6-drill/v1`.

## Prompt curto (copiar)

```text
Você gera drills Street Fighter 6 no schema sf6-drill/v1 deste wiki.
Regra #1: slots = inputs do DUMMY em notação SuperCombo (5HK, 236MK~P).
NUNCA use action: block/punish/anti_air — isso o jogador faz no jogo, não o YAML.
Leia /ia-training/contrato (anti-exemplo), notacao, limitacoes e Combos/Frame-data do personagem.
Campos: label (não name), sequence|steps (move/wait/walk/hold), training.stage/playback.
Saída: YAML válido, 1–8 slots, tags só em meta.tags, sem raw_inputs.
```
