---
title: Prompt Refinement Step-Through
description: Given a vague prompt, the learner applies the audience-tone-length-detail criteria to revise it into a specific prompt and compares the resulting drafts.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Prompt Refinement Step-Through



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: microsim
**sim-id:** prompt-refinement-step-through<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/conversational-ai/tree/main/docs/sims/response-generation-architecture

Purpose: Let a learner compare a vague prompt's draft against a specific prompt's draft for the same underlying goal, to see concretely how added detail reduces the editing a human reviewer has to do afterward.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply

Learning objective: Given a vague prompt, the learner applies the audience-tone-length-detail criteria to revise it into a specific prompt and compares the resulting drafts.

Instructional Rationale: This is an Apply-level objective, so the sim uses a step-through comparison with the actual prompt text and actual draft text visible at every stage, rather than an animation -- the learner needs to see and manipulate real wording to practice the skill, not watch a demonstration.

Canvas layout:
- Left (450px): the current prompt text and the draft it produced
- Right (150px): a checklist of the four specificity criteria (Audience, Tone, Length, Must-Include Detail), each checked off as the learner adds it

Data Visibility Requirements:
  Stage 1: Show the vague prompt "write a reminder" and its generic three-paragraph, no-date, formal-tone draft
  Stage 2: Show the learner adding one criterion at a time (via checkboxes) -- Audience: "for club families"; Tone: "friendly, two sentences"; Must-Include: "Tuesday 4pm, need one more mentor"; Signature: "as Tuesday Coding Club"
  Stage 3: Show the draft regenerating after each checkbox is added, growing closer to the usable final version
  Final: Show the vague-prompt draft and the fully-specific-prompt draft side by side, with the specific version's shorter edit distance to "ready to send" called out

Interactive controls:
- Four checkboxes, one per specificity criterion, each toggling that detail into the prompt and regenerating the draft
- Button: "Reset to Vague Prompt"

Default parameters: All four checkboxes start unchecked, showing the vague draft; checking all four reconstructs the specific-prompt worked example from the text above

Implementation notes: p5.js canvas with createCheckbox for each criterion; each combination of checked criteria maps to a pre-written draft snippet in a lookup table, so the regenerated draft always reads naturally regardless of which criteria are checked in which order.
```

## Related Resources

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md)
