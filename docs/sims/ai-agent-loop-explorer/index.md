---
title: AI Agent Loop Explorer
description: Given a scenario, the learner explains what happens at each stage of an AI agent's loop and why the human-review stage cannot be skipped.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# AI Agent Loop Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md).

```text
Type: microsim
**sim-id:** ai-agent-loop-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-agent-anatomy

Purpose: Let a learner step through the four-stage loop every AI agent in this chapter follows -- input, draft, human review, and send or reject -- using the registration-reminder scenario from the worked example above as the default walkthrough.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a scenario, the learner explains what happens at each stage of an AI agent's loop and why the human-review stage cannot be skipped.

Instructional Rationale: This is an Understand-level objective, so the sim uses a step-through with concrete data at each stage rather than a continuous animation -- a learner needs to see the actual draft text and the actual correction made, not watch a generic process play out with no real content to reason about.

Canvas layout:
- Left (450px): the current stage's content -- the input goal, the agent's draft, the reviewer's markup, or the final outcome
- Right (150px): a four-step progress tracker (Input -> Draft -> Human Review -> Send/Reject) with the current step highlighted

Data Visibility Requirements:
  Stage 1 (Input): Show the plain-language goal typed in -- "Draft Tuesday's session reminder"
  Stage 2 (Draft): Show the agent's full draft text, including the incorrect start time it carried over from an old calendar entry
  Stage 3 (Human Review): Show the reviewer's markup -- the corrected start time circled, with a short note "fixed time, kept the welcome-back line"
  Stage 4 (Send/Reject): Show the final, corrected message as it actually went out, side by side with the original draft so the one changed detail is visible

Interactive controls:
- Dropdown: choose a scenario (Registration Reminder, Room-Change Announcement, Parent Chatbot Reply) -- each loads its own four-stage content
- Button pair: "Next" / "Previous" to move through the four stages
- Button: "What if no one reviewed this?" -- reveals a short callout showing the uncorrected draft (wrong start time) as it would have looked if sent without review

Default parameters: Scenario = "Registration Reminder"; starts at Stage 1

Implementation notes: p5.js canvas with createSelect for the scenario dropdown and createButton for Next/Previous and the "what if" button; each of the three scenarios' four-stage content lives in a small lookup object so switching scenarios mid-walkthrough resets cleanly to Stage 1.
```

## Related Resources

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md)
