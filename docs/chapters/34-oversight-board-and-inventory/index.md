---
title: Establishing an Oversight Board and Inventory System
description: Covers building an oversight board -- its roles, meeting cadence, recruitment, and term limits -- and the succession plan it exists to execute, paired with a club-wide inventory system built on stickers, QR codes, asset tagging, audits, and equipment checkout, plus mentor recruiting at scale.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 10:18:25
metadata:
  ibook:
    version: 1.10
---

# Establishing an Oversight Board and Inventory System

## Summary

This chapter covers forming an oversight board -- its roles, meeting cadence, and term limits -- as a club matures past its founding leader. It pairs this with a practical inventory system: sticker printing, QR codes, and equipment checkout, so kits do not go missing as a club grows. You will be able to outline an oversight board structure and set up a basic inventory system.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Oversight Board | 102 |
| Board Roles And Duties | 31 |
| Board Meeting Cadence | 30 |
| Board Member Recruitment | 29 |
| Board Term Limits | 28 |
| Succession Planning | 27 |
| Club Inventory System | 26 |
| Inventory Sticker Printing | 25 |
| QR Code On Kits | 24 |
| Asset Tagging Process | 23 |
| Inventory Audit Process | 22 |
| Lost Item Policy | 21 |
| Equipment Checkout System | 20 |
| Equipment Return Tracking | 19 |
| Advanced Mentor Recruiting | 18 |
| Finding Qualified Mentors | 17 |

## Prerequisites

This chapter builds on concepts from:

- [3. Writing Your Club Charter and Safety Policies](../03-club-charter-and-safety/index.md)
- [9. Mentors, Students, and the 3:1 Ratio](../09-mentors-students-ratio/index.md)
- [21. Managing Your Kit Inventory and Signal Processing Kits](../21-kit-inventory-signal-processing/index.md)
- [24. Tracking Student Data and Managing Club Communication](../24-student-data-and-communication/index.md)
- [30. Budgeting, Fundraising, and Grant Writing](../30-budgeting-fundraising-grants/index.md)

---

Chapter 3's charter named who has final authority in a new club, and for every chapter since then that has been enough: a single founding leader, backed by a handful of mentors, making every real decision. Chapter 21 already pushed back on that pattern once, turning a shelf of loose kits into a documented inventory precisely because a club that only lives in one person's memory of "where the spare wires are" cannot survive that person missing a session. Chapter 24's student records and Chapter 30's budget did the same for two other kinds of knowledge that used to live only in a founder's head. This chapter applies that same fix at the two points where a club is most likely to actually collapse the day its founder leaves: the absence of any governing body beyond that one founder, and a growing pile of equipment with no paper trail connecting any specific item back to the club that owns it.

!!! mascot-welcome "The infrastructure that outlasts a founder"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- this chapter hands your club two pieces of infrastructure sturdy enough to survive a change in leadership: a real oversight board with named seats, and a real inventory system with printed stickers and QR codes. By the end, you'll know how to judge whether your club has reached the point where it actually needs both.

## Building an Oversight Board

### Oversight Board

**An oversight board** is a small standing group -- separate from the mentors who run weekly sessions -- that holds formal authority over a coding club's mission, budget, and major decisions, and that continues to exist as a body even as the specific people who sit on it change over time. A board is not simply "more adult supervision." A club can already have several capable mentors and still have zero governance, if every one of those mentors defers every real decision back to a single founder.

Think of an oversight board as a club's backup generator. While a strong founder is present and the lights are on, a generator sitting untouched in a garage looks like money spent on nothing -- it never seems to do anything a working outlet doesn't already do. The only day anyone finds out whether it was wired correctly is the day the power actually goes out. A board works exactly the same way: while a capable founder is running weekly sessions well, a board can feel like an extra layer of meetings that changes nothing about a Tuesday night. The day that founder leaves -- for a new job, a move, or simply a season off -- is the only day anyone discovers whether the club actually had one.

A board earns that role by filling a small set of named seats, each carrying a specific job the next section spells out in full: a **chair** who runs meetings and represents the club publicly, a **secretary** who records decisions in writing, a **treasurer** who oversees the budget Chapter 30 built, a **mentor liaison** who carries mentor concerns into board discussions, and an **at-large member** who represents parents, students, or the host venue. The diagram below puts all five seats on one org chart -- click any seat, or the club's day-to-day operations box beneath it, to see what it actually does before Board Roles and Duties spells it out in more depth.

