---
title: "Coding Club Room Layout"
description: "A club room floor plan where every placement is clickable -- and a draggable mentor marker that shows what facing the monitors inward actually buys you."
image: sims/coding-club-room-layout/coding-club-room-layout.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Coding Club Room Layout

<iframe src="main.html" width="100%" height="592" scrolling="no"></iframe>

[Run the Coding Club Room Layout MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Most advice about club room setup arrives as a list of rules. This is the same
advice as a plan, because the reasoning is spatial and a list cannot carry it.

The layout makes one central claim: **an adult standing near the centre table
can read every screen in the room at once.** Turn on **Show sightlines** and
drag the mentor marker around to test it. From the middle, all eight screens
are readable. Drag into a corner and half of them stop being readable — not
because something is in the way, but because an LCD seen from more than about
70° off-axis is a grey smear. That is the actual reason monitors face inward,
and it is the reason the claim survives being tested.

(The centre table blocks nothing, by the way. It is waist height. You can see
over it.)

The second claim is about cables. Turn on **Show cable routes** and check that
nothing crosses the middle of the room. Power strips are mounted on the wall
beneath each monitor cluster precisely so that every run can follow the
baseboard. One strip in the centre of the room would look tidier on a diagram
and would put a cable across the floor everybody walks on.

The rest of the plan is smaller decisions with the same character. The
challenge cards sit on the centre table so a student who finishes early walks
over and picks up the next thing rather than waiting to be noticed. The
storage shelf is beside the door so setup and pack-down do not cross the
working area. Chairs cluster in threes and fours, angled so nobody has their
back to the middle of the room.

None of these are the only workable answer. They are a coherent set, and
seeing them together is what makes them arguable.

## How to Use

- **Click any element** — a monitor, the centre table, a card rack, a seating
  cluster, a power strip, the storage shelf — for what it is and why it is
  there.
- Turn on **Show sightlines** and **drag the mentor marker** around the room.
  Watch the count at the top of the plan.
- Park the mentor in each corner in turn. Every corner costs screens.
- Turn on **Show cable routes** and trace the perimeter. Nothing crosses open
  floor.
- **Reset** puts the mentor back at the centre table and clears both toggles.

## Lesson Plan

**Bloom level:** Apply (L3) -- *apply*

**Learning objective:** Given a blank room outline, the learner identifies
where each layout element belongs and explains why its placement supports
mentor supervision or safety.

**Before the sim (10 min).** Hand out a blank rectangle and have each person
sketch where they would put eight computers, a table, and the power. Collect
the sketches; do not comment on them yet.

**With the sim (15 min).** Walk the plan element by element. Then run the
sightline test from the centre and from a corner, and ask people to check
their own sketch against it: how many of your eight monitors would a mentor be
able to read?

**After the sim (20 min).** Go to the actual room the club will use. It will
not be a clean rectangle, there will be a pillar or a window that forces a
compromise, and deciding which principle to give up is the real exercise.

**Check for understanding.** Ask: "You have to put two monitors against a wall
facing outward because of where the sockets are. What do you change to keep
supervision working?" Move the mentor's usual standing spot, add a second
adult, or move the sockets — any answer that names the trade-off shows the
principle transferred.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/coding-club-room-layout/main.html" width="100%" height="592" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 7: Telling Your Club's Story and Designing the Classroom](../../chapters/07-club-story-and-classroom-design/index.md).

```text
Type: infographic
**sim-id:** coding-club-room-layout<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Show a complete, well-designed coding club floor plan as one interactive diagram, so a founder can see how monitor orientation, the center table, seating, and storage all relate spatially rather than reading about each in isolation.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply

Learning objective: Given a blank room outline, the learner identifies where each layout element belongs and explains why its placement supports mentor supervision or safety.

Canvas layout:
- Full canvas (600x450): top-down floor plan view of a rectangular classroom
- Right side control panel (150px): toggle buttons for each layout element listed below

Visual elements (each independently clickable for an infobox):
- 8 small rectangles around the room's perimeter, screens all facing inward toward the room's center ("Monitors Facing Inward")
- 1 larger table at the room's center, distinct color, with small icon cards on it ("Center Table Design" and "Challenge Card Display")
- 4 clusters of 3-4 chairs each, positioned near the perimeter monitors but angled toward each other and toward the center table ("Seating Arrangement")
- Power strips shown as small icons along the perimeter wall beneath each monitor cluster, with a dashed line showing a cable route along the wall baseboard rather than crossing open floor ("Power Strip Placement" and "Cable Management")
- A storage shelf icon near the room's entrance ("Storage For Kits")

Interactive features:
- Click any element (a monitor, the center table, a seating cluster, a power strip icon, the storage shelf) to open an infobox with its one-sentence definition and one sentence on why it's placed there
- Toggle button: "Show Cable Routes" highlights all cable paths in red, making it easy to see whether any cable crosses open floor space
- Toggle button: "Show Sightlines" draws faint lines from a draggable "mentor" icon to every monitor, demonstrating that a mentor positioned near the center table can see every screen at once

Default state: All elements visible, no toggle active, mentor icon positioned at the center table

Legend: Small corner key mapping each icon to its layout element name

Canvas size: Responsive width, fixed 3:2 aspect ratio maintained on resize, minimum 320px width before the control panel stacks below the canvas

Implementation: p5.js for the floor plan rendering and click detection; infobox is an absolutely-positioned div updated on click
```

## References

- [Chapter 7: Telling Your Club's Story and Designing the Classroom](../../chapters/07-club-story-and-classroom-design/index.md) -- the chapter this MicroSim supports.
- [Anatomy of a Challenge Card](../anatomy-of-a-challenge-card/index.md) -- what goes on the rack at the centre table.
- [Club Inventory Lifecycle Workflow](../club-inventory-lifecycle-workflow/index.md) -- what the storage shelf beside the door is holding.
- [Classroom management](https://en.wikipedia.org/wiki/Classroom_management) -- the supervision literature this layout borrows from.
- [Crime prevention through environmental design](https://en.wikipedia.org/wiki/Crime_prevention_through_environmental_design) -- natural surveillance, the same sightline principle at building scale.
