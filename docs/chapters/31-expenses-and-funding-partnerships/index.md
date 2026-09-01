---
title: Tracking Expenses and Building Funding Partnerships
description: Covers the ongoing financial operations that keep a club's budget honest -- expense reporting, reimbursement, donation receipts, and an annual budget review -- plus the year-over-year funding partnerships with school districts, PTAs, libraries, and community foundations that keep a no-fee club funded past its first year.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 09:36:37
metadata:
  ibook:
    version: 1.10
---

# Tracking Expenses and Building Funding Partnerships

## Summary

This chapter covers the ongoing financial operations of a club: expense tracking, reimbursement, and annual budget review. It closes with the funding partnerships -- school districts, PTAs, libraries, and shared-resource agreements with robotics clubs -- that keep a club financially healthy year over year. You will be able to set up an expense-tracking process and identify a funding partnership relevant to your club.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Budget Tracking Spreadsheet | 18 |
| Expense Reporting Process | 17 |
| Reimbursement Policy | 16 |
| Donation Receipt Process | 15 |
| Annual Budget Review | 14 |
| Emergency Fund Reserve | 13 |
| Equipment Depreciation Planning | 12 |
| Membership Fee Model | 11 |
| Sliding Scale Fee Model | 10 |
| Community Foundation Grant | 9 |
| School District Funding | 8 |
| PTA Partnership Funding | 7 |
| Library Funding Partnership | 6 |
| Robotics Club Overlap Funding | 5 |
| Shared Resource Agreement | 4 |
| Partnership Proposal Template | 3 |
| Sponsor Recognition Plan | 2 |
| Cost Benefit Analysis | 1 |

## Prerequisites

This chapter builds on concepts from:

- [30. Budgeting, Fundraising, and Grant Writing](../30-budgeting-fundraising-grants/index.md)

---

Chapter 30 built a first-year budget -- $830 in recurring costs plus $1,830 in one-time costs, $2,660 in total for twelve students -- and raised the money to cover it through grants, sponsorships, and community drives. Getting the money committed is only half the job. A club still has to track every dollar as it actually gets spent, prove to a funder that the money went where the proposal said it would, and keep bringing in fresh support long after the opening-day excitement has faded. This chapter picks up exactly there: the spreadsheets, receipts, and review habits that keep a budget honest week to week, and the longer institutional partnerships -- school districts, PTAs, libraries, and community foundations -- that turn a first-year grant into a funding relationship a club can count on in year three, year five, and beyond.

!!! mascot-welcome "The money is raised -- now it has to be tracked and renewed"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- and this time we're wiring up the plumbing that keeps a budget from springing a leak. You'll leave this chapter able to track every dollar your club spends and identify the institutional partnership that fits your club's funding gap best.

## Day-to-Day Financial Operations

Once real money starts moving -- a mentor buying cables, a family dropping cash in a donation jar, a grant check arriving in the mail -- a budget stops being a planning document and becomes a set of habits. The four concepts below are those habits: a place to record every dollar, a process for reporting what got spent, a policy for paying people back, and a way to acknowledge what donors gave.

### Budget Tracking Spreadsheet

**A budget tracking spreadsheet** is a running, dated record of every dollar a club actually receives or spends, kept separate from the budget itself so a leader can compare what was planned against what really happened. The budget from Chapter 30 is a forecast made in advance; the tracking spreadsheet is the ledger of what actually occurred, and the two are meant to be compared side by side, not confused with each other.

A useful tracking spreadsheet needs only a handful of columns: date, description, category (matching a budget line item), amount, whether it's income or an expense, and who handled it. A worked example shows it in action. In September, a club's spreadsheet logs three rows: "9/3, Internet hotspot plan, Recurring Costs, -$20, Expense, Leader"; "9/10, Back-to-school-night donations, Community Support Drive, +$340, Income, Leader"; and "9/18, Cardstock for challenge cards, Recurring Costs, -$18, Expense, Mentor A." At the end of the month, summing the Recurring Costs category shows $38 spent against a $69.17 monthly share of the $830 annual recurring budget -- comfortably on track, a fact the spreadsheet reveals in seconds that would take real digging to reconstruct from a shoebox of receipts.

