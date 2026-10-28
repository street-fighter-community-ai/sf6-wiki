---
title: Formato de Drill (SF6 Training Drill Share)
description: Schema JSON v1, bitmasks de input e codec SF6DRILL:v2 — referência para geração automática por IA/MCP.
---

# Formato de Drill — SF6 Training Drill Share

Referência canônica do formato JSON e do código de clipboard (`SF6DRILL:v2:...`), pensada para **gerar drills a partir de um MCP / agente de IA**.

Para um guia **campo a campo** (o que cada chave significa e como montar `raw_inputs`), veja [Como montar o JSON](/mods/montar-json).

Fonte: mod REFramework **SF6 Training Drill Share** (`docs/DRILL_FORMAT.md` no autorun do mod).

Há **duas versões independentes**:

| Eixo | Campo / prefixo | Valor atual | O que controla |
|------|-----------------|-------------|----------------|
| **Schema** | `version` no JSON | `1` | Formato da tabela drill (campos, semântica) |
| **Codec** | `SF6DRILL:vN:` | `v2` | Como o JSON é compactado e empacotado na string |

Schema e codec evoluem separados. Um drill schema v1 pode ser transportado em codec v1 ou v2.

---

## 1. Fluxo geral

```
┌─────────────────────┐
│  Training Mode SF6  │
└──────────┬──────────┘
           │ capture
           ▼
┌─────────────────────┐
│  Drill table (Lua)  │  ← formato canônico em memória
└──────┬─────────┬────┘
       │         │  serializer.to_clipboard()
       │         │  → codec_v2: chaves curtas + RLE + Base64
       │         ▼
       │   SF6DRILL:v2:<base64>
       │
       │  serializer.to_json()
       ▼
  drills/*.json   (nomes longos, pretty-print)
```

**Import / apply** (caminho inverso):

```
SF6DRILL:v2:...  ──decode──►  drill table  ──migrate──►  restore()  ──►  slots do jogo
JSON cru {...}   ──parse───►       ▲
```

APIs públicas do mod (`serializer.lua`):

- `to_json(drill)` → string JSON (disco)
- `from_json(str)` → drill (com migrate)
- `to_clipboard(drill)` → `SF6DRILL:v2:...`
- `from_clipboard_or_json(str)` → drill (aceita código **ou** JSON)
- `validate_schema(drill)` → ok/erro

---

## 2. Formato canônico (JSON / schema v1)

É o formato que o MCP / IA deve **produzir** (ou consumir). Mesmo salvo em:

`Street Fighter 6/reframework/data/sf6_training_share/drills/*.json`

### 2.1 Estrutura raiz

```json
{
  "version": 1,
  "metadata": { },
  "compatibility": { },
  "training_settings": { },
  "action_record": { }
}
```

Campos **obrigatórios** (`serializer_schema.validate`):

- `version` (= `1`)
- `metadata` com `title` não-vazio
- `compatibility` com `dummy_character_id`
- `action_record` (objeto)

`training_settings` é opcional.

### 2.2 `metadata`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string (UUID) | Identificador estável do drill |
| `title` | string | **Obrigatório** |
| `author` | string | Autor |
| `created_at` | string ISO-8601 | Ex.: `2026-10-21T17:29:06.949Z` |
| `tags` | string[] | Tags livres |
| `description` | string | Setup, ações, goal |

### 2.3 `compatibility`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `dummy_character_id` | number | **Obrigatório.** ID interno do boneco (P2) |
| `dummy_character_name` | string | Nome legível (ex.: `"Ryu"`) |
| `player_character_id` | number\|null | Opcional; restrição de P1 |

O restore **bloqueia** se o dummy atual ≠ `dummy_character_id`.

#### IDs de personagem (Season 3 / Year 4)

