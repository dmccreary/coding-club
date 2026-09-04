---
title: AI Agents for Registration, Scheduling, and Communication
description: Introduces AI agents that draft registration reminders, scheduling nudges, mailing-list content, and chatbot replies for a coding club, alongside influence graphs for outreach and the guardrails, oversight, and human-in-the-loop review that keep a mentor in charge of anything that reaches a family.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 09:47:23
metadata:
  ibook:
    version: 1.10
---

# AI Agents for Registration, Scheduling, and Communication

## Summary

This chapter introduces AI agents as tools for the club's operational work: registration, scheduling, reminders, and mentor coaching, plus the influence-graph concept for targeting mentor recruitment. It places equal weight on responsible use -- reviewing AI output, setting guardrails, and keeping a human in the loop -- before any agent goes live. You will be able to describe what an AI agent can safely automate and what oversight it requires.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

| Concept | Concept Impact Score |
|---------|-----------------------|
| AI Agent Basics | 280 |
| Leveraging AI Agents | 49 |
| Planning AI Agent | 48 |
| Communication AI Agent | 47 |
| Registration AI Agent | 46 |
| Scheduling AI Agent | 45 |
| Reminder AI Agent | 44 |
| Mentor Coaching AI Agent | 43 |
| Influence Graph Concept | 42 |
| Building An Influence Graph | 41 |
| Targeting Mentor Populations | 40 |
| AI Managed Mailing List | 39 |
| AI Generated Announcement | 38 |
| AI Drafted Newsletter | 37 |
| AI Survey Analysis | 36 |
| AI Sentiment Analysis | 35 |
| AI Chatbot For Parents | 34 |
| AI Chatbot For Students | 33 |
| Prompt Engineering Basics | 32 |
| Reviewing AI Output | 31 |
| AI Output Quality Check | 30 |
| AI Agent Guardrails | 29 |
| AI Agent Oversight | 28 |
| Human In The Loop Review | 27 |
| AI Ethics For Clubs | 26 |

## Prerequisites

This chapter builds on concepts from:

- [1. What Is a Coding Club](../01-what-is-a-coding-club/index.md)
- [2. AI, Intelligent Textbooks, and Where Coding Clubs Meet](../02-ai-and-intelligent-textbooks/index.md)
- [9. Mentors, Students, and the 3:1 Ratio](../09-mentors-students-ratio/index.md)
- [10. Building Mentor-Student Relationships That Last](../10-mentor-student-relationships/index.md)
- [11. Choosing a Schedule and Building Registration](../11-schedule-and-registration/index.md)
- [12. Running Events and Learning From Retrospectives](../12-events-and-retrospectives/index.md)
- [24. Tracking Student Data and Managing Club Communication](../24-student-data-and-communication/index.md)
- [25. Analyzing Club Data and Choosing the Right Tools](../25-analyzing-club-data-and-tools/index.md)

---

Chapter 25 turned a club's raw spreadsheet rows into decisions a leader could act on: a retention rate worth watching, a duplicate record worth merging, a new tool worth vetting before it ever touched student data. Every one of those steps still needed a person to open the spreadsheet, build the pivot table, and decide what the numbers meant. This chapter introduces software that can do a meaningful share of that same work on its own: a program that drafts the newsletter chapter 24's email habits used to require writing from scratch, that watches the calendar chapter 24 set up and fires the two-touch reminder chapter 25 automated, and that can sketch a first-pass answer to a parent's late-night question about the club's policies. None of that means a club leader disappears from the loop. It means the loop gains a new member -- one that drafts quickly, never gets tired, and still needs a person to say yes before anything reaches a family.

!!! mascot-welcome "Your club's newest volunteer just showed up"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- and this chapter is where your club meets its newest volunteer. You'll see how an AI agent can draft your reminders, map an influence graph of who your outreach still isn't reaching, and even sketch a chatbot reply to a worried parent. You'll also learn exactly where a human always keeps the final say, because a great volunteer -- artificial or not -- still needs a mentor to check the work before it goes out the door.

## Meet Your Club's Newest Volunteer: The AI Agent

### AI Agent Basics

**An AI agent** is a software program that takes a goal stated in plain language, works through the steps needed to reach it, and produces a draft result -- a message, a schedule, a categorized list -- that a person then reviews before it becomes final. What separates an agent from an ordinary program is that a person doesn't have to spell out every step in advance; the agent figures out most of the "how" on its own, the way a new volunteer figures out how to phrase a reminder email once told the goal is "get families to show up Saturday."

That comparison is worth taking seriously, not just as a figure of speech. Think of an AI agent exactly like a capable new volunteer on their first week at the club: genuinely talented, quick to produce a first draft of almost anything asked of them, and completely unfamiliar with the club's specific history, tone, and the handful of unwritten rules every established club runs on. A seasoned co-leader doesn't hand that new volunteer the master key and walk away -- they hand over one task at a time, read the first few drafts closely, and only loosen the leash once the volunteer's judgment has proven itself on real, low-stakes work. An AI agent earns exactly the same kind of trust, on exactly the same schedule, and for exactly the same reason: talent at drafting is not the same thing as judgment about a specific family, a specific child, or a specific club's history.

