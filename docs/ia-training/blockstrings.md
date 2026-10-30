---
title: Blockstrings
description: Safe/unsafe, gaps e como montar drills de defesa a partir de strings do wiki.
---

# Blockstrings

Drill de **blockstring** = o dummy pressiona; o jogador pratica block delay, DI, mash window ou respeito.

## Tags

`blockstring`, `frametrap`, `role:dummy`, opcionalmente `anti_di`, `drive_steal`.

## O que a IA deve extrair das notes do wiki

| Sinal no texto | Ação no YAML |
|----------------|--------------|
| “safe on block” | slot principal, weight alto |
| “unsafe” / “−4” / “punishable” | slot separado `punish` **ou** note na description para o player punir |
| “frame trap” | `frametrap` + gap via `steps`/`dl.` |
| “gap” / “mashable” | documentar; às vezes `wait` maior entre hits |
| “on hit confirms into…” | **não** misturar no mesmo slot de block — slot `hitconfirm` / `convert` separado |

## Um personagem, dois modos

Pressão no **block** ≠ confirm no **hit**.

```yaml
slots:
  - id: 1
    label: Block pressure (stop before confirm)
    weight: 2
    sequence: "5MP > 214LP"      # sem ~6P se 6P for commit/unsafe

  - id: 2
    label: Hit confirm into follow-up
    weight: 1
    sequence: "5MP > 214LP~6P"
```

A.K.I. example: wiki diz que `214LP~6P` deixa −16 no block — o slot de blockstring pode parar no `214LP` ou incluir o ender **só** se o objetivo for treinar o punish.

## Frametrap explícito

```yaml
- id: 3
  label: Frametrap 5MP → 2MP
  weight: 1
  steps:
    - move: 5MP
    - wait: 8f          # gap intencional — calibrar
    - move: 2MP
    - wait: 20f
```

## Checklist

- [ ] `role:dummy` + `blockstring`
- [ ] Unsafe enders isolados ou rotulados
- [ ] Confirms de hit em outros slots / outro arquivo
- [ ] `playback: random` se houver várias strings