#### Diagram: Club Financial Operations Cycle

<iframe src="../../sims/club-financial-operations-cycle/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Club Financial Operations Cycle</summary>
Type: workflow
**sim-id:** club-financial-operations-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a single dollar moves through a club's day-to-day financial operations, from being spent or donated through being recorded, reported, reimbursed or receipted, and finally rolled up into the annual review.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a financial event (an expense, a reimbursement request, or a donation), the learner correctly identifies which operational step handles it next.

Steps (flowchart with a decision diamond):
1. Start: "Financial Event Occurs" -- click reveals "A mentor spends money, a family donates, or a grant check arrives -- the trigger for every step that follows."
2. Decision: "Expense or Donation?" -- click reveals "The two paths differ: an expense needs reimbursement, a donation needs a receipt."
3a. Process (if expense): "Mentor Files Expense Report" -- click reveals "Per the Expense Reporting Process: date, amount, category, and an attached receipt or photo of one."
4a. Process: "Checked Against Reimbursement Policy" -- click reveals "Approver confirms the expense is reimbursable, within the submission window, and under any approval threshold."
5a. Process: "Reimbursement Paid" -- click reveals "Payment issued to the mentor; the amount is logged in the Budget Tracking Spreadsheet against its matching category."
3b. Process (if donation): "Donation Logged and Receipted" -- click reveals "Per the Donation Receipt Process: donor name, amount or item, date, and a written acknowledgment provided."
4b. Process: "Recorded in Tracking Spreadsheet" -- click reveals "Income row added, categorized to match the funding source it came from."
6. End: "Rolled Into Annual Budget Review" -- click reveals "Every expense and every donation recorded this way becomes the actual-spending data the Annual Budget Review compares against the original budget."

Interactivity requirement: every node has a Mermaid `click` directive wired to an infobox showing its revealed text; this is not a decorative flowchart.

Color coding: Blue for recording steps, yellow for the decision diamond, green for the reimbursement branch, purple for the donation branch

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram.
</details>

!!! mascot-thinking "One spreadsheet, four different jobs"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice how the spreadsheet is the hub every other habit in this section feeds into -- an expense report, a reimbursement, and a donation receipt all end up as one row in the same ledger. Think of the spreadsheet less like paperwork and more like the single source of truth everything else in this chapter has to agree with.

### Expense Reporting Process

**The expense reporting process** is the standard way a mentor or volunteer tells the club what they spent money on, so the purchase can be verified and added to the tracking spreadsheet -- typically a short form or template capturing the date, amount, category, purpose, and a receipt or photo of one. Without a consistent process, expenses arrive as scattered texts, verbal mentions, and forgotten sticky notes, and some of them never get recorded at all.

A worked example shows why the form matters more than it seems. A mentor buys $35 in USB cables and mentions it to the club leader in passing at pickup time; two weeks later, neither of them remembers the exact amount, and the purchase never makes it into the spreadsheet. After the club adopts a one-page expense report -- date, item, amount, category, receipt attached, submitted within one week -- the same mentor's next purchase, $22 for a replacement soldering iron tip, is filed the same day it happens, with the receipt stapled to the form. The tracking spreadsheet stays accurate because the reporting process makes accuracy the path of least resistance, not something that depends on two people's memory matching up later.

### Reimbursement Policy

**A reimbursement policy** is a written rule set stating what expenses a club will pay a mentor or volunteer back for, how quickly a request must be submitted, what proof is required, and how payment is actually delivered -- removing the guesswork and awkwardness of asking "will I actually get this money back?" every single time. A policy written down once protects both the club's budget and the volunteer who fronted the cash.

A worked example shows the policy at work on both sides of an outcome. One mentor buys $45 in art supplies for a challenge-card project and submits the receipt four days later; the check arrives within the promised two weeks, no questions asked. A second mentor buys a $60 tool without checking the pre-approval threshold and submits the receipt 45 days after the purchase -- past the club's stated deadline -- and the club, following its own written policy consistently, declines the late reimbursement. The second mentor is disappointed but not surprised, because the rule was known in advance and applied the same way it would be to anyone else. The policy both mentors were following looks like this:

| Rule | This Club's Policy |
|---|---|
| Submission window | Within 30 days of purchase |
| Proof required | Receipt or photo of one |
| Pre-approval threshold | Purchases under $50 need none |
| Payment method | Check |
| Turnaround time | Within 2 weeks of a complete submission |

### Donation Receipt Process

**The donation receipt process** is the practice of giving every donor -- whether they gave cash at a table, wrote a check, or contributed an in-kind item -- a written acknowledgment naming the date, the amount or item, and (where applicable) a statement about tax-deductibility, since many donors need that documentation for their own records or their own tax filing. Skipping this step doesn't just risk a donor's goodwill; for donations that flow through a nonprofit fiscal sponsor like Chapter 30's "Friends of the Library" arrangement, a receipt is often what makes the donation tax-deductible for the giver in the first place.

A worked example shows the process closing the loop on the community support drive from Chapter 30. A family drops $50 in the donation jar at the back-to-school-night table where the club raised $340 toward its $300 goal. Because the club's fiscal sponsor can issue tax-deductible receipts, a volunteer records the family's name and $50 amount that same evening and mails a short acknowledgment letter the following week, referencing the sponsor's nonprofit status. The family keeps the letter for their own tax records, and the club's own tracking spreadsheet shows the same $50 as a dated, attributable row -- not just an anonymous lump sum from "the jar."

## Planning Ahead

### Annual Budget Review

Tracking what already happened is only useful if it feeds into planning what happens next -- and that planning starts with the annual review. **An annual budget review** is a scheduled, end-of-year comparison between what a club budgeted and what its tracking spreadsheet shows it actually spent and received, used to correct next year's budget rather than simply repeating last year's numbers unchanged. Skipping this step means a club walks into every new year with a budget that is, at best, an educated guess repeated on faith.

A worked example shows the review paying off directly. At the close of year one, the club's tracking spreadsheet reveals two gaps between what was planned and what actually happened:

| Budget Category | Budgeted | Actual | Difference | Traced To |
|---|---|---|---|---|
| Recurring costs | $830 | $860 | $30 over | Mid-year liability insurance premium increase |
| One-time costs | $1,830 | $1,790 | $40 under | Vendor discount negotiated in Chapter 30 |

Rather than reusing last year's $830 recurring figure, the leader sets next year's recurring budget at $860 to match the new insurance reality, and notes the vendor discount as an ongoing saving to expect again. The review turns two small surprises into two permanent corrections, instead of two repeated surprises.

### Emergency Fund Reserve

**An emergency fund reserve** is money a club deliberately sets aside and does not spend on its regular budget, held specifically to cover an unplanned cost -- a laptop that dies mid-semester, a delayed grant payment, a venue fee that arrives unexpectedly -- without forcing a mid-year fee on families or a scramble for emergency fundraising. It is different from the equipment depreciation reserve described next: a depreciation reserve is saved for a known, expected replacement, while an emergency reserve is saved for the unknown.

!!! mascot-tip "Aim for three months of recurring costs, not a guess"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut for sizing an emergency fund: target roughly three months of your recurring budget, not a round number pulled out of thin air. For the $830-a-year recurring budget in this chapter's running example, that's about $69 a month, so a $200-$210 reserve is a reasonable target -- enough to absorb one bad surprise without derailing the whole year.

A worked example shows the reserve doing its job. A club sets aside $210 -- about three months of its $830 recurring budget -- into a separate reserve line, funded gradually from a small surplus in its first year's community support drive. In month five, a donated laptop fails and needs a $140 repair that isn't in the annual budget anywhere. Because the reserve exists, the leader pays for the repair immediately from reserve funds and replenishes the reserve later from the next grant cycle, instead of either delaying the repair for weeks or asking families to cover the gap.

### Equipment Depreciation Planning

**Equipment depreciation planning** extends the one-time-cost thinking from Chapter 30 into a standing schedule across every piece of equipment a club owns, not just the laptops -- tracking each item's purchase cost, expected useful life, and the annual amount that should be set aside so its eventual replacement never arrives as a surprise. A depreciation schedule turns "the equipment will wear out eventually" into a specific number budgeted every single year.

A worked example builds a small schedule for the club's existing equipment:

