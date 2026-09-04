---
title: Analyzing Club Data and Choosing the Right Tools
description: Covers analyzing attendance, retention, and enrollment trends, automating mentor and family communication, tracking student growth through skill mastery and digital portfolios, core spreadsheet mechanics, and vetting third-party tools before adopting them.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 07:12:43
metadata:
  ibook:
    version: 1.10
---

# Analyzing Club Data and Choosing the Right Tools

## Summary

This chapter goes deeper into club data: analyzing attendance and enrollment trends, tracking skill mastery, and building a digital portfolio system. It closes with practical spreadsheet skills and guidance on vetting third-party tools before trusting them with club or student data. You will be able to analyze basic enrollment trends and evaluate a new data tool for privacy risk.

## Concepts Covered

This chapter covers the following 21 concepts from the learning graph:

| Concept | Concept Impact Score |
|---------|-----------------------|
| Mentor Communication Log | 65 |
| Automated Reminder System | 64 |
| SMS Notification | 19 |
| Newsletter Automation | 18 |
| Data Visualization Basics | 17 |
| Attendance Data Analysis | 16 |
| Retention Rate Tracking | 15 |
| Enrollment Trend Analysis | 14 |
| Student Growth Metrics | 13 |
| Skill Mastery Tracking | 12 |
| Digital Portfolio System | 11 |
| Parent Access Portal | 10 |
| Data Export Process | 9 |
| Spreadsheet Formula Basics | 8 |
| Pivot Table Basics | 7 |
| Data Entry Standardization | 6 |
| Duplicate Record Cleanup | 5 |
| Data Sharing Agreement | 4 |
| Third Party Tool Vetting | 3 |
| Cloud Document Sharing | 2 |
| File Naming Convention | 1 |

## Prerequisites

This chapter builds on concepts from:

- [15. Designing a Curriculum With Challenge Cards and Portfolios](../15-curriculum-challenge-cards/index.md)
- [24. Tracking Student Data and Managing Club Communication](../24-student-data-and-communication/index.md)

---

Chapter 24 built the plumbing: what student data to save, how to protect it, and how to get guardian consent before any of it is collected. This chapter puts that plumbing to work. A club that has been faithfully filling out its tracking spreadsheet and consent forms for a couple of semesters is sitting on real signal -- which nights draw the biggest crowds, whether students who join in the fall stick around into spring, and which growth patterns a family would genuinely want to see. This chapter shows how to read that signal, how to automate the routine reminders that used to eat a mentor's Tuesday evening, and how to keep the resulting spreadsheets clean and any new tool trustworthy enough to hold data chapter 24 already taught you to protect.

!!! mascot-welcome "From raw data to real decisions"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- by the end of this chapter you'll be able to read an enrollment trend the way a mentor reads a challenge card, automate the reminder that saves the most volunteer time, and know exactly what to check before a new tool ever touches your club's data.

## Automating Mentor and Family Communication

Chapter 24 covered the club's core channels: a dedicated email account, a shared calendar, a group messaging app, and a parent communication log for individual family conversations. Once those channels exist, a club with a growing roster quickly notices that composing every reminder and update by hand doesn't scale past a few dozen families. The four concepts below cover the volunteer-side record that mirrors the parent log, and the automation that takes the routine sending off a mentor's plate.

### Mentor Communication Log

**A mentor communication log** is a written record of communications with and about the volunteer side of the roster -- a recruiting conversation, a training completion date, a check-in about whether a mentor is still available on Tuesdays -- kept so that mentor coordination survives a change of club leadership the same way chapter 24's parent communication log kept family conversations from living only in one person's memory. Where the parent log tracks what a family and the club discussed, the mentor log tracks the club's relationship with the volunteers who run its sessions.

A worked example shows the log catching a scheduling problem early: a club leader reviewing the mentor log before building next semester's calendar notices that two of the four Tuesday mentors both logged "may need to skip several sessions this fall" during their last check-in. Because that pattern is visible in one place rather than scattered across two separate memories, the leader recruits a substitute mentor a month before the gap actually happens, instead of scrambling the week attendance drops.

