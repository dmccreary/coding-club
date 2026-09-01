---
title: Four Coding Club Scheduling Models
description: Given a club's venue, mentor availability, and target audience, the learner recommends the scheduling model that best fits.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Evaluate (L5)
---

# Four Coding Club Scheduling Models



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Choosing a Schedule and Building Registration](../../chapters/11-schedule-and-registration/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** four-scheduling-models<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a founder compare the four dominant scheduling models on the same dimensions before committing, since the right choice depends heavily on venue, mentor, and family constraints that are easy to evaluate one at a time but hard to compare side by side from memory.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: recommend

Learning objective: Given a club's venue, mentor availability, and target audience, the learner recommends the scheduling model that best fits.

Image style: Flat comparison poster, four vertical columns, each with a bold printed column header baked into the image ("Alternating Saturday," "Weekday After-School," "Semester-Based," "Drop-In")

Image dimensions: 1400x800 (landscape)

Zones (4 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-6 bullet facts):
1. `alternating-saturday` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:25,y2:92 -- Summary: "Meets every other Saturday, all year." Facts: low weekly time commitment for families and mentors; works well for library and community-center venues open on weekends; the two-week gap can weaken momentum for younger students; predictable and easy to plan around long-term
2. `weekday-after-school` -- color #F5A623 -- boundaries approximately x1:27,y1:10,x2:50,y2:92 -- Summary: "Meets weekly, right after the school day." Facts: highest attendance consistency since students are already at or near the venue; competes directly with sports practices and other after-school activities; requires mentor availability during working hours, which favors retired or flexible-schedule mentors; best fit for school-based clubs (Chapter 2)
3. `semester-based` -- color #7ED6A5 -- boundaries approximately x1:52,y1:10,x2:75,y2:92 -- Summary: "Runs for a defined term, then breaks and re-enrolls." Facts: aligns naturally with school-calendar alignment; gives a clean, low-pressure exit point for families and mentors each term; requires a full onboarding process (Chapter 6) at the start of every new term; well suited to a curriculum with defined tracks (Chapter 15)
4. `drop-in` -- color #E67E22 -- boundaries approximately x1:77,y1:10,x2:98,y2:92 -- Summary: "No fixed roster -- students attend whichever sessions work for them." Facts: lowest commitment barrier for families to try the club; hardest model to plan mentor capacity for, since attendance is unpredictable session to session; poor fit for mentor pairing consistency (Chapter 10); works best for high-traffic venues like a bookstore or library with heavy walk-in foot traffic

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema
```

## Related Resources

- [Chapter 11: Choosing a Schedule and Building Registration](../../chapters/11-schedule-and-registration/index.md)