| Item | Purchase Cost | Useful Life | Annual Reserve Needed |
|---|---|---|---|
| 6 Chromebooks | $1,500 | 4 years | $375 |
| 10 Moving Rainbow kits | $150 | 3 years | $50 |
| 3 robot kits | $60 | 3 years | $20 |
| Storage cart | $120 | 6 years | $20 |

Summed across every item, the club needs to set aside $465 a year -- not just the $375 for laptops that Chapter 30's example first identified -- to keep every piece of equipment replaceable on schedule rather than facing several simultaneous replacement costs the year everything happens to wear out at once.

## Fee Models

### Membership Fee Model

Chapter 28 made the case for a no-fee club: even a modest fee filters out more families than the dollar amount alone would suggest, because it signals who an invitation is really for. That case still stands, but not every club can fully fund itself through grants and donations alone. **The membership fee model** charges every family the same flat amount -- a monthly due, a per-session fee, or a flat annual charge -- regardless of household income, in exchange for club participation. It is the most administratively simple fee structure, and also the one Chapter 28 warns carries the highest risk of quietly excluding the families a no-fee policy is designed to reach.

A worked example shows both sides of that simplicity. A club sets a flat $10-per-month membership due, collected from 10 participating families across a nine-month school year, bringing in $900 -- comfortably covering the $830 recurring budget from Chapter 30 with a small cushion left over. The arithmetic works cleanly. But a follow-up conversation with two families who never enrolled reveals that $10 a month, small as it sounds to the club leader, was simply out of reach some months -- exactly the exclusion effect Chapter 28 described, reappearing here in a slightly different form.

### Sliding Scale Fee Model

**A sliding scale fee model** lets each family select from a range of fee amounts -- for example $0, $5, $15, or $25 a month -- based on their own sense of what they can afford, rather than charging every family the same flat rate. It is the middle path between Chapter 28's no-fee model and a flat membership fee: families who can pay more voluntarily do, subsidizing families who pay little or nothing, without anyone having to prove hardship to qualify.

!!! mascot-warning "Never ask a family to prove they can't pay"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this trap: requiring income verification or paperwork to unlock the $0 tier defeats the entire purpose of a sliding scale, recreating the exact stigma Chapter 28 warned a fee creates. Fix it by making the scale self-selected on the honor system -- a family picks their own tier from a simple form, no proof required, no questions asked.

A worked example shows the model in practice. The same club that considered a flat $10 fee instead offers a self-selected sliding scale from $0 to $25 a month across the same 10 families. Three families select $0, four select $10, two select $15, and one selects $25 -- averaging $8.50 per family per month, or roughly $765 across the nine-month year, somewhat less than the flat fee's $900 but without excluding the three families who selected $0. The gap between $765 and the $830 recurring budget is small enough to close with the community support drive from Chapter 30, and no family had to disclose income or justify a reduced rate to participate.

The MicroSim below lets you build a family mix like this one yourself and compare what a flat membership fee versus a sliding scale actually collects.

#### Diagram: Membership Fee Model Comparison

<iframe src="../../sims/membership-fee-model-comparison/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Membership Fee Model Comparison</summary>
Type: microsim
**sim-id:** membership-fee-model-comparison<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a club leader build a family mix and compare the total annual revenue and family reach of a flat membership fee against a self-selected sliding scale fee.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a number of families and a distribution of self-selected fee tiers, the learner calculates and compares total annual revenue under a flat membership fee model versus a sliding scale fee model.

Instructional Rationale: A parameter-exploration pattern fits this Apply-level objective because the learner needs to adjust the number of families at each fee tier and immediately see how total revenue and the number of $0-tier families shift, rather than watch one fixed scenario play out.

Canvas layout:
- Left (60%): two side-by-side vertical bars -- "Flat Fee Revenue" and "Sliding Scale Revenue" -- each with a "months per year" multiplier applied, plus a small readout of how many families pay $0
- Right (40%): sliders for the flat fee amount and for how many families sit at each sliding-scale tier ($0, $5, $10, $15, $25), plus a total-families readout

