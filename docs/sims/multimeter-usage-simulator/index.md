---
title: "Multimeter Usage Simulator"
description: "Drag two probes onto a real circuit in three meter modes -- and find a short the meter can see but your eyes cannot."
image: sims/multimeter-usage-simulator/multimeter-usage-simulator.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Multimeter Usage Simulator

<iframe src="main.html" width="100%" height="622" scrolling="no"></iframe>

[Run the Multimeter Usage Simulator MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A multimeter answers exactly one question at a time, and which question you
get depends on the mode. This sim exists so a learner can get that wrong
safely, on a circuit that costs nothing.

The readings are measured, not written into the sim. Voltage comes from the
same node-voltage solve that drives the other circuit MicroSims in this book.
Resistance is a real two-terminal measurement: the meter puts 1 V across the
probes, solves the network with the battery removed, and divides by the
current that flows — which is what the instrument in your hand physically
does. Continuity is that same measurement with a beeper attached.

That matters because it makes the hidden short **findable** rather than
announced. Turn on **Hidden short**, and nothing changes on the board. It is a
stray strand bridging the two power rails, and the only way to find it is to
put the meter in continuity mode and probe rail to rail before you connect the
power. When you do, the meter beeps, the display goes red, and the strand
appears.

Three things worth having a learner discover here rather than being told:

**Continuity is not the same question as "is it connected?"** Probe across R1
and the meter stays silent. The two ends *are* connected — through 330 Ω.
Continuity asks "is this a piece of wire?", and 330 Ω is not.

**An ohmmeter cannot measure a diode.** Probe across the LED in resistance
mode and you get OL. A diode does not have a resistance; it has a forward
voltage. That is a different measurement.

**Continuity and resistance need the power off.** The meter supplies its own
test current, and a live supply fights it. Try it and the display reads STOP
rather than a plausible-looking wrong number, because the real failure mode
here is a reading you believe.

One deviation from the specification worth noting: the mode is chosen with a
dropdown rather than by clicking the drawn dial. The dial on the meter face
shows which mode is selected, but it is a display, not a control — this book's
MicroSims use real HTML controls so they work with a keyboard and a screen
reader.

## How to Use

- **Drag the red and black probes** off the meter onto any two holes. Each
  probe shows the address it is touching.
- Start in **Continuity** with the power off and probe the two power rails —
  the check you should do on every circuit before connecting a battery.
- Tick **Hidden short (mentor)** and repeat that check. Then find it.
- Switch to **Voltage**, tick **Circuit powered**, and probe across R1, then
  across the LED. The two readings add up to the supply.
- Switch back to **Resistance** while the power is still on and read what the
  meter refuses to do.
- **Reset** clears the probes and returns to a safe starting state.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a simple breadboard circuit, the learner
demonstrates how to use a multimeter's continuity, voltage, and resistance
modes to verify the circuit before and after powering it.

**Before the sim (5 min).** Show a real multimeter and ask what the dial
positions are for. Most groups can name volts and not much else.

**With the sim (20 min).** Run the pre-power check as a drill: power off,
continuity mode, probe rail to rail, expect silence. Then turn on the hidden
short without telling the group and have them run the same drill. Finding it
is the whole lesson.

**After the sim (20 min).** Repeat on real hardware with a real meter. Build
one circuit correctly and one with a deliberate short, swap benches, and have
each pair find the other's fault before either connects a battery.

**Check for understanding.** Ask: "You probe two points in continuity mode and
hear nothing. Name two different reasons." Nothing connects them, or something
with resistance connects them. A learner who gives only the first has not
separated continuity from connection.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/multimeter-usage-simulator/main.html" width="100%" height="622" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** multimeter-usage-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/automating-instructional-design/tree/main/docs/sims/ohms-law-simulator

Purpose: Let a learner select a multimeter mode and touch simulated probes to a simple circuit, practicing the pre-power safety check described in the worked example.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a simple breadboard circuit, the learner demonstrates how to use a multimeter's continuity, voltage, and resistance modes to verify the circuit before and after powering it.

Visual elements: A drawn multimeter with a mode dial (Continuity/Voltage/Resistance) and two draggable probe tips; a simple breadboard circuit (battery, resistor, LED) as the measurement target, including a "hidden short" toggle for practice

Interactive controls: Mode dial (click to rotate through three modes); draggable red and black probes; a "hidden short" toggle a mentor can enable to create a practice scenario

Default parameters: Mode set to Continuity, probes unplaced, no hidden short

Behavior: Touching both probes to the power rails in Continuity mode beeps and shows "0 ohms — SHORT" if the hidden-short toggle is on, or "open circuit" if not; Voltage mode across the resistor shows the Ohm's-law-predicted voltage drop; Resistance mode on the unpowered resistor shows its color-code value

Implementation notes: p5.js canvas with draggable probe objects using distance-based "contact" detection against defined circuit-node coordinates; mode-dependent readout logic
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Normal Circuit vs Short Circuit](../normal-circuit-vs-short-circuit/index.md) -- what the short the meter finds would actually do.
- [Resistor Color Code Calculator](../resistor-color-code-calculator/index.md) -- the value the meter is checking R1 against.
- [Ohm's Law Current Calculator](../ohms-law-current-calculator/index.md) -- turning the measured voltage into a current.
- [Breadboard Tie Point Explorer](../breadboard-tie-point-explorer/index.md) -- why two probes in the same column read zero ohms.
- [Multimeter](https://en.wikipedia.org/wiki/Multimeter) -- the real instrument and its other modes.