That volunteer metaphor also explains why an AI agent is a genuinely different tool than the rule-based automation chapter 25 already introduced, such as the automated reminder system that fires a fixed email three days before every session. The table below lines the two up directly.

| Aspect | Rule-Based Automation (Ch. 25 Automated Reminder System) | AI Agent |
|---|---|---|
| Trigger | A fixed condition -- "three days before the event" | A goal stated in plain language -- "get this family to Tuesday's session" |
| What it produces | The exact same message every time | A fresh draft, shaped to the specific situation |
| Adapts to a new situation? | No -- it only knows the one rule it was given | Yes -- it can handle a request it has never seen phrased that way before |
| Needs a human to check the output? | Rarely -- the message never changes, so it was reviewed once, up front | Every time -- a new draft is a new chance for something to be wrong |

Neither tool is simply "better." A rule-based reminder is perfect for a message that truly never needs to change; an AI agent earns its keep exactly where the message needs to flex -- a different tone for a brand-new family than a five-year regular, or a mention of the specific badge a student is one session away from finishing.

A concrete, end-to-end worked example makes the loop real. A club leader asks an AI agent to draft Tuesday's session reminder. The agent reads the club's calendar (set up back in chapter 24), notices this week's session is the one right after winter break, and drafts a reminder that adds one extra line most weeks wouldn't need: "Welcome back from break -- see you Tuesday!" The leader reads the draft, agrees the extra line is a nice touch, fixes one detail the agent got slightly wrong (it listed the wrong start time, carried over from an old calendar entry), and sends the corrected version through the group messaging app chapter 24 already set up. The agent did the drafting; the leader caught the one error that mattered and made the actual decision to send.

!!! mascot-thinking "A great first draft is still just a draft"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the mental shift here: the interesting question about an AI agent is never "is the draft good?" -- it usually is. The question that matters is "did anyone check it before it reached a family?" Hold onto that distinction, because it runs through the rest of this chapter.

#### Diagram: AI Agent Loop Explorer

<iframe src="../../sims/ai-agent-loop-explorer/main.html" width="100%" height="562px" scrolling="no"></iframe>

<details markdown="1">
<summary>AI Agent Loop Explorer</summary>
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
</details>

## Seven Ways a Club Puts AI Agents to Work

### Leveraging AI Agents

**Leveraging AI agents** means matching a specific club task to the specific kind of agent built for it, rather than expecting one general-purpose tool to handle everything from drafting an email to building next semester's calendar equally well. The six agent types introduced below are not six different products a club has to buy -- they are six different *jobs* an AI agent can be asked to do. A worked example shows the matching in practice: on a typical Sunday night, a club leader has four small tasks piling up -- draft Tuesday's reminder, check whether the waitlist needs anyone moved up, sketch next month's newsletter, and answer a parent's question about the device loaner agreement chapter 23 introduced. Rather than treating all four as one undifferentiated pile of "AI stuff," the leader routes each to the agent type built for it, and each task finishes faster and more reliably than one do-everything tool would have managed.

### Planning AI Agent

**A planning AI agent** drafts a sequence of steps or dates toward a stated goal -- a semester calendar, a curriculum order, an event checklist -- respecting constraints the leader supplies, such as alternating Saturdays or a list of known school holidays. It produces a proposed plan, not a committed one; a person still decides whether the proposed sequence actually works for this specific club and venue. A worked example shows the constraint-respecting draft in action: a leader asks a planning agent to lay out twelve alternating-Saturday sessions for the spring semester, avoiding the district's spring-break week. The agent returns a twelve-date list that correctly skips the break week, but schedules the final session on Mother's Day weekend -- a constraint the leader never mentioned because it seemed too obvious to state. The leader moves that one date and approves the rest, a two-minute fix compared to the twenty minutes a similar calendar took to build by hand in an earlier chapter.

### Communication AI Agent

**A communication AI agent** drafts a message in response to a specific request or incoming question -- an email reply, a chat response, a first-pass announcement -- pulling from the club's own written policies and past messages so the draft sounds like the club, not like a generic form letter. It is the general-purpose drafting engine behind several of the more specific uses covered later in this chapter. A worked example shows it drafting a reply rather than an outbound announcement: a parent emails asking whether their child can make up a missed session at a different weekly time slot. The communication agent drafts a reply pulling the exact make-up policy language from the club's charter (chapter 3), phrased warmly rather than as a copy-pasted policy excerpt. A mentor reads the draft, confirms it matches the actual policy, and sends it -- faster than writing a reply from scratch, but with the mentor's own read of the situation still deciding whether to send it as written.

### Registration AI Agent

