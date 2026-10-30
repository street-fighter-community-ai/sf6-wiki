---
title: Limitações do compilador
description: O que o sf6-drill/v1 não faz bem — a IA não deve inventar workarounds mágicos.
---

# Limitações do compilador

Seja honesto no YAML e na `description`. Drills “bonitos” que falham no jogo destroem confiança no pipeline.

## Não suportado / frágil

| Pedido | Realidade v1 |
|--------|----------------|
| Drive Rush perfeito (`DR`, `PDR`, `DRC`) | Heurística de dash forward — **não** replica DR do jogo |
| Charge (`[2]8HK`, holds longos de direção) | Sem sintaxe de charge dedicada; use `steps` com `hold`/`walk` longos se inevitável |
| `[LP]` hold button charge | Só via `hold` + frames; fácil errar |
| Jump / air strings (`j.HK`, empty jump) | `j.` é stripado do mask; não há física de jump |
| `CH` / `PC` / `AA` como estado | Ignorados como input; não colocam o dummy em counter-hit |
| Parries / Drive Parry / DI timing perfeito | Fora do escopo do codec de action record simples |
| `raw_inputs` / `mData*` no YAML | **Proibido** no formato humano — o compilador gera |
| Alternativa `A/B` numa sequence | Não escolhe ramo — use [slots](/ia-training/slots) |
| Cancel windows por personagem | Heurística global — ver [Timings](/ia-training/timings) |
| Mais de 8 slots | Limite do Training Mode |

## O que fazer em vez disso

| Precisa de… | Abordagem |
|-------------|-----------|
| DR real | Gravar no jogo e decompilar; ou `steps` aproximados + aviso |
| Counter-hit convert | Treino ofensivo com dummy em “stand” e nota “iniciar em CH”; ou aceitar que é laboratório manual |
| Charge character | `steps` com holds longos + calibrar; tags `advanced` |
| Safe jump | Documentar setup; gravação manual se jump for essencial |
| Timing perfeito | `steps` + `wait: Nf` + “calibrar” na description |

## Mensagens que a IA pode emitir

Ao gerar o YAML, se usar área frágil:

```yaml
meta:
  description: |
    AVISO: sequência usa token DR — compilador só aproxima dash.
    Prefira regravar o slot no jogo se o timing de DR for o foco do treino.
```

## Compatibilidade

- IDs de personagem: tabela em [Drill YAML](/mods/drill-yaml) / `characters.ts` do compilador.
- Personagens novos: se o id não existir, avise o humano — não chute id.