#### Diagram: Oversight Board Org Chart

<iframe src="../../sims/oversight-board-org-chart/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Oversight Board Org Chart</summary>
Type: diagram
**sim-id:** oversight-board-org-chart<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Let a reader see, in one hierarchical chart, how a five-seat oversight board sits above day-to-day club operations without running sessions itself, and click each seat to learn its specific job before the prose spells out the details.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given the five named seats on a coding club's oversight board, the learner identifies each seat's core responsibility and how the board as a whole relates to day-to-day operations.

Node types:
1. Root node "Oversight Board" (top, dark blue rounded rectangle, larger size)
2. Five seat nodes (second tier, sky-blue circles): "Chair," "Secretary," "Treasurer," "Mentor Liaison," "At-Large Member"
3. Operations node (third tier, amber rounded rectangle): "Founder / Lead Mentor (Day-to-Day Sessions)"
4. Leaf node (bottom, gray rounded rectangle): "Mentors and Students"

Edges (hierarchical, downward arrows):
- Oversight Board -> each of the five seat nodes
- Oversight Board -> Founder / Lead Mentor (labeled "sets policy and budget for")
- Mentor Liaison -> Mentors and Students (labeled "carries concerns from," drawn as a dashed upward-and-across arrow distinct from the plain hierarchy edges)
- Founder / Lead Mentor -> Mentors and Students (labeled "runs weekly sessions with")

Sample click content (infobox text shown on click):
- Chair: "Runs board meetings, sets the agenda, represents the club publicly, and casts the tie-breaking vote."
- Secretary: "Records and distributes written minutes after every meeting, so decisions and their reasoning survive turnover."
- Treasurer: "Reviews the budget before large purchases and signs financial paperwork the founder used to sign alone."
- Mentor Liaison: "Attends mentor debriefs and brings mentor concerns to the board directly."
- At-Large Member: "Represents a parent, student, or venue host the board would otherwise never hear from directly."
- Oversight Board (root): "Holds formal authority over mission, budget, and major decisions; membership changes, the seats do not."
- Founder / Lead Mentor: "Runs weekly sessions day to day; reports to the board rather than acting with unchecked authority."
- Mentors and Students: "The people in the room every session -- the board exists to support this layer, not replace it."

Layout: Hierarchical, top-down, root centered, five seats spread evenly on the second tier

Interactive features:
- Click any node: open a side-panel infobox with that node's text above, and highlight its direct edges
- Hover any node: brief tooltip preview of its role
- Zoom: mouse wheel; Pan: click-and-drag background
- Button: "Reset View" recenters and clears any highlight

Visual styling: dark blue root, sky-blue seat circles, amber operations box, gray leaf box; edge labels shown at all times in small text; canvas is responsive and reflows to a narrower vertical layout on small screens

Legend: node color key (board root, board seats, operations, ground-level people) plus a note that dashed edges represent a reporting channel rather than a chain of command

Implementation: vis-network JavaScript library with a hierarchical layout option, node/edge data defined in a small `data.json` file, and a custom infobox panel rendered beneath the canvas on click.
</details>

!!! mascot-thinking "Authority that lives in a role outlasts authority that lives in a person"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the shift: without a board, "who decides" is a person's name. With a board, "who decides" is a seat -- a chair, a treasurer -- that anyone can eventually fill. That's the exact substitution this whole book has been building toward: infrastructure that outlasts whoever happens to hold it today.

A worked example makes the difference concrete. Two coding clubs each lose their founding leader to a new job at the start of a school year. Club A never formed a board; every major decision -- which vendor to reorder kits from, whether to raise the enrollment cap, who signs the venue contract -- ran through the founder's judgment alone, informally, in their head. When the founder leaves, three mentors are left with a shared calendar, no signing authority for the venue contract, and no agreed process for choosing a successor; the club goes on informal hiatus within six weeks while mentors debate who is even allowed to decide anything. Club B formed a five-person board eight months before its founder's departure. Because the board's chair and treasurer already held signing authority separate from the founder, the venue contract renewed on schedule the week the founder left, and the board -- following the succession plan described later in this chapter -- had already named an acting lead mentor. Club B's first session under new leadership ran twelve days after the founder's last one; Club A never restarted.

That contrast holds up across every decision a club actually has to make, not just the dramatic ones. The table below traces the same founder-departure scenario point by point.