**A registration AI agent** processes new sign-ups as they arrive -- checking a submission against the club's mentor-to-student ratio cap (chapter 9) and current waitlist status, flagging an incomplete form for a human rather than guessing at a missing field, and moving the next family off the waitlist the moment a spot opens. It automates the bookkeeping side of the registration workflow chapter 11 introduced, without ever making the actual decision to accept or reject a specific child. A worked example shows the ratio check working as designed: a new sign-up arrives for a Tuesday group already at its 3:1 cap. The registration agent recognizes the group is full, automatically places the new family on the waitlist in submission order, and flags the entry for a leader's routine weekly glance rather than silently doing nothing. When a different family cancels the same week, the agent notices the opening, moves the next waitlisted family into the open slot, and drafts -- but does not send -- a welcome email confirming the spot, leaving the actual send to a human.

!!! mascot-tip "Match the job to the agent, not the agent to the job"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut for picking the right agent type fast: ask what the task actually produces. A date or sequence points to a planning agent, an outgoing message points to a communication agent, and a sign-up decision points to a registration agent.

### Scheduling AI Agent

**A scheduling AI agent** cross-references multiple mentors' stated availability against a venue's open hours to propose session dates or times ranked by coverage -- the same cross-referencing task chapter 2's library-club example showed taking an entire evening of back-and-forth texts before an AI tool took it over. It proposes options ranked by coverage; a person still picks which option to commit to. A worked example shows the ranked proposal in action: a leader asks a scheduling agent to compare three possible Saturday dates against five mentors' availability. The agent returns the dates ranked by coverage -- one date with all five mentors free, one with four, and one with only two, which would violate the 3:1 ratio if attendance ran high. The leader picks the five-mentor date in under a minute, a decision that previously meant texting all five mentors individually and waiting for replies.

### Reminder AI Agent

**A reminder AI agent** drafts the content and tone of a session reminder tailored to the specific family and moment -- mentioning a badge a student is one session from finishing, or softening the tone for a family that just missed two sessions in a row -- going beyond the fixed-timer, fixed-content automated reminder system chapter 25 introduced. Where that rule-based system fires the same message on the same schedule for everyone, a reminder agent varies what the message actually says. A worked example shows the tailoring at work: the fixed reminder system fires its identical three-day-out email to every family, exactly as chapter 25 designed it. A reminder agent, drafting on top of that same trigger, notices one particular student is one badge away from completing the LED-strip-patterns challenge and adds a single personalized line -- "you're so close to finishing LED strip patterns!" -- to that one family's copy, before a mentor does a quick spot-check and approves the batch.

### Mentor Coaching AI Agent

**A mentor coaching AI agent** drafts suggestions for a mentor based on aggregated, anonymized patterns across a whole cohort -- never from one specific, identified student's individual record -- keeping the same minimal-identifiability habit chapter 24 and chapter 25 built into every dashboard and portal in this book. It coaches the mentor, not the student, and it does so from a pattern, not a name. A worked example shows the aggregate-only boundary holding: reviewing the same badge-completion dashboard chapter 24 introduced, a mentor coaching agent notices that only six of fourteen students in the Tuesday cohort have completed the LED-strip-patterns badge -- the same bottleneck pattern chapter 24's dashboard example flagged -- and drafts two challenge-card framing ideas a mentor could try next, echoing the theme-substitution technique chapter 29 described. The suggestion never names which six students are behind; it only ever describes the cohort-level pattern and a general fix.

#### Diagram: Meet the Club's AI Agent Roster

<iframe src="../../sims/ai-agent-roster-network/main.html" width="100%" height="702px" scrolling="no"></iframe>

<details markdown="1">
<summary>Meet the Club's AI Agent Roster</summary>
Type: graph-model
**sim-id:** ai-agent-roster-network<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-concept-hierarchy

Purpose: Show the six specific AI agent types as a network around the umbrella idea of leveraging AI agents, so a learner can click any agent type and see the club task it handles and a one-line example.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a club task, the learner classifies which of the six AI agent types is the right match for it.

Node types:
1. Center node "Leveraging AI Agents" (gray hexagon) -- click reveals "Matching a task to the agent type built for it, rather than one tool trying to do everything."
2. Planning AI Agent (blue circle) -- click reveals "Drafts a sequence of dates or steps toward a goal, respecting stated constraints. Example: a proposed semester calendar."
3. Communication AI Agent (green circle) -- click reveals "Drafts a reply or announcement pulling from the club's own policies. Example: a make-up-policy email reply."
4. Registration AI Agent (amber circle) -- click reveals "Processes new sign-ups against the club's ratio cap and waitlist rules. Example: moving a family off the waitlist."
5. Scheduling AI Agent (purple circle) -- click reveals "Cross-references mentor availability against venue hours. Example: proposing which of three dates has full mentor coverage."
6. Reminder AI Agent (red circle) -- click reveals "Drafts a reminder tailored to the specific family and moment, beyond a fixed timer. Example: mentioning a badge a student is one session from finishing."
7. Mentor Coaching AI Agent (teal circle) -- click reveals "Drafts coaching suggestions from aggregated, anonymized patterns, never from one identified student's record. Example: flagging a badge that's become a bottleneck for a whole cohort."

