---
title: Network, Peripherals, and the Device Lifecycle
description: Covers club network capacity planning and firewall basics, software and app governance, browser bookmark organization, offline and backup resilience, the full device lifecycle from donation through refurbishment to retirement, peripheral and storage management, and closing operational checklists.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 06:45:11
metadata:
  ibook:
    version: 1.10
---

# Network, Peripherals, and the Device Lifecycle

## Summary

This chapter covers the club's network setup -- Wi-Fi, guest access, and bandwidth planning -- along with managing bookmarks, headphones, and other peripherals. It closes with the full device lifecycle, from donation and refurbishment through end-of-life retirement. You will be able to set up a club network and manage devices through their full lifecycle.

## Concepts Covered

This chapter covers the following 22 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Network Bandwidth Planning | 22 |
| Firewall Basics For Clubs | 21 |
| Device Software Updates | 20 |
| App Installation Policy | 19 |
| Browser Bookmark Management | 18 |
| Class Bookmark Folder | 17 |
| Student Bookmark Folder | 16 |
| Offline Mode Preparation | 15 |
| Backup Device Plan | 14 |
| Device Donation Program | 13 |
| Refurbished Device Sourcing | 12 |
| Device End Of Life Plan | 11 |
| Peripheral Device Management | 10 |
| Headphone Management | 9 |
| Mouse And Keyboard Setup | 8 |
| External Storage Device | 7 |
| Cloud Storage For Devices | 6 |
| Device Troubleshooting Checklist | 5 |
| IT Volunteer Role | 4 |
| Device Setup Time Budget | 3 |
| Device Return Checklist | 2 |
| Shared Drive Organization | 1 |

## Prerequisites

This chapter builds on concepts from:

- [22. Purchasing and Configuring Club Devices](../22-purchasing-configuring-devices/index.md)

---

Chapter 22 got every laptop purchased, configured, labeled, and connected to the club's own Wi-Fi network. This chapter continues from exactly that point: whether the network can actually carry a full room at once, how student browsers stay organized instead of cluttered, what a session does when the internet itself disappears, and what happens to a laptop at the far end of its life -- donated onward, sourced refurbished, or responsibly retired. It closes with the everyday accessories that plug into every laptop this book has already covered, and the compact operational checklists that keep the whole system running without depending on any one person's memory.

!!! mascot-welcome "The network, the accessories, and the long life of a laptop"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- a connected, current, well-cared-for fleet is what turns Chapter 22's pile of configured laptops into a club that runs smoothly week after week. By the end of this chapter, you'll be able to size your club's network for a full room, keep bookmarks and backups organized, and carry a device all the way from donation to retirement without losing track of it.

## Building a Network That Can Handle the Whole Room

Chapter 22's Wi-Fi network setup worked example ended with a warning: a network that handles three test laptops smoothly can slow to a crawl the first night all eighteen club laptops try to update at once. The next two concepts turn that warning into an actual plan.

### Network Bandwidth Planning

**Network bandwidth planning** is estimating, in advance, how much total data a club's internet connection must carry at the busiest moment of a session -- every managed laptop browsing, streaming a tutorial video, or pulling a software update at the same time -- so the connection is sized for that peak instead of for the quiet moment when only a few devices were tested. A connection sized for five test laptops checking email is a very different number than one sized for eighteen laptops downloading the same operating-system update simultaneously, and only the second number matters once real sessions begin.

The comparison is a lot like sizing a water pipe for a building: a pipe that comfortably supplies one bathroom will sputter the moment every fixture in a twenty-unit building runs at once, even though it worked fine during the single-fixture test. A worked example shows the arithmetic a club leader can actually run: light web browsing needs roughly 1-2 Mbps per device, but a shared video tutorial playing on every laptop at once needs closer to 5 Mbps per device. A club with eighteen laptops doing light browsing needs only about 25 Mbps of bandwidth, but the same eighteen laptops all streaming a video tutorial together need closer to 90 Mbps -- a gap wide enough to turn a smooth session into a buffering one if nobody planned for it.

Here is a quick reference a club leader can use when comparing internet plans against a session's actual activities:

