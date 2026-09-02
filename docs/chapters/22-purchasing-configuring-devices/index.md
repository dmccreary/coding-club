---
title: Purchasing and Configuring Club Devices
description: Covers laptop purchasing decisions across Chromebook, Windows, and macOS, platform-specific configuration and management, student accounts, physical device lifecycle management, youth safety software and policy, and basic club Wi-Fi setup.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 06:29:31
metadata:
  ibook:
    version: 1.10
---

# Purchasing and Configuring Club Devices

## Summary

This chapter covers purchasing decisions for club laptops and Chromebooks, then configuring student accounts across Chromebook, Windows, and macOS. It addresses the youth-specific concerns every club must plan for: content filtering, parental controls, and password management for kids. You will be able to select and configure devices appropriate for your club's age range.

## Concepts Covered

This chapter covers the following 22 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Laptop Purchasing | 1241 |
| Laptop Configuration | 43 |
| Chromebook Management | 42 |
| Windows Device Management | 41 |
| MacOS Device Management | 40 |
| Student Login Account | 39 |
| Shared Device Account | 38 |
| Individual Device Account | 37 |
| Device Imaging Process | 36 |
| Device Inventory Tracking | 35 |
| Device Charging Cart | 34 |
| Device Labeling System | 33 |
| Device Loaner Agreement | 32 |
| Screen Time Management | 31 |
| Content Filtering Software | 30 |
| Parental Control Software | 29 |
| Device Security Policy | 28 |
| Password Management For Kids | 27 |
| Device Repair Basics | 26 |
| Device Cleaning Routine | 25 |
| Wifi Network Setup | 24 |
| Guest Wifi Access | 23 |

## Prerequisites

This chapter builds on concepts from:

- [3. Writing Your Club Charter and Safety Policies](../03-club-charter-and-safety/index.md)

---

Chapters 19 through 21 filled a shelf with kits -- Moving Rainbow boards, robots, sensors, microphones -- but every one of those kits eventually plugs into, or is programmed from, a laptop. Before this chapter, this book quietly assumed a laptop was already sitting on the table. This chapter fills that gap: which laptop to buy, how to set it up so a room full of students can actually use it, how to keep the physical fleet organized as it ages, how to keep young students safe on it, and how to get it onto the club's network in the first place.

!!! mascot-welcome "The machine every other chapter assumes is already there"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- every Scratch project, every MicroPython script, and every robot kit in this book eventually needs a laptop to run from, and this chapter is where that laptop gets chosen, configured, and kept running for years instead of months. By the end, you'll be able to pick a device platform that fits your club's budget and your kits' needs, and set up the accounts, safety software, and network access that let students use it responsibly.

## Choosing the Right Laptop Platform

### Laptop Purchasing

**Laptop purchasing** is the decision a club leader makes, usually once per grant cycle, about which computer platform to buy for student use -- weighing purchase price against how easily one person can manage many units, how well the hardware survives daily handling by students, and whether the machine can actually run the club's project kits. Unlike almost every other concept in this book, laptop purchasing has no prerequisite of its own -- a brand-new club can face this decision on day one, before a single session has run, which is exactly why getting the framing right here pays off for years afterward.

Choosing a laptop platform for a club is a lot like choosing vehicles for a small delivery business. A fleet of identical, easy-to-fix compact cars gets the most vehicles on the road per dollar, and any one mechanic can service all of them the same way. A smaller number of pickup trucks costs more per vehicle and takes more individual attention, but each one can haul cargo the compact cars simply can't carry. Chromebooks are the compact cars of a coding club: cheap, centrally managed, and quick to replace. Windows and macOS laptops are the pickup trucks: pricier and more work to keep running individually, but able to carry cargo a Chromebook can't -- full USB-driver access for flashing MicroPython onto a Raspberry Pi Pico, running the Arduino IDE, or driving a robot kit's firmware tool.

That cargo difference is the whole tradeoff, and it is easiest to see side by side against the exact project kits this book has already built.

| Platform | Typical Price Range | Manageability | Durability | Compatibility With Club Kits |
|---|---|---|---|---|
| Chromebook | $200-$350 | Enroll an entire fleet from one cloud console in minutes | Rugged, spill-resistant models are common and cheap to replace | Runs Scratch and web-based Python well; MicroPython flashing and USB-serial kit tools need Linux (developer) mode enabled first |
| Windows Laptop | $350-$600 | Managed one at a time, or with paid fleet-management tools | Durability varies widely by price point and model | Full native support for MicroPython (Thonny), the Arduino IDE, and every robot kit's firmware tool |
| macOS Laptop | $800-$1,200+ | Managed individually; fewer low-cost bulk-enrollment options for a small club | Durable hardware, but the highest replacement cost if one is damaged | Same full USB-tool support as Windows, with occasional driver quirks on older USB-serial chips |

