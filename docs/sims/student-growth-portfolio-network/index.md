---
title: "Student Growth to Portfolio Network"
description: "Five stages from a mentor's in-session note to a family's read-only view -- and what changes at each step."
image: sims/student-growth-portfolio-network/student-growth-portfolio-network.png
status: built
library: vis-network
bloom_level: Understand (L2)
---

# Student Growth to Portfolio Network

<iframe src="main.html" width="100%" height="622" scrolling="no"></iframe>

[Run the Student Growth to Portfolio Network MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

One pipeline, five stages, and the data changes shape at every one.

It starts as a **mentor's note** -- unstructured, specific to one session, written
by a person who was there. It becomes **growth metrics** by being aggregated
across sessions, which is where individual moments turn into a trend. It becomes
**mastery tracking** by being classified into emerging, practising, or mastered
for each named skill. It becomes a **portfolio** when actual saved work is
attached as evidence -- the photograph, the code, the project file. And it
becomes a **parent portal** by being scoped to one family and made read-only.

Two things are worth noticing about the shape.

Each arrow does real work. Nothing is simply copied forward; each step
transforms. Ask of any stage "what was added here?" and there is an answer.

And the last node is a **leaf**. The portal shows; it does not feed anything back
into the pipeline. A family cannot edit a mastery level from it, which is
deliberate and worth stating to parents when the portal is introduced.

## How to Use

- **Click any stage** to see what flows in and where it goes next.
- Follow the arrows left to right along the top row, then down and back to the
  left along the bottom.
- **Reset** restores the layout.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a node in the growth-to-portfolio network, the
learner explains what data flows into it and where that data goes next.

**Before the sim (5 min).** Ask what a parent currently sees of their child's
progress. In most clubs the honest answer is "whatever a mentor says at pickup".

**With the sim (10 min).** Walk the chain and, at each arrow, ask what was added.
Aggregation, classification, evidence, and scoping -- four different operations.

**After the sim (15 min).** Take one real observation from last session and carry
it by hand through all five stages, writing down what it looks like at each.

**Check for understanding.** Ask: "A parent disagrees with a mastery level. Can
they change it in the portal?" No -- it is read-only, and the change would have to
happen upstream at mastery tracking. Being able to locate the right stage is the
explanation this objective wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/student-growth-portfolio-network/main.html" width="100%" height="622" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md).

```text
Type: graph-model
**sim-id:** student-growth-portfolio-network<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/theory-of-knowledge/tree/main/docs/sims/capstone-portfolio-web

Purpose: Show how raw session observations flow through growth metrics and mastery tracking into a portfolio, and finally into a scoped, view-only parent portal, so a mentor can see where each concept sits in the pipeline.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a node in the growth-to-portfolio network, the learner explains what data flows into it and where that data goes next.

Node types:
1. Session Observations (small gray circle) -- a mentor's in-session notes on what a student attempted
2. Student Growth Metrics (blue circle) -- aggregated measurements of a student's progress over time
3. Skill Mastery Tracking (green circle) -- the emerging/practicing/mastered level for each specific skill
4. Digital Portfolio System (amber circle) -- the actual saved work evidencing that mastery
5. Parent Access Portal (purple circle, leaf node) -- the single family's scoped, view-only window into the above

Edges:
1. Session Observations → Student Growth Metrics: "aggregated into"
2. Student Growth Metrics → Skill Mastery Tracking: "classified by skill level"
3. Skill Mastery Tracking → Digital Portfolio System: "evidenced by uploaded work"
4. Digital Portfolio System → Parent Access Portal: "exposed read-only to one family"

Layout: Left-to-right hierarchical, following the data-flow order above

Interactive features:
- Hover any node to show its one-line definition
- Click any node to highlight its direct neighbors and open a side-panel infobox with its full description
- Click any edge to reveal what the edge label means in this pipeline
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Node size uniform; edge arrows show direction of data flow, left to right

Legend: Node color meanings and an arrow explaining "data flows in this direction"

Implementation: vis-network JavaScript library, hierarchical layout, canvas size 800x450px.
```

## References

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md) -- the chapter this MicroSim supports.
- [Student Progress Tracking Cycle](../progress-tracking-cycle/index.md) -- the habit that produces the observations at stage one.
- [Progress Dashboard Explorer](../progress-dashboard-explorer/index.md) -- the mentor-facing view of the same data.
- [Student Data Privacy Principles](../student-data-privacy-principles/index.md) -- why the portal is scoped to one family.
- [E-portfolio](https://en.wikipedia.org/wiki/Electronic_portfolio) -- evidence of learning as a collected artefact.
