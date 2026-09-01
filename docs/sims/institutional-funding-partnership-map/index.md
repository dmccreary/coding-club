---
title: Institutional Funding Partnership Map
description: Given a specific ongoing club funding need, the learner examines which institutional partnership from this chapter best addresses it.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Institutional Funding Partnership Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md).

```text
Type: graph-model
**sim-id:** institutional-funding-partnership-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Let a leader see, in one view, which institutional partnership from this chapter best addresses which kind of ongoing funding need, distinct from Chapter 30's one-time channels.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a specific ongoing club funding need, the learner examines which institutional partnership from this chapter best addresses it.

Node types:
1. Need nodes (4, amber circles, left column): "Multi-Year Recurring Cash Support," "Free or Discounted Meeting Space," "Renewable Annual Cash Allocation," "Cross-Promotion to Local Families"
2. Partner nodes (4, sky-blue squares, right column): "Community Foundation Grant," "School District Funding," "PTA Partnership Funding," "Library Funding Partnership"

Edges (ADDRESSED_BY, directional arrows from need to partner):
- Multi-Year Recurring Cash Support -> Community Foundation Grant
- Free or Discounted Meeting Space -> School District Funding
- Free or Discounted Meeting Space -> Library Funding Partnership
- Renewable Annual Cash Allocation -> PTA Partnership Funding
- Cross-Promotion to Local Families -> Library Funding Partnership

Sample data note: "Free or Discounted Meeting Space" and "Library Funding Partnership" each have two connections, the only need and the only partner appearing twice -- surfacing that space support can come from either the district or the library, and that a library relationship alone can address more than one kind of need.

Layout: Hierarchical left-to-right, needs in the left column, partners in the right column

Interactive features:
- Hover a need node: show a one-line plain-language description of the funding need
- Click a need node: highlight all connected partner nodes and dim the rest; open a side-panel infobox with the need's definition and its worked-example figure from this chapter
- Click a partner node: highlight every need it addresses
- Zoom: mouse wheel; Pan: click-and-drag background

Visual styling: amber circles for needs, sky-blue squares for partners, constant arrow thickness, label text directly on each node

Legend: need color/shape versus partner color/shape, plus a note that arrow direction always reads "need is addressed by partner"

Implementation: vis-network JavaScript library rendering a small fixed dataset (4 need nodes, 4 partner nodes, 5 edges) defined in a data.json file; canvas width is responsive, height fixed to match the iframe.
```

## Related Resources

- [Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md)
