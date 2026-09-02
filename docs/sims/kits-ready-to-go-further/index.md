---
title: Kits Ready to Go Further
description: Two step-up kits, what each one does, and what a mentor would actually see running.
image: sims/kits-ready-to-go-further/kits-ready-to-go-further.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Remember (L1)
---

# Kits Ready to Go Further

<iframe src="main.html" width="100%" height="660" scrolling="no"></iframe>

[Run the Kits Ready to Go Further MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two kits for students who have finished what the standard set offers, and the
point of the panel is that **you can run either one without being able to
explain the theory underneath.**

**The signal processing kit** turns live sound into a moving frequency display,
many times a second. It builds directly on the microphone and sound spectrum
kits, and the transform doing the work is a Fast Fourier Transform — which is
worth *naming* and not worth explaining to a twelve-year-old. What a mentor
needs to know is what it looks like when it is working: bars that move with
sound, low frequencies on one side, high on the other. A student who whistles
and watches the peak move has understood the useful part.

**The smartwatch and wearable display kit** is the same display idea moved onto
hardware that gets worn, and the two constraints that changes are worth calling
out because they are new to students:

**Battery draw suddenly matters.** A stationary kit runs off USB and nobody
thinks about power. A wearable runs a few hours or a few days depending on
choices the student makes, and that is a genuinely different design problem.

**Connections must survive movement.** A breadboard is fine on a desk and
useless on a wrist. Soldered or properly connectorised joints stop being
fussiness and start being the difference between a project that works and one
that works while you hold it still.

Both kits are step-ups rather than replacements — they assume the Chapter 20
kits have already been built.

## How to Use

- **Click each kit** for what it does and which earlier kit it extends.
- Note what the description does *not* do: explain the transform. That is
  deliberate.
- Try **Quiz Me** to check you can say what a mentor would see running.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given a signal-processing kit or a smartwatch display
kit running, the learner identifies what it does and what a mentor would see,
without explaining the underlying transform.

**Before (5 min).** Ask whether a mentor needs to understand Fourier analysis
to run a spectrum kit. The answer is no, and saying so out loud removes the
main reason mentors avoid these kits.

**With the poster (10 min).** Read both. Then practise the sentence you would
say to a student: "it splits the sound into pitches and draws how loud each one
is" is enough and it is true.

**After (a session).** Run the signal processing kit and have students whistle
at it. The moving peak is the demonstration; no explanation needed.

**Check for understanding.** Ask: "What is the first thing that goes wrong when
you move a working breadboard project onto a wrist?" The connections — a
breadboard depends on friction and staying still, and neither survives being
worn.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/kits-ready-to-go-further/main.html" width="100%" height="660" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 21: Managing Your Kit Inventory and Signal Processing Kits](../../chapters/21-kit-inventory-signal-processing/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** kits-ready-to-go-further<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor compare a signal-processing kit and a smartwatch/wearable display kit side by side, so "what does this kit actually do" gets a one-glance answer without any signal-processing math.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a signal-processing kit or a smartwatch display kit running, the learner identifies what it does and what a mentor would see, without explaining the underlying transform.

Image style: Flat comparison poster, two vertical columns, each with a bold printed column header baked into the image ("Signal Processing Kit," "Smartwatch / Wearable Display Kit") since grid overlays hide chip labels by default

Image dimensions: 1200x700 (landscape)

Zones (2 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `signal-processing-kit` -- color #4A90D9 -- boundaries approximately x1:3,y1:10,x2:48,y2:92 -- Summary: "Turns raw sound into a live, moving frequency display -- no math required to run it." Facts: builds on the microphone and sound spectrum kits from Chapter 20; updates its display many times per second (real-time audio processing); uses a technique called the Fast Fourier Transform (FFT) behind the scenes; the math itself is covered in the companion Signal Processing on a $5 MicroController textbook, not here
2. `smartwatch-display-kit` -- color #F5A623 -- boundaries approximately x1:52,y1:10,x2:97,y2:92 -- Summary: "A display kit built to be worn, not set on a desk." Facts: extends the Chapter 20 display kit idea onto wrist-wearable hardware; battery power draw matters far more than on a stationary kit; connections must survive real movement, not just sit on a breadboard; the companion Clocks and Watches textbook covers an extensive set of wearable projects

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover either column to highlight its hover zone and reveal its full fact list in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the two rectangular hover zones over the generated poster image; `data.json` holds the 2 zones per the overlay-grid-data-json-schema.
```

## References

- [Chapter 21: Managing Your Kit Inventory and Signal Processing Kits](../../chapters/21-kit-inventory-signal-processing/index.md) -- the chapter this MicroSim supports.
- [Frequency Spectrum Display Explorer](../frequency-spectrum-display-explorer/index.md) -- reading the display the first kit produces.
- [Gyroscope Orientation Data Explorer](../gyroscope-orientation-data-explorer/index.md) -- another sensor a wearable would carry.
- [OLED Coordinate System](../oled-coordinate-system/index.md) -- drawing on the display these kits use.
- [Fast Fourier transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) -- for the mentor who does want to know.
- [Wearable computer](https://en.wikipedia.org/wiki/Wearable_computer) -- the constraints the second kit introduces.