| Date | Mentor | Topic | Follow-Up |
|---|---|---|---|
| 2026-01-15 | J. Alvarez | Confirmed availability through May | None needed |
| 2026-01-22 | T. Nguyen | May miss 3 sessions this fall (new job) | Recruiting a substitute for those dates |
| 2026-02-05 | S. Park | Completed background check and training | Cleared to mentor solo |

### Automated Reminder System

**An automated reminder system** is a rule-based process that sends a session reminder automatically once a condition is met -- three days before a scheduled session, for example -- without a mentor manually composing and sending each one. It automates exactly the two-touch reminder cadence chapter 24 introduced, replacing the manual step of remembering to send each reminder with a schedule the system checks on its own.

A worked example shows the payoff over a full semester: a club that sent sixteen weekly reminders by hand last year had two mentors forget on two separate weeks, leaving families without any advance notice for those sessions. After setting up a rule that fires automatically three days before every calendar event, the same sixteen reminders go out on schedule all sixteen weeks, with no mentor needing to remember to trigger a single one.

### SMS Notification

**An SMS notification** is a short text message sent directly to a phone number, distinct from the group messaging app chapter 24 introduced because it requires no app installation at all -- any phone that can receive a call can receive a text. That makes it the most reliable fallback channel for a message that absolutely must reach every family, even the ones who never joined the messaging app's group.

A worked example shows the fallback earning its place: a club needs to tell every family that a session is canceled because of a snow closure, discovered only two hours before start time. Three families never joined the group messaging app, but all three still carry phones that receive text messages, so the club's SMS notification reaches one hundred percent of families in minutes, compared to the group chat's reach of everyone except those three households.

### Newsletter Automation

**Newsletter automation** is a templated digest -- upcoming dates, recent badge highlights, a reminder of the loaner-laptop policy -- generated and sent on a fixed schedule, such as the first of every month, rather than composed fresh by a mentor each time. It is the automated counterpart to chapter 24's ad hoc email communication: routine, non-urgent updates move into a predictable monthly rhythm instead of arriving whenever a mentor finds time to write one.

A worked example shows the shift in practice: a club that used to send an update "whenever something felt worth sharing" sent three emails in one busy month and none in the next two. After switching to an automated newsletter template that pulls in the month's session dates and badge counts automatically, families receive one predictable, complete update every month regardless of how busy any single mentor's week has been.

Choosing the right channel for a given message matters as much as automating any one of them:

| Channel | Speed | Requires App/Number on File | Best For |
|---|---|---|---|
| SMS Notification | Minutes | Just a phone number | Urgent, must-reach-everyone messages |
| Group Messaging App (Ch. 24) | Minutes, for joined members | App installed | Quick logistics for engaged families |
| Newsletter Automation | Scheduled, monthly | Email on file | Routine, non-urgent updates |

#### Diagram: Automated Communication Pipeline

<iframe src="../../sims/automated-communication-pipeline/main.html" width="100%" height="682px" scrolling="no"></iframe>

<details markdown="1">
<summary>Automated Communication Pipeline</summary>
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
</details>

!!! mascot-tip "If it can wait a week, it doesn't need a text message"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut for the decision diamond above: ask whether a family needs to act in the next few hours. If yes, it's an SMS notification. If the answer is "sometime this month is fine," queue it for the newsletter instead.

## Reading the Numbers: Attendance and Enrollment Analytics

Chapter 24's anonymized attendance chart showed that a weekly headcount can answer most funder questions without a single name attached. This section goes one layer deeper -- not just reporting the numbers, but reading them for patterns a club leader can actually act on.

### Data Visualization Basics

**Data visualization basics** means matching a chart type to the question being asked: a bar chart compares totals across categories, such as enrollment by semester; a line chart shows a trend over time, such as attendance rate week to week; a pie or donut chart shows how a whole splits into proportions, such as which badge each student is currently working toward. Picking the wrong type doesn't just look worse -- a bar chart of six semesters in a row buries the trend a line chart would show instantly.