| Activity | Approximate Bandwidth per Device |
|---|---|
| Light web browsing or text editing | 1-2 Mbps |
| Streaming a shared video tutorial | 5 Mbps |
| Downloading a large software update | 10-20 Mbps (briefly) |

### Firewall Basics For Clubs

**Firewall basics for clubs** cover a simple, default-deny rule for the club's network: block all outbound and inbound traffic except the specific destinations a club's software actually needs -- the platform's update servers, the coding tools' websites, and the club's own management console -- rather than trying to individually block every distracting or unsafe site the way content filtering software does. Where Chapter 22's content filtering software blocks specific website categories, a firewall works one level lower, deciding which network connections are allowed to exist at all, which is why the two are complementary rather than substitutes for one another.

A worked example shows the default-deny approach catching something content filtering alone would miss: a club initially leaves all outbound network ports open, and a student discovers a game that tunnels its traffic through an unusual port to slip past the category-based content filter. Switching the firewall to default-deny -- blocking every port except the handful the club's own software actually uses -- closes that path immediately, without needing to identify and add every possible game site to a block list by hand.

!!! mascot-tip "Default deny, then add exceptions one at a time"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: start a new club firewall by blocking everything, then turn on only the specific connections your actual software breaks without -- the coding platform, the update servers, the management console. It's slower on day one, but it means nothing gets through by accident later.

## Keeping Club Software Current and Controlled

With the network itself sized and secured, the next question is what is allowed to run on top of it -- and how it stays current without interrupting a live session.

### Device Software Updates

**Device software updates** are the operating-system and application patches a laptop needs on an ongoing basis after Chapter 22's initial configuration step, scheduled deliberately -- overnight, in the charging cart, on the club's own network -- rather than left to install themselves in the middle of a session. An update that starts downloading while a student is mid-project can freeze the machine, restart it, or eat exactly the bandwidth Network Bandwidth Planning just accounted for at the worst possible moment.

A worked example shows the scheduling working as intended: a club sets every laptop's update window to 2:00 a.m., while it sits charging overnight in Chapter 22's charging cart, connected to the club's own Wi-Fi rather than a student's home network. By the time students arrive for the next session, every laptop is already current, and no update notification interrupts a single minute of class time.

### App Installation Policy

**An app installation policy** is the club's written rule for who may install new software or browser extensions on a managed laptop, and how a new request gets approved before it happens -- extending Chapter 22's parental control software, which blocks unapproved installs technically, with the human process of deciding what belongs on the approved list in the first place. A technical block without a written approval process just tells a student "no" with no path to "yes, once we've checked it."

A worked example shows the process in action: a student asks to install a browser extension needed for an upcoming robotics kit's firmware tool. Rather than a flat refusal, the mentor checks the request against the club's approval criteria -- the tool's publisher, its permissions, and whether other clubs report using it safely -- approves it, and adds it to the approved list so the next mentor who gets the same request doesn't have to research it from scratch.

A typical approval pass, run once per new request, checks:

1. Does the software come from a known, reputable publisher?
2. Does it request only the permissions it actually needs to function?
3. Has the club, or a related club in this book's network, used it safely before?
4. Is it added to the approved list once cleared, so the check never has to repeat?

## Organizing Bookmarks So Every Student Can Find Their Work

A club laptop's browser accumulates links fast -- the coding platform, the club's learning graph, a robot kit's documentation, a student's own in-progress project -- and without a deliberate structure, that accumulation turns into clutter within a few sessions.

### Browser Bookmark Management

**Browser bookmark management** is the practice of keeping every club laptop's set of saved website links consistent, curated, and organized into folders, rather than letting each browser accumulate its own random, growing list of one-off links over time. Consistency matters here for the same reason Chapter 22's imaging process matters for software: a student who sits down at any laptop in the fleet should find the same bookmarks in the same place, not a different, half-organized set on every machine.

A worked example shows what happens without it: a club that never establishes a bookmark structure ends up with eighteen laptops each carrying a different, sprawling list a previous student happened to save, several pointing to dead or outdated project links. Establishing one consistent structure -- the two folder types described next -- turns that sprawl back into something a new student can navigate on their first day.