Edges: One edge from the center node to each of the six agent-type nodes, unlabeled (the hub-and-spoke layout itself communicates that all six are varieties of the same underlying idea).

Interactive features:
- Hover any node to preview its one-line job description
- Click any node to highlight it and open a side-panel infobox with its full description and example
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Center node larger and gray; six spoke nodes evenly sized, each a distinct accent color; uniform edge style

Legend: Node color key matching the six agent types plus the center "umbrella" node

Implementation: vis-network JavaScript library, hierarchical or force-directed hub layout, canvas size 800x450px.
</details>

## Using Influence Graphs to Find Who You're Missing

Chapter 28 showed that word-of-mouth and a single flyer tend to reproduce whatever network a club already has, and chapter 29 showed that removing a barrier doesn't automatically build trust with a community a club has never reached. The three concepts below give that problem a concrete tool: a map of the community connections a club can use to see, precisely, which populations its current outreach touches and which it doesn't.

### Influence Graph Concept

**An influence graph** is a network map where nodes represent people, organizations, or venues in a community -- a PTA email list, a barbershop with a community board, a faith congregation, a local Women in Tech meetup -- and edges represent a trust or reach relationship, such as "families at this congregation already trust this organizer's recommendations." It is the same node-and-edge structure as the learning graph chapter 2 introduced, applied to a community's social connections instead of a curriculum's concept dependencies.

A worked example shows the concept made concrete: a club's influence graph includes a node for its own PTA email list, correctly connected to the families who already receive club announcements, and a separate node for a Boys & Girls Club afternoon program that currently has no edge to the club's outreach at all. Both nodes exist in the same graph; only one of them is currently connected to the club.

!!! mascot-thinking "A community is a network, not a mailing list"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the shift in perspective an influence graph forces: a mailing list only shows you the people already listening. A graph shows you the people who aren't on it yet, and exactly who could introduce you to them.

### Building An Influence Graph

**Building an influence graph** is the process of populating that map -- listing known community organizations and leaders, asking current mentors and families "who else do you trust for recommendations like this," and optionally having an AI agent suggest additional candidate nodes drawn from public community-organization directories, which a person always confirms before adding or contacting. The agent's role stops at suggesting candidates; a human decides which ones are real, appropriate, and worth an actual outreach attempt.

A worked example shows the process end to end: a club leader and three mentors brainstorm fifteen community nodes in twenty minutes -- congregations, youth programs, employers, meetups. An AI agent, given that list, groups the nodes by neighborhood and language and flags that two entire categories -- Spanish-speaking congregations, and any node connected to the neighborhood east of the venue -- have zero current edges to the club. No new contact gets made automatically; the flag simply tells the leader exactly where to start the next round of relationship-building chapter 29 described.

### Targeting Mentor Populations

**Targeting mentor populations** is using an influence graph specifically to find untapped groups of potential *mentors* -- a local engineering employer's volunteer program, a Women Who Code meetup, a retired-teachers association -- and directing recruitment effort at the highest-leverage hub node in that group rather than broadcasting one generic ask everywhere equally. It applies the same graph the two concepts above built, narrowed to the recruiting problem chapter 29's female-mentor-recruitment discussion raised.

A worked example shows the leverage in action: the club's influence graph shows a Women Who Code meetup node with dozens of potential connections but zero current edges to the club. Rather than posting a generic "mentors wanted" flyer at ten random locations, the leader sends one personal outreach message to that meetup's organizer -- the single highest-leverage node in the graph -- which reaches far more qualified candidates than the same effort spent on ten cold flyers would have.

#### Diagram: Building and Reading an Influence Graph

<iframe src="../../sims/mentor-recruiting-influence-graph/main.html" width="100%" height="702px" scrolling="no"></iframe>

<details markdown="1">
<summary>Building and Reading an Influence Graph</summary>
Type: graph-model
**sim-id:** mentor-recruiting-influence-graph<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/mentor-matching-network

Purpose: Let a learner examine a sample community influence graph, distinguishing connected outreach channels from under-reached populations, and practice identifying the highest-leverage node for mentor recruiting.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a sample influence graph of a local community, the learner examines it to identify under-reached populations of mentors and students.

Node types:
1. Club Outreach (center, gray square) -- the club's current announcement channel
2. Connected nodes (green circles): PTA Email List, Library Bulletin Board -- already linked to Club Outreach
3. Under-reached nodes (amber circles, no current edge to Club Outreach): Neighborhood Congregation, Boys & Girls Club Program, Women Who Code Meetup, Local Engineering Employer

Edges:
- Solid green edges from Club Outreach to each connected node, labeled "reaches"
- Dashed gray edges (present but unhighlighted by default) from each under-reached node toward the community it represents, labeled "would reach"

