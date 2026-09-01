---
title: Frequency Spectrum Display Explorer
description: Given a frequency spectrum display showing a bar pattern, the learner interprets which sound type (a low hum, a high whistle, or general chatter) most likely produced it.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Frequency Spectrum Display Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md).

```text
Type: chart
**sim-id:** frequency-spectrum-display-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/fft-benchmarking/tree/main/docs/sims/live-spectrum-display-bin-averaging

Purpose: Let a learner select a sound type (low hum, high whistle, or general chatter) and see the resulting bar pattern on a simplified frequency spectrum display, before reading one from a physical sound spectrum kit.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: interpret

Learning objective: Given a frequency spectrum display showing a bar pattern, the learner interprets which sound type (a low hum, a high whistle, or general chatter) most likely produced it.

Visual elements: A row of 12 vertical bars labeled low-to-high left to right; a dropdown or button set to pick a sample sound type; a caption describing the currently shown sound.

Interactive controls: Buttons for "Low Hum," "High Whistle," and "Room Chatter"; hovering any bar shows its approximate frequency band and current height as a tooltip.

Default parameters: Starts with all bars at a low, flat baseline height, no sound selected.

Behavior: Clicking a sound-type button animates the bars into that sound's representative pattern (concentrated left, concentrated right, or spread across most bars) and updates the caption; hovering a bar always shows its band label and value regardless of which pattern is active.

Implementation notes: p5.js canvas with a fixed array of 12 rectangle objects; three preset height arrays swapped in on button click with a short easing animation between states.
```

## Related Resources

- [Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md)
