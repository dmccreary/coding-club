---
title: "PIR Detection Zone Map"
description: "Why a PIR sensor sees someone walking across a room and misses someone standing still in front of it."
image: sims/pir-detection-zone-map/pir-detection-zone-map.png
status: built
library: Infographic overlay (diagram.js)
bloom_level: Understand (L2)
---

# PIR Detection Zone Map

<iframe src="main.html" width="100%" height="606" scrolling="no"></iframe>

[Run the PIR Detection Zone Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A PIR sensor does not see people. It sees *changes* in infrared, and the way
it turns that into motion detection is worth understanding, because it explains
every odd thing the part does.

The white plastic lens on the front is not a cover — it is a **Fresnel lens**
that carves the sensor's field of view into a fan of separate wedges, with thin
gaps of nothing between them. Inside there are two sensing elements. When a
warm body crosses from one wedge into the next, the two elements see the change
at slightly different moments, and *that difference* is what the sensor reports
as motion.

That gives the two behaviours the diagram is built around:

**Path A crosses the wedges** and triggers repeatedly. It is moving *across*
the fan, so it keeps crossing boundaries.

**Path B stays inside one wedge** and triggers once at most. A person can move
quite a lot — pacing, waving, working at a desk — and never cross a boundary,
so the sensor decides the room is empty.

The practical consequences follow directly. A PIR aimed down a corridor, so
people walk *toward* it, works badly. Aimed across a doorway, so people cross
it, works well. And a PIR is a poor choice for "is anyone in this room?" —
someone reading quietly is invisible to it.

The wedges also fan out with distance, which is why the far zones are drawn
faint and wide: at range, a person can be entirely inside one wedge, and the
sensor's effective sensitivity drops even though its stated range has not.

## How to Use

- **Hover markers 2 and 3** for the near and far ends of a wedge, and note how
  much wider the far end is.
- **Hover marker 4** — the gaps between wedges are the whole mechanism, not a
  drawing artefact.
- Compare **path A** (marker 5) and **path B** (marker 6). One crosses
  boundaries repeatedly; the other never leaves a single wedge.
- Switch to **Quiz** to be asked instead of told.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a PIR sensor's detection zones and a person's
walking path, the learner explains why crossing zone boundaries triggers
detection while standing still within one zone does not.

**Before (5 min).** Ask why supermarket door sensors sometimes ignore you when
you approach slowly and straight on. Most people have experienced it and never
asked why.

**With the diagram (10 min).** Trace both paths. Then ask the design question:
where would you mount this sensor to catch somebody entering a room?

**After (20 min).** Wire a real PIR and test both paths in the club room. The
stand-still test is the convincing one — waving at a sensor from inside a
single wedge and getting nothing is memorable in a way a diagram is not.

**Check for understanding.** Ask: "Your PIR misses people who walk straight
toward it. Nothing is broken. What do you change?" Aim it across the path
instead of along it, so people cross the wedges rather than travelling down
one.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/pir-detection-zone-map/main.html" width="100%" height="606" scrolling="no"></iframe>
```

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

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Sensor Type Picker](../sensor-type-picker/index.md) -- when a PIR is the right sensor and when a distance sensor is.
- [Collision Avoidance Control Loop](../collision-avoidance-control-loop/index.md) -- a distance sensor doing what a PIR cannot.
- [Passive infrared sensor](https://en.wikipedia.org/wiki/Passive_infrared_sensor) -- the two-element design and its differential signal.
- [Fresnel lens](https://en.wikipedia.org/wiki/Fresnel_lens) -- the moulded plastic that creates the wedges.
