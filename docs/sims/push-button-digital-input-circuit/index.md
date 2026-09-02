---
title: Push Button Digital Input Circuit
description: Press a button, watch the input pin flip to HIGH -- then remove the pull-down resistor and watch LOW stop being reliable.
image: sims/push-button-digital-input-circuit/push-button-digital-input-circuit.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Push Button Digital Input Circuit

<iframe src="main.html" width="100%" height="602" scrolling="no"></iframe>

[Run the Push Button Digital Input Circuit MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Reading a button is harder than lighting an LED, and the reason is a resistor
that looks optional and is not.

With the button pressed, the sense node is connected straight to 5 V and the
input pin reads a solid **HIGH**. Nobody finds that confusing. The interesting
question is what happens when the button is *released*.

**With the 10 kilohm pull-down connected**, the sense node has a path to
ground. Nothing is pushing current into it, so it drains to **0.00 V** and the
pin reads a clean LOW. The resistor is large enough that when the button *is*
pressed it only wastes half a milliamp, but small enough to hold the node down
reliably.

**Without it**, the sense node is connected to nothing at all. Uncheck the
pull-down and the readout stops claiming a voltage: it says *floating --
undefined*, and the HIGH/LOW box flickers. A floating input has no defined
value. It picks up whatever electrical noise is nearby -- a hand moving near
the wire is often enough -- and your code reads button presses that never
happened.

One honest caveat about the simulation. A circuit solver has to answer *some*
voltage for every node, and this one settles a disconnected net at
approximately 0 V. Real hardware does not do that. The flicker in this sim is
drawn deliberately to show the real behaviour rather than the solver's
convenient fiction, which is why the readout refuses to print a number in that
state.

The green wire running along row h to column 20 is the input pin's tap. It
carries no current -- that is what makes it an *input* -- which is precisely
why it cannot hold the node anywhere by itself.

## How to Use

- Press **Start**, then **click and hold** the red button on the board (or hold
  the **B** key). The readout jumps to HIGH.
- Release it. With the pull-down connected the reading falls to a clean LOW at
  0.00 V.
- Uncheck **Pull-down resistor connected**. R1 disappears from the board and
  the released reading starts flickering.
- Press the button again with the pull-down removed -- HIGH still works. Only
  the *released* state is broken.
- **Reset** puts the pull-down back.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a push button wired with a pull-down resistor,
the learner demonstrates how pressing and releasing it changes a digital input
reading between HIGH and LOW.

**Before the sim (5 min).** Ask the group to sketch how they would wire a
button so a program can tell whether it is pressed. Most sketches will have the
button and nothing else. Keep them.

**With the sim (15 min).** Run the pressed and released cases with the
pull-down in place, then take it out. The sketches from the warm-up are the
no-pull-down case, and the flicker is what those sketches would actually do.

**After the sim (20 min).** Wire it on real hardware and print the pin reading
in a loop. Then pull the pull-down resistor out and watch the serial monitor
fill with garbage. This is the rare bug that is more convincing in person than
in simulation.

**Check for understanding.** Ask: "Your button works when pressed but the
program thinks it is being pressed at random the rest of the time. What is
missing?" A student who says "a pull-down resistor" and can say *why* --
because an unconnected pin has no defined voltage -- has met the objective.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/push-button-digital-input-circuit/main.html" width="100%" height="602" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** push-button-digital-input-circuit<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner press a simulated button and watch the connected input pin's reading change in real time, including what happens without a pull-down resistor.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a push button wired with a pull-down resistor, the learner demonstrates how pressing and releasing it changes a digital input reading between HIGH and LOW.

Visual elements: A drawn breadboard circuit with a push button, a pull-down resistor, and a labeled input-pin readout box showing "HIGH" or "LOW"

Interactive controls: A large clickable button graphic the learner can press and hold; a toggle to remove the pull-down resistor and observe an unstable, flickering reading instead of a clean LOW

Default parameters: Pull-down resistor present, reading starts at LOW

Behavior: Pressing the button graphic changes the readout to HIGH instantly and back to LOW on release; removing the pull-down resistor causes the LOW reading to flicker randomly when not pressed

Implementation notes: p5.js mouse-press detection tied to the button graphic; simple state variable for pin reading; randomized flicker effect when pull-down is toggled off
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Breadboard Tie Point Explorer](../breadboard-tie-point-explorer/index.md) -- why the button must straddle the center channel.
- [Blinking LED Breadboard Circuit](../blinking-led-breadboard-circuit/index.md) -- the output half of the same board.
- [Ohm's Law Current Calculator](../ohms-law-current-calculator/index.md) -- why 10 kilohms and not 100 ohms.
- [Pull-up resistor](https://en.wikipedia.org/wiki/Pull-up_resistor) -- the same idea wired the other way round.
- [Logic level](https://en.wikipedia.org/wiki/Logic_level) -- where the HIGH and LOW thresholds come from.
