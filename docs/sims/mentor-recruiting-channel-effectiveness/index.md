---
title: Mentor Recruiting Channel Effectiveness
description: Given candidate counts and qualification rates across five mentor recruiting channels, the learner compares them to select an effective mix of channels for a specific recruiting need.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Mentor Recruiting Channel Effectiveness



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md).

```text
Type: chart
**sim-id:** mentor-recruiting-channel-effectiveness<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Let a board or founder compare how many mentor candidates each recruiting channel typically produces against what share of those candidates actually pass the qualification trial, so a growing club can choose channels deliberately instead of relying on personal outreach alone.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare

Learning objective: Given candidate counts and qualification rates across five mentor recruiting channels, the learner compares them to select an effective mix of channels for a specific recruiting need.

Chart type: Grouped bar chart (two series per channel)

X-axis: Recruiting channel (Founder's Personal Network, Engineering Meetup Post, Employer Volunteer Program, University CS Club, Parent Referral)

Y-axis (left): Candidates generated in a typical three-week posting window
Y-axis (right, or second bar color): Percentage of those candidates who pass the qualification trial

Data series:
1. Candidates Generated (blue bars): Founder's Personal Network 3; Engineering Meetup Post 7; Employer Volunteer Program 4; University CS Club 4; Parent Referral 2

2. Passed Qualification Trial (gold bars, percent): Founder's Personal Network 100%; Engineering Meetup Post 43%; Employer Volunteer Program 50%; University CS Club 75%; Parent Referral 100%

Title: "Mentor Candidates Generated vs. Qualification Rate by Channel"
Legend: Position top-right, labeling "Candidates Generated" and "Passed Qualification Trial (%)"

Interactive features:
- Hover any bar to see its exact value and a one-sentence description of that channel pulled from this chapter
- Toggle buttons above the chart to show/hide each series independently
- Click a channel's label on the x-axis to highlight both of its bars and dim the rest

Annotations:
- Small callout near the Personal Network bars: "Smallest reach, but every candidate already carries the founder's trust."
- Small callout near the Meetup Post bars: "Largest reach, but the lowest qualification rate -- budget time for more trial sessions."

Implementation: Chart.js grouped bar chart with a dataset array holding both series; hover tooltips configured via Chart.js's built-in tooltip callback to include the one-sentence channel description.
```

## Related Resources

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md)
