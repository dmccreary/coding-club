---
title: AI-Customized Curriculum and Rolling Out New Agents
description: Covers using AI to customize curriculum, lessons, and challenge cards for individual students, AI-assisted mentor matching and scheduling, specialized agents for grant writing, social media, and translation, mentor-supervised coding-help agents for students, and the responsible process for selecting, testing, and rolling out a new AI agent in a club.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 10:11:20
metadata:
  ibook:
    version: 1.10
---

# AI-Customized Curriculum and Rolling Out New Agents

## Summary

This chapter covers using AI to customize curriculum and lessons to individual students, plus a set of more specialized AI agents for grant writing, social media, and translation. It closes with the practical rollout process: selecting a vendor, testing integration, and training club leaders to use new AI agents responsibly. You will be able to evaluate an AI tool against selection criteria and plan a rollout for your club.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| AI Bias Awareness | 25 |
| AI Data Privacy Risk | 24 |
| AI Tool Selection Criteria | 23 |
| AI Assisted Curriculum Design | 22 |
| AI Generated Challenge Card | 21 |
| AI Assisted Lesson Customization | 20 |
| Building Student Mental Models | 19 |
| Customizing Lessons With AI | 18 |
| AI Assisted Mentor Matching | 17 |
| AI Scheduling Optimization | 16 |
| AI Agent Cost Management | 15 |
| AI Agent Vendor Comparison | 14 |
| AI Assisted Grant Writing | 13 |
| AI Assisted Social Media | 12 |
| AI Generated Website Content | 11 |
| AI Assisted Translation | 10 |
| AI Voice Assistant Use | 9 |
| AI Assisted Debugging Help | 8 |
| AI Tutor For Students | 7 |
| AI Code Review Assistant | 6 |
| AI Agent Workflow Design | 5 |
| AI Agent Integration Testing | 4 |
| AI Agent Rollout Plan | 3 |
| AI Agent Training For Leaders | 2 |
| Coaching Leaders With AI | 1 |

## Prerequisites

This chapter builds on concepts from:

