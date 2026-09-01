---
title: Circuit Troubleshooting Decision Workflow
description: Given a non-working LED circuit, the learner examines the four-step troubleshooting order (power, continuity, orientation, component) to isolate the most likely fault first.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Circuit Troubleshooting Decision Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md).

```text
Type: workflow
**sim-id:** circuit-troubleshooting-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Let a learner click through the four-step troubleshooting order from the worked example above and see what each check actually rules out.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a non-working LED circuit, the learner examines the four-step troubleshooting order (power, continuity, orientation, component) to isolate the most likely fault first.

Steps: 1. "Check Power — is voltage actually present at the rail?"; 2. "Check Continuity — is there an unbroken path wire by wire?"; 3. "Check Orientation — is every polarized part installed the right way?"; 4. "Test the Component — swap in a known-good part to confirm or rule it out"

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation and a concrete example, e.g. `click step1 call showInfo("check-power")`.

Visual style: Vertical Mermaid flowchart, steps 1 through 4 in sequence, with a "Fault Found" end node branching off each step to represent stopping the checklist early once a cause is confirmed.

Implementation: Mermaid flowchart rendered in a wrapper page at the sim-id path, with a JavaScript `showInfo()` callback populating an infobox beneath the diagram on any node click; each infobox reuses the worked-example wording from the chapter (power check, continuity check, orientation check, component check).
```

## Related Resources

- [Chapter 18: Robots, USB Basics, and Electronics Workshop Skills](../../chapters/18-robots-usb-electronics-workshop/index.md)
