---
title: "Ryu — Frame Data"
description: "Frame data for Ryu"
---

# Ryu Frame Data

## Vitals

*Vitals*

| Ryu | HP | Throw / Range | Fwd Walk / Speed | Back Walk / Speed | Fwd Dash / Speed | Back Dash / Speed | Fwd Dash / Distance | Back Dash / Distance | Jump / Speed | Fwd Jump / Distance | Back Jump / Distance | Jump / Apex |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | 10000 | 0.8 | 0.047 | 0.032 | 19 | 23 | 1.252 | 0.923 | 4+38+3 | 1.90 | 1.52 | 2.115 |

## Moves

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard | Cancel | Hitconfirm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP | 300 | 4 | 3 | 7 | 13 | +4 | -1 | LH | Chn Sp SA | 13 |
| 5MP | 600 | 6 | 4 | 11(13) | 20(22) | +7 | -1 | LH | Sp SA TC | 16 (18 TC) |
| 5HP | 800 | 10 | 5 | 18 | 32 | +4 | -2 | LH | Sp SA TC | 19 (22 TC) |
| 5LK | 300 | 5 | 3 | 11 | 18 | +2 | -4 | LH | Sp SA | 13 |
| 5MK | 700 | 9 | 3 | 18 | 29 | +4 | -4 | LH | - |  |
| 5HK | 900 | 12 | 4 | 20(22) | 35 | +9 | +1 | LH | - |  |
| 2LP | 300 | 4 | 2 | 9 | 14 | +4 | -1 | LH | Chn Sp SA | 11 |
| 2MP | 600 | 6 | 4 | 13(15) | 22(24) | +5 | 0 | LH | Sp SA | 16 |
| 2HP | 800 | 9 | 6 | 21(22) | 35 | +1 | -7 | LH | Sp SA | 18 |
| 2LK | 200 | 5 | 2 | 10 | 16 | +3 | -1 | L | Chn |  |
| 2MK | 500 | 8 | 3 | 19 | 29 | +1 | -6 | L | Sp SA | 13 |
| 2HK | 900 | 9 | 3 | 23(29) | 34(40) | KD +40 | -12 | L | - |  |
| j.LP | 300 | 4 | 10 | 3 land | - | +4(+9) | 0(+5) | H | - |  |
| j.MP | 350x2 | 8 | 2,3 | 3 land | - | +10(+13) | +6(+9) | H | Sp |  |
| j.HP | 800 | 9 | 6 | 3 land | - | +8(+15) | +4(+11) | H | - |  |
| j.LK | 300 | 6 | 10 | 3 land | - | +5(+10) | +1(+6) | H | - |  |
| j.MK | 500 | 7 | 6 | 3 land | - | +8(+13) | +4(+9) | H | - |  |
| j.HK | 800 | 10 | 8 | 3 land | - | +9(+15) | +5(+11) | H | - |  |
| 6MP | 300x2 | 20 | 1,3 | 19 | 42 | +3 | -3 | H,H | - |  |
| 6HP | 400x2 | 20 | 2,3 | 16 | 40 | +6 | +3 | LH | - |  |
| 4HP | 800 | 7 | 4 | 25(26) | 35(36) | +1 | -13 | LH | Sp SA | 17 |
| 4HK | 400x2 | 10(20) | 5(5)3 | 21 | 43 | 0 | -4 | LH | Sp SA | 37(17) |
| 6HK | 800 | 16 | 4 | 20 | 39 | +2 | -4 | LH | Sp* | 19 |
| 5HP~HK | 1000 | 9 | 4 | 20 | 32 | KD +39 | -8(-18) | LH | - |  |
| 5MP~LK | 300 | 5 | 3 | 16 | 23 | +1 | -4 | LH | TC | 35 |
| 5MP~LK~HK | 900(720) | 17 | 4 | 20 | 40 | KD +36 | -8 | LH | - |  |

### General

