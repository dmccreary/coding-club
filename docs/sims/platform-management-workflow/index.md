---
title: Platform Management Workflow
description: Given a newly purchased laptop's platform, the learner differentiates the configuration and ongoing management path it will follow among Chromebook, Windows, and macOS management.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Platform Management Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md)
