---
title: Soldering Safety Workflow
description: Given a soldering task about to start, the learner sequences the correct safety steps before, during, and after making a joint.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Soldering Safety Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