!!! mascot-thinking "Compare fleets, not individual laptops"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the table isn't really comparing three laptops -- it's comparing three different ways of running your whole fleet for the next three years. A platform that costs less per unit but eats a mentor's evening every time one machine misbehaves can end up more expensive than the sticker price suggests, the same lesson Chapter 21 applied to kits.

A worked example turns the table into arithmetic a club leader can actually run against a real grant. Suppose a new club receives a $3,000 startup grant and plans to serve twelve students at a session. An all-Chromebook fleet at $250 apiece buys twelve devices exactly -- one per student, with nothing left over. An all-Windows fleet at $450 apiece buys only six, forcing students to share two-to-a-machine even at this book's recommended 3:1 student-to-mentor ratio. A mixed fleet -- ten Chromebooks at $250 ($2,500) plus one Windows laptop at $450 ($4,950 total, over budget) shows why the arithmetic has to be checked before a plan is announced to a room full of excited volunteers; dropping to nine Chromebooks ($2,250) plus one Windows laptop ($450) fits the $3,000 budget with $300 left over for a charging cart, discussed later in this chapter.

<iframe src="../../sims/grant-budget-laptop-calculator/main.html" width="100%" height="502px" scrolling="no"></iframe>

#### Diagram: Grant Budget Laptop Calculator

<details markdown="1">
<summary>Grant Budget Laptop Calculator</summary>
Type: microsim
**sim-id:** grant-budget-laptop-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/economics-course/tree/main/docs/sims/budget-builder

Purpose: Let a club leader explore how a grant budget converts into a device count under each platform, and see the leftover-budget and per-student-coverage consequences of that choice before committing real money.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a grant amount and a chosen device platform, the learner calculates how many laptops the grant can purchase, how much budget remains, and how many students the resulting fleet can serve one-to-one.

Instructional Rationale: A parameter-exploration pattern fits this Apply-level objective because the learner needs to test several budget and platform combinations and immediately see the arithmetic consequences, rather than watch a single pre-computed scenario play out.

Canvas layout:
- Left (450px): a simple bar showing devices purchased vs. students still needing a device
- Right (150px): control panel

Interactive controls:
- Slider: Grant amount, $500-$10,000, step $250, default $3,000
- Dropdown: Platform (Chromebook $250, Windows $450, macOS $950, Custom price)
- Input (number): Custom per-unit price, enabled only when "Custom" is selected
- Input (number): Number of students in the club, default 12
- Button: "Reset to Defaults"

Behavior:
- Devices purchasable = floor(grant amount / unit price), recalculated live as any control changes
- Remaining budget = grant amount - (devices purchasable x unit price), displayed in dollars
- Coverage = "X of Y students have their own device" compared against the student-count input
- Bar chart updates immediately; no animation delay, since this is a calculation tool, not a simulation

Default parameters: $3,000 grant, Chromebook selected, 12 students -- resulting in 12 devices, $0 remaining, "12 of 12 students covered"

Implementation notes: p5.js canvas with createSlider, createSelect, and createInput controls parented to the sketch's own control div; recompute on every draw() call rather than only on change events, since inputs may be adjusted with arrow keys.
</details>

Consider how this plays out for an actual club leader who has already committed to teaching Scratch to beginners and running the Moving Rainbow MicroPython kit from Chapter 19. An all-Chromebook fleet handles the Scratch sessions beautifully but hits a wall the first time a student needs to flash MicroPython onto a Pico, since that requires enabling Chromebook developer mode to expose full USB access -- a deeper technical step covered in the companion [STEM Classroom Administration](../../stem-classroom-admin/) textbook. Rather than abandoning Chromebooks entirely, many club leaders land on the mixed fleet from the worked example above: a majority of Chromebooks for daily Scratch and web-based work, plus one or two Windows or macOS laptops permanently reserved as the "flashing station" any small group can walk up to when a physical-computing project needs real USB-serial access. No platform is the single right answer -- the right fleet is the one that matches the specific mix of kits a club actually plans to run.

## Configuring and Managing Your Fleet

### Laptop Configuration

**Laptop configuration** is the one-time setup every laptop goes through after purchase and before its first student session: installing required software, connecting the machine to the club's management console, and applying the security and account settings the rest of this chapter describes -- turning a laptop as it arrives from a vendor into a laptop ready for a classroom. Skipping or rushing this step means each of those settings gets applied piecemeal, mid-session, in front of students, instead of once, calmly, before anyone is watching.

