---
title: PWM Analog Output Brightness Explorer
description: Given a duty-cycle percentage, the learner explains how the underlying on-off switching pattern produces a perceived brightness level.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# PWM Analog Output Brightness Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: microsim
**sim-id:** pwm-analog-output-brightness-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/pwm

Purpose: Show how adjusting PWM duty cycle changes perceived LED brightness, and reveal the actual fast on-off switching underneath the smooth appearance.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a duty-cycle percentage, the learner explains how the underlying on-off switching pattern produces a perceived brightness level.

Visual elements: A simulated LED that appears to dim or brighten smoothly; beneath it, a zoomed-in, slowed-down waveform showing the actual on-off square-wave pattern at the current duty cycle

Interactive controls: Slider for duty cycle (0%-100%); a "slow motion" toggle that slows the waveform enough to see individual on/off pulses

Default parameters: Duty cycle 50%, normal speed

Behavior: Moving the duty-cycle slider instantly updates both the LED's perceived brightness and the waveform's on/off proportions; the slow-motion toggle reduces switching speed so learners can see the discrete pulses that produce the smooth appearance

Implementation notes: p5.js canvas with the LED rendered as a circle whose fill opacity maps to duty cycle for the "perceived" view, and a literal square-wave line plot for the "actual" view
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
