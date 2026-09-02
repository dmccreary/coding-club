---
title: Choosing a Schedule and Building Registration
description: Compares major coding club scheduling models and covers building a mentor-gated registration system that caps enrollment responsibly.
generated_by: claude skill chapter-content-generator
date: 2026-08-31 00:00:00
metadata:
  ibook:
    version: 1.10
---

# Choosing a Schedule and Building Registration

## Summary

This chapter compares the major scheduling models for a coding club -- alternating Saturdays, weekday after-school, semester-based, and drop-in -- and helps you choose one. It then covers building a registration system, including the club's signature practice of registering mentors before students to cap enrollment responsibly. You will be able to choose a schedule model and set up a mentor-gated registration system.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Session Scheduling | 1781 |
| Selecting A Date And Time | 169 |
| Alternating Saturday Model | 168 |
| Weekday After School Model | 167 |
| Semester Based Schedule | 166 |
| Drop In Model | 165 |
| Recurring Session Series | 164 |
| Holiday Schedule Planning | 163 |
| Working Around Holidays | 162 |
| School Calendar Alignment | 161 |
| Registration System | 160 |
| Online Registration Form | 113 |
| Eventbrite Case Study | 112 |
| Registration Capacity Limit | 111 |
| Registering Mentors First | 110 |
| Mentor Gated Enrollment | 109 |
| Limiting Students By Mentors | 108 |
| Waiting List Signup | 107 |

## Prerequisites

This chapter builds on concepts from:

- [5. Gauging Interest and Holding Your First Meeting](../05-gauging-interest-first-meeting/index.md)
- [9. Mentors, Students, and the 3:1 Ratio](../09-mentors-students-ratio/index.md)

---

Every relationship Chapter 10 described needs a predictable rhythm to grow in, and every ratio Chapter 9 described needs a system that actually enforces it at sign-up time, not just on paper. This chapter covers both: choosing when your club meets, and building a registration process that keeps enrollment honest.

!!! mascot-welcome "When, and for how many?"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- on a schedule families can actually plan around! This chapter compares four scheduling models and then walks through registering mentors first, so your 3:1 ratio holds from the very first sign-up.

## Choosing a Scheduling Model

**Session scheduling** is the overall discipline of deciding when and how often a club meets -- the single concept this chapter's learning graph treats as more consequential than almost any other in the book, because every family's ability to attend depends on it. **Selecting a date and time** means weighing three constraints at once: when your venue is actually available, when your mentor pool can realistically commit, and when families in your target audience (Chapter 2) are free -- a Tuesday-afternoon slot might satisfy the first two and fail the third if most of your target families have after-school sports at that hour.

Four scheduling models cover the large majority of coding clubs, each fitting a different combination of those constraints. The comparison poster below lays them out side by side.

#### Diagram: Four Coding Club Scheduling Models

<iframe src="../../sims/four-scheduling-models/main.html" width="100%" height="650px" scrolling="no"></iframe>

<details markdown="1">
<summary>Four Coding Club Scheduling Models</summary>
Type: infographic-overlay (grid)
**sim-id:** four-scheduling-models<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a founder compare the four dominant scheduling models on the same dimensions before committing, since the right choice depends heavily on venue, mentor, and family constraints that are easy to evaluate one at a time but hard to compare side by side from memory.

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: recommend

Learning objective: Given a club's venue, mentor availability, and target audience, the learner recommends the scheduling model that best fits.

Image style: Flat comparison poster, four vertical columns, each with a bold printed column header baked into the image ("Alternating Saturday," "Weekday After-School," "Semester-Based," "Drop-In")

Image dimensions: 1400x800 (landscape)

Zones (4 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-6 bullet facts):
1. `alternating-saturday` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:25,y2:92 -- Summary: "Meets every other Saturday, all year." Facts: low weekly time commitment for families and mentors; works well for library and community-center venues open on weekends; the two-week gap can weaken momentum for younger students; predictable and easy to plan around long-term
2. `weekday-after-school` -- color #F5A623 -- boundaries approximately x1:27,y1:10,x2:50,y2:92 -- Summary: "Meets weekly, right after the school day." Facts: highest attendance consistency since students are already at or near the venue; competes directly with sports practices and other after-school activities; requires mentor availability during working hours, which favors retired or flexible-schedule mentors; best fit for school-based clubs (Chapter 2)
3. `semester-based` -- color #7ED6A5 -- boundaries approximately x1:52,y1:10,x2:75,y2:92 -- Summary: "Runs for a defined term, then breaks and re-enrolls." Facts: aligns naturally with school-calendar alignment; gives a clean, low-pressure exit point for families and mentors each term; requires a full onboarding process (Chapter 6) at the start of every new term; well suited to a curriculum with defined tracks (Chapter 15)
4. `drop-in` -- color #E67E22 -- boundaries approximately x1:77,y1:10,x2:98,y2:92 -- Summary: "No fixed roster -- students attend whichever sessions work for them." Facts: lowest commitment barrier for families to try the club; hardest model to plan mentor capacity for, since attendance is unpredictable session to session; poor fit for mentor pairing consistency (Chapter 10); works best for high-traffic venues like a bookstore or library with heavy walk-in foot traffic

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema
</details>

!!! mascot-thinking "The best model is the one your constraints actually allow"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that none of these four models is objectively best -- each one trades a strength for a weakness. A school-based club with weekday mentor access and a captive student population is a natural fit for the weekday after-school model; the same model would struggle badly at a bookstore with no fixed student roster at all.

## Keeping the Schedule Running

Whichever model you choose, it needs to keep running predictably. A **recurring session series** is the practical mechanism for that: a defined, repeating calendar entry (every other Saturday, every Tuesday) rather than re-deciding the date fresh each time, which both reduces planning overhead and gives families a rhythm they can build other commitments around. **Holiday schedule planning** decides, well in advance, which sessions get skipped for holidays and school breaks, published as early as possible so families aren't caught off guard by a canceled session they expected to attend.