- [1. What Is a Coding Club](../01-what-is-a-coding-club/index.md)
- [5. Gauging Interest and Holding Your First Meeting](../05-gauging-interest-first-meeting/index.md)
- [7. Telling Your Club's Story and Designing the Classroom](../07-club-story-and-classroom-design/index.md)
- [9. Mentors, Students, and the 3:1 Ratio](../09-mentors-students-ratio/index.md)
- [11. Choosing a Schedule and Building Registration](../11-schedule-and-registration/index.md)
- [14. Computational Thinking, Scratch, and Python Basics](../14-computational-thinking-scratch-python/index.md)
- [15. Designing a Curriculum With Challenge Cards and Portfolios](../15-curriculum-challenge-cards/index.md)
- [28. Reaching Underserved Communities and Removing Barriers](../28-underserved-communities-barriers/index.md)
- [30. Budgeting, Fundraising, and Grant Writing](../30-budgeting-fundraising-grants/index.md)
- [32. AI Agents for Registration, Scheduling, and Communication](../32-ai-agents-registration-scheduling/index.md)

---

Chapter 32 introduced the AI agent as a new kind of volunteer for a club's operational load -- drafting reminders, mapping influence graphs, answering routine questions -- always with a person confirming the final send. This chapter turns that same volunteer toward the curriculum itself. The challenge cards and learning maps chapter 15 taught you to design by hand can now get an AI-assisted first draft tailored to one specific student a mentor has been watching all semester. The skill-matching chapter 9 already asked mentors to do by eye, and the scheduling puzzle chapter 11 worked through with sticky notes, can both get an AI agent's help finding a better fit faster. A handful of specialized agents beyond the operational roster -- drafting a grant paragraph, a social post, a translated flyer -- round out what a club can realistically hand to AI. And because a mentor cannot personally test-drive every new tool that promises to help, this chapter closes with a repeatable process for choosing one responsibly, testing it before students ever see it, and training the next leader to keep using it well.

!!! mascot-welcome "Let's put AI to work on the curriculum itself"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- this time by pointing your newest volunteer at the lessons themselves. You'll see how an AI agent can help customize a challenge card for one student, match mentors to students, and even draft a grant paragraph, all while a mentor keeps the final say. By the end, you'll know how to pick a tool responsibly and roll it out without losing your club's trust along the way.

## Customizing Curriculum With AI

Chapter 15 showed you how to design a curriculum by hand: three tracks, a pacing guide, and challenge cards color-coded by difficulty. Everything in this section still produces those same artifacts -- a lesson, a challenge card, a curriculum sequence. What changes is that an AI agent now drafts the first pass, shaped to one specific student a mentor already knows from watching them work in the room.

### Building Student Mental Models

**Building student mental models** means forming a working picture of what a specific student already understands, what they get stuck on, and what genuinely interests them -- based entirely on what a mentor observes during real sessions, not on a stored profile that follows the student between clubs or years. This is ordinary teaching judgment, the same instinct a good classroom teacher builds for every student they see week after week; an AI agent's role is only to help a mentor notice a pattern faster, never to replace the mentor's own read of the room.

A worked example shows the practice at its simplest: over three Saturday sessions, a mentor notices that one student lights up whenever a challenge card mentions music or sound, but visibly disengages from anything framed around sports statistics. That is the entire mental model -- not a data file, just something the mentor has learned about one kid by paying attention. When the mentor later asks an AI agent to draft a customized challenge card for that student, the mental model is what the mentor types into the request, from memory, session by session -- not something pulled automatically from any system.

### Customizing Lessons With AI

**Customizing lessons with AI** is the umbrella practice this section builds toward: a mentor, drawing on the mental model they have built of a specific student, asks an AI agent to draft a lesson variant suited to that student, then reviews the draft before using it -- the same human-in-the-loop habit chapter 32 established for every other kind of AI-drafted content in this book. It is differentiated instruction, a practice good teachers have always done by hand, with an AI agent now doing the time-consuming part of drafting several versions quickly.

A worked example shows the practice end to end: a mentor has two students starting the same loops-and-conditionals concept card on the same afternoon. One loves music, the other loves basketball, per the mentor's own observation. The mentor asks an agent to draft two versions of the same underlying loop exercise -- one that counts beats in a drum pattern, one that counts free-throw attempts -- and reviews both before printing either. The computational thinking content taught is identical; only the framing changed, and a person chose both framings.

!!! mascot-thinking "Customizing is about the student in front of you, not a permanent record"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice what makes this safe: the mental model above lives in a mentor's head, refreshed by what they see this term, not in a growing digital file that follows a student for years. Customizing today's lesson is not the same thing as building a permanent profile of a child -- keep that line clear as you read the rest of this chapter.

### AI Assisted Lesson Customization

**AI assisted lesson customization** is the specific mechanics of the practice above: telling an agent which pacing, analogy, difficulty, or example to change, and getting back a revised lesson that keeps the same underlying concept intact. It is narrower than "customizing lessons with AI" in general -- this is the actual prompt-and-draft step, the same kind of specific, detail-rich request that chapter 32's prompt engineering guidance already showed produces a far more useful first draft than a vague one.

A worked example shows the specificity paying off: a mentor asks an agent to "slow down the pacing of the intermediate Python loops card and add one extra worked example before the practice problem, keeping the same final challenge." The agent returns a card with an inserted worked example and one fewer practice repetition up front -- exactly the two changes requested, nothing else altered. Because the mentor specified precisely what to change, reviewing the draft took under a minute; a vague request like "make this easier" would have returned a card the mentor had to compare line by line against the original to see what actually changed.

#### Diagram: From Observation to Customized Lesson

<iframe src="../../sims/ai-lesson-customization-workflow/main.html" width="100%" height="762px" scrolling="no"></iframe>

<details markdown="1">
<summary>From Observation to Customized Lesson</summary>
Type: workflow
**sim-id:** ai-lesson-customization-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-concept-hierarchy

Purpose: Tie building a student mental model, customizing lessons with AI, and AI assisted lesson customization into one traceable loop, so a learner sees where the mentor's own observation enters the process and where the human review step from chapter 32 still applies.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a customization scenario, the learner explains which stage of the loop is mentor observation, which is the AI draft, and which is human review.

Steps (flowchart, no decision diamonds needed):
1. Start: "Mentor Observes a Student in Session" -- click reveals "The mentor's own week-to-week observation -- what a student enjoys, what they get stuck on -- never a stored profile."
2. Process: "Mentor Forms a Mental Model" -- click reveals "A working picture in the mentor's head: 'this student responds well to music-themed examples.'"
3. Process: "Mentor Requests a Specific Customization" -- click reveals "A detailed prompt naming exactly what should change -- pacing, analogy, difficulty -- following the specificity habit from chapter 32's prompt engineering section."
4. Process: "AI Agent Drafts the Customized Lesson" -- click reveals "The agent produces a revised card or lesson, keeping the underlying concept the same."
5. Process: "Mentor Reviews the Draft" -- click reveals "The same human-in-the-loop review chapter 32 required for every AI-drafted output, applied here to a lesson instead of a message."
6. End: "Customized Lesson Used With the Student" -- click reveals "The version that actually reaches the student -- always mentor-approved, never sent straight from the agent."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for the two mentor-observation steps, amber for the AI-drafting step, green for the human-review and final-use steps.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
</details>

### AI Assisted Curriculum Design

**AI assisted curriculum design** zooms out from a single lesson to the whole sequence chapter 15 introduced -- an agent proposing how to order challenge cards across the beginner, intermediate, and advanced tracks, or drafting a pacing guide for a shorter or longer term than the standard twelve sessions. It works the same way a planning AI agent did in chapter 32 for a semester calendar: the agent respects constraints a leader supplies, and a person decides whether the proposed sequence actually fits this club.

A worked example shows the constraint-respecting draft in practice: a leader running a compressed six-week summer club asks an agent to compress chapter 15's twelve-session beginner track into six sessions without dropping the unplugged activities that build coding vocabulary early. The agent proposes combining two adjacent Scratch sessions into one and moving the stretch-goal challenge cards to optional take-home materials -- a genuinely reasonable compression a leader can approve in minutes rather than redesigning the whole pacing guide from scratch.

### AI Generated Challenge Card

**An AI generated challenge card** is a complete card -- title, materials list, numbered steps, stretch goal, and concept tag, in the exact format chapter 15 defined -- drafted by an AI agent from a mentor's description of what they want, rather than written by hand from a blank template. The color-coded border, the reading-level target for its track, and the required stretch goal all still apply; the agent just produces the first draft of the words that go inside them.

A worked example shows the drafting and the catch that review is for: a mentor asks an agent to draft a green beginner-level card teaching the "repeat" block in Scratch, themed around a student's love of skateboarding tricks. The agent returns a card titled "Trick Combo Machine" with clear numbered steps and a stretch goal, but sets the reading level slightly above what chapter 15 recommends for a first-time beginner card. The mentor simplifies two sentences before printing -- a small fix compared to writing the card from nothing, but still a fix only a human caught.

#### Diagram: Template Card vs. AI-Customized Card

<iframe src="../../sims/generic-vs-ai-challenge-card/main.html" width="100%" height="582px" scrolling="no"></iframe>

<details markdown="1">
<summary>Template Card vs. AI-Customized Card</summary>
Type: microsim
**sim-id:** generic-vs-ai-challenge-card<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner compare a generic template challenge card against an AI-customized version of the same underlying concept, to see exactly which fields changed and which stayed fixed by chapter 15's format.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare

Learning objective: Given a generic and an AI-customized challenge card teaching the same concept, the learner compares them to identify what customization changed and what the required format kept constant.

Instructional Rationale: This is an Analyze-level compare objective, so the sim shows both full card texts side by side with the differing fields visually highlighted, rather than animating a generation process the learner cannot meaningfully inspect.

Canvas layout:
- Left (300px): Generic template card -- "Loop Practice," sports-themed example, standard stretch goal
- Right (300px): AI-customized card -- "Trick Combo Machine," skateboarding-themed example, same underlying "repeat" block concept
- Bottom (100px): toggle controls and a highlight-differences button

Visual elements:
- Both cards rendered in the same 5x7 layout from chapter 15's anatomy diagram: title, green border, materials list, numbered steps, stretch goal, concept tag
- Differing text (title, example theme, stretch-goal wording) shown in the customized card with a highlighted background; identical structural fields (border color, concept tag, step count) shown with a matching outline on both cards

Interactive controls:
- Button: "Highlight What Changed" -- highlights the differing fields on both cards simultaneously
- Button: "Highlight What Stayed Fixed" -- highlights the border, concept tag, and format that chapter 15 requires regardless of customization
- Dropdown: switch the customization theme (Skateboarding, Music, Basketball) to regenerate the right-hand card with a different but equally valid customization

Default parameters: No highlight active; theme = Skateboarding

Implementation notes: p5.js canvas with createButton for the two highlight toggles and createSelect for the theme dropdown; each theme's customized card text lives in a small lookup object so switching themes updates the right card's text without altering the left template card.
</details>

## Matching Mentors and Optimizing Schedules

Chapter 9 taught mentors to match their own skills to a student's interests by conversation and observation, and chapter 11 taught leaders to build a session calendar by comparing mentor availability against venue hours by hand. Both are exactly the kind of cross-referencing problem an AI agent handles well: more variables than a person can hold in their head at once, but still a proposal a person has to approve.

### AI Assisted Mentor Matching

**AI assisted mentor matching** pairs a specific mentor with a specific student based on stated skills and interests -- a mentor who lists robotics and Python paired with a student whose challenge card history shows they gravitate toward physical computing -- going beyond the informal matching chapter 9 described by comparing every mentor against every student at once rather than one conversation at a time. The agent proposes pairings; a leader still makes the final call, since a good match also depends on things no list captures, like two personalities that simply click.

A worked example shows the scale where this earns its keep: a club with nine mentors and twenty-two students would require thirty-six possible one-to-one comparisons if a leader tried to reason through every combination by hand. A mentor matching agent scores each mentor-student pair by shared interest tags and proposes the five strongest pairings first. The leader accepts four of the five outright and swaps one pairing after recalling that those two particular students already work well together in the same small group -- a piece of context no interest tag could have captured.

### AI Scheduling Optimization

**AI scheduling optimization** goes a step further than the scheduling AI agent chapter 32 introduced: instead of ranking a handful of candidate dates against mentor availability, it searches across many possible combinations of date, time, and room assignment at once, factoring in constraints like the venue's earliest open hour, a specific mentor who can only make evenings, and the district holiday calendar chapter 11 already tracks. It still only proposes a ranked option; a leader commits to one.

A worked example shows the multi-constraint search doing real work: a leader needs a weekday schedule that satisfies three mentors' partly overlapping evening availability, avoids the district's early-release Wednesdays, and keeps every session inside the venue's 4-to-6 p.m. open window. A scheduling optimization agent checks combinations a leader would need an entire spreadsheet to compare by hand, and returns a Tuesday/Thursday 4:30 slot as the only combination that satisfies all three constraints simultaneously -- along with a note that a Monday option was close but conflicted with one mentor's evening class.

!!! mascot-tip "Let the agent rank the options, you make the call"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: when you ask a matching or scheduling agent for help, ask for its top three ranked options instead of just one. Seeing why the runner-up options lost -- one mentor conflict, one room conflict -- often tells you more than the winning option alone.

#### Diagram: Matching Mentors and Optimizing a Schedule

<iframe src="../../sims/mentor-matching-schedule-optimizer/main.html" width="100%" height="782px" scrolling="no"></iframe>

<details markdown="1">
<summary>Matching Mentors and Optimizing a Schedule</summary>
Type: graph-model
**sim-id:** mentor-matching-schedule-optimizer<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/organizational-analytics/tree/main/docs/sims/mentor-matching-network

Purpose: Let a learner examine a bipartite mentor-student matching graph alongside a small set of schedule-slot nodes, to see how both AI assisted mentor matching and AI scheduling optimization score multiple candidates before a person picks one.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a mentor-student matching graph and a set of candidate schedule slots, the learner examines the scores to identify the strongest mentor-student pairing and the schedule slot that satisfies every stated constraint.

Node types:
1. Mentor nodes (blue circles, left column): five mentors, each labeled with one or two interest tags (e.g., "Robotics, Python")
2. Student nodes (green circles, right column): five students, each labeled with one or two interest tags
3. Schedule slot nodes (amber squares, bottom row): three candidate slots (Mon 5pm, Tue/Thu 4:30pm, Wed 6pm), each labeled with which constraint it violates, if any

Edges:
- Mentor-to-student edges weighted by shared-interest score (thicker edge = stronger match), click an edge to reveal the matching score and shared tags
- Dashed lines from each schedule slot to a small "constraints" icon, click to reveal which constraint (mentor availability, venue hours, holiday calendar) that slot satisfies or fails

Interactive features:
- Click any mentor or student node to highlight its strongest-scoring match and dim all other edges
- Click any schedule slot node to reveal its full constraint checklist in a side panel, with failed constraints marked in red and satisfied ones in green
- Button: "Show Top-Ranked Pairing and Slot" -- highlights the single best mentor-student match and the one fully-satisfying schedule slot simultaneously
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Blue for mentors, green for students, amber for schedule slots; edge thickness maps to match strength

Legend: Node color key (mentor, student, schedule slot) and edge-thickness meaning

Implementation: vis-network JavaScript library, bipartite layout with mentors and students in two columns and schedule slots in a row beneath, canvas size 800x480px.
</details>

## Specialized Agents Beyond Club Operations

Chapter 32's roster covered a club's day-to-day operations: registration, scheduling, reminders, and coaching. The five agents below handle tasks that come up less often but still eat real hours -- writing a grant, posting to social media, updating a website, translating a flyer, or reading something aloud -- each one a job an AI agent can draft, and a person can finish.

### AI Assisted Grant Writing

**AI assisted grant writing** drafts sections of a grant proposal -- a needs statement, a program description, a budget narrative -- from bullet points a leader supplies about the club's mission and the specific funder's stated priorities, going beyond a generic form letter by pulling language that actually answers what chapter 30's grant-writing guidance said funders look for. The agent drafts persuasive prose from facts; a leader still supplies the facts and checks that every claim in the draft is true.

A worked example shows the drafting narrowing a real gap: a leader has three bullet points -- "35 students served last year, no-fee model, two under-served zip codes reached" -- and a funder's stated priority of "expanding STEM access in low-income neighborhoods." A grant writing agent turns those bullets into a two-paragraph needs statement that explicitly echoes the funder's own priority language. The leader checks the draft against the club's actual attendance records before submitting, catching that the agent rounded "35" up to "nearly 40" -- a small but real overstatement corrected before it left the building.

### AI Assisted Social Media

**AI assisted social media** drafts a post -- caption, hashtags, and a suggested photo description -- for a specific platform and moment, extending the storytelling practice chapter 7 introduced with an agent that can turn a short leader note into a platform-ready draft in seconds rather than the ten minutes writing one from scratch used to take. As with every other drafting agent in this book, the post goes out only after a person reads it, particularly to catch anything that might identify a specific student without a parent's consent.

A worked example shows the consent check catching something real: a leader asks an agent to draft a celebratory post about a recent robot demonstration, pasting in three photo captions from the event. The agent's draft names one student directly in the caption: "Maya's robot completed the obstacle course first try!" The leader, recalling the club's photo-consent policy, edits the caption to remove the name before posting, since not every family had signed a media-release form for that specific student.

### AI Generated Website Content

**AI generated website content** drafts copy for a club's public pages -- an "About Us" section, a description of what a first visit looks like, an FAQ answer -- pulling from the same walk-in-experience details chapter 5 described, so a family reads roughly the same story on the website that they will experience walking through the door. A leader supplies the real facts about the club; the agent turns them into welcoming, readable web copy.

A worked example shows the draft matching a real first impression: a leader gives an agent three facts -- inward-facing monitors, a center table with challenge cards on display, and a 3:1 mentor ratio -- and asks for a short "What to Expect" paragraph for the registration page. The agent's draft describes the room accurately and warmly, but calls the ratio "one mentor for every three students" in a way a first-time reader might misread as capacity rather than support; the leader rewords that one sentence before publishing, keeping the rest of the draft as written.

Three of the five specialized agents above draft outward-facing content; the last two -- translation and voice -- change how that content reaches a family rather than what it says.

| Specialized Agent | What It Drafts | Who Reviews Before Use |
|---|---|---|
| AI Assisted Grant Writing | Grant proposal sections | Leader checks every factual claim |
| AI Assisted Social Media | Platform-ready posts | Leader checks for un-consented student identification |
| AI Generated Website Content | Public web page copy | Leader checks accuracy against the real walk-in experience |
| AI Assisted Translation | First-pass translated materials | A fluent speaker confirms meaning and tone |
| AI Voice Assistant Use | Spoken read-aloud of existing text | A person confirms the text being read is current |

### AI Assisted Translation

**AI assisted translation** produces a first-pass translation of an existing club document -- the registration form, a flyer, the make-up policy chapter 32's parent chatbot already quotes -- into a family's home language, extending chapter 28's translated materials practice with a much faster starting draft than translating by hand from scratch. A first-pass machine translation is a draft, not a finished document: idiom, tone, and culturally specific phrasing routinely need a fluent human speaker's correction before a family ever sees it.

A worked example shows exactly why that check matters: a leader asks an agent to translate the club's make-up-session policy into Spanish for a family who requested it. The draft is grammatically correct but translates "make-up session" using a phrase that, to a fluent speaker, reads as referring to cosmetics rather than a rescheduled class. A bilingual mentor catches the mistranslation before the flyer goes home, swapping in the correct idiom -- exactly the kind of error a first-pass AI translation is prone to and a fluent reviewer exists to catch.

### AI Voice Assistant Use

**AI voice assistant use** is having an agent read existing club text aloud or answer a simple spoken question hands-free -- reading tomorrow's mentor confirmation list out loud while a leader is packing kits with both hands full, or reading a challenge card's steps aloud for a student who reads more easily by listening than by sight. It only reads or answers from text a person already wrote and approved; it does not draft new content on its own.

A worked example shows the hands-free use case plainly: while loading the car with kits for tomorrow's session, a leader asks a voice assistant to read back the confirmed mentor list for the morning. The assistant reads the exact list from the leader's own calendar, aloud, without needing hands free from carrying boxes -- a small convenience, but one that saves an actual trip back inside to check a phone screen.

#### Diagram: Meet the Specialized Agent Roster

<iframe src="../../sims/specialized-agent-roster/main.html" width="100%" height="702px" scrolling="no"></iframe>

<details markdown="1">
<summary>Meet the Specialized Agent Roster</summary>
Type: graph-model
**sim-id:** specialized-agent-roster<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-strategy-for-education/tree/main/docs/sims/ai-concept-hierarchy

Purpose: Show the five specialized agents as a network around the idea of tasks beyond club operations, so a learner can click any agent type and see the task it handles and who reviews its output.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a club task outside day-to-day operations, the learner classifies which of the five specialized agents is the right match for it.

Node types:
1. Center node "Specialized Agents" (gray hexagon) -- click reveals "Tasks beyond registration, scheduling, and reminders -- less frequent, but still time-consuming without help."
2. AI Assisted Grant Writing (blue circle) -- click reveals "Drafts grant proposal sections from bullet-point facts. Reviewed by: the leader, for factual accuracy."
3. AI Assisted Social Media (green circle) -- click reveals "Drafts a platform-ready post and caption. Reviewed by: the leader, for un-consented student identification."
4. AI Generated Website Content (amber circle) -- click reveals "Drafts public web page copy. Reviewed by: the leader, for accuracy against the real walk-in experience."
5. AI Assisted Translation (purple circle) -- click reveals "Produces a first-pass translation of an existing document. Reviewed by: a fluent speaker, for meaning and tone."
6. AI Voice Assistant Use (teal circle) -- click reveals "Reads existing, already-approved text aloud or answers a simple spoken question. Reviewed by: nobody new -- it only reads what a person already approved."

Edges: One edge from the center node to each of the five agent-type nodes, unlabeled.

Interactive features:
- Hover any node to preview its one-line job description
- Click any node to highlight it and open a side-panel infobox with its full description and reviewer
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Center node larger and gray; five spoke nodes evenly sized, each a distinct accent color; uniform edge style

Legend: Node color key matching the five agent types plus the center "umbrella" node

Implementation: vis-network JavaScript library, hierarchical or force-directed hub layout, canvas size 800x450px.
</details>

## Coding-Help Agents for Students (Mentor-Supervised)

This book teaches you how to run a club, not how to teach Scratch or Python syntax -- that stays out of scope, as the course description states, and the three agents below don't change that boundary. Each one gives a mentor a supervised assist with the coding-help work a mentor already does; none of them hands a student an unsupervised answer or takes over the teaching itself.

### AI Assisted Debugging Help

**AI assisted debugging help** suggests where a bug is likely hiding in a student's code -- a mismatched indentation, a variable used before it was set -- without fixing the code itself, preserving the debugging skill chapter 14 identified as one of the five core computational thinking abilities. Fixing the bug outright would rob the student of the exact skill the exercise is meant to build; pointing at where to look keeps the student doing the actual debugging.

A worked example shows the distinction holding: a student's Scratch project isn't making a sprite move, and a mentor asks a debugging help agent what might be wrong. The agent suggests checking whether the "when green flag clicked" block is actually connected to the movement blocks below it -- a specific place to look, not a rewritten script. The mentor relays that suggestion to the student as a question ("what's connected to what, here?") rather than as an answer, and the student finds and reconnects the loose block themselves.

### AI Tutor For Students

**An AI tutor for students** walks a student through a series of guided hints toward figuring out an answer themselves, going a step further than the AI chatbot for students chapter 32 introduced, which only answers direct, policy-safe questions and hands off anything else to a mentor. Where that chatbot answers a question, a tutor asks one back -- the same Socratic approach a good mentor already uses when a student asks for the answer outright -- and a mentor stays present to make sure the hinting actually helps rather than frustrates.

A worked example shows the hinting in action: a student asks why their loop only runs once instead of repeating. Rather than stating the fix, the tutor asks, "what does the block right above your loop tell the program to do before it starts?" -- nudging the student to notice the loop's condition is set to check something that's already false. The student answers their own question after the second hint, with a mentor nearby watching to step in if the hints stop working.

!!! mascot-tip "A hint that gives away the answer isn't a hint anymore"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a quick way to judge any coding-help agent's response before passing it to a student: could the student still get it wrong after reading it? If the answer is obviously no, the "hint" was really just the answer, and the student lost the chance to debug it themselves.

### AI Code Review Assistant

**An AI code review assistant** gives a first-pass scan of a student's project -- flagging an unused variable, an oddly named function, or a repeated block that could become a loop -- before chapter 15's peer code review begins, so students spend their peer-review time on substantive discussion rather than the same small style nits an agent could catch instantly. It supplements peer code review; it does not replace the practice of one student explaining their thinking to another.

A worked example shows the supplement working as intended: a student submits a finished project for the club's regular peer code review session. Before the peer pairing starts, a code review assistant flags that a variable named "x" is used for a score counter and suggests a clearer name like "score." The student renames it in thirty seconds, and the peer reviewer's actual session time goes toward discussing whether the game's difficulty curve makes sense -- a richer conversation than either student would have had time for if the review had started with naming nitpicks.

#### Diagram: Where a Coding-Help Request Goes

<iframe src="../../sims/coding-help-agent-handoff/main.html" width="100%" height="762px" scrolling="no"></iframe>

<details markdown="1">
<summary>Where a Coding-Help Request Goes</summary>
Type: workflow
**sim-id:** coding-help-agent-handoff<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/modeling-healthcare-data/tree/main/docs/sims/explainable-ai-recommendation-workflow

Purpose: Trace how a student's coding question routes to debugging help, a tutor, or a code review assistant, and show that a mentor stays present at every branch rather than any one agent working with a student unsupervised.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a student's coding question, the learner differentiates which of the three coding-help agents applies and identifies the mentor's role in that path.

Steps (flowchart with a decision diamond):
1. Start: "Student Has a Coding Question" -- click reveals "Something isn't working, isn't understood, or is ready for a second look."
2. Decision: "What Kind of Help Is Needed?" -- click reveals "Routes to one of three coding-help agents based on the actual need."
3a. Branch to "AI Assisted Debugging Help" -- click reveals "Suggests where a bug might be, never fixes the code directly."
3b. Branch to "AI Tutor For Students" -- click reveals "Asks a guiding question back rather than stating the answer."
3c. Branch to "AI Code Review Assistant" -- click reveals "Flags style-level issues before a peer code review session begins."
4. All three branches converge on "Mentor Present and Available" -- click reveals "A mentor stays in the room for all three, ready to step in if the hint, suggestion, or flag isn't landing."
5. End: "Student Does the Actual Fixing, Answering, or Revising" -- click reveals "The agent points; the student -- not the agent -- does the work that builds the skill."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start/end states, purple for the decision diamond, three distinct accent colors for the three coding-help branches, green for the converged mentor-present step.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox.
</details>

## Choosing AI Tools Responsibly

Chapter 32 covered guardrails, oversight, and review for agents already running in a club. This section covers the step before any of that: deciding whether a specific AI tool belongs in your club at all, and watching for the two risks that matter most when the people affected are minors.

### AI Bias Awareness

**AI bias awareness** is understanding that an AI tool can systematically favor or disadvantage certain groups -- not because anyone intended it to, but because the tool learned patterns from data that already contained those patterns. A mentor matching agent, for instance, could learn to pair mentors and students along lines that track race, gender, or home zip code rather than the actual skills and interests it was supposed to match on, simply because its training data happened to correlate those things. Bias awareness means checking a tool's actual output for that kind of pattern, not just trusting that a well-designed tool couldn't produce one.

A worked example shows exactly the pattern to watch for: a leader reviewing three months of AI-suggested mentor-student pairings notices that every pairing involving a mentor from the local engineering employer's volunteer program went to a student from the same two neighborhoods, even though nothing in the mentors' stated interests pointed that direction. Looking closer, the leader realizes the agent had learned to weight home-neighborhood proximity heavily, most likely because past pairings in its training examples happened to cluster that way -- not because proximity was ever a stated matching criterion. The leader adjusts the matching request to explicitly exclude neighborhood as a factor and re-runs the pairings, producing a noticeably more mixed result.

### AI Data Privacy Risk

**AI data privacy risk** is the danger that using an AI tool means sending more information about a student than the task actually requires to a system outside the club's control -- a browser extension that logs every keystroke a student types, a "smart" tool that stores a student's full name alongside their coding mistakes indefinitely, or a service whose terms of use allow it to reuse submitted data to train future versions of itself. The risk is not that AI itself is unsafe; it is that a tool can quietly collect far more than the club, or the family, ever agreed to.

A worked example shows the check that catches this: before adopting a new AI code review assistant, a leader reads its terms of service and finds a clause allowing submitted code to be used for "product improvement" without an opt-out -- meaning a student's project, and any comments the student wrote in it, could be retained and reused indefinitely by the vendor. The leader chooses a different tool with a clear data-retention limit and no reuse clause instead, treating that clause as a disqualifying flag rather than fine print to skip past.

!!! mascot-warning "Read what a tool does with data before a single student uses it"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this trap: a tool can be genuinely excellent at the task you want and still be the wrong choice, because of what it does with the data behind the scenes. The fix is simple but non-negotiable -- read the actual data and retention terms before any student's work or information reaches a new AI tool, not after.

#### Diagram: Bias Risk, Privacy Risk, or Neither?

<iframe src="../../sims/bias-privacy-risk-sorter/main.html" width="100%" height="562px" scrolling="no"></iframe>

<details markdown="1">
<summary>Bias Risk, Privacy Risk, or Neither?</summary>
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
</details>

### AI Tool Selection Criteria

**AI tool selection criteria** are the specific questions a club answers before adopting any new AI tool -- not just "does it work," but does it clearly state what happens to submitted data, can its output be explained well enough for a mentor to catch an error, does it support the languages a club's families actually speak, and does its cost fit the budget chapter 30 already built. Written criteria, decided once and applied to every candidate tool, keep a decision from resting on how polished a single demo looked.

A worked example shows written criteria changing a real decision: a leader is choosing between two challenge-card generation tools. One has a more impressive demo but a vague, one-line privacy statement; the other's demo is plainer but its terms clearly state a thirty-day data deletion policy and no reuse for training. Measured against the club's written criteria, the plainer tool wins, even though it looked less exciting in the fifteen-minute trial both leaders sat through.

### AI Agent Cost Management

**AI agent cost management** is tracking what AI tools actually cost a club over a full year -- a subscription fee, a per-message usage charge, or a free tier that later requires payment once a club exceeds a usage limit -- and weighing that ongoing cost against the volunteer hours it saves, the same recurring-versus-one-time cost thinking chapter 30's budgeting already applied to physical kits. An AI tool that saves a leader two hours a month is worth a modest subscription; one that costs more than a club's entire kit budget usually is not, no matter how impressive its output.

A worked example shows the trade-off made concrete: a club's free-tier AI drafting tool starts charging once usage crosses fifty messages a month, right around the volume a busy month of newsletters, reminders, and challenge cards actually generates. The leader compares the $15-a-month cost against the roughly three hours a month it saves drafting content by hand, decides the trade is worth it, and adds the $180 annual cost as its own line item in next year's budget rather than letting it appear as a surprise mid-year charge.

### AI Agent Vendor Comparison

**AI agent vendor comparison** is evaluating multiple tools against the same written selection criteria side by side, rather than adopting the first tool a leader happens to try -- the same disciplined, criteria-first comparison chapter 25 already taught for evaluating any new club software tool, applied specifically to AI agents. A side-by-side comparison also makes a switch easier later, since a club that only ever evaluated one tool has no baseline for judging whether a replacement is actually better.

A worked example shows the comparison surfacing a real trade-off: comparing three grant-writing tools against the club's criteria, a leader finds one scores highest on cost, a second scores highest on data privacy, and a third scores highest on output quality. No single tool wins on every criterion; the leader picks the data-privacy leader anyway, since the club's written criteria weight that factor most heavily for anything touching family and financial information.

#### Diagram: Comparing AI Tools Against Selection Criteria

<iframe src="../../sims/ai-tool-selection-radar/main.html" width="100%" height="562px" scrolling="no"></iframe>

<details markdown="1">
<summary>Comparing AI Tools Against Selection Criteria</summary>
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
</details>

## Rolling Out a New AI Agent

Choosing a tool responsibly is only half the job; the five concepts below cover actually bringing a new AI agent into a running club without disrupting the sessions already working well.

### AI Agent Workflow Design

**AI agent workflow design** is mapping out, before adoption, exactly where a new agent fits into an existing club process -- which step it drafts, who reviews it, and where the human-in-the-loop checkpoint from chapter 32 sits -- rather than dropping a new tool into a session and figuring out the workflow as problems come up. For example, adding an AI code review assistant means deciding it runs before peer code review, not during or after, and writing that placement down so the next mentor who uses it knows exactly when.

### AI Agent Integration Testing

**AI agent integration testing** is trying a new agent out on real but low-stakes club material before any student or family ever sees its output -- running last month's already-reviewed newsletter draft back through a new drafting tool to compare results, for instance -- so a leader learns a tool's quirks on a task where a mistake costs nothing. Skipping this step means the first real test happens live, in front of a family, which is exactly the situation a club wants to avoid.

!!! mascot-encourage "Testing feels slow, but it's what makes the fast part safe"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If integration testing feels like a tedious extra step before you get to use your new tool, that feeling is completely normal -- most leaders want to skip straight to the exciting part. Give it one low-stakes trial run first anyway; it's usually the fastest hour you'll spend all month.

### AI Agent Rollout Plan

**An AI agent rollout plan** is a short, written schedule for introducing a tested agent gradually -- one mentor trying it for two weeks before the whole club adopts it, for example -- rather than switching every mentor over on the same day. A gradual rollout means a problem the integration test missed surfaces with one mentor's feedback instead of the whole club's, and it stays small and fixable.

### AI Agent Training For Leaders

**AI agent training for leaders** is a short, hands-on session teaching every mentor who will use a new agent how to write a good prompt for it, what its guardrails are, and what its known quirks are from integration testing -- the same specificity habit chapter 32's prompt engineering section taught, now passed on deliberately instead of left for each mentor to rediscover alone through trial and error.

### Coaching Leaders With AI

**Coaching leaders with AI** closes the loop the mentor coaching AI agent from chapter 32 started: an agent can also draft suggestions for the club's own leadership -- a founder or a rotating co-leader -- based on aggregated patterns across the club's own retrospective notes chapter 12 already collects, helping a newer leader learn from a predecessor's accumulated experience even after that predecessor has moved on.

#### Diagram: The AI Agent Rollout Pipeline

<iframe src="../../sims/ai-agent-rollout-pipeline/main.html" width="100%" height="842px" scrolling="no"></iframe>

<details markdown="1">
<summary>The AI Agent Rollout Pipeline</summary>
Type: workflow
**sim-id:** ai-agent-rollout-pipeline<br/>
**Library:** Mermaid<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/ai-persona-testing/tree/main/docs/sims/multi-agent-workflow-composer

Purpose: Tie workflow design, integration testing, a rollout plan, leader training, and AI-assisted leader coaching into one ordered pipeline, so a learner sees the full sequence a club follows from deciding to adopt a tool to using it club-wide.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a stage of the rollout pipeline, the learner differentiates it from the stages before and after it and states what would go wrong if that stage were skipped.

Steps (flowchart, linear with one feedback loop):
1. Start: "Tool Selected (per Selection Criteria)" -- click reveals "The vendor comparison and selection criteria from earlier in this chapter already happened by this point."
2. Process: "AI Agent Workflow Design" -- click reveals "Map exactly where the new agent fits into an existing club process and who reviews its output."
3. Process: "AI Agent Integration Testing" -- click reveals "Try the agent on real but low-stakes material before any family sees its output."
4. Process: "AI Agent Rollout Plan" -- click reveals "Introduce the tested agent gradually -- one mentor first, not the whole club at once."
5. Process: "AI Agent Training For Leaders" -- click reveals "Teach every mentor who will use it how to prompt it well and what its guardrails and quirks are."
6. Process: "Coaching Leaders With AI" -- click reveals "An ongoing agent-assisted coaching layer for the club's own leadership, drawing on retrospective notes over time."
7. Feedback loop: an arrow from "Coaching Leaders With AI" back to "AI Agent Workflow Design" -- click reveals "Rollout is not one-and-done; a lesson learned during coaching can send a leader back to redesign how the agent fits the workflow."
8. End: "Agent Fully Adopted Club-Wide" -- click reveals "The point every stage above was building toward -- reached deliberately, not by skipping steps."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Gray for start/end states, blue for the five sequential process steps, amber dashed line for the feedback loop back to workflow design.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; the feedback edge drawn with a dashed style and a curved path to distinguish it from the main forward sequence.
</details>

## Chapter Summary

This chapter pointed the AI agent chapter 32 introduced at the curriculum itself: a mentor's own observation of a student became the mental model behind a customized lesson or an AI-generated challenge card, mentor matching and scheduling optimization turned chapter 9 and chapter 11's by-hand cross-referencing into a ranked proposal, and five specialized agents took a real bite out of grant writing, social media, website copy, translation, and hands-free reading. Three coding-help agents showed how far AI assistance can go for a student without ever crossing into the syntax tutoring this book leaves to other textbooks -- a mentor stays present at every branch. None of it is safe to adopt casually: AI bias awareness and AI data privacy risk named two specific failure modes worth checking for in any tool, written selection criteria and cost and vendor comparison turned that checking into a repeatable decision, and a five-stage rollout pipeline -- workflow design, integration testing, a gradual rollout plan, leader training, and ongoing AI-assisted coaching -- carried a chosen tool safely from a good idea into daily use.

!!! mascot-celebration "You can now customize curriculum with AI and roll out new agents safely"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built a complete picture of how AI can customize a lesson, match a mentor, draft a grant paragraph, and supervise a student's coding help -- and exactly how to choose, test, and roll out a new agent without ever losing sight of the mentor's own judgment. That's a club ready to grow its AI use thoughtfully, one tested step at a time.

[See Annotated References](./references.md)
