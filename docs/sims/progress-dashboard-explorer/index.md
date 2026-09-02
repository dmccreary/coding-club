---
title: Progress Dashboard Explorer
description: Filter a badge-completion dashboard by cohort and watch the bottleneck move -- with initials only, no names anywhere.
image: sims/progress-dashboard-explorer/progress-dashboard-explorer.png
status: built
library: Chart.js
bloom_level: Analyze (L4)
---

# Progress Dashboard Explorer

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the Progress Dashboard Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A dashboard earns its place by answering a question. This one answers *where is
the cohort stuck*, and the interesting part is that the answer changes when you
change the cohort.

Filter to the Tuesday group and the bottleneck is **Sensors**. Filter to Thursday
and it is **Debugging**. The two groups have taken different routes through the
badge ladder, which is a signal about what each session has actually covered --
not about how capable the students are. A mentor seeing that knows exactly what
to plan next, and it is different for each group.

Look at the whole club and a third answer appears: **Functions**, which neither
group individually flags. Aggregating can hide a cohort-specific problem, so the
filter is not a convenience feature -- it is the analysis.

The underlying mock data holds **initials only**. Everything above is answerable
without a single student's name, which is the same minimal-identifiability habit
the rest of this chapter argues for.

## How to Use

- **Cohort** filters to one group or shows the whole club.
- **Sort** reorders the bars by completion count, or restores the badge ladder
  order.
- **Reset filters** returns to the unfiltered, highest-first view.
- The panel names the current bottleneck for whatever filter is applied.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given filter controls, the learner examines a dashboard to
identify which badge is currently the biggest bottleneck for a cohort.

**Before the sim (5 min).** Ask a mentor which badge their group is stuck on. Most
have an impression; few have a number.

**With the sim (15 min).** Read the unfiltered view, then switch cohorts. Ask why
the bottleneck moved, and steer the group away from "Thursday students are
weaker" toward "Thursday has not covered debugging yet."

**After the sim (15 min).** Build the same table for the club's real badges -- with
initials only -- and identify the actual bottleneck.

**Check for understanding.** Ask: "The whole-club view says Functions, but neither
group's view does. How is that possible?" Because each group is stuck somewhere
else, and the aggregate averages both away. Spotting that is the examination this
objective wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/progress-dashboard-explorer/main.html" width="100%" height="542" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: microsim
**sim-id:** progress-dashboard-explorer<br/>
**Library:** Chart.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/infographics/tree/main/docs/sims/dashboard-builder

Purpose: Let a mentor explore a filterable dashboard summarizing badge completion across a mock cohort, using only initials rather than full names, to model both the tool and the minimal-identifiability habit from earlier in this chapter.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given filter controls, the learner examines a dashboard to identify which badge is currently the biggest bottleneck for a cohort.

Canvas layout:
- Left (500px): a bar chart of badge-completion counts across the sample cohort
- Right (150px): filter controls and a summary readout

Interactive controls:
- Dropdown: filter by cohort (Tuesday Group, Thursday Group, All)
- Dropdown: sort bars by completion count (highest first, lowest first)
- Button: "Reset Filters"

Data Visibility Requirements:
  Stage 1: Show the unfiltered bar chart -- one bar per badge, height equal to number of students (identified only by initials in the underlying mock data) who earned it
  Stage 2: Show the same chart re-rendered after choosing a cohort filter, with bar heights updated to that cohort's numbers only
  Final: Clicking a bar shows a small list of the initials that have earned that badge, modeling how a real dashboard would summarize without ever displaying a full name

Default parameters: Cohort = "All"; sample data includes 6 badges across a mock cohort of 14 students, with one badge intentionally set low (6 of 14) to illustrate a visible bottleneck

Implementation notes: Chart.js bar chart rebuilt on every filter change from a small in-memory mock dataset; initials only, never full names, even in sample data, to reinforce the chapter's minimal-identifiability principle.
```

## References

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md) -- the chapter this MicroSim supports.
- [Student Progress Tracking Cycle](../progress-tracking-cycle/index.md) -- the habit that keeps this data current.
- [Anonymized Attendance Chart](../anonymized-attendance-chart/index.md) -- the same minimal-identifiability principle applied to attendance.
- [Simpson's paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox) -- why an aggregate can contradict every group inside it.
- [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)) -- what makes one useful rather than decorative.
