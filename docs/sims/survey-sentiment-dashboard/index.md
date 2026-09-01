---
title: Survey Themes and Sentiment Dashboard
description: Given a themed, sentiment-scored summary of survey responses, the learner examines it to identify which theme most needs the club's attention.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Survey Themes and Sentiment Dashboard



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: chart
**sim-id:** survey-sentiment-dashboard<br/>
**Library:** Chart.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ir-textbook/tree/main/docs/sims/sentiment-scoring-engine

Purpose: Let a learner examine how AI survey analysis groups free-text responses into themes while AI sentiment analysis scores each theme's emotional tone, to see how the two tools together reveal a pattern a single average rating would hide.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a themed, sentiment-scored summary of survey responses, the learner examines it to identify which theme most needs the club's attention.

Chart type: Horizontal bar chart with a color-coded sentiment overlay

X-axis: Number of responses mentioning the theme
Y-axis (categories): Start Time Concerns, Mentor Praise, Request for Advanced Cards

Data series:
1. Response Count (bar length): Start Time Concerns: 11, Mentor Praise: 6, Request for Advanced Cards: 4
2. Sentiment Color (bar fill color, not a separate axis): Start Time Concerns: red (negative), Mentor Praise: green (positive), Request for Advanced Cards: blue (neutral)

Title: "What Families Said -- Themes and Sentiment"
Legend: Color key mapping red/green/blue to negative/positive/neutral sentiment

Interactive features:
- Hover any bar to see the exact response count, the sentiment label, and one anonymized sample phrase from that theme
- Click a bar to open a detail panel listing all sample phrases grouped under that theme, still with no names attached
- Toggle button: "Sort by Response Count" / "Sort by Sentiment Severity" -- re-orders the bars

Annotation: A callout on the Start Time Concerns bar reading "Highest volume and most negative tone -- the pattern the numeric 4.2/5 average alone did not show."

Implementation: Chart.js horizontal bar chart with per-bar background color mapped to sentiment category and a custom tooltip callback showing the sample phrase.
```

## Related Resources

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md)
