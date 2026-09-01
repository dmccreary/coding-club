---
title: Email List Segments
description: Given a sample contact, the learner differentiates which segment or segments that contact belongs to.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Email List Segments



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: diagram
**sim-id:** email-list-segments-venn<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show how a club's four common email segments overlap, so a mentor can see why one contact might belong to more than one group.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a sample contact, the learner differentiates which segment or segments that contact belongs to.

Visual style: Four overlapping circles (a Venn-style diagram): Active Families, Mentors, Waitlist, Alumni

Overlaps of interest:
- Active Families and Mentors overlap (a parent who also mentors)
- Waitlist does not overlap with Active Families (a contact is in exactly one of the two)
- Alumni overlaps only slightly with Mentors (a former family member who stayed on as a mentor)

Interactive controls:
- Click any region (including an overlap region) to see which segment(s) it represents and a sample message type sent to it
- Button: "Highlight Overlaps" -- flashes the two overlapping regions to draw attention to them

Default parameters: All four circles visible at load; no region pre-selected

Implementation notes: p5.js canvas drawing four semi-transparent circles positioned so the two intended overlaps are visible; a lookup table maps each region (including overlaps) to its label and example message, checked against mouse position on click.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