### Class Bookmark Folder

**A class bookmark folder** is a single, shared bookmark folder -- identical across every laptop in the fleet -- holding the links every student in the club needs: the coding platform, the club's glossary, and whatever project documentation the current unit requires. Because it lives inside Chapter 22's Chromebook management console (or an equivalent push for Windows and macOS fleets), a mentor updates the folder once and it propagates to every laptop, rather than requiring eighteen separate manual edits.

A worked example shows that propagation saving real time: partway through a unit, a mentor needs to add a link to a new robot kit's documentation site. Pushing the updated class bookmark folder through the management console takes effect on all eighteen laptops within minutes -- the same centralized pattern Chapter 22 used to block a distracting website across an entire Chromebook fleet in one step.

### Student Bookmark Folder

**A student bookmark folder** is a personal folder inside a student's own bookmark bar, separate from the shared class folder, where that student saves links specific to their own in-progress project -- distinct from the class folder because it belongs to one student rather than the whole club. This only works reliably on an individual device account from Chapter 22, since a shared device account's bookmarks reset along with everything else once the next student logs in.

A worked example shows the two folders working side by side without conflict: a student bookmarks the specific GitHub page for their in-progress Scratch remix in their own student folder, while the shared class folder above it still points to the general Scratch editor every student uses. When the mentor updates the class folder mid-unit, the student's personal bookmark is untouched, because the two folders are structurally separate rather than one long shared list.

<iframe src="../../sims/bookmark-folder-structure/main.html" width="100%" height="500px" scrolling="no"></iframe>

#### Diagram: Bookmark Folder Structure

<details markdown="1">
<summary>Bookmark Folder Structure</summary>
Type: diagram
**sim-id:** bookmark-folder-structure<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a club laptop's bookmark bar splits into a shared class folder and a student's own personal folder, so a mentor or student can see exactly where a new bookmark belongs.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a new bookmark a student wants to save, the learner classifies whether it belongs in the shared class folder, a personal student folder, or the browser's general bookmark bar.

Steps (tree diagram, top to bottom):
1. Root: "Browser Bookmark Bar" -- click reveals the Browser Bookmark Management definition above.
2. Branch: "Class Bookmark Folder" -- click reveals the Class Bookmark Folder definition above.
3a. Leaf under Class Bookmark Folder: "Coding Platform Link" -- click reveals "A link every student needs, such as the club's coding platform, belongs in the shared class folder so a mentor's one update reaches every laptop."
3b. Leaf under Class Bookmark Folder: "Club Glossary Link" -- click reveals "Reference material used by the whole club, like the glossary, is shared through the class folder rather than duplicated in each student's personal space."
4. Branch: "Student Bookmark Folder" -- click reveals the Student Bookmark Folder definition above.
5a. Leaf under Student Bookmark Folder: "My In-Progress Project" -- click reveals "A link specific to one student's own work belongs in that student's personal folder, where it survives independent of what the class folder changes to."

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Gray for the root bookmark bar, blue for the class folder and its shared leaves, green for the student folder and its personal leaf.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
</details>

## Planning for When Things Go Wrong

Every plan so far has assumed the network stays up and every laptop keeps working. The next two concepts cover what a club does the moment either assumption fails.

### Offline Mode Preparation

**Offline mode preparation** is installing and testing the offline-capable version of a club's coding tools -- a desktop app instead of a browser tab, a downloaded copy of a lesson instead of a live web page -- before a session, so that a Wi-Fi outage interrupts nothing a student is actively doing. This is a preparation step, done in advance during Chapter 22's configuration pass, not something a mentor can improvise once the network is already down mid-session.

!!! mascot-warning "A network outage without an offline fallback stops the session cold"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this common trap: a club that runs entirely through browser-based tools has no fallback the moment Wi-Fi drops, and a live session simply stops. The fix is installing an offline-capable desktop version of the main coding tool ahead of time, during setup, so a dropped connection becomes a minor inconvenience instead of an ended session.