Interactive controls:
- Slider: Flat monthly fee amount ($0-$30, default $10)
- Slider (x5): Number of families at each sliding-scale tier ($0, $5, $10, $15, $25), each 0-15, defaulting to 3, 0, 4, 2, 1
- Input (number): Months per year fees are collected, default 9
- Button: "Load Sample Family Mix" -- prefills the exact 10-family worked example above
- Button: "Reset"

Behavior:
- Total Families = sum of the five tier sliders
- Flat Fee Revenue = Flat monthly fee x Total Families x Months per year
- Sliding Scale Revenue = sum over each tier of (tier amount x families at that tier) x Months per year
- Both bars and the $0-tier family count recalculate immediately whenever any slider changes

Default parameters: loads with the sample mix from the worked example (10 families: 3 at $0, 4 at $10, 2 at $15, 1 at $25; flat fee $10; 9 months) yielding $900 flat versus $765 sliding scale

Implementation notes: p5.js canvas with createSlider and createButton controls parented to the sketch's own control div; recompute both totals every draw() call from current slider values so the bars stay perfectly in sync with the controls.
</details>

## Institutional Funding Partnerships

Chapter 30's funding channels -- grants, corporate sponsors, crowdfunding, community drives -- mostly run through relationships a club builds and rebuilds itself, one funder or one event at a time. The four partnerships below work differently: each connects a club to an existing institution already serving the same families, one that can fund a club year after year as a standing part of its own mission rather than a favor a club has to keep re-earning from scratch.

### Community Foundation Grant

**A community foundation grant** comes from a community foundation -- a nonprofit that pools charitable donations from many local donors and re-grants that money to local causes, often across multiple years and often through professional program staff rather than a single funder's personal preference. Compared to the smaller, one-time microgrants in Chapter 30, a community foundation grant is more likely to renew automatically if a club meets its reporting requirements. A worked example: the county's community foundation awards a coding club a two-year grant of $1,200 per year, specifically earmarked for youth STEM programming, on the condition that the club submits a brief annual report showing attendance and outcomes -- exactly the kind of predictable, multi-year support the Grant Application Tracking habit from Chapter 30 is built to protect.

### School District Funding

**School district funding** is financial or in-kind support that comes directly from the public school district hosting or partnering with a club -- free classroom space, waived custodial fees, existing wifi and network access, or in some cases a small district STEM or enrichment grant -- distinct from a community foundation because the district itself is the funding and hosting institution, not an outside grantmaker. A worked example: a district agrees to waive its usual $150-per-session facility rental fee for a club that meets in a school classroom after hours, and includes the room in its existing wifi and custodial service at no additional cost, worth roughly $2,000 a year in support the club would otherwise have had to raise in cash.

The two institutional partnerships above differ mainly in how long they last once secured:

| Aspect | Community Foundation Grant | School District Funding |
|---|---|---|
| Source of support | An outside charitable foundation | The hosting school district itself |
| Typical form | Multi-year cash grant | In-kind space, wifi, custodial service |
| Renews when | A brief annual report is filed | The hosting relationship continues |
| This chapter's example | $1,200/year for 2 years | ~$2,000/year in-kind |

### PTA Partnership Funding

**PTA partnership funding** is money a school's Parent-Teacher Association -- or an equivalent parent organization -- chooses to allocate from its own fundraising directly to the coding club, treating it as one of several programs the PTA supports rather than a separate funder a club has to court independently. Because PTA leadership usually changes yearly, this funding relationship needs to be renewed with each new PTA board, unlike a multi-year community foundation grant. A worked example: after a club leader presents briefly at a PTA meeting, the PTA votes to allocate $400 from its fall fundraiser proceeds directly to the coding club's one-time equipment line -- funding gained without running a separate campaign, though the leader notes on the calendar to re-pitch the incoming PTA board the following fall, since the current board's vote does not automatically carry over.

### Library Funding Partnership

**A library funding partnership** is an ongoing relationship with the hosting library itself -- distinct from the one-time fiscal-sponsorship role a "Friends of the Library" group played in Chapter 30 -- in which the library allocates part of its own programming budget, provides free meeting space, or cross-promotes the club through its existing newsletter and event calendar, treating the coding club as part of its own youth-services mission. A worked example: the library that hosts the club allocates $300 a year from its teen programming budget directly to club supplies, and provides its meeting room at no charge -- a space that would otherwise rent for roughly $600 a year elsewhere -- so that $900 combined in cash and in-kind support covers more than the club's entire recurring budget.

