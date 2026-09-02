---
title: Frequency Spectrum Display Explorer
description: Three sounds, three unmistakable bar shapes -- and the habit of naming the shape before naming the sound.
image: sims/frequency-spectrum-display-explorer/frequency-spectrum-display-explorer.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Frequency Spectrum Display Explorer

<iframe src="main.html" width="100%" height="482" scrolling="no"></iframe>

[Run the Frequency Spectrum Display Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A plain sound sensor answers *how loud*. A spectrum display answers *how loud,
at which pitches* — and that second question is what makes a project able to
tell a whistle from a slamming door.

The three presets are chosen so the shapes cannot be confused:

- **A low hum** piles almost everything into the leftmost bars. A fridge, a
  fan, a projector, traffic through a wall — all below about 200 Hz, with
  nothing at the top of the range.
- **A high whistle** lights one narrow group near the right and leaves the rest
  at the floor. A whistle is close to a single frequency, so it occupies
  almost no width.
- **Room chatter** is a broad hump across the middle with no single peak.
  Speech uses a wide band, and twenty people talking averages into exactly
  that.

The skill is a two-step habit: **name the shape, then name the sound.** "Tall
on the left, nothing on the right" comes before "that's a hum". Students who
skip to the second step guess; students who describe the shape first are
reading the display.

One practical consequence worth pointing out. If your project needs to ignore
the room's background hum, a spectrum display lets you watch only the bands
above it — which a single loudness reading can never do, because the hum is
part of the same number.

## How to Use

- Press **Low hum**, **High whistle**, and **Room chatter** in turn and watch
  where the energy lands each time.
- Describe the shape out loud before reading the caption.
- **Hover any bar** for its frequency band and current level. The band labels
  run from 60 Hz on the left to about 9.5 kHz on the right.
- **Silence** drops every bar back to the noise floor, which is what the
  display looks like with nothing to hear.

## Lesson Plan

**Bloom level:** Understand (L2) -- *interpret*

**Learning objective:** Given a frequency spectrum display showing a bar
pattern, the learner interprets which sound type (a low hum, a high whistle, or
general chatter) most likely produced it.

**Before the sim (5 min).** Ask what a sound sensor tells you. "How loud" is
the answer, and the follow-up — "can it tell a whistle from a bang?" — sets up
why a spectrum is different.

**With the sim (10 min).** Run all three, then quiz: play one with the caption
covered and have people call the sound from the shape.

**After the sim (25 min).** Put a real spectrum kit in the room and try it —
hum, whistle, and everybody talking. The real display is noisier and jumpier
than this one, and recognising the shape underneath the jitter is the skill
landing.

**Check for understanding.** Ask: "Your project should react to a whistle but
not to the room. Which bars would you watch?" The top few. And why not just use
a loudness threshold? Because a loud room and a whistle produce the same single
number, and different shapes.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/frequency-spectrum-display-explorer/main.html" width="100%" height="482" scrolling="no"></iframe>
```

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

## References

- [Chapter 20: Sensor, Sound, and IoT Project Kits](../../chapters/20-sensor-sound-iot-kits/index.md) -- the chapter this MicroSim supports.
- [Sound Threshold Detector](../sound-threshold-detector/index.md) -- the same problem with only a loudness number to work from.
- [Sensor Type Picker](../sensor-type-picker/index.md) -- when a sound sensor is the right choice.
- [Spectrum analyzer](https://en.wikipedia.org/wiki/Spectrum_analyzer) -- the instrument this display is a simple version of.
- [Fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) -- how a signal gets turned into these bars.
