---
title: Layers of Youth Digital Safety
description: Given one of the five youth-safety layers a club configures, the learner classifies what risk it addresses and whether the club or a family manages it.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Layers of Youth Digital Safety



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** youth-safety-layers<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor see all five youth-safety layers stacked in one place, from the club's written policy foundation up through daily screen-time habits, and quickly identify which layer to check when a specific kind of problem comes up.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given one of the five youth-safety layers a club configures, the learner classifies what risk it addresses and whether the club or a family manages it.

Image style: Flat stacked-band poster, five full-width horizontal bands from bottom to top, each with a bold printed band label baked into the image since grid overlays hide chip labels by default

Image dimensions: 1000x800 (portrait, to accommodate five stacked bands)

Zones (5 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-4 bullet facts), ordered bottom to top from foundation to daily habit:
1. `device-security-policy` -- color #4A90D9 -- boundaries approximately x1:3,y1:80,x2:97,y2:96 -- Summary: "The written foundation every other layer above builds on." Facts: extends Chapter 3's child safety and data privacy policies onto specific device settings; covers auto-lock timing, no personal accounts on shared devices, and a lost-device procedure; managed entirely by the club
2. `password-management-for-kids` -- color #50C878 -- boundaries approximately x1:3,y1:62,x2:97,y2:78 -- Summary: "Age-appropriate passwords, plus a fast club-side reset process." Facts: favors memorable passphrases over complex symbol strings; a club-kept password reset log replaces adult-style self-service recovery; managed by the club
3. `parental-control-software` -- color #F5A623 -- boundaries approximately x1:3,y1:44,x2:97,y2:60 -- Summary: "Device-wide rules on what can run, not just which sites load." Facts: blocks unapproved app or extension installation; can enforce daily device time limits; generates usage reports; managed by the club or, for a loaned device, a family at home
4. `content-filtering-software` -- color #E85D75 -- boundaries approximately x1:3,y1:26,x2:97,y2:42 -- Summary: "Blocks inappropriate websites automatically, before a page loads." Facts: the technical enforcement of Chapter 3's child safety policy; works at the network or browser level; requires no mentor to be watching every screen; managed by the club
5. `screen-time-management` -- color #9B6BC7 -- boundaries approximately x1:3,y1:8,x2:97,y2:24 -- Summary: "The daily habit layer: alternating screen work with hands-on activity." Facts: a session-structure practice, not a device setting; pairs coding blocks with hands-on kit-building time from Chapters 19-20; managed by whichever mentor is running that session

showLabels: false (band titles are printed in the generated image)

Interactive features: Click or hover any band to highlight its hover zone and reveal its full fact list, including which party manages it, in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the five rectangular hover zones over the generated poster image; `data.json` holds the 5 zones per the overlay-grid-data-json-schema.
```

## Related Resources

- [Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md)
