---
title: "AI Agent Loop Explorer"
description: "Input, draft, human review, send -- stepped through with the real text, and one confidently wrong detail in every draft."
image: sims/ai-agent-loop-explorer/ai-agent-loop-explorer.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# AI Agent Loop Explorer

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the AI Agent Loop Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four stages: input, draft, human review, send or reject. The sim steps
through them with the actual text at each one, because the argument only works
with real content in front of you.

**Every draft here contains exactly one wrong detail, and it always reads
perfectly.** A start time carried over from last term's calendar entry. A room
number with its digits transposed. A $20 fee that does not exist, invented
because most clubs have one. None of these drafts is badly written — they are
fluent, correctly formatted, in the club's voice, and wrong in one place.

That is the failure mode worth teaching. A badly written draft gets caught by
anybody. A fluent one gets skimmed and sent, and the wrongness only surfaces
when thirty families arrive at a locked library half an hour early.

**Press "What if no one reviewed this?"** on each scenario. The parent-chatbot
one is the worst of the three: a family that could not pay the invented $20
quietly does not reply, and nobody ever finds out why. That is a failure with no
error message attached.

**Stage 3 is the one people want to remove**, because it is the only stage that
is not automatable and therefore the only one that still costs somebody's time.
It is also the only stage that catches a fluent mistake. Those two facts are
the same fact.

Reject works the same way as send — it is the same stage saying no.

## How to Use

- Press **Next** to move through the four stages. Read the draft at stage 2
  carefully before moving on; the wrong detail is findable.
- At stage 3 the correction is shown on its own, so it is clear how small it
  is.
- Press **What if no one reviewed this?** at any stage for the unreviewed
  version and what it costs.
- Switch **Scenario** for two more, including the one where the agent invents a
  fee out of nothing.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given a scenario, the learner explains what happens at
each stage of an AI agent's loop and why the human-review stage cannot be
skipped.

**Before the sim (5 min).** Read the registration reminder draft aloud without
saying anything is wrong with it, and ask whether it is ready to send. Most
rooms say yes.

**With the sim (15 min).** Walk all three scenarios. The parent chatbot is the
one to end on, because the invented fee is not a typo — the agent produced a
fact that was never in its input, and that is a different and harder problem
than a wrong number.

**After the sim (20 min).** Write the club's actual review rule: who reviews
what, before what goes out. "Anything with a time, a place, or a price in it"
is a good first draft of that rule.

**Check for understanding.** Ask: "The agent has been right twenty times in a
row. Can you stop reviewing?" No — the drafts were always fluent, so twenty
correct ones tell you nothing about the twenty-first. Being right often is what
makes an unreviewed agent dangerous rather than safe.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ai-agent-loop-explorer/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

## References

- [Chapter 32: AI Agents for Registration, Scheduling, and Communication](../../chapters/32-ai-agents-registration-scheduling/index.md) -- the chapter this MicroSim supports.
- [Prompt Refinement Step-Through](../prompt-refinement-step-through/index.md) -- reducing how much the review stage has to fix.
- [Coding Help Agent Handoff](../coding-help-agent-handoff/index.md) -- another loop where the human stage is the point.
- [Bias and Privacy Risk Sorter](../bias-privacy-risk-sorter/index.md) -- the other two things to check before adopting an agent.
- [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) -- the pattern stage 3 belongs to.
- [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) -- the invented $20 fee, named.