| ID | Nome | ID | Nome |
|----|------|----|------|
| 1 | Ryu | 18 | Guile |
| 2 | Luke | 19 | Ed |
| 3 | Kimberly | 20 | E. Honda |
| 4 | Chun-Li | 21 | Jamie |
| 5 | Manon | 22 | Akuma |
| 6 | Zangief | 25 | Sagat |
| 7 | JP | 26 | M. Bison |
| 8 | Dhalsim | 27 | Terry |
| 9 | Cammy | 28 | Mai |
| 10 | Ken | 29 | Elena |
| 11 | Dee Jay | 30 | C.Viper |
| 12 | Lily | 31 | Alex |
| 13 | A.K.I. | 32 | Ingrid |
| 14 | Rashid | 33 | Yasmin |
| 15 | Blanka | | |
| 16 | Juri | | |
| 17 | Marisa | | |

::: tip Alinhar com o wiki
Ao gerar drills a partir das páginas de personagem deste site, use o `dummy_character_name` igual ao slug/nome da página (ex. Ryu → id `1`) e confirme o ID nesta tabela.
:::

### 2.4 `training_settings`

Todos opcionais. Aplicados via `sdk.write_training_settings`.

| Campo | Tipo | Notas |
|-------|------|-------|
| `stage_position` | string | `"Center"`, `"Left Corner"`, `"Right Corner"` |
| `player_drive_gauge` | number | Escala do jogo (ex.: `60000` = cheio) |
| `dummy_drive_gauge` | number | idem |
| `player_super_gauge` | number | |
| `dummy_super_gauge` | number | |
| `dummy_stance` | number | 0 Stand, 1 Crouch, 2 Jump |
| `dummy_guard` | number | 0 None, 1 All, 2 Random, 3 Auto |
| `dummy_guard_switch` | number | |
| `block_count` | number | |
| `switch_block_active` | bool/number | |
| `block_type` | number | 0 Block, 1 Drive Parry, 2 Perfect Parry, 3 Random |
| `drive_reversal` | number | 0 Inactive, 1 Active |
| `drive_reversal_delay` | number | |
| `drive_reversal_count` | number | |
| `throw_escape` | number | 0 Active, 1 Inactive, 2 Random |
| `dummy_recovery` | number | 0 In Place, 1 Backward, 2 Random |
| `dummy_counter` | number | 0 Off, 1 Counter, 2 Punish |
| `dummy_counter_nc` / `dummy_counter_pc` | number | |

### 2.5 `action_record`

Núcleo: o que vira **replay / recording slots** no Training Mode.

```json
"action_record": {
  "global_settings": {
    "info_type": 2,
    "loop_type": 1,
    "play_type": 0,
    "record_countdown": 0,
    "record_start_type": 0,
    "record_type": 1
  },
  "playback_mode": 0,
  "reversal_slots": {
    "damage": [],
    "down": [],
    "guard": []
  },
  "slots": []
}
```

#### `playback_mode` / `play_type`

| Valor | Nome |
|-------|------|
| 0 | Loop |
| 1 | Random |
| 2 | Sequential |

Ao gerar drills, alinhe `playback_mode` e `global_settings.play_type` com a intenção (ex.: footsies aleatório → `1`).

#### `global_settings`

Mapeiam `TM_RecordSetting` nativo:

| JSON | Campo nativo |
|------|----------------|
| `record_type` | `RecordType` |
| `record_start_type` | `RecordStartType` |
| `record_countdown` | `RecordCountDown` |
| `play_type` | `PlayType` |
| `info_type` | `InfoType` |
| `loop_type` | `LoopType` |

Valores típicos (replay contínuo):

```json
{
  "info_type": 2,
  "loop_type": 1,
  "play_type": 0,
  "record_countdown": 0,
  "record_start_type": 0,
  "record_type": 1
}
```

#### `reversal_slots`

Três categorias (`damage`, `down`, `guard`), cada uma com lista (default length 10). Entrada padrão (reversão desligada):

```json
{
  "Type": -1,
  "SkillIndex": -1,
  "IsValid": false,
  "IsActive": false,
  "IsFrame": false,
  "Frame": 0,
  "Delay": 0,
  "Count": 1,
  "Level": 0
}
```

