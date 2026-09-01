---
title: Automated Communication Pipeline
description: One trigger, two very different-feeling messages: see what decides whether a rule sends a text or queues a newsletter item.
image: sims/automated-communication-pipeline/automated-communication-pipeline.png
status: built
library: Mermaid
bloom_level: Analyze (L4)
---

# Automated Communication Pipeline

<iframe src="main.html" width="100%" height="682" scrolling="no"></iframe>

[Run the Automated Communication Pipeline MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Automation is what stops a volunteer writing the same reminder email fifty-two
times a year. The risk it introduces is different: a system that can send
messages without anyone deciding to will, if you let it, text families about
everything.

The urgency gate is the guard against that. A session three days away, a closure
announced this morning, a new month beginning -- all of these fire the same rule
engine, and the gate sorts them. Anything a family must act on within hours goes
out as a text. Everything else is **queued**, not sent, and swept up by the next
scheduled newsletter.

Queuing is the design decision worth dwelling on. It is what makes the difference
between a club that families stay subscribed to and one they mute. The two paths
converge on the same outcome -- the family knows -- and the only thing that
differed was how urgently it had to arrive.

## How to Use

- **Hover a step** to preview it; **click** to pin the details.
- Follow both branches from the urgency gate to the shared end node.
- Note that the newsletter path has an extra step: queued items wait for a
  scheduled send rather than going out one at a time.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a trigger condition, the learner differentiates
whether it should route through SMS notification or newsletter automation.

**Before the sim (5 min).** Ask how many messages a family gets from the club in a
typical month, and how many they actually read. The gap is what this pipeline
manages.

**With the sim (10 min).** Walk both paths, then propose triggers and route them
aloud: "session cancelled, starts in two hours", "next term's dates published",
"a new mentor joined."

**After the sim (15 min).** List every automatic message the club currently sends
and sort each into one of the two paths. Anything that cannot be justified as
time-sensitive belongs in the newsletter.

**Check for understanding.** Ask: "Why not just text everything? It reaches people
fastest." Because a channel used for everything gets muted, and then it reaches
nobody when it matters.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/automated-communication-pipeline/main.html" width="100%" height="682" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md).

```text
Type: workflow
**sim-id:** automated-communication-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a single automated trigger routes to either SMS notification or newsletter automation depending on urgency, so a mentor can see why the same reminder system produces two very different-feeling messages.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a trigger condition, the learner differentiates whether it should route through SMS notification or newsletter automation.

Steps (flowchart with a decision diamond):
1. Start: "Trigger Event Occurs" -- click reveals "A rule fires automatically -- a session is three days away, a closure is announced, or a new month begins -- with no mentor manually deciding to send anything."
2. Decision: "Time-Sensitive?" -- click reveals "Time-sensitive means a family needs to see the message within hours, not days, to act on it."
3a. Branch "Yes" leads to "Send SMS Notification" -- click reveals "A short text delivered directly to a phone, typically read within minutes."
3b. Branch "No" leads to "Queue for Newsletter Automation" -- click reveals "Added to the next scheduled digest instead of sent immediately, since it can safely wait."
4. Process (from 3b): "Newsletter Sent on Schedule" -- click reveals "A templated digest goes out on a fixed day each month, automatically pulling in every queued item."
5. End (both branches converge): "Family Informed" -- click reveals "Both paths end with the family seeing the information -- the only difference is how urgently it needed to arrive."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for the start node, purple for the decision diamond, amber for the SMS branch, blue for the newsletter branch, green for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
```

## References

- [Chapter 25: Analyzing Club Data and Choosing the Right Tools](../../chapters/25-analyzing-club-data-and-tools/index.md) -- the chapter this MicroSim supports.
- [Message Channel Decision Tree](../message-channel-decision-tree/index.md) -- the same urgency question, decided by a human rather than a rule.
- [Marketing automation](https://en.wikipedia.org/wiki/Marketing_automation) -- the commercial version of trigger-based sending.
- [Notification system](https://en.wikipedia.org/wiki/Notification_system) -- and the fatigue that follows over-notifying.
