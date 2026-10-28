---
title: "C. Viper — Frame Data"
description: "Frame data for C. Viper"
---

# C. Viper Frame Data

## Vitals

*Vitals*

| C Viper | HP | Throw / Range | Fwd Walk / Speed | Back Walk / Speed | Fwd Dash / Speed | Back Dash / Speed | Fwd Dash / Distance | Back Dash / Distance | Jump / Speed | Fwd Jump / Distance | Back Jump / Distance | Jump / Apex |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 10000 | 0.8 | 0.0452 | 0.031 | 21 | 23 | 1.50 | 0.80 | 4+38+3 / (6+40+3) | 1.90 / (3.00) | 1.52 | 2.11 / (2.195) |

## Moves

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard | Cancel | Hitconfirm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP | 300 | 4 | 3 | 8 | 14 | +4 | -2 | LH | Chn Sp SA HJ | 13 |
| 5MP | 600 | 8 | 4 | 12 | 23 | +6 | +1 | LH | Sp SA HJ | 16 |
| 5HP | 900 | 12 | 3 | 21 | 35 | +3 | -2 | LH | HJ | 17 (HJ) |
| 5LK | 300 | 5 | 3 | 11 | 18 | +3 | -2 | LH | Sp SA HJ | 13 (DR: 14) |
| 5MK | 700 | 8 | 3 | 18(20) | 28(30) | +5 | -3 | LH | HJ | 15 (HJ) |
| 5HK | 900 | 10 | 4 | 20 | 33 | +4 | -3 | LH | HJ | 18 (HJ) |
| 2LP | 300 | 4 | 3 | 8 | 14 | +5 | -1 | LH | Chn Sp SA HJ | 13 |
| 2MP | 600 | 6 | 4 | 16 | 25 | +5 | -2 | LH | Sp SA HJ | 16 |
| 2HP | 800 | 9 | 3 | 20 | 31 | +2 | -5 | LH | Sp SA HJ | 17 |
| 2LK | 200 | 5 | 2 | 9 | 15 | +4 | -1 | L | Chn HJ | 12 (HJ) |
| 2MK | 600 | 8 | 3 | 17 | 27 | +5 | -1 | L | HJ | 13 (HJ) |
| 2HK | 900 | 10 | 3 | 25(29) | 37(41) | KD +34 | -11 | L | - |  |
| j.LP | 300 | 5 | 6 | 3 land | - | +6(+9) | +3(+6) | H | - |  |
| j.MP | 600 | 8 | 6 | 3 land | - | +8(+11) | +6(+9) | H | Sp |  |
| j.HP | 800 | 11 | 5 | 3 land | - | +11(+16) | +6(+11) | H | - |  |
| j.LK | 300 | 5 | 7 | 3 land | - | +3(+9) | 0(+6) | H | - |  |
| j.MK | 500 | 7 | 6 | 3 land | - | +7(+13) | +3(+9) | H | - |  |
| j.HK | 700 | 8 | 7 | 3 land | - | +11(+16) | +6(+11) | H | Sp |  |
| 6MP | 600 | 22 | 3 | 20 | 44 | +2 | -3 | H | - |  |
| 6HK | 450x2 | 11 | 3(15)3 | 16 | 47 | +4 | -2 | LH | - |  |

### General

| input | Dmg Scaling | Punish Adv | PerfParry Adv | DR Cancel onHit | DR Cancel onBlock | After DR onHit | After DR onBlock | Hitstun | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP | 20% Starter | +8 | -9 | +5 | -1 | +8 | +2 | 15 | 9 | 9 |
| 5MP |  | +10 | -14 | +12 | +7 | +10 | +5 | 22 | 17 | 11 |
| 5HP |  | +7 | -22 |  |  | +7 | +2 | 27 | 22 | 13 |
| 5LK | 20% Starter | +7 | -12 | +5 | 0 | +7 | +2 | 17 | 12 | 9 |
| 5MK |  | +9 | -19 |  |  | +9 | +1 | 26 | 18 | 11 |
| 5HK |  | +19 | -22 |  |  | +8 | +1 | 28 | 21 | 13 |
| 2LP | 20% Starter | +9 | -9 | +5 | -1 | +9 | +3 | 16 | 10 | 9 |
| 2MP |  | +9 | -18 | +15 | +8 | +9 | +2 | 25 | 18 | 11 |
| 2HP |  | +6 | -21 | +15 | +8 | +6 | -1 | 25 | 18 | 13 |
| 2LK | 20% Starter | +8 | -9 |  |  | +8 | +3 | 15 | 10 | 9 |
| 2MK | 20% Starter | +9 | -18 |  |  | +9 | +3 | 25 | 19 | 9 |
| 2HK |  | HKD +45 | -30 |  |  | KD +34 | -7 |  | 21 | 13 |
| j.LP |  | +10(+13) | -5(-2) |  |  |  |  | 13 | 10 | 9 |
| j.MP |  | +12(+15) | -5(-2) |  |  |  |  | 15 | 13 | 11 |
| j.HP |  | +15(+20) | -7(-2) |  |  |  |  | 20 | 15 | 12 |
| j.LK |  | +7(+13) | -8(-2) |  |  |  |  | 13 | 10 | 9 |
| j.MK |  | +11(+17) | -8(-2) |  |  |  |  | 17 | 13 | 11 |
| j.HK |  | +15(+20) | -7(-2) |  |  |  |  | 20 | 15 | 13 |
| 6MP |  | +6 | -21 |  |  | +6 | +1 | 25 | 20 | 11 |
| 6HK | 20% Starter | +8 | -17 |  |  | +8 | +2 | 24,23 (41 total) | 21,17 (35 total) | 9,11 |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | Drive Gain | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- | --- |
| 5LP | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 5MP | 3000 | [4000] | 1500 | 500 (350) | 250 (125) |
| 5HP | 6000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| 5LK | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 5MK | 4000 | [6000] | 2000 | 700 (490) | 350 (175) |
| 5HK | 6000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| 2LP | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 2MP | 3000 | [4000] | 1500 | 500 (250) | 250 (125) |
| 2HP | 5000 | [8000] | 2000 | 1000 (700) | 500 (250) |
| 2LK | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 2MK | 3000 | [5000] | 2000 | 600 (420) | 300 (150) |
| 2HK | 4000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| j.LP | 1500 | [2000] | 500 | 300 (210) | 150 (75) |
| j.MP | 3000 | [4000] | 1000 | 500 (350) | 250 (125) |
| j.HP | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| j.LK | 1500 | [2000] | 500 | 300 (210) | 150 (75) |
| j.MK | 2500 | [4000] | 1000 | 500 (350) | 250 (125) |
| j.HK | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| 6MP | 2500 | [5000] | 1500 | 500 (350) | 250 (125) |
| 6HK | 2500x2 | [5000x2] | 1500x2 | 500x2 (350x2) | 250x2 (125x2) |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP |  |  |  | 1.01 | 1 | 1 | 0 |
| 5MP |  |  |  | 1.01 | 1 | 1 | 0 |
| 5HP |  |  |  | 1.78 | 1 | 1 | 0 |
| 5LK |  |  |  | 1.20 | 1 | 1 | 0 |
| 5MK |  |  |  | 1.57 | 1 | 1 | 0 |
| 5HK |  |  |  | 1.36 | 2 | 1 | 3 |
| 2LP |  |  |  | 0.95 | 1 | 1 | 0 |
| 2MP |  |  |  | 1.14 | 1 | 1 | 0 |
| 2HP |  |  |  | 1.54 | 1 | 1 | 0 |
| 2LK |  |  |  | 1.06 | 1 | 1 | 0 |
| 2MK |  |  |  | 1.60 | 1 | 1 | 0 |
| 2HK |  |  |  | 1.89 | 1 | 1 | 1 |
| j.LP |  |  |  | 0.74 | 1 | 1 | 0 |
| j.MP |  |  |  | 1.02 (0.81) | 1 | 1 | 2 |
| j.HP |  |  |  | 1.04 | 1 | 10 | 10 |
| j.LK |  |  |  | 0.89 | 1 | 1 | 0 |
| j.MK |  |  |  | 1.01 | 1 | 1 | 0 |
| j.HK |  |  |  | 0.55 | 1 | 0 | 0 |
| 6MP |  |  |  | 1.43 (1.36) | 1 | 1 | 0 |
| 6HK |  |  |  | 1.81 (1.62) | 1,1 | 1,1 | 1,2 |

