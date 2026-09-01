---
title: Funding Partnership Fit Map
description: Given a specific club funding need, the learner examines which partnership or negotiation approach from this chapter best addresses it.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Funding Partnership Fit Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md).

```text
Type: graph-model
**sim-id:** funding-partnership-fit-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Let a leader see, in one view, which partnership or negotiation approach from this chapter addresses which kind of funding need, and notice where a single approach solves more than one need at once.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a specific club funding need, the learner examines which partnership or negotiation approach from this chapter best addresses it.

Node types:
1. Need nodes (4, amber circles, left column): "Ongoing Recurring Support," "One-Time Equipment or Space," "Access to a Grant Requiring 501(c)(3) Status," "Lower Cost on Regular Purchases"
2. Fix nodes (4, sky-blue squares, right column): "Local Company Partnership," "Strategic Partnership Building," "Nonprofit Fiscal Sponsorship," "Vendor Discount Negotiation"

Edges (ADDRESSED_BY, directional arrows from need to fix):
- Ongoing Recurring Support -> Local Company Partnership
- One-Time Equipment or Space -> Strategic Partnership Building
- One-Time Equipment or Space -> Local Company Partnership
- Access to a Grant Requiring 501(c)(3) Status -> Nonprofit Fiscal Sponsorship
- Lower Cost on Regular Purchases -> Vendor Discount Negotiation

Sample data note: "One-Time Equipment or Space" has two outgoing edges, the only need addressed by more than one fix -- surfacing that a strategic partner (like a university club) and a local company partner can both solve a one-time equipment gap, just through different relationships.

Layout: Hierarchical left-to-right, needs in the left column, fixes in the right column

Interactive features:
- Hover a need node: show a one-line plain-language description of the funding need
- Click a need node: highlight all connected fix nodes and dim the rest; open a side-panel infobox with the need's definition and its worked-example figure from this chapter
- Click a fix node: highlight every need it addresses
- Zoom: mouse wheel; Pan: click-and-drag background

Visual styling: amber circles for needs, sky-blue squares for fixes, constant arrow thickness, label text directly on each node

Legend: need color/shape versus fix color/shape, plus a note that arrow direction always reads "need is addressed by fix"

Implementation: vis-network JavaScript library rendering a small fixed dataset (4 need nodes, 4 fix nodes, 5 edges) defined in a data.json file; canvas width is responsive, height fixed to match the iframe.
```

## Related Resources

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md)
