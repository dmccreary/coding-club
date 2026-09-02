---
title: "Oversight Board Org Chart"
description: "Five board seats, what each one does, and how a board sits above day-to-day sessions without running them."
image: sims/oversight-board-org-chart/oversight-board-org-chart.png
status: built
library: vis-network
bloom_level: Remember (L1)
---

# Oversight Board Org Chart

<iframe src="main.html" width="100%" height="742" scrolling="no"></iframe>

[Run the Oversight Board Org Chart MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

The distinction this chart exists to make is between **oversight** and
**operations**, and it is the one founders find hardest.

The board holds formal authority over mission, budget, and major decisions. It
does not run sessions. The founder runs sessions and *reports to* the board
rather than acting with unchecked authority. The edge between them says "sets
policy and budget for", which is the whole relationship in five words.

Each seat unlocks something specific, and the value is in the specificity: the
treasurer signs financial paperwork the founder used to sign alone, and the
secretary writes minutes so decisions survive turnover. A seat that unlocks
nothing is decoration.

Notice there are **two routes** from the board to mentors and students. The
ordinary one runs through the founder. The second runs through the mentor liaison,
who attends mentor debriefs and carries concerns to the board directly. That
second route exists precisely because the first one passes through the person a
concern might be about.

## How to Use

- **Click any seat** to see its core responsibility.
- Follow both paths from the board down to mentors and students -- one through
  the founder, one through the mentor liaison.
- **Drag a node** to reposition it; **Reset** restores the layout.

## Lesson Plan

**Bloom level:** Remember (L1) -- *identify*

**Learning objective:** Given the five named seats on a coding club's oversight
board, the learner identifies each seat's core responsibility and how the board as
a whole relates to day-to-day operations.

**Before the sim (5 min).** Ask what a board would actually *do* in this club.
"Meet" is the common answer, and it is why many club boards achieve nothing.

**With the sim (10 min).** Click all five seats. For each, name the thing that
would go unhandled without it. Then trace the two routes to mentors and students
and ask why the second one exists.

**After the sim (15 min).** Draft the club's own five seats -- they need not match
these -- and one sentence of responsibility each.

**Check for understanding.** Ask: "A mentor is uncomfortable with a decision the
founder made. Which route does that concern take?" The mentor liaison -- and
recognising why the founder route will not do is the point of the second path.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/oversight-board-org-chart/main.html" width="100%" height="742" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md).

```text
Type: diagram
**sim-id:** oversight-board-org-chart<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Let a reader see, in one hierarchical chart, how a five-seat oversight board sits above day-to-day club operations without running sessions itself, and click each seat to learn its specific job before the prose spells out the details.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given the five named seats on a coding club's oversight board, the learner identifies each seat's core responsibility and how the board as a whole relates to day-to-day operations.

Node types:
1. Root node "Oversight Board" (top, dark blue rounded rectangle, larger size)
2. Five seat nodes (second tier, sky-blue circles): "Chair," "Secretary," "Treasurer," "Mentor Liaison," "At-Large Member"
3. Operations node (third tier, amber rounded rectangle): "Founder / Lead Mentor (Day-to-Day Sessions)"
4. Leaf node (bottom, gray rounded rectangle): "Mentors and Students"

Edges (hierarchical, downward arrows):
- Oversight Board -> each of the five seat nodes
- Oversight Board -> Founder / Lead Mentor (labeled "sets policy and budget for")
- Mentor Liaison -> Mentors and Students (labeled "carries concerns from," drawn as a dashed upward-and-across arrow distinct from the plain hierarchy edges)
- Founder / Lead Mentor -> Mentors and Students (labeled "runs weekly sessions with")

Sample click content (infobox text shown on click):
- Chair: "Runs board meetings, sets the agenda, represents the club publicly, and casts the tie-breaking vote."
- Secretary: "Records and distributes written minutes after every meeting, so decisions and their reasoning survive turnover."
- Treasurer: "Reviews the budget before large purchases and signs financial paperwork the founder used to sign alone."
- Mentor Liaison: "Attends mentor debriefs and brings mentor concerns to the board directly."
- At-Large Member: "Represents a parent, student, or venue host the board would otherwise never hear from directly."
- Oversight Board (root): "Holds formal authority over mission, budget, and major decisions; membership changes, the seats do not."
- Founder / Lead Mentor: "Runs weekly sessions day to day; reports to the board rather than acting with unchecked authority."
- Mentors and Students: "The people in the room every session -- the board exists to support this layer, not replace it."

Layout: Hierarchical, top-down, root centered, five seats spread evenly on the second tier

Interactive features:
- Click any node: open a side-panel infobox with that node's text above, and highlight its direct edges
- Hover any node: brief tooltip preview of its role
- Zoom: mouse wheel; Pan: click-and-drag background
- Button: "Reset View" recenters and clears any highlight

Visual styling: dark blue root, sky-blue seat circles, amber operations box, gray leaf box; edge labels shown at all times in small text; canvas is responsive and reflows to a narrower vertical layout on small screens

Legend: node color key (board root, board seats, operations, ground-level people) plus a note that dashed edges represent a reporting channel rather than a chain of command

Implementation: vis-network JavaScript library with a hierarchical layout option, node/edge data defined in a small `data.json` file, and a custom infobox panel rendered beneath the canvas on click.
```

## References

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md) -- the chapter this MicroSim supports.
- [Board Governance Cycle](../board-governance-cycle/index.md) -- how seats are filled and rotated over time.
- [Club Governance Map](../club-governance-map/index.md) -- the simpler structure a club has before a board exists.
- [Board of directors](https://en.wikipedia.org/wiki/Board_of_directors) -- roles and the oversight/management split.
- [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties) -- why the treasurer co-signs.
