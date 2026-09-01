---
title: H-Bridge Direction and Speed Control
description: Given a set of H-bridge control inputs and a PWM duty cycle, the learner demonstrates how DC motor direction and speed are controlled without routing motor current through the microcontroller.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# H-Bridge Direction and Speed Control



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