A worked example shows the cost of skipping it: a club leader hands out six brand-new Windows laptops on day one without configuring them first, only to discover mid-session that none of them have the Arduino IDE installed and three still have factory-default admin accounts logged in. The same six laptops, configured the week before over a quiet afternoon, would have had software, accounts, and security settings ready before a single student touched the keyboard.

A typical configuration pass, run once per laptop before it ever meets a student, covers:

- Installing required coding software, such as the Arduino IDE, Thonny, or a Scratch shortcut
- Enrolling the device in its platform's management console
- Applying baseline security settings
- Confirming the device connects to the club's network

### Chromebook Management

**Chromebook management** is the ongoing administration of a Chromebook fleet through a single cloud-based console, where one login lets a mentor push software policies, reset a forgotten password, or wipe a lost device to every enrolled machine at once, without touching each laptop individually. This centralized model is exactly what the earlier comparison table meant by "enroll an entire fleet in minutes" -- the console, not the individual device, is where most day-to-day decisions get made.

A worked example shows the payoff: a club with twenty Chromebooks needs to block a distracting game website discovered mid-semester. Through the management console, one mentor applies the block once, and it takes effect on all twenty devices within minutes -- compared to the alternative of walking around the room configuring browser settings on each machine by hand.

### Windows Device Management

**Windows device management** covers the tools a club uses to keep a Windows laptop fleet consistent -- ranging from a simple shared configuration checklist run by hand on each machine, up to a paid device-management service for clubs with a dozen or more units -- since Windows has no single free, built-in fleet console the way Chromebooks do. Because it is managed one machine at a time by default, a Windows fleet's manageability depends heavily on how disciplined a club is about following the same checklist every time.

A worked example shows the discipline paying off: a club maintains a written one-page checklist -- disable auto-updates during session hours, install the Arduino IDE and Thonny, set the same desktop background naming each laptop by ID number -- and runs it on every new Windows laptop before it enters service. Two mentors configuring laptops on different weekends still produce identically set-up machines, because the checklist, not memory, drives the process.

That kind of written checklist is what makes one-at-a-time management tolerable at a small club's scale:

- Disable automatic updates during session hours, so a mid-session reboot never interrupts a student
- Confirm the same coding software is installed as on every other laptop in the fleet
- Apply the same baseline security settings by hand
- Record the laptop's ID number before it enters service

### MacOS Device Management

**MacOS device management** administers a fleet of Apple laptops individually or through a paid mobile-device-management (MDM) tool, applying the same kinds of software installation and security settings as Windows management but through Apple's own configuration tools -- a detail worth knowing because a club that owns even one or two Mac laptops donated by a local company needs a management approach distinct from its Chromebook or Windows machines.

A worked example shows why the distinction matters: a club receives a single donated MacBook alongside its usual Chromebook fleet. Attempting to apply the Chromebook management console's policies to it does nothing, since the MacBook was never enrolled in that system; a mentor instead configures it by hand, once, using the same checklist approach Windows management uses, since a single Mac rarely justifies its own paid MDM subscription.

Now that a new laptop's configuration step and each platform's ongoing management approach have been introduced separately, the diagram below traces one laptop from the moment it arrives through whichever management path matches its platform.

<iframe src="../../sims/platform-management-workflow/main.html" width="100%" height="682px" scrolling="no"></iframe>

#### Diagram: Platform Management Workflow

<details markdown="1">
<summary>Platform Management Workflow</summary>
Type: workflow
**sim-id:** platform-management-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how one newly arrived laptop moves through initial configuration and then splits into one of three platform-specific management paths, so a mentor can see where their own fleet's laptops fit.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a newly purchased laptop's platform, the learner differentiates the configuration and ongoing management path it will follow among Chromebook, Windows, and macOS management.

Steps (flowchart with a decision diamond):
1. Start: "New Laptop Arrives" -- click reveals "A laptop as it arrives from a vendor, before any club-specific setup has been applied."
2. Process: "Laptop Configuration" -- click reveals the Laptop Configuration definition above.
3. Decision: "Which Platform?" -- click reveals "The laptop's operating system determines which management path and console it will use for the rest of its service life."
4a. Branch "Chromebook" leads to "Chromebook Management" -- click reveals the Chromebook Management definition above.
4b. Branch "Windows" leads to "Windows Device Management" -- click reveals the Windows Device Management definition above.
4c. Branch "macOS" leads to "MacOS Device Management" -- click reveals the MacOS Device Management definition above.
5. All three branches converge on End: "Ready for Student Login" -- click reveals "Once its platform-specific management is in place, the laptop is ready to receive the student account setup covered next in this chapter."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Gray for the start node, amber for the shared configuration step, purple for the decision diamond, blue/green/orange for the Chromebook/Windows/macOS branches respectively, gray for the converged end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
</details>

