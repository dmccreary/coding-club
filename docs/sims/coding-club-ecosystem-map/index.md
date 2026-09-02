---
title: "Coding Club Ecosystem Map"
description: "Place a coding club precisely among six neighbouring educational contexts, and see what makes it distinct from each one."
image: sims/coding-club-ecosystem-map/coding-club-ecosystem-map.png
status: built
library: vis-network
bloom_level: Understand (L2)
---

# Coding Club Ecosystem Map

<iframe src="main.html" width="100%" height="702" scrolling="no"></iframe>

[Run the Coding Club Ecosystem Map MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

"Coding club" gets used as a loose synonym for maker space, STEM program, or
after-school activity. It overlaps with all of them and is identical to none.

This map puts a coding club at the centre and connects it to six neighbouring
contexts. Each connection carries the phrase that names the relationship, so the
map states something specific rather than just drawing lines: a club *is one
delivery model for* STEM education, but it only *teaches a subset of* computer
science education, and it merely *is commonly scheduled as* an after-school
program.

Clicking any circle gives you the definition of that context plus the sentence
that matters most -- how a coding club differs from it. That second sentence is
what turns the map from a picture into a working definition.

## How to Use

- **Click any blue circle** to read what that context is and how a coding club
  differs from it.
- **Hover any connecting line** to enlarge its label.
- **Drag a circle** to reposition it; the amber Coding Club node stays pinned at
  the centre.
- Use the **navigation buttons** in the corner to zoom and pan, or open the sim
  fullscreen to use the mouse wheel.
- **Reset** restores the original layout.

## Lesson Plan

**Bloom level:** Understand (L2) -- *differentiate*

**Learning objective:** Given a set of related program types, the learner
distinguishes what makes a coding club distinct while recognising legitimate
overlap.

**Before the sim (5 min).** Write "coding club" on the board and ask the group to
name other things it is "basically the same as." You will get maker space, STEM
club, and computer class. Leave the list up.

**With the sim (10 min).** Work through the six nodes together. For each one, read
the edge phrase aloud first, then the difference sentence. Compare against the
list on the board and cross out the ones the sim shows are not the same thing.

**After the sim (10 min).** Split into pairs. Give each pair a real local program
-- a library robotics night, a school CS elective, a weekend hackathon -- and ask
them to place it on the map and defend the placement in one sentence using the
edge phrasing.

**Check for understanding.** Ask: "Our club meets on Saturday mornings, so it is
not an after-school program. Is it still a coding club?" A learner who has met
the objective answers yes and can say why the schedule is not the defining
property.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/coding-club-ecosystem-map/main.html" width="100%" height="702" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 1: What Is a Coding Club](../../chapters/01-what-is-a-coding-club/index.md).

```text
Type: graph-model
**sim-id:** coding-club-ecosystem-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Show how a coding club relates to five neighboring educational contexts, so a reader can place the term precisely instead of treating it as a synonym for "STEM program."

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a set of related program types, the learner distinguishes what makes a coding club distinct while recognizing legitimate overlap.

Node types:
1. Center node -- "Coding Club" (amber circle, larger than the rest, matches Circuit's accent color #F5A623)
2. Related-context nodes (six sky-blue circles, #4A90D9): "Maker Space," "STEM Education," "Computer Science Education," "Digital Literacy," "After School Program," "Extracurricular Learning"

Edge labels (each edge is a short phrase, not just a line):
- Coding Club -- Maker Space: "often shares tools with"
- Coding Club -- STEM Education: "is one delivery model for"
- Coding Club -- Computer Science Education: "teaches a subset of"
- Coding Club -- Digital Literacy: "builds toward"
- Coding Club -- After School Program: "is commonly scheduled as"
- Coding Club -- Extracurricular Learning: "is a category of"

Interactive features:
- Click any node to open a side panel with a one-sentence definition and one sentence on how it differs from a coding club specifically
- Hovering an edge highlights it and enlarges its label
- Click-drag to reposition nodes; scroll wheel to zoom; click empty canvas to deselect

Default state: Force-directed layout with "Coding Club" pinned at canvas center; all edges visible at load, no node pre-selected

Layout: Force-directed (physics-based), radial tendency around the center node

Legend: Node color key (amber = coding club, blue = related context) shown as a fixed corner box

Canvas size: Responsive width, 500px height, minimum 320px width before controls stack vertically

Implementation: vis-network with a JSON node/edge dataset; side panel is an absolutely-positioned div updated via vis-network's `selectNode` event listener
```

## References

- [Chapter 1: What Is a Coding Club](../../chapters/01-what-is-a-coding-club/index.md) -- the chapter this MicroSim supports.
- [Hackerspace](https://en.wikipedia.org/wiki/Hackerspace) -- background on maker spaces and shared tool workshops.
- [STEM education](https://en.wikipedia.org/wiki/Science,_technology,_engineering,_and_mathematics) -- the curriculum-wide goal a coding club can help deliver.
- [Computer science education](https://en.wikipedia.org/wiki/Computer_science_education) -- the full field a club teaches a chosen subset of.
- [Digital literacy](https://en.wikipedia.org/wiki/Digital_literacy) -- the outcome a coding club builds toward.
- [Extracurricular activity](https://en.wikipedia.org/wiki/Extracurricular_activity) -- the broad category a coding club belongs to.
