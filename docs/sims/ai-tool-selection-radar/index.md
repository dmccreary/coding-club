---
title: Comparing AI Tools Against Selection Criteria
description: Given a radar comparison of three AI tool vendors scored against four selection criteria, the learner justifies which vendor best fits a stated club priority.
status: scaffold
library: Chart.js
bloom_level: Evaluate (L5)
---

# Comparing AI Tools Against Selection Criteria



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: chart
**sim-id:** ai-tool-selection-radar<br/>
**Library:** Chart.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/Digital-Transformation-with-AI-Spring-2026/tree/main/docs/sims/ai-strategy-assessment

Purpose: Let a learner compare three candidate AI vendors across the same selection criteria at once, to practice weighing cost, privacy, output quality, and language support the way AI agent vendor comparison requires.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: justify

Learning objective: Given a radar comparison of three AI tool vendors scored against four selection criteria, the learner justifies which vendor best fits a stated club priority.

Chart type: Radar (spider) chart

Axes (criteria, scored 1-5): Cost Fit, Data Privacy, Output Quality, Language Support

Data series:
1. Vendor A (blue): Cost Fit 5, Data Privacy 2, Output Quality 4, Language Support 3
2. Vendor B (green): Cost Fit 3, Data Privacy 5, Output Quality 3, Language Support 4
3. Vendor C (amber): Cost Fit 2, Data Privacy 3, Output Quality 5, Language Support 2

Title: "Three AI Vendors, Four Selection Criteria"
Legend: Position top-right, one entry per vendor

Interactive features:
- Hover any axis point to see the exact score and a one-sentence reason for that score
- Toggle checkboxes to show or hide individual vendors on the chart
- Dropdown: "Which criterion matters most to your club?" -- selecting a criterion bolds that axis and re-sorts a small ranked list below the chart showing which vendor wins if that criterion is weighted highest

Annotation: A callout noting "No vendor wins on every axis -- the right choice depends on which criterion your club weighs most."

Implementation: Chart.js radar chart with a custom tooltip callback for the per-axis reason text and a small JavaScript re-ranking function tied to the priority dropdown.
```

## Related Resources

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md)
