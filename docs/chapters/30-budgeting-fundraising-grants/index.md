---
title: Budgeting, Fundraising, and Grant Writing
description: Covers building a club budget from recurring and one-time costs, then funding it through grants, community drives, crowdfunding, corporate sponsorship, and negotiated partnerships -- including nonprofit fiscal sponsorship for a club too small to incorporate on its own.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 08:14:04
metadata:
  ibook:
    version: 1.10
---

# Budgeting, Fundraising, and Grant Writing

## Summary

This chapter covers building a club budget from recurring and one-time costs, then raising the funds to support it: grant writing, corporate sponsorship, crowdfunding, and community support drives. You will be able to draft a basic club budget and a short grant proposal.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Establishing A Budget | 254 |
| Budget Line Item | 48 |
| Recurring Cost Planning | 47 |
| One Time Cost Planning | 46 |
| Cost Per Student Estimate | 45 |
| Raising Funds | 44 |
| Grant Writing Basics | 43 |
| Grant Proposal Structure | 29 |
| Grant Application Tracking | 28 |
| Community Support Drive | 27 |
| Crowdfunding Campaign | 26 |
| Corporate Sponsorship | 25 |
| In Kind Donation | 24 |
| Fundraising Event Planning | 23 |
| Local Company Partnership | 22 |
| Strategic Partnership Building | 21 |
| Vendor Discount Negotiation | 20 |
| Nonprofit Fiscal Sponsorship | 19 |

## Prerequisites

This chapter builds on concepts from:

- [3. Writing Your Club Charter and Safety Policies](../03-club-charter-and-safety/index.md)

---

Chapter 3's charter already named who has authority over spending -- a decision-making process that reserves high-stakes financial calls for a mentor vote or, where one exists, an oversight board. That process only means something once there is an actual budget to vote on. Chapter 28 went a step further and explained why a coding club that charges no fee reaches a wider slice of its community than one that charges even a modest fee, but it stopped short of explaining how a leader actually pays for that promise. This chapter closes that gap: building a realistic first-year budget, understanding why recurring costs and one-time costs behave differently, and then raising the money -- through grants, community drives, corporate sponsors, and negotiated partnerships -- that lets a no-fee club stay no-fee past its first semester.

!!! mascot-welcome "Every dollar in this chapter traces back to a real club decision"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- and every great club eventually needs a budget that survives contact with real invoices, not just a hopeful number scrawled on a grant application. This chapter walks through building that budget, then raising the funds through grants, sponsorships, community drives, and negotiated partnerships that keep it funded past opening day.

## Establishing Your Club's Budget

### Establishing A Budget

**Establishing a budget** means building a complete, written plan for every dollar a club expects to spend in a coming year, organized so a leader can see at a glance what has to be paid for again and again versus what gets paid for once and is then finished. A budget is not the same thing as a wish list of things a club would like to own -- it is a commitment to a specific total, broken into specific line items, that someone has to actually raise or already has in hand.

Think of a club budget the way you would think of a recipe. Every time you cook the same dish, certain ingredients get used up and have to be restocked -- flour, eggs, cooking oil -- no matter how many times you have made the dish before. Other purchases happen once and then sit in the kitchen for years: the oven, the mixing bowl, the good chef's knife. A club budget works the same way. Recurring costs are the flour and eggs of a coding club -- internet access, insurance, a fresh supply of printed challenge cards -- consumed every term and needing to be bought again. One-time costs are the oven and the mixer -- laptops, project kits, a storage cart -- purchased once and then reused, term after term, without buying the whole batch over again.

Here is that same distinction laid out side by side, since a leader will return to it every time a new expense shows up:

| Aspect | Recurring Cost | One-Time Cost |
|---|---|---|
| Repeats how often | Every session, month, or year | Once, or on a multi-year replacement cycle |
| Example | Internet plan, liability insurance, printed cards | Laptops, project kits, a storage cart |
| Budgeting risk if ignored | Quietly drains a budget that looked fully funded | Feels affordable in isolation, then arrives all at once |
| Who usually funds it | Ongoing grants, membership drives, sponsors | Startup grants, in-kind donations, one-time gifts |

