---
title: PIR Detection Zone Map
description: Given a PIR sensor's detection zones and a person's walking path, the learner explains why crossing zone boundaries triggers detection while standing still within one zone does not.
status: scaffold
library: Interactive Infographic Overlay (diagram.js, top-down room view + clickable zones)
bloom_level: Understand (L2)
---

# PIR Detection Zone Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: infographic
**sim-id:** pir-detection-zone-map<br/>
**Library:** Interactive Infographic Overlay (diagram.js, top-down room view + clickable zones)<br/>
**Status:** Specified

Purpose: Let a learner see the fan-shaped detection zones a PIR sensor's Fresnel lens creates, and identify where a walking path will and will not trigger a reading.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a PIR sensor's detection zones and a person's walking path, the learner explains why crossing zone boundaries triggers detection while standing still within one zone does not.

Image style: Top-down illustrated floor plan showing a PIR sensor mounted on a wall, its field of view divided into 5 narrow fan-shaped zones extending into the room

Image dimensions: 900x600 (landscape)

Zones (5 detection fans, each clickable, plus 2 walking-path overlays): each fan zone shows a color gradient from near (closer to sensor) to far; two path overlays — "Path A: crosses zones" (triggers repeatedly) and "Path B: stands still in one zone" (never triggers after the initial crossing)

Interactive features: Click any zone to highlight it and show its approximate distance range; toggle between Path A and Path B to animate a walking dot and see a live "Motion Detected" / "No Change" indicator update as it moves

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` renders the zone fans and two selectable animated path overlays with a live detection-state readout
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