## Setting Up Student Accounts

### Student Login Account

**A student login account** is the credential a student uses to sign into a club laptop and access their own saved work, separate from any account a mentor or the club's administrator uses to manage the device itself. Every laptop needs at least one working student login before a student can do anything more than stare at a lock screen, which makes this the very first account decision a club makes once a platform is chosen and configured.

A worked example shows the decision in miniature: a club sets up ten Chromebooks for its first session and must decide, for each one, whether to create one shared login all students rotate through or a separate login per student -- exactly the choice the next two concepts unpack in detail.

### Shared Device Account

**A shared device account** is a single student login used by many different students across different sessions, distinguishing itself from a personal account by holding no individual's saved work permanently -- any files a student wants to keep must be moved to a class folder or cloud drive before the next student sits down. Shared accounts are the simpler option to set up, since a club only creates as many logins as it has laptops, not as many as it has students.

A worked example shows both the convenience and the catch: a club with eight laptops and thirty students sets up eight shared "Station 1" through "Station 8" logins. Any student can sit at any open station immediately, with no wait for "their" laptop -- but a student who saved a half-finished project locally at the end of last week's session finds it gone, because the next student to use that station's account saw a clean desktop, not last week's leftover file.

### Individual Device Account

**An individual device account** is a personal student login tied to one specific student, preserving that student's saved files, browser bookmarks, and settings between sessions on whatever laptop they happen to sit down at, provided the account itself -- not just the local machine -- carries that data. This trades the shared account's simplicity for continuity: a student's work survives from one week to the next without anyone remembering to copy files by hand.

A worked example shows the tradeoff resolved by ratio: a club running at the recommended 3:1 student-to-mentor ratio with twelve regular, returning students and twelve laptops sets up twelve individual accounts, one per student, since the fleet size matches the enrolled roster closely enough that "which laptop is mine" barely matters and continuity is worth the extra setup. A drop-in club with forty rotating walk-in students and eight laptops instead uses shared accounts, since no single laptop could realistically stay "assigned" to any one of forty different students.

The table below puts both account types side by side for a club leader deciding between them.

| Account Type | Saved Work Persists? | Logins Needed | Best For |
|---|---|---|---|
| Shared Device Account | No -- must be moved to a class or cloud folder before the next student | One per laptop | Drop-in clubs where students rarely sit at the same laptop twice |
| Individual Device Account | Yes -- follows the student across sessions | One per enrolled student | Clubs with a stable, returning roster close to the size of the fleet |

## Managing Devices Through Their Physical Life

### Device Imaging Process

**A device imaging process** copies one fully configured, tested laptop's entire software setup -- operating system settings, installed applications, and account configuration -- onto every other laptop of the same model in one batch operation, rather than repeating the manual configuration checklist by hand on each unit. Imaging turns "configure one laptop correctly" into "configure every laptop correctly," which matters enormously the moment a fleet grows past two or three machines.

A worked example shows the time saved: a club leader spends forty-five minutes manually configuring one Windows laptop exactly right -- software installed, accounts created, security settings applied -- then uses an imaging tool to copy that exact setup onto nine identical laptops in about twenty minutes total, instead of spending another six and a half hours repeating the forty-five-minute process by hand nine more times.

!!! mascot-encourage "Imaging sounds intimidating -- most club leaders never need the advanced version"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If "imaging" conjures up images of enterprise IT departments and server rooms, that reaction is completely normal -- and also unnecessary here. A small club fleet needs only the simplest version: get one laptop exactly right, then use the platform's built-in cloning or "set up a new device from this one" tool to copy it, one weekend afternoon, before students ever touch the machines.

### Device Inventory Tracking

**Device inventory tracking** is the running, written record of every laptop a club owns: its ID number, platform, purchase date, and current status -- in service, loaned out, or in repair -- kept in one place so a club leader can answer "how many working laptops do we actually have right now?" without physically counting the shelf. Without it, a club's actual working fleet size is only ever a guess, which makes planning a session for a specific number of students unreliable.