A worked example turns this into real arithmetic. A new club forming at a public library plans to serve twelve students. Its recurring costs for the year total a $20-per-month internet hotspot plan ($240), a $350 annual liability insurance policy, $180 in replenished snacks and consumable supplies, and $60 in printing -- $830 in recurring costs. Its one-time costs cover six Chromebooks at $250 apiece ($1,500), ten Moving Rainbow kits at $15 each ($150), three starter robot kits at $20 each ($60), and a $120 storage cart -- $1,830 in one-time costs. The first year's total budget is $830 plus $1,830, or $2,660, which works out to about $221.67 per student. In year two, none of the one-time costs repeat, so the budget drops to the $830 recurring total alone -- about $69.17 per student -- a number worth remembering when a funder asks whether a grant is a one-time favor or an ongoing commitment.

The MicroSim below lets you build a budget like this one yourself, swapping in your own line items and watching the recurring split, the one-time split, and the resulting cost per student update as you go.

#### Diagram: Coding Club Budget Builder

<iframe src="../../sims/coding-club-budget-builder/main.html" width="100%" height="562px" scrolling="no"></iframe>

<details markdown="1">
<summary>Coding Club Budget Builder</summary>
Type: microsim
**sim-id:** coding-club-budget-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/economics-course/tree/main/docs/sims/budget-builder

Purpose: Let a club leader build a full first-year budget out of individual line items, then see the recurring/one-time split and the resulting cost per student before committing to a real number.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a set of named recurring and one-time cost line items and a student count, the learner calculates the total annual budget, the recurring-versus-one-time split, and the cost per student.

Instructional Rationale: A parameter-exploration pattern fits this Apply-level objective because the learner needs to add, remove, and reclassify several line items and immediately see the arithmetic consequences, rather than watch one pre-computed scenario play out.

Canvas layout:
- Left (60%): a stacked bar showing the recurring total and one-time total side by side, plus a large "Cost Per Student" readout
- Right (40%): a scrollable list of line items with add/remove controls, and the number-of-students input

Interactive controls:
- Button row: "Add Recurring Item" and "Add One-Time Item," each opening a name field and a dollar-amount field
- Per-item: a small "x" remove button
- Input (number): Number of students, default 12
- Button: "Load Sample Year-1 Budget" -- prefills the exact worked example above (internet, insurance, snacks, printing as recurring; Chromebooks, Moving Rainbow kits, robot kits, storage cart as one-time)
- Button: "Reset"

Behavior:
- Recurring Total = sum of all items marked recurring
- One-Time Total = sum of all items marked one-time
- Total Budget = Recurring Total + One-Time Total
- Cost Per Student = Total Budget / Number of Students, rounded to the nearest cent
- The stacked bar and the Cost Per Student readout recalculate immediately whenever any item, amount, or the student count changes

Default parameters: loads with the sample Year-1 budget from the worked example (12 students, $830 recurring, $1,830 one-time, $2,660 total, $221.67 per student)

Implementation notes: p5.js canvas with createButton and createInput controls parented to the sketch's own control div; store line items in a JavaScript array of {name, amount, type} objects so items can be added and removed without redrawing the whole layout from scratch.
</details>

!!! mascot-thinking "Notice which half of the recipe you're looking at"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the shift here: a one-time cost isn't really "done" forever -- a laptop bought once still wears out on a multi-year cycle, which means today's one-time purchase is tomorrow's recurring replacement line. Budgeting well means planning for both timelines at once, not just the one due this month.

## Breaking the Budget into Line Items

### Budget Line Item

**A budget line item** is a single named entry in a budget, carrying its own dollar amount, so a leader can examine, adjust, or seek funding for one specific cost without treating the whole budget as an indivisible lump sum. "Supplies" is not a usable line item on its own; "cardstock for challenge cards, $22" is, because it names exactly what the money buys and lets a leader cut, keep, or fund that one item independently of everything else.

A worked example shows the difference in practice. A first-time club leader drafts a budget with a single line: "Materials -- $400." When a local business offers to sponsor "whatever the club needs most," the leader has nothing specific to hand them. After breaking that one line into itemized entries -- tape and glue ($25), cardstock ($22), a replacement soldering iron tip ($8), USB cables ($35), and a $310 laptop repair reserve -- the same conversation goes differently: the sponsor picks the laptop repair reserve specifically, because it is the one item large enough and concrete enough to feel like a meaningful gift. Line items turn a vague number into something a funder can actually choose to fund.

### Recurring Cost Planning

