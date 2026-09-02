---
title: "Layers of Youth Digital Safety"
description: "Five layers, bottom to top, and who manages each one."
image: sims/youth-safety-layers/youth-safety-layers.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Understand (L2)
---

# Layers of Youth Digital Safety

<iframe src="main.html" width="100%" height="832" scrolling="no"></iframe>

[Run the Layers of Youth Digital Safety MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Five layers, stacked bottom to top, and the stacking is not decoration —
**each layer only works because the one below it exists.**

**Device security policy** is the foundation, and it is the only layer that is
writing rather than software: auto-lock timing, no personal accounts on shared
devices, and what happens when a device goes missing. Every layer above is a
setting; this one is the decision that says which settings.

**Password management for kids** favours memorable passphrases over symbol
soup, and replaces adult-style self-service recovery with a club-kept reset
log. That substitution is the important bit: a nine-year-old cannot recover an
account by email, so the club has to be the recovery mechanism.

**Parental control software** is device-wide — what can be installed and run,
not just which sites load. It is the layer that stops a student installing a
game, which is a different problem from the one below it.

**Content filtering** blocks inappropriate sites before the page loads, at the
network or browser level. Its whole value is that it **requires no mentor to be
watching**, which is the only kind of supervision that scales to twenty
laptops.

**Screen time management** is the top layer and the only one that is not a
setting at all — it is session structure, alternating screen work with hands-on
kit building. It is managed by whichever mentor is running the session, which
makes it the layer most likely to be skipped when a session runs late.

**Who manages what** is worth being explicit about. The bottom four are the
club's job on club devices. On a student's own device, the top three belong to
the family — and a club that assumes otherwise ends up either overreaching or
leaving a gap.

## How to Use

- **Click each layer** for the risk it addresses and who manages it.
- Read bottom to top. The written policy at the base is what the four settings
  above it implement.
- Note the top layer: it is the only one that is a habit rather than a
  configuration, which is why it is the one that slips.
- Try **Quiz Me** to practise matching a risk to a layer.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given one of the five youth-safety layers a club
configures, the learner classifies what risk it addresses and whether the club
or a family manages it.

**Before (5 min).** Ask which of the five the club has actually configured on
its laptops. Most have content filtering and nothing else, because it is the
one that comes up first when you search.

**With the poster (15 min).** Read all five bottom-up. The useful realisation
is that the club has been doing layer four without layer one — filtering
configured against no written policy about what should be filtered.

**After (an afternoon).** Write the device security policy. It is one page, it
is the layer everything else references, and it is the one no software will
write for you.

**Check for understanding.** Ask: "A student installs a game on a club laptop.
Which layer failed?" Parental controls — content filtering blocks sites, not
installations, and confusing the two is the most common gap in a club's setup.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/youth-safety-layers/main.html" width="100%" height="832" scrolling="no"></iframe>
```

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

## References

- [Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md) -- the chapter this MicroSim supports.
- [Peripheral and Storage Management Layers](../peripheral-management-layers/index.md) -- the accessories on the same devices.
- [Grant Budget Laptop Calculator](../grant-budget-laptop-calculator/index.md) -- buying the devices these layers configure.
- [Saving Student Data Decision Tool](../saving-student-data-decision-tool/index.md) -- the data side of the same policy.
- [Content-control software](https://en.wikipedia.org/wiki/Content-control_software) -- what layer four does and does not cover.
- [Defense in depth (computing)](https://en.wikipedia.org/wiki/Defense_in_depth_(computing)) -- why layers rather than one control.