| input | Dmg Scaling | Punish Adv | PerfParry Adv | DR Cancel onHit | DR Cancel onBlock | After DR onHit | After DR onBlock | Hitstun | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP | 20% Starter | +8 | -8 | +4 | -1 | +8 | +3 | 14 | 9 | 9 |
| 5MP |  | +11 | -13 | +12 | +4 | +11 | +3 | 22 | 14 | 11 |
| 5HP |  | +8 | -21 | +17 | +11 | +8 | +2 | 27 | 21 | 13 |
| 5LK | 20% Starter | +6 | -12 | +5 | -1 | +6 | 0 | 16 | 10 | 9 |
| 5MK |  | +8 | -19 |  |  | +8 | 0 | 25 | 17 | 11 |
| 5HK |  | KD +84 Crumple | -21 |  |  | +13 | +5 | 33 | 24 | 13 |
| 2LP | 20% Starter | +8 | -9 | +5 | 0 | +8 | +3 | 15 | 10 | 9 |
| 2MP |  | +9 | -15 | +12 | +7 | +9 | +4 | 22 | 17 | 11 |
| 2HP |  | +5 | -24 | +17 | +9 | +5 | -3 | 27(22) | 19 | 13 |
| 2LK | 20% Starter | +7 | -10 |  |  | +7 | +3 | 15 | 11 | 9 |
| 2MK | 20% Starter | +5 | -20 | +11 | +4 | +5 | -2 | 23 | 16 | 9 |
| 2HK |  | HKD +47 | -28 |  |  | KD +40 | -8 |  | 19 | 13 |
| j.LP |  | +8(+13) | -7(-2) |  |  |  |  | 13 | 9 | 9 |
| j.MP |  | +14(+17) | -5(-2) |  |  |  |  | 15,17 (19) | 11,13 (15) | 8,10 |
| j.HP |  | +12(+19) | -9(-2) |  |  |  |  | 19 | 15 | 13 |
| j.LK |  | +9(+14) | -7(-2) |  |  |  |  | 14 | 10 | 9 |
| j.MK |  | +12(+17) | -7(-2) |  |  |  |  | 17 | 13 | 11 |
| j.HK |  | +13(+19) | -8(-2) |  |  |  |  | 19 | 15 | 13 |
| 6MP |  | +7 | -21 |  |  | +7 | +3 | 17,25 (26) | 17,19 (20) | 8,10 |
| 6HP |  | +10 | -19 |  |  | +10 | +7 | 25,25 (27) | 8,22 (24) | 10,12 |
| 4HP |  | +5 | -27 | +20 | +6 | +5 | -9 | 30(22) | 16 | 13 |
| 4HK |  | +4 | -22 | +10(+14) | +4(+10) | +4 | 0 | 20,24 (34) | 14,20 (30) | 10,12 |
| 6HK |  | +6 | -22 |  |  | +6 | 0 | 26 | 20 | 13 |
| 5HP~HK |  | KD +37 |  |  |  |  |  |  | 16 | 13 |
| 5MP~LK |  | +5 |  |  |  |  |  | 20 | 15 | 10 |
| 5MP~LK~HK |  | KD +36 | -22 |  |  |  |  |  | 16 | 13 |

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
| 2HP | 7500 | [10000] | 3000 | 1200 (840) | 600 (300) |
| 2LK | 500 | [2000] | 250 | 300 (210) | 150 (75) |
| 2MK | 2000 | [4000] | 1000 | 500 (350) | 250 (125) |
| 2HK | 4000 | [10000] | 3000 | 1000 (700) | 500 (250) |
| j.LP | 1500 | [2000] | 500 | 300 (210) | 150 (75) |
| j.MP | 1500x2 | [2500x2] | 500x2 | 250x2 (175x2) | 125x2 (62x2) |
| j.HP | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| j.LK | 1500 | [2000] | 500 | 300 (210) | 150 (75) |
| j.MK | 2500 | [4000] | 1000 | 500 (350) | 250 (125) |
| j.HK | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| 6MP | 1250x2 | [2500x2] | 750x2 | 250x2 (175x2) | 125x2 (62x2) |
| 6HP | 2500x2 | [4000x2] | 1250x2 | 500x2 (350x2) | 250x2 (125x2) |
| 4HP | 5000 | [8000] | 2000 | 1000 (700) | 500 (250) |
| 4HK | 2000,1000 | [3000x2] | 1500,2000 | 500x2 (350x2) | 250x2 (125x2) |
| 6HK | 5000 | [8000] | 2500 | 1000 (700) | 500 (250) |
| 5HP~HK | 7000 | [10000] | 2500 | 1000 (700) | 500 (250) |
| 5MP~LK | 1000 | [2000] | 1000 | 500 (350) | 250 (125) |
| 5MP~LK~HK | 3000 | [10000] | 2500 | 1000 (700) | 500 (250) |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5LP |  |  |  | 1.01 | 1 | 1 | 0 |
| 5MP |  |  |  | 1.01 | 1 | 1 | 0 |
| 5HP |  |  |  | 1.545 | 1 | 1 | 0 |
| 5LK |  |  |  | 1.30 | 1 | 1 | 0 |
| 5MK |  |  |  | 1.568 | 1 | 1 | 0 |
| 5HK |  |  |  | 1.572 | 1 / [-1 PC Ground] | 1 | 0 |
| 2LP |  |  |  | 0.94 | 1 | 1 | 0 |
| 2MP |  |  |  | 1.14 | 1 | 1 | 0 |
| 2HP |  |  |  | 1.137 | 1 | 1 | 0 |
| 2LK |  |  |  | 1.05 | 1 | 1 | 0 |
| 2MK |  |  |  | 1.482 | 1 | 1 | 0 |
| 2HK |  |  |  | 1.793 | 1 | 1 | 5 |
| j.LP |  |  |  | 0.80 | 1 | 1 | 0 |
| j.MP |  |  |  | 0.85 | 1,1 Air | 1,1 | 6,7 |
| j.HP |  |  |  | 1.06 | 1 | 0 | 0 |
| j.LK |  |  |  | 0.55 | 1 | 1 | 0 |
| j.MK |  |  |  | 1.15 | 1 | 1 | 0 |
| j.HK |  |  |  | 1.20 | 1 | 0 | 0 |
| 6MP |  |  |  | 1.701 (1.552) | 1 | 1,1 | 0,0 |
| 6HP |  |  |  | 1.877 (1.728) | 0,1 | 0,1 | 0,0 |
| 4HP |  |  |  | 0.88 | 1 | 1 | 0 |
| 4HK |  |  |  | 1.564 (0.766) | 1,1 | 1,4 | 0,3 |
| 6HK |  |  |  | 1.924 | 1 | 1 | 1 |
| 5HP~HK |  |  |  |  | 1 | 0 | 1 |
| 5MP~LK |  |  |  |  |  |  |  |
| 5MP~LK~HK |  |  |  |  | 1 |  |  |

### General