**Recurring cost planning** is the practice of identifying every cost that repeats on a predictable schedule -- every session, every month, or every year -- and budgeting for it continuously rather than treating it as a single expense that gets paid and forgotten. A cost that seems small in any single month can add up to a serious annual commitment once it repeats often enough.

A worked example makes the compounding visible. A club's $20-per-month internet hotspot plan looks trivial next to a $1,500 laptop purchase, but over a three-year planning horizon it totals $720 -- nearly half the cost of the entire laptop fleet. A leader who only plans one term ahead might not notice that this "small" recurring line is on track to outspend a much larger one-time purchase within a few years, which is exactly why recurring cost planning is treated as its own skill rather than folded into the one-time budget as an afterthought.

### One Time Cost Planning

**One-time cost planning** covers costs incurred once, typically at a club's startup or when it adds a new capability, that do not need to be repeated every year -- though, as the earlier metaphor noted, even a one-time cost eventually recurs on a longer replacement cycle. Planning for it well means distinguishing a true single purchase from a cost that only feels one-time because nobody has hit the replacement point yet.

A worked example shows why that distinction matters. A club buys six Chromebooks for $1,500 and books the entire amount as a one-time cost for the year. Three years later, two of the six devices fail and need replacing at $250 each -- a $500 expense the original one-time budget never accounted for. A more accurate plan treats the laptop purchase as "one-time" in the year it happens, but also sets aside a small annual reserve -- roughly $375 a year, spreading the $1,500 across a four-year expected lifespan -- so the eventual replacement never arrives as a surprise.

### Cost Per Student Estimate

**A cost per student estimate** divides a club's total budget, recurring and one-time costs combined, by the number of students it serves, producing a single number that is easy to compare across terms or explain to a funder who asks what it actually costs to serve one student. It is the number that turns an abstract budget total into something a grant reviewer or a sponsor can weigh against their own priorities.

Returning to the worked example from earlier in this chapter: the first year's $2,660 total budget, divided across 12 students, comes to $221.67 per student. The second year's $830 recurring-only budget, divided across the same 12 students, comes to about $69.17 per student. A leader pitching a renewal grant can use that second, much smaller number to make a direct case: the expensive part of funding this club already happened, and an ongoing grant now buys three times the reach per dollar that the startup grant did.

## Writing Grants That Get Funded

### Raising Funds

**Raising funds** is the general practice of securing money and in-kind resources from outside a club's own pockets to cover its budget -- an umbrella term for the specific channels the rest of this chapter details, since no single technique reliably covers an entire club budget on its own. Most sustainable clubs run several funding channels at once rather than betting everything on one.

A worked example shows what that mix looks like in practice. To cover its $2,660 first-year budget, a club leader combines a $1,600 startup microgrant (60% of the total), a $665 corporate sponsorship from a local business (25%), and $395 raised through a community support drive at a school open house (15%). No single source had to cover the whole amount, which also meant no single funder's rejection would have sunk the club's first year.

### Grant Writing Basics

**Grant writing basics** cover what a grant actually is -- money awarded by a foundation, government agency, or company based on a written application that the funder evaluates against its own stated priorities -- and the core discipline of matching a club's request to those priorities in the funder's own language, rather than describing the club in whatever terms feel natural to the person writing the application.

A worked example shows the payoff of that discipline. A local library foundation's grant guidelines state a priority for "youth STEM programming that serves underrepresented students." A first draft of a club's application describes "a fun coding club for kids," which never mentions STEM or underrepresented students at all, even though the club's own no-fee model and outreach plan from Chapter 28 already fit that priority closely. Rewriting the same facts using the funder's own language -- "youth STEM programming reaching students who face cost and access barriers to computing education" -- describes the identical club, but now speaks directly to what the reviewer was told to look for.

!!! mascot-encourage "Your first grant application is not supposed to feel easy"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If staring at a blank grant application feels intimidating, that is completely normal -- most first-time club leaders feel exactly the same way. Start by copying the funder's own priority language into your draft first, then fill in your club's real facts underneath it; the blank page gets much shorter once you're not inventing the structure from scratch.

### Grant Proposal Structure

**Grant proposal structure** is the set of standard sections nearly every grant application shares, regardless of funder: a needs statement, a project description, a budget, an evaluation plan, and a short organizational background. Learning this structure once means a leader can reuse most of a proposal's content across many different applications, adjusting only the language and numbers each funder specifically asks for.