The map below shows how each institutional partnership addresses a different piece of a club's ongoing funding need, since a club rarely relies on just one.

#### Diagram: Institutional Funding Partnership Map

<iframe src="../../sims/institutional-funding-partnership-map/main.html" width="100%" height="540px" scrolling="no"></iframe>

<details markdown="1">
<summary>Institutional Funding Partnership Map</summary>
Type: graph-model
**sim-id:** institutional-funding-partnership-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Let a leader see, in one view, which institutional partnership from this chapter best addresses which kind of ongoing funding need, distinct from Chapter 30's one-time channels.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a specific ongoing club funding need, the learner examines which institutional partnership from this chapter best addresses it.

Node types:
1. Need nodes (4, amber circles, left column): "Multi-Year Recurring Cash Support," "Free or Discounted Meeting Space," "Renewable Annual Cash Allocation," "Cross-Promotion to Local Families"
2. Partner nodes (4, sky-blue squares, right column): "Community Foundation Grant," "School District Funding," "PTA Partnership Funding," "Library Funding Partnership"

Edges (ADDRESSED_BY, directional arrows from need to partner):
- Multi-Year Recurring Cash Support -> Community Foundation Grant
- Free or Discounted Meeting Space -> School District Funding
- Free or Discounted Meeting Space -> Library Funding Partnership
- Renewable Annual Cash Allocation -> PTA Partnership Funding
- Cross-Promotion to Local Families -> Library Funding Partnership

Sample data note: "Free or Discounted Meeting Space" and "Library Funding Partnership" each have two connections, the only need and the only partner appearing twice -- surfacing that space support can come from either the district or the library, and that a library relationship alone can address more than one kind of need.

Layout: Hierarchical left-to-right, needs in the left column, partners in the right column

Interactive features:
- Hover a need node: show a one-line plain-language description of the funding need
- Click a need node: highlight all connected partner nodes and dim the rest; open a side-panel infobox with the need's definition and its worked-example figure from this chapter
- Click a partner node: highlight every need it addresses
- Zoom: mouse wheel; Pan: click-and-drag background

Visual styling: amber circles for needs, sky-blue squares for partners, constant arrow thickness, label text directly on each node

Legend: need color/shape versus partner color/shape, plus a note that arrow direction always reads "need is addressed by partner"

Implementation: vis-network JavaScript library rendering a small fixed dataset (4 need nodes, 4 partner nodes, 5 edges) defined in a data.json file; canvas width is responsive, height fixed to match the iframe.
</details>

!!! mascot-neutral "Institutional partners renew differently than grants do"
    ![Circuit in a neutral pose](../../img/mascot/neutral.png){ class="mascot-admonition-img" }
    Worth noting: a community foundation grant and a school district relationship tend to survive a change in your own club's leadership, while a PTA partnership resets every time that board turns over. Track which kind of relationship each partner is, so you know which ones need a fresh pitch every year.

## Overlap, Agreements, and Evaluating Every Ask

The five concepts below round out this chapter -- shorter entries covering how a coding club shares resources with neighboring programs, and the lightweight tools that make any funding ask, big or small, easier to propose and easier to evaluate.

### Robotics Club Overlap Funding

**Robotics club overlap funding** is money or equipment cost split between a coding club and a school's robotics club when the two programs share students, mentors, or hardware, recognizing that the overlap is common enough to plan for rather than treat as a scheduling accident. A worked example: a coding club and the school's robotics team share the same 3D printer, purchased for $250 and used by both groups on different days, so the two leaders split it $125 each from their separate budgets, splitting maintenance costs the same way going forward. A district or PTA that funds STEM broadly may prefer one combined request over two competing ones.

### Shared Resource Agreement

**A shared resource agreement** is a short written understanding -- who stores an item, who schedules its use, who pays for repairs -- covering equipment or space split between the coding club and another program, preventing the kind of ambiguity that turns a friendly resource-sharing arrangement into a source of conflict later. A worked example: the coding club and robotics team write a half-page agreement stating the shared 3D printer lives in the robotics team's storage closet, is scheduled through a shared calendar, and that repair costs are split evenly regardless of which club was using it when it broke, so when a nozzle needs replacing six months later, both leaders already know the cost is split without needing a new conversation.

