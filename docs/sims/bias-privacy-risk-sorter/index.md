---
title: Bias Risk, Privacy Risk, or Neither?
description: Given a short scenario describing an AI tool's behavior, the learner classifies it as an AI bias risk, an AI data privacy risk, both, or neither, and justifies the classification.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Bias Risk, Privacy Risk, or Neither?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 33: AI-Customized Curriculum and Rolling Out New Agents](../../chapters/33-ai-customized-curriculum-rollout/index.md)
