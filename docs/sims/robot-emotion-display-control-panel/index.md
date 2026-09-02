---
title: Robot Emotion Display Control Panel
description: One distance reading driving a face and a buzzer at the same time -- plus the hysteresis band that stops both flickering.
image: sims/robot-emotion-display-control-panel/robot-emotion-display-control-panel.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Robot Emotion Display Control Panel

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Robot Emotion Display Control Panel MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

One sensor reading, two outputs, one comparison. That is what turns two
separate kits into one project.

Drag the slider below 10 cm and the face switches to alert **and** the speaker
pulses — both from the same comparison, in the same pass through the loop.
Neither output is reading the other; they are both reading the sensor. The mute
toggle proves it: silence the speaker and the face still reacts, because the
face never knew the speaker existed.

Two details in here are the ones that make a real build work rather than
almost work.

**The hysteresis band.** The alert trips *below* 10 cm and releases *above*
12 cm. Without that gap, a reading sitting right at the threshold flips state
every frame, and a robot flickering between calm and alert twenty times a
second is the bug every distance-triggered project hits. Two centimetres of
gap costs nothing and removes the whole failure.

**The beep is edge-triggered.** It fires once, on the transition into alert —
not continuously while something is close. A robot that beeps every frame is
unbearable inside ten seconds, and "beep when the state changes" rather than
"beep while the state is true" is the distinction that fixes it.

The face states are drawn from the same parameterised eyes and mouth with
different numbers, which is worth pointing out to anyone designing their own:
an expression set is a small table of values, not a folder of pictures.

## How to Use

- Drag **Distance to obstacle** down from 50 cm and watch the scale. The red
  band is where the alert trips.
- Cross 10 cm. The face changes and the speaker pulses once.
- Now drag slowly back up. Nothing happens until you pass **12** cm — that gap
  is the hysteresis.
- Tick **Mute the speaker** and cross the threshold again. The face still
  reacts.
- **Reset** returns to a clear path with the speaker live.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a simulated distance reading, the learner
demonstrates how a single sensor value can drive both a robot display kit's
expression and a robot sounds kit's audio cue simultaneously.

**Before the sim (5 min).** Ask how you would connect a display kit and a sound
kit so they react together. Most first answers involve one telling the other,
which is more wiring and more code than reading the same number twice.

**With the sim (10 min).** Run the threshold crossing, then the mute test. Then
drag the slider to sit exactly on 10 cm and ask what would happen without the
hysteresis band.

**After the sim (30 min).** Build it. Real ultrasonic readings jitter by a
centimetre or two on their own, so the hysteresis stops being theoretical
about four seconds in.

**Check for understanding.** Ask: "Your robot's face flickers between calm and
alert when something sits about ten centimetres away. What do you add?" A gap
between the trip point and the release point. A student who says "average the
readings" has a real answer too — and comparing the two fixes is a better
conversation than either alone.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/robot-emotion-display-control-panel/main.html" width="100%" height="522" scrolling="no"></iframe>
```

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

## References

- [Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md) -- the chapter this MicroSim supports.
- [Collision Avoidance Control Loop](../collision-avoidance-control-loop/index.md) -- the same distance reading driving motors instead.
- [The Physical Computing Loop](../physical-computing-loop/index.md) -- one input, one rule, more than one output.
- [Sound Threshold Detector](../sound-threshold-detector/index.md) -- threshold tuning on a noisier signal.
- [Hysteresis](https://en.wikipedia.org/wiki/Hysteresis) -- why two thresholds beat one.
- [Schmitt trigger](https://en.wikipedia.org/wiki/Schmitt_trigger) -- the same fix built in hardware.
