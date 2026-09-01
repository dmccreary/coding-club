---
title: Student Data Privacy Principles
description: Given one of the four student data privacy practices, the learner explains the specific risk that practice reduces.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Student Data Privacy Principles



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: diagram
**sim-id:** student-data-privacy-principles<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/information-systems/tree/main/docs/sims/privacy-regulatory-landscape

Purpose: Show the four privacy practices feeding into one protected outcome, so a mentor can click any practice and see the specific risk it closes.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given one of the four student data privacy practices, the learner explains the specific risk that practice reduces.

Steps (hub-and-spoke diagram):
1. Center node: "Protected Student Data" -- click reveals "The smaller, already-reviewed pile of data a club decided to save, now handled so only the right people can see it."
2. Spoke: "Limit Access" -- click reveals "Only mentors and leaders who need the data get a login, not the entire volunteer roster."
3. Spoke: "No Public Links" -- click reveals "A sharing link set to 'anyone with the link' can spread far beyond the two or three people it was meant for."
4. Spoke: "Use Club Accounts" -- click reveals "Data stored in a personal account leaves the club the moment that mentor does."
5. Spoke: "Ask Before Posting" -- click reveals "A name or photo posted publicly without asking undoes every other privacy practice in one step."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for the central "Protected Student Data" node; four distinct accent colors for the surrounding practice nodes.

Implementation: Mermaid flowchart (`graph TD` with the center node linked to each spoke) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