A worked example shows the record catching a problem early: a spreadsheet-based inventory shows fourteen laptops total, but only eleven marked "in service" -- two flagged "in repair" and one "loaned out" past its due date. Seeing that gap a week before a big recruitment event, rather than discovering it the night before, gives the club leader time to either speed up the repair or borrow a replacement.

### Device Labeling System

**A device labeling system** physically marks every laptop with a visible, unique ID number matching its entry in the inventory tracking record, using a printed sticker or engraved label placed somewhere consistent, such as the lid or the palm rest, so any laptop can be identified at a glance without opening it up or logging into it. Without a labeling system, inventory tracking's written record and the physical laptops it describes can drift apart silently -- the spreadsheet says "Laptop 7 is in repair" while nothing on the actual shelf says which one is Laptop 7.

A worked example shows a label closing that gap during a return: a student hands back a Windows laptop after a two-week loan, and the mentor glances at the sticker on its lid reading "WIN-04" to instantly find and update the matching row in the inventory spreadsheet, instead of guessing which of six similar-looking Windows laptops just came back.

!!! mascot-tip "Label and inventory a laptop on the same day it's imaged"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: do the imaging, labeling, and inventory entry for a new laptop all in one sitting, the same afternoon it arrives, rather than as three separate tasks spread across different weeks. A laptop that sits configured-but-unlabeled for even a few days is exactly the kind of laptop that gets misplaced in the mix-up of its own success.

### Device Charging Cart

**A device charging cart** is a lockable, wheeled cabinet with built-in power outlets or a charging hub that stores and charges an entire laptop fleet overnight between sessions, sized to hold every laptop the club owns plus a little room to grow. A cart sized exactly to today's fleet count leaves no room for the very grant-funded laptops discussed earlier in this chapter, forcing an awkward second cart purchase within the same year.

A worked example shows the sizing decision in practice: a club currently owns twelve laptops and buys a 16-slot charging cart instead of the exact-fit 12-slot model, anticipating the four additional laptops a pending grant application would add. When that grant arrives six months later, the new laptops slide into the existing cart's four empty slots instead of triggering an unplanned second purchase.

### Device Loaner Agreement

**A device loaner agreement** is a signed form a student or family completes before a laptop leaves club premises, stating who is responsible for the device, what happens if it is lost or damaged, and when it must be returned -- a heavier layer of accountability than Chapter 21's informal kit sign-out log, appropriate to a laptop's much higher replacement cost. Where a $12 microphone kit can be tracked with a simple sign-out sheet, a $400 laptop leaving the building overnight or over a school break warrants an actual signature and a stated understanding of the family's responsibility.

A worked example shows the form doing its job: a student wants to keep practicing MicroPython over a two-week school break. The family signs a loaner agreement listing the laptop's ID number, a due-back date, and a plain statement that accidental damage will be assessed case by case rather than automatically billed -- language that protects both the club's asset and the family's trust in borrowing it.

At minimum, a device loaner agreement should state:

- Who is responsible for the device while it is off club premises
- The laptop's ID number and platform, matching its inventory record
- The date it must be returned
- What happens, in plain language, if it is lost, stolen, or damaged

### Device Repair Basics

**Device repair basics** covers the small set of hardware fixes a trained mentor can safely attempt without special tools or manufacturer support -- reseating a loose battery connection, clearing debris from under a sticking key, or tightening a loose hinge screw -- clearly bounded against the damage that should instead go to a repair shop or a manufacturer's warranty claim, such as a cracked screen, a swollen battery, or any liquid damage. Attempting a repair beyond that boundary risks turning a covered warranty repair into a voided one.

A worked example shows the boundary in action: a laptop's spacebar sticks intermittently. A mentor removes the keycap, clears out a small clump of debris underneath, and reseats it -- a basic repair well within bounds. A different laptop arrives with a visibly cracked screen after being dropped; rather than attempting anything, the mentor logs it in the inventory as "in repair" and sends it to the manufacturer or a professional repair shop, since screen replacement sits outside basic repair and risks further damage or a voided warranty if attempted by hand.

| Mentor Can Safely Try | Send to a Repair Shop or Warranty Claim Instead |
|---|---|
| Reseating a loose battery connection | A cracked or shattered screen |
| Clearing debris from under a sticking key | A swollen or leaking battery |
| Tightening a loose hinge screw | Any liquid damage |

### Device Cleaning Routine

**A device cleaning routine** is a regular, scheduled physical cleaning of each laptop -- wiping the screen and keyboard with an appropriate cleaner, clearing dust from vents and hinges -- run on a fixed interval such as monthly, rather than only when a laptop looks visibly dirty. Dozens of different student hands touch the same shared-account laptops every week, which makes a scheduled routine a hygiene practice as much as a maintenance one, and regular vent cleaning also reduces the overheating that shortens a laptop's working life -- feeding directly back into the cost-per-session math from the purchasing decision earlier in this chapter.