Here is how the $500 library-foundation microgrant from the earlier example fills each section:

| Section | What It Covers | This Club's Content |
|---|---|---|
| Needs Statement | Why the problem matters, backed by a fact or figure | Local families report no free after-school STEM option within walking distance |
| Project Description | What the club will actually do | Weekly no-fee coding club serving 12 students, ages 10-14, using Scratch and physical computing |
| Budget | Line items the grant will cover | $500 toward the $1,830 one-time device and kit costs |
| Evaluation Plan | How success will be measured | Attendance tracking and a post-session survey, from Chapter 1's continuous-improvement log |
| Organizational Background | Who is running it and why they're credible | Club leader's experience, fiscal sponsor's nonprofit status (see below) |

### Grant Application Tracking

**Grant application tracking** is the practice of recording every grant a club applies for -- the funder's name, amount requested, deadline, current status, and next follow-up date -- in one place, so that a promising application never quietly falls through the cracks between a founder's other responsibilities. A club applying to more than two or three funders at once needs this discipline, since memory alone stops being reliable past that point.

A worked example shows the cost of skipping it. One club leader keeps grant deadlines only in email, and misses a required progress report for a grant already awarded -- a report the funder needed thirty days before considering a renewal. The grant is not renewed the following year, and the leader only discovers why months later. A second club leader keeps a single spreadsheet with columns for funder, amount, deadline, status, and next action, and sets a calendar reminder two weeks before every deadline. That leader's renewal report goes in on time, and the funder renews the grant at a higher amount the following cycle.

!!! mascot-tip "One spreadsheet beats a folder full of good intentions"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: keep one spreadsheet with a row per grant -- funder, amount, deadline, status, and next action -- and set a calendar reminder two weeks before every deadline, including report deadlines on grants you've already won. A missed renewal report is the single most common way a club loses funding it already had.

The workflow below traces a grant from the moment a leader spots an opportunity through the tracking step that keeps it from being forgotten.

#### Diagram: Grant Writing and Tracking Workflow

<iframe src="../../sims/grant-writing-tracking-workflow/main.html" width="100%" height="802px" scrolling="no"></iframe>

<details markdown="1">
<summary>Grant Writing and Tracking Workflow</summary>
Type: workflow
**sim-id:** grant-writing-tracking-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show the full sequence from spotting a grant opportunity through writing, submitting, and tracking it to a final outcome, so a first-time grant writer knows exactly what step comes next.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a grant opportunity at any stage, the learner correctly identifies the next step in the club's grant-writing and tracking process.

Steps (flowchart with a decision diamond):
1. Start: "Grant Opportunity Identified" -- click reveals "A foundation, company, or government program with funding priorities that plausibly match the club's mission."
2. Process: "Match Club Facts to Funder's Language" -- click reveals "Rewrite the club's real activities using the funder's own stated priority terms, per Grant Writing Basics."
3. Process: "Draft Using Standard Proposal Structure" -- click reveals "Needs statement, project description, budget, evaluation plan, organizational background."
4. Process: "Submit Before Deadline" -- click reveals "Log the submission immediately in the tracking spreadsheet with status 'Submitted.'"
5. Decision: "Funder Response?" -- click reveals "Most funders reply within 4-12 weeks; if no reply by the funder's stated window, a tracked follow-up email is due."
6a. Process (if awarded): "Log Award and Any Report Deadlines" -- click reveals "Update status to 'Awarded' and add every required report deadline as its own tracked row, not just the grant deadline itself."
6b. Process (if declined): "Log Outcome and Request Feedback" -- click reveals "Update status to 'Declined'; many funders will share brief feedback on request, useful for the next application."
7. End: "Update Tracking Spreadsheet" -- click reveals "Every branch above ends here -- the tracking step is what prevents a missed report or a forgotten reapplication next cycle."

Interactivity requirement: every node has a Mermaid `click` directive wired to an infobox showing its revealed text; this is not a decorative flowchart.

Color coding: Blue for drafting steps, yellow for the decision diamond, green for the awarded branch, orange for the declined branch

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram.
</details>

## Funding Channels Beyond Grants

Grants are not the only way to raise money, and a club that relies on them exclusively is betting its whole budget on a slow, competitive process with no guaranteed outcome. The channels below run on a faster timeline and often depend more on local relationships than on a written application.

### Community Support Drive

