---
title: Bookmark Folder Structure
description: Given a new bookmark a student wants to save, the learner classifies whether it belongs in the shared class folder, a personal student folder, or the browser's general bookmark bar.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Bookmark Folder Structure



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md).

```text
Type: diagram
**sim-id:** bookmark-folder-structure<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a club laptop's bookmark bar splits into a shared class folder and a student's own personal folder, so a mentor or student can see exactly where a new bookmark belongs.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a new bookmark a student wants to save, the learner classifies whether it belongs in the shared class folder, a personal student folder, or the browser's general bookmark bar.

Steps (tree diagram, top to bottom):
1. Root: "Browser Bookmark Bar" -- click reveals the Browser Bookmark Management definition above.
2. Branch: "Class Bookmark Folder" -- click reveals the Class Bookmark Folder definition above.
3a. Leaf under Class Bookmark Folder: "Coding Platform Link" -- click reveals "A link every student needs, such as the club's coding platform, belongs in the shared class folder so a mentor's one update reaches every laptop."
3b. Leaf under Class Bookmark Folder: "Club Glossary Link" -- click reveals "Reference material used by the whole club, like the glossary, is shared through the class folder rather than duplicated in each student's personal space."
4. Branch: "Student Bookmark Folder" -- click reveals the Student Bookmark Folder definition above.
5a. Leaf under Student Bookmark Folder: "My In-Progress Project" -- click reveals "A link specific to one student's own work belongs in that student's personal folder, where it survives independent of what the class folder changes to."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Gray for the root bookmark bar, blue for the class folder and its shared leaves, green for the student folder and its personal leaf.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
```

## Related Resources

- [Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md)