A worked example shows the routine catching a problem before it becomes a repair: a mentor's monthly cleaning pass notices one laptop's fan vent is nearly blocked with dust and running unusually hot to the touch. A five-minute cleaning with compressed air resolves the overheating immediately, avoiding the thermal wear that might otherwise have shortened that laptop's service life by months.

Now that a laptop's imaging, labeling, storage, loaning, return, repair, and cleaning have each been introduced, the diagram below traces one laptop through this entire physical-management cycle in order.

<iframe src="../../sims/device-lifecycle-workflow/main.html" width="100%" height="902px" scrolling="no"></iframe>

#### Diagram: Device Lifecycle Workflow

<details markdown="1">
<summary>Device Lifecycle Workflow</summary>
Type: workflow
**sim-id:** device-lifecycle-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Trace one laptop through its full physical-management cycle -- imaging, labeling, inventory, storage, circulation, and the clean/repair decision -- tying together every physical-asset concept from this chapter into one connected path.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a returned laptop's condition, the learner differentiates whether it should be cleaned and returned to circulation, sent through basic repair, or flagged for outside repair.

Steps (flowchart with decision diamonds):
1. Start: "New Laptop Imaged and Configured" -- click reveals the Device Imaging Process definition above.
2. Process: "Apply Label" -- click reveals the Device Labeling System definition above.
3. Process: "Add to Inventory Record" -- click reveals the Device Inventory Tracking definition above.
4. Process: "Store in Charging Cart" -- click reveals the Device Charging Cart definition above.
5. Decision: "Leaving the Building?" -- click reveals "Whether a laptop stays on club premises for in-session use or goes home with a student determines whether a loaner agreement is required."
5a. Branch "Yes" leads to "Sign Loaner Agreement" -- click reveals the Device Loaner Agreement definition above; continues to step 6.
5b. Branch "No" leads to "Used In-Session" -- continues to step 6.
6. Process: "Laptop Returned" -- click reveals "The laptop comes back to the club, either at the end of a session or at the end of a loan period, and its condition is checked before it re-enters storage."
7. Decision: "Condition Check" -- click reveals "A mentor inspects the returned laptop for anything beyond normal wear before deciding its next step."
7a. Branch "Normal Wear" leads to "Run Cleaning Routine" -- click reveals the Device Cleaning Routine definition above; loops back to step 4.
7b. Branch "Minor Hardware Issue" leads to "Attempt Basic Repair" -- click reveals the Device Repair Basics definition above; loops back to step 4 if resolved.
7c. Branch "Beyond Basic Repair" leads to End: "Flag for Outside Repair" -- click reveals "Damage beyond a mentor's safe repair boundary is logged in the inventory as out of service and sent to a manufacturer or repair shop, a path Chapter 23 continues with the club's full device end-of-life planning."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Blue for acquisition steps (imaging, labeling, inventory), amber for storage (charging cart), green for circulation steps (loaner agreement, return), purple for the two decision diamonds, gray for the outside-repair end state.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
</details>

## Keeping Students Safe on Their Devices

Buying and organizing laptops solves half the problem; the other half is making sure the students using them -- many of them minors -- are protected while they do. The five concepts in this section extend Chapter 3's child safety policy and data privacy policy from paperwork onto the actual devices students touch every week.

### Screen Time Management

**Screen time management** is a club's session-level practice of limiting how long students stay continuously on a screen, alternating coding time with hands-on, unplugged activity -- such as the physical kit-building work from Chapters 19 and 20 -- rather than a technical setting on the device itself. A ninety-minute session spent entirely staring at a screen produces more restless, distracted students than the same ninety minutes split between screen work and hands-on building.

A worked example shows the practice applied: a club structures its ninety-minute session as twenty-five minutes of Scratch coding, twenty minutes assembling a Moving Rainbow kit by hand, another twenty-five minutes of coding to program the kit's lights, and a final twenty minutes of unplugged group discussion -- deliberately breaking up screen time rather than treating the whole session as one continuous coding block.

That ninety minutes breaks down as:

- 0:00-0:25 -- Scratch coding (screen)
- 0:25-0:45 -- Moving Rainbow kit assembly (hands-on, unplugged)
- 0:45-1:10 -- Program the kit's lights (screen)
- 1:10-1:30 -- Unplugged group discussion

### Content Filtering Software