A worked example shows the difference play out in real time: mid-session, the club's internet connection drops for twenty minutes. A club running the offline Scratch desktop application continues working uninterrupted, since the tool never depended on the network in the first place. A different club running only the browser-based Scratch editor loses access entirely until the connection returns, turning twenty minutes of the session into an unplanned pause.

### Backup Device Plan

**A backup device plan** keeps a small pool of spare, fully imaged, fully charged laptops set aside specifically to swap in when a device fails mid-session -- distinct from Chapter 22's device loaner agreement, which governs a laptop leaving the building overnight, not an in-session substitution. Chapter 22's charging cart, sized with a few extra slots beyond the current fleet count, is exactly where this spare pool lives.

A worked example shows the swap happening without losing session time: a laptop crashes and won't restart fifteen minutes into a session. Instead of that student losing the rest of the session, the mentor pulls a pre-imaged spare from the charging cart's reserved slots, logs the student in, and the student is back to coding within a minute -- the failed laptop goes into Chapter 22's device repair workflow later, after the session ends.

!!! mascot-tip "One spare for every ten laptops is a safe starting ratio"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Want to save yourself a scramble mid-session? Keep at least one fully charged, fully imaged spare ready for every ten laptops in active use. It costs a little extra charging-cart space, but it turns a hardware failure into a thirty-second swap instead of a lost session for one student.

## The Full Device Lifecycle: Donation, Refurbishment, and Retirement

A laptop's life doesn't end the moment Chapter 22's repair workflow flags it as beyond a mentor's safe repair boundary -- that moment is a fork in the road, not a dead end.

!!! mascot-thinking "The lifecycle is a loop, not a dead end"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice how these next three concepts connect: a device one club retires can become another club's refurbished laptop, and a club that needs to grow its fleet can look for exactly that kind of device instead of only buying new. Think of it less like a laptop's obituary and more like a relay race, where the baton just passes to whichever hand needs it next.

### Device Donation Program

**A device donation program** is a club's practice of accepting still-functional donated laptops from companies, families, or other organizations, and of donating its own retired-but-working devices onward instead of discarding them -- a two-way flow that extends Chapter 22's device imaging and inventory tracking to devices that entered the fleet by gift rather than purchase. A donated laptop still has to pass through Chapter 22's full configuration and labeling pipeline before it ever meets a student; a donation skips the purchase decision, not the setup work.

A worked example shows the incoming side of that flow: a local company donates ten decommissioned business laptops to the club. Before any of them reach a student, a mentor runs each one through the same imaging, labeling, and inventory-entry process Chapter 22 established for newly purchased devices, so a donated laptop looks and behaves exactly like one the club bought itself.

### Refurbished Device Sourcing

**Refurbished device sourcing** is deliberately buying previously used, professionally reconditioned laptops from a vendor instead of new ones, trading a shorter expected lifespan and a shorter warranty for a substantially lower price -- extending Chapter 22's laptop purchasing decision with a second axis beyond "which platform" to "new or refurbished." A refurbished laptop needs closer scrutiny of battery health and warranty length than a new one, since those are exactly the parts most likely to have already seen wear.

A worked example runs the same grant arithmetic Chapter 22 introduced: a club with a $2,200 budget can buy roughly five new Windows laptops at $450 each, or ten refurbished Windows laptops at $220 each with a 90-day warranty -- doubling the fleet size for the same grant, at the cost of a shorter expected service life and a warranty that runs out well before a new laptop's would.

### Device End Of Life Plan

**A device end-of-life plan** is the club's written procedure for what happens to a laptop once it is no longer safe, repairable, or worth continuing to update -- wiping all student data first, per Chapter 22's device security policy, then either recycling it through a certified e-waste program or donating any still-working parts, rather than letting it sit indefinitely in a closet. A laptop flagged "beyond basic repair" in Chapter 22's repair workflow needs somewhere specific to go next; an end-of-life plan is that destination.

A worked example shows the plan closing the loop cleanly: a four-year-old laptop with a cracked screen and a failing battery is flagged for retirement. A mentor wipes its stored data following the device security policy, removes its inventory-tracking label, and drops it off with a local certified e-waste recycler -- closing out its inventory record instead of letting it linger as an unaccounted-for entry on the spreadsheet.

