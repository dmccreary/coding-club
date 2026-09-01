---
title: Peripheral and Storage Management Layers
description: Given a specific accessory or storage question, the learner classifies which of the five peripheral-management categories addresses it.
status: scaffold
library: Interactive Infographic Overlay Guide (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Peripheral and Storage Management Layers



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** peripheral-management-layers<br/>
**Library:** Interactive Infographic Overlay Guide (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor see all five categories of peripheral and storage management stacked in one place, from the umbrella inventory practice down to the two storage options, and quickly find which category to check for a specific accessory question.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a specific accessory or storage question, the learner classifies which of the five peripheral-management categories addresses it.

Image style: Flat stacked-band poster, five full-width horizontal bands from top to bottom, each with a bold printed band label baked into the image since grid overlays hide chip labels by default

Image dimensions: 1000x800 (portrait, to accommodate five stacked bands)

Zones (5 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-4 bullet facts), ordered top to bottom from umbrella practice to specific accessory types:
1. `peripheral-device-management` -- color #4A90D9 -- boundaries approximately x1:3,y1:4,x2:97,y2:20 -- Summary: "The umbrella practice: tracking accessories by bin count, not individual ID." Facts: applies Chapter 22's inventory and labeling principles at bin scale; one spreadsheet row per bin rather than per item; covers headphones, mice, keyboards, and storage drives together
2. `headphone-management` -- color #50C878 -- boundaries approximately x1:3,y1:22,x2:97,y2:38 -- Summary: "Shared headphones, sanitized between students." Facts: extends Chapter 22's device cleaning routine to an accessory touching a different student's ears each session; disposable or wipeable ear-cushion covers swapped between uses; stored in a labeled bin
3. `mouse-keyboard-setup` -- color #F5A623 -- boundaries approximately x1:3,y1:40,x2:97,y2:56 -- Summary: "External input devices for projects where the built-in keyboard is awkward." Facts: used when a laptop sits next to a breadboard or robot kit; a project-specific setup step, not a default; connected only when the activity calls for it
4. `external-storage-device` -- color #E85D75 -- boundaries approximately x1:3,y1:58,x2:97,y2:74 -- Summary: "USB drives for moving files to hardware that doesn't read the cloud." Facts: needed for robot-kit firmware-flashing tools that expect a local file; especially useful on Chromebooks with limited local storage; labeled the same way laptops are
5. `cloud-storage-for-devices` -- color #9B6BC7 -- boundaries approximately x1:3,y1:76,x2:97,y2:96 -- Summary: "A shared cloud drive so files survive a shared-account reset." Facts: the default save location on shared device accounts; work follows the student to any laptop, not just one machine; distinct from a local external drive, which is for hardware that can't reach the cloud at all

showLabels: false (band titles are printed in the generated image)

Interactive features: Click or hover any band to highlight its hover zone and reveal its full fact list in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the five rectangular hover zones over the generated poster image; `data.json` holds the 5 zones per the overlay-grid-data-json-schema.
```

## Related Resources

- [Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md)