| Aspect | Club Without a Board | Club With a Board |
|---|---|---|
| Who can sign the venue contract or bank paperwork | Only the founder, informally | The board chair and treasurer, formally, independent of who founded the club |
| What happens to major decisions the week the founder leaves | Nothing -- no one is authorized to decide | The board keeps deciding; nothing waits on one person |
| Time to name a successor lead mentor | Undefined; debated for weeks | Days, following a written succession plan (see below) |
| Where club history and reasoning live | In the founder's memory | In board minutes anyone can read |

### Board Roles And Duties

**Board roles and duties** are the specific written responsibilities assigned to each seat named above, spelled out clearly enough that a new person stepping into a seat knows exactly what is expected without having to ask the previous holder. The chair sets meeting agendas, moderates discussion, and casts the tie-breaking vote when the board splits evenly. The secretary takes and distributes minutes after every meeting, maintaining the written record Chapter 24 already trained the club to value. The treasurer reviews the budget Chapter 30 built before any vote authorizing a large purchase, and signs financial paperwork the founder alone used to sign informally. The mentor liaison attends mentor debriefs and brings mentor concerns -- a burned-out volunteer, a request for more supplies -- directly to the board, rather than leaving mentors to raise concerns only informally. The at-large member represents whoever the board would otherwise never hear from directly: a parent, a venue host, or a student old enough to sit in on meetings.

A worked example shows the division working as intended: at a quarterly meeting, the treasurer flags that a $600 laptop-repair line item is running 40% over budget before any vote happens, giving the board real numbers instead of a vague impression. The chair opens the floor, the mentor liaison reports that two mentors have already raised concerns about slow laptops disrupting sessions, and the secretary records the board's decision -- approving an extra $200 -- in minutes any future board member can read. No single person made that call alone, and no part of the reasoning behind it depends on anyone's memory.

!!! mascot-encourage "Governance work can feel like a step away from the fun part"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If handing decisions to a board feels like trading hands-on mentoring for paperwork, that reaction is completely normal -- most founders feel it. Start with just the chair and treasurer seats filled; a two-person board that actually meets beats a five-person board that never does.

### Board Meeting Cadence

**Board meeting cadence** is the regular rhythm at which a board actually convenes -- commonly quarterly for routine business plus one annual planning retreat -- set deliberately rather than left to happen "whenever something comes up," which in practice usually means never.

A worked example shows why cadence needs to be deliberate: one club's board agrees only to "meet when needed," and eighteen months pass without a single meeting, because nothing ever felt urgent enough to schedule one -- until the founder's sudden departure makes the lack of any board history obvious all at once. A second club schedules a fixed 45-minute meeting every quarter plus one two-hour annual retreat, with a standing agenda of budget review, mentor liaison report, and open decisions. That club's board has produced eight sets of minutes and three recorded decisions by the time anything urgent actually happens.

!!! mascot-tip "Fixed cadence beats good intentions every time"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: put next year's board meetings on the calendar today, quarterly plus one retreat, before anyone needs one. A board that only meets "when needed" almost never meets at all.

### Board Member Recruitment

**Board member recruitment** is the deliberate search for people to fill open board seats based on the specific skills a seat requires -- financial literacy for a treasurer, public communication for a chair, direct knowledge of mentor concerns for a liaison -- rather than simply inviting whichever parent or mentor happens to be closest at hand. A board filled entirely with the founder's personal friends tends to agree with the founder by default, which defeats much of the point of having independent oversight at all.

A worked example shows the difference recruiting with intent makes: a founder needing a treasurer could ask the parent standing nearest at pickup, or could specifically ask the school's PTA treasurer -- already comfortable reading a budget and signing paperwork -- to fill the seat instead. The second choice takes one extra conversation and produces a treasurer who needs no training to start reviewing the numbers Chapter 30 already tracks.

### Board Term Limits

**Board term limits** cap how long any one person may occupy a board seat before rotating off -- commonly two or three years, often renewable once -- guaranteeing that new people and fresh judgment cycle onto the board on a predictable schedule rather than the same five people holding every seat indefinitely.

A worked example shows why staggering the limit matters as much as having one: a board that sets every seat's term to start and end in the same year risks all five members reaching their limit simultaneously, leaving the club with an entirely inexperienced board overnight -- the exact loss-of-institutional-memory problem term limits were meant to prevent. A board that staggers its five seats instead -- two expiring in year one, two in year two, one in year three -- always has at least three experienced members mentoring the newest arrivals, even in a year when several seats turn over at once.

