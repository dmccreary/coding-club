---
title: Writing Your Club Charter and Safety Policies
description: Walks through drafting a club charter and values, and the safety-critical paperwork every coding club needs before working with minors.
generated_by: claude skill chapter-content-generator
date: 2026-08-31 00:00:00
metadata:
  ibook:
    version: 1.10
---

# Writing Your Club Charter and Safety Policies

## Summary

A club charter and a clear set of values give a coding club its backbone, and this chapter walks through drafting both. It covers the safety-critical policies every club needs before working with minors: background checks, child safety, liability, and data privacy. After this chapter you will be able to draft a charter and the consent and safety paperwork a new club requires.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Club Charter | 3340 |
| Club Values | 255 |
| Code Of Conduct | 254 |
| Volunteer Background Check | 253 |
| Child Safety Policy | 252 |
| Liability Considerations | 251 |
| Parental Consent Form | 250 |
| Photo Release Form | 249 |
| Data Privacy Policy | 248 |
| Anti Harassment Policy | 23 |
| Conflict Resolution Process | 22 |
| Club Bylaws | 21 |
| Decision Making Process | 20 |
| Roles And Responsibilities | 19 |
| Club Leader Role | 18 |
| Assistant Leader Role | 17 |

## Prerequisites

This chapter builds on concepts from:

- [1. What Is a Coding Club](../01-what-is-a-coding-club/index.md)

---

You now have a mission, a vision, and a target audience -- the "why" and "who" of your club. This chapter turns those into the "how": a written charter that anyone can pick up and use to run the club correctly, and the safety paperwork that protects students, families, and volunteers alike. None of this is optional once minors are involved, so treat this chapter as the one you cannot skip.

!!! mascot-welcome "Time to put it in writing"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great -- starting with the document that makes everything else possible. A charter turns "how we do things" from one person's memory into something the whole club can rely on, which is exactly the sustainability theme from Chapter 1 in action.

## What a Club Charter Contains

A **club charter** is the single founding document that establishes a coding club's purpose, values, rules, and decision-making structure -- the concept every other idea in this chapter attaches to, which is why it carries by far the highest impact score in this book's learning graph. Think of the charter as the club's constitution: it does not change every week, but everything else the club does should be traceable back to something the charter established. A club without a written charter can still run a good session, but it cannot survive a leadership change, because there is nothing for a new leader to inherit except secondhand memory -- exactly the single leader dependency problem from Chapter 1. A charter is also often the specific document a venue or fiscal sponsor asks to see before agreeing to host a club or accept donations on its behalf, so it does real work beyond internal organization.

A charter does not need to be long to be complete. A practical charter for a small club typically runs two to four pages and includes:

- A one-paragraph statement of purpose (drawing directly from the mission and vision drafted in Chapter 2)
- The club's values (three to six short statements)
- A code of conduct covering students, mentors, and visiting parents
- Bylaws covering meeting frequency, leadership terms, and how the charter itself can be amended
- A decision-making process naming who has authority over which categories of decisions
- Named roles and responsibilities for every leadership position the club uses

A charter is not one undifferentiated block of text. In practice it bundles five distinct sections beyond its opening purpose statement, each covered later in this chapter. The diagram below shows how they fit together.

#### Diagram: Anatomy of a Club Charter

<iframe src="../../sims/club-charter-anatomy/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Anatomy of a Club Charter</summary>
Type: graph-model
**sim-id:** club-charter-anatomy<br/>
**Library:** vis-network<br/>
**Status:** Specified

Purpose: Show a club charter as a container document made of five distinct sections, so a reader can see how "charter," "values," "code of conduct," "bylaws," "decision-making process," and "roles and responsibilities" relate instead of treating them as loosely related synonyms.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: differentiate

Learning objective: Given the term "club charter," the learner identifies the five sections it typically contains and states what each one governs.

