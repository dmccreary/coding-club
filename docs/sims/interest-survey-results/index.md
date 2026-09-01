---
title: Interest Survey Results
description: Given a set of grouped survey results, the learner interprets whether there is enough concentrated interest, in which age range, to justify starting a club.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Interest Survey Results



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 5: Gauging Interest and Holding Your First Meeting](../../chapters/05-gauging-interest-first-meeting/index.md)
