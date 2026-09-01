---
title: Club Health Metrics Dashboard
description: Given three years of club health metrics, the learner assesses whether the club's overall trajectory is sustainable or shows an early warning sign.
status: scaffold
library: Chart.js
bloom_level: Evaluate (L5)
---

# Club Health Metrics Dashboard



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md).

```text
Type: chart
**sim-id:** club-health-metrics-dashboard<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Let a founder or board see four club health metrics plotted across three years at once, so a genuine decline in one metric is visible immediately instead of being masked by growth in the others.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess

Learning objective: Given three years of club health metrics, the learner assesses whether the club's overall trajectory is sustainable or shows an early warning sign.

Chart type: Multi-line chart, one line per metric, each toggleable independently

X-axis: Year (Year 1, Year 2, Year 3)
Y-axis: Value, normalized to a 0-100 index so four different units can share one axis

Data series:

1. Enrollment (blue line, students indexed to 0-100): Year 1: 30, Year 2: 55, Year 3: 85
2. Mentor Retention Rate (gold line, percent): Year 1: 60, Year 2: 70, Year 3: 55
3. Waitlist Length (green line, students indexed to 0-100): Year 1: 0, Year 2: 25, Year 3: 70
4. Average Session Attendance (purple line, percent of registered): Year 1: 90, Year 2: 88, Year 3: 91

Title: "Three Years of Club Health Metrics"
Legend: Top-right, one toggle checkbox per series

Interactive features:

- Hover any point to see its exact underlying value and one sentence of context pulled from this chapter
- Click a legend entry to show or hide that line
- A fixed callout appears near the Year 3 point on the Mentor Retention line: "Enrollment keeps climbing, but retention just dropped 15 points -- growth is masking a mentor problem."

Instructional Rationale: This is an Evaluate-level objective, so the chart deliberately includes one metric moving the opposite direction from the others, forcing the learner to look past the headline growth number and assess the full picture before judging the club healthy.

Implementation: Chart.js multi-line chart with a dataset array (one object per metric), legend toggling handled through Chart.js's built-in legend click callback, and a fixed annotation or manually positioned callout marking the Year 3 retention drop.
```

## Related Resources

- [Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md)
