---
title: Three Curriculum Tracks
description: Given a student's current skills, the learner classifies which curriculum track best fits them.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Three Curriculum Tracks



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios](../../chapters/15-curriculum-challenge-cards/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** three-curriculum-tracks<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor quickly see what a student at each track level is typically working on, so a new mentor can place a student in the right track within their first session or two.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a student's current skills, the learner classifies which curriculum track best fits them.

Image style: Flat comparison poster, three vertical columns, each with a bold printed column header baked into the image ("Beginner Track," "Intermediate Track," "Advanced Track")

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `beginner-track` -- color #2E7D32 -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "Keyboarding and first Scratch projects." Facts: typing practice tool sessions; first Scratch sprite and block-coding projects; heavy use of unplugged coding activities to build vocabulary before screens; success measured by finishing and sharing one complete project
2. `intermediate-track` -- color #1565C0 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "The block-to-text transition and core Python." Facts: block-based to text transition begins; Python variables, loops, and conditionals introduced one at a time; turtle graphics challenges provide visual verification; peer code review starts here as students have enough code to review
3. `advanced-track` -- color #000000 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "Multi-concept projects and mentoring others." Facts: combines functions, loops, and conditionals into a single project like a simple game; pair programming and live coding demonstrations become regular practice; students often begin serving as peer mentors (Chapter 9) themselves; strongest fit for professional mentor involvement

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema
```

## Related Resources

- [Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios](../../chapters/15-curriculum-challenge-cards/index.md)