**A community support drive** is a short, organized campaign asking a club's local community directly for donations -- a table at a school open house, a jar at a neighborhood event, a request sent home in a school newsletter -- rather than a formal written application to an outside funder. It works best when it is time-boxed and specific, not an open-ended, ongoing ask.

A worked example: a club sets up a donation table at a back-to-school night, with a sign stating the specific goal -- "$300 helps us buy ten Moving Rainbow kits" -- rather than a generic "please support our club" message. Over the course of one evening, the table collects $340 in small cash donations, exceeding the stated goal, largely because visitors could see exactly what their money would buy.

### Crowdfunding Campaign

**A crowdfunding campaign** is an online fundraising effort hosted on a platform such as DonorsChoose or GoFundMe, soliciting many small donations from a broad audience -- typically friends, family, and the club's existing network sharing a link -- rather than one or two large gifts. Most platforms tie a campaign to one specific, describable goal and take a small percentage fee from whatever is raised.

A worked example: a club posts a DonorsChoose campaign titled "10 Raspberry Pi Pico Kits for Our After-School Coding Club," listing the exact $150 cost and a photo of a sample kit. Family members and mentors share the link, and the campaign reaches its goal within three weeks, after the platform's roughly 15% fee is deducted from the total raised.

!!! mascot-warning "A vague ask raises less money than a specific one"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this trap: a campaign that says "help our club" performs worse than one that names an exact item, an exact dollar amount, and a photo of what the money buys. Fix it before you launch -- pick one concrete goal per campaign, state its real cost, and show a picture of it.

### Corporate Sponsorship

**Corporate sponsorship** is an ongoing or annual financial or in-kind commitment from a local business, given in exchange for public acknowledgment -- a logo on the club's flyer, a mention on its website, or a sign at events -- distinct from a single unconditional gift, since a sponsorship implies a continuing relationship both sides expect to renew.

A worked example: a local hardware store agrees to sponsor a club at $500 per year in cash, plus a standing offer of a 10% discount on any tools or supplies the club buys there. In exchange, the club lists the store's logo on its flyer and website and mentions it by name at its annual showcase night. Both sides treat the arrangement as ongoing, revisited each year rather than negotiated from scratch.

### In Kind Donation

**An in-kind donation** is a non-cash contribution of goods or services with a real, identifiable dollar value -- donated laptops, a free venue, a volunteer's professional time -- which should be logged in the budget at its fair market value rather than left out simply because no cash changed hands. Failing to log it understates how much support a club is actually receiving.

A worked example: a local IT company donates five used laptops it was about to retire, each worth roughly $150 on the used market. The club logs $750 in in-kind value against its one-time device line item, and later cites that $750 figure -- alongside its cash funding -- when a foundation asks how much total support the club has already secured, since most funders count in-kind support toward a matching-funds requirement.

### Fundraising Event Planning

**Fundraising event planning** means organizing a single scheduled event -- a trivia night, a bake sale, a small coding showcase with an admission suggestion -- specifically to raise money, which requires its own small budget for venue, supplies, and prizes weighed against how much the event is expected to bring in. An event that costs more to run than it raises is a net loss, not a fundraiser, however well-attended it is.

A worked example: a club runs a trivia night at a community center, spending $80 on room rental, snacks, and small prizes. The event brings in $500 in ticket and raffle sales, for a net profit of $420 after covering its own costs -- the number that actually matters for the club's budget, not the gross $500 figure alone.

The chart below compares typical yield and volunteer effort across these five channels, side by side, using figures drawn from the worked examples above.

#### Diagram: Fundraising Channel Yield Comparison

<iframe src="../../sims/fundraising-channel-yield-comparison/main.html" width="100%" height="542px" scrolling="no"></iframe>

<details markdown="1">
<summary>Fundraising Channel Yield Comparison</summary>
Type: chart
**sim-id:** fundraising-channel-yield-comparison<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Let a leader compare typical net dollar yield against volunteer hours required across five fundraising channels, to help choose a channel that fits both a funding need and the time a club actually has available.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare

Learning objective: Given typical yield and effort figures for five fundraising channels, the learner compares them to select an appropriate channel for a specific funding need and time budget.

Chart type: Grouped bar chart (two series per channel)

X-axis: Fundraising channel (Community Support Drive, Crowdfunding Campaign, Corporate Sponsorship, In-Kind Donation, Fundraising Event)