### General

| input | Notes |
| --- | --- |
| 5LP | Chains into 5LP/2LP/2LK; 214HP Feint cancel: -4 oH / -10 oB; more range than 2LP but worse advantage on hit/block |
| 5MP | Primary combo and frame trap starter; 214HP Feint cancel: +3 oH / -2 oB |
| 5HP | Long range poke that can be converted into damaging combos with High Jump cancel into Feint or Seismo; HJC~214HP Feint cancel: +6 oH / +1 oB |
| 5LK | Primary 5f punish tool; higher hitstun than other lights (can combo into 214MP); links from 2LP allowing C.Viper to combo 4 light normals; DR cancel is delayed until after active frames; 214HP Feint cancel: -2 oH / -7 oB |
| 5MK | Strong poke that can combo into specials with a High Jump cancel (214HP can whiff at farther ranges); can link into SA2 on counter-hit from around the max range of 2MP; 2f extra recovery on whiff; HJC~214HP Feint cancel: +5 oH / -3 oB |
| 5HK | Staggers opponent on Punish Counter; shorter range vs. crouching opponents; puts airborne opponents into a limited juggle OTG bounce that can be followed up with High Jump cancel into Thunder Dash, OD Burning Kick, or any Super; can be juggled into after Seismo &gt; HJC Air Burning Kick, then High Jump canceled into more damage; extends a hurtbox 1f before active that is vulnerable to projectiles; HJC~214HP Feint cancel: +7 oH / 0 oB / +22 onPC; HJC~214K~Dash cancel onPC: +8 meterless / +11 OD; strict 2f timing to input HJC into grounded Burning Kick (cannot be buffered on the first frame of High Jump) |
| 2LP | Chains into 5LP/2LP/2LK; DR cancel is delayed until after 2nd active frame; 214HP Feint cancel: -3 oH / -9 oB; topmost hurtbox on frames 1-6 is vulnerable only to aerial attacks, preventing its use as an anti-air |
| 2MP | High hitstun for a medium normal (combos into OD Seismo); special/DI/High Jump cancel is delayed until after 2nd active frame; 214HP Feint cancel: +5 oH / -2 oB; topmost hurtbox on frames 1-8 is vulnerable only to aerial attacks, preventing its use as an anti-air |
| 2HP | C.Viper's main cancelable poke (no High Jump cancel required) that combos into meterless Seismic Hammer; forces stand on hit; 214HP Feint cancel: +6 oH / -1 oB |
| 2LK | Chains into 5LP/2LP/2LK; can be High Jump canceled allowing for stronger combo options than most 2LKs; can input High Jump Cancel without returning to neutral for easier execution; HJC~214HP Feint cancel: -6 oH / -11 oB |
| 2MK | Amazing range for a low poke that can lead to combos with High Jump cancel; can input High Jump Cancel without returning to neutral for easier execution; HJC~214HP Feint cancel: +4 oH / -2 oB |
| 2HK | 4f extra recovery on block; C. Viper's only standard normal that cannot be High Jump canceled; has some juggle potential; Punish Counter sets up a safe jump using High Jump (fairly impractical outside the corner, as a forward High Jump usually sails over the opponent) |
| j.LP | Forces stand on hit; short range air-to-air with an upward angle |
| j.MP | Puts airborne opponents into a limited juggle state; cancelable into Aerial Burning Kick on forward or neutral jump; lower body projectile invuln 8-22f (if used immediately on the way up, can avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.HP | Spike knockdown vs. airborne opponents; forces stand on hit; good hitbox for vertical approaches; lower body projectile invuln 11-23f except around attack hitbox (cannot be used to avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.LK | Can be used as a fuzzy instant overhead; strong hitbox priority; against tall standing characters, can combo any close range button into High Jump canceled j.LK on the way up |
| j.MK | Cross-up; strong overall jump-in (great hitbox priority and the most range of her forward jump normals); lower body projectile invuln 7-20f except around attack hitbox (cannot be used to avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.HK | Cross-up; cancelable into Aerial Burn Kick (only combos naturally into HK/OD version on grounded opponents, and cannot juggle after air-to-air connect due to air reset); cancelable until the 37th airborne frame of a forward jump or High Jump; lower body projectile invuln 8-19f except around attack hitbox (cannot be used to avoid the 2nd hit of JP's OD Amnesia bombs) |
| 6MP | 16-27f Low Crush (not airborne or throw invincible) |
| 6HK | 2 hits; carries counter-hit/Punish Counter advantage through both hits; if 1st hit is Perfect Parried, opponent can interrupt 2nd hit with 16f or faster attack; useful approach tool from Drive Rush (strike/throw mixup on block, 2MP link on hit); can be spaced effectively in neutral to keep C.Viper out of the opponent's throw range on block |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LPLK | 1200 (2040) | 5 | 3 | 23 | 30 | KD +28 | - | T |
| 4LPLK | 1200 (2040) | 5 | 3 | 23 | 30 | KD +19 | - | T |
| HPHK | 800 | 26 | 2 | 35 | 62 | KD +35 / Wall Splat KD +65 | -3 / Wall Splat HKD +72 | LH |
| 6HPHK | 500 recoverable | 20 | 3 | 26(31) | 48(53) | KD +23 | -6 | LH |
| 6HPHK | 500 recoverable | 18 | 3 | 26(31) | 46(51) | KD +23 | -6 | LH |
| MPMK | - | 1 | 12 or until released | 33(1)(11) | 45(3) | - | - | - |
| MPMK~66 | - | 3+8 | - | 15(37) | 26(48) | - | - | - |
| MPMK or 66 | - | 9 | - | 15(37) | 24(46) | - | - | - |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| LPLK |  | 20% Immediate | HKD +28 |  |  |  |
| 4LPLK |  | 20% Immediate | HKD +19 |  |  |  |
| HPHK | 200 | 20% Starter | Crumple (Standing +21, Juggle +46, HKD +104) | -35 | 34 | 25 |
| 6HPHK | 125 recoverable |  | KD +23 | -27 | 23 | 20 |
| 6HPHK | 125 recoverable |  | KD +23 | -27 | 23 | 20 |
| MPMK |  | 50% Multiplier (Perfect) |  |  |  |  |
| MPMK~66 |  | 15% Multiplier (Mid-Combo) |  |  |  |  |
| MPMK or 66 |  | 15% Multiplier (Mid-Combo) |  |  |  |  |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | Drive Gain | SuperGain Hit |
| --- | --- | --- | --- | --- |
| LPLK |  | [10000] | 2000 | 2000(1400) [PC:4000] |
| 4LPLK |  | [10000] | 2000 | 2000(1400) [PC:4000] |
| HPHK | 5000 | 10000 [15000] | -10000 | [3000(2100)] |
| 6HPHK |  |  | -20000 |  |
| 6HPHK |  |  | -20000(-10000) |  |
| MPMK |  |  | -5000,250~ |  |
| MPMK~66 |  |  | -10000 |  |
| MPMK or 66 |  |  | -30000 |  |

### General

| input | Invuln | Armor | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- |
| LPLK |  |  | 0.80 |  |  |  |
| 4LPLK |  |  | 0.80 |  |  |  |
| HPHK |  | 1-27 | 2.549 | 0 | 1 | 0 |
| 6HPHK | 1-22 Full | Break | 1.91 | 200 | 100 | 1 |
| 6HPHK | 1-20 Full | Break | 1.91 | 200 | 100 | 1 |
| MPMK | 6 Full (after Perfect Parry) |  |  |  |  |  |
| MPMK~66 |  |  |  |  |  |  |
| MPMK or 66 |  |  |  |  |  |  |

### General

| input | Notes |
| --- | --- |
| LPLK | Grants a corner throw loop by walking or dashing (+7, requires delayed throw); can pressure with MK Burning Kick (+2 oB, DI-safe), MK Burning Kick ~ Double Burn (also +2 oB, true blockstring, gives better Drive damage but the sequence loses to wakeup DI), or HK Burning Kick ~ Double Burn (leaves a small blockstring gap between hits, allowing C. Viper to land and counter-DI); a successful Throw Escape builds 0.5 Drive bars for the defender; Throw Escape is awarded to a random player if input simultaneously |
| 4LPLK | Side switch; can pressure with Drive Rush after a corner side switch (but cannot beat reversal 4f normals with another throw); meaty LK Burning Kick can lead to a DI-safe Double Burn blockstring, but loses to wakeup Drive Impact; a successful Throw Escape builds 0.5 Drive bars for the defender; Throw Escape is awarded to a random player if input simultaneously |
| HPHK | See Drive Impact. Airborne connect gives spinning juggle state on Punish Counter or corner Wall Splat with variable height. |
| 6HPHK | Performed by inputting 6HPHK during blockstun; 5f extra recovery on hit; freezes the screen for 4f during startup; see Drive Reversal. |
| 6HPHK | Performed by holding 6HPHK on wakeup; 5f extra recovery on hit; does not have any screen freeze except for a 12f freeze when interacting with the opponent's throw hitbox (this also refunds 1 Drive bar after punishing the throw); see Drive Reversal. |
| MPMK | See Drive Parry. Perfect Parrying has only 1F of recovery and disables the opponent from canceling their attack. Perfect Parrying projectiles puts you into fixed 11 frames of recovery. After a Perfect Parry, all Super Gauge gain is reduced by 20% and Drive Gauge gain/damage is reduced by 50% for the entire punish combo. |
| MPMK~66 | See Drive Rush; 1-bar version performed out of a Parry; startup refers to minimum time before an attack can cancel the Drive Rush animation (if performed immediately after a successful Parry, only 1+8 startup); the first 15 recovery frames are cancelable into any attack; the final 22 recovery frames are cancelable into any attack or movement option or blocking (except Parry); only Normal and Command Normal attacks are enhanced with +4 frame advantage and improved juggle properties; Distance: 0.374 (min/throw), 1.756 (min/block), 3.355 (max/final DR frame) |
| MPMK or 66 | See Drive Rush; 3-bar version performed on hit/block from a cancelable normal; can also be performed on whiff from cancelable light normals; startup refers to minimum time before an attack can cancel the Drive Rush animation; the first 15 recovery frames are cancelable into any attack; the final 22 recovery frames are cancelable into any attack or movement option or blocking (except Parry); only Normal and Command Normal attacks are enhanced with +4 frame advantage and improved juggle properties |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard | Cancel | Hitconfirm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2~8 | - | 6 prejump | 40 air | 3 land | 49 | - | - | - | Sp SA |  |
| 214LP | 900 | 17 | 4 | 23 | 43 | +2(+5) | -4(-1) | LH | SA3 Feint | 18 (SA/Follow-up) |
| 214MP | 900 | 16 | 4 | 22 | 41 | +1(+4) | -3(0) | LH | SA3 Feint | 18 (SA/Follow-up) |
| 214HP | 900 | 7 | 10 | 15+22 land | 53 | KD +21 / (KD +18~35) | -24 | LH | Feint | 25 (Follow-up) |
| 214PP | 800x2 | 18 | 4(16)4 | 21 | 62 | KD +42 | -2 | LH | SA2 SA3 | 47(18) |
| 214P~K | - | 12/8/6 | - | 12 | 24/20/18 | - | - | - | - |  |
| 214LP~6PP | 600 | 15 | 3 | 28 | 45 | KD +37 | -15 | LH | SA3 | 48 (both hits) |
| 214MP~6PP | 600 | 21 | 4 | 25 | 49 | KD +18 / (KD +30~34) | -13 | LH | SA3 | 55* |
| 214HP~6PP | 500 | 17 | 4 | 11+26 land | 57 | KD +25(+34) | - | LH | - |  |
| 236LK | 900 | 23 | 5 | 7+13 land | 47 | KD +38 | -2(+2) | LH | - | 18 (Follow-up) |
| 236MK | 900 | 25 | 5 | 7+13 land | 49 | KD +38 | -2(+2) | LH | - | 18 (Follow-up) |
| 236HK | 900 | 27 | 5 | 7+13 land | 51 | KD +38 | -2(+2) | LH | - | 18 (Follow-up) |
| 236KK | 700,800 (1500) | 8 | 3(21)4 | 8+13 land | 56 | KD +43 | -4(-1) | LH | SA2 SA3 | 58(26) |
| 236K~PP | 800 | 12 | 4 | 14+20 land | 49 | KD +23(+30) | -15 | LH | - |  |
| 236K~KK | 600 | 21 | 5 | 3+17 land | 45 | KD +40 / (KD +34~40) | +2 | LH | - |  |
| j.236LK | 900 | 22 | 7 | 13(14/21) land | - | KD +38(+43) | -5(+2) | LH | - |  |
| j.236MK | 900 | 20 | 7 | 13(14/21) land | - | KD +37(+48) | -5(+8) | LH | - |  |
| j.236HK | 900 | 18 | 7 | 13(14/21) land | - | KD +36(+48) | -5(+7) | LH | - |  |
| j.236KK | 1000 | 18 | 7 | 13(21) land | - | KD +35(+48) | -1(+13) | LH | - |  |
| 623P | 700 | 24 | 8 | 26 | 57 | KD +53 | -10 | L | SA3 HJ Feint | 8 SA / 18 HJ |
| 623PP | 900 | 19 | 8 | 26 | 52 | KD +53 | -6 | L | SA2 SA3 HJ Feint | 8 SA / 18 HJ |
| 623P~K | - | 11 | - | 16 | 27 | - | - | - | - |  |
| 214K | 500x2 (1000) | 13+10 | 4(4)4 | 36 | 70 | KD +24 | -16 | LH | Dash |  |
| 214KK | 750x2 (1500) | 10+10 | 4(4)4 | 36 | 67 | KD +24 | -16 | LH | Dash |  |
| 214{K} | 600x2 (1200) | 20~58+10 | 4(4)4 | 36 | 77~115 | KD +26 | -16 | LH | Dash |  |
| 214{KK} | 850x2 (1700) | 20~56+10 | 4(4)4 | 36 | 77~113 | KD +26 | -16 | LH | Dash |  |
| 214[K] | 700x2 (1400) | 59+10 | 4(4)4 | 36 | 116 | KD +73 Crumple | -10 | LH | Dash |  |
| 214[KK] | 1000x2 (2000) | 57+10 | 4(4)4 | 36 | 114 | KD +73 Crumple | -10 | LH | Dash |  |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| 2~8 |  |  |  |  |  |  |
| 214LP | 225 |  | +6(9) | -25(-22) | 23 | 13 |
| 214MP | 225 |  | +5(+8) | -24(-21) | 23 | 13 |
| 214HP | 225 |  | KD +21 / (KD +18~35) | -45 | 23 | 13 |
| 214PP | 200x2 | 30% Starter; Combo (2 hits) | KD +42 | -23 | 43(23) | 9,13 |
| 214P~K |  |  |  |  |  |  |
| 214LP~6PP | 150 |  | KD +37 |  | 16 | 13 |
| 214MP~6PP | 150 |  | KD +18 | -27 | 16 | 13 |
| 214HP~6PP | - |  |  |  |  | 13 |
| 236LK | 225 |  | KD +43 | -23(-19) | 23 | 10 |
| 236MK | 225 |  | KD +43 | -23(-19) | 23 | 10 |
| 236HK | 225 |  | KD +43 | -23(-19) | 23 | 10 |
| 236KK | 175,200 (375) | 30% Starter; Combo (2 hits) | KD +43 | -23(-20) | 45(21) | 8,10 |
| 236K~PP | 200 |  | KD +24(+31) |  | 23 | 13 |
| 236K~KK | 150 |  | KD +40 / (KD +34~40) | -23 | 27 | 13 |
| j.236LK | 225 |  | KD +38(+43) | -24(-18) | 22 (HJ:21) | 10 |
| j.236MK | 225 |  | KD +37(+48) | -24(-12) | 22 (HJ:21) | 10 |
| j.236HK | 225 |  | KD +36(+48) | -24(-13) | 22 (HJ:21) | 10 |
| j.236KK | 250 |  | KD +35(+48) | -25(-13) | 28(26) | 10 |
| 623P | 175 | 20% Starter | KD +53 | -23 | 24 | 10 |
| 623PP | 225 | 20% Starter | KD +53 | -23 | 28 | 10 |
| 623P~K |  |  |  |  |  |  |
| 214K | 125x2 (250) | 50% Starter | KD +26 | -38(-35) | 21,24 (32 total) | 10,13 |
| 214KK | 187x2 (374) | 50% Starter | KD +26 | -38(-35) | 21,24 (32 total) | 10,12 |
| 214{K} | 150x2 (300) | 50% Starter | KD +56 Crumple | -38(-35) | 21,24 (32 total) | 12,12 |
| 214{KK} | 212x2 (424) | 50% Starter | KD +56 Crumple | -38(-35) | 21,24 (32 total) | 12,12 |
| 214[K] | 175x2 (350) | 20% Starter | KD +77 Crumple | -38(-35) | 19,30 (38 total) | 12,12 |
| 214[KK] | 250x2 (500) | 20% Starter | KD +77 Crumple | -38(-35) | 19,30 (38 total) | 12,12 |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | Drive Gain | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- | --- |
| 2~8 |  |  | -10000 |  |  |
| 214LP | 4000 | [6000] | 2000 | 800 (560) | 400 (200) |
| 214MP | 4000 | [6000] | 2000 | 800 (560) | 400 (200) |
| 214HP | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| 214PP | 2500x2 | [4000x2] | -20000 | 600x2 (420x2) | 300x2 (150x2) |
| 214P~K |  |  |  |  |  |
| 214LP~6PP | 4000 | [4000] | -10000 | 500 (350) | 250 (125) |
| 214MP~6PP | 4000 | [4000] | -10000 | 500 (350) | 250 (125) |
| 214HP~6PP |  |  | -10000 | 500 (350) |  |
| 236LK | 4000 | [7000] | 2500 | 1000 (700) | 500 (250) |
| 236MK | 4000 | [7000] | 2500 | 1000 (700) | 500 (250) |
| 236HK | 4000 | [7000] | 2500 | 1000 (700) | 500 (250) |
| 236KK | 2000,3000 | [5000x2] | -20000 | 500,700 (350,490) | 250,350 (125,175) |
| 236K~PP | 4000 | [4000] | -10000 | 500 (350) | 250 (125) |
| 236K~KK | 4000 | [6000] | -10000 | 500 (350) | 250 (125) |
| j.236LK | 4000 | [7000] | 2500 | 1000 (700) | 500 (250) |
| j.236MK | 4000 | [7000] | 2500 | 1000 (700) | 500 (250) |
| j.236HK | 4000 | [7000] | 2500 | 1000 (700) | 500 (250) |
| j.236KK | 5000 | [7000] | -20000 | 1000 (700) | 500 (250) |
| 623P | 2000 | [7000] | 2000 | 600 (420) | 300 (150) |
| 623PP | 2000 | [7000] | -20000 | 600 (420) | 300 (150) |
| 623P~K |  |  |  |  |  |
| 214K | 2000x2 | [3000x2] | 2000x2 | 500x2 (350x2) | 250x2 (125x2) |
| 214KK | 2000x2 | [4000x2] | -20000 | 500x2 (350x2) | 250x2 (125x2) |
| 214{K} | 2000x2 | [3000x2] | 2000x2 | 500x2 (350x2) | 250x2 (125x2) |
| 214{KK} | 2000x2 | [4000x2] | -20000 | 500x2 (350x2) | 250x2 (125x2) |
| 214[K] | 2500x2 | [4000x2] | 2500x2 | 600x2 (420x2) | 300x2 (150x2) |
| 214[KK] | 2500x2 | [5000x2] | -20000 | 600x2 (420x2) | 300x2 (150x2) |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2~8 |  |  | 7-46 (FKD) |  |  |  |  |
| 214LP | 14-20 Upper Body Proj |  |  | 2.24 (1.77) | 1 | 1 | 3 |
| 214MP |  |  |  | 1.84 (1.54) | 1 | 1 | 3 |
| 214HP | 1-9 Air |  | 9-31 (FKD) | 1.02 | 1 | 1 | 10 |
| 214PP |  |  |  | 3.56/3.38 (1.99/1.71) | 1,1 | 1,1 | 5,6 |
| 214P~K |  |  |  |  |  |  |  |
| 214LP~6PP | 1-17 Upper Body Proj |  |  | 2.52 (2.30) | 1 | 1 | 10 |
| 214MP~6PP |  |  |  | 2.21 (2.15) | 1 | 1 | 10 |
| 214HP~6PP |  |  | Until Land | 2.67 (2.46) | 1 | 1 | 10 |
| 236LK | 14-27 Lower Body Proj |  | 5-34 (FKD) | 1.84 (1.78) | 1 | 1 | 10 |
| 236MK | 16-29 Lower Body Proj |  | 5-36 (FKD) | 2.27 (2.17) | 1 | 1 | 10 |
| 236HK | 18-31 Lower Body Proj |  | 5-38 (FKD) | 3.14 (2.92) | 1 | 1 | 10 |
| 236KK |  |  | 11-43 (FKD) | 3.71 (1.48) | 1,1 | 1,1 | 10,10 |
| 236K~PP |  |  | Until Land (FKD) | 2.43 (2.19) | 1 | 1 | 10 |
| 236K~KK |  |  | Until Land (FKD) | 2.55 (2.35) | 1 | 1 | 10 |
| j.236LK | 22-28 Lower Body Proj |  | Until Land (FKD) | 1.04 | 1 | 1 | 10 |
| j.236MK | 20-26 Lower Body Proj |  | Until Land (FKD) | 1.04 | 1 | 1 | 10 |
| j.236HK | 18-24 Lower Body Proj |  | Until Land (FKD) | 1.04 | 1 | 1 | 10 |
| j.236KK | 18-24 Lower Body Proj |  | Until Land (FKD) | 1.04 | 1 | 1 | 10 |
| 623P |  |  |  |  | 2 | 1 | 1 |
| 623PP |  |  |  |  | 1 | 1 | 1 |
| 623P~K |  |  |  |  |  |  |  |
| 214K |  | 6-13(19) |  | 2.42 (1.85) | 1,1 | 1,1 | 3,4 |
| 214KK |  | 3-10(19) |  | 2.42 (1.85) | 1,1 | 1,1 | 3,4 |
| 214{K} |  | 6~release |  | 2.42 (1.85) | 1,1 | 1,1 | 3,4 |
| 214{KK} |  | 3~release |  | 2.42 (1.85) | 1,1 | 1,1 | 3,4 |
| 214[K] |  | 6-59 |  | 2.42 (1.85) | 1,1 | 1,1 | 10,10 |
| 214[KK] |  | 3-57 |  | 2.42 (1.85) | 1,1 | 1,1 | 10,10 |

### General

| input | Notes |
| --- | --- |
| 2~8 | Costs 1 bar of Drive gauge (except during SA1 install); jumps slightly higher and over 50% farther than a standard jump; can be input in neutral or canceled on hit/block from all normals (except 2HK/6MP/6HK) and from Seismic Hammer; can be input as a forward or neutral jump (cannot High Jump backwards, but attempting this as a cancel results in neutral jump); cancelable into grounded special moves and Supers during prejump frames 2-6, effectively allowing any HJ-cancelable attack to be special/super cancelable; C. Viper is in a Counter-hit state for the entire duration and in a Forced Knockdown state when airborne; Drive Gauge recovery acts similar to OD specials (can start regaining meter quickly, effectively refunding part of its cost by hitting the opponent afterward; grounded High Jump Cancel into grounded Burning Kick cannot be buffered on the first jump frame (results in a strict 2f window to properly input a combo sequence like juggled 5HK &gt; HJC OD Burning Kick); can be used in safe jump setups with a KD Advantage of +45; the Up direction must be input no later than the 8th frame after initiating the Down direction (holding down before inputting a jump does not result in a High Jump); when canceled from a normal that is otherwise not special cancelable, execution requirements are relaxed and a neutral input is no longer required before the HJC (most useful for 2MK/2LK) |
| 214LP | Crouch-sized hurtbox on frames 14-43 (standing state); can be spaced meaty for better advantage (very precise spacing required for the final active frame to connect); can duck under projectiles with precise timing (impractical as a reaction to fast fireballs, and can be clipped on her back during recovery against slow fireballs); combos naturally from medium/heavy normals; punishing a projectile can link into 2MP, SA2, 5MK, or 2HP depending on the range; startup can be canceled into Feint by inputting K (feint occurs after 12 startup frames); cancelable into Tracer Combination (6PP) on hit/block only |
| 214MP | Less range than LP version but safe on block at all ranges; can be spaced meaty for better advantage; combos from 5LK naturally; startup can be canceled into Feint by inputting K (feint occurs after 8 startup frames); cancelable into Tracer Combination (6PP) on hit/block only; can perform a risky frame trap into follow-up on block (2f gap) unless the move connects on the final 2 active frames |
| 214HP | Upward trajectory for juggles and anti-airs; cannot hit cross-up; combos from all light normals; can whiff in long-range cancels like 5MK &gt; HJC 214HP; startup can be canceled into Feint by inputting K (feint occurs after 6 startup frames, leading to the best advantage of all feint cancels); feint-canceled version still maintains anti-air invincibility on frames 1-6, allowing C.Viper to "spot dodge" some airborne attacks with precise timing for a better punish; variable knockdown advantage on airborne opponents; cancelable into Tracer Combination (6PP) on hit only (can whiff on high juggled opponents) |
| 214PP | 2 hits with a large gap in between; range of the 1st hit is in between LP/MP versions (total range is longer but easily interruptible if 1st hit whiffs); combos from medium and heavy normals; allows an easy hitconfirm into SA2/SA3 while remaining safe on block; leaves C.Viper inside throw range with block advantage on burned out opponents, making it a strong chip and pressure tool; cannot perform feint cancels or Tracer Combination follow-ups; if Perfect Parried, opponent can interrupt 2nd hit with 18f or faster attack; extremely disjointed hitbox makes it a strong approach tool at midrange; sets up a safe jump on grounded hit (midscreen, can only connect with max range j.MK) |
| 214P~K | Feint animation lasts 12f but occurs at a different timing from each meterless strength of Thunder Dash (LP 12+12 / MP 8+12 / HP 6+12); can be input more easily by holding any K while inputting 214P; 214HP version gives better combo potential from 2HP or from High Jump canceled 5HP/5HK; Counter-hit state for entire feint animation |
| 214LP~6PP | Costs 1 extra bar of Drive gauge (except during SA1 install); maintains the Projectile Invuln and crouch-sized hurtbox of 214LP on frames 1-17; best version for confirming into SA3 (combos naturally); forms a true blockstring from 214LP; gives solid oki with Drive Rush or a Forward Dash + manually timed walk |
| 214MP~6PP | Costs 1 extra bar of Drive gauge (except during SA1 install); cancel into SA3 does not combo on grounded opponents; puts airborne opponents into a limited juggle OTG bounce state (KD +30 at lowest height, allows SA3 cancel to juggle); 2f gap on block can set up a risky frame trap (no gap during Burnout or if the final 2 active frames of 214MP connect); grounded hit gives the worst oki of all Thunder Dash follow-ups (-3 after Dash) |
| 214HP~6PP | Costs 1 extra bar of Drive gauge (except during SA1 install); can only be canceled into on hit; can whiff on high juggled opponents; gives the best oki out of all Thunder Dash follow-ups; useful way to extend C. Viper's anti-air damage |
| 236LK | Shortest trajectory; cannot hit cross-up; Punish Counter gives an extra +5 KD advantage (allows combo into KK follow-up); primarily used for beating throw techs and crouching buttons; connects from about C. Viper's maximum poke range; very difficult to space more safely in neutral due to minimal forward movement during active frames |
| 236MK | Medium trajectory; cannot hit cross-up; Punish Counter gives an extra +5 KD advantage (allows combo into KK follow-up); useful for crushing low pokes from outside their max range and for approaching in neutral while staying out of the opponent's throw range on block |
| 236HK | Farthest trajectory; cannot hit cross-up; Punish Counter gives an extra +5 KD advantage (allows combo into KK follow-up); useful as a safe approach tool from long range (but more likely to land inside opponent's throw range on block); easiest version to space meaty for extra advantage due to forward movement during active frames; works well as a predictive fireball counter due to its range, safety, and lower body projectile invuln frames |
| 236KK | Best horizontal range for combo consistency; 2 hits (cannot be interrupted on block); cannot hit cross-up; recovery is cancelable into SA2/SA3 after 11f on hit or block; very difficult to space meaty for extra advantage due to minimal forward movement during 2nd hit's active frames; important juggle tool after launches into Air Burning Kick or juggled 5HK ground bounce; combo from 5HK &gt; HJC requires a strict 2f input window (cannot buffer on the first High Jump frame, and results in air version on frame 4 onward) |
| 236K~PP | Costs 1 extra bar of Drive gauge (except during SA1 install); true blockstring and natural combo from Burning Kick; higher KD advantage if Burning Kick lands as a Punish Counter or hits airborne opponent; KD +9 when follow-up hits a grounded opponent (e.g. after Burning Kick is absorbed by 1-hit armor like Luke 236KK or Zangief Charged 5HP) |
| 236K~KK | Costs 1 extra bar of Drive gauge (except during SA1 install); leaves a 3f gap on block from Burning Kick that can beat non-invincible attacks (but loses to Drive Impact and anti-air invuln moves); true blockstring vs. opponents in Burnout and +6 oB making it a great pressure tool; KD +40 on grounded opponents (e.g. frame trap after Burning Kick) and +34 on airborne opponents (e.g. combo after PC Burning Kick or in juggle routes, up to KD +40 in very high juggles); does not combo naturally from Burning Kick on grounded opponents (requires Punish Counter or airborne connect); whiffing this attack on grounded hit results in a +13 knockdown with oki only possible in the corner |
| j.236LK | Can be input from a forward/neutral jump or High Jump; stops forward air momentum; can hit crossup; 1f extra landing recovery frame when blocked as a cross-up; 8f extra landing recovery on whiff after crossing over the opponent; comes out after 7 airborne frames (normal jump) or 3 airborne frames (High Jump); High Jump version deals 1f less blockstun but hits lower to the ground resulting in better advantage when used low to the ground; advantage on knockdown or block varies greatly depending on angle, distance, and height when activated; earliest input timing (Tiger Knee input) at close range results in KD +39 / -2 oB (regular jump), KD +43 / +1 oB (High Jump) |
| j.236MK | Can be input from a forward/neutral jump or High Jump; maintains some forward air momentum; can hit crossup; 1f extra landing recovery frame when blocked as a cross-up; 8f extra landing recovery on whiff after crossing over the opponent; comes out after 7 airborne frames (normal jump) or 3 airborne frames (High Jump); High Jump version deals 1f less blockstun but hits lower to the ground resulting in better advantage when used low to the ground; advantage on knockdown or block varies greatly depending on angle, distance, and height when activated; earliest input timing (Tiger Knee input) at close range results in KD +40 / -1 oB (regular jump), KD +43 / +1 oB (High Jump); using this version after Seismic Hammer launch allows a midscreen juggle into MP Thunder Dash + Tracer Combination (great damage, oki, and potential SA3 cancel with less meter cost than OD Burning Kick routes) |
| j.236HK | Can be input from a forward/neutral jump or High Jump; maintains the most forward air momentum; effective approach tool when used from immediate High Jump; can hit crossup; 1f extra landing recovery frame when blocked as a cross-up; 8f extra landing recovery on whiff after crossing over the opponent; comes out after 7 airborne frames (normal jump) or 3 airborne frames (High Jump); High Jump version deals 1f less blockstun but hits lower to the ground resulting in better advantage when used low to the ground; advantage on knockdown or block varies greatly depending on angle, distance, and height when activated; earliest input timing (Tiger Knee input) at close range results in KD +38 / -3 oB (regular jump), KD +41 / -1 oB (High Jump) |
| j.236KK | Can be input from a forward/neutral jump or High Jump; same air trajectory as Heavy version; can hit crossup; 8f extra landing recovery on whiff after crossing over the opponent; comes out after 7 airborne frames (normal jump) or 3 airborne frames (High Jump); High Jump version deals 1f less blockstun but hits lower to the ground resulting in better advantage when used low to the ground; advantage on knockdown or block varies greatly depending on angle, distance, and height when activated; earliest input timing (Tiger Knee input) at close range results in KD +37 / +2 oB (regular jump), KD +41 / +4 oB (High Jump) |
| 623P | 1-hit standard projectile; button strength determines projectile distance (LP close, MP ~50% screen, HP ~80% screen); puts opponents into a limited juggle state; combos from 2HP or from High Jump canceled 5HP/5HK; cancelable into High Jump on hit or block for 1 extra Drive bar (no extra cost during SA1 install); all strengths will not go beyond the corner; can transition into Seismo Feint after 11f (total Feint duration 27f); HJC~214HP Feint cancel: KD +61 / -2 oB; great tool for Burnout pressure (can repeatedly chain Seismos together with High Jump cancels until pushed out of range); can connect 9 consecutive HP Seismos on a blocking cornered opponent (if starting from a canceled normal, 5HP &gt; HJC Seismo is the best option with 8 consecutive Seismo chains); hitbox is very low to the ground, allowing opponent to block when landing from an empty jump |
| 623PP | 1-hit OD projectile; covers wide area in front of C. Viper (~50% screen); puts opponents into a limited juggle state; combos from medium normals; cancelable into High Jump on hit or block for 1 extra Drive bar (no extra cost during SA1 install); startup cannot be canceled with Seismo Feint; HJC~214HP Feint cancel: KD +61 / +2 oB; hitbox is very low to the ground, allowing opponent to block when landing from an empty jump; hurtbox expands forward beginning on the 2nd active frame |
| 623P~K | Useful for baiting neutral responses like jumps or anti-projectile Supers; much slower than HP Thunder Dash feint (not useful for combos/pressure when canceled from normals); can only be performed from meterless Seismic Hammer after 11 frames of startup (27f total animation); can be performed by holding K for easier execution; Counter-hit state for entire feint animation |
| 214K | Lv.1 version when uncharged or when button is held up to 19f; can hold button longer to charge to a stronger version (20f Lv.2 / 59f Lv.3); 1-hit armor frames cover the full body, ending immediately if button is released after frame 13; absorbing a strike results in an automatic counter-attack with 10f startup (comes out on frame 14 at the earliest); absorbing an attack early in the armor frames makes it possible for the counter-attack to be blocked; C. Viper incurs only 7f armor hitstop from absorbing a strike; armor can absorb projectiles but does not perform counter-attack (C. Viper incurs 10f projectile hitstop during armor); cancelable into Forward Dash from frame 12 until button is released (not possible after absorbing a strike); C. Viper is in a Punish Counter state for entire duration (including Forward Dash cancel); 2f extra knockdown advantage on Punish Counter; only the first hit gains the bonus damage from a Counter-hit/Punish Counter; -17 on Punish Counter if only the first hit of counter-attack reaches opponent (e.g. absorbing a ranged Dhalsim poke); Focus + Dash can be used to absorb projectiles when Drive gauge is too low for Parry; can be used against Drive Impact while in Burnout (but armor starts too late to work in most DI-cancel blockstrings) |
| 214KK | Lv.1 version when uncharged or when button is held up to 19f; can hold button longer to charge to a stronger version (20f Lv.2 / 57f Lv.3); 1-hit armor frames cover the full body, ending immediately if button is released after frame 10; absorbing a strike results in an automatic counter-attack with 10f startup (comes out on frame 11 at the earliest); absorbing an attack early in the armor frames makes it possible for the counter-attack to be blocked; C. Viper incurs only 7f armor hitstop from absorbing a strike; armor can absorb projectiles but does not perform counter-attack (C. Viper incurs 10f projectile hitstop during armor); cancelable into Forward Dash from frame 9 until button is released (not possible after absorbing a strike); C. Viper is in a Punish Counter state for entire duration (including Forward Dash cancel); 2f extra knockdown advantage on Punish Counter; only the first hit gains the bonus damage from a Counter-hit/Punish Counter; -17 on Punish Counter if only the first hit of counter-attack reaches opponent (e.g. absorbing a ranged Dhalsim poke) |
| 214{K} | Partially charged Lv.2 version when button is held at least 20f (up to 58f); Punish Counter causes a limited juggle crumple state (+8 before opponent falls to the ground); 1-hit armor frames cover the full body, ending immediately if button is released after frame 13; attack hitbox starts up 10f after button release (no armor on these frames); absorbing a strike results in an automatic counter-attack with 10f startup; C. Viper incurs only 7f armor hitstop from absorbing a strike; armor can absorb projectiles but does not perform counter-attack (C. Viper incurs 10f projectile hitstop during armor); cancelable into Forward Dash from frame 12 until button is released (not possible after absorbing a strike); C. Viper is in a Punish Counter state for entire duration (including Forward Dash cancel); only the first hit gains the bonus damage from a Counter-hit/Punish Counter; -17 on Punish Counter if only the first hit of counter-attack reaches opponent (e.g. absorbing a ranged Dhalsim poke); Focus + Dash can be used to absorb projectiles when Drive gauge is too low for Parry |
| 214{KK} | Partially charged Lv.2 version when button is held at least 20f (up to 56f); Punish Counter causes a limited juggle crumple state (+8 before opponent falls to the ground); 1-hit armor frames cover the full body, ending immediately if button is released after frame 10; attack hitbox starts up 10f after button release (no armor on these frames); absorbing a strike results in an automatic counter-attack with 10f startup; C. Viper incurs only 7f armor hitstop from absorbing a strike; armor can absorb projectiles but does not perform counter-attack (C. Viper incurs 10f projectile hitstop during armor); cancelable into Forward Dash from frame 9 until button is released (not possible after absorbing a strike); C. Viper is in a Punish Counter state for entire duration (including Forward Dash cancel); only the first hit gains the bonus damage from a Counter-hit/Punish Counter; -17 on Punish Counter if only the first hit of counter-attack reaches opponent (e.g. absorbing a ranged Dhalsim poke) |
| 214[K] | Fully charged Lv.3 version when button is held at least 59f; Punish Counter causes a limited juggle crumple state (+29 before opponent falls to the ground); 1-hit armor frames cover the full body; attack hitbox starts up 10f after reaching full charge (no armor on these frames); absorbing a strike while charging results in an automatic counter-attack with 10f startup; C. Viper incurs only 7f armor hitstop from absorbing a strike; armor can absorb projectiles but does not perform counter-attack (C. Viper incurs 10f projectile hitstop during armor); cancelable into Forward Dash from frame 12-60 (not possible after absorbing a strike); C. Viper is in a Punish Counter state for entire duration (including Forward Dash cancel); only the first hit gains the bonus damage from a Counter-hit/Punish Counter; -17 on Punish Counter if only the first hit of counter-attack reaches opponent (e.g. absorbing a ranged Dhalsim poke) |
| 214[KK] | Fully charged Lv.3 version when button is held at least 57f; Punish Counter causes a limited juggle crumple state (+29 before opponent falls to the ground); extremely powerful combo starter for Stun or punishing very unsafe Supers; 1-hit armor frames cover the full body; attack hitbox starts up 10f after reaching full charge (no armor on these frames); absorbing a strike while charging results in an automatic counter-attack with 10f startup; C. Viper incurs only 7f armor hitstop from absorbing a strike; armor can absorb projectiles but does not perform counter-attack (C. Viper incurs 10f projectile hitstop during armor); cancelable into Forward Dash from frame 9-58 (not possible after absorbing a strike); C. Viper is in a Punish Counter state for entire duration (including Forward Dash cancel); only the first hit gains the bonus damage from a Counter-hit/Punish Counter; -17 on Punish Counter if only the first hit of counter-attack reaches opponent (e.g. absorbing a ranged Dhalsim poke) |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 236236K | 800,1200 (2000) | 8 | 4(3)6 | 22+31 land | 73 | KD +21 | -34 | LH |
| 214214P | 3000 | 7 | 4 | 45 | 55 | HKD +19 | -29 | LH |
| 214214K | 4000 | 10 | 4 | 54 | 67 | HKD +21 | -38 | LH |
| 214214K | 4500 | 10 | 4 | 54 | 67 | HKD +23 | -38 | LH |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| 236236K | 250x2 (500) | 30% Minimum | KD +21 | -57 | 21,25 (32 total) | 10,15 |
| 214214P | 750 | 40% Minimum | HKD +19 | -47 | 20 | 13 |
| 214214K | 1000 | 50% Minimum; 10% Immediate (Sp) | HKD +21 | -56 | 20 | 13 |
| 214214K | 1250 | 50% Minimum; 10% Immediate (Sp) | HKD +23 | -56 | 20 | 13 |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- |
| 236236K | 1250x2 | 2500x2 | -10000 | -10000 |
| 214214P | 5000 | 10000 | -20000 | -20000 |
| 214214K | 7500 | 15000 | -30000 | -30000 |
| 214214K | 10000 | 20000 | -30000 | -30000 |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 236236K | 1-11 Strike/Throw, 12-20 Air | Break | 12-42 (FKD) | 1.59 (1.49) | 1,1 | 1,1 | 99,99 |
| 214214P | 1-10 Full | Break |  | 1.71 |  |  | 99 |
| 214214K | 1-13 Full | Break |  | 2.06 (1.92) |  |  | 99 |
| 214214K | 1-13 Full | Break |  | 2.06 (1.92) |  |  | 99 |

### General

| input | Notes |
| --- | --- |
| 236236K | Puts C.Viper into an install state on frame 21 (after active frames) that removes the meter cost of her 1-bar moves (High Jump, extensions from Thunder Dash and Burning Kick) and also causes the 1-bar special follow-ups to build 3000 Drive gauge on hit/block; during Burnout, the install ends after one use of these moves; install lasts for 700 frames (11.7 seconds) and freezes during hitstop or cinematics; cannot build additional Super gauge while install is active; KD advantage varies slightly when used in juggles or as an anti-air; if 1st hit is Perfect Parried, opponent can interrupt 2nd hit with 5f or faster attack that reaches around standing chest-height; if 1st hit trades with a projectile at close range, C. Viper can pick up a juggle into 214HP, SA1, or SA2 depending on the distance and fireball hitstun (useful in blockstrings with a large gap, like Terry 5HP &gt; Round Wave) |
| 214214P | Strong reversal but short range makes it a poor projectile counter; cinematic carries opponent over half screen; cannot be executed using easy input shortcuts when inputting with HP button or immediately after High Jump (to prevent input overlap issues with HP Thunder Dash and Feint cancels) |
| 214214K | Short range makes it a poor projectile counter; cinematic time regenerates ~2 Drive bars for C.Viper |
| 214214K | Short range makes it a poor projectile counter; available at 25% HP or below; cinematic time regenerates ~2.2 Drive bars for C.Viper |


---

*Source: [SuperCombo Wiki — C. Viper/Frame data](https://wiki.supercombo.gg/w/Street_Fighter_6/C.Viper/Frame_data)*

*Scraped: 2026-10-28T16:31:06.311Z*