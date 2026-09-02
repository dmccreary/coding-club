---
title: "Session Room Safety and Logistics Map"
description: "Eight things every session room needs, and where each one goes."
image: sims/session-room-safety-map/session-room-safety-map.png
status: built
library: Infographic overlay (diagram.js)
bloom_level: Remember (L1)
---

# Session Room Safety and Logistics Map

<iframe src="main.html" width="100%" height="650" scrolling="no"></iframe>

[Run the Session Room Safety and Logistics Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Eight features, and the reason to learn them as a *map* rather than a
checklist is that their positions relate to each other.

**The four that are about getting out or getting help** — emergency exit, first
aid kit, accessible pathway, restroom — should be findable by somebody who has
never been in the room. Not findable by you, who set it up. That is a
different and higher bar, and it is why the accessible pathway is drawn as an
unobstructed strip rather than as a route you could pick your way along.

**The two that are about the work** — charging station and whiteboard — sit
where they do for traffic reasons. The charging station is against a wall
beside an outlet so nobody trails a cable across the floor. The whiteboard is
high on a wall everyone faces.

**The safety zone is the one that has to be a place, not a rule.** Soldering
and hot tools get a floor area marked with hazard tape, because "be careful
with the iron" is advice and a taped rectangle is a boundary. A student can see
whether they are inside it.

**The snack and water table earns its spot** by being away from the
electronics. Liquid near a breadboard is a predictable problem, and the fix is
geometric rather than behavioural.

A setup habit worth adopting: locate the exit and the first aid kit *first*,
before any kit comes out. They take ten seconds and they are the two you will
not have time to look for.

## How to Use

- **Hover each of the eight markers** for what it is and why it sits there.
- Trace the accessible pathway (marker 5) from the doorway to the table. It has
  to stay clear once the room fills up, which is a setup decision, not a
  during-session one.
- Note what the safety zone (marker 3) is: an area, marked on the floor, not an
  instruction.
- Switch to **Quiz** to be asked instead of told.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given an unlabeled session-room illustration, the
learner identifies the location and purpose of each safety and logistics
feature.

**Before (5 min).** Ask a mentor who has run sessions where the first aid kit
is. The pause is common and it is the reason for this map.

**With the map (10 min).** Name all eight, then re-run it as a question about
relationships: why is the snack table away from the electronics? Why is the
charging station against a wall?

**After (10 min).** Do the same walk in the real room and write down which of
the eight are missing or in the wrong place. Most rooms are missing at least
one, and knowing which is more useful than a room that scores full marks on
paper.

**Check for understanding.** Ask: "A new mentor arrives ten minutes before the
session. What are the first two things you point at?" The emergency exit and
the first aid kit — before the kit cupboard, before the whiteboard, before
anything about the activity.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/session-room-safety-map/main.html" width="100%" height="650" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 8: "Running a Session: Room Layout to Cleanup"](../../chapters/08-running-a-session/index.md).

```text
Type: infographic-overlay (callout)
**sim-id:** session-room-safety-map<br/>
**Library:** Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)<br/>
**Status:** Specified

Purpose: Give a new mentor a single labeled illustration showing exactly where each safety and logistics feature lives in a typical session room, so the answer to "where's the first aid kit" is a glance at this diagram, not a guess.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given an unlabeled session-room illustration, the learner identifies the location and purpose of each safety and logistics feature.

Image style: Flat, friendly illustration, top-down or angled-overhead view of a coding club session room, no text/labels/numbers baked into the image (annotation-free per the overlay engine's requirement)

Image dimensions: 1200x900 (landscape 4:3)

Layout: side-panel (image left 65%, labels right 35%)

Structures to label (callouts, 8 total, each with name, 1-2 sentence description, approximate position, marker color):
1. "Charging Station" -- wall outlet with laptops charging, near entrance, color #4A90D9 (blue) -- "Devices charge here between sessions, away from the active workspace."
2. "Whiteboard" -- mounted on a side wall, visible from the center table, color #4A90D9 -- "Shows the day's agenda and the challenge card's key steps."
3. "Safety Zone (Soldering/Hot Tools)" -- taped-off corner area, color #E74C3C (red) -- "Marked boundary around any station using heat or sharp tools."
4. "Emergency Exit" -- door with visible exit signage, color #E74C3C -- "Every mentor should know this route before students arrive."
5. "First Aid Kit" -- small wall-mounted box near the entrance, color #F39C12 (gold) -- "Stocked with bandages and cold packs; location fixed and known to every mentor."
6. "Accessible Pathway" -- a wide, unobstructed path from the entrance to the center table, color #2ECC71 (green) -- "Kept clear for wheelchair or mobility-aid access."
7. "Restroom" -- door labeled generically, color #3498DB -- "Students may use it whenever needed, per the restroom break policy."
8. "Snack and Water Table" -- small side table with cups and a snack bin, color #1ABC9C (teal) -- "Location for the club's snack and water policy; kept separate from electronics."

Interactive features: Explore mode (hover/click each numbered marker to reveal its description in the side panel); Quiz mode (learner is prompted to click the correct marker for a named feature); Edit mode (`?edit=true`) for calibrating marker positions after the image is generated

Implementation: Interactive Infographic Overlay Guide (callout engine) -- `diagram.js` + `style.css` render numbered markers and leader lines over the generated image; `data.json` holds the 8 callouts with x/y percentage positions
```

## References

- [Chapter 8: "Running a Session: Room Layout to Cleanup"](../../chapters/08-running-a-session/index.md) -- the chapter this MicroSim supports.
- [Coding Club Room Layout](../coding-club-room-layout/index.md) -- the furniture plan this safety map overlays.
- [Static Electricity Precaution Checklist](../static-electricity-precaution-checklist/index.md) -- what the tables in this room are made of, and why it matters.
- [Electrical Safety Rules Poster](../electrical-safety-rules-poster/index.md) -- what happens inside the taped safety zone.
- [Emergency exit](https://en.wikipedia.org/wiki/Emergency_exit) -- signage conventions and why they are standardised.