<iframe src="../../sims/device-end-of-life-decision-workflow/main.html" width="100%" height="550px" scrolling="no"></iframe>

#### Diagram: Device End-of-Life Decision Workflow

<details markdown="1">
<summary>Device End-of-Life Decision Workflow</summary>
Type: workflow
**sim-id:** device-end-of-life-decision-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show how a laptop reaching the end of its useful service life is routed to donation or responsible retirement, and how that same flow can bring a refurbished device into a different club's fleet.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a retiring laptop's condition, the learner differentiates whether it should be routed to a donation program or to the club's end-of-life plan.

Steps (flowchart with decision diamonds):
1. Start: "Laptop Flagged for Retirement" -- click reveals "Arrives either from Chapter 22's repair workflow (beyond basic repair) or from simply reaching the end of its expected service life."
2. Decision: "Still Functional?" -- click reveals "A working-but-outdated laptop has more options than a laptop that no longer powers on or holds a charge."
3a. Branch "Yes" leads to "Evaluate for Donation" -- click reveals the Device Donation Program definition above.
4. Decision: "Another Program Can Use It?" -- click reveals "Some still-working laptops fit another club or family's needs even after this club retires them."
4a. Branch "Yes" leads to End: "Donated Outward" -- click reveals "Data is wiped per the device security policy, then the laptop is donated to another program through the club's donation program."
4b. Branch "No" leads to End: "Device End-of-Life Plan" -- click reveals the Device End Of Life Plan definition above.
3b. Branch "No" (not functional) leads directly to the same End: "Device End-of-Life Plan" node.
5. Side node (dashed connector): "Refurbished Device Sourcing" -- click reveals the Refurbished Device Sourcing definition above; connects back into Chapter 22's "New Laptop Arrives" step, showing how one club's donated-outward laptop can become another club's refurbished purchase.

Interactivity requirement (satisfied): every node has a Mermaid `click` directive tied to an infobox showing its revealed text, matching the definition already given in this chapter's prose.

Color coding: Gray for the start node, purple for the two decision diamonds, green for the donated-outward end state, amber for the device end-of-life end state, blue dashed for the refurbished-sourcing side node and its connector.

Implementation: Mermaid flowchart (`graph TD`) rendered in main.html with `click NodeId call showInfo("NodeId")` directives for every node, opening a side-panel infobox; a "Reset View" button re-centers the diagram after any zoom or pan.
</details>

## Managing Peripherals and Everyday Storage

Every laptop this book has covered so far also depends on a handful of smaller accessories -- headphones, a mouse, a USB drive -- that are easy to lose precisely because they're so much smaller than the laptop itself.

### Peripheral Device Management

**Peripheral device management** applies Chapter 22's inventory and labeling principles to the smaller accessories that plug into a laptop -- headphones, mice, keyboards, storage drives -- but tracked by count in labeled bins rather than by an individual ID sticker on each one, since a bin of twenty identical earbuds doesn't need twenty separate inventory rows the way twenty distinct laptops do.

A worked example shows the adaptation in practice: a club adds a "Peripherals" section to its Chapter 22 inventory spreadsheet, with one row per bin -- "Headphones: 24 of 24 in bin," "USB Drives: 8 of 10 in bin, 2 checked out" -- instead of the per-unit ID tracking used for laptops, since counting a bin takes seconds while individually labeling two dozen earbuds would take an afternoon.

### Headphone Management

**Headphone management** covers keeping a shared set of headphones sanitized between students, stored in a labeled bin, and replaced when broken -- extending Chapter 22's device cleaning routine to an accessory that touches a different student's ears every session. Disposable or wipeable ear-cushion covers, swapped between uses, address a hygiene concern a laptop's screen and keyboard don't carry in the same way.

A worked example shows the routine in action: before a sound-kit session, a mentor hands out headphones with a fresh foam ear-cushion cover already in place, and collects the used covers for disposal at the end, rather than reusing the same cushion surface directly against a different student's skin the following week.

