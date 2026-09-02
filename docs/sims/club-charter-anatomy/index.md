---
title: "Anatomy of a Club Charter"
description: "A club charter is one document made of five distinct sections. See what each section governs and how they differ."
image: sims/club-charter-anatomy/club-charter-anatomy.png
status: built
library: vis-network
bloom_level: Understand (L2)
---

# Anatomy of a Club Charter

<iframe src="main.html" width="100%" height="702" scrolling="no"></iframe>

[Run the Anatomy of a Club Charter MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Charter, values, code of conduct, bylaws, decision-making process, roles and
responsibilities. Read as a list, those six terms sound like six words for
roughly the same thing. They are not.

This map shows the charter as a container and the other five as the distinct
sections inside it. Each connection states what that section governs in five
words: values state *what we believe*, the code of conduct states *how we
behave*, bylaws state *our operating rules*, the decision-making process states
*how we decide*, and roles state *who does what*.

Clicking a section gives you the definition plus a concrete example from a real
club, because the difference between "values" and "code of conduct" only becomes
obvious once you see one of each written down.

## How to Use

- **Click any blue circle** to read what that section governs and see an example.
- **Hover any connecting line** to enlarge its label.
- **Drag a circle** to reposition it; the amber Club Charter node stays pinned at
  the centre.
- Use the **navigation buttons** to zoom and pan, or open the sim fullscreen to
  use the mouse wheel.
- **Reset** restores the original layout.

## Lesson Plan

**Bloom level:** Understand (L2) -- *differentiate*

**Learning objective:** Given the term "club charter," the learner identifies the
five sections it typically contains and states what each one governs.

**Before the sim (5 min).** Write the five section names on the board in random
order and ask the group to sort them into "what we believe," "how we behave," and
"how we run." Most groups disagree, which is the point.

**With the sim (10 min).** Click each section in turn. Read the definition, then
the example. The examples are chosen so the boundary between neighbouring
sections is visible: "everyone gets keyboard time" is a value, "no laughing at
anyone else's code" is conduct, "meetings are the first and third Saturday" is a
bylaw.

**After the sim (15 min).** In small groups, draft one line for each of the five
sections for a club the students would actually want to run. Compare drafts and
argue about any line that landed in the wrong section.

**Check for understanding.** Give the group a sentence such as "Changing this
charter requires a two-thirds vote" and ask which section it belongs in. Bylaws
is the answer, and being able to say why -- because it is an operating rule about
the organisation, not a belief or a behaviour -- is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-charter-anatomy/main.html" width="100%" height="702" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 3: Writing Your Club Charter and Safety Policies](../../chapters/03-club-charter-and-safety/index.md).

```text
Type: graph-model
**sim-id:** club-charter-anatomy<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Show a club charter as a container document made of five distinct sections, so a reader can see how "charter," "values," "code of conduct," "bylaws," "decision-making process," and "roles and responsibilities" relate instead of treating them as loosely related synonyms.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: differentiate

Learning objective: Given the term "club charter," the learner identifies the five sections it typically contains and states what each one governs.

Node types:
1. Center node -- "Club Charter" (amber circle, larger than the rest, #F5A623)
2. Section nodes (five sky-blue circles, #4A90D9): "Club Values," "Code of Conduct," "Club Bylaws," "Decision-Making Process," "Roles and Responsibilities"

Edge labels:
- Club Charter -- Club Values: "states what we believe"
- Club Charter -- Code of Conduct: "states how we behave"
- Club Charter -- Club Bylaws: "states our operating rules"
- Club Charter -- Decision-Making Process: "states how we decide"
- Club Charter -- Roles and Responsibilities: "states who does what"

Interactive features:
- Click any node to open a side panel with a one-sentence definition and a one-sentence real-world example
- Hover an edge to highlight it and enlarge its label
- Click-drag to reposition nodes; scroll wheel to zoom; click empty canvas to deselect

Default state: Force-directed layout, "Club Charter" pinned at center, no node pre-selected

Layout: Force-directed (physics-based), radial tendency around the center node

Legend: Fixed corner box showing node color key (amber = charter, blue = section)

Canvas size: Responsive width, 500px height, minimum 320px width before controls stack vertically

Implementation: vis-network with a JSON node/edge dataset; side panel is an absolutely-positioned div updated via vis-network's `selectNode` event listener
```

## References

- [Chapter 3: Writing Your Club Charter and Safety Policies](../../chapters/03-club-charter-and-safety/index.md) -- the chapter this MicroSim supports.
- [Handling a Conflict or Complaint](../conflict-resolution-workflow/index.md) -- the workflow the code of conduct section triggers.
- [By-law](https://en.wikipedia.org/wiki/By-law) -- how bylaws function in an organisation generally.
- [Code of conduct](https://en.wikipedia.org/wiki/Code_of_conduct) -- background and common structure.
- [Charter](https://en.wikipedia.org/wiki/Charter) -- the founding-document tradition a club charter borrows from.
