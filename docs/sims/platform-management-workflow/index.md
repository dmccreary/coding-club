---
title: Platform Management Workflow
description: See where a new laptop's operating system sends it, and what managing each of the three platforms actually involves.
image: sims/platform-management-workflow/platform-management-workflow.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Platform Management Workflow

<iframe src="main.html" width="100%" height="682" scrolling="no"></iframe>

[Run the Platform Management Workflow MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Most clubs do not choose a platform. They accumulate one -- a grant buys
Chromebooks, a company donates Windows laptops, a parent contributes an old
MacBook -- and end up managing three fleets without ever deciding to.

The diagram makes the shape of that cost visible. Everything before the diamond
is shared: the same accounts, tools, and restrictions go on every machine
regardless of platform. Everything after it is not. Each branch is a different
console, a different enrolment process, and a different set of things that can go
wrong.

The branches converge again at **Ready for Student Login**, which is the honest
part: all three paths get you to the same place. The difference is how much work
it takes and how many consoles a volunteer has to learn. That is the argument for
standardising on one platform, and this diagram is the cheapest way to make it.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- The grey nodes are the start and the shared end state; the amber node is the
  configuration every machine gets regardless of platform.
- Each coloured branch is one platform's management path.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a newly purchased laptop's platform, the learner
differentiates the configuration and ongoing management path it will follow among
Chromebook, Windows, and macOS management.

**Before the sim (5 min).** Count the club's laptops by operating system. Most
groups discover they have two or three kinds and had never counted.

**With the sim (10 min).** Walk the shared configuration step first and note how
much is common. Then take each branch and ask what console it requires and who in
the club knows how to use it.

**After the sim (15 min).** Ask the group to decide, on the evidence, whether they
would standardise on one platform for the next purchase -- and to write down what
they would do with the machines they already have.

**Check for understanding.** Ask: "A parent donates two MacBooks. What does the
club now need that it did not need yesterday?" Naming the MDM enrolment and the
extra console is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/platform-management-workflow/main.html" width="100%" height="682" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md).

```text
Type: workflow
**sim-id:** platform-management-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how one newly arrived laptop moves through initial configuration and then splits into one of three platform-specific management paths, so a mentor can see where their own fleet's laptops fit.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a newly purchased laptop's platform, the learner differentiates the configuration and ongoing management path it will follow among Chromebook, Windows, and macOS management.

Steps (flowchart with a decision diamond):
1. Start: "New Laptop Arrives" -- click reveals "A laptop as it arrives from a vendor, before any club-specific setup has been applied."
2. Process: "Laptop Configuration" -- click reveals the Laptop Configuration definition above.
3. Decision: "Which Platform?" -- click reveals "The laptop's operating system determines which management path and console it will use for the rest of its service life."
4a. Branch "Chromebook" leads to "Chromebook Management" -- click reveals the Chromebook Management definition above.
4b. Branch "Windows" leads to "Windows Device Management" -- click reveals the Windows Device Management definition above.
4c. Branch "macOS" leads to "MacOS Device Management" -- click reveals the MacOS Device Management definition above.
5. All three branches converge on End: "Ready for Student Login" -- click reveals "Once its platform-specific management is in place, the laptop is ready to receive the student account setup covered next in this chapter."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Gray for the start node, amber for the shared configuration step, purple for the decision diamond, blue/green/orange for the Chromebook/Windows/macOS branches respectively, gray for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
```

## References

- [Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md) -- the chapter this MicroSim supports.
- [Device Lifecycle Workflow](../device-lifecycle-workflow/index.md) -- what happens to the laptop after this diagram ends.
- [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management) -- the general category all three consoles belong to.
- [Chromebook](https://en.wikipedia.org/wiki/Chromebook) -- why the enrolment path is the simplest of the three.
- [Group Policy](https://en.wikipedia.org/wiki/Group_Policy) -- the Windows mechanism behind that branch.
