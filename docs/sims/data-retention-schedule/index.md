---
title: Data Retention Schedule by Type
description: Given a type of club data, the learner classifies how long it is retained and what event starts the deletion clock.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Data Retention Schedule by Type



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: infographic
**sim-id:** data-retention-schedule<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor see how long each type of club data is kept and what triggers its deletion, so a retention question can be answered by glancing at one poster instead of hunting through a written policy document.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a type of club data, the learner classifies how long it is retained and what event starts the deletion clock.

Image style: Flat stacked-band poster, four full-width horizontal bands from bottom to top, each with a bold printed band label baked into the image since grid overlays hide chip labels by default

Image dimensions: 1000x700 (portrait, to accommodate four stacked bands)

Zones (4 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3 bullet facts), ordered bottom to top from longest-kept to shortest-kept:

1. `consent-forms` -- color #4A90D9 -- boundaries approximately x1:3,y1:76,x2:97,y2:96 -- Summary: "Kept as long as the data they cover is retained." Facts: signed or declined guardian consent forms; retained alongside whatever data they authorize; deleted only when the covered data is deleted
2. `progress-records` -- color #50C878 -- boundaries approximately x1:3,y1:52,x2:97,y2:74 -- Summary: "Retained eighteen months after a student leaves." Facts: badge, attendance, and skill-tracking records; clock starts the day a student stops attending; deleted automatically once the window passes
3. `contact-information` -- color #F5A623 -- boundaries approximately x1:3,y1:28,x2:97,y2:50 -- Summary: "Retained only while a family is actively enrolled." Facts: name and one contact email; removed promptly once a family is no longer active; never kept "just in case" of future re-enrollment
4. `survey-responses` -- color #9B6BC7 -- boundaries approximately x1:3,y1:4,x2:97,y2:26 -- Summary: "Kept in anonymized form only, indefinitely." Facts: individual free-text responses are summarized and the originals discarded within 90 days; anonymized summaries may be kept for year-over-year comparison; no names are ever attached to a retained summary

showLabels: false (band titles are printed in the generated image)

Interactive features: Click or hover any band to highlight its hover zone and reveal its full fact list, including the specific event that starts its deletion clock, in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
