---
title: Progress Dashboard Explorer
description: Given filter controls, the learner examines a dashboard to identify which badge is currently the biggest bottleneck for a cohort.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Progress Dashboard Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
