---
title: "Guile — Frame Data"
description: "Frame data for Guile"
---

# Guile Frame Data

## Vitals

*Vitals*

| Guile | HP | Throw / Range | Fwd Walk / Speed | Back Walk / Speed | Fwd Dash / Speed | Back Dash / Speed | Fwd Dash / Distance | Back Dash / Distance | Jump / Speed | Fwd Jump / Distance | Back Jump / Distance | Jump / Apex |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 10000 | 0.8 | 0.043 | 0.032 | 21 | 23 | 1.567 | 0.74 | 4+38+3 | 1.90 | 1.52 | 2.115 |

## Moves

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard | Cancel | Hitconfirm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP | 300 | 5 | 3 | 7 | 14 | +4 | -2 | LH | Chn Sp SA | 13 |
| 5MP | 600 | 7 | 3 | 15 | 24 | +6 | 0 | LH | Sp SA TC | 15 (17 TC) |
| 5HP | 900 | 7 | 3 | 23 | 32 | -1 | -6 | LH | Sp SA | 17 |
| 5LK | 300 | 5 | 2 | 12 | 18 | +3 | -1 | LH | Sp SA | 12 (DR: 13) |
| 5MK | 700 | 7 | 5 | 18 | 29 | +1 | -4 | LH | - |  |
| 5HK | 800 | 12 | 3 | 21 | 35 | +4 | -4 | LH | SA | 17 |
| 2LP | 300 | 4 | 3 | 8 | 14 | +5 | -2 | LH | Chn Sp SA | 13 |
| 2MP | 600 | 6 | 3 | 13(16) | 21(24) | +4 | -2 | LH | Sp SA TC | 15 (16 TC) |
| 2HP | 900 | 9 | 5 | 20 | 33 | 0 | -9 | LH | Sp SA | 15 |
| 2LK | 200 | 5 | 2 | 12 | 18 | +1 | -3 | L | Chn |  |
| 2MK | 500 | 8 | 3 | 18 | 28 | +4 | -5 | L | TC | 18 |
| 2HK | 450x2 | 9 | 2(16)3 | 21 | 50 | KD +34 | -12 | L,L | TC | 26 (29 PC) |
| j.LP | 300 | 4 | 10 | 3 land | - | +4(+9) | 0(+5) | H | - |  |
| j.MP | 700 | 7 | 3 | 3 land | - | +9(+11) | +5(+7) | H | - |  |
| j.HP | 800 | 9 | 4 | 3 land | - | +7(+15) | +3(+11) | H | - |  |
| j.LK | 300 | 6 | 10 | 3 land | - | +5(+10) | +1(+6) | H | - |  |
| j.MK | 600 | 7 | 7 | 3 land | - | +11(+13) | +7(+9) | H | - |  |
| j.HK | 800 | 10 | 5 | 3 land | - | +10(+15) | +6(+11) | H | - |  |
| 6MP | 800 | 20 | 3 | 19 | 41 | +2 | -3 | H | - |  |
| 6HP | 800 | 16 | 3 | 20 | 38 | +5 | +3 | LH | - |  |
| 4HP | 800 | 9 | 3 | 21 | 32 | +1 | -4 | LH | Sp SA | 17 |
| 4LK | 500 | 8 | 5 | 15 | 27 | 0(+4) | -4(0) | LH | - |  |
| 4MK or 6MK | 700 | 11 | 3 | 18(21) | 31(34) | +3 | -6 | LH | - |  |
| 6HK | 1000 | 17 | 3 | 26 | 45 | -1 | -8 | LH | - |  |
| 3HK | 1000 | 10 | 3 | 23 | 35 | 0 | -9 | LH | Sp SA | 23(30) |
| 5MP~4HP | 600 | 16 | 3 | 26 | 44 | KD +35 | -9 | LH | Sp SA kara | 50-51 |
| 2MP~2MP | 360 | 12 | 3 | 16 | 30 | KD +44 | -6 | LH | Sp SA | 41(15) |
| 2MK~6MP | 800(640) | 20 | 3 | 21 | 42 | +1 | -5 | H | - |  |
| 2HK~3HK | 600(480) | 10 | 3 | 25 | 37 | KD +33 | -10(-30) | LH | Sp SA | 57 (60 PC) |

### General