!!! mascot-warning "Unstaggered term limits can empty the whole board at once"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this trap: setting every board seat's term to start the same year guarantees they all expire the same year too. Fix it by staggering start dates from day one, so only one or two seats ever turn over at the same time.

### Succession Planning

**Succession planning** is a board's written answer, prepared before it is needed, to the question "who leads this club the day the founder cannot" -- naming an acting lead mentor, listing which signing authorities transfer automatically, and setting a timeline for a permanent replacement search.

Club B's story from earlier in this chapter is succession planning in action. Because its board had already named an acting lead mentor and documented which signing authorities the chair and treasurer held independent of the founder, the club's first session under new leadership ran twelve days after the founder's last one -- not because Club B's founder was easier to replace, but because the plan for replacing them had already been written down months in advance.

!!! mascot-thinking "Succession planning is this book's founding idea, written down as a document"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that everything this book has argued -- charters over memory, documentation sheets over one mentor's know-how, a budget over a founder's gut feeling -- has been building toward exactly this one document. A succession plan is this whole book's founding thesis, written down as a single page anyone can read the day they need it.

Recruitment, roles, cadence, term limits, and succession planning are five separate concepts, but a working board runs them as one continuous cycle rather than five isolated tasks. The diagram below traces that cycle end to end, including the separate trigger that fires the succession plan the moment a founder actually departs.

#### Diagram: Board Governance Cycle

<iframe src="../../sims/board-governance-cycle/main.html" width="100%" height="822px" scrolling="no"></iframe>

<details markdown="1">
<summary>Board Governance Cycle</summary>
Type: workflow
**sim-id:** board-governance-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace how recruitment, roles, meeting cadence, and term limits run as one continuous cycle for a board seat, and show succession planning as the separate event that fires the moment a founder or lead mentor actually departs.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a board's current state, the learner differentiates the routine seat-rotation cycle from the one-time succession-plan trigger that a founder's departure activates.

Steps (flowchart with a decision diamond and a separate trigger branch):
1. Start: "Board Seat Vacant" -- click reveals "A seat with no current holder, either because the club is forming its first board or a term has just expired."
2. Process: "Recruit for the Seat" -- click reveals the Board Member Recruitment definition above.
3. Process: "Assign Roles and Duties" -- click reveals the Board Roles And Duties definition above.
4. Process: "Meet on a Fixed Cadence" -- click reveals the Board Meeting Cadence definition above.
5. Decision: "Term Limit Reached?" -- click reveals the Board Term Limits definition above; "No" loops back to step 4.
6. Process (from "Yes"): "Seat Rotates Off (Staggered)" -- click reveals "The seat vacates on its own staggered schedule, never at the same time as every other seat."; loops back to step 1 for that one seat.
7. Separate trigger, drawn off to the side and connected by a dashed line rather than the main cycle: "Founder or Lead Mentor Departs" -- click reveals "An unplanned or planned departure, the event succession planning exists to prepare for."
8. Process (from trigger): "Execute Written Succession Plan" -- click reveals the Succession Planning definition above.
9. End (from step 8): "Acting Lead Named, Signing Authority Transfers" -- click reveals "The board's prepared answer takes effect immediately, rather than being improvised under pressure."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definitions already given in this chapter's prose.

Color coding: Blue for the recruitment-and-assignment steps, gold for the recurring meeting-and-term-limit cycle, the dashed trigger branch and its two downstream nodes in red to visually separate a rare, high-stakes event from routine governance.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
</details>

## Turning a Kit Shelf Into Club-Wide Inventory

Chapter 21 gave each kit type its own documentation sheet, storage bin, and loaner log -- a system that works well for a shelf with a handful of kit types. A club that has grown to dozens of individual kits, laptops, and accessories across many kit types needs something Chapter 21 never had to build: one unified system that can answer "where is this specific item right now" for any single piece of equipment in the building, not just for a kit type as a whole.

### Club Inventory System

**A club inventory system** is the club-wide combination of a unique physical identifier on every piece of equipment, a sticker or QR code linking that identifier to a record, and a shared log tracking each item's location and condition -- extending Chapter 21's per-kit-type documentation sheet to cover every individual item a club owns, not just every kit type.

