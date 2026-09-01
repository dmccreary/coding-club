---
title: Oversight Board Org Chart
description: Given the five named seats on a coding club's oversight board, the learner identifies each seat's core responsibility and how the board as a whole relates to day-to-day operations.
status: scaffold
library: vis-network
bloom_level: Remember (L1)
---

# Oversight Board Org Chart



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md)
