---
title: Robot Emotion Display Control Panel
description: Given a simulated distance reading, the learner demonstrates how a single sensor value can drive both a robot display kit's expression and a robot sounds kit's audio cue simultaneously.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Robot Emotion Display Control Panel



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md).

```text
Type: microsim
**sim-id:** robot-emotion-display-control-panel<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/robot-faces/tree/main/docs/sims/expression-menu-live-simulator

Purpose: Let a learner operate a simulated distance-sensor slider and buzzer toggle to see how one sensor reading can drive both a robot display kit's face and a robot sounds kit's beep at the same time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a simulated distance reading, the learner demonstrates how a single sensor value can drive both a robot display kit's expression and a robot sounds kit's audio cue simultaneously.

Visual elements: A drawn robot face on an OLED-style panel; a speaker icon that visibly pulses when "sound" plays; a slider labeled "Distance to Obstacle (cm)."

Interactive controls: The distance slider (0-50 cm); a threshold marker on the slider showing the 10 cm trigger point; a mute toggle for the speaker icon.

Default parameters: Slider starts at 50 cm (clear path), calm face shown, speaker silent.

Behavior: Dragging the slider below the 10 cm threshold switches the face to an alert expression and pulses the speaker icon once; dragging back above the threshold returns the face to calm; the mute toggle disables only the speaker pulse, leaving the face logic unaffected.

Implementation notes: p5.js canvas with two simple face states (calm, alert) drawn from parameterized eye/mouth shapes; threshold comparison against the slider's current value on every frame.
```

## Related Resources

- [Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md)
