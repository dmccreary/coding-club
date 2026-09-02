---
title: "Bias and Privacy Risk Sorter"
description: "Eight scenarios, four bins, and one distinction that is easy to state and hard to apply."
image: sims/bias-privacy-risk-sorter/bias-privacy-risk-sorter.png
status: built
library: p5.js
bloom_level: Evaluate (L5)
---

# Bias and Privacy Risk Sorter

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Bias and Privacy Risk Sorter MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

One distinction, easy to state and hard to apply:

> **A bias risk is about the answers the tool gives.** Who gets recommended
> what, and whether that pattern tracks something it should not.
>
> **A privacy risk is about the data the tool holds.** What it keeps, where it
> sends it, and for how long.

They are independent. A tool can be scrupulous about data and still produce
skewed recommendations. A tool can recommend perfectly and still ship a
family's home address to somebody else's server to translate a one-line
reminder.

**Two of the eight are Neither, on purpose.** A sorter where everything turns
out to be a risk teaches suspicion rather than judgement, and a club leader who
cannot recognise a low-risk use will block the scheduling agent that would have
saved them four hours a term. Scenario 3 and scenario 7 are the shape of a use
that is genuinely fine, and being able to say so confidently is part of the
skill.

**Scenario 8 is Both, and the reason matters.** The two problems need separate
fixes: deleting the log does not correct the recommendations, and correcting
the recommendations does not empty the log. "We fixed it" after doing one of
those is the failure this scenario exists to prevent.

The hardest one is scenario 1 — a matching agent using neighbourhood lines
nobody asked it to use. No data leaked, nobody wrote that rule, and the
neighbourhood is standing in for something the club would never have used
directly. That is what a bias risk usually looks like: a correlation the tool
found on its own.

## How to Use

- Read the scenario card and ask the two questions: **is the problem in the
  answers, or in the data?**
- **Drag the card** into one of the four bins. Say your reason out loud before
  you let go.
- Read the justification, then press **Next scenario**.
- Score yourself across all eight. Getting the two Neither cards right matters
  as much as spotting the risks.

## Lesson Plan

**Bloom level:** Evaluate (L5) -- *classify*

**Learning objective:** Given a short scenario describing an AI tool's
behaviour, the learner classifies it as an AI bias risk, an AI data privacy
risk, both, or neither, and justifies the classification.

**Before the sim (5 min).** Ask for a one-sentence definition of each. Most
people can define privacy and reach for "unfair" for bias, which is true and
not yet usable.

**With the sim (20 min).** Do all eight as a group, with somebody justifying
out loud before each drop. Scenarios 3 and 7 will get over-classified as risks,
and that over-caution is worth naming.

**After the sim (30 min).** Run the same two questions against an AI tool the
club is actually considering. Read its terms for the privacy half and ask the
vendor about the bias half — and note which of those two questions they can
answer.

**Check for understanding.** Ask: "A tool stores nothing at all. Is it free of
bias risk?" No — storing nothing is a complete answer to the privacy question
and no answer at all to the bias one. The two are independent, which is the
whole point of having four bins rather than a risk score.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/bias-privacy-risk-sorter/main.html" width="100%" height="562" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md).

```text
Type: microsim
**sim-id:** bias-privacy-risk-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Give a learner practice classifying realistic club scenarios as a bias risk, a privacy risk, both, or neither, reinforcing the distinction between the two concepts just defined.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: classify

Learning objective: Given a short scenario describing an AI tool's behavior, the learner classifies it as an AI bias risk, an AI data privacy risk, both, or neither, and justifies the classification.

Canvas layout:
- Left (400px): current scenario card with its full text
- Right (200px): four drop zones labeled "Bias Risk," "Privacy Risk," "Both," "Neither"

Visual elements:
- A drag-and-drop scenario card showing one scenario at a time
- Four labeled drop zones the card can be dragged into

Scenario set (8 cards, cycling):
1. "A matching agent pairs mentors and students along neighborhood lines nobody asked it to use." -- Bias Risk
2. "A code review tool's terms allow it to keep and reuse submitted student code indefinitely." -- Privacy Risk
3. "A scheduling agent proposes a Tuesday/Thursday slot after checking three mentors' availability." -- Neither
4. "A tutoring chatbot logs and stores every question a student ever asks, tied to their full name, with no stated deletion policy." -- Privacy Risk
5. "A challenge-card generator, when asked for 'more advanced' cards, disproportionately suggests them to students with certain last names in its own uncorrected pattern." -- Bias Risk
6. "A translation tool sends the full text of a family's home address to an external server just to translate a one-line reminder." -- Privacy Risk
7. "A grant-writing agent drafts a paragraph using only the bullet points a leader typed in, stored nowhere after the session ends." -- Neither
8. "A mentor-coaching agent's suggestions consistently under-recommend advanced material to students from one specific zip code, and also stores that zip code permanently in an external log." -- Both

Interactive controls:
- Drag-and-drop scenario card into one of the four zones
- Button: "Check Answer" -- reveals whether the placement was correct and a one-sentence justification
- Button: "Next Scenario" -- cycles to the next card

Default parameters: Scenario 1 shown first; no zone pre-selected

Implementation notes: p5.js canvas with mouse-drag interaction for the scenario card and rectangular drop-zone hit-testing; each scenario's correct classification and justification text stored in a lookup array indexed by scenario number.
```

## References

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md) -- the chapter this MicroSim supports.
- [Saving Student Data Decision Tool](../saving-student-data-decision-tool/index.md) -- the privacy half, applied field by field.
- [AI Agent Loop Explorer](../ai-agent-loop-explorer/index.md) -- the review stage that catches some of these before they land.
- [Generic vs AI Challenge Card](../generic-vs-ai-challenge-card/index.md) -- what a well-scoped AI customisation looks like.
- [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias) -- including proxy variables like the neighbourhood in scenario 1.
- [Information privacy](https://en.wikipedia.org/wiki/Information_privacy) -- the other half.
