---
title: USB-A vs USB-C Connector Comparison
description: Given a USB-A and a USB-C connector drawn side by side, the learner differentiates the two by shape, orientation, and typical power/data capability.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# USB-A vs USB-C Connector Comparison



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md).

```text
Type: infographic
**sim-id:** usb-connector-comparison<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner compare the two connector shapes side by side and click each labeled feature to see why it matters for a club's day-to-day cable choices.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a USB-A and a USB-C connector drawn side by side, the learner differentiates the two by shape, orientation, and typical power/data capability.

Visual elements: Two large scale drawings side by side — a rectangular USB-A plug on the left, an oval USB-C plug on the right — each with 3 labeled callout points (shape/orientation, typical host device, typical power delivery).

Interactive controls: Click any callout point on either connector to open an infobox with that feature's explanation; a "Flip It" button under each drawing that visually rotates the plug 180 degrees to show whether it still fits.

Default parameters: Both connectors shown unselected, right-side up.

Behavior: Clicking a callout (e.g., "Reversible") opens an infobox pulling its definition from the chapter glossary; clicking "Flip It" animates the rotation and displays a green checkmark (USB-C, always fits) or a red X (USB-A, only fits one way).

Implementation notes: p5.js canvas with two vector-drawn connector shapes; click-region detection for callouts; a simple rotation animation triggered by the Flip It buttons; canvas resizes responsively to container width.
```

## Related Resources

- [Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md)
