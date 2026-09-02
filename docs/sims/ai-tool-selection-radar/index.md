---
title: AI Tool Selection Radar
description: Three vendors on four criteria at once -- and a ranking that changes depending on which criterion your club puts first.
image: sims/ai-tool-selection-radar/ai-tool-selection-radar.png
status: built
library: Chart.js
bloom_level: Evaluate (L5)
---

# AI Tool Selection Radar

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the AI Tool Selection Radar MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

No vendor wins. That is the finding, and a radar chart is the fastest way to see
it: three shapes, none containing the others.

**Vendor A** has the best cost fit and the worst privacy -- it trains on submitted
data by default. **Vendor B** is the privacy choice with a contractual no-training
guarantee, and its output is merely serviceable. **Vendor C** produces the best
drafts and is priced for organisations rather than clubs.

The dropdown is the part that carries the objective. Choose a priority and the
ranked list re-sorts, and a *different vendor wins each time*. That is not a flaw
in the data; it is what a genuine trade-off looks like.

Which means the club cannot compare vendors until it has said what it cares about
most. A club handling student data has effectively already chosen: privacy is not
a criterion to be traded against cost. A club drafting only public newsletters has
much more room.

## How to Use

- **Hover any point** for the exact score.
- **Toggle a vendor** with its checkbox to compare just two.
- **Choose a priority criterion** and the ranked list below re-sorts, with a
  one-line reason for each vendor's score.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *justify*

**Learning objective:** Given a radar comparison of three AI tool vendors scored
against four selection criteria, the learner justifies which vendor best fits a
stated club priority.

**Before the sim (5 min).** Ask the group to name the best AI tool they know. Then
ask what "best" meant in that answer. Usually output quality, unexamined.

**With the sim (15 min).** Cycle the dropdown through all four criteria and note
that the winner changes three times. Then ask the real question: which criterion
should *this* club put first, and why.

**After the sim (15 min).** Score two vendors the club is actually considering on
the same four axes, and write a one-paragraph justification for the choice.

**Check for understanding.** Ask: "Your club will use this tool on messages that
mention students by name. Which vendor, and why is cost not the deciding factor?"
Vendor B -- and being able to say that privacy is a constraint rather than a
criterion to trade off is the justification this objective wants.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ai-tool-selection-radar/main.html" width="100%" height="562" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: chart
**sim-id:** ai-tool-selection-radar<br/>
**Library:** Chart.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/Digital-Transformation-with-AI-Spring-2026/tree/main/docs/sims/ai-strategy-assessment

Purpose: Let a learner compare three candidate AI vendors across the same selection criteria at once, to practice weighing cost, privacy, output quality, and language support the way AI agent vendor comparison requires.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: justify

Learning objective: Given a radar comparison of three AI tool vendors scored against four selection criteria, the learner justifies which vendor best fits a stated club priority.

Chart type: Radar (spider) chart

Axes (criteria, scored 1-5): Cost Fit, Data Privacy, Output Quality, Language Support

Data series:
1. Vendor A (blue): Cost Fit 5, Data Privacy 2, Output Quality 4, Language Support 3
2. Vendor B (green): Cost Fit 3, Data Privacy 5, Output Quality 3, Language Support 4
3. Vendor C (amber): Cost Fit 2, Data Privacy 3, Output Quality 5, Language Support 2

Title: "Three AI Vendors, Four Selection Criteria"
Legend: Position top-right, one entry per vendor

Interactive features:
- Hover any axis point to see the exact score and a one-sentence reason for that score
- Toggle checkboxes to show or hide individual vendors on the chart
- Dropdown: "Which criterion matters most to your club?" -- selecting a criterion bolds that axis and re-sorts a small ranked list below the chart showing which vendor wins if that criterion is weighted highest

Annotation: A callout noting "No vendor wins on every axis -- the right choice depends on which criterion your club weighs most."

Implementation: Chart.js radar chart with a custom tooltip callback for the per-axis reason text and a small JavaScript re-ranking function tied to the priority dropdown.
```

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [The AI Agent Rollout Pipeline](../ai-agent-rollout-pipeline/index.md) -- what happens after the vendor is chosen.
- [Human-in-the-Loop Review Workflow](../human-in-the-loop-review-workflow/index.md) -- the guardrails that partly compensate for a weaker vendor.
- [Radar chart](https://en.wikipedia.org/wiki/Radar_chart) -- what the shape does and does not show.
- [Multiple-criteria decision analysis](https://en.wikipedia.org/wiki/Multiple-criteria_decision_analysis) -- why a weighted priority is needed to rank at all.
- [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) -- a fifth criterion worth adding for a real decision.
