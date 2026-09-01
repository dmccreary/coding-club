---
title: Do You Actually Need This Data Field?
description: Given a proposed data field, the learner justifies whether the club should collect it by walking through a minimal-data-first decision path.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Do You Actually Need This Data Field?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md).

```text
Type: microsim
**sim-id:** saving-student-data-decision-tool<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/data-science-course/tree/main/docs/sims/data-selection-playground-microsim

Purpose: Let a club leader test a proposed data field (such as "home address," "email," or "allergy") against a minimal-data-first decision path before deciding whether to collect it at all.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: justify

Learning objective: Given a proposed data field, the learner justifies whether the club should collect it by walking through a minimal-data-first decision path.

Instructional Rationale: An Evaluate-level objective needs the learner to weigh a real field against explicit criteria and reach a justified decision, not watch a pre-scripted animation -- a step-through decision path with the criteria visible at each stage keeps the reasoning, not the visuals, in front of the learner.

Canvas layout:
- Left (450px): the current field name plus two stacked decision questions, each answered Yes/No
- Right (150px): a running verdict panel reading "Collect it," "Don't collect it," or "Collect a safer substitute"

Data Visibility Requirements:
  Stage 1: Show the field name, typed or chosen from a dropdown of examples (name, email, home address, allergy, birthdate, photo, parent employer)
  Stage 2: Show Question 1 -- "Does a specific, current club task need this?" -- with Yes/No buttons
  Stage 3: If Yes, show Question 2 -- "Is there a less identifying version that would still work?" (for example, birth year instead of a full birthdate)
  Stage 4: If a safer substitute exists, show it as the recommended field instead of the original
  Final: Show the verdict plus a one-line reason, such as "Don't collect -- no current club task needs a home address"

Interactive controls:
- Dropdown: choose an example field, or select "custom" to type one
- Button pair per question: "Yes" / "No"
- Button: "Try Another Field"

Default parameters: Field = "Home Address"; walking the default through the two questions ends in "Don't collect it -- no current task needs it."

Implementation notes: p5.js canvas with createSelect for the field dropdown and createButton for each Yes/No pair; store the seven example fields and their correct verdicts in a lookup table so the tool gives consistent, correct feedback regardless of the path taken; a text input allows a custom field name, in which case the tool asks both questions without a pre-loaded answer and lets the learner reason it through independently.
```

## Related Resources

- [Chapter 24: Tracking Student Data and Managing Club Communication](../../chapters/24-student-data-and-communication/index.md)
