---
title: Club Growth Path
description: Four growth stages on one timeline, each with the single condition that has to be true before a club moves on, plus a marker to bookmark where you actually are.
image: sims/club-growth-path/club-growth-path.png
status: built
library: vis-timeline
bloom_level: Understand (L2)
---

# Club Growth Path

<iframe src="main.html" width="100%" height="622px" scrolling="no"></iframe>

[Run the Club Growth Path MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Most clubs never leave stage two, and that is not a failure. This timeline lays
the four stages out in the order they usually arrive -- founding year, scaling,
optional multi-site expansion, rare franchise -- so a founder can see which one
they are in rather than which one they feel behind on.

The useful part is not the sequence. It is the **one condition** attached to each
stage that has to be true before advancing. A club that is still recruiting
mentors one at a time cannot staff a second site, and opening one will cost it
the first. A club that has never survived a leadership handover has not yet
proved the thing multi-site expansion depends on.

Two of the four stages are marked optional, and the fourth is marked rare. A
growth path that ends at stage two with a full room and a stable rota is a
successful club, not a stalled one.

Drag the amber **You are here** marker to where your club actually is. It snaps
to whole stages and it is the only draggable thing on the timeline.

## How to Use

- **Click any coloured block** to read what the stage involves, why it lasts as
  long as it does, and the condition that gates the next one.
- **Drag the "You are here" marker** to your club's current stage. It snaps to
  whole positions and cannot leave the range.
- **Read the axis** as club age, not calendar dates -- "Year 1-2" is a typical
  duration, not a deadline.
- **Reset** returns the marker to the founding year and clears the panel.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a club's current size and stability, the learner
identifies which growth stage it occupies and what condition must be met before
advancing to the next stage.

**Before the sim (5 min).** Ask the group to say, in one sentence each, how big
they want the club to be in three years. Note who says *bigger* and who says
*better*. Both are legitimate and this timeline is mostly about the second.

**With the sim (10 min).** Read the four stages in order, then drag the marker
to where the club actually is and defend the choice. Groups routinely place
themselves a stage ahead of where the gating condition says they are, and the
argument about that is the lesson.

**After the sim (15 min).** Take the gating condition for the *next* stage and
turn it into a checklist with dates. For most clubs that is the mentor pipeline:
how many mentors, recruited through which channel, by when.

**Check for understanding.** Describe a club -- twenty students, one venue, one
leader who has never taken a week off -- and ask which stage it is in and what
has to happen before it expands. Naming the leadership transition, not the
student count, is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-growth-path/main.html" width="100%" height="622px" scrolling="no"></iframe>
```

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

## References

- [Chapter 6: Growing, Branding, and Promoting Your Club](../../chapters/06-growing-and-promoting-club/index.md) -- the chapter this MicroSim supports.
- [Club Health Metrics Dashboard](../club-health-metrics-dashboard/index.md) --
  the numbers that tell you a stage is stable.
- [Mentor Development Pipeline](../mentor-development-pipeline/index.md) -- the
  gating condition for stage three, in detail.
- [Club Playbook Assembly Workflow](../club-playbook-assembly-workflow/index.md)
  -- what a second site actually needs handed to it.
- [Scalability](https://en.wikipedia.org/wiki/Scalability) -- the general idea
  that growth in place and growth by replication are different problems.
