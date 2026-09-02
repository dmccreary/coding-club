---
title: "Bookmark Folder Structure"
description: "Decide where a new bookmark belongs: the shared class folder, a student's personal folder, or neither."
image: sims/bookmark-folder-structure/bookmark-folder-structure.png
status: built
library: Mermaid
bloom_level: Understand (L2)
---

# Bookmark Folder Structure

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Bookmark Folder Structure MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A club laptop's bookmark bar goes feral within a term unless somebody decides
where things go. This tree is that decision, and it only has two branches.

The **class folder** is identical on every laptop. That is its whole value: when
the coding platform changes its URL, a mentor updates one folder and every
machine follows. A link that every student needs belongs here, and duplicating it
into personal folders defeats the point -- now there are twenty copies to update.

The **student folder** is the opposite. It belongs to one person, holds links to
their own in-progress work, and deliberately survives whatever the class folder
changes to. A student's half-finished project link has no business in a shared
folder, where the next sync would wipe it.

Anything that fits neither -- a one-off link a student opened once -- belongs
nowhere, which is the third answer the objective asks learners to be able to
give.

## How to Use

- **Hover a node** to preview it; **click** to pin the definition.
- Blue is shared across the whole fleet; green belongs to one student.

## Lesson Plan

**Bloom level:** Understand (L2) -- *classify*

**Learning objective:** Given a new bookmark a student wants to save, the learner
classifies whether it belongs in the shared class folder, a personal student
folder, or the browser's general bookmark bar.

**Before the sim (5 min).** Open the bookmark bar on a club laptop that has been
in use a while. The clutter makes the case without any argument from you.

**With the sim (10 min).** Walk both branches. At each leaf ask the diagnostic
question: if this link changed tomorrow, how many places would have to be edited?
One, for the class folder; one per student, for anything wrongly duplicated.

**After the sim (10 min).** Read out six links -- the coding platform, a student's
own repository, the glossary, a tutorial someone found once -- and have the group
classify each aloud.

**Check for understanding.** Ask: "A student bookmarks the tutorial they are
following this week. Where does it go?" Personal folder -- and being able to say
why it is not shared is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/bookmark-folder-structure/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

## References

- [Chapter 23: Network, Peripherals, and the Device Lifecycle](../../chapters/23-network-peripherals-device-lifecycle/index.md) -- the chapter this MicroSim supports.
- [Bookmark (digital)](https://en.wikipedia.org/wiki/Bookmark_(digital)) -- how browsers store and sync them.
- [Configuration management](https://en.wikipedia.org/wiki/Configuration_management) -- the general principle behind one shared source of truth.
- [Platform Management Workflow](../platform-management-workflow/index.md) -- how the shared folder gets pushed to every machine.