**Content filtering software** blocks access to specific categories of inappropriate or distracting websites at the network or browser level, automatically, without requiring a mentor to watch every screen in the room -- the technical implementation of the child safety policy Chapter 3 already committed the club to on paper. Filtering happens before a page ever loads, rather than relying on a mentor to notice and intervene after the fact.

A worked example shows the filter working exactly as intended: a student searching for game cheat codes during a break is met with a blocked-page message instead of reaching the site, because the club's content filter blocks the entire "gaming and entertainment" category during session hours -- a policy no individual mentor had to actively enforce that moment.

### Parental Control Software

**Parental control software** provides broader, operating-system-level restrictions than content filtering alone -- limiting which applications can be installed, generating usage reports, and enforcing daily time limits -- configured by the club (or, for a loaned device, by a family at home) rather than left to a browser extension's narrower web-only reach. Where content filtering specifically blocks web categories, parental control software governs the whole device: what software can run on it at all, not just which sites it can reach.

A worked example shows the broader reach in action: a club configures parental control software on its shared Chromebook fleet to block the installation of any new app or browser extension without mentor approval, preventing a student from installing an unapproved game -- a restriction content filtering alone, which only blocks websites, would not have caught.

| Aspect | Content Filtering Software | Parental Control Software |
|---|---|---|
| Scope | Specific website categories | The whole device: apps, time limits, usage reports |
| Blocks a new game install? | No | Yes |
| Blocks a distracting website? | Yes | Not directly |

### Device Security Policy

**A device security policy** is the club's written set of device-specific security rules -- an automatic screen lock after a set idle period, a ban on logging personal social media or email accounts into shared club devices, and clear steps for what happens if a device is lost or stolen -- extending Chapter 3's general child safety and data privacy policies onto the specific hardware students use every week. Where Chapter 3's policies are broad commitments a club makes on paper, a device security policy translates those commitments into specific, checkable settings on an actual laptop.

A worked example shows the policy catching exactly the kind of mistake it exists to prevent: during a routine device check, a mentor notices a student's personal email is still logged into a shared-account Chromebook from the previous week. The device security policy's rule against personal accounts on shared devices gives the mentor a clear, already-agreed-upon reason to log it out immediately, rather than making an awkward judgment call on the spot.

### Password Management For Kids

**Password management for kids** covers age-appropriate strategies for helping young students create and remember passwords they can actually use -- such as a memorable three-word passphrase instead of a complex string of symbols -- paired with a club-side process for resetting a forgotten password quickly, since a locked-out eight-year-old cannot be expected to navigate a self-service account-recovery flow built for adults.

!!! mascot-warning "Passwords written on a sticky note stuck to the laptop defeat the whole point"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this common trap: a student who struggles to remember a password often solves it by writing it on a sticky note and attaching it directly to the laptop lid -- which anyone else can read at a glance. The fix is a club-kept password reset log a mentor can check quickly, so a forgotten password becomes a thirty-second mentor lookup instead of a security risk taped to the machine.

A worked example shows the safer pattern working: a student forgets their individual account password mid-session. Instead of a sticky note, the mentor checks the club's password reset log -- a notebook or spreadsheet only mentors can access -- confirms the student's identity, and resets the password to a new simple passphrase in under a minute, with the old password never having been physically visible to anyone else in the room.

Five distinct layers now stand between a student and an inappropriate or unsafe experience on a club device. The infographic below stacks them from the club's written policy foundation up through the day-to-day habit layer, so a mentor can see at a glance which layer handles which kind of risk.

<iframe src="../../sims/youth-safety-layers/main.html" width="100%" height="832px" scrolling="no"></iframe>

#### Diagram: Layers of Youth Digital Safety

<details markdown="1">
<summary>Layers of Youth Digital Safety</summary>
Type: infographic-overlay (grid)
**sim-id:** youth-safety-layers<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor see all five youth-safety layers stacked in one place, from the club's written policy foundation up through daily screen-time habits, and quickly identify which layer to check when a specific kind of problem comes up.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given one of the five youth-safety layers a club configures, the learner classifies what risk it addresses and whether the club or a family manages it.

Image style: Flat stacked-band poster, five full-width horizontal bands from bottom to top, each with a bold printed band label baked into the image since grid overlays hide chip labels by default

Image dimensions: 1000x800 (portrait, to accommodate five stacked bands)

