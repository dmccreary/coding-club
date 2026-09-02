---
title: "H-Bridge Direction and Speed Control"
description: "Two logic inputs pick a diagonal of switches; a PWM slider sets the speed. The microcontroller never carries motor current."
image: sims/h-bridge-direction-speed-control/h-bridge-direction-speed-control.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# H-Bridge Direction and Speed Control

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the H-Bridge Direction and Speed Control MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four switches in an H around a motor. Close the top-left and bottom-right
pair and current crosses the motor left to right. Close the other diagonal and
it crosses right to left. That is the whole idea, and it is why a two-dollar
driver chip can reverse a motor a microcontroller could never drive directly.

**Watch the two circuits.** The thin green lines from the MCU are logic
signals — microamps, 3.3 V, harmless. The heavy dark lines carry motor current
from its own 6 V supply — amps, and enough to destroy a microcontroller pin
instantly. They meet only inside the driver, at the switches. That separation
is the entire reason the part exists, and it is the answer to "why can't I just
wire the motor to a pin?"

**PWM is not a voltage knob.** The switches are only ever fully on or fully
off. At 45% duty the driver is turning them on and off thousands of times a
second, on for 45% of each cycle. The motor's inertia averages that into 2.7 V
of effective drive. Nothing in the circuit is ever at 2.7 V.

**Both inputs HIGH is brake, not bang.** A real driver chip reads that as
"close both low-side switches", which shorts the motor's own terminals together
and stops it hard — much faster than coasting. On a bare four-transistor bridge
the same input pattern would close a vertical pair instead and short the supply
through itself, which is called shoot-through and destroys the transistors. The
chip's job includes preventing that.

## How to Use

- Tick **IN1 HIGH**. Q1 and Q4 close, and the motor arrow shows current
  crossing left to right.
- Raise **PWM duty** and watch the wheel speed up. At 0% the switches are
  closed but nothing moves.
- Press **Swap direction** — the two inputs exchange and the wheel reverses.
- Tick **both** inputs and read what happens. Then untick both, for coast.
- **Reset** returns everything to LOW and 0%.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a set of H-bridge control inputs and a PWM duty
cycle, the learner demonstrates how DC motor direction and speed are controlled
without routing motor current through the microcontroller.

**Before the sim (5 min).** Ask why you cannot connect a motor straight to a
pin. Collect the guesses. "Too much current" is right but usually not held with
any numbers behind it — a pin sources about 20 mA and a small motor wants 500.

**With the sim (15 min).** Work the four input combinations as a truth table on
the board before touching the toggles, then check each. Then do the PWM sweep
and ask what the switches are actually doing at 50%.

**After the sim (25 min).** Wire a real driver board. The two logic wires and
the two motor wires going to physically different places is the moment the
separation stops being a diagram.

**Check for understanding.** Ask: "Your motor runs one way but not the other.
Which two things would you check first?" The second control input actually
reaching the driver, and the driver's enable pin. Both are on the logic side —
which is where the bugs live, because the current side either works or smokes.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/h-bridge-direction-speed-control/main.html" width="100%" height="542" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** h-bridge-direction-speed-control<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/h-bridge

Purpose: Let a learner toggle H-bridge control inputs and a PWM speed slider and see a simulated DC motor respond with the correct direction and speed.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a set of H-bridge control inputs and a PWM duty cycle, the learner demonstrates how DC motor direction and speed are controlled without routing motor current through the microcontroller.

Visual elements: A simplified H-bridge diagram (four switch symbols in an H shape) with a motor symbol in the middle, plus a spinning wheel icon reflecting current direction and speed.

Interactive controls: Two toggle switches representing the H-bridge control inputs; a PWM duty-cycle slider (0%-100%); a "swap direction" preset button.

Default parameters: Both control inputs LOW (motor stopped), duty cycle 0%.

Behavior: Setting one control input HIGH and the other LOW spins the wheel icon in one direction; swapping the pattern reverses it; raising the duty-cycle slider speeds up the spin animation proportionally.

Implementation notes: p5.js canvas with switch-state variables mapped to a rotation-direction sign and duty-cycle mapped to rotation speed via `map()`.
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Motor Type Comparison Explorer](../motor-type-comparison-explorer/index.md) -- whether a DC motor is the right part here at all.
- [Differential Drive Chassis Explorer](../differential-drive-chassis-explorer/index.md) -- two of these driving one robot.
- [H bridge](https://en.wikipedia.org/wiki/H-bridge) -- the topology and its shoot-through failure mode.
- [Pulse-width modulation](https://en.wikipedia.org/wiki/Pulse-width_modulation) -- why switching fast averages out to a voltage.