Interactive features:
- Click any node to see its population size estimate and whether it currently has an edge to Club Outreach
- Button: "Highlight Under-Reached Nodes" -- turns all amber nodes and their labels bold and pulses them briefly
- Button: "Show Highest-Leverage Node" -- highlights the Women Who Code Meetup node specifically and reveals why it was chosen (largest untapped population with a plausible single point of contact)
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Green fill for connected nodes, amber fill for under-reached nodes, gray for the central club node; edge color matches the source node's connection status

Legend: Node color key (connected vs. under-reached) and edge label meaning

Implementation: vis-network JavaScript library, force-directed layout with the Club Outreach node pinned near center, canvas size 800x500px.
</details>

## Letting AI Draft Your Club's Words

Chapter 24 built the club's core communication channels -- a dedicated email account, list segmentation, a group messaging app. Chapter 25 automated the routine, unchanging parts of what goes out over those channels. The three concepts below sit between those two chapters' work: an AI agent drafting the actual words, still checked by a person before anything reaches a family.

### AI Managed Mailing List

**An AI managed mailing list** is chapter 24's email list segmentation with an agent watching it for changes that need to happen -- a waitlisted family enrolling and needing to move into the active-families segment, an address that's started bouncing and needs a human's attention -- and drafting the update rather than requiring a mentor to review every family's status by hand each week. The agent proposes list changes; it never permanently removes or reclassifies a contact without a person confirming. A worked example shows the routine catch: a family that enrolls off the waitlist this week is still tagged under chapter 24's "Waitlist" segment. The agent notices the mismatch between the family's new enrollment status and its old segment tag, drafts a one-line update moving them to "Active Families," and flags it for the leader's next weekly review rather than making the change silently. The leader confirms it with one click, and the list stays accurate without anyone manually re-checking all forty rows.

### AI Generated Announcement

**An AI generated announcement** is a one-off message drafted for a single, specific situation -- a room change, a weather cancellation, a special-event heads-up -- rather than a routine, repeating message, matching the announcement scenarios chapter 24's message-channel decision tree already covered. The agent drafts the wording; the same decision tree from chapter 24 still decides which channel it goes out on. A worked example shows two draft options in practice: a mentor needs to announce a last-minute room change five minutes before a session starts. The agent drafts two versions -- a formal one ("We regret to inform you of a room change...") and a short, casual one ("Quick heads up -- we moved to Room 12!") -- and the mentor picks the casual version, since chapter 24 already established that this kind of urgent, informal update belongs on the group messaging app, not in a formally worded email.

### AI Drafted Newsletter

**An AI drafted newsletter** is fresh, generated prose written for that specific month -- a short paragraph highlighting a recent event, a note about an upcoming badge milestone -- as distinct from chapter 25's newsletter automation, which mechanically assembles a fixed template from data fields on a schedule. The two work together: an AI drafted newsletter writes the narrative parts a template can't generate on its own, and chapter 25's newsletter automation still handles the actual scheduled, formatted send. A worked example shows the two concepts meeting: an agent drafts a "This Month's Highlight" paragraph describing a recent robot demonstration, but gets the specific robot kit's name wrong, calling it a "floor robot" when the session actually used a table robot. A mentor reviewing the draft catches the error, corrects it, and only then does the corrected paragraph get merged into chapter 25's automated monthly template alongside the session dates and badge counts that template already pulls in mechanically.

#### Diagram: From Draft to Delivered — AI Content Pipeline

<iframe src="../../sims/ai-content-drafting-pipeline/main.html" width="100%" height="842px" scrolling="no"></iframe>

<details markdown="1">
<summary>From Draft to Delivered -- AI Content Pipeline</summary>
Type: workflow
**sim-id:** ai-content-drafting-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/ai-content-detection

Purpose: Trace how an AI managed mailing list, an AI generated announcement, and an AI drafted newsletter each flow through a human review step before reaching a family, so a learner sees the shared review gate underneath three different content types.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given one of three AI content-drafting scenarios, the learner differentiates its path through the pipeline and identifies the review step common to all three.

Steps (flowchart with a decision diamond):
1. Start: "Content Need Identified" -- click reveals "A segment needs updating, an urgent situation needs an announcement, or the month needs a newsletter paragraph."
2. Decision: "Which Content Type?" -- click reveals "Routes to one of three drafting agents based on what's needed."
3a. Branch to "AI Managed Mailing List Drafts Segment Update" -- click reveals "Proposes moving a contact between segments, such as Waitlist to Active Families."
3b. Branch to "AI Generated Announcement Drafts Message" -- click reveals "Drafts one or more versions of a one-off, situation-specific message."
3c. Branch to "AI Drafted Newsletter Writes Monthly Paragraph" -- click reveals "Writes fresh narrative prose highlighting the month's events."
4. All three branches converge on "Human Reviews Draft" -- click reveals "Every draft, regardless of type, is checked by a person before anything happens with it."
5. Decision: "Approved?" -- click reveals "The reviewer can approve as-is, edit and approve, or send it back for a new draft."
6a. Branch "Yes" leads to "Sent or Merged" -- click reveals "A segment update is applied, an announcement goes out on the channel chapter 24's decision tree selects, or a newsletter paragraph merges into chapter 25's automated template."
6b. Branch "No" leads back to the relevant drafting step -- click reveals "A rejected draft returns to the same agent with feedback, not to a different one."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start/end states, purple for decision diamonds, three distinct accent colors for the three drafting branches, green for the converged "Sent or Merged" outcome.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
</details>

