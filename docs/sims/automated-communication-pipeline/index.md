---
title: Automated Communication Pipeline
description: Given a trigger condition, the learner differentiates whether it should route through SMS notification or newsletter automation.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Automated Communication Pipeline



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md).

```text
Type: workflow
**sim-id:** automated-communication-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a single automated trigger routes to either SMS notification or newsletter automation depending on urgency, so a mentor can see why the same reminder system produces two very different-feeling messages.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a trigger condition, the learner differentiates whether it should route through SMS notification or newsletter automation.

Steps (flowchart with a decision diamond):
1. Start: "Trigger Event Occurs" -- click reveals "A rule fires automatically -- a session is three days away, a closure is announced, or a new month begins -- with no mentor manually deciding to send anything."
2. Decision: "Time-Sensitive?" -- click reveals "Time-sensitive means a family needs to see the message within hours, not days, to act on it."
3a. Branch "Yes" leads to "Send SMS Notification" -- click reveals "A short text delivered directly to a phone, typically read within minutes."
3b. Branch "No" leads to "Queue for Newsletter Automation" -- click reveals "Added to the next scheduled digest instead of sent immediately, since it can safely wait."
4. Process (from 3b): "Newsletter Sent on Schedule" -- click reveals "A templated digest goes out on a fixed day each month, automatically pulling in every queued item."
5. End (both branches converge): "Family Informed" -- click reveals "Both paths end with the family seeing the information -- the only difference is how urgently it needed to arrive."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for the start node, purple for the decision diamond, amber for the SMS branch, blue for the newsletter branch, green for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## Related Resources

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md)