A worked example makes the mismatch concrete: a club leader building a board report first tries a pie chart to show attendance across sixteen weeks, and ends up with sixteen thin slices no one can compare. Switching to a line chart with week number on the x-axis and attendance count on the y-axis turns the same sixteen numbers into an immediately readable trend, including the dip during a school break week that the pie chart had completely hidden.

### Attendance Data Analysis

**Attendance data analysis** is examining session-by-session attendance counts for patterns -- which nights consistently draw fewer students, whether a specific week always dips, whether a new time slot helped or hurt turnout -- rather than looking at any single week's number in isolation. A single low week could be a coincidence; a pattern repeating across several months is a signal worth acting on.

A worked example shows the difference: one Tuesday's attendance drops from fourteen to nine students, and a new mentor worries the club is failing. Looking back across the full semester, the leader finds that same week always dips because it falls during a school testing period, and attendance recovers to its normal range the following week every single time -- a predictable pattern, not a decline.

### Retention Rate Tracking

**Retention rate tracking** measures the percentage of students from one semester who return for the next one, calculated as returning students divided by prior-semester enrollment, times one hundred. It answers a different question than attendance data analysis: attendance asks whether currently-enrolled students show up week to week, while retention asks whether students who were enrolled last term chose to come back at all.

A worked example shows the calculation in practice: a club enrolls eighteen students in the fall semester, and fourteen of those eighteen return for spring.

| Metric | Value |
|---|---|
| Fall Enrollment | 18 students |
| Returning in Spring | 14 students |
| Retention Rate | 14 ÷ 18 × 100 = 78% |

A 78% retention rate tells the leader that roughly four out of five students found the fall semester worth coming back for -- a number worth tracking across years to see whether a curriculum or schedule change moves it up or down.

!!! mascot-thinking "Three numbers, three different questions"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that attendance, retention, and enrollment aren't three ways of measuring the same thing -- attendance asks "who showed up this week," retention asks "who came back next term," and enrollment asks "is the club growing overall." A club can have great attendance and still be shrinking if retention is weak.

### Enrollment Trend Analysis

**Enrollment trend analysis** is examining total headcount across several semesters or years to identify whether a club is growing, holding steady, or shrinking, and connecting that trend to a likely cause -- a new promotion effort, a scheduling change, a saturated waiting list. Unlike retention, which tracks whether the same students return, enrollment trend analysis tracks the club's total size regardless of which specific students make up that total.

A worked example shows a trend the leader would have missed one semester at a time: enrollment moves from twelve, to eighteen, to twenty-four, to twenty-two students across four consecutive semesters. Viewed semester by semester, the small dip from twenty-four to twenty-two might look like a problem; viewed as a four-semester trend, it reads as healthy growth that has simply started to level off near the room's practical capacity.

#### Diagram: Attendance and Enrollment Trend Explorer

<iframe src="../../sims/attendance-enrollment-trend-explorer/main.html" width="100%" height="562px" scrolling="no"></iframe>

<details markdown="1">
<summary>Attendance and Enrollment Trend Explorer</summary>
Type: chart
**sim-id:** attendance-enrollment-trend-explorer<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Let a learner explore four semesters of enrollment, attendance rate, and retention rate together, to practice choosing the right series to answer a specific question and to see how the three metrics can diverge.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a multi-semester chart of enrollment, attendance, and retention, the learner examines the data to determine whether a dip reflects an attendance problem, a retention problem, or both.

Chart type: Combo chart -- bars for enrollment count (left y-axis), two lines for attendance rate and retention rate as percentages (right y-axis)

X-axis: Semester (Fall 2024, Spring 2025, Fall 2025, Spring 2026)
Left Y-axis: Total students enrolled (count)
Right Y-axis: Rate (0-100%)

Data series:
1. Enrollment (blue bars): Fall 2024: 12, Spring 2025: 18, Fall 2025: 24, Spring 2026: 22
2. Average Weekly Attendance Rate (green line, %): Fall 2024: 88%, Spring 2025: 85%, Fall 2025: 90%, Spring 2026: 65%
3. Retention Rate (amber line, %, undefined for the first semester shown): Spring 2025: 83%, Fall 2025: 78%, Spring 2026: 91%

