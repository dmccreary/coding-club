---
title: "Funding Partnership Fit Map"
description: "Four funding needs, four partnership approaches, and which one solves more than one need."
image: sims/funding-partnership-fit-map/funding-partnership-fit-map.png
status: built
library: vis-network
bloom_level: Analyze (L4)
---

# Funding Partnership Fit Map

<iframe src="main.html" width="100%" height="642px" scrolling="no"></iframe>

[Run the Funding Partnership Fit Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four needs, four approaches, and they are not interchangeable.

The mapping is mostly one-to-one, which is itself informative: a fiscal sponsor
solves a very specific problem -- a grant that requires 501(c)(3) status the club
does not have -- and solves nothing else. Vendor discount negotiation does not
raise money at all; it makes the money already raised go further on things the
club buys anyway.

**One-time equipment or space** is the exception, with two approaches converging
on it. A local company and a strategic partner can both fill a one-off gap, but
through different relationships: the company gives because supporting the
community is part of what it does, while a university club or library trades
because each side has something the other needs. Which route to take depends on
what the club can offer back, and only one of the two requires having anything to
offer.

Reading the map the other way is also useful: if a club's need is **ongoing and
recurring**, only one approach here addresses it, and grants -- covered
separately in this chapter -- are the other place to look.

## How to Use

- **Click any need or approach** to see what it covers.
- Follow the two arrows out of **One-Time Equipment or Space** -- the only need
  with more than one approach.
- **Reset** restores the layout.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a specific club funding need, the learner examines
which partnership or negotiation approach from this chapter best addresses it.

**Before the sim (5 min).** Ask what the club needs money for right now. Push past
"more money" to a specific need -- recurring, one-off, grant-blocked, or
cost-of-purchases.

**With the sim (10 min).** Trace each need to its approach. Then ask what a
strategic partner would want back, which is the question that decides whether
that route is open to this club.

**After the sim (15 min).** Pick the club's most pressing need and draft the
opening ask for the approach the map points to.

**Check for understanding.** Ask: "A funder will only give to a registered
nonprofit and the club is not one. What now?" Fiscal sponsorship -- and knowing
that no other approach on the map unblocks that is the examination this objective
wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/funding-partnership-fit-map/main.html" width="100%" height="642px" scrolling="no"></iframe>
```

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

## References

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md) -- the chapter this MicroSim supports.
- [Fundraising Channel Yield Comparison](../fundraising-channel-yield-comparison/index.md) -- the effort each channel costs.
- [Grant Writing and Tracking Workflow](../grant-writing-tracking-workflow/index.md) -- the route this map deliberately leaves out.
- [Fiscal sponsorship](https://en.wikipedia.org/wiki/Fiscal_sponsorship) -- how an established nonprofit receives a grant on a club's behalf.
- [501(c)(3) organization](https://en.wikipedia.org/wiki/501(c)(3)_organization) -- the status many funders require.
