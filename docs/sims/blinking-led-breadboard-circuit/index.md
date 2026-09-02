---
title: "Blinking LED Breadboard Circuit"
description: "A working blink circuit on a real breadboard layout -- with a button that removes one jumper wire and kills it."
image: sims/blinking-led-breadboard-circuit/blinking-led-breadboard-circuit.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Blinking LED Breadboard Circuit

<iframe src="main.html" width="100%" height="602" scrolling="no"></iframe>

[Run the Blinking LED Breadboard Circuit MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

This is the first circuit almost every club builds, drawn on the board it is
actually built on. Five parts, one loop: the 5 V rail, the output pin, a
220 ohm resistor, the LED, and the wire back to ground.

The circuit is solved rather than scripted. The **13.2 mA** you see with the
pin HIGH is what the solver computes from a 5 V supply, a 220 ohm resistor,
and a red LED's 1.9 V forward drop -- not a number typed into the sim. Change
the circuit and the number changes with it.

Two things are modelled on purpose.

**The output pin is a switch, not a power supply.** The `PIN` switch
straddling the center channel connects the LED branch to the 5 V rail (HIGH)
or leaves it open (LOW). The rails stay energized either way, because that is
the truth: toggling a pin in code does not power down the board.

**The loop must be closed.** The **Break the loop** button rebuilds the
circuit without the ground-return jumper at column 13. Everything else is
still there -- supply, resistor, LED, output pin cycling away on its timer --
and the LED stays dark, drawing 0.0 mA. Current needs a path back, and a
circuit with one wire missing is not a circuit at all. That is the single most
common reason a student's first build does nothing.

The scope on the right plots LED current and LED voltage against time, so a
slow blink interval draws a visibly wider square wave than a fast one.

## How to Use

- Press **Start**. The output pin begins cycling and the LED blinks.
- Drag **Blink interval** from 100 ms to 2000 ms and watch the square wave on
  the scope stretch out.
- Press **Break the loop**. Predict what the LED does *before* you look --
  then press **Reconnect the jumper**.
- Uncheck **Auto blink** and click the green `PIN` switch on the board to drive
  the pin by hand.
- **Reset** restores the intact loop, a 500 ms interval, and auto blink.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a breadboard, resistor, LED, and jumper wires,
the learner demonstrates how they combine into a working blinking-light
circuit.

**Before the sim (10 min).** Lay the four physical parts on the table and ask
the group to arrange them into a loop on paper. Do not correct the wrong
answers yet.

**With the sim (15 min).** Compare each paper layout against the board. Then
run the **Break the loop** experiment as a prediction exercise -- ask for a
show of hands on what the LED will do before anyone presses the button.

**After the sim (20 min).** Build it for real. A student who has already seen
the broken-loop case debugs their own dark LED far faster, because "check that
every wire is seated" is now something they have watched matter.

**Check for understanding.** Ask: "The pin is HIGH and the LED is dark. Name
two things that could be wrong." A broken loop and a backwards LED are the two
answers worth having -- and the second is why
[LED Anatomy](../led-anatomy/index.md) comes next.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/blinking-led-breadboard-circuit/main.html" width="100%" height="602" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** blinking-led-breadboard-circuit<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/breadboard

Purpose: Show an animated, current-flow view of a complete blinking-LED circuit built on a real breadboard layout.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a breadboard, resistor, LED, and jumper wires, the learner demonstrates how they combine into a working blinking-light circuit.

Visual elements: Realistic breadboard drawing with an LED, one resistor, two jumper wires, and animated current-flow dots moving along the completed loop whenever the circuit is closed and the simulated output pin is HIGH

Interactive controls: Slider for blink interval (100ms-2000ms); toggle switch simulating "output pin HIGH/LOW"; a "break the loop" button that disconnects one jumper wire to show the LED going dark

Default parameters: Blink interval 500ms, loop intact, output cycling automatically

Behavior: While the loop is intact, the LED brightens and current-flow dots animate whenever the output is HIGH; clicking "break the loop" removes one wire and the LED stays dark regardless of output state, reinforcing the closed-loop requirement

Implementation notes: p5.js canvas rendering breadboard geometry from a coordinate table; animated dots along a path array; `setInterval`-style timing using `millis()`
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Breadboard Tie Point Explorer](../breadboard-tie-point-explorer/index.md) -- which holes on this board are already connected.
- [LED Anatomy](../led-anatomy/index.md) -- why the LED only works one way round.
- [Ohm's Law Current Calculator](../ohms-law-current-calculator/index.md) -- where the 220 ohm resistor value comes from.
- [Resistor Color Code Calculator](../resistor-color-code-calculator/index.md) -- reading the red-red-brown bands on R1.
- [Light-emitting diode](https://en.wikipedia.org/wiki/Light-emitting_diode) -- forward voltage and why it differs by colour.
