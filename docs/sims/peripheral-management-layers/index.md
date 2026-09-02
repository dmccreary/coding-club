---
title: "Peripheral and Storage Management Layers"
description: "Five categories covering every accessory question a club actually gets."
image: sims/peripheral-management-layers/peripheral-management-layers.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Peripheral and Storage Management Layers

<iframe src="main.html" width="100%" height="832" scrolling="no"></iframe>

[Run the Peripheral and Storage Management Layers MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Five categories, and the top one is the umbrella that makes the rest
manageable.

**Peripheral device management** is one idea: **track accessories by bin count,
not individual ID.** A laptop gets an asset tag and a spreadsheet row. A mouse
does not — you have a bin of twelve mice and you count them. Trying to give
every cable a unique identifier is how inventory systems die, and the bin is
the unit that survives contact with a real club.

**Headphones** get their own layer because they touch a different student's
ears every session. Wipeable or disposable ear-cushion covers, swapped between
uses, stored in a labelled bin. It is the one accessory with a hygiene question
attached, and it is worth being explicit rather than hoping.

**Mice and keyboards** are a **project-specific setup step, not a default**.
They come out when a laptop is sitting next to a breadboard and the built-in
keyboard is awkward to reach — and they go back afterwards. A club that leaves
them plugged in permanently has doubled its cable management problem for no
reason.

**External storage** is for hardware that cannot reach the cloud: robot-kit
firmware flashers that expect a local file, and Chromebooks with very little
local space. Narrow, specific, and labelled like the laptops.

**Cloud storage** is the default save location on shared device accounts, and
the reason is a specific failure: shared accounts get reset, and anything saved
locally goes with them. Cloud storage means work follows the student to any
laptop instead of living on one machine.

The distinction between the last two is worth stating plainly: **cloud is the
default; the USB drive is the exception for hardware that cannot use it.**

## How to Use

- **Click each layer** for the accessory questions it answers.
- Start at the top. Bin-count tracking is the practice the other four sit
  inside.
- Note the mouse and keyboard layer: it is a *setup step*, which is a different
  thing from a permanent arrangement.
- Try **Quiz Me** to practise matching a question to a layer.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a specific accessory or storage question, the
learner classifies which of the five peripheral-management categories addresses
it.

**Before (5 min).** Ask how many mice the club owns. If nobody knows, that is
the bin-count layer explaining why it exists.

**With the poster (10 min).** Read all five. The cloud-versus-USB distinction
is the one worth being precise about, because getting it backwards means
students losing work to an account reset.

**After (30 min).** Count the bins and write one spreadsheet row per bin. It is
the whole of layer one and it takes half an hour.

**Check for understanding.** Ask: "A student's project vanished after the
shared account was reset. Which layer would have prevented it?" Cloud storage
as the default save location — a USB drive would have worked too, but only if
somebody remembered, and defaults beat memory.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/peripheral-management-layers/main.html" width="100%" height="832" scrolling="no"></iframe>
```

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

## References

- [Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md) -- the chapter this MicroSim supports.
- [Layers of Youth Digital Safety](../youth-safety-layers/index.md) -- the security layers on the same shared accounts.
- [Club Inventory Lifecycle Workflow](../club-inventory-lifecycle-workflow/index.md) -- where bin counts fit in the wider inventory.
- [USB Connector Comparison](../usb-connector-comparison/index.md) -- sorting the cable box that goes with all this.
- [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking) -- and why per-item IDs are the wrong granularity for consumables.
