---
title: Access Barrier to Fix Map
description: Given a barrier a family might face (cost, transportation, inflexible timing, language, or disability access), the learner examines which club practice from this chapter addresses it, and identifies practices that address more than one barrier.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Access Barrier to Fix Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 28: Reaching Underserved Communities and Removing Barriers](../../chapters/28-underserved-communities-barriers/index.md).

```text
Type: graph-model
**sim-id:** access-barrier-to-fix-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Let a mentor see, in one view, how each structural barrier covered in this chapter connects to the concrete club practice that addresses it, and notice where a single fix resolves more than one barrier at once.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a barrier a family might face (cost, transportation, inflexible timing, language, or disability access), the learner examines which club practice from this chapter addresses it, and identifies practices that address more than one barrier.

Node types:
1. Barrier nodes (5, red circles, left column) -- Cost, Transportation, Inflexible Timing, Language, Disability Access
2. Fix nodes (6, green squares, right column) -- No-Fee Model, Scholarship Fund, Free Device Loan Program, Carpool/Transit/Virtual Option, Alternating Saturday + Weekday Sessions, Translated Materials + Bilingual Contact, Direct Accommodation Request

Edges (ADDRESSED_BY, directional arrows from barrier to fix):
- Cost -> No-Fee Model
- Cost -> Scholarship Fund
- Cost -> Free Device Loan Program
- Transportation -> Carpool/Transit/Virtual Option
- Inflexible Timing -> Alternating Saturday + Weekday Sessions
- Language -> Translated Materials + Bilingual Contact
- Disability Access -> Direct Accommodation Request

Sample data note: Cost has three outgoing edges, the only barrier with more than one fix converging on it -- the pattern the diagram is built to surface, since a single policy decision like going no-fee doesn't fully solve cost alone; it takes a scholarship fund and a device loan program alongside it.

Layout: Hierarchical left-to-right, barriers in the left column, fixes in the right column

Interactive features:
- Hover a barrier node: show a one-line plain-language description of the barrier
- Click a barrier node: highlight all connected fix nodes and dim the rest; open a side-panel infobox with the barrier's definition and its worked-example scenario from this chapter
- Click a fix node: highlight all barriers it addresses, making it visible that the no-fee model alone only reaches one edge of the cost problem
- Zoom: mouse wheel; Pan: click-and-drag background

Visual styling: red circles for barriers, green squares for fixes, constant arrow thickness, label text directly on each node

Legend: barrier color/shape versus fix color/shape, plus a note that arrow direction always reads "barrier is addressed by fix"

Implementation: vis-network JavaScript library rendering a small fixed dataset (5 barrier nodes, 6 fix nodes, 7 edges) defined in a data.json file; canvas width is responsive, height fixed to match the iframe.
```

## Related Resources

- [Chapter 28: Reaching Underserved Communities and Removing Barriers](../../chapters/28-underserved-communities-barriers/index.md)
