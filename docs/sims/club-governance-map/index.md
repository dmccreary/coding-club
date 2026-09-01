---
title: Club Governance at a Glance
description: Given a club's list of roles, the learner explains who reports to whom and who provides outside oversight.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Club Governance at a Glance



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 4: Club Roles, Governance Structure, and Branding](../../chapters/04-roles-governance-branding/index.md)