Para drills só de recording, deixe defaults — o codec v2 **omite** essas entradas no wire.

#### `slots[]` — recording nativo

Máximo **8** slots.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `slot_index` | 1..8 | Índice do slot |
| `cmd_type` | number | Geralmente `0` |
| `is_active` | bool | Habilitado no random/loop |
| `is_loop` | bool | |
| `is_valid` | bool | Slot com conteúdo |
| `negative_edge` | bool | |
| `state` | number | Ex.: `1` em slots gravados |
| `weight` | number | Peso no Random (≥ 1) |
| `frame_count` | number | Duração (= `#raw_inputs`) |
| `raw_inputs` | number[] | **Bitmasks UInt16 por frame** |
| `title` | object GUID | Zeros se vazio |

Exemplo mínimo (andar pra frente 16 frames):

```json
{
  "slot_index": 3,
  "cmd_type": 0,
  "is_active": true,
  "is_loop": false,
  "is_valid": true,
  "negative_edge": false,
  "state": 1,
  "weight": 1,
  "frame_count": 16,
  "raw_inputs": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
  "title": {
    "mData1": 0, "mData2": 0, "mData3": 0,
    "mData4_0": 0, "mData4_1": 0, "mData4_2": 0, "mData4_3": 0,
    "mData4_4": 0, "mData4_5": 0, "mData4_6": 0, "mData4_7": 0
  }
}
```

---

## 3. Bitmask de input (`raw_inputs`)

Cada elemento é um `UInt16`: direção e botões **OR**ados, **um valor por frame** (60 FPS).

::: warning
`constants.BTN` no código do mod está marcado `TODO: verify` e **não bate** com drills reais. Use a tabela abaixo (derivada de captures reais).
:::

### Direção (bits baixos)

| Bit | Valor | Significado |
|-----|-------|-------------|
| 0 | `0x0001` (1) | Up |
| 1 | `0x0002` (2) | Down |
| 2 | `0x0004` (4) | Back |
| 3 | `0x0008` (8) | Forward |

Combinações comuns:

| Valor | Inputs | Uso típico |
|-------|--------|------------|
| `0` | neutro | Stand / nada |
| `4` | Back | Walk back |
| `8` | Forward | Walk forward |
| `6` (`4\|2`) | Down-Back | Crouch block |
| `2` | Down | Crouch |
| `5` (`4\|1`) | Up-Back | |
| `9` (`8\|1`) | Up-Forward | |

### Botões (a partir de `0x10`)

| Bit | Valor | Botão |
|-----|-------|-------|
| 4 | `0x0010` (16) | LP |
| 5 | `0x0020` (32) | MP |
| 6 | `0x0040` (64) | HP |
| 7 | `0x0080` (128) | LK |
| 8 | `0x0100` (256) | MK |
| 9 | `0x0200` (512) | HK |

DI / Parry podem ocupar bits acima — confirme com um capture antes de gerar.

### Exemplos reais (Neutral Footsies)

| Ação | Frames (resumo) | Valores |
|------|-----------------|---------|
| Walk forward → crouch block | 9×`8` + 12×`6` | slot 1 |
| Walk back → crouch block | 9×`4` + 12×`6` | slot 2 |
| Walk forward só | 16×`8` | slot 3 |
| Walk forward → cr.MK → crouch block | 9×`8` + 2×`258` + 30×`6` | slot 5 |
| Walk forward → st.HP → crouch block | 9×`8` + 2×`64` + 38×`6` | slot 6 |

Cálculos:

- Crouching MK = `DOWN | MK` = `2 | 256` = **258**
- Standing HP = `HP` = **64**

Regra prática:

```
frame_mask = direction_flags | button_flags
raw_inputs = [frame_mask, ...]  // length == frame_count
```

Segure o botão por 1–3 frames e preencha recovery com crouch block (`6`) ou neutro (`0`).

---

