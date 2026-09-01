---
title: Guardian Consent Collection Workflow
description: Given the steps of a club's consent process, the learner sequences them correctly and identifies which step must precede any data collection.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Guardian Consent Collection Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: workflow
**sim-id:** consent-collection-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/health-education/tree/main/docs/sims/consent-requirements-explorer

Purpose: Trace the sequence from drafting a data-collection notice through filing a signed consent form, so a mentor can see exactly where "collection begins" sits relative to "consent obtained."

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: sequence

Learning objective: Given the steps of a club's consent process, the learner sequences them correctly and identifies which step must precede any data collection.

Steps (flowchart with a decision diamond):
1. Start: "Draft Data-Collection Notice" -- click reveals "Lists exactly what will be collected and exactly what will not, in plain language."
2. Process: "Guardian Reviews Notice" -- click reveals "Sent before the student's first session, giving the family time to ask questions."
3. Decision: "Guardian Signs?" -- click reveals "A club may only collect data for a student whose guardian has signed; declining is always an option."
4a. Branch "Yes" leads to "Data Collection Begins" -- click reveals "Only the fields listed in the notice are collected, starting from this point forward."
4b. Branch "No" leads to "No Data Collected" -- click reveals "The student may still participate in sessions; the club simply keeps no data-collection-dependent records for them."
5. Both branches converge on End: "Signed or Declined Form Filed" -- click reveals "The form itself is kept on file for as long as the data it covers is retained, per the club's retention policy."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for the start and process nodes, purple for the decision diamond, green for the "Yes" branch, amber for the "No" branch, gray for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
