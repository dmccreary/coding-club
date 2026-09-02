---
title: "Prompt Refinement Step-Through"
description: "Add audience, tone, length, and the must-include detail one at a time, and watch the edits left drop to zero."
image: sims/prompt-refinement-step-through/prompt-refinement-step-through.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Prompt Refinement Step-Through

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Prompt Refinement Step-Through MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

One goal, four criteria, and a draft that gets closer to sendable each time
you add one.

The measure at the bottom is the honest one: **how many edits are left before
this could go out.** A vague prompt does not produce a *bad* draft. It produces
a long, formal, dateless one that takes ten minutes to cut down — and "the AI
wrote it in three seconds" stops being impressive once you count the ten
minutes.

What each criterion actually does:

- **Audience** fixes the vocabulary. "Dear Members" becomes "Hi families".
- **Tone** stops the corporate-formal default, which is what a model reaches
  for when nothing tells it otherwise.
- **Length** is the least glamorous and most reliable. Nothing else cuts as
  much editing per word of prompt.
- **Must-include detail** changes the draft most and is left out most, because
  it feels like the part the AI is supposed to know.

That last one is worth dwelling on. Tick **Tone** without **Must-include
detail** and watch what happens: the draft becomes friendly and starts
inventing things — a mention of pizza that nobody asked for. **Tone without
facts is where fabrication starts**, because a model asked to sound warm and
given nothing warm to say will supply something.

The reverse combination is instructive too. **Detail without tone** produces
accurate text that reads like a parking notice: every fact correct, and nobody
finishes reading it.

## How to Use

- Start with everything unticked. Read the vague draft and count what you would
  have to change.
- Tick the criteria **one at a time, in any order**, and watch the edit count.
- Try **Tone alone** — the draft gets friendly and starts making things up.
- Try **Must-include detail alone** — every fact correct, unreadable.
- Tick all four. Zero edits, and the prompt is still one sentence.

## Lesson Plan

**Bloom level:** Apply (L3) -- *apply*

**Learning objective:** Given a vague prompt, the learner applies the
audience-tone-length-detail criteria to revise it into a specific prompt and
compares the resulting drafts.

**Before the sim (5 min).** Have somebody type "write a reminder" into a real
AI tool and read out what comes back. It will be about three paragraphs long
and contain no date.

**With the sim (15 min).** Work through the criteria, then run the two
instructive failures — tone alone, detail alone. The invented pizza is the
moment people stop thinking of vagueness as merely inefficient.

**After the sim (25 min).** Take three real club messages that need writing and
have everyone draft a four-criteria prompt for each. Then run them for real and
count the edits.

**Check for understanding.** Ask: "Which criterion would you drop if you could
only use three?" Tone is the usual answer and it is defensible — a slightly
formal message with the right facts is still sendable. Dropping must-include
detail is not, because that is the one that stops the model inventing.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/prompt-refinement-step-through/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

## References

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md) -- the chapter this MicroSim supports.
- [AI Agent Loop Explorer](../ai-agent-loop-explorer/index.md) -- what the review stage has to do when the prompt was vague.
- [AI Content Drafting Pipeline](../ai-content-drafting-pipeline/index.md) -- where a good prompt sits in the wider process.
- [Prompt engineering](https://en.wikipedia.org/wiki/Prompt_engineering) -- the general practice these four criteria are a starter kit for.
