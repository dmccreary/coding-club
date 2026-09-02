---
title: USB Connector Comparison
description: Two plug shapes, six callouts, and a flip control that shows exactly why one of them fits either way up.
image: sims/usb-connector-comparison/usb-connector-comparison.png
status: built
library: p5.js
bloom_level: Analyze (L4)
---

# USB Connector Comparison

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the USB Connector Comparison MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two connectors, three differences that show up on a club bench.

**Which way up.** Press **Flip the USB-A** and watch the plug turn over: the
contacts move from the bottom of the shell to the top, and now they do not line
up with the socket. The tongue inside a USB-A socket is on one side only, and
the matching gap in the plug has to face it. Flip the USB-C and nothing
changes — the shell is symmetrical and the contacts are mirrored top and
bottom, so there is no wrong way up.

That sounds like a small convenience and is not. On a bench with twenty
students plugging things in, "it's upside down" is a whole category of failure
that simply disappears with USB-C.

**Which end of the cable.** A USB-A plug is nearly always the host end — the
computer or the hub. USB-C turns up at both ends, and which one is the host is
negotiated electrically rather than fixed by the shape.

**How much power.** A plain USB-A port gives 5 V and somewhere between half an
amp and a couple of amps: fine for a Pico or a sensor board, not enough for
motors. USB-C can carry up to 5 A, and with Power Delivery can negotiate higher
voltages entirely. One caution worth passing on: a cheap USB-C cable may only
be rated for the basic 3 A and looks identical to one that is not.

## How to Use

- Press **Flip the USB-A**. Watch the gold contacts move from the bottom of the
  shell to the top — that is the asymmetry, and it is why the plug no longer
  fits.
- Press **Flip the USB-C** and compare. Nothing moves that matters.
- Click any **numbered point** on either connector for that difference in
  detail.
- **Reset** puts both plugs the right way up and clears the selection.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a USB-A and a USB-C connector drawn side by side,
the learner differentiates the two by shape, orientation, and typical
power/data capability.

**Before the sim (5 min).** Empty the club's cable box onto a table and ask
people to sort it. The sorting criteria they invent are usually about the
shape, which is the right instinct.

**With the sim (10 min).** Run both flips. Then go back to the cable pile and
have people predict, for each cable, which end goes into the laptop.

**After the sim (15 min).** Make the purchasing decision as a group: what does
the club buy next, and why? "USB-C because nobody can plug it in wrong" is a
real argument with a real time cost attached to the alternative.

**Check for understanding.** Ask: "Why can't you charge a laptop from a USB-A
port?" Not enough power — 5 V at a couple of amps is around 10 watts against
the 60 watts a laptop wants, which is what Power Delivery over USB-C exists to
supply.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/usb-connector-comparison/main.html" width="100%" height="542" scrolling="no"></iframe>
```

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

## References

- [Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md) -- the chapter this MicroSim supports.
- [Club Inventory Lifecycle Workflow](../club-inventory-lifecycle-workflow/index.md) -- keeping the cable box sorted once you know the difference.
- [USB hardware](https://en.wikipedia.org/wiki/USB_hardware) -- the full connector family and their pinouts.
- [USB-C](https://en.wikipedia.org/wiki/USB-C) -- the reversible connector in detail.
- [USB Power Delivery](https://en.wikipedia.org/wiki/USB_hardware#USB_Power_Delivery) -- how higher voltages get negotiated.
