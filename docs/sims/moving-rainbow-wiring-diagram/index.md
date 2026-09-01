---
title: Moving Rainbow Wiring Diagram
description: Given a Pico and a NeoPixel strip, the learner demonstrates how to wire the power, ground, and data connections between them, including which end of the strip is the data-in end.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Moving Rainbow Wiring Diagram



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md)
