---
title: Designing a Curriculum With Challenge Cards and Portfolios
description: Covers sequencing beginner-through-advanced curriculum tracks, designing challenge cards, and making student progress visible through badges and portfolios.
generated_by: claude skill chapter-content-generator
date: 2026-08-31 00:00:00
metadata:
  ibook:
    version: 1.10
---

# Designing a Curriculum With Challenge Cards and Portfolios

## Summary

This chapter covers how to sequence a curriculum across beginner, intermediate, and advanced tracks, including self-paced learning paths. It introduces challenge cards, concept challenge cards, and student portfolios as the concrete tools that make progress visible, along with practices like peer code review and pair programming. You will be able to design a challenge-card-based curriculum sequence for your club.

## Concepts Covered

This chapter covers the following 25 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Project Based Curriculum | 42 |
| Curriculum Pacing Guide | 41 |
| Beginner Track Curriculum | 40 |
| Intermediate Track Curriculum | 39 |
| Advanced Track Curriculum | 38 |
| Self Paced Learning Path | 37 |
| Peer Code Review | 36 |
| Pair Programming | 29 |
| Code Along Session | 28 |
| Live Coding Demonstration | 27 |
| Coding Challenge Card | 26 |
| Concept Challenge Card | 25 |
| Designing Challenge Cards | 24 |
| Printing Challenge Cards | 23 |
| Learning Map | 22 |
| Skill Badge System | 21 |
| Badge And Sticker Reward | 20 |
| Portfolio Of Student Work | 19 |
| Show And Tell Session | 7 |
| Code Sharing Platform | 6 |
| Version Control Basics | 5 |
| Online Coding Platform | 4 |
| Offline Coding Environment | 3 |
| Unplugged Coding Activity | 2 |
| Coding Vocabulary Building | 1 |

## Prerequisites

This chapter builds on concepts from:

- [14. Computational Thinking, Scratch, and Python Basics](../14-computational-thinking-scratch-python/index.md)

---

Chapter 14 covered what students learn -- the thinking skills and the language progression. This chapter covers how that learning gets organized into an actual sequence students move through, and made visible through the physical and digital tools that show a student exactly how far they've come.

!!! mascot-welcome "Let's make progress visible"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- and give every builder a way to see how far they've come! This chapter covers curriculum tracks, challenge cards, and the badges and portfolios that turn invisible progress into something a student can point to.

## Sequencing the Curriculum

Chapter 1 introduced project-based learning as a general teaching approach; a full **project-based curriculum** applies that same principle across an entire term, organizing every single lesson around a finished artifact rather than an abstract topic. A **curriculum pacing guide** lays out roughly how many sessions each part of that curriculum should take, giving a mentor a planning anchor without locking every session to a rigid, inflexible date.

Most clubs organize that pacing into three tracks matched to the student skill levels from Chapter 9. A **beginner track curriculum** starts with keyboarding and Scratch, per Chapter 14's progression. An **intermediate track curriculum** builds toward the block-to-text transition and core Python constructs. An **advanced track curriculum** takes on multi-concept projects -- combining functions, loops, and conditionals into something like a simple game -- and is often where a professional mentor's deeper expertise (Chapter 9) matters most. Within any track, a **self-paced learning path** lets a faster or slower student move through the sequence at their own speed rather than everyone advancing in lockstep, which matters especially in a mixed-age-grouping session (Chapter 9) where skill level and age don't always line up. The poster below compares all three tracks.

#### Diagram: Three Curriculum Tracks

<iframe src="../../sims/three-curriculum-tracks/main.html" width="100%" height="600px" scrolling="no"></iframe>

<details markdown="1">
<summary>Three Curriculum Tracks</summary>
Type: infographic-overlay (grid)
**sim-id:** three-curriculum-tracks<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor quickly see what a student at each track level is typically working on, so a new mentor can place a student in the right track within their first session or two.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a student's current skills, the learner classifies which curriculum track best fits them.

Image style: Flat comparison poster, three vertical columns, each with a bold printed column header baked into the image ("Beginner Track," "Intermediate Track," "Advanced Track")

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `beginner-track` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "Keyboarding and first Scratch projects." Facts: typing practice tool sessions; first Scratch sprite and block-coding projects; heavy use of unplugged coding activities to build vocabulary before screens; success measured by finishing and sharing one complete project
2. `intermediate-track` -- color #F5A623 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "The block-to-text transition and core Python." Facts: block-based to text transition begins; Python variables, loops, and conditionals introduced one at a time; turtle graphics challenges provide visual verification; peer code review starts here as students have enough code to review
3. `advanced-track` -- color #7ED6A5 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "Multi-concept projects and mentoring others." Facts: combines functions, loops, and conditionals into a single project like a simple game; pair programming and live coding demonstrations become regular practice; students often begin serving as peer mentors (Chapter 9) themselves; strongest fit for professional mentor involvement

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones per the overlay-grid-data-json-schema
</details>