Y-axis (left): Typical net dollar yield for a small club
Y-axis (right, or second bar color): Approximate volunteer hours to plan and run it

Data series:
1. Net Yield (blue bars): Community Support Drive $340; Crowdfunding Campaign $128 (after fee, on a $150 goal); Corporate Sponsorship $500/year; In-Kind Donation $750 (one-time value); Fundraising Event $420

2. Volunteer Hours (gold bars): Community Support Drive 4; Crowdfunding Campaign 6; Corporate Sponsorship 3 (mostly one relationship-building conversation); In-Kind Donation 2; Fundraising Event 15

Title: "Typical Yield vs. Volunteer Hours by Fundraising Channel"
Legend: Position top-right, labeling "Net Yield ($)" and "Volunteer Hours"

Interactive features:
- Hover any bar to see its exact value and a one-sentence description of that channel pulled from this chapter
- Toggle buttons above the chart to show/hide each series independently
- Click a channel's label on the x-axis to highlight both of its bars and dim the rest

Annotations:
- Small callout near the Fundraising Event bars: "Highest yield, but also the highest time cost -- plan this one only once you have volunteer hours to spare."
- Small callout near In-Kind Donation: "Highest yield per volunteer hour, but depends on finding a willing donor, not just effort."

Implementation: Chart.js grouped bar chart with a dataset array holding both series; hover tooltips configured via Chart.js's built-in tooltip callback to include the one-sentence channel description.
</details>

## Building Partnerships That Pay Off

The channels above are mostly one-time or annual transactions. The concepts in this final section are about building longer, deeper relationships -- with a single business, a broader network of organizations, or a supplier -- that pay off repeatedly rather than needing to be re-won from scratch every year.

### Local Company Partnership

**A local company partnership** is an ongoing working relationship with one specific nearby business, distinct from a one-time corporate sponsorship gift because it typically trades recognition or volunteer access for recurring, two-way support rather than a single annual payment. The relationship usually involves more give-and-take than a sponsorship check: the business commits people or materials, not just money, and the club commits visible, consistent recognition in return.

A worked example: a local computer repair shop agrees to donate spare parts monthly and sends one employee to volunteer as a mentor twice a month. In exchange, the club features the shop's name on every flyer and invites shop staff to the annual showcase night as guests of honor. Neither side renegotiates the arrangement each month -- it runs as a standing relationship, checked in on once a year, which is what distinguishes it from a one-time sponsorship gift.

### Strategic Partnership Building

**Strategic partnership building** is the broader skill of identifying organizations whose own goals overlap with a club's, beyond the obvious category of funders -- a university computer science club, a regional robotics league, a local maker space -- so that partnership can be based on mutual benefit rather than charity alone. A strategic partner often has more time, space, or expertise to offer than cash.

A worked example: a club leader notices a nearby university's computer science student club runs an annual community-service requirement its members need to fulfill. The leader proposes that university students serve as guest mentors for one session per semester, satisfying the university club's own service requirement while giving the coding club access to mentors it did not have to recruit or train from scratch -- a partnership neither side could have gotten from a simple ask for money.

### Vendor Discount Negotiation

**Vendor discount negotiation** means directly asking a supplier for an educational or nonprofit discount on recurring purchases -- electronic components, craft supplies, printing -- before paying full retail, since many vendors maintain an unadvertised discount that they extend only when a buyer specifically asks for it. Most clubs never ask, and most vendors never volunteer the discount unprompted, which means the gap between the two groups is pure lost savings.

A worked example: a club spends roughly $400 a year on electronic components at full retail price. A leader emails the supplier's sales team asking, in one plain sentence, "Do you offer an educational or nonprofit discount for a registered youth coding program?" The supplier replies with a 15% discount code, saving the club $60 a year on a purchase it was already making -- for the cost of one email.

!!! mascot-tip "Always ask the one-sentence discount question"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut that costs one email: before paying full retail anywhere your club buys supplies regularly, ask, "Do you offer an educational or nonprofit discount?" Many vendors have one they never advertise, and the only way to find out is to ask directly.

### Nonprofit Fiscal Sponsorship

**Nonprofit fiscal sponsorship** is an arrangement in which an established 501(c)(3) nonprofit legally "hosts" a club's finances -- accepting tax-deductible donations and grants on the club's behalf -- because the club itself is not separately incorporated, which this book deliberately does not cover (see Topics Not Covered in the course description). A fiscal sponsor typically keeps a small percentage of funds received, often around 5%, as an administrative fee for the accounting and legal cover it provides.