| input | Dmg Scaling | Punish Adv | PerfParry Adv | DR Cancel onHit | DR Cancel onBlock | After DR onHit | After DR onBlock | Hitstun | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP | 20% Starter | +8 | -8 | +4 | -2 | +8 | +2 | 14 | 8 | 9 |
| 5MP |  | +10 | -16 | +14 | +8 | +10 | +4 | 24 | 18 | 11 |
| 5HP | 20% Starter | +14 Stagger | -24 | +15 | +10 | +3 | -2 | 25 | 20 | 13 |
| 5LK | 20% Starter | +7 | -12 | +5 | +1 | +7 | +3 | 17 | 13 | 9 |
| 5MK |  | +5 | -21 |  |  | +5 | 0 | 24 | 19 | 11 |
| 5HK | 20% Starter | +8 | -22 |  |  | +8 | 0 | 28 | 20 | 13 |
| 2LP | 20% Starter | +9 | -9 | +4 | -3 | +9 | +2 | 16 | 9 | 9 |
| 2MP |  | +8 | -14 | +10 | +4 | +8 | +2 | 20 | 14 | 11 |
| 2HP |  | +4 | -23 | +15 | +6 | +4 | -5 | 25 | 16 | 13 |
| 2LK | 20% Starter | +5 | -12 |  |  | +5 | +1 | 15 | 11 | 9 |
| 2MK | 20% Starter | +8 | -19 |  |  | +8 | -1 | 25 | 16 | 11 |
| 2HK | 20% Starter | HKD +44 | -22 |  |  | KD +34 | -8 | 19,- | 19,12 | 13,13 |
| j.LP |  | +8(+13) | -7(-2) |  |  |  |  | 13 | 9 | 9 |
| j.MP |  | +13(+15) | -4(-2) |  |  |  |  | 15 | 11 | 11 |
| j.HP |  | +11(+19) | -10(-2) |  |  |  |  | 19 | 15 | 13 |
| j.LK |  | +9(+14) | -7(-2) |  |  |  |  | 14 | 10 | 9 |
| j.MK |  | +15(+17) | -4(-2) |  |  |  |  | 17 | 13 | 11 |
| j.HK |  | +14(+19) | -7(-2) |  |  |  |  | 19 | 15 | 13 |
| 6MP |  | +6 | -20 |  |  | +6 | +1 | 24 | 19 | 11 |
| 6HP |  | +9 | -21 |  |  | +9 | +7 | 28 | 26 | 13 |
| 4HP |  | +5 | -22 | +15 | +10 | +5 | 0 | 25 | 20 | 13 |
| 4LK |  | +4(+8) | -18(-14) |  |  | +4(+8) | 0(+4) | 20 | 16 | 13 |
| 4MK or 6MK |  | +7 | -19 |  |  | +7 | -2 | 24 | 15 | 11 |
| 6HK |  | KD +55 Crumple | -27 |  |  | +3 | -4 | 28 | 21 | 15 |
| 3HK |  | KD +51 Spin | -24 | +9 | 0 | +4 | -5 | - | 17 | 13(20) |
| 5MP~4HP |  | KD +35 | -27 | KD +54 | +10 |  |  |  | 20 | 13 |
| 2MP~2MP | 10% Immediate | KD +44 | -17 | KD +53 | +3 |  |  |  | 13 | 11 |
| 2MK~6MP |  | KD +46 | -22 |  |  |  |  | 25 | 19 | 11 |
| 2HK~3HK |  | KD +35 | -24 | KD +44(45) | +1 |  |  |  | 16 | 13 |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | Drive Gain | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- | --- |
| 5LP | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 5MP | 3000 | [4000] | 1500 | 500 (350) | 250 (125) |
| 5HP | 5000 | [8000] | 2000 | 1000 (700) | 500 (250) |
| 5LK | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 5MK | 4000 | [6000] | 2000 | 700 (490) | 350 (175) |
| 5HK | 6000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| 2LP | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 2MP | 3000 | [4000] | 1500 | 500 (350) | 250 (125) |
| 2HP | 6000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| 2LK | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 2MK | 4000 | [6000] | 2000 | 600 (420) | 300 (150) |
| 2HK | 2000x2 | [10000] | 1500x2 | 500x2 (350x2) | 250x2 (125x2) |
| j.LP | 1500 | [2000] | 500 | 300 (210) | 150 (75) |
| j.MP | 2500 | [4000] | 1000 | 500 (350) | 250 (125) |
| j.HP | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| j.LK | 1500 | [2000] | 500 | 300 (210) | 150 (75) |
| j.MK | 2500 | [4000] | 1000 | 500 (350) | 250 (125) |
| j.HK | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| 6MP | 2500 | [4000] | 1000 | 500 (350) | 250 (125) |
| 6HP | 6000 | [12000] | 5000 | 1200 (840) | 600 (300) |
| 4HP | 5000 | [8000] | 2000 | 1000 (700) | 500 (250) |
| 4LK | 2500 | [3000] | 2000 | 1000 (700) | 500 (250) |
| 4MK or 6MK | 3000 | [6000] | 1500 | 700 (490) | 350 (175) |
| 6HK | 6000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| 3HK | 6000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| 5MP~4HP | 3000 | [7000] | 1000 | 800 (560) | 400 (200) |
| 2MP~2MP | 1500 | [4000] | 500 | 250 (175) | 125 (62) |
| 2MK~6MP | 2500 | [2000] | 1000 | 500 (350) | 250 (125) |
| 2HK~3HK | 7000 | [7000] | 1000 | 500 (350) | 250 (125) |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP |  |  |  | 1.07 | 1 | 1 | 0 |
| 5MP |  |  |  | 0.94 | 1 | 1 | 0 |
| 5HP |  |  |  | 1.408 (1.251) | 1 | 1 | 0 |
| 5LK |  |  |  | 1.27 | 1 | 1 | 0 |
| 5MK |  |  |  | 1.436 | 1 | 1 | 0 |
| 5HK |  |  |  | 1.906 | 1 | 1 | 1 |
| 2LP |  |  |  | 1.03 | 1 | 1 | 0 |
| 2MP |  |  |  | 1.22 | 1 | 1 | 0 |
| 2HP |  |  |  | 0.91 | 1 | 1 | 0 |
| 2LK |  |  |  | 1.17 | 1 | 1 | 0 |
| 2MK |  |  |  | 1.593 (1.423) | 1 | 1 | 0 |
| 2HK |  |  |  | 2.077 (1.739) | 1 | 1,120 | 5,5 |
| j.LP |  |  |  | 1.05 | 1 | 1 | 0 |
| j.MP |  |  |  | 1.11 | 1 | 1 | 0 |
| j.HP |  |  |  | 1.24 | 1 | 1 | 0 |
| j.LK |  |  |  | 0.55 | 1 | 1 | 0 |
| j.MK |  |  |  | 1.09 | 1 | 1 | 0 |
| j.HK |  |  |  | 1.14 | 1 | 1 | 0 |
| 6MP |  |  |  | 1.465 | 1 | 1 | 0 |
| 6HP |  |  |  | 1.921 (1.856) | 1 | 1 | 1 |
| 4HP |  |  |  | 1.49 | 1 | 1 | 0 |
| 4LK |  |  |  | 1.587 (1.323) | 1 | 1 | 1 |
| 4MK or 6MK |  |  |  | 1.863 Fwd / 0.767 Back | 1 | 1 | 1 |
| 6HK | 4-28 Throw |  |  | 2.086 | 1 / [-1 PC Ground] | 1 | 0 |
| 3HK |  |  |  | 1.559 | 1 / [0 PC] | 1 | 0 |
| 5MP~4HP |  |  |  |  | 1 | 1 | 1 |
| 2MP~2MP |  |  |  |  | 1 | 1 | 1 |
| 2MK~6MP |  |  |  |  | 1 | 1 | 0 |
| 2HK~3HK |  |  |  |  | 1 | 1 | 1 |

