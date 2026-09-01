---
title: Club Growth Path
description: Given a club's current size and stability, the learner identifies which growth stage it occupies and what condition must be met before advancing to the next stage.
status: scaffold
library: vis-timeline
bloom_level: Understand (L2)
---

# Club Growth Path



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Growing, Branding, and Promoting Your Club](../../chapters/06-growing-and-promoting-club/index.md).

```text
Type: timeline
**sim-id:** club-growth-path<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Purpose: Show the typical progression from a single-site club to scaling, to multi-site expansion, to an optional franchise model, so a founder can see where their club currently sits and what the next stage would actually require.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a club's current size and stability, the learner identifies which growth stage it occupies and what condition must be met before advancing to the next stage.

Time period: Represented as club-age stages rather than calendar dates -- "Founding Year," "Year 1-2," "Year 2-3," "Year 3+"

Orientation: Horizontal

Stages (each a clickable event on the timeline):
- Founding Year: "Single Site, Starting Small" -- click reveals "First three students through a pilot cohort, per Chapter 5. No growth decision needed yet."
- Year 1-2: "Scaling a Club" -- click reveals "More students, more sessions, more mentors -- all at the same single site. Requires a stable mentor pipeline via the Volunteer Coordinator Role (Chapter 4)."
- Year 2-3: "Multi-Site Expansion (Optional)" -- click reveals "A second venue, run by a trained assistant leader. Requires the original site to have survived a leadership transition already."
- Year 3+: "Franchise Model (Rare, Optional)" -- click reveals "An independently run club elsewhere, using this club's charter and curriculum as a starting template."

Interactive features:
- Click any stage to reveal its detail text in a panel below the timeline
- A "You Are Here" marker the reader can drag to any stage to bookmark their own club's current position (stored only for the duration of the page visit)

Visual style: Horizontal timeline with connecting arrows showing the typical (not mandatory) progression order

Color coding: Green for the founding stage, blue for scaling, amber for multi-site, gray for franchise (signaling it is optional and rare)

Implementation: vis-timeline library with custom click handlers for the detail panel
```

## Related Resources

- [Chapter 6: Growing, Branding, and Promoting Your Club](../../chapters/06-growing-and-promoting-club/index.md)