### Mouse And Keyboard Setup

**Mouse and keyboard setup** covers pairing an external mouse or keyboard to a laptop when the built-in trackpad or keyboard is impractical for a specific project -- most often when a laptop sits flat on a table next to a breadboard or robot kit, and the laptop's own keyboard would sit awkwardly close to exposed wiring. This is a project-specific setup step, applied when a particular activity calls for it, not a default configuration every laptop needs.

A worked example shows the need surfacing during a physical-computing session: a club running a MicroPython breadboard project finds students' hands cramped between the laptop's built-in keyboard and the breadboard sitting right next to it. Connecting an external USB keyboard, positioned to one side, gives students room to type and work with the breadboard without one interfering with the other.

### External Storage Device

**An external storage device** is a USB flash drive or portable hard drive used to move files between a laptop and a piece of hardware that doesn't share the club's cloud account -- most often a robot kit's firmware-flashing tool, which expects a file on a local drive rather than a cloud link. A Chromebook's limited local storage makes this an occasional necessity even for a club that otherwise keeps everything in the cloud.

A worked example shows the transfer working as intended: a student's finished MicroPython project needs to reach a robot kit's flashing tool that only reads from a local USB drive. The student copies the file from their Chromebook onto a labeled external drive, then plugs that drive directly into the flashing station to complete the transfer.

### Cloud Storage For Devices

**Cloud storage for devices** is using a shared, club-managed cloud drive account as the default save location for student files, so work survives independently of which specific laptop or account a student happened to use that day. This matters most on Chapter 22's shared device accounts, where a local file saved directly to the laptop disappears the moment the next student's session resets that account.

A worked example shows cloud storage solving exactly that problem: instead of saving a project file locally to the "Station 3" shared account -- where it would vanish once the next student logs in -- a student saves directly to the club's shared cloud drive folder. The following week, at any available laptop, the same student opens that same file exactly where they left off.

<iframe src="../../sims/peripheral-management-layers/main.html" width="100%" height="600px" scrolling="no"></iframe>

#### Diagram: Peripheral and Storage Management Layers

