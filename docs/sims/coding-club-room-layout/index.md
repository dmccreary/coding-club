---
title: Coding Club Room Layout
description: Given a blank room outline, the learner identifies where each layout element belongs and explains why its placement supports mentor supervision or safety.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Coding Club Room Layout



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Telling Your Club's Story and Designing the Classroom](../../chapters/07-club-story-and-classroom-design/index.md).

```text
Type: infographic
**sim-id:** coding-club-room-layout<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show a complete, well-designed coding club floor plan as one interactive diagram, so a founder can see how monitor orientation, the center table, seating, and storage all relate spatially rather than reading about each in isolation.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply

Learning objective: Given a blank room outline, the learner identifies where each layout element belongs and explains why its placement supports mentor supervision or safety.

Canvas layout:
- Full canvas (600x450): top-down floor plan view of a rectangular classroom
- Right side control panel (150px): toggle buttons for each layout element listed below

Visual elements (each independently clickable for an infobox):
- 8 small rectangles around the room's perimeter, screens all facing inward toward the room's center ("Monitors Facing Inward")
- 1 larger table at the room's center, distinct color, with small icon cards on it ("Center Table Design" and "Challenge Card Display")
- 4 clusters of 3-4 chairs each, positioned near the perimeter monitors but angled toward each other and toward the center table ("Seating Arrangement")
- Power strips shown as small icons along the perimeter wall beneath each monitor cluster, with a dashed line showing a cable route along the wall baseboard rather than crossing open floor ("Power Strip Placement" and "Cable Management")
- A storage shelf icon near the room's entrance ("Storage For Kits")

Interactive features:
- Click any element (a monitor, the center table, a seating cluster, a power strip icon, the storage shelf) to open an infobox with its one-sentence definition and one sentence on why it's placed there
- Toggle button: "Show Cable Routes" highlights all cable paths in red, making it easy to see whether any cable crosses open floor space
- Toggle button: "Show Sightlines" draws faint lines from a draggable "mentor" icon to every monitor, demonstrating that a mentor positioned near the center table can see every screen at once

Default state: All elements visible, no toggle active, mentor icon positioned at the center table

Legend: Small corner key mapping each icon to its layout element name

Canvas size: Responsive width, fixed 3:2 aspect ratio maintained on resize, minimum 320px width before the control panel stacks below the canvas

Implementation: p5.js for the floor plan rendering and click detection; infobox is an absolutely-positioned div updated on click
```

## Related Resources

- [Chapter 7: Telling Your Club's Story and Designing the Classroom](../../chapters/07-club-story-and-classroom-design/index.md)