Node types:
1. Center node -- "Club Charter" (amber circle, larger than the rest, #F5A623)
2. Section nodes (five sky-blue circles, #4A90D9): "Club Values," "Code of Conduct," "Club Bylaws," "Decision-Making Process," "Roles and Responsibilities"

Edge labels:
- Club Charter -- Club Values: "states what we believe"
- Club Charter -- Code of Conduct: "states how we behave"
- Club Charter -- Club Bylaws: "states our operating rules"
- Club Charter -- Decision-Making Process: "states how we decide"
- Club Charter -- Roles and Responsibilities: "states who does what"

Interactive features:
- Click any node to open a side panel with a one-sentence definition and a one-sentence real-world example
- Hover an edge to highlight it and enlarge its label
- Click-drag to reposition nodes; scroll wheel to zoom; click empty canvas to deselect

Default state: Force-directed layout, "Club Charter" pinned at center, no node pre-selected

Layout: Force-directed (physics-based), radial tendency around the center node

Legend: Fixed corner box showing node color key (amber = charter, blue = section)

Canvas size: Responsive width, 500px height, minimum 320px width before controls stack vertically

Implementation: vis-network with a JSON node/edge dataset; side panel is an absolutely-positioned div updated via vis-network's `selectNode` event listener
</details>

**Club values** are the small set of beliefs a club commits to publicly -- typically three to six short statements such as "every student's first attempt is celebrated, not corrected" or "mentors ask questions before giving answers." A library club that adopted "curiosity over correctness" as a core value changed a concrete behavior almost immediately: mentors stopped jumping in to fix a student's code the moment it produced an error, and instead asked "what do you think happened there?" -- a small shift traceable directly to one written sentence. Other common values include "every kit gets put away the way we found it" (teaching responsibility for shared equipment) and "no question is too basic to ask" (explicitly lowering the fear of looking foolish in front of peers).

The **code of conduct** translates those values into enforceable behavioral rules for everyone in the room -- students, mentors, and visiting parents alike. Where a value like "respect" is aspirational, a code of conduct rule like "no student photographs another student's screen or project without asking first" is checkable: a mentor can point to it and say exactly what happened and why it violated a specific rule, rather than relitigating a vague feeling that something was disrespectful. A typical code of conduct also states consequences in tiers -- a first reminder is verbal and informal, a repeated issue involves a private conversation with a parent at pickup, and a serious or repeated violation can result in a student or mentor being asked not to return, decided through the conflict resolution process described later in this chapter.

**Club bylaws** are the charter's operating rules -- how often the club meets, how the leadership role changes hands, how the charter itself can be amended. A club's bylaws might state "the club leader role is reviewed every 12 months, and a leader may serve a maximum of three consecutive terms before required rotation" -- a rule that exists specifically to prevent the single leader dependency problem from taking root. Bylaws also typically state the amendment process itself, such as "any bylaw may be changed by a two-thirds vote of active mentors, proposed at least two weeks in advance" -- a deliberately slower process than day-to-day decisions, since bylaws are meant to be stable.

The **decision-making process** section spells out who gets a vote on what, sorted by how much the decision affects the club. Many clubs reserve fast, low-stakes decisions -- this week's project, whether to run an extra session before a holiday -- for the club leader alone. Medium-stakes decisions, such as changing the code of conduct or accepting a new mentor, typically require a simple majority vote among active mentors. High-stakes decisions, such as spending a large unbudgeted amount or changing the club's venue, often require both a mentor vote and, where one exists, sign-off from an oversight board. Finally, **roles and responsibilities** is the section that names every position in the club and what each one is accountable for -- covered in detail in the next section, since who holds these roles matters enough to warrant its own discussion.

!!! mascot-thinking "A charter is infrastructure, not paperwork"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Here's the shift in thinking: a charter can feel like bureaucratic overhead when you write it, especially for a three-student club meeting in a library corner. But notice that every section exists to answer a question a new leader would otherwise have to guess at. That's not paperwork -- that's the sustainable infrastructure from Chapter 1, written down.

## Club Leadership Roles

Two roles anchor most club charters. The **club leader role** carries overall responsibility for the club: setting the schedule, maintaining relationships with the venue, keeping the charter and safety paperwork current, and making final calls on anything the decision-making process doesn't explicitly delegate elsewhere. In a school-based club, the leader is often the same teacher who champions the club to the principal each year; in a library club, it's frequently the volunteer who first proposed the idea to library staff. A well-written charter also states how a leader is chosen or replaced -- for example, by a vote among active mentors -- so that the role itself never becomes something one person simply holds by default because nobody else stepped up.

The **assistant leader role** exists specifically to prevent single leader dependency -- it is a second person deliberately trained to run any session solo, handle the registration system, and know where the supply inventory lives. Concretely, an assistant leader should be able to answer, without checking with the club leader first, questions like "where are the spare Pico boards," "what's the current sign-up count for next session," and "who do we call if the venue is unexpectedly locked." A charter that names an assistant leader but never actually has that person run a session independently has created the role on paper without the leadership succession Chapter 1 described; the role only does its job once the assistant leader has genuinely operated the club without the primary leader present at least once.

!!! mascot-tip "Rotate who runs the session, on purpose"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: once a quarter, have the assistant leader run the entire session start to finish while the club leader stays home. Any gap in their knowledge shows up immediately, while it's still cheap to fix.

## Safety-Critical Policies Every Club Needs

Every policy in this section exists because a coding club works with minors, which raises the legal and ethical stakes far above a typical adult hobby group. Skipping any one of these is not a shortcut -- it is a liability a founder is choosing to carry personally, often without realizing it.

A **volunteer background check** is a formal criminal-history and, in many jurisdictions, child-abuse-registry screening required before any adult mentors unsupervised or in close contact with minors. In practice this usually means two separate checks: a state or national criminal history search, and a sex-offender registry search, both run through a commercial screening vendor rather than a club leader trying to search public records by hand. A club that partners with a library or school can often use that host institution's existing background-check vendor rather than purchasing a separate service -- one library-based club paid nothing extra because the library already required checks for all program volunteers and simply added the club's mentors to its existing process. Most clubs re-run checks every one to two years, not just once at onboarding, since a check only reflects a person's record at the moment it was run.

The **child safety policy** sets the concrete behavioral rules that keep students physically and emotionally safe during a session. The most common rule is the "two-adult rule": at least two screened adults must be present for the entire session, and no adult is ever alone with a single student in a closed room. Related rules typically cover restroom supervision (an adult waits outside, never inside, and never alone with one student), and pickup verification (a student is released only to a parent or guardian named on that student's consent form, checked against a picture ID for anyone the mentor doesn't already recognize). **Liability considerations** cover what happens if something goes wrong despite those precautions: which insurance policy -- the club's own general liability policy, a volunteer accident policy, or the venue's existing coverage -- pays for an injury from a dropped soldering iron or a tripped cable, and whether the venue requires the club to carry its own liability coverage as a condition of meeting there. A signed parental consent form (below) is not a substitute for insurance; a waiver can reduce legal exposure, but it does not pay a medical bill the way an actual insurance policy does.

A **parental consent form** is the signed document a parent completes before their child can participate. A complete form typically includes the student's name and age, an emergency contact and phone number, any allergies or medical conditions a mentor should know about, an acknowledgment of the child safety policy and code of conduct, and the parent's dated signature authorizing participation. A **photo release form** is a related but distinct document specifically authorizing, or declining, the use of a student's photo, first name, or project footage in newsletters, social media, or promotional flyers -- distinct because a parent can consent to their child joining the club while still declining to have their child's photo posted publicly, and a club must honor that split decision rather than treating one form as covering both. Many clubs handle this in practice with a simple visual cue, such as a colored lanyard or sticker for any student whose family declined the photo release, so a mentor can tell at a glance before taking a group picture. Finally, a **data privacy policy** governs how the club stores and protects any student information it collects -- sign-in sheets, email addresses, the consent forms themselves -- typically specifying that paper forms are kept in a locked location or a password-protected digital folder, that access is limited to the club leader and assistant leader, and that records are destroyed after a stated retention period, such as one year past a student's last session, rather than kept indefinitely.

The table below summarizes all six documents side by side.

| Document | Who Signs or Completes It | What It Covers | When Collected |
|---|---|---|---|
| Volunteer Background Check | Each adult mentor | Criminal history and child-safety screening | Before the mentor's first unsupervised session |
| Child Safety Policy | Adopted by the club, posted for families | Behavioral rules protecting students during sessions | Written before the first session; reviewed annually |
| Liability Considerations | Documented by club leadership | Which insurance covers injuries or property damage | Before signing any venue agreement |
| Parental Consent Form | Parent or guardian | Permission to participate; medical/allergy disclosure | Before a student's first session |
| Photo Release Form | Parent or guardian | Permission to use a student's photo or name publicly | Before a student's first session |
| Data Privacy Policy | Adopted by the club, shared with families | How student data is stored, retained, and accessed | Written before the first session; reviewed annually |

!!! mascot-warning "A verbal 'yes' from a parent is not consent"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: a parent saying "sure, that's fine" at drop-off is not the same as a signed parental consent form or photo release form. If a form isn't signed and on file, treat that student as not yet consented for that specific activity -- no exceptions, even for a returning family you trust.

## Keeping the Club Healthy

Policies only protect students if they are actually enforced when something goes wrong, which is why two process-oriented policies close out the charter. The **anti-harassment policy** specifically prohibits bullying, exclusion, and harassment based on protected characteristics such as gender, race, disability, or religion -- a targeted policy in addition to the general code of conduct, because harassment complaints often involve power dynamics (an older student toward a younger one, or a clique excluding a newcomer) that a generic behavior rule doesn't address directly. A strong anti-harassment policy also names a specific, low-friction way to report a concern -- such as being able to tell any mentor privately, not just the club leader -- since a student who has to seek out one specific adult is less likely to report anything at all. A club that added an explicit anti-harassment policy after noticing a pattern of older boys excluding a younger girl from a group project saw the exclusion stop within two sessions, once mentors had a named policy to point to rather than a vague sense that something felt off.

The **conflict resolution process** is the defined sequence of steps a club follows once a complaint or conflict is reported -- who receives the report, how it's investigated, and what outcomes are possible. Without a defined process, a complaint often gets resolved inconsistently based on whichever mentor happens to be nearby that day. The workflow below walks through a typical process end to end.

#### Diagram: Handling a Conflict or Complaint

<iframe src="../../sims/conflict-resolution-workflow/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Handling a Conflict or Complaint</summary>
Type: workflow
**sim-id:** conflict-resolution-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Show the concrete sequence of steps a coding club follows from an initial complaint or conflict report through to a documented outcome, so mentors know exactly what to do rather than improvising in the moment.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: implement

Learning objective: Given a reported conflict or complaint, the learner correctly identifies the next step in the club's defined resolution process.

Steps (flowchart with decision diamond):
1. Start: "Complaint or Conflict Reported" -- click reveals "Any mentor, student, or parent can report a concern to the club leader or assistant leader."
2. Process: "Club Leader Documents the Report" -- click reveals "Date, people involved, and a factual description are written down within 24 hours, before memory fades."
3. Decision: "Does This Involve Safety or Harassment?" -- click reveals "Safety and anti-harassment-policy violations always escalate immediately; ordinary disagreements do not."
4a. Process (if yes): "Escalate to Venue and, If Needed, Authorities" -- click reveals "The venue's own safety contact is notified the same day; law enforcement is contacted immediately for any safety emergency."
4b. Process (if no): "Club Leader Mediates a Conversation" -- click reveals "Both parties are heard separately first, then, if appropriate, brought together with a mentor present."
5. Process: "Outcome Is Documented and Shared With Involved Families" -- click reveals "Families receive a summary of the resolution appropriate to what they need to know, respecting other students' privacy."
6. End: "Entry Added to the Lessons Learned Log" -- click reveals "Recurring conflict types get flagged so the club can adjust its code of conduct or session structure, echoing Chapter 1's continuous improvement cycle."

Interactivity requirement: every node above has a Mermaid `click` directive wired to an infobox showing its revealed text; this is not a decorative flowchart.

Color coding: Blue for documentation steps, yellow for the decision diamond, red for the safety-escalation branch, green for resolution and closure steps

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("...")` directives for every node, rendered with a custom infobox panel beneath the diagram
</details>

Notice that the process ends by feeding into the lessons learned log from Chapter 1 -- a well-run conflict resolution process doesn't just solve one incident, it becomes evidence the club can act on if the same type of conflict keeps recurring.

!!! mascot-encourage "Nobody enjoys writing this section, and that's fine"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If drafting a conflict resolution process feels uncomfortable because you're imagining the worst-case scenario, that discomfort is normal -- most founders feel it. Write the process while things are calm; you'll be glad it already exists the one time you actually need it.

## Chapter Summary

A club charter bundles five sections -- values, code of conduct, bylaws, decision-making process, and roles and responsibilities -- into one founding document that lets a new leader step in without guessing. The club leader and assistant leader roles it defines only prevent single leader dependency if the assistant leader has genuinely run a session solo. Six safety-critical documents -- background checks, a child safety policy, liability considerations, parental consent, photo release, and a data privacy policy -- are non-negotiable once minors are involved, and an anti-harassment policy paired with a defined conflict resolution process ensures problems get handled consistently rather than improvised session by session.

!!! mascot-celebration "Your charter is no longer just an idea"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You can now draft a complete club charter and assemble the safety paperwork a new club needs before its first session. Next up: turning the roles this charter named into a full governance structure and a simple brand identity.