Title: "Enrollment, Attendance, and Retention Across Four Semesters"
Legend: Position top-right, each series independently toggleable by clicking its legend entry

Interactive features:
- Hover any bar or point to see the exact value, the semester, and a one-line definition of that specific metric
- Click a legend entry to toggle that series on or off, isolating one metric at a time
- Toggle button: "Highlight Divergence" -- when Spring 2026 is visible, calls out that attendance rate dropped sharply (65%) while retention rate stayed strong (91%), prompting the learner to reason about what that combination implies (a mid-semester attendance disruption among students who nonetheless plan to return, rather than students leaving the club)

Annotations:
- A callout on the Spring 2026 attendance point: "Sharp attendance dip -- but retention stayed high. What changed mid-semester?"

Implementation: Chart.js combo chart (bar + line datasets) with dual y-axes and legend-click toggling enabled.
</details>

## Tracking Student Growth Beyond Attendance

Attendance and enrollment describe the club as a whole. A mentor working with one specific student needs a narrower question answered: is this particular student actually growing, and can their family see that growth too?

### Student Growth Metrics

**Student growth metrics** are measurements of an individual student's progress over time -- the number of distinct skills attempted, the difficulty level of challenge cards completed, the complexity of a student's most recent project compared to their first -- that go beyond a simple attendance count or badge tally to describe genuine skill development. Where chapter 24's tracking spreadsheet recorded whether a badge was earned, growth metrics describe the shape of a student's progress across many badges over time.

A worked example shows the distinction in practice: two students both have four badges after one semester. Looking at growth metrics, one student earned all four in their first six weeks and has attempted nothing since, while the other steadily added one badge every three to four weeks throughout the semester. The badge count alone treats them identically; the growth metric reveals very different trajectories worth a different mentoring response for each.

### Skill Mastery Tracking

**Skill mastery tracking** records a student's level on a specific skill using a small ordered scale -- typically emerging, practicing, and mastered -- rather than the simple earned-or-not-earned checkbox a badge represents. A badge tells a mentor a skill was demonstrated once; a mastery level tells a mentor how reliably a student can perform it now.

| Level | What It Means | Example |
|---|---|---|
| Emerging | Attempted with heavy mentor guidance | First LED-blink program, mentor typed most of the code |
| Practicing | Completes independently, with occasional help | Writes a working LED-strip pattern, asks for a syntax reminder |
| Mastered | Completes independently and can explain it to a peer | Debugs another student's LED-strip code unassisted |

A worked example shows why the distinction matters for planning: a mentor reviewing a student marked "emerging" on LED strip patterns knows to pair that student with a mentor for the next related challenge, while a student marked "mastered" on the same skill is ready to help a peer instead of repeating the same challenge card.

### Digital Portfolio System

**A digital portfolio system** is an online collection of a student's actual work -- a saved code file, a photo of a finished LED project, a short video of a working robot -- organized to show growth over time, distinct from the tracking spreadsheet that only records that a skill was mastered. Where the spreadsheet is a claim ("mastered: LED strip patterns"), the portfolio is the evidence a family or a future mentor can actually look at.

A worked example shows the portfolio answering a question the spreadsheet cannot: a parent asks to see what their child has actually built this year. The tracking spreadsheet shows four mastered skills as dates in a grid; the digital portfolio shows the actual blinking-light video from January next to the more complex LED-strip pattern video from April, letting the family see the improvement directly rather than taking the spreadsheet's word for it.

### Parent Access Portal

**A parent access portal** is a controlled, view-only login through which a parent can see their own child's growth metrics and portfolio, and nothing belonging to any other student's family. It is the same minimal-exposure instinct chapter 24 applied to spreadsheet sharing links, applied here to an ongoing system rather than a one-time export: a family should be able to see everything about their own child and nothing about anyone else's.

A worked example shows the scoping working as intended: a parent logs into the portal and sees their own child's badge timeline, mastery levels, and portfolio videos, laid out exactly the way the digital portfolio system organizes them. When that same parent tries to browse to another student's page by guessing a different link, the portal denies access, because view permissions are scoped to one family's own child, never to the roster as a whole.

