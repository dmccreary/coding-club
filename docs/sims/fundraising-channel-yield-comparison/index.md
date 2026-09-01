---
title: Fundraising Channel Yield Comparison
description: Given typical yield and effort figures for five fundraising channels, the learner compares them to select an appropriate channel for a specific funding need and time budget.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Fundraising Channel Yield Comparison



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md).

```text
Type: chart
**sim-id:** fundraising-channel-yield-comparison<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Let a leader compare typical net dollar yield against volunteer hours required across five fundraising channels, to help choose a channel that fits both a funding need and the time a club actually has available.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare

Learning objective: Given typical yield and effort figures for five fundraising channels, the learner compares them to select an appropriate channel for a specific funding need and time budget.

Chart type: Grouped bar chart (two series per channel)

X-axis: Fundraising channel (Community Support Drive, Crowdfunding Campaign, Corporate Sponsorship, In-Kind Donation, Fundraising Event)

Y-axis (left): Typical net dollar yield for a small club
Y-axis (right, or second bar color): Approximate volunteer hours to plan and run it

Data series:
1. Net Yield (blue bars): Community Support Drive $340; Crowdfunding Campaign $128 (after fee, on a $150 goal); Corporate Sponsorship $500/year; In-Kind Donation $750 (one-time value); Fundraising Event $420

2. Volunteer Hours (gold bars): Community Support Drive 4; Crowdfunding Campaign 6; Corporate Sponsorship 3 (mostly one relationship-building conversation); In-Kind Donation 2; Fundraising Event 15

Title: "Typical Yield vs. Volunteer Hours by Fundraising Channel"
Legend: Position top-right, labeling "Net Yield ($)" and "Volunteer Hours"

Interactive features:
- Hover any bar to see its exact value and a one-sentence description of that channel pulled from this chapter
- Toggle buttons above the chart to show/hide each series independently
- Click a channel's label on the x-axis to highlight both of its bars and dim the rest

Annotations:
- Small callout near the Fundraising Event bars: "Highest yield, but also the highest time cost -- plan this one only once you have volunteer hours to spare."
- Small callout near In-Kind Donation: "Highest yield per volunteer hour, but depends on finding a willing donor, not just effort."

Implementation: Chart.js grouped bar chart with a dataset array holding both series; hover tooltips configured via Chart.js's built-in tooltip callback to include the one-sentence channel description.
```

## Related Resources

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md)