## 4. Como o JSON é gerado (no mod)

1. Usuário grava slots nativos no Training Mode.
2. UI chama `training_snapshot.capture()` (dummy/player IDs, settings, 8 slots, reversals).
3. UI preenche `metadata`.
4. `serializer.to_json(drill)` grava em `drills/<slug>.json`.

O JSON de disco **não** passa pelo codec v2.

---

## 5. Código `SF6DRILL:v2:`

Pipeline (`codecs/codec_v2.lua`):

```
drill canônico
  → encurtar chaves
  → omitir slots vazios / reversals default / title GUID default
  → RLE em raw_inputs: [count, mask, ...]
  → JSON compacto
  → Base64
  → prefixar "SF6DRILL:v2:"
```

### Anatomia

```
SF6DRILL:v2:<Base64>
│          │ └─ JSON compacto (chaves curtas + RLE)
│          └─ versão do codec
└─ família
```

### Mapas de chaves curtas (v2)

**metadata:** `id→i`, `title→t`, `author→a`, `description→d`, `created_at→c`, `tags→g`

**compatibility:** `dummy_character_id→d`, `dummy_character_name→n`, `player_character_id→p`

**training_settings (trecho):** `stage_position→sp`, `player_drive_gauge→pg`, `dummy_drive_gauge→gg`, `player_super_gauge→ps`, `dummy_super_gauge→gs`, …

**global_settings:** `info_type→i`, `loop_type→l`, `play_type→p`, `record_countdown→c`, `record_start_type→s`, `record_type→t`

**slot:** `slot_index→i`, `cmd_type→c`, `is_active→a`, `is_loop→o`, `is_valid→v`, `negative_edge→e`, `state→s`, `weight→w`, `frame_count→f`, `raw_inputs→r`, `title→t`

### RLE de `raw_inputs`

Canônico:

```json
[8, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
```

Wire (`"r"`):

```json
[9, 8, 12, 6]
```

= 9 frames com máscara `8`, depois 12 com `6`.

### Codec v1 (legado)

`SF6DRILL:v1:` — ainda decodificado; **novos** drills devem usar **v2**.

---

## 6. Gerar drills a partir de um MCP / IA

### Recomendação

Produza o **JSON canônico** (nomes longos, `raw_inputs` expandido).  
Converter para `SF6DRILL:v2:` é empacotamento opcional.

Motivos:

1. Validação e leitura humanas ficam fáceis.
2. O mod aceita JSON cru em `from_clipboard_or_json` (string começando com `{`).
3. Evita reimplementar RLE/shorten errado.

### Checklist do JSON gerado

1. `version: 1`
2. `metadata.title` não vazio; `id` UUID; `created_at` ISO-8601
3. `compatibility.dummy_character_id` + `dummy_character_name` coerentes
4. `action_record.slots`: índices 1–8
5. Slot ativo: `frame_count == #raw_inputs`, `is_valid: true`, `is_active: true`, `weight >= 1`
6. Máscaras consistentes com a §3
7. `reversal_slots` presentes (mesmo defaults) se quiser restore completo
8. `playback_mode` alinhado (0 Loop / 1 Random / 2 Sequential)

### Pseudocódigo