Setting up that scoping correctly the first time matters more than it might seem -- a portal that accidentally grants every logged-in parent a link to every student's page defeats the entire privacy discipline chapter 24 built, and most platforms only enforce that boundary correctly if a club configures per-family permissions during setup rather than accepting a tool's default "everyone can see everything" sharing mode.

#### Diagram: Student Growth to Portfolio Network

<iframe src="../../sims/student-growth-portfolio-network/main.html" width="100%" height="622px" scrolling="no"></iframe>

<details markdown="1">
<summary>Student Growth to Portfolio Network</summary>
Type: graph-model
**sim-id:** student-growth-portfolio-network<br/>
**Library:** vis-network<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/theory-of-knowledge/tree/main/docs/sims/capstone-portfolio-web

Purpose: Show how raw session observations flow through growth metrics and mastery tracking into a portfolio, and finally into a scoped, view-only parent portal, so a mentor can see where each concept sits in the pipeline.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a node in the growth-to-portfolio network, the learner explains what data flows into it and where that data goes next.

Node types:
1. Session Observations (small gray circle) -- a mentor's in-session notes on what a student attempted
2. Student Growth Metrics (blue circle) -- aggregated measurements of a student's progress over time
3. Skill Mastery Tracking (green circle) -- the emerging/practicing/mastered level for each specific skill
4. Digital Portfolio System (amber circle) -- the actual saved work evidencing that mastery
5. Parent Access Portal (purple circle, leaf node) -- the single family's scoped, view-only window into the above

Edges:
1. Session Observations → Student Growth Metrics: "aggregated into"
2. Student Growth Metrics → Skill Mastery Tracking: "classified by skill level"
3. Skill Mastery Tracking → Digital Portfolio System: "evidenced by uploaded work"
4. Digital Portfolio System → Parent Access Portal: "exposed read-only to one family"

Layout: Left-to-right hierarchical, following the data-flow order above

Interactive features:
- Hover any node to show its one-line definition
- Click any node to highlight its direct neighbors and open a side-panel infobox with its full description
- Click any edge to reveal what the edge label means in this pipeline
- Zoom with the mouse wheel, pan by dragging the background

Visual styling: Node size uniform; edge arrows show direction of data flow, left to right

Legend: Node color meanings and an arrow explaining "data flows in this direction"

Implementation: vis-network JavaScript library, hierarchical layout, canvas size 800x450px.
</details>

!!! mascot-warning "A portal misconfigured once can leak every student's data"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this trap: many portal tools default to "everyone can see everything" until a club explicitly scopes each family's access. Always test a new parent login yourself before announcing the portal, and confirm it truly cannot reach any other student's page.

## Spreadsheet Mechanics That Make Analysis Possible

Every chart, dashboard, and portal in this chapter ultimately draws from the same source: the plain spreadsheet chapter 24 introduced for simple tracking. This section covers the underlying mechanics that turn that spreadsheet's raw rows into the summaries and exports the rest of this chapter depends on.

### Data Export Process

**The data export process** is extracting data from one tool or spreadsheet into a portable file format -- typically CSV or PDF -- so it can be used somewhere else, such as a grant report, a backup, or a move to a different tracking tool entirely. It is the same underlying action as chapter 24's anonymized attendance export, generalized to any situation where data needs to leave its home system.

A worked example shows the process end to end: a club leader preparing a grant renewal exports the semester's attendance summary as a CSV file, opens it in a spreadsheet program to build the anonymized chart chapter 24 described, and attaches the resulting chart image to the grant report -- the raw export never leaves the leader's own computer, only the final chart does.

### Spreadsheet Formula Basics

**Spreadsheet formula basics** are the small set of built-in calculations -- `SUM` to add a column, `AVERAGE` to find a mean, `COUNTIF` to count rows matching a condition -- that turn dozens of individual data rows into a single useful number without a mentor counting by hand. Learning a handful of these formulas covers the vast majority of what a club's analysis actually requires.

| Formula | What It Computes | Example |
|---|---|---|
| `=SUM(range)` | Total of a column of numbers | Total badges earned across all students |
| `=AVERAGE(range)` | Mean value of a column | Average session rating from a feedback form |
| `=COUNTIF(range, "Tuesday")` | Count of rows matching a condition | Number of sessions held on a Tuesday |

