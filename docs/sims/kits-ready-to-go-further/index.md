---
title: Kits Ready to Go Further
description: Given a signal-processing kit or a smartwatch display kit running, the learner identifies what it does and what a mentor would see, without explaining the underlying transform.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Remember (L1)
---

# Kits Ready to Go Further



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 21: Managing Your Kit Inventory and Signal Processing Kits](../../chapters/21-kit-inventory-signal-processing/index.md)
