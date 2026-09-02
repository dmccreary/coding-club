---
title: Mentor Recruiting Channel Effectiveness
description: Five recruiting channels compared on both volume and quality, because the channel that produces the most candidates produces the fewest mentors.
image: sims/mentor-recruiting-channel-effectiveness/mentor-recruiting-channel-effectiveness.png
status: built
library: Chart.js
bloom_level: Analyze (L4)
---

# Mentor Recruiting Channel Effectiveness

<iframe src="main.html" width="100%" height="542" scrolling="no"></iframe>

[Run the Mentor Recruiting Channel Effectiveness MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

The channel that produces the most candidates produces the fewest mentors.

An engineering meetup post generates 7 candidates in a three-week window -- more
than double anything else -- and 43% of them pass the qualification trial. That
is 3 mentors and 4 interviews that went nowhere. The founder's personal network
generates 3 candidates and all 3 pass, because the founder already screened them
informally before they applied.

Neither is better. They fail differently. Personal networks and parent referrals
produce almost-certain mentors and <em>do not scale</em> -- a founder's contacts
run out, and 3 plus 2 is not a growth strategy. The meetup post scales and costs
interview time.

The practical reading: a club needing two more mentors should work its referrals.
A club needing six has to post publicly and accept the screening load that comes
with it. Choosing deliberately is the point; most clubs default to personal
outreach until it silently stops working.

## How to Use

- **Hover any bar** for the exact figure.
- The left axis counts candidates; the right axis is the percentage who pass.
  Read the pair within each channel rather than comparing the two colours' heights
  across channels.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *compare*

**Learning objective:** Given candidate counts and qualification rates across five
mentor recruiting channels, the learner compares them to select an effective mix
of channels for a specific recruiting need.

**Before the sim (5 min).** Ask how the club found its current mentors. Almost
always the founder knew them, which is the constraint this chart exposes.

**With the sim (10 min).** Rank by candidate count, then by pass rate. The
rankings nearly invert. Ask what number actually matters -- candidates times pass
rate, which is mentors.

**After the sim (15 min).** Set a real target ("we need four more mentors by
March") and design a channel mix that reaches it, including the interview hours
it implies.

**Check for understanding.** Ask: "Why not use only the founder's network, since
everyone passes?" Because it produces three people and then stops -- and naming
the scaling limit rather than the pass rate is the comparison this objective
wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/mentor-recruiting-channel-effectiveness/main.html" width="100%" height="542" scrolling="no"></iframe>
```

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

## References

- [Chapter 34: Establishing an Oversight Board and Inventory System](../../chapters/34-oversight-board-and-inventory/index.md) -- the chapter this MicroSim supports.
- [Mentor Development Pipeline](../mentor-development-pipeline/index.md) -- what happens to a candidate after they pass.
- [Mentor-Gated Registration Flow](../mentor-gated-registration-flow/index.md) -- why mentor count caps student capacity.
- [Recruitment](https://en.wikipedia.org/wiki/Recruitment) -- sourcing channels and yield in general.
- [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel) -- candidates in, qualified people out.
