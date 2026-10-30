---
title: Contrato para a IA
description: Checklist obrigatório para gerar YAML sf6-drill/v1 a partir deste site.
---

# Contrato para a IA

Use este documento como **contrato** ao gerar drills. Se algo conflitar com páginas de personagem, preferir dados do personagem + esta seção; **nunca** inventar `raw_inputs` ou `title.mData*`.

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

## Prompt curto (copiar)

```text
Você gera drills Street Fighter 6 no schema sf6-drill/v1 deste wiki.
Leia /ia-training/contrato, taxonomia, notacao, limitacoes e a página Combos/Strategy do personagem.
Saída: YAML válido, 1–8 slots, tags corretas, sem raw_inputs.
Alternativas A/B = slots separados com weight.
Timing crítico = steps + wait em frames.
```
