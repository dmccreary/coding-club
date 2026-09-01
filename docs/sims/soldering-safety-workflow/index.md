---
title: Soldering Safety Workflow
description: Rehearse the before, during, and after habits of soldering in the order a mentor actually performs them.
image: sims/soldering-safety-workflow/soldering-safety-workflow.png
status: built
library: Mermaid
bloom_level: Apply (L3)
---

# Soldering Safety Workflow

<iframe src="main.html" width="100%" height="762" scrolling="no"></iframe>

[Run the Soldering Safety Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Every club has a soldering safety list. Almost none have it in the right order,
and order is what actually keeps people safe -- a rule you remember after the
burn is not a safety rule.

The three bands are the whole point. **Before** is the setup you do once: iron in
its stand, air moving. **During** is the pair of habits repeated on every single
joint, and the second one -- returning the iron to its stand between joints -- is
the one that gets skipped when a student is impatient and a mentor is looking
elsewhere. **After** is the part nobody rehearses: a joint stays hot enough to
burn for several seconds, and a switched-off iron takes several minutes to cool
enough to pack away.

A mentor who has walked this sequence once, in order, can run a soldering table.
A mentor who has only read the five rules cannot.

## How to Use

- **Hover a step** to preview it; **click** to pin its full explanation.
- The three bands group the steps by when they happen: setup, every joint, and
  afterwards.

## Lesson Plan

**Bloom level:** Apply (L3) -- *demonstrate*

**Learning objective:** Given a soldering task about to start, the learner
sequences the correct safety steps before, during, and after making a joint.

**Before the sim (5 min).** Ask the group to list soldering safety rules. You will
get a set, unordered, heavy on "don't touch the hot end." Write them up.

**With the sim (10 min).** Walk the three bands. Ask which of the group's rules
land in which band, and which bands came up empty -- it is almost always
**After**, which is where the burns happen.

**After the sim (15 min).** Have each mentor narrate the full sequence aloud while
miming it at a cold bench, before any iron is switched on. Narrating it is the
demonstration the objective asks for.

**Check for understanding.** Ask: "You have just finished a joint and want to
check the wire is held. What are the next two things you do, in order?" Iron back
in the stand, then wait ten seconds -- in that order.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/soldering-safety-workflow/main.html" width="100%" height="762" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: workflow
**sim-id:** soldering-safety-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Sequence the before/during/after habits so a first-time mentor can rehearse the order, not just the individual rules.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a soldering task about to start, the learner sequences the correct safety steps before, during, and after making a joint.

Steps: 1. "Warm up iron in stand, ventilate area" (Before); 2. "Iron touches only the joint" (During); 3. "Return iron to stand immediately" (During); 4. "Wait 10 seconds before touching joint" (After); 5. "Iron off and cooled before storage" (After)

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation, e.g. `click step2 call showInfo("during-iron-touches-joint")`.

Visual style: Top-to-bottom Mermaid flowchart with three color-coded swimlane bands (Before/During/After) behind the step boxes

Implementation: Mermaid flowchart rendered inside a small wrapper page at the sim-id path, with a JavaScript `showInfo()` callback that populates an infobox beneath the diagram on any node click
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Soldering](https://en.wikipedia.org/wiki/Soldering) -- what is happening at the joint.
- [Solder](https://en.wikipedia.org/wiki/Solder) -- lead-free versus leaded, and why ventilation matters either way.
- [Fume hood](https://en.wikipedia.org/wiki/Fume_hood) -- the industrial version of the ventilation step.
- [Personal protective equipment](https://en.wikipedia.org/wiki/Personal_protective_equipment) -- eye protection, which belongs in the Before band for any club that can supply it.