## Letting AI Read the Room: Survey and Sentiment Analysis

Chapter 24's feedback loop design ran on four stages -- collect, analyze, act, report back -- and the "analyze" stage assumed a person reading every response by hand. The two concepts below give that stage an AI-assisted upgrade, without changing anything about the loop's other three stages or about who ultimately decides what to act on.

### AI Survey Analysis

**AI survey analysis** is using an AI agent to read a batch of free-text survey responses -- the optional short-text field chapter 24's feedback form introduced -- and summarize them into a handful of recurring themes, saving a leader from reading every single response individually to spot a pattern. The agent proposes themes; a leader still decides which theme is worth acting on. A worked example shows the summarizing in action: a post-event survey collects forty free-text responses to "anything else you'd like us to know?" An AI survey analysis agent groups them into three themes -- eleven responses mention the start time feeling too early, six praise a specific mentor by name, and four ask for more advanced challenge cards -- turning forty separate paragraphs into three actionable lines a leader can read in under a minute.

### AI Sentiment Analysis

**AI sentiment analysis** estimates whether a batch of responses leans positive, neutral, or negative in tone, giving a quick emotional temperature check that a numeric rating scale alone can miss. It answers a different question than AI survey analysis: survey analysis asks *what* people are talking about, while sentiment analysis asks *how they feel* about it. A worked example shows sentiment catching something an average score hid: the same post-event survey's 1-5 rating scale averages a healthy 4.2 out of 5, which on its own would suggest nothing needs attention. Running AI sentiment analysis on the free-text responses reveals a cluster of frustrated tone concentrated entirely in the start-time comments identified above -- a signal the single averaged number had smoothed away completely. Combined, the two tools feed directly into chapter 24's feedback loop's "analyze" stage with far more signal than either one alone.

#### Diagram: Survey Themes and Sentiment Dashboard

<iframe src="../../sims/survey-sentiment-dashboard/main.html" width="100%" height="482px" scrolling="no"></iframe>

<details markdown="1">
<summary>Survey Themes and Sentiment Dashboard</summary>
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
</details>

## Chatbots and the Art of Asking Well

The two chatbot types below put a conversational AI agent directly in front of families and students, rather than behind the scenes drafting something a mentor sends later. Because that changes who sees the AI's output first, they deserve their own boundaries -- and a chatbot's usefulness depends heavily on how clearly a person asks it for help in the first place, which is where prompt engineering comes in.

### AI Chatbot For Parents

**An AI chatbot for parents** is a conversational agent, typically embedded on a club's registration page or website, that answers a parent's common questions directly by drawing only from the club's own written policies -- the charter (chapter 3), the make-up policy, the loaner-laptop agreement (chapter 23) -- and explicitly hands off to a human mentor whenever a question falls outside that scripted, policy-based scope rather than guessing at an answer. A worked example shows both the chatbot's strength and its boundary: at eleven at night, a parent asks the chatbot what happens if their child misses a session. The chatbot answers correctly and immediately, quoting the actual make-up policy from the club's charter. A different parent asks the same chatbot about a specific disagreement their child had with another student during a session. The chatbot recognizes the question falls outside any written policy, replies that a mentor will personally follow up, and never attempts to draft an answer about the specific incident on its own.

### AI Chatbot For Students

**An AI chatbot for students** is a conversational agent scoped to a different audience and purpose than the parent chatbot above: it answers a student's questions about the curriculum itself -- why a challenge card's code isn't working, what a specific term on a challenge card means -- rather than family logistics, and it is built to redirect any personal or off-topic question straight to a mentor rather than attempting to engage with it. A worked example shows the redirect boundary holding: a student asks the chatbot why their LED isn't blinking, and the chatbot walks through the same troubleshooting steps -- check the resistor, check the pin number -- a mentor would use, matching the electrical-safety habits taught earlier in this book. A different student, in the same session, tries asking the chatbot something personal and unrelated to any challenge card. The chatbot declines to engage with the topic and suggests asking a mentor instead, exactly the kind of boundary a club's AI ethics commitments, covered later in this chapter, require of it.

### Prompt Engineering Basics

**Prompt engineering basics** means writing a clear, specific instruction to an AI agent so its first draft needs less correction -- naming the audience, the tone, the length, and any must-include detail, rather than typing a vague request and hoping the agent guesses the missing context correctly. A vague prompt isn't wrong so much as underspecified; the agent has to fill in the gaps itself, and it won't always fill them in the way a club actually needs. A worked example shows the difference concretely: the vague prompt "write a reminder" returns a generic, three-paragraph email that mentions no specific date, no specific club, and a formal tone the club never uses. The specific prompt "write a two-sentence, friendly reminder for Tuesday's 4pm session, mention we still need one more mentor volunteer, and sign it as Tuesday Coding Club" returns a draft close enough to send with a single small edit. The goal was identical in both cases; only the level of detail in the request changed.