A worked example: the $500 library-foundation grant from earlier in this chapter requires an applicant with 501(c)(3) status, which a small, informal club does not have on its own. The club partners with the local library's existing "Friends of the Library" nonprofit as its fiscal sponsor. The Friends group accepts the grant on the club's behalf, keeps a 5% administrative fee ($25), and passes the remaining $475 through to the club's actual expenses -- letting a club with no legal entity of its own access funding that would otherwise be entirely out of reach.

The map below shows how each partnership and negotiation concept in this section connects to the specific kind of funding need it addresses, since more than one need often points to the same fix.

#### Diagram: Funding Partnership Fit Map

<iframe src="../../sims/funding-partnership-fit-map/main.html" width="100%" height="622px" scrolling="no"></iframe>

<details markdown="1">
<summary>Funding Partnership Fit Map</summary>
Type: graph-model
**sim-id:** funding-partnership-fit-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Let a leader see, in one view, which partnership or negotiation approach from this chapter addresses which kind of funding need, and notice where a single approach solves more than one need at once.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a specific club funding need, the learner examines which partnership or negotiation approach from this chapter best addresses it.

Node types:
1. Need nodes (4, amber circles, left column): "Ongoing Recurring Support," "One-Time Equipment or Space," "Access to a Grant Requiring 501(c)(3) Status," "Lower Cost on Regular Purchases"
2. Fix nodes (4, sky-blue squares, right column): "Local Company Partnership," "Strategic Partnership Building," "Nonprofit Fiscal Sponsorship," "Vendor Discount Negotiation"

Edges (ADDRESSED_BY, directional arrows from need to fix):
- Ongoing Recurring Support -> Local Company Partnership
- One-Time Equipment or Space -> Strategic Partnership Building
- One-Time Equipment or Space -> Local Company Partnership
- Access to a Grant Requiring 501(c)(3) Status -> Nonprofit Fiscal Sponsorship
- Lower Cost on Regular Purchases -> Vendor Discount Negotiation

Sample data note: "One-Time Equipment or Space" has two outgoing edges, the only need addressed by more than one fix -- surfacing that a strategic partner (like a university club) and a local company partner can both solve a one-time equipment gap, just through different relationships.

Layout: Hierarchical left-to-right, needs in the left column, fixes in the right column

Interactive features:
- Hover a need node: show a one-line plain-language description of the funding need
- Click a need node: highlight all connected fix nodes and dim the rest; open a side-panel infobox with the need's definition and its worked-example figure from this chapter
- Click a fix node: highlight every need it addresses
- Zoom: mouse wheel; Pan: click-and-drag background

Visual styling: amber circles for needs, sky-blue squares for fixes, constant arrow thickness, label text directly on each node

Legend: need color/shape versus fix color/shape, plus a note that arrow direction always reads "need is addressed by fix"

Implementation: vis-network JavaScript library rendering a small fixed dataset (4 need nodes, 4 fix nodes, 5 edges) defined in a data.json file; canvas width is responsive, height fixed to match the iframe.
</details>

## Chapter Summary

Establishing a budget starts with telling recurring costs apart from one-time costs -- the flour-and-eggs versus the oven-and-mixer of a club's finances -- and breaking both into specific budget line items a funder can actually choose to support, with recurring cost planning, one-time cost planning, and a cost-per-student estimate turning that budget into numbers a leader can defend to a room full of skeptical funders. Raising the money to cover it rarely comes from one source: grant writing basics, a standard grant proposal structure, and disciplined grant application tracking bring in competitive funding, while a community support drive, a crowdfunding campaign, corporate sponsorship, in-kind donations, and a well-planned fundraising event fill the gaps a grant cycle cannot cover fast enough. A local company partnership, broader strategic partnership building, vendor discount negotiation, and nonprofit fiscal sponsorship turn one-time gifts into standing relationships that pay off year after year, which is exactly what lets a no-fee club stay no-fee well past its first excited semester.

!!! mascot-celebration "You just built a budget that can actually survive its first year"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just connected budgeting, grant writing, and partnership building into one funding plan -- the exact combination that turns a hopeful no-fee promise from Chapter 28 into a club that can still pay its bills next year. That's sustainable infrastructure, in dollars and cents.
