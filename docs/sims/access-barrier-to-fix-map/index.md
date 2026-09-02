---
title: "Access Barrier to Fix Map"
description: "Five barriers families face, seven club practices that address them -- and the one barrier three fixes converge on."
image: sims/access-barrier-to-fix-map/access-barrier-to-fix-map.png
status: built
library: vis-network
bloom_level: Analyze (L4)
---

# Access Barrier to Fix Map

<iframe src="main.html" width="100%" height="742px" scrolling="no"></iframe>

[Run the Access Barrier to Fix Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Five barriers on the left, seven practices on the right, and the shape of the
connections carries the argument.

**Cost is the only barrier with three fixes converging on it**, and the three are
not equivalent. A **no-fee model** removes the barrier for every family at once,
with nobody having to identify themselves. A **scholarship fund** works, but
requires a family to ask -- which some will not do. A **device loan programme**
closes the hidden fee that "bring a laptop" quietly creates.

That difference between *removing* a barrier and *providing a route around it*
is what this map is built to surface. A single policy decision at the top of the
list does more than three well-run application processes lower down.

The other four barriers each have one fix, and the fixes are correspondingly
specific: two session slots rather than one, translated materials plus a named
bilingual contact, and -- for disability access -- asking the family what they
need rather than guessing.

## How to Use

- **Click any barrier** to see what it is; **click any fix** to see what it does.
- Follow the three arrows out of **Cost** -- it is the only barrier with more than
  one practice addressing it.
- **Reset** restores the layout.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a barrier a family might face, the learner examines
which club practice addresses it, and identifies practices that address more than
one barrier.

**Before the sim (5 min).** Ask who is *not* in the club who might want to be. The
honest answers are usually about cost and transport.

**With the sim (15 min).** Trace each barrier to its fix. At Cost, compare the
three: which requires a family to ask, and which does not? That question is the
analysis.

**After the sim (15 min).** Audit the club against all five barriers and mark
which fixes are actually in place versus merely intended.

**Check for understanding.** Ask: "Which single decision on this map helps the
most families with the least ongoing effort?" Going no-fee -- and being able to
say why it beats a scholarship fund on reach is the examination this objective
wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/access-barrier-to-fix-map/main.html" width="100%" height="742px" scrolling="no"></iframe>
```

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

## References

- [Chapter 28: Reaching Underserved Communities and Removing Barriers](../../chapters/28-underserved-communities-barriers/index.md) -- the chapter this MicroSim supports.
- [Funding Partnership Fit Map](../funding-partnership-fit-map/index.md) -- how a club pays for a no-fee model.
- [Universal design](https://en.wikipedia.org/wiki/Universal_design) -- removing barriers rather than accommodating around them.
- [Digital divide](https://en.wikipedia.org/wiki/Digital_divide) -- the gap the device loan programme addresses.
- [Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines) -- accessibility standards for anything the club publishes.
