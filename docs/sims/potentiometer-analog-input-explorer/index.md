---
title: Potentiometer Analog Input Explorer
description: Turn a knob and watch an analog reading sweep smoothly through 1024 values, then see what a digital pin would have made of the same knob.
image: sims/potentiometer-analog-input-explorer/potentiometer-analog-input-explorer.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Potentiometer Analog Input Explorer

<iframe src="main.html" width="100%" height="447" scrolling="no"></iframe>

[Run the Potentiometer Analog Input Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A digital input answers one question: is this pin high or low? An analog input
answers a different and much richer one: *how much*?

Drag the knob and the reading sweeps continuously from 0 to 1023 -- 1024 distinct
values, with no snapping between them. That number is what a Pico's
analog-to-digital converter reports, and dividing it by 1023 and multiplying by
3.3 gives the voltage actually on the pin.

Tick **Compare to a digital input** and the same knob position collapses to a
single HIGH or LOW, flipping at one threshold near the middle. Everything else
the knob was telling you is thrown away. Watching those two readouts side by side
is the fastest way to make the analog/digital distinction stick, and it is the
reason a volume knob needs an analog pin while a push button does not.

## How to Use

- **Drag the knob** through its 270 degrees of travel. It stops at the end stops,
  like a real potentiometer.
- **Centre the knob** returns it to the middle.
- **Compare to a digital input** overlays the HIGH/LOW reading and marks on the
  bar exactly where a digital pin would flip.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a potentiometer's knob position, the learner
demonstrates how turning it produces a proportional analog input reading across a
continuous range.

**Before the sim (5 min).** Put a push button and a volume knob on the table. Ask
what makes them different as inputs. "One is a button" is the wrong level of
answer; push for "one has two states, the other has many."

**With the sim (10 min).** Sweep the knob slowly and have the group call out the
reading at the quarter points: roughly 0, 256, 512, 768, 1023. Then turn on the
digital comparison and sweep again. Ask them to say, out loud, what information
is being lost.

**After the sim (10 min).** Ask each student to name one club project that needs
an analog input and one that only needs a digital one, and justify each in a
sentence.

**Check for understanding.** Ask: "The reading is 700. What is the voltage on the
pin, roughly, and what would a digital pin have reported?" About 2.26 V, and
HIGH -- and the second answer is the same for a reading of 513, which is the
point.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/potentiometer-analog-input-explorer/main.html" width="100%" height="447" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** potentiometer-analog-input-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/adc-potentiometer-explorer

Purpose: Let a learner turn a simulated potentiometer knob and watch the continuous analog reading change in real time, contrasted against the two-value digital reading.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a potentiometer's knob position, the learner demonstrates how turning it produces a proportional analog input reading across a continuous range.

Visual elements: A drawn rotary knob the learner can drag, plus a numeric readout (0-1023) and a filling bar graph that rises and falls with the reading

Interactive controls: Draggable knob (or equivalent slider); numeric readout; a "compare to digital" toggle that overlays a two-state HIGH/LOW indicator for contrast

Default parameters: Knob starts at center position, reading near 512

Behavior: Dragging the knob updates the numeric readout and bar graph continuously and smoothly, with no snapping between fixed values

Implementation notes: p5.js `map()` function converts knob angle directly to the 0-1023 reading range; draggable knob using mouse-drag detection
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Potentiometer](https://en.wikipedia.org/wiki/Potentiometer) -- how the component divides a voltage as it turns.
- [Analog-to-digital converter](https://en.wikipedia.org/wiki/Analog-to-digital_converter) -- what turns the voltage into the 0-1023 number.
- [Voltage divider](https://en.wikipedia.org/wiki/Voltage_divider) -- the circuit a potentiometer actually is.
- [Quantization](https://en.wikipedia.org/wiki/Quantization_(signal_processing)) -- why there are 1024 steps and not infinitely many.