```python
DIR_FORWARD = 8
DIR_BACK    = 4
DIR_DOWN    = 2
CROUCH_BLOCK = DIR_BACK | DIR_DOWN  # 6
BTN_HP = 64
BTN_MK = 256

def hold(mask: int, frames: int) -> list[int]:
    return [mask] * frames

def build_slot(index: int, sequence: list[int], weight: int = 1) -> dict:
    return {
        "slot_index": index,
        "cmd_type": 0,
        "is_active": True,
        "is_loop": False,
        "is_valid": True,
        "negative_edge": False,
        "state": 1,
        "weight": weight,
        "frame_count": len(sequence),
        "raw_inputs": sequence,
        "title": {
            "mData1": 0, "mData2": 0, "mData3": 0,
            "mData4_0": 0, "mData4_1": 0, "mData4_2": 0, "mData4_3": 0,
            "mData4_4": 0, "mData4_5": 0, "mData4_6": 0, "mData4_7": 0,
        },
    }

# walk forward 9f, cr.MK 2f, crouch block 30f
seq = hold(DIR_FORWARD, 9) + hold(DIR_DOWN | BTN_MK, 2) + hold(CROUCH_BLOCK, 30)
slot5 = build_slot(5, seq)

drill = {
    "version": 1,
    "metadata": {
        "id": "<uuid>",
        "title": "My generated drill",
        "author": "MCP",
        "created_at": "2026-10-28T00:00:00.000Z",
        "tags": ["footsies"],
        "description": "...",
    },
    "compatibility": {
        "dummy_character_id": 1,
        "dummy_character_name": "Ryu",
    },
    "training_settings": {
        "stage_position": "Center",
        "player_drive_gauge": 60000,
        "dummy_drive_gauge": 60000,
        "player_super_gauge": 0,
        "dummy_super_gauge": 0,
    },
    "action_record": {
        "global_settings": {
            "info_type": 2,
            "loop_type": 1,
            "play_type": 1,
            "record_countdown": 0,
            "record_start_type": 0,
            "record_type": 1,
        },
        "playback_mode": 1,
        "reversal_slots": {
            "damage": [],
            "down": [],
            "guard": [],
        },
        "slots": [slot5],
    },
}
# Entregar: json.dumps(drill)  OU  encode_v2(drill) → "SF6DRILL:v2:..."
```

### Encode v2 (se o MCP emitir o código)

```
1. deep-copy drill
2. shorten keys (§5)
3. RLE em raw_inputs; omitir title default; omitir slots vazios / reversals default
4. JSON compacto
5. return "SF6DRILL:v2:" + base64(...)
```

RLE:

```
encode_rle([8,8,8,6,6]) → [3, 8, 2, 6]
decode_rle([3, 8, 2, 6]) → [8,8,8,6,6]
```

### Como o usuário aplica no jogo

1. Colar `SF6DRILL:v2:...` **ou** o JSON na aba Import do mod.
2. Ou salvar o JSON em `reframework/data/sf6_training_share/drills/`.
3. Entrar em Training Mode com o **dummy correto**.
4. Load / Import & Apply.

---

## 7. Disco vs clipboard

| | Disco (JSON) | Clipboard (v2) |
|--|--------------|----------------|
| Extensão / prefixo | `.json` | `SF6DRILL:v2:` |
| Chaves | longas | curtas |
| `raw_inputs` | expandido | RLE |
| Slots vazios | presentes | omitidos |
| Reversals default | presentes | omitidos |
| Pretty-print | sim | não |
| Uso | biblioteca, MCP, git | chat / Discord |

---

## 8. Arquivos de referência no mod

| Arquivo | Papel |
|---------|--------|
| `serializer.lua` | Fachada pública |
| `serializer_schema.lua` | Validação + migrate |
| `serializer_json.lua` | JSON + Base64 |
| `serializer_registry.lua` | Dispatch v1/v2 |
| `codecs/codec_v2.lua` | Wire format atual |
| `codecs/codec_v1.lua` | Legado |
| `training_snapshot.lua` | capture / restore |
| `action_record_io.lua` | Slots nativos |
| `constants.lua` | IDs, enums |
| `ui_manager.lua` | UX Save / Import / Copy |

---

## 9. Resumo para o MCP / IA

1. **Produza JSON schema v1 canônico** com `raw_inputs` frame-a-frame.
2. Monte cada ação do boneco como sequência de máscaras (`dir | botão`).
3. Preencha 1–8 slots ativos + metadata + `dummy_character_id`.
4. Entregue o JSON **ou** empacote com codec v2.
5. Não misture schema `version` com codec `vN` — são eixos diferentes.
6. Use frame data / moves deste wiki para escolher timings; use esta página para o **envelope** do drill.
