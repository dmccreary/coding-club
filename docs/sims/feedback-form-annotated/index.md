---
title: Annotated Feedback Form
description: Given a question on a feedback form, the learner explains why that question type was chosen over the alternatives.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Annotated Feedback Form



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: infographic
**sim-id:** feedback-form-annotated<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones)<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/search-microsims/tree/main/docs/sims/feedback-loop-sim

Purpose: Show a sample post-event feedback form with three question types, so a mentor can see why each type was chosen and what it measures well.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a question on a feedback form, the learner explains why that question type was chosen over the alternatives.

Image style: Flat mock-form poster showing three stacked questions with their answer widgets

Image dimensions: 1000x600 (portrait, three stacked question zones)

Zones (3 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3 bullet facts):

1. `rating-scale-question` -- color #4A90D9 -- boundaries approximately x1:3,y1:70,x2:97,y2:96 -- Summary: "How was tonight's session? (1-5 scale)" Facts: fastest to answer and to average across many responses; best for tracking a trend over time; loses nuance a written comment would capture
2. `multiple-choice-question` -- color #50C878 -- boundaries approximately x1:3,y1:38,x2:97,y2:68 -- Summary: "Which activity did you enjoy most? (pick one)" Facts: easy to tally into a simple count per option; best when the possible answers are already known; forces a choice even if a respondent liked two activities equally
3. `short-text-question` -- color #F5A623 -- boundaries approximately x1:3,y1:4,x2:97,y2:36 -- Summary: "Anything else you'd like us to know? (optional)" Facts: captures detail the fixed question types can't anticipate; optional, so it doesn't slow down a respondent in a hurry; harder to summarize across many responses than the scale or multiple-choice questions above

showLabels: false (question labels are printed in the generated image)

Interactive features: Click or hover any question zone to highlight it and reveal its full fact list in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