| input | Notes |
| --- | --- |
| 5LP | Chains into 5LP/2LP/2LK |
| 5MP | 2f extra recovery on whiff; useful combo tool with a Target Combo follow-up; extends a wider body hurtbox until the end of recovery |
| 5HP | Forces stand on hit (allowing Target Combo follow-up to work on crouching opponents); good poke with hitbox priority, many active frames, and a reactable hitconfirm window |
| 5LK | Good range for a 5f light (useful in punishes and neutral buffers); DR cancel is delayed until after 2nd active frame |
| 5MK | Solid poke; front leg hurtbox is raised on frames 4-11 (can avoid low pokes) |
| 5HK | Whiffs on crouching opponents unless they extend a vertical hurtbox; 2 extra recovery frames on block; good horizontal anti-air that puts airborne opponents into limited juggle state (higher launch on Punish Counter juggle); +11 before Punish Counter crumple state goes airborne; extends a hurtbox 1f before active that is vulnerable to projectiles |
| 2LP | Chains into 5LP/2LP/2LK; topmost hurtbox on frames 1-5 is vulnerable only to aerial strikes (preventing its use as an anti-air) |
| 2MP | 2f extra recovery on whiff; combo and pressure tool; topmost hurtbox on frames 1-9 is vulnerable only to aerial strikes (preventing its use as an anti-air); extends a wider hurtbox until the end of recovery |
| 2HP | Forces stand on hit; decent anti-air; cannot hit cross-ups; fist hurtbox is invincible to air strikes on frame 9; head hurtbox is invincible to air strikes on frames 10-14; only 1st active frame is cancelable (extends a combo-only hitbox to match the range of the 2nd active frame for combo consistency); () refers to hit/block recovery on 1st active frame only; 5f less hitstun on active frames 2-5 (can be punishable on meaty timing) |
| 2LK | Chains into 5LP/2LP/2LK |
| 2MK | DR cancel is delayed until after active frames |
| 2HK | Good range and hitbox priority; has some juggle potential; on block, always plays out a fixed 29f recovery (cannot be made safer with meaty timing) |
| j.LP | Can be used as a fuzzy instant overhead |
| j.MP | Both hits are cancelable to Air Tatsu and put airborne opponents into a limited juggle state; if 1st hit is stand blocked, the 2nd hit will not hit overhead against crouch block; lower body projectile invuln 8-22f (if used immediately on the way up, can avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.HP | Spike knockdown on counter hit/Punish Counter vs. airborne opponents; lower body projectile invuln 9-23f except around attack hitbox (cannot be used to avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.LK | Cross-up |
| j.MK | Cross-up; lower body projectile invuln 7-20f (if used immediately on the way up, can avoid the 2nd hit of JP's OD Amnesia bombs) |
| j.HK | Strong jump-in from mid to long range; lower body projectile invuln 10-17f except around attack hitbox (cannot be used to avoid the 2nd hit of JP's OD Amnesia bombs) |
| 6MP | Counter-hit/Punish Counter/Drive Rush frame advantage applies to both hits; 2nd hit is no longer an overhead if the first hit connects; up to +5 on hit with meaty timing for a meterless combo extension |
| 6HP | 2 hits; good forward-moving combo starter and pressure tool; if 1st hit connects on an extended hurtbox, becomes +6 on Counter-hit or +8 on Punish Counter; Counter-hit/Punish Counter frame advantage applies to both hits; can be very advantageous if 1st hit trades with a light normal; 1st hit puts opponent into free juggle state so that the 2nd hit connects (to prevent Ryu from being punishable) |
| 4HP | Forces stand on hit; only 1st active frame is cancelable; () refers to hit/block recovery on 1st active frame only; extremely short range makes it finicky in combos; 8f less hitstun on active frames 2-4 (can be punishable with meaty timing) |
| 4HK | () refers to 2nd hit startup; 1st hit forces stand and puts airborne opponents into a limited juggle state; 2nd hit puts airborne opponents into OTG bounce state; both hits are cancelable; Counter-hit and Punish Counter frame advantage applies to both hits |
| 6HK | Cancelable to regular/OD Air Tatsu on hit/block; Low Crush on frames 13-20 (not airborne); high pushback on block; puts airborne opponents into limited juggle state; good juggle option after midscreen OD High Blade Kick for corner carry and oki; proximity guard box begins on frame 2 and reaches the maximum attack range (prevents opponents from walking back out of the attack startup) |
| 5HP~HK | HK cannot hit vs. crouch block (much more unsafe); cancels to Denjin Charge by inputting 2P on hit only (KD Adv. +10); can juggle into MP/OD Shoryuken or SA3 in the corner |
| 5MP~LK | Hits consistently at max 5MP range, but the LK can whiff if 5MP connects on an extended hurtbox; can be spaced safely against most characters for a spacing trap |
| 5MP~LK~HK | (refers to scaled damage); 6f gap before HK on block; cancels to Denjin Charge by inputting 2P on hit only (KD Adv. +7) |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LPLK | 1200 (2040) | 5 | 3 | 23 | 30 | KD +17 | - | T |
| 4LPLK | 1200 (2040) | 5 | 3 | 23 | 30 | KD +11 | - | T |
| HPHK | 800 | 26 | 2 | 35 | 62 | KD +35 / Wall Splat KD +65 | -3 / Wall Splat HKD +72 | LH |
| 6HPHK | 500 recoverable | 20 | 3 | 26(31) | 48(53) | KD +23 | -6 | LH |
| 6HPHK | 500 recoverable | 18 | 3 | 26(31) | 46(51) | KD +23 | -6 | LH |
| MPMK | - | 1 | 12 or until released | 33(1)(11) | 45(3) | - | - | - |
| MPMK~66 | - | 3+8 | - | 15(37) | 26(48) | - | - | - |
| MPMK or 66 | - | 9 | - | 15(37) | 24(46) | - | - | - |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| LPLK |  | 20% Immediate | HKD +17 |  |  |  |
| 4LPLK |  | 20% Immediate | HKD +11 |  |  |  |
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
| HPHK |  | 1-27 | 2.541 | 0 | 1 | 0 |
| 6HPHK | 1-22 Full | Break | 1.67 | 200 | 100 | 1 |
| 6HPHK | 1-20 Full | Break | 1.67 | 200 | 100 | 1 |
| MPMK | 6 Full (after Perfect Parry) |  |  |  |  |  |
| MPMK~66 |  |  |  |  |  |  |
| MPMK or 66 |  |  |  |  |  |  |

### General

| input | Notes |
| --- | --- |
| LPLK | Has access to corner throw loops without walking or dashing (whiff 5LP or manually time the next throw); a successful Throw Escape builds 0.5 Drive bars for the defender; Throw Escape is awarded to a random player if input simultaneously |
| 4LPLK | Side switches; no throw/strike oki after back throwing opponent into corner; a successful Throw Escape builds 0.5 Drive bars for the defender; Throw Escape is awarded to a random player if input simultaneously |
| HPHK | See Drive Impact. Airborne connect gives spinning juggle state on Punish Counter or corner Wall Splat with variable height. |
| 6HPHK | Performed by inputting 6HPHK during blockstun; 5f extra recovery on hit; freezes the screen for 4f during startup; see Drive Reversal. |
| 6HPHK | Performed by holding 6HPHK on wakeup; 5f extra recovery on hit; does not have any screen freeze except for a 12f freeze when interacting with the opponent's throw hitbox (this also refunds 1 Drive bar after punishing the throw); see Drive Reversal. |
| MPMK | See Drive Parry. Perfect Parrying has only 1F of recovery and disables the opponent from canceling their attack. Perfect Parrying projectiles puts you into fixed 11 frames of recovery. After a Perfect Parry, all Super Gauge gain is reduced by 20% and Drive Gauge gain/damage is reduced by 50% for the entire punish combo. |
| MPMK~66 | See Drive Rush; 1-bar version performed out of a Parry; startup refers to minimum time before an attack can cancel the Drive Rush animation (if performed immediately after a successful Parry, only 1+8 startup); the first 15 recovery frames are cancelable into any attack; the final 22 recovery frames are cancelable into any attack or movement option or blocking (except Parry); only Normal and Command Normal attacks are enhanced with +4 frame advantage and improved juggle properties; Distance: 0.525 (min/throw), 1.878 (min/block), 3.628 (max/final DR frame) |
| MPMK or 66 | See Drive Rush; 3-bar version performed on hit/block from a cancelable normal; can also be performed on whiff from cancelable light normals; startup refers to minimum time before an attack can cancel the Drive Rush animation; the first 15 recovery frames are cancelable into any attack; the final 22 recovery frames are cancelable into any attack or movement option or blocking (except Parry); only Normal and Command Normal attacks are enhanced with +4 frame advantage and improved juggle properties |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard | Cancel | Hitconfirm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 236LP | 700 | 16 | - | 31 | 47 | +2 | -5 | LH | SA3 | 4 |
| 236MP | 700 | 14 | - | 33 | 47 | 0 | -7 | LH | SA3 | 4 |
| 236HP | 700 | 12 | - | 35 | 47 | -2 | -9 | LH | SA3 | 4 |
| 236PP | 500x2 | 12 | - | 28 | 40 | KD +54 | -1 | LH | SA2 SA3 | 12 |
| D.236HP | 500x2 | 12 | - | 28 | 40 | KD +54 | -1 | LH | SA3 | 12 |
| D.236PP | 400x3 (1200) | 12 | - | 26 | 38 | KD +57 | +2 | LH | SA2 SA3 | 13 |
| 623LP | 1100(800) | 5 | 10 | 21+12 land | 47 | KD +38 | -23 | LH | SA3 | 17 |
| 623MP | 1200(800) | 6 | 10 | 30+12 land | 57 | KD +34 | -32 | LH | SA3 | 17 |
| 623HP | 1400(800) | 7 | 10 | 34+12 land | 62 | KD +37(+29) | -39 | LH | SA3 | 22 |
| 623PP | 800x2 | 6 | 2,8 | 37+15 land | 67 | KD +29 | -40 | LH | - |  |
| 214LK | 900 | 12 | 3 | 14+18 land | 46 | KD +35 | -15 | LH | - |  |
| 214MK | 1000 | 14 | 2(13)2 | 11+20 land | 61 | KD +23(+38) | -13(-28) | LH | - |  |
| 214HK | 1200 | 16 | 2(13)2(13)2 | 14+17 land | 78 | KD +20(+35)(+50) | -13(-28)(-43) | LH | - |  |
| 214KK | 200x5 | 13 | 2(4)2(4)2(3)2(4)2 | 10+13 land | 60 | KD +57 | -14(-32) | LH | - |  |
| j.214K | 900 | 11 | 2(5)2(6)2 | 16 land | - | KD +46(+52) | -6(+3) | LH | - |  |
| 6HK~214K | 900 | 11 | 3 | 13+16 land | 42 | KD +38 | -16 | LH | - |  |
| j.214KK | 300,200x3,600 (1500) | 11 | 2(1)3(1)3(1)3(2)2 | 16 land | - | KD +45(+51) | -29(-32) | LH | - |  |
| 6HK~214KK | 300,200x3,600 (1500) | 11 | 2(1)2(2)2(2)2(3)2 | 12+16 land | 56 | KD +47(+48) | -30 | LH | - |  |
| 236LK | 1100 | 14 | 6 | 22 | 41 | KD +42~46 | -11(-7) | LH | SA3 | 22 |
| 236MK | 1200 | 18 | 9 | 19(22) | 45(48) | KD +40~46 | -8(-2) | LH | SA3 | 25 |
| 236HK | 1300 | 27 | 9 | 15 | 50 | KD +45~51 | -3(+5) | LH | SA3 | 30 |
| 236KK | 800 | 17 | 5 | 33 | 54 | Wall Bounce +49(65) | -18 | LH | SA2 SA3 | 27 |
| 214LP | 700 | 12 | 6 | 18 | 35 | +2 | -3 | LH | SA3 | 24 |
| 214MP | 800 | 19 | 6 | 17 | 41 | +2 | -6 | LH | SA3 | 23 |
| 214HP | 400x2 | 30 | 6 | 19 | 54 | KD +61 Spin | +2 | LH | SA3 | 39 |
| 214PP | 1100 | 18 | 6 | 20 | 43 | +3 | +3 | LH | SA2 SA3 | 22 |
| D.214HP | 400x2 | 20 | 6 | 19(31) | 44 | KD +62 Spin | +3 | LH | SA3 | 38 |
| D.214PP | 800 | 18 | 6 | 19 | 42 | KD +87 Crumple | +4 | LH | SA2 SA3 | 22 |
| 22P | - | 50 | - | 2 | 52 | - | - | - | - |  |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| 236LP | 175 |  | +6 | -21 | 27 | 8 |
| 236MP | 175 |  | +4 | -23 | 27 | 8 |
| 236HP | 175 |  | +2 | -25 | 27 | 8 |
| 236PP | 125x2 | 20% Starter; Combo (2 hits) | KD +54 | -7 | 28 total | 9,9 |
| D.236HP | 125x2 | 20% Starter; Combo (2 hits) | KD +54 | -7 | 28 total | 9,9 |
| D.236PP | 100x3 (300) | 20% Starter; Combo (2 hits) | KD +57 | +6 | 29 total | 5,5,8 |
| 623LP | 275 | 30% Starter | KD +38 | -41 | 22 | 15(13) |
| 623MP | 300 | 30% Starter | KD +34 | -50 | 22 | 15(13) |
| 623HP | 350 | 30% Starter | KD +37(+29) | -57 | 22 | 20(13) |
| 623PP | 200x2 |  | KD +29 | -60 | 22 total | 20,13 |
| 214LK | 225 |  | KD +35 | -33 | 21 | 15 |
| 214MK | 250x2 |  | KD +23(+38) | -31 | 20,20 | 15,15 |
| 214HK | 300x3 |  | KD +20(+35)(+50) | -31 | 20,20,20 | 15,15,15 |
| 214KK | 50x5 |  | KD +57 | -23 | 34 total | 6,2x3,15 |
| j.214K | 225x2 | 30% Starter | KD +46(+52) | -21(-15) | 20(16) | 15 |
| 6HK~214K | 225 |  | KD +38 |  | 16 | 13 |
| j.214KK | 75,50x3,150 (375) | Combo (15% extra) | KD +45(+51) | -46(-43) | 27 total | 6,2x3,15 |
| 6HK~214KK | 75 | Combo (15% extra) | KD +47(+48) |  | 16 | 6,2x3,15 |
| 236LK | 275 |  | KD +42~46 | -26(-22) | 20 | 15 |
| 236MK | 300 |  | KD +40~46 | -26(-20) | 20 | 15 |
| 236HK | 325 |  | KD +96~102 Tumble | -22(-16) | 21 | 20 |
| 236KK | 200 | Combo (5% extra) | Wall Bounce +49(65) | -36 | 20 | 20 |
| 214LP | 175 |  | KD +59 Spin | -22 | 20 | 15 |
| 214MP | 200 |  | KD +58 Spin | -21 | 17 | 15 |
| 214HP | 100x2 |  | KD +61 Spin | -23 | 27 total | 15,15 |
| 214PP | 275 | Combo (2 hits) | +7 | -24 | 29 | 15 |
| D.214HP | 100x2 |  | KD +62 Spin | -36 | 41 total | 15 / 17,15 |
| D.214PP | 200 |  | KD +91 Crumple | -23 | 29 | 15 |
| 22P |  |  |  |  |  |  |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | Drive Gain | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- | --- |
| 236LP | 2500 | [3000] | 1000 | 600 (420) | 300 (150) |
| 236MP | 2500 | [3000] | 1000 | 600 (420) | 300 (150) |
| 236HP | 2500 | [3000] | 1000 | 600 (420) | 300 (150) |
| 236PP | 1250x2 | [2500x2] | -20000 | 300x2 (210x2) | 150x2 (75x2) |
| D.236HP | 1250x2 | [1500x2] | 500x2 | 300x2 (210x2) | 150x2 (75x2) |
| D.236PP | 1250x3 | [1000x2,3000] | -20000 | 300x3 (210x3) | 150x3 (75x3) |
| 623LP | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| 623MP | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| 623HP | 4000 | [5000] | 2000 | 1000 (700) | 500 (250) |
| 623PP | 2000x2 |  | -20000 | 500x2 (350x2) | 250x2 (125x2) |
| 214LK | 4000 | [5000] | 3000 | 1200 (840) | 600 (300) |
| 214MK | 2500x2 | [5000] | 3500(3500x2) | 1300 (910) | 650x2 (325x2) |
| 214HK | 2000x3 | [5000] | 4000 (4000x3) | 1400 (980) | 700x3 (350x3) |
| 214KK | 800x5 | [1000x5] | -20000 | 160x4,360 (112x4,252) | 80x4,180 (40x4,90) |
| j.214K | 4000 | [5000] | 2000 | 600 (420) | 300 (150) |
| 6HK~214K | 4000 | [5000] | 2000 | 600 (420) | 300 (150) |
| j.214KK | 800x5 | [1000x5] | -20000 | 200,100x4 (140,70x4) | 100,50x4 (50,25x4) |
| 6HK~214KK | 800 | [1000x5] | -20000 | 200,100x4 (140,70x4) | 100 (50) |
| 236LK | 6000 | [5000] | 3000 | 1400 (980) | 700 (350) |
| 236MK | 6000 | [7000] | 3500 | 1400 (980) | 700 (350) |
| 236HK | 10000 | [10000] | 5000 | 1400 (980) | 700 (350) |
| 236KK | 4000 | [5000] | -20000 | 1200 (840) | 600 (300) |
| 214LP | 2000 | [5000] | 2000 | 800 (560) | 400 (200) |
| 214MP | 6000 | [5000] | 2000 | 800 (560) | 400 (200) |
| 214HP | 3000x2 | [2500x2] | 1000x2 | 700,400 (490,280) | 350,200 (175,100) |
| 214PP | 6000 | [5000] | -20000 | 900 (630) | 450 (225) |
| D.214HP | 3000x2 | [2500x2] | 1000x2 | 700,400 (490,280) | 350,200 (175,100) |
| D.214PP | 6000 | [5000] | -20000 | 1100 (770) | 550 (275) |
| 22P |  |  |  |  |  |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 236LP |  |  |  |  | 1 air | 1 | 1 |
| 236MP |  |  |  |  | 1 air | 1 | 1 |
| 236HP |  |  |  |  | 1 air | 1 | 1 |
| 236PP |  |  |  |  | 1 | 1,2 | 1,6 |
| D.236HP |  |  |  |  | 1 | 1,2 | 1,6 |
| D.236PP |  |  |  |  | 0,0,1 | 0,0,3 | 3,3,6 |
| 623LP | 1-14 Air |  | 7-35 (FKD) | 0.906 (1st) | 1 | 1 | 5(7) |
| 623MP | 1-9 Air |  | 8-45 (FKD) | 0.966 (1st) | 1 | 1 | 5(7) |
| 623HP | 1-8 Air |  | 9-50 (FKD) | 1.186 (1st) | 1 | 1 | 5(7) |
| 623PP | 1-8 Full |  | 8-52 (FKD) | 1.006 (1st) | 1,1 | 0,0 | 10,10 |
| 214LK |  |  | 5-28 (FKD) | 1.96 (1.84) | 4 | 4 | 3 |
| 214MK | 10-41 Lower Body Projectile |  | 8-41 (FKD) | 2.98 (1.94) | 4,4 | 4,4 | 3,3 |
| 214HK | 10-61 Lower Body Projectile |  | 10-61 (FKD) | 4.935 (2.30) | 4,4,4 | 4,4,4 | 3,3,3 |
| 214KK |  |  | 5-47 (FKD) | 1.74 | 2 ground / 1x5 air | 1x4,2 | 1,3,5,7,9 |
| j.214K |  |  | Until Land (FKD) | 1.12 | 5 | 1 | 8 forward / 3 back |
| 6HK~214K |  |  | 1-26 (FKD) | 1.79 (1.67) | 4 | 4 | 3 |
| j.214KK |  |  | Until Land (FKD) | 1.559 (1.31) | 1x5 | 1x5 | 10,11,12,13,14 |
| 6HK~214KK |  |  | 1-40 (FKD) | 2.17 (1.93) | 1x5 | 1x5 | 10,11,12,13,14 |
| 236LK |  |  |  | 1.962 (1.751) | 1 | 1 | 10 |
| 236MK |  |  |  | 2.162 (1.951) | 1 | 1 | 10 |
| 236HK |  |  |  | 2.612 (1.969) | 1 | 1 | 10 |
| 236KK |  |  |  | 2.062 (1.851) | 1 | 2 | 10 |
| 214LP |  |  |  |  | 1 air | 1 | 2 |
| 214MP |  |  |  |  | 1 air | 1 | 2 |
| 214HP |  |  |  |  | 1,1 | 1,1 | 0,1 |
| 214PP |  |  |  |  | 1 air | 1 | 1 |
| D.214HP |  |  |  |  | 1,1 | 1,1 | 3,4 |
| D.214PP |  |  |  |  | -1 ground / 1 air | 1 | 2 |
| 22P |  |  |  |  |  |  |  |

### General

| input | Notes |
| --- | --- |
| 236LP | 1-hit projectile; puts airborne opponents into limited juggle state |
| 236MP | 1-hit projectile; puts airborne opponents into limited juggle state |
| 236HP | 1-hit projectile; puts airborne opponents into limited juggle state |
| 236PP | 2-hit OD projectile; puts opponent into limited juggle state on hit |
| D.236HP | 2-hit projectile; puts opponent into limited juggle state on hit; only comes out when the HP button is pressed |
| D.236PP | 3-hit OD projectile; puts opponent into limited juggle state on hit |
| 623LP | Has juggle potential; puts opponent into limited juggle state (can juggle after a high corner anti-air); cannot hit cross-up; does reduced damage and higher juggle limit on active frames 4-10 (weaker as a high-connect anti-air) |
| 623MP | Has juggle potential; cannot hit cross-up; does reduced damage and higher juggle limit on active frames 4-10 (weaker as a high-connect anti-air) |
| 623HP | Has juggle potential; cannot hit cross-up; does reduced damage and higher juggle limit on active frames 3-10 (weaker as a high-connect anti-air); higher knockdown advantage on the first 2 active frames (+37 refers to 1st active frame, +29 refers to anti-air with 3rd active frame; actual advantage varies based on height/distance) |
| 623PP | Has high juggle potential; cannot hit cross-up; only 2nd hit will connect if used too early as an anti-air; extends a combo-only hitbox to make the 1st active frame more consistent |
| 214LK | Can hit crouching opponents |
| 214MK | Only 1st hit can connect on crouching (stand blocking 1st hit forces 2nd hit to be blocked, even if crouching); later hits have better KD Advantage |
| 214HK | Only 1st hit can connect on crouching (stand blocking any hit forces next hit to be blocked, even if crouching); later hits have better KD Advantage; puts opponent into limited juggle state (can juggle afterward if 3rd hit connects) |
| 214KK | Can hit crouching opponents; puts opponent into limited juggle state; on hit, 1st hit has vacuum effect; on max range block, some hits can drop (-32 at worse) |
| j.214K | Can be input during forward jump; not an overhead; can cross-up (4f less blockstun when landing as a cross-up); at least +3 on block vs. crouching opponents; puts opponent into limited juggle state (can juggle 2HK or SA1); the last 13f of recovery puts Ryu in a crouching state |
| 6HK~214K | Version canceled from 6HK; no follow-up juggle like after jumping Air Tatsu; the last frame of recovery puts Ryu in a crouching state; gives great midscreen oki on a grounded hit (can Dash + 6MP/6HP vs. Back Rise); useful juggle ender after midscreen OD High Blade Kick for damage and corner carry; gives higher KD Advantage on airborne hit (KD +41~46) but knocks the opponent farther away |
| j.214KK | Can be input during forward jump; cannot hit cross-up; cannot hit crouching opponents (unless they extend a vertical hurtbox), and 1st hit can only hit standing opponents on the final 3 airborne frames of jump; puts opponent into limited juggle state; the last 13f of recovery puts Ryu in a crouching state |
| 6HK~214KK | Version canceled from 6HK; can hit crouching opponents unlike the jumping version; puts opponent into limited juggle state (follow-up only possible near the corner); the last frame of recovery puts Ryu in a crouching state |
| 236LK | Puts opponent into limited juggle state on hit; sets up auto-timed safe jump against cornered opponents; can combo when canceled from any normal except 5LP; the last 2 active frames have identical range (the listed best-case frame advantage is when spaced at max range, active frame 5) |
| 236MK | Puts opponent into limited juggle state on hit; can be spaced safely due to its range and high active frame count; 3 extra recovery frames on whiff; the last 3 active frames have identical range (the listed best-case frame advantage is when spaced at max range, active frame 7) |
| 236HK | Puts opponent into limited juggle state on hit (can follow up with 623MP, 623PP, or SA3 in corner); Punish Counter tumble state can be hit OTG; has great range and forward movement, making it a useful poke in neutral; the last 3 active frames have identical range (the listed best-case frame advantage is when spaced at max range, active frame 7) |
| 236KK | Wall Bounce into limited juggle state on hit; if close to corner, opponent flies over Ryu's head |
| 214LP | Strike hitbox but can nullify 1-hit meterless projectiles; puts opponent into spinning juggle state on counter-hit/Punish Counter; excellent Burnout pressure tool (+1 on block, but increased pushback against Burnout) |
| 214MP | Strike hitbox but can nullify 1-hit meterless projectiles; puts opponent into spinning juggle state on counter-hit/Punish Counter |
| 214HP | 2 hits, even if it connects on final active frame; strike hitbox but can nullify 1-hit meterless projectiles; puts opponent into spinning juggle state on hit; leaves Ryu inside throw range for a strike/throw mixup on block |
| 214PP | Strike hitbox but can nullify 1-hit OD projectiles or any meterless projectiles; great pressure tool |
| D.214HP | () refers to recovery on block; strike hitbox but can nullify 2-hit meterless projectile; puts opponent into spinning juggle state on hit; only comes out when the Heavy Punch button is pressed |
| D.214PP | 1-hit; strike hitbox but can nullify 1-hit OD projectile or any meterless projectile; crumple state is +14 before opponent becomes airborne |
| 22P | Charges up next fireball-based move (Hadoken, Hashogeki, SA1, SA2) into a more powerful Denjin version; Ryu is in a counter-hit state for the entire animation; gains the Denjin charge on frame 50; can only store 1 stock at a time (does not persist between rounds); can also be performed after 5HP~HK or 5MP~LK~HK (on hit) by inputting 2P |

### General

| input | Damage | Startup | Active | Recovery | Total | Hit Adv | Block Adv | Guard |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 236236P | 400x5 (2000) | 7 | - | 79 | 86 | KD +26 | -24 | LH |
| 236236P | 200x7,1000 (2400) | 7 | - | 82 | 89 | KD +27 | -24 | LH |
| 214214P | 2800 | 12 | 6 | 39 | 56 | KD +20 | -20 | LH |
| 214214P | 3200 | 12 | 6 | 39 | 56 | KD +20 | -20 | LH |
| 214214{P} | 2900 | 18~ | 6 | 39 | 62~ | KD +20 | -20 | LH |
| 214214{P} | 3300 | 18~ | 6 | 39 | 62~ | KD +78 Tumble | -20 | LH |
| 214214[P] | 3000 | 50~ | 6 | 39 | 94~ | KD +78 Tumble | -20 | LH |
| 214214[P] | 3400 | 50~ | 6 | 39 | 94~ | KD +78 Tumble | -20 | LH |
| 236236K | 4000 (3600) | 5(2) | 12 | 32+39 land | 87 | HKD +14 | -50(-54) | LH |
| 236236K | 4500 (4400) | 5(2) | 12 | 32+39 land | 87 | HKD +14 | -50(-54) | LH |

### General

| input | Chip | Dmg Scaling | Punish Adv | PerfParry Adv | Blockstun | Hitstop |
| --- | --- | --- | --- | --- | --- | --- |
| 236236P | 100x5 (500) | 30% Minimum | KD +26 | -25 | 56 total | 8x5 |
| 236236P | 50x7,150 (500) | 30% Minimum | KD +27 | +5 | 59 total | 4x7,0 (5x7,8) |
| 214214P | 750 | 40% Minimum | KD +20 | -43 | 25 | 18 |
| 214214P | 750 | 40% Minimum | KD +20 | -43 | 25 | 18 |
| 214214{P} | 750 | 40% Minimum | KD +20 | -43 | 25 | 20 |
| 214214{P} | 750 | 40% Minimum; Combo (2 hits) | KD +78 Tumble | -43 | 25 | 20 |
| 214214[P] | 750 | 40% Minimum | KD +78 Tumble | -43 | 25 | 23 |
| 214214[P] | 750 | 40% Minimum | KD +78 Tumble | -43 | 25 | 23 |
| 236236K | 400,300x2,50x2 (1000~1100) | 50% Minimum; 10% Immediate (Sp) | HKD +14 | -74 | 31/29 total | 7,8,8,8 |
| 236236K | 650,300x2,50x2 (1250~1350) | 50% Minimum; 10% Immediate (Sp) | HKD +14 | -74 | 31/29 total | 8,8,8,13 |

### General

| input | DriveDmg Block | DriveDmg Hit[PC] | SuperGain Hit | SuperGain Block |
| --- | --- | --- | --- | --- |
| 236236P | 500x5 | 1000x5 | -10000 | -10000 |
| 236236P | 300x7,400 (2500) | 600x7,800 (5000) | -10000 | -10000 |
| 214214P | 4000 | 10000 | -20000 | -20000 |
| 214214P | 4000 | 10000 | -20000 | -20000 |
| 214214{P} | 6000 | 10000 | -20000 | -20000 |
| 214214{P} | 6000 | 10000 | -20000 | -20000 |
| 214214[P] | 10000 | 10000 | -20000 | -20000 |
| 214214[P] | 10000 | 10000 | -20000 | -20000 |
| 236236K | 2500x3 | 15000(3000x5) | -30000 | -30000 |
| 236236K | 4000,3000x2 | 20000(4000x5) | -30000 | -30000 |

### General

| input | Invuln | Armor | Airborne | Range | Juggle Start | Juggle Increase | Juggle Limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 236236P | 1-8 Strike/Throw | Break |  |  | 1x4,100 | 1x4,100 | 99x5 |
| 236236P | 1-8 Strike/Throw | Break |  |  | 1x7,100 | 1x7,100 | 99x8 |
| 214214P | 1-13 Full | Break |  |  | 1 | 1 | 99 |
| 214214P | 1-13 Full | Break |  |  | 1 | 1 | 99 |
| 214214{P} | 1-9 Full | Break |  |  | 1 | 1 | 99 |
| 214214{P} | 1-9 Full | Break |  |  | 1 | 1 | 99 |
| 214214[P] | 1-9 Full | Break |  |  | 1 | 1 | 99 |
| 214214[P] | 1-9 Full | Break |  |  | 1 | 1 | 99 |
| 236236K | 1-16 Full | Break | 7-48 (FKD) | 1.10 (1st) | [1] | [1x5] | 99 [99x5] |
| 236236K | 1-16 Full | Break | 7-48 (FKD) | 1.10 (1st) | [1] | [1x5] | 99 [99x5] |

### General

| input | Notes |
| --- | --- |
| 236236P | 5-hit Super projectile; button strength does not affect projectile speed; opponent cannot jump over projectile after Super freeze if within ~1/2 screen; can be preformed even when an OD Hadoken is on screen |
| 236236P | 8-hit Super projectile; button strength does not affect projectile speed; opponent cannot jump over projectile after Super freeze if within ~1/2 screen; consumes Denjin stock for slightly more damage and KD Advantage; can be performed even when an OD Hadoken is on screen |
| 214214P | Can hold the button to charge to a higher level for more damage (in exchange for less invincibility); if button is held up to 5f after Super freeze, this invuln is extended up to the 2nd active frame (up to 18f); strike hitbox; Burnout chip damage does not changed based on charge level |
| 214214P | Can hold the button to charge to a higher level for more damage (in exchange for less invincibility); if button is held up to 5f after Super freeze, this invuln is extended up to the 2nd active frame (up to 18f); strike hitbox; Burnout chip damage does not changed based on charge level; consumes Denjin stock for slightly more damage |
| 214214{P} | Loses 4 invincibility frames if held; invincibility can be reduced to 1-7f if the button is held the minimum length of time for Lv.2 charge (6f after Super freeze); strike hitbox; Burnout chip damage does not changed based on charge level |
| 214214{P} | Loses 4 invincibility frames if held; invincibility can be reduced to 1-7f if the button is held the minimum length of time for Lv.2 charge (6f after Super freeze); strike hitbox; Burnout chip damage does not changed based on charge level; consumes Denjin stock for slightly more damage; Denjin version gives the tumbling OTG state that can lead to follow-up juggles (this is the only version that incurs damage scaling in combos) |
| 214214[P] | Loses 4 invincibility frames if held; full charge causes tumble OTG state; strike hitbox; Burnout chip damage does not changed based on charge level; extremely high pushback on block (can be difficult to punish without holding Parry into immediate Drive Rush) |
| 214214[P] | Loses 4 invincibility frames if held; full charge causes tumble OTG state; strike hitbox; Burnout chip damage does not changed based on charge level; extremely high pushback on block (can be difficult to punish without holding Parry into immediate Drive Rush); consumes Denjin stock for slightly more damage |
| 236236K | More hits connect on block vs. tall standing characters (these extra hits do not deal any additional Drive Damage on block); active frames 3-12 cause a non-cinematic hit that does reduced damage (400x4,2000); cannot anti-air cross-ups; starts up faster only when canceled from HP Shoryuken; cinematic time regenerates ~2.2 Drive bars for Ryu |
| 236236K | More hits connect on block vs. tall standing characters (these extra hits do not deal any additional Drive Damage on block); active frames 3-12 cause a non-cinematic hit that does slightly reduced damage (400x2,1200x3); cannot anti-air cross-ups; starts up faster only when canceled from HP Shoryuken; available at 25% HP or below; cinematic time regenerates ~2.3 Drive bars for Ryu |


---

*Source: [SuperCombo Wiki — Ryu/Frame data](https://wiki.supercombo.gg/w/Street_Fighter_6/Ryu/Frame_data)*

*Scraped: 2026-10-28T16:31:21.970Z*