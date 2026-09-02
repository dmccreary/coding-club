---
title: Fundraising Channel Yield Comparison
description: Five fundraising channels compared on the two axes that actually decide the choice: dollars raised and volunteer hours spent.
image: sims/fundraising-channel-yield-comparison/fundraising-channel-yield-comparison.png
status: built
library: Chart.js
bloom_level: Analyze (L4)
---

# Fundraising Channel Yield Comparison

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the Fundraising Channel Yield Comparison MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Every fundraising guide ranks channels by how much they raise. That ranking is
useless to a club with four volunteer hours a month.

The two bars here have to be read together. **In-kind donation** is the standout:
750 dollars of value for roughly 2 hours, because it is one conversation and a
collection. **Corporate sponsorship** is close behind -- 500 dollars a year for
about 3 hours, mostly one relationship-building conversation.

**Fundraising events** are the trap. They raise a respectable 420 dollars, which
looks fine in isolation, and cost 15 hours -- more than the other four channels
combined. An event can still be the right call when the club wants the community
visibility, or when volunteers actively want to run one. It is the wrong call when
someone picked it because it felt like what fundraising means.

Note the crowdfunding figure is *net*: 128 dollars on a 150 dollar goal, after
platform fees.

## How to Use

- **Hover any bar** for the exact figure.
- The left axis is dollars and the right axis is hours -- the two bars in each
  group are measured on different scales, so compare shapes within a channel
  rather than heights across the two colours.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *compare*

**Learning objective:** Given typical yield and effort figures for five
fundraising channels, the learner compares them to select an appropriate channel
for a specific funding need and time budget.

**Before the sim (5 min).** Ask the group how they would raise 500 dollars. Almost
everyone proposes an event. Note it.

**With the sim (10 min).** Read the yield bars alone and rank the channels. Then
add the hours bars and re-rank. The ranking changes, which is the lesson.

**After the sim (15 min).** Establish the club's real volunteer-hours budget for a
term, then pick the channel or channels that fit inside it.

**Check for understanding.** Ask: "You need 400 dollars and have 5 volunteer hours.
What do you do?" Sponsorship or an in-kind ask -- and explaining why the event is
excluded despite raising enough is the comparison this objective wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/fundraising-channel-yield-comparison/main.html" width="100%" height="542" scrolling="no"></iframe>
```

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

## References

- [Chapter 30: Budgeting, Fundraising, and Grant Writing](../../chapters/30-budgeting-fundraising-grants/index.md) -- the chapter this MicroSim supports.
- [Grant Writing and Tracking Workflow](../grant-writing-tracking-workflow/index.md) -- the sixth channel, with its own timeline.
- [Club Financial Operations Cycle](../club-financial-operations-cycle/index.md) -- what happens to the money once raised.
- [Fundraising](https://en.wikipedia.org/wiki/Fundraising) -- channel types and their typical economics.
- [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost) -- the reason the hours bar belongs on the chart at all.
- [In-kind contribution](https://en.wikipedia.org/wiki/In_kind) -- why donated goods count as raised value.
