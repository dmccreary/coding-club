---
title: Anonymized Attendance Chart
description: Given an anonymized attendance chart, the learner interprets the weekly trend without any access to individually identifiable data.
status: scaffold
library: Chart.js
bloom_level: Understand (L2)
---

# Anonymized Attendance Chart



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: chart
**sim-id:** anonymized-attendance-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Chart type: Bar chart

Purpose: Show how weekly attendance can be reported as a fully aggregate number, with hover detail but no names anywhere in the underlying data.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: interpret

Learning objective: Given an anonymized attendance chart, the learner interprets the weekly trend without any access to individually identifiable data.

X-axis: Week number (1 through 16)
Y-axis: Number of students present (count only)

Data series:
1. Current Semester (blue bars): sample values ranging 10-16 students per week across 16 weeks, with a visible dip around week 9 (a school break week) and a recovery afterward
2. Prior Semester (light gray bars, toggle to show/hide): a comparable sample series for year-over-year comparison

Title: "Weekly Attendance -- Aggregate Count Only"
Legend: Position top-right, includes a toggle for the "Prior Semester" series

Interactive features:
- Hover any bar to see the exact count and week number in a tooltip
- Click the legend entry to toggle the "Prior Semester" series on or off
- No drill-down to individual students is possible from this chart, by design

Annotation: A caption below the chart reading "This chart contains no student names -- only weekly totals."

Implementation: Chart.js bar chart with two datasets and legend-click toggling enabled.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