<details markdown="1">
<summary>Peripheral and Storage Management Layers</summary>
Type: infographic-overlay (grid)
**sim-id:** peripheral-management-layers<br/>
**Library:** Interactive Infographic Overlay Guide (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor see all five categories of peripheral and storage management stacked in one place, from the umbrella inventory practice down to the two storage options, and quickly find which category to check for a specific accessory question.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a specific accessory or storage question, the learner classifies which of the five peripheral-management categories addresses it.

Image style: Flat stacked-band poster, five full-width horizontal bands from top to bottom, each with a bold printed band label baked into the image since grid overlays hide chip labels by default

Image dimensions: 1000x800 (portrait, to accommodate five stacked bands)

Zones (5 horizontal bands, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-4 bullet facts), ordered top to bottom from umbrella practice to specific accessory types:
1. `peripheral-device-management` -- color #4A90D9 -- boundaries approximately x1:3,y1:4,x2:97,y2:20 -- Summary: "The umbrella practice: tracking accessories by bin count, not individual ID." Facts: applies Chapter 22's inventory and labeling principles at bin scale; one spreadsheet row per bin rather than per item; covers headphones, mice, keyboards, and storage drives together
2. `headphone-management` -- color #50C878 -- boundaries approximately x1:3,y1:22,x2:97,y2:38 -- Summary: "Shared headphones, sanitized between students." Facts: extends Chapter 22's device cleaning routine to an accessory touching a different student's ears each session; disposable or wipeable ear-cushion covers swapped between uses; stored in a labeled bin
3. `mouse-keyboard-setup` -- color #F5A623 -- boundaries approximately x1:3,y1:40,x2:97,y2:56 -- Summary: "External input devices for projects where the built-in keyboard is awkward." Facts: used when a laptop sits next to a breadboard or robot kit; a project-specific setup step, not a default; connected only when the activity calls for it
4. `external-storage-device` -- color #E85D75 -- boundaries approximately x1:3,y1:58,x2:97,y2:74 -- Summary: "USB drives for moving files to hardware that doesn't read the cloud." Facts: needed for robot-kit firmware-flashing tools that expect a local file; especially useful on Chromebooks with limited local storage; labeled the same way laptops are
5. `cloud-storage-for-devices` -- color #9B6BC7 -- boundaries approximately x1:3,y1:76,x2:97,y2:96 -- Summary: "A shared cloud drive so files survive a shared-account reset." Facts: the default save location on shared device accounts; work follows the student to any laptop, not just one machine; distinct from a local external drive, which is for hardware that can't reach the cloud at all

showLabels: false (band titles are printed in the generated image)

Interactive features: Click or hover any band to highlight its hover zone and reveal its full fact list in a detail panel; explore mode only.

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the five rectangular hover zones over the generated poster image; `data.json` holds the 5 zones per the overlay-grid-data-json-schema.
</details>

## Closing Operational Checklists

The last five concepts in this chapter are compact, everyday tools rather than full policies -- short enough to tape inside a supply cabinet, but each one closing a small gap the rest of this chapter and Chapter 22 would otherwise leave open.

**A device troubleshooting checklist** is a short, ordered list of quick checks -- restart the laptop, confirm it's charged, toggle Wi-Fi off and back on, confirm the correct account is logged in -- that any mentor runs before escalating a misbehaving device to Chapter 22's repair workflow or this chapter's backup device plan. Most in-session problems resolve at this first, cheapest step, without ever needing a spare laptop or a repair ticket.

**The IT volunteer role** is a mentor position focused specifically on this chapter's and Chapter 22's technical upkeep -- network, updates, peripherals, inventory -- distinct from the instructional mentors who work directly with students on coding and kits. A club large enough to need one benefits from naming it explicitly, so technical upkeep has a clear owner instead of becoming everyone's unstated responsibility and, in practice, no one's.

**A device setup time budget** is the number of minutes reserved at the start of a session specifically for booting laptops, logging in, and confirming network connectivity, before any instructional content begins -- an extension of Chapter 22's screen-time session breakdown, which assumed devices were already ready to go. Reserving five to ten minutes for this explicitly, rather than absorbing it invisibly into instructional time, keeps a slow laptop boot from eating into a mentor's planned lesson.

**A device return checklist** is a short list a mentor runs when a laptop physically comes back -- from an overnight loan, from storage, or at the end of a session -- checking charge level, confirming no personal file was left behind, and noting any new physical damage, distinct from Chapter 22's loaner agreement, which is the signed form governing the loan itself rather than the check performed at return.

**Shared drive organization** is the folder-naming convention used inside this chapter's cloud storage for devices, so that student and class files land in a predictable structure -- one folder per class session, or one folder per student -- instead of accumulating as one large, unsorted pile that gets harder to search every week it goes unmanaged.

The table below lines up all five for quick reference:

| Checklist or Role | Used When | Who Uses It |
|---|---|---|
| Device Troubleshooting Checklist | A laptop misbehaves mid-session | Any mentor |
| Device Return Checklist | A laptop comes back from loan, storage, or a session | IT volunteer or mentor |
| Device Setup Time Budget | Planning how a session's first minutes are spent | Session lead |
| IT Volunteer Role | Deciding who owns technical upkeep | Club leader |
| Shared Drive Organization | Filing any saved student or class file | Any mentor or student |

## Chapter Summary

This chapter carried Chapter 22's configured fleet the rest of the way: sizing and securing the network those laptops connect to, governing what software runs on them, organizing bookmarks so students can find their own work, preparing for outages and hardware failures, tracing a laptop's full life from donation or refurbishment through responsible retirement, keeping the smaller peripherals and storage options in order, and closing with five compact checklists that keep day-to-day operations from depending on any single person's memory.

!!! mascot-celebration "You can now run a device fleet through its entire life"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built the network, software governance, and lifecycle system that keeps every laptop from Chapter 22 connected, current, and accounted for -- from the day it's donated or purchased all the way through to responsible retirement. That's the last piece of shared infrastructure standing between a pile of hardware and a coding club that runs itself.