A worked example shows a formula replacing manual counting: a leader who used to scroll through forty rows counting how many students had "mastered" a specific skill instead writes `=COUNTIF(D2:D40, "Mastered")`, and the spreadsheet returns the same count instantly, recalculating automatically every time a new row is added.

!!! mascot-encourage "Formulas look like a foreign language at first -- that's normal"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If a formula like `=COUNTIF(D2:D40, "Mastered")` looks intimidating, that reaction is completely normal for a first pass. Most volunteers only ever need three or four formulas total, and typing one wrong the first time never breaks anything -- just delete it and try again.

### Data Entry Standardization

**Data entry standardization** is agreeing on one consistent format for every value entered into a field -- always "Tuesday Group," never "Tues" or "tuesday" or "Tu group" -- so that formulas and later analysis treat matching entries as matching, instead of silently splitting one real category into several near-identical ones. A formula or pivot table has no way to know that "Tues" and "Tuesday" mean the same thing; it simply counts them as two different values.

A worked example shows the failure this prevents: a club leader runs `=COUNTIF(range, "Tuesday Group")` expecting eighteen students and gets eleven, because seven rows were entered as "Tues Group" by a different mentor. After the club agrees on a single standard spelling and corrects the seven mismatched rows, the same formula correctly returns eighteen.

!!! mascot-warning "Inconsistent entries look fine until you try to count them"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A common trap: a spreadsheet with "Tuesday," "Tues," and "tuesday" all scattered through one column looks perfectly readable to a person, but a formula treats each spelling as a different answer. The fix is a short list of exact, agreed-upon values every mentor uses -- pinned to the top of the sheet as a reference.

### Pivot Table Basics

**A pivot table** is a summary view built automatically from raw spreadsheet rows -- reorganizing them into a cross-tab, such as attendance count by day-of-week and by month -- without writing a single formula. Where `COUNTIF` answers one specific question at a time, a pivot table lets a mentor reshape the same underlying rows to answer many related questions just by changing which fields sit in the rows and columns.

A worked example shows the reshaping in action: a club's raw attendance log has one row per student per session, with columns for date, day of week, and student. Building a pivot table with "day of week" in the rows and "month" in the columns instantly produces a grid showing exactly how many sessions happened on each weekday in each month, a summary that would otherwise take several nested `COUNTIF` formulas to reproduce.

#### Diagram: Pivot Table Builder

<iframe src="../../sims/pivot-table-builder/main.html" width="100%" height="562px" scrolling="no"></iframe>

<details markdown="1">
<summary>Pivot Table Builder</summary>
Type: microsim
**sim-id:** pivot-table-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner choose which fields become pivot table rows and columns, and watch a small raw attendance dataset reorganize into the resulting summary grid.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: construct

Learning objective: Given a small raw attendance dataset, the learner constructs a pivot table summarizing session counts by the row and column fields they select.

Canvas layout:
- Left (350px): scrolling list of ~20 raw sample rows (Day of Week, Month, Student Initials)
- Right (300px): the resulting pivot grid, rebuilt live as field choices change

Data Visibility Requirements:
  Stage 1: Show the 20 raw rows exactly as they would appear in a real spreadsheet, unsorted
  Stage 2: Show the selected Rows field and Columns field highlighted in the raw data as the learner changes the dropdowns
  Stage 3: Show the pivot grid rebuild with updated row/column headers and recalculated counts in each cell
  Final: Show the grand total row and column, confirming the cell counts sum correctly to the total number of raw rows

Interactive controls:
- Dropdown: "Rows field" (Day of Week / Month / Student Initials)
- Dropdown: "Columns field" (Month / Day of Week / none)
- Button: "Build Pivot"
- Button: "Reset to Default"

Default parameters: Rows field = "Day of Week", Columns field = "Month"; default pivot shows session counts per weekday per month across the 20-row sample dataset

Implementation notes: p5.js canvas with `createSelect` for each field dropdown and `createButton` for Build/Reset; the 20 sample rows and the pivot-aggregation logic live in a small in-memory array, recomputed whenever a dropdown changes, so the grid always reflects the current field selection without a page reload.
</details>

