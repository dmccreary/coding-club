---
title: Institutional Funding Partnership Map
description: Four ongoing funding needs, four institutional partners, and the five connections between them. Two nodes carry more than one line, and those are the ones worth studying.
image: sims/institutional-funding-partnership-map/institutional-funding-partnership-map.png
status: built
library: vis-network
bloom_level: Analyze (L4)
---

# Institutional Funding Partnership Map

<iframe src="main.html" width="100%" height="642px" scrolling="no"></iframe>

[Run the Institutional Funding Partnership Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Chapter 30's funding channels are one-time: a bake sale raises money once, a
crowdfunder closes, a single grant is spent. This map is about the other kind --
the needs that come back every September, and the institutions that can meet
them on the same schedule.

Four needs sit on the left, four partners on the right, and every arrow reads in
one direction: *need is addressed by partner*. Most of the arrows are one-to-one
and boring, which is the point -- they make the two exceptions visible.

**Free or Discounted Meeting Space** is the only need with two partners able to
meet it. **Library Funding Partnership** is the only partner meeting two
different needs. A leader with one afternoon to spend on relationship-building
should spend it on the node with two lines, and this map is how you find it
without doing the arithmetic in your head.

The figures in the detail panel come from the worked club budget in this
chapter, so the needs are sized rather than abstract: $830 of recurring cost per
year, of which venue hire is the largest single line that can be removed
entirely rather than merely reduced.

## How to Use

- **Click any amber node** to read what that ongoing need actually is and the
  worked figure attached to it.
- **Click any blue node** to read what that partner provides, what it costs you
  in effort, and the catch that comes with it.
- **Hover a connecting line** to enlarge its label. Every one reads the same
  way: the need at the tail is addressed by the partner at the head.
- **Drag a node** to reposition it if two labels overlap on a narrow screen.
- Use the **navigation buttons** to zoom and pan, or open the sim fullscreen to
  use the mouse wheel.
- **Reset** restores the original two-column layout.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a specific ongoing club funding need, the learner
examines which institutional partnership from this chapter best addresses it.

**Before the sim (5 min).** Ask the group to name every recurring cost their
club has -- not the one-time ones. Write them up. Most groups produce venue,
consumables, and software, and most groups leave off the one that matters most
to them.

**With the sim (10 min).** Work left to right. Read each need, then follow its
arrow and read the partner. Then ask the group which node has the most lines
attached and why that matters. Two answers are correct -- the space need and the
library partner -- and getting both is the objective met.

**After the sim (15 min).** Give each small group one need from the map and ten
minutes to draft the opening paragraph of an approach to the matching partner.
Compare the drafts for the library and the community foundation: one is a short
email to a named person, the other is the first page of a written proposal, and
the difference in effort is the honest cost of the money.

**Check for understanding.** Say: "Our club needs a room every Tuesday and has
no money for one." Ask which partners could address that and which single
conversation would address the most. Naming the library, and saying *because it
also reaches families*, is the analysis this sim is for.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/institutional-funding-partnership-map/main.html" width="100%" height="642px" scrolling="no"></iframe>
```

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

## References

- [Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md) -- the chapter this MicroSim supports.
- [Funding Partnership Fit Map](../funding-partnership-fit-map/index.md) -- which
  partner suits which club profile.
- [Fundraising Channel Yield Comparison](../fundraising-channel-yield-comparison/index.md)
  -- the one-time channels this map deliberately excludes.
- [Coding Club Budget Builder](../coding-club-budget-builder/index.md) -- where the
  $830 recurring figure comes from.
- [Grant Writing Tracking Workflow](../grant-writing-tracking-workflow/index.md) --
  what a community foundation application actually involves.
- [Community foundation](https://en.wikipedia.org/wiki/Community_foundation) --
  background on how these bodies are funded and what they look for.