!!! mascot-thinking "Tracks are about current skill, not age or how long someone's attended"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that nothing about these three tracks is tied to a student's age or how many terms they've attended -- a sharp nine-year-old can be intermediate-track while an older student new to coding is still beginner-track. Placing students by demonstrated skill, not by age or tenure, is what makes a self-paced learning path actually work.

## Learning From Each Other

Several practices from professional software development translate well into a club setting. **Peer code review** has one student look over another's code and suggest improvements -- most effective once a student has enough working code to review, which is why it typically starts on the intermediate track. **Pair programming** puts two students at one computer, one actively typing while the other watches and suggests, then switching roles -- a structured, formalized version of the peer learning Chapter 1 described generally.

A **code-along session** has every student type the same code as a mentor, step by step, in sync -- useful for introducing a genuinely new concept where independent exploration would leave too many students stuck at the same unfamiliar syntax. A **live coding demonstration** is the mentor-led version without student typing: watching a mentor build something in real time, including the mentor's own mistakes and how they debug them, which is often more instructive than a polished, pre-written example, since it shows debugging (Chapter 14) as a normal, visible part of the process rather than something a good programmer never needs.

!!! mascot-tip "Let students see you make a real mistake"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: during a live coding demonstration, don't pre-debug your example before the session. A mentor who hits a real error and thinks aloud through fixing it teaches debugging far more convincingly than one who only ever shows code that already works.

## Challenge Cards

This book's signature curriculum tool, introduced briefly in Chapter 1, gets its full treatment here. A **coding challenge card** is a single printed or digital card describing one hands-on project -- a title, a difficulty level, a materials list, and numbered steps -- giving a student a self-contained, concrete goal without needing a mentor to explain the whole project verbally. A **concept challenge card** is a variant focused on a single computational thinking or syntax concept rather than a full project -- a short card just about loops, for instance, useful for quick reinforcement between larger projects. **Designing challenge cards** well means writing clear, numbered steps at the right reading level for the target track, including a "stretch goal" for students who finish early, and testing the card with an actual student before relying on it in a real session.

Once designed, **printing challenge cards** turns a digital design into the physical object students actually handle. A format most clubs converge on is a colorful 5x7 inch card, laminated for durability, with a wide 1/4-inch colored border running around the entire edge -- it's that border, more than any printed badge, that signals difficulty at a glance from across the room. The color follows a consistent three-level system:

| Border Color | Card Level | Who It's For |
|---|---|---|
| Green | Beginner Card | First-time students, new to the club, with no prior track experience assumed |
| Blue | Intermediate Card | Students who have mastered most of the introductory concepts in a track like Scratch, Python, or MicroPython |
| Black | Advanced Card | Students who have mastered most beginning concepts; often attempted with a partner |

That color-coding does real work at the center table design from Chapter 7: challenge cards are spread out across the table before students arrive, laid out so every card's colored edge is clearly visible rather than stacked or overlapping, letting a student scan the spread and gauge the difficulty on offer before picking anything up. A student typically grabs a small handful of cards -- often a familiar green card alongside one blue card to stretch a bit further -- and heads straight to a workstation to start building; a card that needs a specific kit should say so plainly enough that a student notices before they've already sat down without it.

Print quantities should match how a track actually gets used: most clubs keep about three duplicate copies of each beginner card, since many students start there at once, two copies of each intermediate card, and typically only one copy of each advanced card. That scarcity isn't just a printing shortcut -- it naturally pushes students toward the pair programming described earlier in this chapter, since two students both drawn to the same black-bordered card have every reason to simply work through it together rather than wait their turn. The diagram below labels the parts of a well-designed challenge card.

#### Diagram: Anatomy of a Challenge Card

<iframe src="../../sims/anatomy-of-a-challenge-card/main.html" width="100%" height="640px" scrolling="no"></iframe>

<details markdown="1">
<summary>Anatomy of a Challenge Card</summary>
Type: infographic-overlay (callout)
**sim-id:** anatomy-of-a-challenge-card<br/>
**Library:** Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts)<br/>
**Status:** Specified

Purpose: Show a new mentor exactly what belongs on a well-designed challenge card by labeling each part of an illustrated example card, so "designing challenge cards" becomes a checklist rather than a vague instinct.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given an unlabeled illustration of a challenge card, the learner identifies each of its required parts and what purpose it serves.

Image style: Flat illustration of a single 5x7 inch coding challenge card lying on a table, laminated finish, with a wide 1/4-inch solid green border running around the entire edge of the card (illustrating the beginner-level example; the border is a real structural feature of the card, not an annotation, so it belongs in the base image -- only numbers, leader lines, and the side-panel labels are added by the overlay engine). No other text/labels/numbers baked into the image beyond the card's own printed content (title text, list items), which is the one exception to the overlay engine's "no text" rule, since the card's printed content is the subject being illustrated.