Zones (5 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-4 bullet facts), ordered bottom to top from foundation to daily habit:
1. `device-security-policy` -- color #4A90D9 -- boundaries approximately x1:3,y1:80,x2:97,y2:96 -- Summary: "The written foundation every other layer above builds on." Facts: extends Chapter 3's child safety and data privacy policies onto specific device settings; covers auto-lock timing, no personal accounts on shared devices, and a lost-device procedure; managed entirely by the club
2. `password-management-for-kids` -- color #50C878 -- boundaries approximately x1:3,y1:62,x2:97,y2:78 -- Summary: "Age-appropriate passwords, plus a fast club-side reset process." Facts: favors memorable passphrases over complex symbol strings; a club-kept password reset log replaces adult-style self-service recovery; managed by the club
3. `parental-control-software` -- color #F5A623 -- boundaries approximately x1:3,y1:44,x2:97,y2:60 -- Summary: "Device-wide rules on what can run, not just which sites load." Facts: blocks unapproved app or extension installation; can enforce daily device time limits; generates usage reports; managed by the club or, for a loaned device, a family at home
4. `content-filtering-software` -- color #E85D75 -- boundaries approximately x1:3,y1:26,x2:97,y2:42 -- Summary: "Blocks inappropriate websites automatically, before a page loads." Facts: the technical enforcement of Chapter 3's child safety policy; works at the network or browser level; requires no mentor to be watching every screen; managed by the club
5. `screen-time-management` -- color #9B6BC7 -- boundaries approximately x1:3,y1:8,x2:97,y2:24 -- Summary: "The daily habit layer: alternating screen work with hands-on activity." Facts: a session-structure practice, not a device setting; pairs coding blocks with hands-on kit-building time from Chapters 19-20; managed by whichever mentor is running that session

showLabels: false (band titles are printed in the generated image)

Interactive features: Click or hover any band to highlight its hover zone and reveal its full fact list, including which party manages it, in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the five rectangular hover zones over the generated poster image; `data.json` holds the 5 zones per the overlay-grid-data-json-schema.
</details>

## Connecting Devices to the Club Network

### Wifi Network Setup

**Wifi network setup** is the process of configuring the club's own wireless network -- choosing a network name, setting a password, and placing the access point where its signal reliably reaches every seat in the room -- sized to handle every managed club device connecting and downloading updates at once, a bandwidth question Chapter 23 explores in more depth. A network that works fine for five test laptops during setup can struggle the first night twenty devices try to update software simultaneously.

A worked example shows the sizing issue surfacing early instead of late: a club tests its new access point with three laptops and gets a strong, fast connection. The first real session, all eighteen club laptops connect at once and try to sync overnight software updates simultaneously, and the network visibly slows -- prompting the club to schedule large updates for the imaging and configuration step covered earlier in this chapter, before laptops ever join a live session's network.

### Guest Wifi Access

**Guest wifi access** is a separate wireless network, distinct from the club's own managed-device network, offered to visiting parents, siblings, and any personal phone or tablet that isn't part of the club's inventory -- keeping unmanaged personal devices off the same network the club's laptops and their software updates depend on. This separation is a network-level extension of the device security policy introduced earlier: outside devices simply never touch the same network segment as club-managed laptops.

A worked example shows the separation preventing a real problem: during a busy open-house night, a dozen parents' phones join a guest network to check email while waiting, leaving the club's own network free for the eighteen laptops running a live demonstration session -- rather than all thirty devices competing for the same bandwidth and slowing the demo to a crawl.

The table below puts the two networks side by side for a mentor setting up a club space for the first time.

| Network | Who Connects | Password Handling | Purpose |
|---|---|---|---|
| Club Wi-Fi | Club-owned, inventory-tracked laptops only | Fixed password, changed only when a device leaves service | Reliable bandwidth for sessions and software updates |
| Guest Wi-Fi | Visiting parents, siblings, and personal devices | Can be shared openly or rotated each event | Keeps unmanaged devices off the club's own network |

## Chapter Summary

This chapter turned "buy some laptops" into a complete system: choosing a platform by weighing cost, manageability, durability, and kit compatibility; configuring and managing that platform's fleet day to day; setting up shared or individual student accounts to match a club's ratio of students to devices; tracking each laptop through imaging, labeling, storage, loaning, repair, and cleaning; layering five youth-safety protections from a written policy up through daily screen-time habits; and finally getting every managed device, and every visiting guest, safely onto the right network.

!!! mascot-celebration "You can now run a device fleet, not just own one"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built a complete system for purchasing, configuring, managing, and protecting a club's laptops -- from the first grant-funded purchase all the way through years of safe, tracked, reliable use. That's the shared infrastructure that keeps a club running long after any one leader moves on.

[See Annotated References](./references.md)
