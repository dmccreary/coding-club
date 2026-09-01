---
title: Session Room Safety and Logistics Map
description: Given an unlabeled session-room illustration, the learner identifies the location and purpose of each safety and logistics feature.
status: scaffold
library: Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)
bloom_level: Remember (L1)
---

# Session Room Safety and Logistics Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 8: "Running a Session: Room Layout to Cleanup"](../../chapters/08-running-a-session/index.md)
