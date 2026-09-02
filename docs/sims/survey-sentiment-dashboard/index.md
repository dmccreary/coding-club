---
title: "Survey Themes and Sentiment Dashboard"
description: "Free-text survey answers grouped into themes and scored for tone -- revealing a pattern an average rating would bury."
image: sims/survey-sentiment-dashboard/survey-sentiment-dashboard.png
status: built
library: Chart.js
bloom_level: Analyze (L4)
---

# Survey Themes and Sentiment Dashboard

<iframe src="main.html" width="100%" height="482" scrolling="no"></iframe>

[Run the Survey Themes and Sentiment Dashboard MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Twenty-one free-text responses, three themes, and one that needs acting on.

The chart encodes two things at once. **Bar length** is how many families raised
the theme. **Bar colour** is the tone of what they said. Reading either alone
misleads: mentor praise is a strong positive but only six responses; start-time
concerns are eleven responses and negative.

That combination -- largest *and* negative -- is what makes start time the club's
next action, and it is precisely what a single average satisfaction score would
have destroyed. Six enthusiastic responses and eleven unhappy ones average out to
something unremarkable, and the club would have concluded that families were
broadly content.

The third theme is worth noting as a contrast. A request for advanced cards is
neutral, not negative -- it is a suggestion from families who are engaged enough
to want more. It belongs on a roadmap, not on an urgent list.

## How to Use

- **Hover any bar** for the exact response count.
- Colour is sentiment, not another quantity: red negative, green positive, blue
  neutral.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *examine*

**Learning objective:** Given a themed, sentiment-scored summary of survey
responses, the learner examines it to identify which theme most needs the club's
attention.

**Before the sim (5 min).** Show a satisfaction score -- "families rated us 3.8
out of 5" -- and ask what the club should do about it. Nothing actionable follows
from it, which is the gap.

**With the sim (10 min).** Read length and colour separately, then together. Ask
which theme to act on and why the largest positive theme is not it.

**After the sim (15 min).** Take a batch of real free-text responses and group
them into three or four themes by hand, marking each one's tone. Doing it manually
first is what makes the automated version legible.

**Check for understanding.** Ask: "A theme has 3 responses and strongly negative
sentiment. Act on it or not?" It depends on what the three say -- a safety concern
from three families outranks a preference from eleven, and knowing that the chart
does not decide for you is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/survey-sentiment-dashboard/main.html" width="100%" height="482" scrolling="no"></iframe>
```

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

## References

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md) -- the chapter this MicroSim supports.
- [Feedback Loop Cycle](../feedback-loop-cycle/index.md) -- what has to happen after a theme is identified.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- why AI-produced themes still get checked by a person.
- [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) -- how tone is scored and where it fails.
- [Thematic analysis](https://en.wikipedia.org/wiki/Thematic_analysis) -- the qualitative method being automated.
