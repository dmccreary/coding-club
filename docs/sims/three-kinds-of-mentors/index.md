---
title: Three Kinds of Mentors
description: Given a recruiting scenario, the learner selects the mentor type whose strengths best fit the club's current need.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Three Kinds of Mentors



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: "Mentors, Students, and the 3:1 Ratio"](../../chapters/09-mentors-students-ratio/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** three-kinds-of-mentors<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a club leader compare volunteer, professional, and peer mentors side by side on the same dimensions, so recruiting decisions weigh real tradeoffs rather than treating "mentor" as one undifferentiated pool.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: compare

Learning objective: Given a recruiting scenario, the learner selects the mentor type whose strengths best fit the club's current need.

Image style: Flat comparison poster, three vertical columns, each with a bold printed column header baked into the image ("Volunteer Mentor," "Professional Mentor," "Peer Mentor") since grid overlays hide chip labels by default

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-6 bullet facts):
1. `volunteer-mentor` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "The backbone of most clubs -- unpaid adults who join for the mission." Facts: joins out of general interest, not necessarily a tech background; most flexible availability of the three types; typically the largest mentor pool; needs the most initial training via onboarding (Chapter 6)
2. `professional-mentor` -- color #F5A623 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "Deep technical expertise, but the least available time." Facts: brings real-world software or electronics experience; can mentor advanced students other mentors can't; volunteering competes with a demanding career; best used for occasional guest sessions or the most advanced track (Chapter 15)
3. `peer-mentor` -- color #7ED6A5 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "Older students mentoring younger ones -- less experience, more relatability." Facts: typically a teenager, often a club alum; explains concepts in kid-to-kid language; builds the peer mentor's own confidence (Chapter 10 covers recruitment); still requires the same background check and code-of-conduct training as an adult mentor

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its hover zone and reveal its full fact list in a detail panel; explore mode only (no quiz mode needed for a 3-column comparison)

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema
```

## Related Resources

- [Chapter 9: "Mentors, Students, and the 3:1 Ratio"](../../chapters/09-mentors-students-ratio/index.md)
