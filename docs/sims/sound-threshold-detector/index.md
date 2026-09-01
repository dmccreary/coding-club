---
title: Sound Threshold Detector
description: Given a sound waveform and an adjustable threshold, the learner explains how threshold placement determines which sounds register as a trigger and which are ignored.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Sound Threshold Detector



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** sound-threshold-detector<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner watch a simulated sound waveform against an adjustable threshold line and see exactly when a digital trigger would fire, tracing the same tuning problem worked through above.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a sound waveform and an adjustable threshold, the learner explains how threshold placement determines which sounds register as a trigger and which are ignored.

Data Visibility Requirements: Stage 1 shows the raw simulated waveform (background talk and chair noise as a gently bumpy line, one sharp clap spike); Stage 2 shows the threshold line overlaid at the learner's chosen level; Stage 3 shows a running "TRIGGERED" / "ignored" readout for each waveform peak as it crosses the threshold line.

Interactive controls: Slider to set the threshold level; a "Replay Waveform" button; buttons to swap between three preset waveform scenarios (quiet room, noisy room, single clap).

Default parameters: Threshold set at a level between the noisy-room peaks and the clap spike in the default scenario, so the default already demonstrates correct tuning.

Instructional Rationale: A step-through waveform display with a visible, adjustable threshold line suits this Understand-level objective better than a continuous, unlabeled animation, since a mentor needs to see exactly which peaks cross the line and why, not just watch a general sound-reactive effect.

Implementation notes: p5.js line plot of pre-generated waveform data arrays for each scenario; horizontal threshold line drawn at the slider's y-position; per-peak trigger check comparing peak height to threshold value.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