A worked example shows the gap Chapter 21 leaves open: two identical gyroscope kits share one documentation sheet, one wiring diagram, and one code template -- exactly as Chapter 21 designed. But when one of the two goes missing after a loaner period, nothing in that shared documentation says which physical kit is unaccounted for, because neither kit has ever been distinguished from the other. A club inventory system fixes exactly that gap by giving each physical kit -- not each kit type -- its own unique identifier.

### Inventory Sticker Printing

**Inventory sticker printing** is the process of printing a small, durable, sequentially numbered label -- typically from a sheet of adhesive labels through a home printer or a dedicated label maker -- and affixing one to every individual item entering the inventory system, giving that specific item a unique, human-readable ID separate from any kit type's shared name.

A worked example shows the arithmetic behind a bulk sticker run: a club with 42 individual items -- kits, laptops, and accessories -- prints one sheet of numbered labels running #001 through #050, leaving eight numbers spare for the next few purchases, at a cost of about $6 for the whole sheet. Every item leaving the prep table that afternoon gets its own number, in order, logged as it is applied.

### QR Code On Kits

**A QR code on a kit** is a small square barcode, printed alongside or instead of the numbered sticker, that a smartphone camera can scan to open that specific item's record directly -- its documentation sheet from Chapter 21, its current checkout status, and its full history -- without anyone needing to type an ID number by hand.

A worked example shows the QR code saving real time: a substitute mentor picks up an unfamiliar sensor kit mid-session and scans the QR code on its lid instead of hunting through a shared drive for the right documentation sheet. The scan opens the kit's wiring diagram directly on the mentor's phone in under five seconds -- the same file Chapter 21 already built, just reachable instantly instead of by memory.

### Asset Tagging Process

**The asset tagging process** is the one-time sequence that turns a brand-new item into a tracked one: assigning it the next unused sticker number, generating its matching QR code, recording both alongside the item's name, kit type, and purchase date in the inventory log, and only then releasing it into general circulation.

A worked example runs the process on one new item: a newly arrived microphone kit is assigned sticker #037, its QR code is generated and printed on the same label sheet, and both are logged in a row alongside "Microphone Kit, purchased 2026-09-01" before the kit ever reaches a storage bin. Skipping any one of those steps -- applying a sticker without logging it, for instance -- creates a numbered item the inventory system cannot actually find.

Now that stickers, QR codes, and the tagging process that combines them have each been introduced, the table below summarizes what each piece captures and when a mentor actually reaches for it.

| Inventory Piece | What It Captures | When a Mentor Reaches for It |
|---|---|---|
| Inventory Sticker | A unique, human-readable ID number for one specific item | Visually confirming which physical item is in hand |
| QR Code | A scannable link to that item's full digital record | Pulling up documentation or checkout status instantly |
| Asset Tagging Process | The one-time act of assigning both and logging them together | The day a new item first enters circulation |

### Inventory Audit Process

**An inventory audit process** is a scheduled, physical count of every tagged item against the inventory log -- typically once per semester -- confirming that every sticker number the log expects to find on the shelf is actually there, or accounted for in an active checkout.

A worked example shows an audit catching a problem early: a semester-end audit expects to find 42 logged items and physically counts only 40. Checking the checkout log accounts for one -- a robot kit currently on loan, due back next week -- leaving exactly one item, sticker #019, genuinely unaccounted for. That single discrepancy, caught during a scheduled audit, is what the lost item policy below exists to handle.

### Lost Item Policy

**A lost item policy** is a written, no-blame procedure for what happens when an audit or a return finds an item genuinely missing: a fixed grace period to keep searching, a clear point at which the item is logged as lost rather than simply "unaccounted for," and a predetermined decision about whether the last person who checked it out owes a replacement cost.

A worked example applies the policy to sticker #019 from the audit above: the policy gives two weeks to keep looking before anything is marked lost. The kit turns up on day nine, still zipped inside a student's backpack from a session two months earlier, and gets logged as returned rather than lost -- the policy's grace period is exactly what kept an honest, unremarkable delay from turning into an accusation.

!!! mascot-tip "Write the grace period down before you ever need it"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: decide your grace period and replacement-cost rule on a calm day, in writing, before any item actually goes missing. Deciding it in the moment, under pressure, is how a policy turns into a personal accusation instead of a routine procedure.

### Equipment Checkout System