**Working around holidays** goes a step further than simply skipping a session -- it means proactively checking a full year's holiday calendar against your scheduling model before the term starts, since an alternating-Saturday club can lose several sessions in a row around late November and December without anyone noticing until it happens. For a weekday after-school or semester-based club, **school calendar alignment** means syncing directly with the host school's or district's academic calendar -- half-days, teacher in-service days, and the actual first and last day of the school year all quietly shift a session schedule if not checked directly against the school's own calendar rather than assumed.

!!! mascot-tip "Publish a full year of dates at once, not session by session"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: once you've checked holidays and school calendar alignment, publish every session date for the full year (or term) in one document, rather than announcing each session a week ahead. Families plan around dates they can see in advance far more reliably than dates they have to keep checking for.

## Building a Registration System

A **registration system** is however families actually sign up for a session or term -- ranging from a paper sign-up sheet at the venue to a full online platform, and it needs to match a club's actual size rather than being over-engineered for a three-student pilot cohort. An **online registration form** collects the essentials in one place: student name and age, parent contact information, and a link or reference to the parental consent and photo release forms from Chapter 3, ideally without duplicating information already on file for a returning student.

Many clubs solve this with an existing platform rather than building one from scratch. The **Eventbrite case study** Chapter 2's course description points to is a common real-world example: a library club used Eventbrite's free tier to publish each session as a ticketed "event" with a fixed capacity, giving it registration, a waitlist, and automatic reminder emails without writing any custom software. A **registration capacity limit** is simply the maximum number of student sign-ups the system allows per session -- set, as the next section covers, by mentor availability rather than by room size alone.

## Mentor-Gated Enrollment

This book's signature registration practice ties directly back to the 3:1 ratio from Chapter 9. **Registering mentors first** means opening mentor sign-up for a term or session before student registration opens at all, so the club knows its actual mentor capacity before a single family can enroll. **Mentor-gated enrollment** is the system-level rule that enforces this: student registration capacity is calculated directly from confirmed mentor sign-ups, not set as an arbitrary fixed number decided months in advance. **Limiting students by mentors** is the resulting math made explicit -- eight confirmed mentors means a hard cap of twenty-four students at 3:1, and the registration system should refuse the twenty-fifth sign-up rather than relying on a mentor to notice the club has gotten too full.

Families who arrive after that cap is reached join a **waiting list signup** -- the same waiting list management concept from Chapter 9, applied at the registration-system level, moving families in order as either more mentor capacity opens up or an enrolled family drops out. The workflow below shows how mentor-gated enrollment plays out step by step.

#### Diagram: Mentor-Gated Registration Flow

<iframe src="../../sims/mentor-gated-registration-flow/main.html" width="100%" height="762px" scrolling="no"></iframe>

<details markdown="1">
<summary>Mentor-Gated Registration Flow</summary>
Type: workflow
**sim-id:** mentor-gated-registration-flow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show, step by step, how registering mentors first turns into a hard, enforced student capacity limit rather than an aspirational guideline mentors are expected to police manually.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a mentor sign-up count, the learner correctly calculates the resulting student registration capacity and traces what happens once that capacity is reached.

Steps (flowchart with decision diamond):
1. Start: "Mentor Registration Opens" -- click reveals "Mentor sign-up for the term opens first, before any student registration link is shared."
2. Process: "Mentors Confirm Availability" -- click reveals "Each mentor confirms which specific sessions they can attend, per mentor availability tracking from Chapter 9."
3. Process: "System Calculates Capacity (Mentors x 3)" -- click reveals "Confirmed mentor count is multiplied by the 3:1 ratio to set the hard student registration capacity limit."
4. Process: "Student Registration Opens at That Capacity" -- click reveals "The online registration form now accepts sign-ups only up to the calculated limit."
5. Decision: "Is Capacity Reached?" -- click reveals "The registration system checks this automatically on every new sign-up attempt."
6a. Process (if no): "Student Registers Normally" -- click reveals "Confirmation email sent immediately, per the registration confirmation process."
6b. Process (if yes): "Student Joins the Waiting List" -- click reveals "Added to the waiting list signup in order, notified automatically if a spot opens."
7. End: "Capacity Re-Calculated Whenever Mentor Count Changes" -- click reveals "A new mentor joining, or one dropping out, immediately updates the capacity and can move waiting-list families in."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text.

Color coding: Blue for mentor-side steps, green for the capacity calculation, yellow for the decision diamond, orange for the waiting-list branch

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram
</details>

!!! mascot-warning "Don't open student registration before mentors are actually confirmed"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: opening student sign-ups based on how many mentors you *expect* to confirm, rather than how many actually have, is how a club ends up over-enrolled before the first session. Wait for confirmed mentor sign-ups, not optimistic estimates, before calculating your capacity.

## Chapter Summary

Choosing among alternating-Saturday, weekday after-school, semester-based, and drop-in scheduling models means matching the model to your venue, mentor availability, and target audience rather than picking the most popular option. Holiday schedule planning and school calendar alignment keep a recurring session series from silently drifting out of sync with the families it serves. A registration system built on mentor-gated enrollment -- registering mentors first, then capping student sign-ups at exactly three times the confirmed mentor count -- is what keeps the 3:1 ratio real at sign-up time, not just an aspiration mentors try to honor once the room is already full.

!!! mascot-celebration "Your schedule and your registration system are locked in"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You can now choose a scheduling model that fits your real constraints and build a registration system that enforces your ratio automatically. Next up: running the actual events on that calendar, and learning from every single one through a retrospective.
