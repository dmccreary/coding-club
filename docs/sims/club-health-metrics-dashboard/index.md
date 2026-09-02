---
title: "Club Health Metrics Dashboard"
description: "Four health metrics across three years, and the one line moving the wrong way while the others celebrate."
image: sims/club-health-metrics-dashboard/club-health-metrics-dashboard.png
status: built
library: Chart.js
bloom_level: Evaluate (L5)
---

# Club Health Metrics Dashboard

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the Club Health Metrics Dashboard MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Three lines rise. One falls. That is the entire finding, and it is easy to miss
because the three that rise are the ones clubs celebrate.

Enrollment nearly triples. The waitlist goes from nothing to substantial.
Attendance holds steady around 90%. By every metric a founder would put in an
annual report, Year 3 is the best year the club has had.

**Mentor retention falls from 70% to 55% in that same year.**

The metrics are not independent, which is what makes this an early warning rather
than a coincidence. Rapid enrollment growth and a lengthening waitlist are exactly
the conditions that burn mentors out -- more students per mentor, more pressure to
add sessions, more people to say no to. The good news is producing the bad news.

Turn off every series except mentor retention to see the trend without the
reassurance around it. Then turn enrollment back on and notice that the steepest
enrollment growth and the steepest retention drop are the same year.

## How to Use

- **Hover any point** for its value.
- **Toggle each metric** with the checkboxes or the legend.
- All four are indexed to 0-100 so different units share one axis -- compare each
  line's <em>shape</em> over time, not its height against the others.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *assess*

**Learning objective:** Given three years of club health metrics, the learner
assesses whether the club's overall trajectory is sustainable or shows an early
warning sign.

**Before the sim (5 min).** Show only the enrollment line and ask how the club is
doing. The answer will be enthusiastic.

**With the sim (15 min).** Add the other three one at a time, saving mentor
retention for last. Then ask the real question: is this club's Year 3 growth
sustainable, and what would Year 4 look like if nothing changes?

**After the sim (15 min).** Pick the club's own four health metrics and sketch
three years of them, honestly. Identify which one would be the first to bend.

**Check for understanding.** Ask: "Enrollment is up 55% and the waitlist is full.
Is that good?" It depends entirely on whether mentor supply kept pace -- and
recognising that a growth number is not self-evidently good is the assessment this
objective is after.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/club-health-metrics-dashboard/main.html" width="100%" height="542" scrolling="no"></iframe>
```

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

## References

- [Chapter 35: Training Mentors and Building a Club That Outlasts You](../../chapters/35-training-mentors-and-succession/index.md) -- the chapter this MicroSim supports.
- [Attendance and Enrollment Trend Explorer](../attendance-enrollment-trend-explorer/index.md) -- the same divergence idea at semester resolution.
- [Mentor Development Pipeline](../mentor-development-pipeline/index.md) -- what a club does about falling mentor retention.
- [Leading and lagging indicators](https://en.wikipedia.org/wiki/Economic_indicator) -- why some metrics warn and others confirm.
- [Burnout](https://en.wikipedia.org/wiki/Occupational_burnout) -- the mechanism connecting growth to the falling line.