**An equipment checkout system** generalizes Chapter 21's kit loaner program to every tagged item in the inventory: scanning an item's QR code, recording who has it and an expected return date, and updating its status from "in storage" to "checked out" the moment it leaves the shelf.

A worked example shows the scan replacing a paper sign-out sheet: a mentor checking out three items for a weekend workshop scans each QR code in turn, and the system logs all three as checked out to that mentor with a two-day due date -- a process that takes under a minute for three items, compared to writing three separate rows by hand on Chapter 21's paper loaner log.

### Equipment Return Tracking

**Equipment return tracking** closes the loop the checkout system opens: scanning a returned item's QR code flips its status back to "in storage," time-stamps the return, and flags anything still checked out past its due date so a mentor can follow up before an item quietly becomes an audit surprise.

A worked example shows the flag doing its job: three days after a workshop's two-day due date passes with no return scan, the system automatically flags all three items as overdue on the mentor's dashboard. A five-minute follow-up text to the mentor who checked them out turns up all three in a backpack, closed out before the next semester's audit ever has a chance to find them missing.

Eight separate pieces -- the system itself, stickers, QR codes, tagging, audits, the lost item policy, checkout, and return tracking -- only do their job as one connected cycle. The diagram below traces a single tagged item through that entire cycle.

#### Diagram: Club Inventory Lifecycle Workflow

<iframe src="../../sims/club-inventory-lifecycle-workflow/main.html" width="100%" height="1002px" scrolling="no"></iframe>

<details markdown="1">
<summary>Club Inventory Lifecycle Workflow</summary>
Type: workflow
**sim-id:** club-inventory-lifecycle-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one tagged item through its entire inventory lifecycle -- tagging, storage, checkout, return, periodic audit, and the branch into the lost item policy -- tying together every inventory concept from this chapter into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given an item's current inventory stage and an audit outcome, the learner differentiates whether the item should return to storage, be flagged overdue, or enter the lost item policy.

Steps (flowchart with decision diamonds):
1. Start: "New Item Arrives" -- click reveals the Club Inventory System definition above.
2. Process: "Print Sticker" -- click reveals the Inventory Sticker Printing definition above.
3. Process: "Generate QR Code" -- click reveals the QR Code On Kits definition above.
4. Process: "Log via Asset Tagging Process" -- click reveals the Asset Tagging Process definition above.
5. Process: "Store on Shelf" -- click reveals "The item sits in general circulation, available for the next checkout."
6. Process: "Scan Out (Checkout System)" -- click reveals the Equipment Checkout System definition above.
7. Decision: "Returned by Due Date?" -- click reveals "The system compares today's date against the due date recorded at checkout."
7a. Branch "Yes" leads to Process: "Scan In (Return Tracking)" -- click reveals the Equipment Return Tracking definition above; loops back to step 5.
7b. Branch "No" leads to Process: "Flag as Overdue" -- click reveals "The mentor dashboard surfaces the overdue item automatically, prompting a follow-up before it becomes an audit surprise."; loops back to step 7a once resolved.
8. Process (periodic, separate branch from step 5): "Semester Audit" -- click reveals the Inventory Audit Process definition above.
9. Decision: "Item Found During Audit?" -- click reveals "Every logged item not currently checked out should be physically present; anything missing moves to the next step."
9a. Branch "Yes" loops back to step 5.
9b. Branch "No" leads to End: "Lost Item Policy" -- click reveals the Lost Item Policy definition above.

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Blue for tagging steps (sticker, QR, asset tagging), green for circulation steps (storage, checkout, return), purple for the decision diamonds, red for the overdue-flag and lost-item-policy end states.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan; layout reflows responsively on narrow screens.
</details>

## Recruiting Mentors at Scale

Chapter 9 covered mentor registration and the 3:1 ratio for a club's earliest, smallest sessions. A club that has grown past that founding size -- multiple sessions, a longer waiting list, or a board actively watching the mentor liaison's reports -- needs mentor recruiting to become a repeatable process of its own, not a founder personally asking friends.

### Advanced Mentor Recruiting

**Advanced mentor recruiting** means running mentor recruitment as a repeatable, multi-channel process -- posting on professional networks, presenting at local engineering meetups, and asking existing mentors' employers about volunteer-time programs -- rather than relying on the founder's personal contacts, which is the informal recruiting Chapter 9 assumed for a club's first few mentors.