#### Diagram: Prompt Refinement Step-Through

<iframe src="../../sims/prompt-refinement-step-through/main.html" width="100%" height="562px" scrolling="no"></iframe>

<details markdown="1">
<summary>Prompt Refinement Step-Through</summary>
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
</details>

!!! mascot-encourage "Writing a good prompt is its own small skill -- give it a few tries"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If your first few prompts come back sounding generic, that's completely normal -- prompt engineering is a skill like any other, and most people need a handful of attempts before it clicks. Add one missing detail at a time rather than starting over from scratch.

## Keeping a Human in Charge: Review, Guardrails, and Ethics

Every agent and every diagram in this chapter has pointed at the same unfinished sentence: "...and then a person reviews it." This section finishes that sentence. The six concepts below are not an afterthought bolted onto the exciting part of this chapter -- for a club responsible for other people's children, they are the part that makes everything above them safe to actually use.

### Reviewing AI Output

**Reviewing AI output** is the practice of a person reading every AI-drafted result before it is used, treating the draft as a genuine first draft rather than a finished product, and checking specifically for factual errors, wrong names or dates, and a tone that doesn't match the club's voice. A worked example shows the practice catching a real error: a mentor reviewing an AI drafted newsletter paragraph, covered earlier in this chapter, notices it lists the wrong session date -- carried over from a stale calendar entry the agent had no way of knowing was outdated -- and corrects it before the paragraph goes anywhere near chapter 25's automated newsletter template.

### AI Output Quality Check

**An AI output quality check** turns reviewing AI output from an ad hoc skim into a short, repeatable checklist applied the same way every time -- typically covering factual accuracy, appropriate tone, whether any specific child's name or situation was mentioned when it shouldn't have been, and whether the draft matches the club's established voice.

A sample checklist a club might actually post next to wherever mentors review drafts:

- Are all names, dates, and times in this draft correct?
- Does the tone match how this club actually talks to families?
- Does this draft mention any specific student's name or situation that shouldn't be shared this way?
- Would I be comfortable if a family asked, "did a person actually write this?"

A worked example shows the checklist catching something a quick skim might have missed: a mentor running the four-question check above on a drafted announcement realizes the draft, while factually accurate, mentions a specific student's badge progress by name in a message going to the entire mailing list -- a detail nobody would catch skimming for tone alone, but that the checklist's third question is specifically designed to flag.

### AI Agent Guardrails

**AI agent guardrails** are the specific, built-in limits a club sets on what an agent is permitted to do without ever changing them per-message -- an agent may draft a reply but may never send anything directly, may propose a schedule change but may never publish it, and must never be given a specific, identifiable student's name paired with sensitive information in a prompt sent to an external AI service. Guardrails are decided once, in advance, rather than re-litigated every time an agent runs.

!!! mascot-warning "An unreviewed AI draft is not ready for a family's inbox"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this trap: once an agent's drafts start looking consistently good, it's tempting to let a "quick one" go out unreviewed to save time. The fix never changes -- every AI-drafted message gets a human review before it reaches a family, with no exceptions carved out for drafts that seem obviously fine.

A worked example shows a guardrail doing exactly its job: a club's guardrail states that no AI agent may include a specific student's name in any message sent to more than one family at a time. When a communication agent drafts a group announcement that happens to name a specific student's recent achievement, the guardrail flags the draft for mandatory rewrite before it can even reach the human-review stage, catching the problem automatically rather than relying on a busy mentor to notice it themselves.

### AI Agent Oversight

**AI agent oversight** is the ongoing, periodic practice of a person or small team checking that agents are still behaving the way the guardrails intend, over time -- distinct from the guardrails themselves, which are the fixed limits set once, because even a well-guardrailed agent's typical output can quietly drift as club needs change. A worked example shows drift getting caught before it became a real problem: a leader performing a monthly oversight spot-check reviews five of the last twenty AI-drafted reminders and notices one has started using an oddly formal, corporate tone that doesn't match the others. Rather than waiting for a family to comment on it, the leader tightens the prompt template the reminder agent uses, and the next month's spot-check sample reads consistently again.

### Human In The Loop Review

**Human in the loop review** is the specific workflow requirement that no AI-drafted output reaches its destination without passing through an actual person's approval step first -- the concrete mechanism that both guardrails and oversight ultimately rely on to have any real effect. It is the same four-stage loop the AI Agent Loop Explorer walked through earlier in this chapter, now stated as a standing club policy that applies to every agent type covered above, not just one worked example. A worked example shows the policy holding even under time pressure: a scheduling agent drafts a same-day room-change announcement fifteen minutes before a session starts. Even with almost no time to spare, the mentor on duty still reads the one-sentence draft, confirms the new room number is correct, and sends it herself -- the review step takes fifteen seconds, not fifteen minutes, but it still happens, because the club's human-in-the-loop policy makes no exception for urgency.