Image dimensions: 900x1260 (portrait, approximating the 5x7 card's real-world aspect ratio)

Layout: side-panel (image left 65%, labels right 35%)

Structures to label (callouts, 6 total, each with name, 1-2 sentence description, approximate position, marker color):
1. "Title" -- top of the card -- color #4A90D9 -- "A short, inviting project name, like 'Rainbow Chase' rather than 'LED Strip Loop Exercise.'"
2. "Colored Border" -- the 1/4-inch border running around the card's edge -- color #2ECC71 -- "Signals difficulty at a glance: green for a Beginner Card, blue for an Intermediate Card, black for an Advanced Card. This example shows a green Beginner Card."
3. "Materials List" -- upper-middle section -- color #7ED6A5 -- "Every physical or software tool needed, checked against actual kit inventory before the session."
4. "Numbered Steps" -- center of the card, the largest section -- color #E67E22 -- "Clear, sequential instructions written at the target track's reading level."
5. "Stretch Goal" -- lower section, visually set apart -- color #9B59B6 -- "An optional extra challenge for a student who finishes early, preventing idle time."
6. "Concept Tag" -- bottom corner -- color #16A085 -- "Names the computational thinking skill or syntax concept the card reinforces, tying back to the skill progression ladder from Chapter 14."

Interactive features: Explore mode (hover/click each numbered marker to reveal its description); Quiz mode (learner is prompted to identify which part of the card serves a named purpose); Edit mode (`?edit=true`) for calibrating marker positions after the image is generated

Implementation: Interactive Infographic Overlay Guide (callout engine) -- `diagram.js` + `style.css` render numbered markers and leader lines over the generated card illustration; `data.json` holds the 6 callouts with x/y percentage positions
</details>

!!! mascot-warning "A challenge card without a stretch goal creates idle time"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: a fast student who finishes a challenge card with nothing else to do often starts distracting others, not because they're being difficult, but because there's genuinely nothing left for them to build. Every card needs a stretch goal.

## Making Progress Visible

A **learning map** is a visual chart showing every challenge card or skill a club offers, arranged to show which builds on which -- a student-facing version of the skill progression ladder from Chapter 14, letting a student point to the map and say "I'm here, and that's what's next." A **skill badge system** awards a small digital or physical badge for completing a defined skill or set of challenge cards, and the simpler **badge and sticker reward** -- a physical sticker on a printed learning map, for instance -- works especially well with younger students who respond more to a tangible, immediate reward than a digital badge they may never look at again.

A **portfolio of student work** collects a student's finished projects over time -- photos of physical builds, links to shared Scratch or Python projects -- giving both the student and their parents a concrete record of growth across a term or year, and doubling as material for the success story sharing Chapter 7 described. A **show-and-tell session**, woven into the wrap-up activity from Chapter 8, gives students a regular, low-pressure venue to present from that growing portfolio to their peers.

## Tools and Foundations

A **code-sharing platform** -- the Scratch community site from Chapter 14, or a similar tool for Python projects -- is where student work actually lives online and gets shared. **Version control basics** introduce the idea, even informally, that a project has a history of saved versions a student can return to if a change breaks something -- useful groundwork for the advanced track even without formal Git instruction. An **online coding platform** runs entirely in a browser with nothing to install, lowering the setup barrier for a club using shared or borrowed devices, while an **offline coding environment** -- a downloaded editor -- works better for a club with unreliable internet or a computer lab that restricts new software installs.

Not every activity needs a computer at all. An **unplugged coding activity** teaches a computational thinking concept -- sequencing, loops, conditionals -- through a physical, screen-free activity, such as giving a "robot" (another student) step-by-step verbal instructions to walk a path, and is often the very first activity a beginner-track student encounters. All of this rests on **coding vocabulary building**: consistently using the same precise terms -- loop, variable, function, debug -- from the very first unplugged activity onward, so that by the time a student reaches Python syntax, the words themselves are already familiar even if the punctuation is new.

## Challenge Card AI Agent Skill

Creating and maintaining Challenge Cards used to be a slow and time-consuming process.
AI agent skills make this process much easier.  The skill allows you to simply describe
what you want a challenge card to do and the AI agent will do the rest of the work and generate an easy-to-print card.

Here are some examples:

!!! prompt
    Use the /challenge-card skill and create a new beginning skill for making a DC motor spin.
    

## Chapter Summary

A project-based curriculum, sequenced through beginner, intermediate, and advanced tracks with a self-paced path within each, gives every student a place to start and a clear direction forward. Peer code review, pair programming, code-along sessions, and live coding demonstrations turn learning into a shared, social practice. Well-designed, well-printed challenge cards make every session's goal concrete, while a learning map, badges, and a growing portfolio make a student's progress visible over time -- built on a foundation of the right tools and consistent vocabulary from the very first unplugged activity.

!!! mascot-celebration "You can design a curriculum students can see themselves growing through"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You can now sequence a full curriculum across three tracks, design challenge cards that actually work in a session, and give students a visible way to track their own progress. That closes out the core curriculum arc of this book -- next, we turn to the students and communities every club exists to serve.
