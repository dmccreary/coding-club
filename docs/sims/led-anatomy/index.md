---
title: LED Anatomy
description: Four parts of an LED, and the two independent ways to tell which leg is which.
image: sims/led-anatomy/led-anatomy.png
status: built
library: Infographic overlay (diagram.js)
bloom_level: Remember (L1)
---

# LED Anatomy

<iframe src="main.html" width="100%" height="650" scrolling="no"></iframe>

[Run the LED Anatomy MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

An LED only works one way round. Put it in backwards and nothing happens —
no smoke, no error, no clue. That silent failure is why this diagram exists.

There are **two independent markings** for the same thing, which is
deliberate on the manufacturer's part:

**Leg length.** The longer leg is the anode (positive, toward +). The shorter
is the cathode (negative, toward ground). Reliable until somebody trims the
legs to fit a breadboard neatly, at which point it is gone forever.

**The flat edge.** One side of the round plastic rim is flattened, and that
flat is always on the cathode side. It survives trimming, and it is the one to
teach as the primary check — the leg length is the convenient shortcut, the
flat is the fallback that always works.

A useful mnemonic that holds for both: the **c**athode is the **c**ut-short
leg on the **c**hamfered flat side.

The dome is worth a mention too. It is not just a coloured cover — it is a
lens, shaped to focus the light the semiconductor die emits into a beam. That
is why an LED looks much brighter head-on than from the side, and why a diffused
LED and a clear one of the same colour behave differently in a project.

## How to Use

- **Hover any numbered marker** on the illustration, or any label in the panel,
  to read what that part is and what it does.
- Compare markers 3 and 4. The right-hand leg is visibly longer — that is the
  anode.
- Find the flat on the rim at marker 2. It is on the same side as the short
  leg, and it is the marking that survives having the legs trimmed.
- Switch to **Quiz** to be asked instead of told.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given a zoomed illustration of an LED, the learner
identifies the anode, cathode, and flat-edge marking used to orient it
correctly.

**Before (2 min).** Hand out real LEDs and ask which way round they go. Most
groups find the leg-length difference on their own, which is the right
starting point.

**With the diagram (5 min).** Name all four parts, then ask the question that
matters: what do you do once the legs are trimmed? That is what sends people
looking for the flat.

**After (10 min).** Build the circuit with the LED deliberately backwards
first. Nothing happens, nothing breaks, and the group has now met the failure
mode in a controlled way rather than in the middle of debugging something else.

**Check for understanding.** Ask: "Your LED is in the breadboard with both
legs cut to the same length and it will not light. What do you check?" The flat
on the rim, and then whether the resistor and the loop are right. A student who
says "the longer leg" has not noticed the legs are now identical.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/led-anatomy/main.html" width="100%" height="650" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** led-anatomy<br/>
**Library:** Interactive Infographic Overlay (diagram.js, callout engine)<br/>
**Status:** Specified

Purpose: Let a learner identify anode, cathode, and the flat-edge marking on a zoomed illustration of a real LED before handling one.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a zoomed illustration of an LED, the learner identifies the anode, cathode, and flat-edge marking used to orient it correctly.

Image style: Close-up flat illustration of a single 5mm LED, legs extended, with a visible length difference between the two legs and a flat edge on the dome

Image dimensions: 800x600 (landscape)

Callouts (4 total): 1. "Anode (longer leg)" color #4A90D9; 2. "Cathode (shorter leg)" color #E67E22; 3. "Flat edge" on the dome, color #9B59B6; 4. "Light-emitting dome" color #F5A623

Interactive features: Hover or click each callout to reveal a one-sentence explanation; a "Flip It" button shows the same LED reversed so learners practice recognizing orientation from either side

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` + `style.css` render numbered markers over the generated LED illustration
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Blinking LED Breadboard Circuit](../blinking-led-breadboard-circuit/index.md) -- this LED in a working circuit.
- [Circuit Symbol Reader](../circuit-symbol-reader/index.md) -- how polarity is shown on a schematic.
- [Normal Circuit vs. Short Circuit](../normal-circuit-vs-short-circuit/index.md) -- why the series resistor matters.
- [Light-emitting diode](https://en.wikipedia.org/wiki/Light-emitting_diode) -- forward voltage, colour, and why the dome is a lens.
