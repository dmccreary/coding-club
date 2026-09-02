---
title: Attendance and Enrollment Trend Explorer
description: Four semesters of enrollment, attendance and retention on one chart -- and the semester where they disagree.
image: sims/attendance-enrollment-trend-explorer/attendance-enrollment-trend-explorer.png
status: built
library: Chart.js
bloom_level: Analyze (L4)
---

# Attendance and Enrollment Trend Explorer

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Attendance and Enrollment Trend Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three metrics that usually move together, and one semester where they do not.

Through Fall 2025 everything rises: enrollment climbs from 12 to 24, attendance
holds near 90%, retention hovers around 80%. Then Spring 2026 splits them.
Enrollment is flat at 22. Retention rises to its best-ever 91%. And attendance
collapses from 90% to 65%.

That combination is diagnostic. Students are signing up and staying signed up --
that is what retention measures -- but they are not coming. So this is not a
recruitment problem and not a retention problem. Something about the sessions
themselves, or when they are held, changed.

A club watching only enrollment would see a plateau. A club watching only
retention would call Spring 2026 its best semester on record. Watching all three
is what makes the real problem visible, and this is why the chart puts counts and
rates on two different axes rather than picking one.

## How to Use

- **Hover any bar or point** for its exact value.
- The left axis is a student count; the right axis is a percentage. Compare each
  series against its own axis, not against the others' heights.
- Retention has no value for Fall 2024 because there is no prior semester to
  retain students from.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a multi-semester chart of enrollment, attendance,
and retention, the learner examines the data to determine whether a dip reflects
an attendance problem, a retention problem, or both.

**Before the sim (5 min).** Ask which single number best tells you whether a club
is healthy. Whatever answer you get, this chart is about to complicate it.

**With the sim (15 min).** Read the first three semesters, where everything
agrees. Then read Spring 2026 and ask what changed. Push for the distinction:
signing up, staying enrolled, and turning up are three different behaviours.

**After the sim (15 min).** List three possible causes of an attendance-only drop
-- a schedule clash, a venue change, a curriculum that got too hard -- and say
what evidence would distinguish them.

**Check for understanding.** Ask: "Retention hit 91%, the highest ever. Is that
good news?" It is real, and it is not the story. Being able to hold both is the
examination this objective wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/attendance-enrollment-trend-explorer/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

## References

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md) -- the chapter this MicroSim supports.
- [Anonymized Attendance Chart](../anonymized-attendance-chart/index.md) -- the week-level view behind the attendance rate.
- [Club Health Metrics Dashboard](../club-health-metrics-dashboard/index.md) -- the same divergence idea over three years.
- [Retention rate](https://en.wikipedia.org/wiki/Retention_rate) -- what it does and does not measure.
- [Confounding](https://en.wikipedia.org/wiki/Confounding) -- why one metric alone can mislead.