#### Diagram: Human-in-the-Loop Review Workflow

<iframe src="../../sims/human-in-the-loop-review-workflow/main.html" width="100%" height="862px" scrolling="no"></iframe>

<details markdown="1">
<summary>Human-in-the-Loop Review Workflow</summary>
Type: workflow
**sim-id:** human-in-the-loop-review-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/conversational-ai/tree/main/docs/sims/feedback-loop-system-architecture

Purpose: Tie reviewing AI output, quality checks, guardrails, and oversight into one integrated workflow, so a learner sees how the practices fit together as a single system rather than four separate rules to memorize.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: determine

Learning objective: Given an AI agent's draft output, the learner determines whether it is ready to send by tracing it through the club's guardrail check, quality check, and human review steps.

Steps (flowchart with decision diamonds):
1. Start: "Agent Produces a Draft" -- click reveals "Any of the seven agent types covered in this chapter, producing any kind of draft output."
2. Decision: "Passes Guardrail Check?" -- click reveals "An automated check for the club's fixed limits, such as never naming a specific student in a group message."
3a. Branch "No" leads to "Automatic Rewrite Required" -- click reveals "The draft never reaches a human reviewer in this form; the agent must produce a new draft."
3b. Branch "Yes" leads to "Human Applies Quality Check" -- click reveals "A person runs the short, repeatable checklist: accuracy, tone, no inappropriate student mentions, matches club voice."
4. Decision: "Quality Check Passes?" -- click reveals "The reviewer's honest judgment call, not a rubber stamp."
5a. Branch "No" leads back to "Automatic Rewrite Required" -- click reveals "Sent back for a new draft, same as a guardrail failure."
5b. Branch "Yes" leads to "Human Approves and Sends" -- click reveals "The single moment a person, not the agent, actually causes the message to reach a family."
6. Process (ongoing, connected to all of the above): "AI Agent Oversight" -- click reveals "A periodic, separate check -- monthly spot-checks of already-sent messages -- that catches drift the per-message steps above might miss over time."
7. End: "Family Receives a Human-Approved Message" -- click reveals "Every message a family sees passed through this exact workflow, regardless of which agent drafted it."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start and end states, purple for decision diamonds, red for the rewrite-required outcome, green for the approved-and-sent outcome, amber for the ongoing oversight process box.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; the oversight node is drawn with a dashed border and a separate connecting line to signal it runs alongside the per-message flow rather than as a step within it.
</details>

### AI Ethics For Clubs

**AI ethics for clubs** is the small set of commitments a club makes, in writing, about how it will and will not use AI around minors: an AI agent never makes a final decision about a specific, identified student without a human confirming it, families are told plainly that AI drafts some of what they receive, no identifying student data is fed into an external AI tool beyond what a specific task genuinely requires, and the same equity awareness chapter 29 raised about human-authored curriculum applies equally to anything AI drafts -- an AI-generated project theme or example image is checked for the same cultural blind spots a human-written one would be. A worked example shows the commitments working together: before adopting any of the agent types in this chapter, a club adds one paragraph to its charter stating that AI agents may draft communications and suggestions but never make a final decision about an individual student, and that families can ask, at any time, whether a specific message they received was AI-drafted. A parent later asks exactly that question about a reminder email; because the commitment already exists in writing, the leader answers honestly and immediately, rather than having to invent a policy on the spot.

## Chapter Summary

This chapter gave a club's leader a new kind of volunteer -- one that drafts a reminder, sketches a newsletter paragraph, maps an influence graph, and answers a routine parent question, all in a fraction of the time a person would need for the same tasks. Seven agent types covered the club's operational work: planning, communication, registration, scheduling, reminders, and mentor coaching, all matched to the right job by leveraging AI agents thoughtfully rather than reaching for one tool to do everything. Influence graphs turned chapter 28 and 29's outreach challenge into something a club can map and target directly, AI-drafted content and AI-assisted survey and sentiment analysis took real work off a mentor's plate, and two purpose-built chatbots showed how far a well-written prompt can go. None of it works safely without this chapter's last section: reviewing AI output, a repeatable quality check, guardrails set in advance, ongoing oversight, human-in-the-loop review, and a written AI ethics commitment -- practices that add up to one simple rule this chapter has repeated in a dozen different worked examples. A great first draft is still just a draft, and a human always decides what actually reaches a family.

!!! mascot-celebration "You can now put AI agents to work safely"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built a complete picture of what an AI agent can draft for your club -- reminders, newsletters, influence graphs, chatbot replies -- and exactly where a human review step has to sit before any of it reaches a family. That's the responsible-AI foundation the rest of this book's AI-powered chapters will build on.

[See Annotated References](./references.md)