### General

| input | Notes |
| --- | --- |
| 5LP | Chains into 5LP/2LP/2LK; SA2 cancel: +7/+1 |
| 5MP | Main combo starter, can chain into 4HP Target Combo; SA2 cancel: +17/+11 |
| 5HP | Stagger effect makes it useful as a whiff punish; extends a hurtbox 1f before active that is vulnerable to projectiles; SA2 cancel: +18/+13 |
| 5LK | Decent range light poke, but must let go of back charge before LK input making the execution a bit harder; SA2 cancel: +10/+6; DR cancel is delayed until after 1st recovery frame |
| 5MK | Solid anti-air |
| 5HK | SA2 cancel: +21/+13; can link into 2LP at point blank, 2MP on close range Counter-hit, or 5HP on mid-range Punish Counter |
| 2LP | Chains into 5LP/2LP/2LK; SA2 cancel: +9/+2; DR cancel is delayed until after active frames; topmost hurtbox on frames 1-6 is vulnerable only to aerial strikes (preventing its use as an anti-air) |
| 2MP | 3f extra recovery on whiff; low pushback on hit; chains into itself for a launching Target Combo; has an extended hurtbox on whiff until the end of recovery; SA2 cancel: +13/+7; topmost hurtbox on frames 1-8 is vulnerable only to aerial strikes (preventing its use as an anti-air) |
| 2HP | Good vertical anti-air (cannot hit cross-up); forces stand on hit (useful to create consistent spacing in Sonic Boom loops); SA2 cancel: +18/+9 |
| 2LK | Chains into 5LP/2LP/2LK |
| 2MK | Good poke, especially when used from Drive Rush; significantly more range on 2nd active frame (may not work as an 8f punish at some ranges) |
| 2HK | 2 hits; both hits have juggle potential; 1st hit launches opponent into limited juggle state on Punish Counter; Target Combo follow-up only combos on Drive Rush, Punish Counter, or when 2HK is juggled into |
| j.LP | Can be used as a fuzzy instant overhead |
| j.MP | Puts airborne opponents into limited juggle state; lower body projectile invuln 7-22f (if used immediately on the way up, can avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.HP | Spikes airborne opponents on counter-hit/Punish Counter; lower body projectile invuln 9-23f except around attack hitbox (cannot be used to avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.LK | Cross-up |
| j.MK | Lower body projectile invuln 7-20f (if used immediately on the way up, can avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.HK | Decent horizontal jump-in; lower body projectile invuln 10-19f except around attack hitbox (cannot be used to avoid the 2nd hit of JP's OD Amnesia bombs) |
| 6MP | Fast and high damage for a command overhead; spike knockdown vs. airborne opponents |
| 6HP | Whiffs vs. crouching opponents; has some juggle potential; long forward movement |
| 4HP | Good buffer tool that allows Guile to maintain back charge; SA2 cancel: +18/+13 |
| 4LK | 7-17f low crush (not airborne); has some juggle potential; great approach option out of Drive Rush; the final active frame requires incredible precise spacing to connect (for practical purposes, the max frame advantage is +3/-1) |
| 4MK or 6MK | 7-17f low crush (not airborne); has some juggle potential; 6MK version has 3f extra recovery on whiff; strong neutral tool; better hitbox priority on 4MK version |
| 6HK | 4-28f low crush/throw invuln (not airborne); Counter-hit causes knockdown vs. grounded/airborne opponents (KD +29~); Punish Counter causes crumple vs. grounded and limited juggle state vs. airborne; extends a hurtbox 1f before active that is vulnerable to projectiles |
| 3HK | Whiffs on crouching opponents unless they extend a vertical hurtbox; puts airborne opponents into limited juggle state on CH; puts grounded/airborne opponents into free juggle state on PC; not a reliable anti-air; SA2 cancel: +12/+3; special/DR/DI cancel is delayed until after 5th recovery frame; extends a hurtbox 1f before active that is vulnerable to projectiles |
| 5MP~4HP | 2f gap on block; puts opponents into limited juggle state; frames 8-9 of 4HP animation are kara-cancelable (shifts Guile backwards); SA2 cancel: KD+57/+13 |
| 2MP~2MP | Puts opponents into limited juggle state; +12 extra KD Adv when canceled into SA2; 2f gap between hits on block; SA2 cancel: KD+56/+6 |
| 2MK~6MP | () refers to 20% scaled damage from 2MK combo starter; low into overhead string; has a 5f gap between hits on block that can lead to trade combos; causes spike knockdown vs. airborne opponents; Counter-hit/Punish Counter puts the opponent into a limited juggle OTG bounce state (juggle into [2]8LK is most consistent); 2nd hit maintains the CH/PC state from the initial 2MK |
| 2HK~3HK | (refers to 20% scaled damage from 2HK); only combos from 1st hit of 2HK on Punish Counter, after Drive Rush, or in juggles; very lenient confirm window; puts opponent into limited juggle state; whiffs on crouching opponents (works after Punish Counter 2HK due to juggle state); SA2 cancel: KD +47/+4; special/DR cancel/DI is delayed until after 5th recovery frame |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LPLK | 1200 (2040) | 5 | 3 | 23 | 30 | KD +15 | - | T |
| 4LPLK | 1200 (2040) | 5 | 3 | 23 | 30 | KD +18 | - | T |
| j.LPLK | 1200 (2040) | 5 | 3 | 3 land | - | KD +21(23) | - | T |
| j.4LPLK | 1200 (2040) | 5 | 3 | 3 land | - | KD +15 | - | T |
| HPHK | 800 | 26 | 2 | 35 | 62 | KD +35 / Wall Splat KD +65 | -3 / Wall Splat HKD +72 | LH |
| 6HPHK | 500 recoverable | 20 | 3 | 26(31) | 48(53) | KD +23 | -6 | LH |
| 6HPHK | 500 recoverable | 18 | 3 | 26(31) | 46(51) | KD +23 | -6 | LH |
| MPMK | - | 1 | 12 or until released | 33(1)(11) | 45(3) | - | - | - |
| MPMK~66 | - | 3+8 | - | 15(37) | 26(48) | - | - | - |
| MPMK or 66 | - | 9 | - | 15(37) | 24(46) | - | - | - |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| LPLK |  | 20% Immediate | HKD +15 |  |  |  |
| 4LPLK |  | 20% Immediate | HKD +18 |  |  |  |
| j.LPLK |  |  | HKD +21(23) |  |  |  |
| j.4LPLK |  |  | HKD +15 |  |  |  |
| HPHK | 200 | 20% Starter (Hit) / 20% Multiplier (Block) | Crumple (Standing +21, Juggle +46, HKD +104) | -35 | 34 | 25 |
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
| j.LPLK |  | [10000] | 2000 | 2000(1400) [PC:4000(2800)] |
| j.4LPLK |  | [10000] | 2000 | 2000(1400) [PC:4000(2800)] |
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
| j.LPLK |  |  | 0.67 |  |  |  |
| j.4LPLK |  |  | 0.67 |  |  |  |
| HPHK |  | 1-27 | 2.481 | 0 | 1 | 0 |
| 6HPHK | 1-22 Full | Break | 1.01 | 200 | 100 | 1 |
| 6HPHK | 1-20 Full | Break | 1.01 | 200 | 100 | 1 |
| MPMK | 6 Full (after Perfect Parry) |  |  |  |  |  |
| MPMK~66 |  |  |  |  |  |  |
| MPMK or 66 |  |  |  |  |  |  |

### General

| input | Notes |
| --- | --- |
| LPLK | No corner throw loop without Drive Rush (with frame-perfect timing, can throw loop vs. Blanka, E. Honda, and Zangief); a successful Throw Escape builds 0.5 Drive bars for the defender; Throw Escape is awarded to a random player if input simultaneously |
| 4LPLK | Side switch; Drive Rush is required for throw/strike oki after back throwing opponent into corner; a successful Throw Escape builds 0.5 Drive bars for the defender; Throw Escape is awarded to a random player if input simultaneously |
| j.LPLK | Higher air throw gives slightly better KD Adv.; gives oki if near the corner |
| j.4LPLK | Side switch; if throwing opponent back into the corner, can Drive Rush for meaty strike (no true throw oki) |
| HPHK | See Drive Impact. Airborne connect gives spinning juggle state on Punish Counter or corner Wall Splat with variable height. |
| 6HPHK | Performed by inputting 6HPHK during blockstun; 5f extra recovery on hit; freezes the screen for 4f during startup; see Drive Reversal. |
| 6HPHK | Performed by holding 6HPHK on wakeup; 5f extra recovery on hit; does not have any screen freeze except for a 12f freeze when interacting with the opponent's throw hitbox (this also refunds 1 Drive bar after punishing the throw); see Drive Reversal. |
| MPMK | See Drive Parry. Perfect Parrying has only 1F of recovery and disables the opponent from canceling their attack. Perfect Parrying projectiles puts you into fixed 11 frames of recovery. After a Perfect Parry, all Super Gauge gain is reduced by 20% and Drive Gauge gain/damage is reduced by 50% for the entire punish combo. |
| MPMK~66 | See Drive Rush; 1-bar version performed out of a Parry; startup refers to minimum time before an attack can cancel the Drive Rush animation (if performed immediately after a successful Parry, only 1+8 startup); the first 15 recovery frames are cancelable into any attack; the final 22 recovery frames are cancelable into any attack or movement option or blocking (except Parry); only Normal and Command Normal attacks are enhanced with +4 frame advantage and improved juggle properties; Distance: 0.805 (min/throw), 1.898 (min/block), 3.461 (max/final DR frame) |
| MPMK or 66 | See Drive Rush; 3-bar version performed on hit/block from a cancelable normal; can also be performed on whiff from cancelable light normals; startup refers to minimum time before an attack can cancel the Drive Rush animation; the first 15 recovery frames are cancelable into any attack; the final 22 recovery frames are cancelable into any attack or movement option or blocking (except Parry); only Normal and Command Normal attacks are enhanced with +4 frame advantage and improved juggle properties |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard | Cancel | Hitconfirm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [4]6LP | 550 (600) | 10 | - | 30 | 40 | +3(+4) | -3 | LH | SA3 | 11 |
| [4]6MP | 550 (600) | 10 | - | 30 | 40 | +3(+4) | -3 | LH | SA3 | 11 |
| [4]6HP | 550 (600) | 10 | - | 30 | 40 | +3(+4) | -3 | LH | SA3 | 11 |
| [4]6PP | 500x2 (1000) | 10 | - | 28 | 38 | KD +48 | +3 | LH | SA2 SA3 | 11 |
| [2]8LK | 1000 (1200) | 5 | 6 | 26+15 land | 51 | KD +36 | -30 | LH | SA3 | 17 |
| [2]8MK | 1100 (1300) | 6 | 6 | 27+15 land | 53 | KD +37 | -31 | LH | SA3 | 17 |
| [2]8HK | 1200 (1400) | 7 | 6 | 28+15 land | 55 | KD +39 | -32 | LH | SA3 | 17 |
| [2]8KK | 1000(700),600 | 6 | 4,2 | 26+20 land | 57 | KD +29 | -33(-37) | LH | - |  |
| 214LP | 400 | 16 | [45] | 26 | 42 | -3 | -4 | LH | SA3 |  |
| 214MP | 400 | 21 | [85] | 29 | 50 | -6 | -7 | LH | SA3 |  |
| 214HP | 250x2 (500) | 31 | [100] | 23 | 54 | +1 | -1 | LH | SA3 |  |
| 214P~6P | 600(800),400 | 10 | - | 28 | 38 | KD +44~ | -1 | LH | SA3 | 11 |
| 214P~6PP | 400x2,500 (1300) | 10 | - | 28 | 38 | KD +48~ | +3 | LH | SA2 SA3 | 11 |
| 214PP | 300x2 | 15 | [100] | 24 | 39 | KD +57 | +1 | LH | SA2 SA3 | 6 |
| 214PP ~ 6P | 400x2,500 (1300) | 10 | - | 28 | 38 | KD +47 | -3 | LH | SA2* SA3 | 11 |
| 214PP ~ 6PP | 400x3,500 (1700) | 10 | - | 28 | 38 | KD Spin + Splat | +3 | LH | SA2 SA3 | 11 |
| PP | 600 each | 11 | - | 25 | 36 | +2 | -2 | LH | - |  |
| [4]6P~P | 600 each | 11 | - | 25 | 36 | +2 | -2 | LH | - |  |
| [4]6PP~P | 500x2 (1000) | 11 | - | 24 | 35 | KD +54~ | +3 | LH | - |  |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| [4]6LP | 138 (150) |  | +7(8) | -20 | 28 | 8 |
| [4]6MP | 138 (150) |  | +7(8) | -20 | 28 | 8 |
| [4]6HP | 138 (150) |  | +7(8) | -20 | 28 | 8 |
| [4]6PP | 125x2 | 20% Starter | KD +48 | -7 | 32 total | 5,6 |
| [2]8LK | 250 (300) | 30% Starter | KD +36 | -45 | 17 | 15 |
| [2]8MK | 275 (325) | 30% Starter | KD +37 | -46 | 17 | 15 |
| [2]8HK | 300 (350) | 30% Starter | KD +39 | -47 | 17 | 15 |
| [2]8KK | 250,150 |  | KD +29 | -50 | 19 total (15 crouch) | 15,15 |
| 214LP | 100 |  | +1 | -16 | 23 | 8 |
| 214MP | 100 |  | -2 | -19 | 23 | 8 |
| 214HP | 63x2 |  | +1 | -2 | 23 total | 4,4 |
| 214P~6P | 150(200),100 |  | KD +44~ | -9~ | 28 | 8,12 |
| 214P~6PP | 100x2,125 |  | KD +48~ | +4~ | 30 | 8x3 |
| 214PP | 75x2 |  | KD +57 | -3 | 18,18 (26 total) | 5,5 |
| 214PP ~ 6P | 100x2,125 |  | KD +47 | -9~ | 30 | 8x3 |
| 214PP ~ 6PP | 100x3,125 |  | KD Spin + Wallsplat | +15~ | 31 | 8x3 |
| PP | 150 each |  | +6 | -15 | 24 | 8 |
| [4]6P~P | 150 each |  | +6 |  | 24 | 8 |
| [4]6PP~P | 125x2 |  | KD +54~ |  | 28 total | 6,6 |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | Drive Gain | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- | --- |
| [4]6LP | 2500 | [3000] | 500 | 300 (210) | 150 (75) |
| [4]6MP | 4000 | [3000] | 500 | 450 (315) | 225 (112) |
| [4]6HP | 3000 | [3000] | 500 | 300 (210) | 150 (75) |
| [4]6PP | 1000x2 | [2500x2] | -20000 | 300x2 (210x2) | 150x2 (75x2) |
| [2]8LK | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| [2]8MK | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| [2]8HK | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| [2]8KK | 2000x2 |  | -20000 | 500x2 (350x2) | 250x2 (125x2) |
| 214LP | 2500 | [3000] | 1000 | 600 (420) | 300 (150) |
| 214MP | 2500 | [3000] | 1000 | 600 (420) | 300 (150) |
| 214HP | 1000x2 | [3000] | 1000x2 | 300x2 (210x2) | 150x2 (75x2) |
| 214P~6P | [1500/3000/2000],2000 | [1500x2] | 1000 | 600 (420) | 300 (150) |
| 214P~6PP | 2500x2,1000 | [1000x2,3000] | -20000 | 600 (420) | 300 (150) |
| 214PP | 1000x2 | [3000] | -20000 | 300x2 (210x2) | 150x2 (75x2) |
| 214PP ~ 6P | 2500x2,1000 | [1000x2,3000] |  | 600 (420) | 300 (150) |
| 214PP ~ 6PP | 2500x3,1000 | [1000x3,3000] | -10000(-20000) | 800 (560) | 400 (200) |
| PP | 2000 each | 1000/[3000] | 1000 | 300* (210) | 150* (75) |
| [4]6P~P | 2000 each | 1000/[3000] | 1000 | 300* (210) | 150* (75) |
| [4]6PP~P | 2500x2 each | 7002 each |  | 300x2* (210x2) | 150x2* (75x2) |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [4]6LP |  |  |  |  | 1 | 1 | 1 |
| [4]6MP |  |  |  |  | 1 | 1 | 1 |
| [4]6HP |  |  |  |  | 1 | 1 | 1 |
| [4]6PP |  |  |  |  | 1 ground / 1,1 air | 1,2 | 7,8 |
| [2]8LK | 1-7 Air |  | 8-36 (FKD) | 1.095 (1st) | 51 | 51 | 50 |
| [2]8MK | 1-8 Air |  | 8-38 (FKD) | 1.249 (1st) | 51 | 51 | 50 |
| [2]8HK | 1-9 Air |  | 8-40 (FKD) | 1.42 (1st) | 51 | 51 | 50 |
| [2]8KK | 1-11 Full |  | 8-37 (FKD) | 1.33 (1st) | 1,1 | 1,110 | 110,120 |
| 214LP |  |  |  |  | 1 air | 1 | 1 |
| 214MP |  |  |  |  | 1 air | 1 | 1 |
| 214HP |  |  |  |  | 1 air | 1,1 | 1,1 |
| 214P~6P |  |  |  |  | 1 ground / 1,1 air | 1,2 | 1,8 |
| 214P~6PP |  |  |  |  | 1 ground / 1,1 air | 1,2 | 7,8 |
| 214PP |  |  |  |  | 2 ground / 1,1 air | 1,1 | 1,1 |
| 214PP ~ 6P |  |  |  |  | 1 ground / 1,1 air | 0,2 | 5,8 |
| 214PP ~ 6PP |  |  |  |  | 1 ground / 1x4 air | 0x3,2 | 6x3,8 |
| PP |  |  |  |  | 1 | 1 | 1 |
| [4]6P~P |  |  |  |  | 1 | 1 | 1 |
| [4]6PP~P |  |  |  |  | 1,1 | 1,1 | 8,8 |

### General

| input | Notes |
| --- | --- |
| [4]6LP | 1-hit projectile; 45f charge (charge lasts 10f after releasing back direction); input 6+LP within 3f of each other for Perfect timing (better damage and Hit advantage); can follow up with Sonic Break (6P) during SA2; arm hurtbox appears 2f before active |
| [4]6MP | 1-hit projectile; 45f charge (charge lasts 10f after releasing back direction); input 6+MP within 3f of each other for Perfect timing (better damage and Hit advantage); can follow up with Sonic Break (6P) during SA2; arm hurtbox appears 2f before active; has the most Drive Damage and Super Gain of all meterless versions, giving it a unique purpose |
| [4]6HP | 1-hit projectile; 45f charge (charge lasts 10f after releasing back direction); input 6+HP within 3f of each other for Perfect timing (better damage and Hit advantage); can follow up with Sonic Break (6P) during SA2; arm hurtbox appears 2f before active |
| [4]6PP | 2-hit OD projectile; 45f charge (charge lasts 13f after releasing back direction); does not have a Perfect timing version; puts opponents into limited juggle state; can follow up with Sonic Break (6P) during SA2; SA2 cancel: KD+65/+25 |
| [2]8LK | 45f charge (charge lasts 12f after releasing down direction); cannot hit cross-ups; input 8+LK within 3f of each other for Perfect timing (better damage); does 200 less damage on active frames 3-6 (800 regular, 1000 perfect); 2nd active frame extends a wide combo-only hitbox (important for specific combo routes like CH/PC 2MK~6MP bounce or max range CH 2MP link) |
| [2]8MK | 45f charge (charge lasts 12f after releasing down direction); cannot hit cross-ups; input 8+MK within 3f of each other for Perfect timing (better damage); does 300 less damage on active frames 3-6 (800 regular, 1000 perfect) |
| [2]8HK | 45f charge (charge lasts 12f after releasing down direction); cannot hit cross-ups; input 8+HK within 3f of each other for Perfect timing (better damage); does 400 less damage on active frames 3-6 (800 regular, 1000 perfect) |
| [2]8KK | 45f charge (charge lasts 15f after releasing down direction); cannot hit cross-ups; does not have a Perfect timing version; 2nd hit whiffs vs. crouch block (4f worse advantage, less chip damage); 1st hit does 300 less damage on active frames 3-4 (high anti-air or long range connect) |
| 214LP | 1 hit; [] refers to stationary projectile active time; can enhance a Sonic Boom by inputting 6P during recovery (no charge required), or by using [4]6P through the Sonic Blade after 214P recovery; Guile has a wide lower body hurtbox, making him vulnerable to ranged low pokes and sweeps; cannot activate SA1 while Sonic Blade is active on-screen |
| 214MP | 1 hit; [] refers to projectile active time (very slow forward movement); can enhance a Sonic Boom by inputting 6P during recovery (no charge required), or by using [4]6P through the Sonic Blade after 214P recovery; Guile has a wide lower body hurtbox, making him vulnerable to ranged low pokes and sweeps; cannot activate SA1 while Sonic Blade is active on-screen |
| 214HP | 2 hits; [] refers to projectile active time (very slow forward movement); can enhance a Sonic Boom by inputting 6P during recovery (no charge required), or by using [4]6P through the Sonic Blade after 214P recovery; Guile has a wide lower body hurtbox, making him vulnerable to ranged low pokes and sweeps; cannot activate SA1 while Sonic Blade is active on-screen |
| 214P~6P | No charge required to throw projectile; the 6P button strength determines projectile speed and Drive damage on block (LP 3500 / MP 5000 / HP 4000); enhanced version becomes a 2-hit projectile that puts opponents into limited juggle state on hit; input 6+P within 3f of each other for Perfect Boom (+200 damage on 1st hit); if Sonic Blade dissipates before Boom passes through it, the projectile is not enhanced; the projectile speed of 214P~6LP is very slow for the first 8 frames (almost stationary); arm hurtbox appears 2f before active |
| 214P~6PP | No charge required to throw projectile; enhanced version becomes a 3-hit OD projectile that puts opponents into limited juggle state on hit; if Sonic Blade dissipates before OD Boom passes through it, the projectile remains a regular OD Sonic Boom; SA2 cancel: KD+65/+25; projectile speed accelerates until no longer on screen |
| 214PP | 2-hit OD projectile; button combination determines forward movement speed of the projectile (LP+MP slowest, LP+HP mid, MP+HP fastest); [] refers to projectile active time; on grounded connect, 1st hit knocks down and the 2nd hit remains active; either hit puts opponent into limited juggle state; cannot activate SA1 while Sonic Blade is active on-screen; gives slight advantage on block and can be extremely plus when used with meaty timing; SA2 cancel: KD+68/+16 |
| 214PP ~ 6P | No charge required to throw projectile; puts opponents into limited juggle state; only the Enhanced Boom is cancelable to SA2; if the OD Sonic Blade is blocked immediately at close range, it will dissipate before the Boom follow-up comes out, making the cancel impossible; SA2 cancel: KD+64/+24; projectile speed accelerates until no longer on screen |
| 214PP ~ 6PP | No charge required to throw projectile; puts opponents into limited juggle state; costs 3 total stocks of Drive Gauge counting the initial Sonic Blade activation (4 stocks if you delay with a manual OD Sonic Boom); causes a short wallsplat animation if the opponent is near the corner; SA2 cancel: KD+65/+25; projectile speed accelerates until no longer on screen |
| PP | 1-hit projectile; only possible during SA2 install (1500f timer); each use drains timer by 200f (maximum 5 per sequence); projectile speed changes based on directional input (1PP/4PP slow, 5PP/2PP medium, 6PP/3PP fast); Guile only builds super meter for himself if projectile connects after install timer has expired |
| [4]6P~P | 1-hit projectile; only possible during SA2 install (1500f timer); each use drains timer by 200f (maximum 4 follow-ups per sequence); button strength determines projectile speed; Guile only builds super meter for himself if projectile connects after install timer has expired |
| [4]6PP~P | 2-hit OD projectile; only possible during SA2 install (1500f timer); each use drains timer by 200f (maximum 2 follow-ups per sequence); Guile only builds super meter for himself if projectile connects after install timer has expired |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [4]646P | 200x6,800 (2000) | 8(11) | 51 | 81 | 89 | KD +41 | -26 | LH |
| [4]646HP | 200x6,600 (1800) | 7 | 52 | 68 | 75 | KD +70 | -2 | LH |
| 214214P | - | 1 | (1500) | 5 | 6 | - | - | - |
| [4]646K | 4000(3000) | 9 | 6 | 30+40 land | 84 | HKD +16 | -59 | LH |
| [4]646K | 4500(3500) | 9 | 6 | 30+40 land | 84 | HKD +16 | -59 | LH |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| [4]646P | 50x6,200 | 30% Minimum | KD +41 | +30 | 56 total | 2x6 |
| [4]646HP | 50x6,200 | 30% Minimum | KD +70 | +48 | 67 total | 1,10x5 |
| 214214P |  |  |  |  |  |  |
| [4]646K | 1000(750) | 50% Minimum; 10% Immediate (Sp) | HKD +16 | -74 | 17 | 15 |
| [4]646K | 1250(875) | 50% Minimum; 10% Immediate (Sp) | HKD +16 | -74 | 17 | 15 |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- |
| [4]646P | 360x6,340 (2500) | 720x6,680 (5000) | -10000 | -10000 |
| [4]646HP | 360x6,340 (2500) | 720x6,680 (5000) | -10000 | -10000 |
| 214214P |  |  | -20000 | -20000 |
| [4]646K | 7500 | 15000(10000) | -30000 | -30000 |
| [4]646K | 10000 | 20000(10000) | -30000 | -30000 |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [4]646P | 1-8 Strike/Throw | Break |  |  | 1 | 0x6,101 | 100 |
| [4]646HP |  | Break |  |  | 100 | 0x6,100 | 99 |
| 214214P |  |  |  |  |  |  |  |
| [4]646K | 1-14 Full | Break | 12-44 (FKD) | 1.394 (1st) | 101 | 101 | 100 |
| [4]646K | 1-14 Full | Break | 12-44 (FKD) | 1.394 (1st) | 101 | 101 | 100 |

### General

| input | Notes |
| --- | --- |
| [4]646P | 45f charge (charge lasts 22f after releasing back direction); 7-hit Super projectile; can input this horizontal version with LP or MP; cannot be used while Sonic Blade projectile is active on-screen; active frames 1-3 only hits on the shorter-range hitbox in front of Guile, but extends a combo-only hitbox to its full range that connects if the opponent is in hitstun (essentially has 11f startup as a long-range punish tool, like when used against the opponent's projectile); the upper combo-only hitbox applies to strike-based hitstun (e.g. j.MP air-to-air) while the lower combo-only hitbox applies to projectile-based hitstun (e.g. anti-air Sonic Boom); can be juggled into after HP SA1 if the opponent was launched from a grounded state |
| [4]646HP | 45f charge (charge lasts 22f after releasing back direction); 7-hit Super projectile; primarily used in air juggles (whiffs on crouching opponents unless they extend a vertical hurtbox, can hit standing opponents at close range); puts opponent into limited juggle state; KD Adv. can vary depending on juggle height; cannot be used while Sonic Blade projectile is active on-screen; can follow up with a LP/MP SA1 after hitting a grounded opponent |
| 214214P | Gives access to Sonic Break follow-ups; remaining active time decreases by 200f with each Sonic Break use (maximum 7 uses) |
| [4]646K | 45f charge (charge lasts 22f after releasing back direction); active frames 3-6 give a non-cinematic hit with reduced damage and chip; cannot hit cross-up; cinematic time regenerates ~1.8 Drive bars for Guile |
| [4]646K | 45f charge (charge lasts 22f after releasing back direction); active frames 3-6 give a non-cinematic hit with reduced damage and chip; cannot hit cross-up; available at 25% HP or below; cinematic time regenerates ~2 Drive bars for Guile |


---

*Source: [SuperCombo Wiki — Guile/Frame data](https://wiki.supercombo.gg/w/Street_Fighter_6/Guile/Frame_data)*

*Scraped: 2026-10-28T16:31:11.852Z*