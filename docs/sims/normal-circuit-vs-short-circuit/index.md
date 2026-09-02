---
title: "Normal Circuit vs. Short Circuit"
description: "The same battery, twice: once through a resistor at 27 mA, once through bare wire at about 6 A."
image: sims/normal-circuit-vs-short-circuit/normal-circuit-vs-short-circuit.png
status: built
library: Infographic overlay (diagram.js)
bloom_level: Understand (L2)
---

# Normal Circuit vs. Short Circuit

<iframe src="main.html" width="100%" height="520" scrolling="no"></iframe>

[Run the Normal Circuit vs. Short Circuit MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two loops, the same 6 V battery, and one difference: the left loop has a
220 Ω resistor in it and the right loop is bare wire.

    left:   6 V / 220 Ω        = 27 mA      warm at most
    right:  6 V / ~0.001 Ω     = amps       hot in seconds

The right-hand figure is approximate on purpose. A short circuit's current is
not limited by the wire, it is limited by what the battery can physically
deliver and by the resistance of its own internals — which is why the honest
answer is "as much as the battery has", and why the number varies by battery
type rather than being a property of the circuit.

**What actually goes wrong.** Not a bang. The wire and the battery get hot,
fast. A AA pack will get too hot to hold; a lithium pack can vent or catch
fire. The damage is thermal, it takes seconds rather than an instant, and it
is reversible if somebody disconnects it — which is exactly why "disconnect
first, then look" is the rule.

**The resistor is not optional decoration.** It is the only thing standing
between the battery and a very large current, and it is the component students
most often leave out because the circuit "works without it" for a few seconds.

## How to Use

- **Hover markers 1 and 2** to see the two components that make the left loop
  safe: a resistor in series, and a battery of a known voltage.
- **Hover marker 3** for the current the left loop actually draws.
- **Hover marker 4** for the right-hand loop, and note that the number is
  approximate for a reason.
- Switch to **Quiz** to be asked which is which.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a circuit diagram, the learner explains why a
low-resistance path produces a current spike compared to a normal,
resistor-limited path.

**Before (5 min).** Write Ohm's law on the board and work the left loop
together: 6 divided by 220. Then ask what happens when you divide 6 by
something close to zero.

**With the diagram (10 min).** Compare the two loops marker by marker. The
useful question is not "which is dangerous" — everyone can see that — but "what
exactly is different", and the answer is one component.

**After (10 min).** Agree the club's rule out loud: check the loop before
connecting power, and if something gets warm, disconnect first and look
second.

**Check for understanding.** Ask: "Why can't we say exactly how many amps the
short circuit draws?" Because nothing in the circuit limits it — the battery's
own internal resistance does, so the answer depends on the battery rather than
on the wiring. A student who gives a confident precise number has missed what
makes a short dangerous.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/normal-circuit-vs-short-circuit/main.html" width="100%" height="520" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** normal-circuit-vs-short-circuit<br/>
**Library:** Interactive Infographic Overlay (diagram.js, side-by-side comparison + numbered callouts)<br/>
**Status:** Specified

Purpose: Show why removing the resistor and LED from a circuit's current path causes a dangerous current spike, using the same numbers worked through in the prose above.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a circuit diagram, the learner explains why a low-resistance path produces a current spike compared to a normal, resistor-limited path.

Image style: Two side-by-side breadboard circuit illustrations — left labeled "Normal Circuit" (battery, resistor, LED, wire loop), right labeled "Short Circuit" (battery, bare wire loop, no resistor)

Image dimensions: 1200x600 (landscape)

Callouts (4 total): 1. "6V battery pack" on both illustrations; 2. "220-ohm resistor" on the normal circuit only, color #4A90D9; 3. "~27 mA (safe)" current readout on the normal circuit, color #2ECC71; 4. "~6 A (dangerous, gets hot)" current readout on the short circuit, color #E74C3C

Interactive features: Hover either current readout to reveal the Ohm's law calculation behind it; click either full illustration to toggle a heat-glow effect on the wire showing where the energy is being dissipated

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` + `style.css` render the two illustrations with hover-revealed calculation tooltips
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Multimeter Usage Simulator](../multimeter-usage-simulator/index.md) -- finding a short with a meter before connecting power.
- [Ohm's Law Current Calculator](../ohms-law-current-calculator/index.md) -- the arithmetic behind both figures.
- [Electrical Safety Rules Poster](../electrical-safety-rules-poster/index.md) -- the rules this diagram is the reason for.
- [Short circuit](https://en.wikipedia.org/wiki/Short_circuit) -- and why the current is bounded by the source.
