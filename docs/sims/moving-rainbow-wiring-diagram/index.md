---
title: "Moving Rainbow Wiring Diagram"
description: "Three wires between a Pico and a NeoPixel strip, with a quiz that hides the labels."
image: sims/moving-rainbow-wiring-diagram/moving-rainbow-wiring-diagram.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Moving Rainbow Wiring Diagram

<iframe src="main.html" width="100%" height="502" scrolling="no"></iframe>

[Run the Moving Rainbow Wiring Diagram MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three wires. Power, ground, and data. Two minutes with this before a kit
gets powered is worth twenty minutes of debugging afterwards.

**The one that catches everybody is the data wire.** A NeoPixel strip has a
data-in end and a data-out end, and the little arrows printed along it show
which way data travels: each pixel reads its own colour off the front of the
message and passes the rest along. Wire the Pico to the **DO** end instead and
everything is electrically fine, nothing gets warm, no error appears — and not
one pixel lights. That is a far more confusing failure than a wrong pin number.

**The one that gets left out is ground.** When the strip has its own power
supply, the ground wire back to the Pico looks redundant. It is not. Data is a
voltage measured *against ground*, so without a shared ground the strip has no
reference for what counts as a 1 or a 0, and the output is anything from
nothing to flickering garbage.

**And the power wire has a limit worth knowing.** VBUS is the USB supply passed
straight through, which is fine for a short strip. A NeoPixel at full white
draws about 60 mA, so thirty of them is nearly two amps — more than a USB port
will give you. Long strips need their own supply, with the grounds still tied
together.

## How to Use

- **Click any wire** to see which Pico pin it leaves and which strip terminal
  it lands on.
- Look at the arrows printed along the strip. They point away from DI, which is
  the end the data wire must go to.
- Turn on **Check my wiring**. The labels disappear, and you are asked to click
  the wire that carries each named connection.
- **Reset** turns the quiz off and restores the labels.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a Pico and a NeoPixel strip, the learner
demonstrates how to wire the power, ground, and data connections between them,
including which end of the strip is the data-in end.

**Before the session (5 min).** Every mentor runs one quiz pass. It takes two
minutes and it is the difference between spotting a backwards strip immediately
and watching four students conclude their Pico is broken.

**With students (10 min).** Hand out the parts and have pairs wire it from the
diagram, then swap benches and check each other's before anything is plugged
in. A wiring check by a second pair of eyes is a habit worth building early.

**After (20 min).** Run the rainbow. Then deliberately move the data wire to
the DO end and watch nothing happen — the failure is much more memorable when
you caused it on purpose.

**Check for understanding.** Ask: "Your strip has its own 5 V supply, so you
only need two wires to the Pico. Which two?" Data and ground — and a student
who says "just data" has missed the reference that makes data mean anything.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/moving-rainbow-wiring-diagram/main.html" width="100%" height="502" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: diagram
**sim-id:** moving-rainbow-wiring-diagram<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/neopixel-wiring-diagram

Purpose: Let a mentor click each of the three Pico-to-strip wires and confirm the correct pin and terminal before powering a kit for the first time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a Pico and a NeoPixel strip, the learner demonstrates how to wire the power, ground, and data connections between them, including which end of the strip is the data-in end.

Visual elements: A drawn Pico board and a drawn NeoPixel strip with three labeled wires (power, ground, data) running between them; the strip's DI and DO ends clearly marked.

Interactive controls: Click any wire to highlight its two endpoints and show a labeled tooltip ("5V to Power," "GND to Ground," "GPIO 0 to Data In"); a "Check My Wiring" quiz mode that hides the labels and asks the learner to identify each wire.

Default parameters: All three wires shown and labeled; quiz mode off.

Behavior: Clicking a wire highlights it in a distinct color and shows its tooltip; enabling quiz mode removes the labels and scores the learner's clicks against the correct wire-to-terminal mapping.

Implementation notes: p5.js canvas with fixed coordinate endpoints for the Pico and strip graphics; click-detection based on distance to each wire's path.
```

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [Pico REPL vs Script Workflow](../pico-repl-vs-script-workflow/index.md) -- where the code that drives this strip lives.
- [Seasonal LED Pattern Gallery](../seasonal-led-pattern-gallery/index.md) -- what to run on it once it is wired.
- [LED Matrix Pattern Designer](../led-matrix-pattern-designer/index.md) -- the same one-way data idea on a grid.
- [Ohm's Law Current Calculator](../ohms-law-current-calculator/index.md) -- working out whether USB can supply your strip.
- [Raspberry Pi Pico](https://en.wikipedia.org/wiki/Raspberry_Pi#Raspberry_Pi_Pico) -- the board and its pinout.
