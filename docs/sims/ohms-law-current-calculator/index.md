---
title: "Ohm's Law Current Calculator"
description: "Set a supply voltage and a series resistor, and read the LED current before you power a real circuit."
image: sims/ohms-law-current-calculator/ohms-law-current-calculator.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Ohm's Law Current Calculator

<iframe src="main.html" width="100%" height="482" scrolling="no"></iframe>

[Run the Ohm's Law Current Calculator MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Kits get damaged in the first ten minutes of a session, by a student who wired an
LED straight to a battery. This calculator is the thing to run *before* that
happens: set the supply voltage and the resistor you actually have, and see the
current in milliamps with a plain verdict attached.

One subtlety is worth stating out loud, because it is where the arithmetic
usually goes wrong. An LED is not a resistor. It drops a roughly fixed **forward
voltage** -- about 2 volts for a red one -- before any current flows at all. Only
what is left over appears across the series resistor. So the current is

    (supply − forward) / resistance

not supply / resistance. At the default settings that is (5 − 2) / 220, which is
13.6 mA: comfortably inside the safe band for a standard 5 mm LED.

Drop the resistor to 120 ohms and the verdict turns amber. Go to 9 volts with a
100 ohm resistor and it turns red at 70 mA, which is roughly three times what the
part is rated for.

## How to Use

- **Supply voltage** covers the range a club is likely to have on the bench, from
  a single 1.5 V cell to a 9 V battery.
- **Series resistor** covers 10 to 1000 ohms in 10 ohm steps.
- The LED in the diagram brightens with the current, and the dots show current
  flowing faster as it rises.
- The verdict is green below 20 mA, amber up to 30 mA, and red above it.
- Below about 2 V of supply the LED does not light at all, which the readout says
  rather than showing a misleading negative number.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a supply voltage and a resistor value, the learner
calculates the resulting current and judges whether it is safe for the connected
LED.

**Before the sim (5 min).** Ask what happens if you connect an LED directly
across a 9 V battery. Someone will say "it gets brighter." Set the resistor to
its minimum and show them what the readout says instead.

**With the sim (10 min).** Start at the defaults and read the arithmetic aloud
from the panel. Then change *only* the resistor and ask the group to predict the
direction of the change before releasing the slider. Halving the resistor doubles
the current -- that inverse relationship is the core of the objective.

**After the sim (15 min).** Give each pair a real supply and a real resistor from
the club kit. Before they build anything, they must write down the predicted
current and the verdict, and get a mentor to initial it.

**Check for understanding.** Ask: "You have a 9 V battery and only 100 ohm
resistors. Is that safe for an LED?" The answer is no, and a learner who has met
the objective can say roughly how bad it is and what resistor would fix it.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ohms-law-current-calculator/main.html" width="100%" height="482" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** ohms-law-current-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/ohms-law-calculator

Purpose: Let a mentor plug in real supply-voltage and resistor values from a kit and see the resulting current before powering an actual circuit.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a supply voltage and a resistor value, the learner calculates the resulting current and judges whether it is safe for the connected LED.

Canvas layout: Left (60%) shows a simple circuit diagram (battery, resistor, LED) that visually brightens or dims as current changes; right (40%) holds sliders and the numeric readout

Interactive controls: Slider for supply voltage (1.5V-9V); slider for resistor value (10 ohms-1000 ohms); numeric display of calculated current in milliamps; color-coded safety readout (green under 20mA, amber 20-30mA, red above 30mA)

Default parameters: Supply voltage 5V, resistor 220 ohms (yields ~14mA, shown in green)

Behavior: Moving either slider instantly recalculates current using \(I = V / R\) and updates both the numeric readout and the LED brightness/safety color in the diagram

Implementation notes: p5.js canvas with two `createSlider()` controls; recompute on every `draw()` frame from current slider values
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Ohm's law](https://en.wikipedia.org/wiki/Ohm%27s_law) -- the relationship the whole sim rests on.
- [LED circuit](https://en.wikipedia.org/wiki/LED_circuit) -- why a series resistor is required and how the value is chosen.
- [Light-emitting diode](https://en.wikipedia.org/wiki/Light-emitting_diode) -- forward voltage, and why it differs by colour.
- [Resistor Color Code Calculator](../resistor-color-code-calculator/index.md) -- read the resistor's value before you type it in here.
- [Ohm's Law LED Resistor Calculator](https://dmccreary.github.io/learning-micropython/sims/ohms-law-calculator/) -- the same physics run backwards, solving for the resistor instead of the current.
