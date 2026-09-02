---
title: "Anonymized Attendance Chart"
description: "Read a semester's attendance trend -- including the break-week dip and the year-over-year comparison -- from data holding no names at all."
image: sims/anonymized-attendance-chart/anonymized-attendance-chart.png
status: built
library: Chart.js
bloom_level: Understand (L2)
---

# Anonymized Attendance Chart

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Anonymized Attendance Chart MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

This chart is an argument, not just a report. The argument is that aggregate
data is *sufficient* for the questions a club leader actually asks about
attendance.

Everything is here: the trend across sixteen weeks, the sharp dip at week 9,
the recovery immediately after, and -- once you tick the prior-semester series --
whether this year is running ahead of last. A leader can act on all of it.

And there are no names in the underlying data. Not hidden, not access-controlled:
absent. There is no drill-down from a bar to a student because the numbers behind
the bar are counts, not lists.

The week 9 dip is worth pausing on with a group. It looks alarming until you know
it is the school break week, which is the other lesson: a number needs its
context before it needs an explanation.

## How to Use

- **Hover a bar** for the exact count and week number.
- **Show prior semester** adds a second series for year-over-year comparison; the
  legend toggles it too.

## Lesson Plan

**Bloom level:** Understand (L2) -- *interpret*

**Learning objective:** Given an anonymized attendance chart, the learner
interprets the weekly trend without any access to individually identifiable data.

**Before the sim (5 min).** Ask what a club needs attendance data *for*. The
answers -- is it growing, did something go wrong, do we need more mentors -- are
all answerable from totals.

**With the sim (10 min).** Read the trend. Ask what happened at week 9 before
revealing it. Then turn on the prior semester and ask whether this year is
healthier.

**After the sim (10 min).** List every attendance question the club has asked in
the last year and mark which ones need a name to answer. Most will not.

**Check for understanding.** Ask: "A mentor wants to know which student missed the
most sessions. Can this chart answer that?" No -- and whether the club *should*
answer it, and from where, is the discussion worth having.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/anonymized-attendance-chart/main.html" width="100%" height="522" scrolling="no"></iframe>
```

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

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Student Data Privacy Principles](../student-data-privacy-principles/index.md) -- the four practices protecting whatever data is kept.
- [Guardian Consent Collection Workflow](../consent-collection-workflow/index.md) -- what may be collected in the first place.
- [Data anonymization](https://en.wikipedia.org/wiki/Data_anonymization) -- aggregation as a privacy technique.
- [Aggregate data](https://en.wikipedia.org/wiki/Aggregate_data) -- what is preserved and what is lost.
