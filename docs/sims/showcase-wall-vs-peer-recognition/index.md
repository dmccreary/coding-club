---
title: Showcase Wall vs Peer Recognition Activity
description: Given a description of a club's recognition goal, the learner recommends whether a student showcase wall or a peer recognition activity fits it better.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Evaluate (L5)
---

# Showcase Wall vs Peer Recognition Activity



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 27: Encouraging Persistence and Student Voice](../../chapters/27-persistence-and-student-voice/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** showcase-wall-vs-peer-recognition<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor decide which recognition format fits a given goal -- giving a finished project a longer public life, or giving students frequent recognition from each other -- reinforcing the audience/frequency table above with concrete examples of each.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: recommend

Learning objective: Given a description of a club's recognition goal, the learner recommends whether a student showcase wall or a peer recognition activity fits it better.

Image style: Flat comparison poster, two vertical columns, each with a bold printed column header baked into the image ("Student Showcase Wall," "Peer Recognition Activity")

Image dimensions: 1000x800 (landscape)

Zones (2 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `showcase-wall-zone` -- color #4A90D9 -- boundaries approximately x1:4,y1:10,x2:47,y2:92 -- Summary: "A standing display of finished work." Facts: bulletin board, photo album, or webpage; updated whenever a project finishes; visible to parents and visitors, not just club members; gives a student's work a life beyond the session it was built in; pairs each project with the student's name and a one-sentence description
2. `peer-recognition-zone` -- color #2ECC71 -- boundaries approximately x1:53,y1:10,x2:96,y2:92 -- Summary: "Student-to-student recognition, every session." Facts: a shout-out circle or kudos card at the end of a session; recognition comes from peers, not a mentor; happens frequently, in minutes rather than as a standing display; lands differently because it comes from someone facing the same challenges; costs almost nothing to run every week

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover either column to highlight its zone and reveal its full fact list in a detail panel; a "Pick the Format" quiz mode describes a club scenario (such as "a parent asks what their child has been building all semester") and asks the learner to click the recommended column before revealing the suggested answer and rationale

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the two rectangular hover zones over the generated poster image; `data.json` holds the 2 zones plus a bank of quiz-mode scenarios per the overlay-grid-data-json-schema
```

## Related Resources

- [Chapter 27: Encouraging Persistence and Student Voice](../../chapters/27-persistence-and-student-voice/index.md)
