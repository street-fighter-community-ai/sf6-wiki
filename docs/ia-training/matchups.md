---
title: Drills de matchup
description: Como gerar treinos situacionais a partir das páginas Matchups + kit do oponente.
---

# Drills de matchup

Além do lab “vs o próprio kit”, a IA pode montar drills **situacionais** usando `/characters/{você}/matchups` e o kit do oponente em `/characters/{oponente}/…`.

## Padrão

```text
Você (player) treina resposta
Dummy = oponente (role:dummy)
Slots = as 2–5 opções que o matchup diz para respeitar
```

## Arquétipos de matchup → tags

| Problema no matchup | Tags / slots |
|---------------------|--------------|
| Comando throw / SPD | `anti_air` não; footsies + `shimmy` / jump / backdash — documentar; jump frágil |
| Fireball game (JP, Guile, Sagat) | slots de projectile + walk-up throw; `blockstring` |
| Drive Rush pressure | strings curtas; aviso [DR limitado](/ia-training/limitacoes) |
| Overhead / low mix | slots high/low separados (`mixup`) |
| Anti-air fraco no MU | dummy com `8` + botão se possível; senão nota “gravar jump no jogo” |
| Install / poison | tag `install` / `poison` + gauges |

## Exemplo de meta

```yaml
meta:
  title: "Defesa vs Sagat Nexus (Ryu)"
  tags:
    - ryu
    - vs:sagat
    - role:dummy
    - blockstring
    - mixup
    - intermediate
  description: |
    Dummy = Sagat. Player = Ryu praticando block/DI vs enders.
    Fonte: characters/ryu/matchups + characters/sagat/combos
character: Sagat   # dummy character id no Training Mode
```

Importante: `character:` no YAML é o **dummy** do Training Mode (quem está gravado), não necessariamente o personagem que *você* joga. Deixe isso explícito na `description`.

“Treino defensivo vs Akuma” ⇒ `character: Akuma` + slots com **Demon Flip / pokes do Akuma**.  
Não grave `block` / `punish` / `anti_air` como steps — isso o humano faz no controle. Ver [Contrato — Regra #1](/ia-training/contrato#regra-1-ler-antes-de-tudo).

## Checklist matchup

- [ ] Leu matchup do **seu** personagem
- [ ] Confirmou moves do oponente nas páginas dele
- [ ] Slots = opções reais, não kit inteiro
- [ ] `vs:{slug}` nas tags
- [ ] Sem `/` em sequences

## Extensão futura

Quando houver mais gold files, prefixar `vs-{oponente}-…yml` na [biblioteca](/ia-training/biblioteca).
