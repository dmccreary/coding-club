---
title: "Interest Survey Results"
description: "47 survey responses grouped by age range and interest level -- enough to decide whether a club is worth starting, and for whom."
image: sims/interest-survey-results/interest-survey-results.png
status: built
library: Chart.js
bloom_level: Analyze (L4)
---

# Interest Survey Results

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Interest Survey Results MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Forty-seven people answered. That number on its own tells a founder nothing --
it is the same whether the interest is concentrated in one age band or smeared
across four.

Grouping is what makes it decision-ready. The 9-11 bar carries 14 definite
responses out of that group's 23, which is a real cohort: enough students to fill
a session and narrow enough that one curriculum fits them. The 15-18 bar has 2
definite responses, which is not a club, it is two individuals who would need
their own track.

Click **Not interested** in the legend to hide it. The remaining bars show only
people who might come, and the 9-11 concentration gets starker still.

The judgement this chart supports is not "should we start a club" but "which age
range do we start it for" -- and those are different questions with different
answers.

## How to Use

- **Hover any segment** for its exact count and share of that age range's total.
- **Click a legend entry** to toggle that series off across all four bars.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *interpret*

**Learning objective:** Given a set of grouped survey results, the learner
interprets whether there is enough concentrated interest, in which age range, to
justify starting a club.

**Before the sim (5 min).** Write "47 people said yes" on the board and ask
whether that is enough to start a club. It is not answerable, which is the point.

**With the sim (10 min).** Read each bar's total aloud, then its definite count.
Ask which single age range you would build the first term around, and what you
would say to the 15-18 respondents.

**After the sim (15 min).** Run the same grouping on a real survey the club has,
or on a mock set, and write the one-sentence recommendation it supports.

**Check for understanding.** Ask: "Two age ranges each have 9 definite responses.
What else would you want to know before choosing?" Group total, session capacity,
and mentor availability -- the chart informs the decision, it does not make it.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/interest-survey-results/main.html" width="100%" height="522" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 5: Gauging Interest and Holding Your First Meeting](../../chapters/05-gauging-interest-first-meeting/index.md).

```text
Type: chart
**sim-id:** interest-survey-results<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Show how raw survey responses get grouped by age range and interest level, turning a stack of paper forms into a decision-ready picture.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: interpret

Learning objective: Given a set of grouped survey results, the learner interprets whether there is enough concentrated interest, in which age range, to justify starting a club.

Chart type: Stacked bar chart

X-axis: Age range (6-8, 9-11, 12-14, 15-18)
Y-axis: Number of survey responses

Data series (stacked within each age-range bar):
- "Definitely would attend" (dark amber, #F5A623): 6-8: 4, 9-11: 14, 12-14: 9, 15-18: 2
- "Might attend" (light blue, #4A90D9): 6-8: 3, 9-11: 6, 12-14: 5, 15-18: 4
- "Not interested" (gray, #B0B0B0): 6-8: 2, 9-11: 3, 12-14: 4, 15-18: 3

Interactivity requirement (satisfied): hovering any bar segment shows the exact count and percentage of that age range's total responses; clicking a legend entry toggles that series on/off across all bars

Title: "47 Survey Responses by Age Range and Interest Level"
Legend: Position top-right, matches the three series colors above

Annotations: A callout arrow pointing at the 9-11 age-range bar reading "Clearest concentration of definite interest -- 14 of 23 total 9-11 responses"

Key insight the learner should be able to state after interacting: the 9-11 age range has both the most responses and the highest proportion of "definitely would attend," making it the strongest starting cohort even though every age range shows some interest.

Implementation: Chart.js stacked bar chart with a custom tooltip callback showing count and percentage
```

## References

- [Chapter 5: Gauging Interest and Holding Your First Meeting](../../chapters/05-gauging-interest-first-meeting/index.md) -- the chapter this MicroSim supports.
- [Should You Start This Club?](../club-feasibility-decision-path/index.md) -- the gate this chart feeds.
- [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology) -- sampling and question design.
- [Bar chart](https://en.wikipedia.org/wiki/Bar_chart) -- why stacking shows composition rather than just totals.
- [Market segmentation](https://en.wikipedia.org/wiki/Market_segmentation) -- the general idea behind grouping before deciding.
