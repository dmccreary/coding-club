---
title: Attendance and Enrollment Trend Explorer
description: Given a multi-semester chart of enrollment, attendance, and retention, the learner examines the data to determine whether a dip reflects an attendance problem, a retention problem, or both.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Attendance and Enrollment Trend Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md).

```text
Type: chart
**sim-id:** attendance-enrollment-trend-explorer<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Let a learner explore four semesters of enrollment, attendance rate, and retention rate together, to practice choosing the right series to answer a specific question and to see how the three metrics can diverge.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a multi-semester chart of enrollment, attendance, and retention, the learner examines the data to determine whether a dip reflects an attendance problem, a retention problem, or both.

Chart type: Combo chart -- bars for enrollment count (left y-axis), two lines for attendance rate and retention rate as percentages (right y-axis)

X-axis: Semester (Fall 2024, Spring 2025, Fall 2025, Spring 2026)
Left Y-axis: Total students enrolled (count)
Right Y-axis: Rate (0-100%)

Data series:
1. Enrollment (blue bars): Fall 2024: 12, Spring 2025: 18, Fall 2025: 24, Spring 2026: 22
2. Average Weekly Attendance Rate (green line, %): Fall 2024: 88%, Spring 2025: 85%, Fall 2025: 90%, Spring 2026: 65%
3. Retention Rate (amber line, %, undefined for the first semester shown): Spring 2025: 83%, Fall 2025: 78%, Spring 2026: 91%

Title: "Enrollment, Attendance, and Retention Across Four Semesters"
Legend: Position top-right, each series independently toggleable by clicking its legend entry

Interactive features:
- Hover any bar or point to see the exact value, the semester, and a one-line definition of that specific metric
- Click a legend entry to toggle that series on or off, isolating one metric at a time
- Toggle button: "Highlight Divergence" -- when Spring 2026 is visible, calls out that attendance rate dropped sharply (65%) while retention rate stayed strong (91%), prompting the learner to reason about what that combination implies (a mid-semester attendance disruption among students who nonetheless plan to return, rather than students leaving the club)

Annotations:
- A callout on the Spring 2026 attendance point: "Sharp attendance dip -- but retention stayed high. What changed mid-semester?"

Implementation: Chart.js combo chart (bar + line datasets) with dual y-axes and legend-click toggling enabled.
```

## Related Resources

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md)