## Keeping Data Clean and Tools Trustworthy

Every metric and portal in this chapter depends on two quieter habits: keeping the underlying records free of duplicates, and making sure any new tool a club adopts deserves the data chapter 24 taught you to protect in the first place.

### Duplicate Record Cleanup

**Duplicate record cleanup** is finding and merging rows that represent the same student or event entered more than once -- often from a slightly different spelling, like "A.K." and "AK" -- so that a count of students or sessions reflects reality instead of double-counting the same person. Left uncorrected, a duplicate quietly inflates every metric built on top of it, from attendance counts to badge totals.

A worked example shows a quick catch: a leader building the pivot table above notices the student total comes out to fifteen instead of the expected fourteen, traces it to one student entered once as "A.K." and once as "A. Kim," and merges the two rows into one before the pivot table is used in a report.

### Data Sharing Agreement

**A data sharing agreement** is a written agreement between the club and an outside organization -- a vendor, a partner nonprofit, a school district -- spelling out exactly what data may be shared with that organization and how it may be used, distinct from guardian consent, which covers permission from a family rather than terms with another organization. A club considering a new registration platform or portfolio tool should expect this kind of agreement to exist before any student data flows to that vendor.

### Third Party Tool Vetting

**Third-party tool vetting** is evaluating a new piece of software -- a registration platform, a portfolio app, an SMS service -- before adopting it, checking how it stores data, whether it can be deleted on request, and what its free tier actually costs a club in data-handling terms rather than dollars.

!!! mascot-tip "Four questions before you sign up for anything"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut worth reusing every time: before adopting any new tool, ask where it stores data, whether you can export and delete it on request, whether a data sharing agreement is available, and what a "free" tier is really funded by.

That checklist works as a quick pass over any tool under consideration:

- Where is student data physically stored, and in which country?
- Can the club export all of its data and delete it entirely if it switches tools later?
- Will the vendor sign a data sharing agreement, or only offer a generic terms-of-service page?
- If the tool is free, what is the vendor's business model -- and does it involve selling or analyzing student data?

### Cloud Document Sharing

**Cloud document sharing** is storing and sharing club files -- spreadsheets, consent forms, portfolios -- through a cloud-based service scoped to the club's own account, with permissions set deliberately rather than left at a platform's default. This is the same "use club accounts, not personal ones" habit chapter 24 established for the tracking spreadsheet, applied to every other document type a club accumulates.

### File Naming Convention

**A file naming convention** is a consistent pattern for naming files -- such as `2026-02-Session-Attendance.xlsx` rather than `attendance new final.xlsx` -- so that a shared drive stays navigable for every mentor, including one who joins two years from now and has never seen the folder before.

| Before (No Convention) | After (Consistent Convention) |
|---|---|
| `attendance new final.xlsx` | `2026-02-Session-Attendance.xlsx` |
| `roster (2).xlsx` | `2026-Spring-Roster.xlsx` |
| `feedback FINAL FINAL.xlsx` | `2026-02-Feedback-Responses.xlsx` |

## Chapter Summary

This chapter turned chapter 24's saved and protected data into something a club can act on. Automated reminders, SMS notifications, and a newsletter template took routine communication off a mentor's weekly to-do list, while a mentor communication log kept volunteer coordination visible across a change of leadership. Attendance, retention, and enrollment analysis showed how three related metrics answer three different questions about the same club, and growth metrics, skill mastery levels, a digital portfolio, and a scoped parent portal gave individual students a way to show real progress instead of a bare badge count. Underneath all of it, formulas, pivot tables, standardized data entry, and a habit of vetting any new tool before adopting it keep the numbers trustworthy enough to build decisions on.

!!! mascot-celebration "You can now turn club data into real decisions"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built the skills to read an enrollment trend, automate a reminder system, track real student growth, and vet a new tool before it ever touches your data. That's the analytical half of running a sustainable club -- and it's exactly what turns a spreadsheet full of rows into decisions your club can act on.

[See Annotated References](./references.md)
