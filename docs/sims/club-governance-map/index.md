---
title: Club Governance Map
description: Who reports to whom, who provides outside oversight, and where a mentor actually sits in the structure.
image: sims/club-governance-map/club-governance-map.png
status: built
library: vis-network
bloom_level: Understand (L2)
---

# Club Governance Map

<iframe src="main.html" width="100%" height="762" scrolling="no"></iframe>

[Run the Club Governance Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

"Governance structure" is an abstract phrase until you draw the lines. This is
the lines.

Read the labels on the edges rather than the boxes. They are what carry the
meaning: the volunteer coordinator does not merely sit above mentors, it
*recruits, screens, and schedules* them. The mentor does not merely sit above
students, it *guides them directly during sessions*. Two roles can be adjacent in
a chart for completely different reasons.

Two features are worth pausing on.

The **advisory committee** is deliberately at the top and deliberately optional.
Its edge says *provides oversight and guidance to* -- not "manages". It exists to
ask the questions nobody inside the club is positioned to ask. Not every club has
one, and the chapter's governance discussion covers when adding this tier is
worth the effort.

The **assistant leader** is the only branch that goes sideways rather than down.
That is because the role is not a junior version of the club leader -- it is a
second person who can run a session end to end without them. A club with a named
assistant who has never actually run a session does not have one.

## How to Use

- **Click any role** for its definition and its single most important
  responsibility.
- **Hover an edge** to enlarge the relationship label.
- **Drag a node** to reposition it; **Reset** restores the layout.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a club's list of roles, the learner explains who
reports to whom and who provides outside oversight.

**Before the sim (5 min).** Ask who screens a new mentor in this club. If two
people give different answers, the chart is doing work before anyone has clicked
it.

**With the sim (10 min).** Trace the path from advisory committee down to student.
At each edge, read the label aloud -- the verbs are the content. Then ask which
single node, if it vanished, would stop sessions happening.

**After the sim (15 min).** Fill in real names against each role. Note every role
with no name and every person holding three.

**Check for understanding.** Ask: "A parent has a concern about a session. Who do
they talk to, and who does that person report to?" Being able to trace two hops
without hesitating is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-governance-map/main.html" width="100%" height="762" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 4: Club Roles, Governance Structure, and Branding](../../chapters/04-roles-governance-branding/index.md).

```text
Type: graph-model
**sim-id:** club-governance-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Show how club roles connect through reporting and oversight lines, making the abstract term "governance structure" concrete.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a club's list of roles, the learner explains who reports to whom and who provides outside oversight.

Node types:
1. Top tier -- "Advisory Committee" (gray diamond, oversight, optional -- see note below)
2. Second tier -- "Club Leader" and "Assistant Leader" (amber circles, #F5A623)
3. Third tier -- "Volunteer Coordinator Role" and "Mentor Role" (sky-blue circles, #4A90D9)
4. Fourth tier -- "Student Role" and "Parent Role" (light-green circles, #7ED6A5)

Edges (hierarchical, directional):
- Advisory Committee -- Club Leader: "provides oversight and guidance to"
- Club Leader -- Assistant Leader: "delegates to and trains"
- Club Leader -- Volunteer Coordinator Role: "oversees"
- Volunteer Coordinator Role -- Mentor Role: "recruits, screens, and schedules"
- Mentor Role -- Student Role: "guides directly during sessions"
- Mentor Role -- Parent Role: "communicates session updates to"

Interactive features:
- Click any node to open a side panel with a one-sentence definition and one sentence on that role's single most important responsibility
- Note displayed near the Advisory Committee node: "Not every club has one -- see the Governance Structure discussion for when to add this tier"
- Click-drag to reposition nodes; scroll wheel to zoom

Default state: Hierarchical top-down layout, Advisory Committee at top, no node pre-selected

Layout: Hierarchical (vis-network hierarchical layout option), fixed top-to-bottom tiers

Legend: Fixed corner box explaining node color by tier (gray = oversight, amber = leadership, blue = volunteer/mentor, green = participants and families)

Canvas size: Responsive width, 500px height, minimum 320px width before controls stack vertically

Implementation: vis-network with hierarchical layout enabled; side panel is an absolutely-positioned div updated via vis-network's `selectNode` event listener
```

## References

- [Chapter 4: Club Roles, Governance Structure, and Branding](../../chapters/04-roles-governance-branding/index.md) -- the chapter this MicroSim supports.
- [Anatomy of a Club Charter](../club-charter-anatomy/index.md) -- the section of the charter that writes these roles down.
- [Oversight Board Org Chart](../oversight-board-org-chart/index.md) -- what this structure becomes once a club adds a formal board.
- [Organizational chart](https://en.wikipedia.org/wiki/Organizational_chart) -- reading reporting lines in general.
- [Corporate governance](https://en.wikipedia.org/wiki/Corporate_governance) -- where the oversight-versus-management distinction comes from.