A worked example shows the scale difference: a founder's personal network produced the club's first three mentors over its first year, one conversation at a time. Posting a single request in a regional engineering-meetup newsletter and a company's internal volunteer-matching board produced eleven mentor applications in three weeks -- more candidates than personal outreach generated in the club's entire first year.

### Finding Qualified Mentors

**Finding qualified mentors** is the evaluation step that follows recruiting: judging each candidate not just on the background-check clearance Chapter 10 already requires, but on technical comfort with the club's actual kits, and on the interpersonal patience physical-computing work with young students demands -- typically through one short trial session before a final commitment.

A worked example shows why a trial session matters more than a resume: two candidates from the meetup posting both pass their background check cleanly. One has deep professional experience but grows visibly frustrated when a student's LED strip needs the same wiring fix explained three times; the other has less technical depth but stays calm and patient through the same repeated question. A one-session trial, observed by the mentor liaison, catches that difference before either candidate is placed with students long-term -- something a resume and a background check alone never would have revealed.

The chart below compares how far each recruiting channel actually reaches, and how many candidates from each channel typically clear the qualification step above.

#### Diagram: Mentor Recruiting Channel Effectiveness

<iframe src="../../sims/mentor-recruiting-channel-effectiveness/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Mentor Recruiting Channel Effectiveness</summary>
Type: chart
**sim-id:** mentor-recruiting-channel-effectiveness<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Let a board or founder compare how many mentor candidates each recruiting channel typically produces against what share of those candidates actually pass the qualification trial, so a growing club can choose channels deliberately instead of relying on personal outreach alone.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare

Learning objective: Given candidate counts and qualification rates across five mentor recruiting channels, the learner compares them to select an effective mix of channels for a specific recruiting need.

Chart type: Grouped bar chart (two series per channel)

X-axis: Recruiting channel (Founder's Personal Network, Engineering Meetup Post, Employer Volunteer Program, University CS Club, Parent Referral)

Y-axis (left): Candidates generated in a typical three-week posting window
Y-axis (right, or second bar color): Percentage of those candidates who pass the qualification trial

Data series:
1. Candidates Generated (blue bars): Founder's Personal Network 3; Engineering Meetup Post 7; Employer Volunteer Program 4; University CS Club 4; Parent Referral 2

2. Passed Qualification Trial (gold bars, percent): Founder's Personal Network 100%; Engineering Meetup Post 43%; Employer Volunteer Program 50%; University CS Club 75%; Parent Referral 100%

Title: "Mentor Candidates Generated vs. Qualification Rate by Channel"
Legend: Position top-right, labeling "Candidates Generated" and "Passed Qualification Trial (%)"

Interactive features:
- Hover any bar to see its exact value and a one-sentence description of that channel pulled from this chapter
- Toggle buttons above the chart to show/hide each series independently
- Click a channel's label on the x-axis to highlight both of its bars and dim the rest

Annotations:
- Small callout near the Personal Network bars: "Smallest reach, but every candidate already carries the founder's trust."
- Small callout near the Meetup Post bars: "Largest reach, but the lowest qualification rate -- budget time for more trial sessions."

Implementation: Chart.js grouped bar chart with a dataset array holding both series; hover tooltips configured via Chart.js's built-in tooltip callback to include the one-sentence channel description.
</details>

## Chapter Summary

An oversight board turns a club's authority from something one founder carries around into something a set of named seats carry instead -- a chair, a secretary, a treasurer, a mentor liaison, and an at-large member, recruited deliberately, meeting on a fixed cadence, rotating off on staggered term limits, all of it existing to make one document possible: a succession plan the board can execute the day a founder actually leaves. A club inventory system does the same for equipment instead of authority: printed stickers and QR codes give every individual item its own identity, the asset tagging process logs that identity the day an item arrives, checkout and return tracking follow it through circulation, and a semester audit paired with a written lost item policy catches and calmly resolves whatever the log and the shelf disagree about. Advanced mentor recruiting and a real qualification trial close the chapter by making sure that as a club scales past its founder, it also scales past relying on that founder's personal contact list to find every mentor.

!!! mascot-celebration "You just built the infrastructure this whole book has been pointing toward"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just designed an oversight board with real seats and a succession plan, a club-wide inventory system with stickers and QR codes, and a scaled mentor-recruiting process -- the exact combination that lets a great club outlive the one person who started it. That's sustainability, fully built.