Since both concepts above turn a single shared item into an ongoing relationship, it helps to see how their responsibilities differ side by side:

| Aspect | Robotics Club Overlap Funding | Shared Resource Agreement |
|---|---|---|
| What it settles | Who pays for the item in the first place | Who stores, schedules, and repairs it afterward |
| Timing | A one-time or annual split of cost | An ongoing understanding, revisited only if it breaks down |
| This chapter's example | $250 printer split $125/$125 | Storage, calendar, and repair-cost terms for that same printer |

### Partnership Proposal Template

**A partnership proposal template** is a reusable one-page document -- overview, specific ask, benefit to the partner, and recognition offered in return -- adapted for pitching a school district, a PTA, a library, or any other institutional partner, playing the same role for institutional partnerships that Chapter 30's grant proposal structure plays for grants. A worked example: a leader drafts one template with four sections, then reuses it three times in one semester -- once for the PTA ask described earlier in this chapter, once for the library partnership, and once for a district space request -- changing only the specific numbers and the "benefit to partner" section each time, instead of writing three proposals from a blank page.

### Sponsor Recognition Plan

**A sponsor recognition plan** is a written, consistent policy for what recognition each funding partner receives -- logo placement, a mention at an event, a size or prominence tied roughly to the size of their contribution -- so that recognition feels fair across a $300 library grant and a $2,000 in-kind district partnership rather than negotiated case by case. A worked example builds a simple three-tier plan, applied to the same partners introduced earlier in this chapter:

| Recognition Tier | Contribution Level | What The Partner Receives | This Chapter's Example |
|---|---|---|---|
| Tier 1 | Any contribution | Thanked by name in a printed program | Library's $300 allocation |
| Tier 2 | Over $500 | Tier 1, plus a logo on the club's flyer | PTA's $400 gift (just under threshold; logo optional at leader's discretion) |
| Tier 3 | Over $1,000, or hosting rent-free | Tier 2, plus a named mention at the annual showcase night | School district's ~$2,000 in-kind space and wifi |

Because the tiers are set in advance, the leader never has to improvise a recognition decision on the spot when a new partner's contribution comes in.

### Cost Benefit Analysis

**A cost benefit analysis** weighs the volunteer time and effort a funding opportunity will take against the money or support it is realistically likely to bring in, before a leader commits to pursuing it -- a quick gut-check that keeps a small club from spending fifteen unpaid hours chasing a $150 grant when that same time could close a bigger gap elsewhere. A worked example: a leader is deciding between writing a competitive $150 microgrant application, estimated at eight volunteer hours, or instead pitching the library for its $300 teen programming allocation, estimated at one thirty-minute conversation -- the comparison favors the library ask by a wide margin on time invested per dollar raised, so the leader pursues that conversation first and saves the microgrant application for a future semester with volunteer hours to spare.

## Chapter Summary

Keeping a budget honest after the money is raised means building habits, not just having good intentions: a budget tracking spreadsheet as the single source of truth, a consistent expense reporting process, a written reimbursement policy, and a donation receipt process that closes the loop with every giver -- all feeding into an annual budget review that corrects next year's numbers instead of repeating last year's guesses. An emergency fund reserve and an equipment depreciation schedule turn "something unexpected will eventually happen" into a number already budgeted for. A sliding scale fee model offers a middle path between Chapter 28's no-fee ideal and a flat membership due, when a club genuinely can't cover everything through grants and donations alone. And the institutional partnerships in this chapter -- a community foundation, a school district, a PTA, a library -- along with shared-resource agreements, a reusable partnership proposal template, a fair sponsor recognition plan, and a quick cost-benefit check before chasing any ask, turn a first year of scrappy fundraising into a funding relationship a club can count on for years, not just semesters.

!!! mascot-celebration "You just built a club that can outlast its own first budget"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just connected expense tracking, annual review, and institutional partnerships into one system -- the exact combination that keeps a no-fee club funded in year five the same way it was funded in year one. That's what makes a coding club's finances sustainable, not just survivable.
