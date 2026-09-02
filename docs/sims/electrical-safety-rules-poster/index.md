---
title: "Electrical Safety Rules Poster"
description: "Four hazard families, three rules each -- the panel you point at depends on what is on the table."
image: sims/electrical-safety-rules-poster/electrical-safety-rules-poster.png
status: built
library: Infographic overlay (grid-diagram.js)
bloom_level: Remember (L1)
---

# Electrical Safety Rules Poster

<iframe src="main.html" width="100%" height="832" scrolling="no"></iframe>

[Run the Electrical Safety Rules Poster MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four panels, twelve rules, and the reason they are grouped by hazard rather
than listed as one long set is practical: **you only need one panel per
session.** Point at the one that matches what is on the table and you have
covered it in thirty seconds. Read twelve rules and nobody remembers any.

The grouping also tells you something about the hazards themselves.

**Circuits** is about sequence. Build, then check, then power. Every rule in
that panel is really the same rule stated three ways: nothing is live while you
are changing it.

**Batteries** is the panel people skip because a AA pack looks harmless. It is
about treating a battery as a small chemical device — the swollen-pack rule is
the one that matters most and the one nobody knows.

**Static** is the invisible one. Nothing looks wrong, nothing feels wrong, and
the board fails three weeks later.

**Soldering** is the only panel where the hazard is immediate and obvious, and
it still needs its own rules because the iron stays dangerous for minutes after
you put it down. "The iron only ever rests in its stand" is a habit, not a
judgement call, which is why it is phrased as an absolute.

Worth printing this one and putting it on the wall. It is the only poster in
the book that earns its space by being glanced at rather than read.

## How to Use

- **Click the panel** that matches what is on the table tonight. That is the
  whole workflow.
- Read all four before the first hands-on session of the year, then use one at
  a time after that.
- Try **Quiz Me** to check you can match a rule to its hazard family.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given a hands-on session about to begin, the learner
identifies which safety rule applies to the materials on the table.

**Before (5 min).** Put the actual materials for tonight on the table and ask
which panel applies. That question, asked every week, is the practice.

**With the poster (10 min).** Read all four panels once, at the start of the
year. The battery panel is the one to spend time on, because it is the least
intuitive.

**After (ongoing).** Print it. Put it where the kits are stored, not where the
mentors sit — the moment it needs to be read is when somebody opens the
cupboard.

**Check for understanding.** Ask: "A battery pack is warm and slightly puffy.
What do you do?" Stop using it immediately and isolate it — not "keep an eye on
it". A swollen pack is already failing, and the rule is deliberately absolute
because judging degrees of swelling is not a thing anyone can do reliably.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/electrical-safety-rules-poster/main.html" width="100%" height="832" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** electrical-safety-rules-poster<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, four-panel comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Give a mentor a single, memorable checklist poster to display or hand out at the start of every hands-on session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a hands-on session about to begin, the learner identifies which safety rule applies to the materials on the table.

Image style: Flat poster, four panels in a 2x2 grid, each with a bold printed panel header baked into the image ("Circuits," "Batteries," "Static," "Soldering")

Image dimensions: 1000x800 (landscape)

Zones (4 panels, each with id, label, color, one-line summary, 3 bullet rules):
1. `circuits` — color #4A90D9 — "Build the circuit before you power it." Rules: never bridge the two battery terminals with a bare wire; check LED polarity before connecting power; disconnect power before changing any wire
2. `batteries` — color #F5A623 — "Treat batteries as small chemical devices, not toys." Rules: never puncture, crush, or short a battery pack; stop using a swollen or hot pack immediately; store loose batteries so terminals cannot touch metal
3. `static` — color #7ED6A5 — "Ground yourself before you touch a board." Rules: touch a grounded metal object before handling a microcontroller; avoid handling boards on carpet in dry weather; keep boards in anti-static bags when not in use
4. `soldering` — color #E67E22 — "The iron is always hot until proven otherwise." Rules: the iron only ever rests in its stand; never touch the tip or the joint right after soldering; work in a ventilated area

Interactive features: Click or hover any panel to enlarge it and reveal its full rule list in a detail overlay; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) — `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Normal Circuit vs. Short Circuit](../normal-circuit-vs-short-circuit/index.md) -- what the first circuits rule is protecting against.
- [Static Electricity Precaution Checklist](../static-electricity-precaution-checklist/index.md) -- the static panel, applied to a real room.
- [Session Room Safety and Logistics Map](../session-room-safety-map/index.md) -- where the soldering zone goes.
- [Lithium-ion battery](https://en.wikipedia.org/wiki/Lithium-ion_battery#Safety) -- why a swollen pack is not a wait-and-see situation.
