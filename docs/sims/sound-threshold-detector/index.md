---
title: Sound Threshold Detector
description: Three rooms, one clap, and a threshold line you can drag until the detector works -- or stops working.
image: sims/sound-threshold-detector/sound-threshold-detector.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Sound Threshold Detector

<iframe src="main.html" width="100%" height="482" scrolling="no"></iframe>

[Run the Sound Threshold Detector MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A sound sensor does not hear a clap. It reports a level, hundreds of times a
second, and your code decides what counts as an event. All of the difficulty is
in where you put that line.

The three scenarios contain the identical clap and differ only in their
background. That is what makes the comparison fair — and what makes the problem
visible. A threshold of 0.30 works beautifully in a quiet room and fires on
every chair scrape in a noisy one. Nothing about the clap changed.

**The number that actually matters is the gap.** The clap peaks at 0.95. In the
quiet room the loudest background event reaches 0.26, leaving a gap of nearly
0.7 to place the threshold in. In the noisy room the background reaches 0.64,
leaving about 0.3. Any threshold inside the gap works; the size of the gap is
how much margin you have before a slightly louder day breaks your project.

That is the honest answer to "what threshold should I use?" — there isn't one.
There is a range, it depends on the room, and it needs re-checking on the day.

The display is a step-through rather than a live sound-reactive effect on
purpose. The objective is to explain *which* peaks cross the line and why, and
you cannot point at a peak that has already scrolled away. Every peak stays on
screen, labelled TRIGGERED or ignored.

The waveforms come from a fixed seed, so a mentor and a student running this
separately see the identical trace and can argue about the same peak.

## How to Use

- The sim opens correctly tuned: **Noisy room**, threshold 0.80, clap triggers,
  nothing else does.
- Drag the **Threshold** slider down slowly and watch background peaks start
  turning red one at a time.
- Drag it above 0.95 and the clap is missed entirely — the opposite failure.
- Switch to **Quiet room** without touching the threshold. It still works, but
  now find how far *down* you can go before it breaks.
- **Replay waveform** sweeps the trace again from the left, revealing peaks as
  the playhead reaches them.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a sound waveform and an adjustable threshold, the
learner explains how threshold placement determines which sounds register as a
trigger and which are ignored.

**Before the sim (5 min).** Ask the group what number a sound sensor returns
when it hears a clap. Most people expect something like "clap detected". Getting
to "a level, over and over" is the setup.

**With the sim (15 min).** Run the tuning task in each room, then ask for the
range of working thresholds in each. Two students who both got it right will
have picked different numbers, and that is the point.

**After the sim (20 min).** Tune a real sound sensor in the actual club room,
during an actual session, with everyone talking. It will need a higher
threshold than the quiet-room test suggested, and finding that out by
experiment is the lesson landing.

**Check for understanding.** Ask: "Your clap detector worked yesterday and
fires constantly today. Name two possible reasons." The room is louder, or the
threshold was set with no margin. Both are about the gap, not about the clap.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/sound-threshold-detector/main.html" width="100%" height="482" scrolling="no"></iframe>
```

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

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Frequency Spectrum Display Explorer](../frequency-spectrum-display-explorer/index.md) -- what a sound looks like split into frequencies rather than levels.
- [Sensor Type Picker](../sensor-type-picker/index.md) -- when a sound sensor is the right choice at all.
- [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) -- the gap between the clap and the background, named properly.
- [Schmitt trigger](https://en.wikipedia.org/wiki/Schmitt_trigger) -- the standard fix for a signal that hovers right at the threshold.
