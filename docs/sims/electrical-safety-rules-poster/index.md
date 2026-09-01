---
title: Electrical Safety Rules Poster
description: Given a hands-on session about to begin, the learner identifies which safety rule applies to the materials on the table.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, four-panel comparison poster + rectangular hover zones)
bloom_level: Remember (L1)
---

# Electrical Safety Rules Poster



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** electrical-safety-rules-poster<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, four-panel comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Give a mentor a single, memorable checklist poster to display or hand out at the start of every hands-on session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a hands-on session about to begin, the learner identifies which safety rule applies to the materials on the table.

Image style: Flat poster, four panels in a 2x2 grid, each with a bold printed panel header baked into the image ("Circuits," "Batteries," "Static," "Soldering")

Image dimensions: 1000x800 (landscape)

Zones (4 panels, each with id, label, color, one-line summary, 3 bullet rules):
1. `circuits` — color #4A90D9 — "Build the circuit before you power it." Rules: never bridge the two battery terminals with a bare wire; check LED polarity before connecting power; disconnect power before changing any wire
2. `batteries` — color #F5A623 — "Treat batteries as small chemical devices, not toys." Rules: never puncture, crush, or short a battery pack; stop using a swollen or hot pack immediately; store loose batteries so terminals cannot touch metal
3. `static` — color #7ED6A5 — "Ground yourself before you touch a board." Rules: touch a grounded metal object before handling a microcontroller; avoid handling boards on carpet in dry weather; keep boards in anti-static bags when not in use
4. `soldering` — color #E67E22 — "The iron is always hot until proven otherwise." Rules: the iron only ever rests in its stand; never touch the tip or the joint right after soldering; work in a ventilated area

Interactive features: Click or hover any panel to enlarge it and reveal its full rule list in a detail overlay; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) — `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
