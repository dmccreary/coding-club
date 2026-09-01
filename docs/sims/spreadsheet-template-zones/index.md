---
title: Spreadsheet Template Zones
description: Given a column from a tracking spreadsheet, the learner classifies which template zone it belongs to and why.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Spreadsheet Template Zones



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: infographic
**sim-id:** spreadsheet-template-zones<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Show the three functional zones of a well-designed tracking spreadsheet template, so a new mentor can recognize why the columns are grouped the way they are.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a column from a tracking spreadsheet, the learner classifies which template zone it belongs to and why.

Image style: Flat mock-spreadsheet poster showing a header row and a few sample rows, with three vertical column-block zones outlined

Image dimensions: 1000x500 (landscape, to resemble an actual spreadsheet)

Zones (3 vertical column blocks, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3 bullet facts):

1. `identity-columns` -- color #4A90D9 -- boundaries approximately x1:3,y1:5,x2:30,y2:95 -- Summary: "Who the row is about." Facts: name (or initials) and join date; never reordered once set; the only columns a substitute mentor needs to find a specific student
2. `badge-columns` -- color #50C878 -- boundaries approximately x1:32,y1:5,x2:75,y2:95 -- Summary: "What has been mastered, and when." Facts: one column per badge or skill, in the order they're typically earned; each cell holds a completion date, not just a checkmark; grouped together so progress is scannable left to right
3. `notes-column` -- color #F5A623 -- boundaries approximately x1:77,y1:5,x2:97,y2:95 -- Summary: "Anything that doesn't fit a fixed column." Facts: free-text field for context a mentor wants the next mentor to see; kept to short, factual notes, not a substitute for the parent communication log; always the rightmost column so it never disrupts the badge block

showLabels: false (zone titles are printed in the generated image)

Interactive features: Click or hover any zone to highlight it and reveal its full fact list in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
