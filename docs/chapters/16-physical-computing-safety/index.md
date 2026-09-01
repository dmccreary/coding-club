---
title: Physical Computing and Electrical Safety Basics
description: Introduces physical computing and the breadboard, resistor, LED, and switch vocabulary a mentor needs, with electrical safety rules taught as a prerequisite to every hands-on activity.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 04:51:47
metadata:
  ibook:
    version: 1.10
---

# Physical Computing and Electrical Safety Basics

## Summary

This chapter opens the book's physical computing track with breadboards, resistors, LEDs, and the basic circuit vocabulary every mentor needs. Electrical safety rules come first and are treated as a prerequisite to every hands-on activity that follows. You will be able to explain core electronics vocabulary and lead a blinking-LED activity safely.

## Concepts Covered

This chapter covers the following 19 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Physical Computing | 3917 |
| Electrical Safety Rules | 1256 |
| Breadboard Basics | 491 |
| Jumper Wire | 490 |
| Resistor Basics | 489 |
| LED Basics | 488 |
| Blinking Light Circuit | 487 |
| Push Button Switch | 486 |
| Digital Input | 485 |
| Digital Output | 484 |
| Analog Input | 483 |
| Analog Output | 482 |
| Voltage Basics | 481 |
| Current Basics | 480 |
| Short Circuit Hazard | 479 |
| Static Electricity Precaution | 478 |
| Battery Safety | 477 |
| Soldering Safety Basics | 476 |
| Multimeter Usage | 475 |

## Prerequisites

This chapter assumes only the prerequisites listed in the [course description](../../course-description.md).

---

Every chapter so far has lived entirely on a screen — Scratch blocks, Python text, a browser tab. This chapter starts down a different path. Physical computing lets the code your students write reach out and touch the real world: light an LED, read a button press, spin a motor. That reach is exciting, and it also introduces a genuinely new category of risk that Scratch and Python never did — a risk this chapter treats as a prerequisite to everything hands-on that follows, not an afterthought bolted onto the end.

!!! mascot-welcome "Welcome to the physical computing track"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great — this time with real components you can hold in your hand! This chapter gives you the breadboard, resistor, LED, and safety vocabulary you need to run a hands-on session with confidence, starting with the rules that keep every builder safe.

## What Is Physical Computing?

**Physical computing** is the practice of building systems that sense or act on the physical world through electronic hardware controlled by code, rather than systems that only display information on a screen. A traditional Python program takes keyboard input and prints text; a physical computing project takes input from a button, sensor, or dial and produces output as light, sound, or motion.

A useful mental shortcut is to compare a physical computing system to a human body. Your senses — eyes, ears, fingertips — gather information from the world, exactly like a sensor or button gathers a reading in a circuit. Your brain decides what that information means and what to do about it, exactly like the code running on a microcontroller. Your muscles then act on that decision, exactly like an LED, motor, or speaker acts on a command. This input-process-output loop is the single mental model underneath every physical computing project in this book, from a blinking light to a full robot.

Picture a mentor introducing this idea to a new student for the first time. The mentor holds up a breadboard with one LED and one push button already wired, and says: "When you press this button, that's the input — just like touching something hot. The microcontroller processes that signal the instant it happens, the same way your brain reacts. And this LED lighting up is the output — the physical response you can actually see." The student presses the button once, watches the LED flash, and immediately understands the loop without needing a single line of code explained first. That demonstration is itself a worked example of the concept: a physical action producing a physical, visible reaction.

Every remaining concept in this chapter is a piece of that loop. Breadboards, jumper wires, resistors, and LEDs are the physical materials. Digital and analog input and output describe the two flavors of signal a circuit can sense or produce. Electrical safety rules govern how a mentor supervises the whole process responsibly. The diagram below lets you click through each stage of the loop and see which upcoming concepts belong to it.

#### Diagram: The Physical Computing Loop

<iframe src="../../sims/physical-computing-loop/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>The Physical Computing Loop</summary>
Type: infographic
**sim-id:** physical-computing-loop<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/stem-robots/tree/main/docs/sims/physical-computing-explorer

Purpose: Give a mentor a single mental model — sense, process, act — that organizes every concept in this chapter.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a physical computing project description, the learner explains which part of the input-process-output loop each component belongs to.

Visual elements: Three large circular stages arranged left to right — "Input" (icon: button/sensor), "Process" (icon: microchip), "Output" (icon: LED/motor) — connected by arrows that animate a single pulse of light moving through the loop when the learner clicks "Run Example."

Interactive controls: Three clickable stage circles; a dropdown listing example projects ("Blinking LED," "Button-Triggered Buzzer," "Dimmable Light"); a "Run Example" button that animates the pulse and highlights the matching component list beneath each stage.

Data Visibility Requirements: Stage 1 shows the raw input event (e.g., "Button pressed"); Stage 2 shows the plain-language rule being applied (e.g., "If pressed, turn LED on"); Stage 3 shows the resulting physical output (e.g., "LED lights up").

Instructional Rationale: A step-through, clickable model suits an Understand-level objective better than continuous animation, since a mentor needs to trace which real component maps to which stage, not just watch motion.

Implementation: p5.js canvas with three clickable circular nodes and a text panel below that updates on click or during the animated run.
</details>

## Electrical Safety Rules

**Electrical safety rules** are the set of practices that keep low-voltage hobby electronics work free of shock, burn, fire, and component-damage risk during a supervised club session. Before any breadboard, battery, or soldering iron comes out of a kit, every mentor running the session needs to know these rules well enough to enforce them without a printed reference in hand.

Think of these rules the same way you already think about kitchen safety with a group of students: you would never let a student near a stovetop without first covering "don't touch the hot burner" and "turn pot handles inward." Hobby electronics safety works the same way — a short list of concrete, memorable rules, repeated at the start of every session until students recite them without prompting. Most club projects run on 3 to 6 volts from AA batteries or a USB port, far below the roughly 50 volts where shock becomes a real bodily hazard, so the practical risks are burns, fires, and ruined components rather than electrocution — which is exactly why a direct, matter-of-fact tone works better here than an alarming one.

Picture a mentor briefing three new volunteers five minutes before the club's first electronics night. Rather than a lecture, the mentor hands each volunteer a laminated card and walks the group through it once, out loud, component in hand: "Never connect a battery directly across two wires with nothing in between — that's a short circuit, and it gets hot fast. Always check polarity on an LED before powering it. If a soldering iron is on the table, its stand is the only place it ever rests." That two-minute briefing, repeated verbatim at the start of every session, is the practical form this rule set takes in an actual club — a scenario the rest of this chapter's safety concepts unpack rule by rule.

Before you look at the full rule set, note that "short circuit," "static electricity," "battery safety," and "soldering safety" below are each one specific category of electrical safety rule — this section is the umbrella, and the next four sections give each category its own concrete detail and worked example.

#### Diagram: Electrical Safety Rules Poster

<iframe src="../../sims/electrical-safety-rules-poster/main.html" width="100%" height="560px" scrolling="no"></iframe>

<details markdown="1">
<summary>Electrical Safety Rules Poster</summary>
Type: infographic
**sim-id:** electrical-safety-rules-poster<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, four-panel comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Give a mentor a single, memorable checklist poster to display or hand out at the start of every hands-on session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a hands-on session about to begin, the learner identifies which safety rule applies to the materials on the table.

Image style: Flat poster, four panels in a 2x2 grid, each with a bold printed panel header baked into the image ("Circuits," "Batteries," "Static," "Soldering")

Image dimensions: 1000x800 (landscape)

Zones (4 panels, each with id, label, color, one-line summary, 3 bullet rules):
1. `circuits` — color #4A90D9 — "Build the circuit before you power it." Rules: never bridge the two battery terminals with a bare wire; check LED polarity before connecting power; disconnect power before changing any wire
2. `batteries` — color #F5A623 — "Treat batteries as small chemical devices, not toys." Rules: never puncture, crush, or short a battery pack; stop using a swollen or hot pack immediately; store loose batteries so terminals cannot touch metal
3. `static` — color #7ED6A5 — "Ground yourself before you touch a board." Rules: touch a grounded metal object before handling a microcontroller; avoid handling boards on carpet in dry weather; keep boards in anti-static bags when not in use
4. `soldering` — color #E67E22 — "The iron is always hot until proven otherwise." Rules: the iron only ever rests in its stand; never touch the tip or the joint right after soldering; work in a ventilated area

Interactive features: Click or hover any panel to enlarge it and reveal its full rule list in a detail overlay; explore mode only

Implementation: Interactive Infographic Overlay Guide (grid engine) — `grid-diagram.js` + `grid-overlay.css` render the four rectangular hover zones over the generated poster image; `data.json` holds the 4 zones per the overlay-grid-data-json-schema
</details>

### Short Circuit Hazard

A **short circuit** happens when electric current finds a path of very low resistance that bypasses the intended load — the resistor, LED, or motor a circuit is built to power — and flows almost unopposed between a power source's two terminals. Ohm's law explains why this matters: current equals voltage divided by resistance, so when resistance drops toward zero, the calculated current climbs toward levels a battery or wire was never designed to carry.

Consider a concrete worked example. A fresh AA battery pack supplies about 6 volts and can briefly deliver several amps if nothing limits the current. A normal LED circuit includes a resistor of around 220 ohms, which by Ohm's law limits current to roughly 6 volts / 220 ohms, or about 27 milliamps — a safe, LED-friendly amount. If a stray jumper wire instead connects the two battery terminals directly, the only resistance left is the wire's own tiny internal resistance, often under 1 ohm. The same 6 volts divided by 1 ohm predicts 6 amps — over 200 times the current the LED circuit was drawing. That excess current shows up as heat: wires warm quickly, battery packs can become uncomfortably hot, and in a worst case a fire hazard develops.

This is exactly the scenario the Electrical Safety Rules "Circuits" panel above warns against, and it is the single most common wiring mistake in a beginner club — usually caused by an extra jumper wire left connected across the power rails while another wire is moved.

#### Diagram: Normal Circuit vs. Short Circuit

<iframe src="../../sims/normal-circuit-vs-short-circuit/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Normal Circuit vs. Short Circuit</summary>
Type: infographic
**sim-id:** normal-circuit-vs-short-circuit<br/>
**Library:** Interactive Infographic Overlay (diagram.js, side-by-side comparison + numbered callouts)<br/>
**Status:** Specified

Purpose: Show why removing the resistor and LED from a circuit's current path causes a dangerous current spike, using the same numbers worked through in the prose above.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a circuit diagram, the learner explains why a low-resistance path produces a current spike compared to a normal, resistor-limited path.

Image style: Two side-by-side breadboard circuit illustrations — left labeled "Normal Circuit" (battery, resistor, LED, wire loop), right labeled "Short Circuit" (battery, bare wire loop, no resistor)

Image dimensions: 1200x600 (landscape)

Callouts (4 total): 1. "6V battery pack" on both illustrations; 2. "220-ohm resistor" on the normal circuit only, color #4A90D9; 3. "~27 mA (safe)" current readout on the normal circuit, color #2ECC71; 4. "~6 A (dangerous, gets hot)" current readout on the short circuit, color #E74C3C

Interactive features: Hover either current readout to reveal the Ohm's law calculation behind it; click either full illustration to toggle a heat-glow effect on the wire showing where the energy is being dissipated

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` + `style.css` render the two illustrations with hover-revealed calculation tooltips
</details>

### Static Electricity Precaution

**Static electricity precaution** refers to the habits that prevent an invisible buildup of electric charge on your body from damaging a sensitive electronic component when you touch it. Walking across a carpet, especially in dry weather, can build up thousands of volts of static charge on your skin — harmless to you, but easily strong enough to destroy the microscopic circuitry inside a microcontroller chip the instant you touch one of its pins.

The habit that prevents this is simple and worth demonstrating rather than just describing: before picking up a microcontroller board, touch a grounded metal object — a laptop's metal chassis, an unpainted metal table leg, or a dedicated grounding strap — for a second or two. That contact drains away any static charge safely before it can jump into the board. A mentor running a session in a dry, carpeted classroom in winter should make this touch-first habit part of every kit hand-out, the same way handing someone scissors point-first is simply how it's done, without needing to re-explain the reasoning every time.

Boards that are not actively in use should stay in the anti-static bags they shipped in, which are made from a slightly conductive plastic that spreads out any charge instead of letting it concentrate at one point.

Static electricity is easy for students to underestimate precisely because they cannot see it — the same small shock everyone has felt touching a metal doorknob after walking across a carpeted room in winter is more than enough charge to damage a chip, even though it barely registers to a person. Pointing out that familiar doorknob-shock feeling during a safety briefing tends to land better than describing volts and charge in the abstract, since every student in the room has already experienced the exact phenomenon being discussed.

#### Diagram: Static Electricity Precaution Checklist

<iframe src="../../sims/static-electricity-precaution-checklist/main.html" width="100%" height="480px" scrolling="no"></iframe>

<details markdown="1">
<summary>Static Electricity Precaution Checklist</summary>
Type: infographic
**sim-id:** static-electricity-precaution-checklist<br/>
**Library:** Interactive Infographic Overlay (checklist overlay, illustrated classroom scene + clickable hotspots)<br/>
**Status:** Specified

Purpose: Let a mentor mentally rehearse the touch-first habit against a realistic classroom scene before the first session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given an illustrated classroom scene, the learner identifies which surfaces are safe to touch before handling a board and which increase static risk.

Image style: Flat illustration of a classroom table scene: a carpeted floor, a student's hand, a microcontroller board in an anti-static bag, a metal table leg, and a plastic chair

Image dimensions: 1000x650 (landscape)

Hotspots (5 total, each with label, color, correct/incorrect status): 1. "Metal table leg" — green — safe to touch first; 2. "Anti-static bag" — green — correct storage; 3. "Carpeted floor" — amber — increases static buildup, not dangerous itself; 4. "Plastic chair after sliding" — amber — a common charge-building action; 5. "Bare board out of its bag" — red — should be avoided when not in use

Interactive features: Click each hotspot to reveal a one-sentence explanation and a green-check or amber-caution icon; a running "safety score" updates as the learner clicks all five

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` renders clickable hotspots with color-coded feedback over the generated illustration
</details>

### Battery Safety

**Battery safety** covers the handling, storage, and inspection practices that keep the batteries powering a club's kits from becoming a fire or chemical hazard. The AA and coin-cell batteries used in most beginner kits are low-risk when handled normally, but rechargeable lithium batteries found in some robot kits carry real fire risk if damaged, and every battery type carries some risk if short-circuited or physically abused.

A concrete worked example makes this concrete: before handing out a robot kit, a mentor should pick up its battery pack and check it the way you would check a piece of fruit before eating it — look for a swollen, warm, or misshapen pack, any smell of chemicals, or a punctured casing. A pack that fails any of those checks gets set aside immediately and never plugged in, because a damaged lithium battery can heat up rapidly and, in rare cases, ignite once it is put under load. Loose AA batteries in a supply bin should never touch each other terminal-to-terminal, since even ordinary alkaline cells can heat up if their positive and negative ends are bridged by another battery or a metal object — the same short-circuit principle from earlier in this chapter, just happening inside a bin instead of on a breadboard.

Rechargeable lithium packs deserve one further habit beyond storage and inspection: charging. A pack should only ever be charged with the specific charger sold for it, set on a hard, fireproof surface such as a metal tray or concrete floor rather than a carpet or wooden desk, and never left charging unattended overnight in a locked, empty room. None of this is meant to make rechargeable packs sound unusually dangerous in normal use — it is the same category of "small, sensible habit" as the touch-first rule for static electricity — but it is worth a mentor stating out loud the first time a club uses battery-powered robot kits rather than assuming it is obvious.

The table below compares the battery types a club is most likely to see and the one habit that matters most for each.

Now that the basic types are described, here is a quick-reference table your mentors can use during kit setup.

| Battery Type | Typical Voltage | Key Safety Habit |
|---|---|---|
| AA / AAA Alkaline | 1.5V each | Store so terminals cannot touch other batteries or metal |
| Coin Cell (CR2032) | 3V | Keep away from young children; never swallow risk |
| Rechargeable LiPo Pack | 3.7V per cell | Never charge unattended; discard if swollen or punctured |
| USB Power Bank | 5V output | Unplug before opening or modifying any connected device |

!!! mascot-warning "A swollen battery pack is a stop-work sign, not a maybe"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: a battery pack that looks even slightly puffy or feels warm to the touch should be set aside immediately and never plugged back in. This is one of the few club situations where the right response is to simply stop, not to troubleshoot further.

### Soldering Safety Basics

**Soldering safety basics** are the sequence of habits that make it possible to join wires with melted metal solder — using a soldering iron that reaches roughly 315 to 370 degrees Celsius — without a burn. Many beginner clubs skip soldering entirely and use breadboards instead, but clubs that do introduce it need a clear, repeatable safety sequence, since the iron itself is the only genuinely hot object most students will ever handle in this book.

Picture the correct sequence as three phases a mentor narrates out loud the first time: before, the iron warms up in a stand with its tip pointed away from anyone, and the work area has a window cracked or a fan running, since solder produces a thin smoke best not breathed directly. During, the iron only ever touches the joint being soldered — never a hand, never a table, never set down anywhere except its stand, even for a few seconds. After, a freshly soldered joint stays untouched for at least ten seconds to cool, since solder holds heat far longer than it looks like it does. That before-during-after structure is the whole rule set condensed into something even a first-time volunteer mentor can hold in memory.

Many clubs choose to skip soldering entirely in a student's early sessions and reserve it for older students working one-on-one with a mentor standing close by, precisely because it is the one activity in this chapter involving a genuinely hot tool rather than a low-voltage, cool-to-the-touch component. If skin ever does brush a hot tip or a freshly soldered joint, the correct first response is simple and immediate: cool the area under cool running water right away, and have a supervising adult assess whether further care is needed, rather than continuing the session as if nothing happened.

#### Diagram: Soldering Safety Workflow

<iframe src="../../sims/soldering-safety-workflow/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Soldering Safety Workflow</summary>
Type: workflow
**sim-id:** soldering-safety-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Sequence the before/during/after habits so a first-time mentor can rehearse the order, not just the individual rules.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a soldering task about to start, the learner sequences the correct safety steps before, during, and after making a joint.

Steps: 1. "Warm up iron in stand, ventilate area" (Before); 2. "Iron touches only the joint" (During); 3. "Return iron to stand immediately" (During); 4. "Wait 10 seconds before touching joint" (After); 5. "Iron off and cooled before storage" (After)

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation, e.g. `click step2 call showInfo("during-iron-touches-joint")`.

Visual style: Top-to-bottom Mermaid flowchart with three color-coded swimlane bands (Before/During/After) behind the step boxes

Implementation: Mermaid flowchart rendered inside a small wrapper page at the sim-id path, with a JavaScript `showInfo()` callback that populates an infobox beneath the diagram on any node click
</details>

## Electrical Fundamentals: Voltage and Current

Before building an actual circuit, a mentor needs two measurement vocabulary words that show up in every wiring diagram and every kit's instructions: voltage and current.

### Voltage Basics

**Voltage** is the electrical "push" that drives current through a circuit, measured in volts and created by a power source such as a battery or a USB port. A helpful comparison is water pressure in a hose: voltage is the pressure pushing water along, while the actual flow of water is closer to what electricians call current. A higher-voltage source pushes harder, but voltage alone says nothing about how much current will actually flow — that depends on what the voltage is pushing through, which is where resistance enters the picture later in this chapter.

A worked comparison makes the scale concrete. A single AA battery supplies 1.5 volts; four AA batteries wired end to end in a robot kit's battery holder add up to 6 volts; a USB port supplies a steady 5 volts; and a coin-cell watch battery supplies 3 volts. Most beginner-friendly microcontrollers, including the Raspberry Pi Pico used elsewhere in this book's project kits, expect logic-level voltages of either 3.3 or 5 volts — which is exactly why kit instructions are specific about battery count and never treat "more voltage" as automatically better.

"More voltage" is not automatically better because a microcontroller board is built to expect one specific range and can be permanently damaged the moment that range is exceeded — feeding a 5-volt-only board straight from a 9-volt battery, for example, is a common beginner mistake that ends a board's working life on its very first use. This is exactly why most kits either include a battery holder sized for the correct voltage or build in a small voltage regulator chip that quietly converts a higher incoming voltage down to a safe level before it ever reaches the microcontroller — a detail worth mentioning to curious students without turning it into its own lesson.

Now that voltage has concrete reference points, the table below organizes them for quick lookup during kit setup.

| Power Source | Voltage | Common Use in a Club |
|---|---|---|
| 1 AA battery | 1.5V | Rarely used alone; too low for most boards |
| 4 AA batteries in series | 6V | Robot kits, motor-driven projects |
| USB port or power bank | 5V | Most microcontroller boards |
| Coin cell (CR2032) | 3V | Small wearable or badge projects |

### Current Basics

**Current** is the actual rate of flow of electric charge through a circuit, measured in amps, and it is current — not voltage — that does the work of lighting an LED, spinning a motor, or, when uncontrolled, overheating a wire. Continuing the water analogy, current is the amount of water actually moving through the hose per second, which depends on both the pressure (voltage) pushing it and how open or restricted the hose is (resistance).

Those three quantities relate through one of the most useful equations in electronics.

#### Ohm's Law

\[ V = I \times R \]

where:

- \(V\) is voltage, measured in volts
- \(I\) is current, measured in amps
- \(R\) is resistance, measured in ohms

A worked example: a mentor wants to safely light an LED from a 5-volt USB source. The LED itself uses up about 2 volts of that supply once it is lit, leaving 3 volts that a resistor must absorb. If the mentor wants the current limited to a safe 20 milliamps (0.02 amps) for the LED, rearranging Ohm's law gives resistance equal to voltage divided by current: 3 volts / 0.02 amps = 150 ohms. That calculation — not guesswork — is exactly how the resistor value in the Blinking Light Circuit worked example later in this chapter gets chosen.

!!! mascot-encourage "The math gets easier with real numbers in front of you"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If Ohm's law feels like a formula from a textbook rather than something you'd reach for naturally, that's completely normal — most mentors need to run the calculator MicroSim below on two or three real circuits before it clicks. You've already handled harder unknowns than this one.

#### Diagram: Ohm's Law Current Calculator

<iframe src="../../sims/ohms-law-current-calculator/main.html" width="100%" height="482px" scrolling="no"></iframe>

<details markdown="1">
<summary>Ohm's Law Current Calculator</summary>
Type: microsim
**sim-id:** ohms-law-current-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/ohms-law-calculator

Purpose: Let a mentor plug in real supply-voltage and resistor values from a kit and see the resulting current before powering an actual circuit.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a supply voltage and a resistor value, the learner calculates the resulting current and judges whether it is safe for the connected LED.

Canvas layout: Left (60%) shows a simple circuit diagram (battery, resistor, LED) that visually brightens or dims as current changes; right (40%) holds sliders and the numeric readout

Interactive controls: Slider for supply voltage (1.5V-9V); slider for resistor value (10 ohms-1000 ohms); numeric display of calculated current in milliamps; color-coded safety readout (green under 20mA, amber 20-30mA, red above 30mA)

Default parameters: Supply voltage 5V, resistor 220 ohms (yields ~14mA, shown in green)

Behavior: Moving either slider instantly recalculates current using \(I = V / R\) and updates both the numeric readout and the LED brightness/safety color in the diagram

Implementation notes: p5.js canvas with two `createSlider()` controls; recompute on every `draw()` frame from current slider values
</details>

## Building Your First Circuit

With safety rules and the voltage/current vocabulary in place, the next five concepts are the physical parts and skills needed to build an actual circuit.

### Breadboard Basics

A **breadboard** is a reusable plastic board full of small spring-loaded holes, called tie points, that let you connect electronic components without soldering. Breadboard basics means understanding which holes are electrically connected to which, since that hidden wiring pattern — not the visible grid of holes — determines whether a circuit actually works.

Most breadboards share the same internal layout: two long power rail rows run along each edge, usually marked with a red plus line and a blue or black minus line, and every hole along a red line is connected to every other hole on that same line, all the way down the board. The wide middle section is organized into short columns of five holes each, split by a center gap; every hole within one five-hole column is electrically connected to the others in that same column, but not to the column next to it. A worked example: to power an LED, a mentor places the LED's two legs into two different five-hole columns, then uses a resistor to bridge one of those columns to the power rail — the resistor and the LED end up in the same current path even though they never touch each other directly, because the breadboard's internal metal strips do the connecting.

Full-size breadboards add one detail worth calling out before a student's first build: the center gap that splits the middle columns also splits each side's power rails into two separate, disconnected halves, so a wire run down the top rail on the left side does not automatically reach the right side of that same rail. A student who wires half a circuit and finds "nothing works" on the far side of the board has often simply forgotten this gap, which is exactly why the Jumper Wire concept later in this section includes bridging the two halves of a rail as one of its standard first moves. Smaller half-size breadboards, common in compact kits, skip this middle gap entirely and run each rail as one unbroken line.

#### Diagram: Breadboard Tie-Point Explorer

<iframe src="../../sims/breadboard-tie-point-explorer/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Breadboard Tie-Point Explorer</summary>
Type: microsim
**sim-id:** breadboard-tie-point-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/stem-robots/tree/main/docs/sims/breadboard-layout-explorer

Purpose: Let a mentor click any hole on a drawn breadboard and instantly see every other hole it is electrically connected to.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a labeled breadboard diagram, the learner identifies which holes are electrically connected to a clicked hole.

Visual elements: A full-size breadboard drawing with two power rails (top and bottom) and the central five-hole columns, rendered at real proportions

Interactive controls: Click any hole to highlight, in one color, every hole tied to it; a "Show all rails" toggle that highlights both power rails at once in a second color

Default parameters: No hole selected on load; clicking any hole triggers the highlight

Behavior: On click, redraw the board with the clicked hole's full connected group highlighted and a text label reading either "Power rail" or "Column {n}"

Implementation notes: p5.js grid rendered from a 2D array encoding each hole's connection-group id; click detection maps mouse coordinates to the nearest hole
</details>

### Jumper Wire

A **jumper wire** is a short, flexible wire with a connector on each end, used to carry a connection between two breadboard holes, or between a breadboard and a component like a microcontroller pin. Jumper wires come with two connector styles: a male end is a solid pin that plugs into a breadboard hole, while a female end is a small socket that plugs onto a pin sticking out of a board or component.

A worked example: connecting a breadboard's bottom power rail to its top power rail — necessary because the two rails are not connected to each other by default — takes one male-to-male jumper wire, plugged into any hole on each rail. Connecting that same breadboard to a microcontroller's labeled output pin, which is a protruding pin rather than a hole, takes a male-to-female wire instead, with the female end pushed onto the pin and the male end pushed into a breadboard hole.

Most experienced mentors also settle on a simple color convention early and stick to it across every kit in the club — red wires for the positive power rail, black or blue for ground, and any other color for signal wires such as a button or sensor connection. That convention costs nothing to adopt but saves real time later, since a student trying to find a wiring mistake can scan for "the one wire that isn't the right color" instead of tracing every connection from scratch. Keeping wire length reasonably close to the actual distance between two points also matters more than it seems: a long wire looped loosely across a crowded breadboard is far more likely to get snagged and pulled loose mid-session than a short one run directly between its two holes.

Now that both connector styles are defined, the table below compares them directly.

| Wire Type | Connects To | Common Use |
|---|---|---|
| Male-to-Male | Breadboard hole to breadboard hole | Linking two points on the same or different breadboards |
| Male-to-Female | Breadboard hole to a protruding pin | Connecting a microcontroller pin to a breadboard |
| Female-to-Female | Pin to pin | Connecting two microcontroller boards directly, no breadboard |

### Resistor Basics

A **resistor** is a component that limits the amount of current flowing through a circuit by a fixed, known amount, measured in ohms — the same quantity from Ohm's law earlier in this chapter. Rather than printing the resistance value in text, most resistors use a sequence of four or five colored bands to encode it, since printed numbers would be too small to read reliably on a component only a few millimeters long.

A worked example: a resistor with bands colored brown, black, red, then gold reads as 1,000 ohms (1 kilohm), where brown and black give the first two digits (1 and 0), red gives the number of zeros to add (two zeros), and gold indicates the value is accurate within 5 percent. Rather than memorizing all ten color-to-digit mappings before your first session, most mentors get faster results by decoding one resistor with the calculator below, then confirming the answer with the multimeter skill covered later in this chapter — trust the tool first, build the memorized skill over a few sessions.

A resistor's job is not limited to protecting a single LED. The same current-limiting principle also protects a microcontroller's input pins, which is why the pull-down resistor described later in this chapter's Push Button Switch section is a resistor doing exactly the same job in a different role — keeping current, and therefore voltage, at a safe and predictable level. Club kits typically stock only a handful of common values, most often 220 ohms and 1 kilohm, since those two values cover the large majority of beginner LED and pull-down circuits without needing a full parts drawer of every possible resistance.

!!! mascot-tip "Verify a color code with a measurement, especially on older stock"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: resistor bands can look faded or hard to distinguish under classroom lighting, especially brown versus red. When a value matters — like the 150-ohm resistor from the Ohm's law example — measure it directly with a multimeter instead of trusting your eyes on the color bands alone.

#### Diagram: Resistor Color Code Calculator

<iframe src="https://dmccreary.github.io/learning-micropython/sims/resistor-color-code-calculator/main.html" width="100%" height="542px" scrolling="no"></iframe>

[Run the Resistor Color Code Calculator MicroSim fullscreen](https://dmccreary.github.io/learning-micropython/sims/resistor-color-code-calculator/main.html){ .md-button }

<details markdown="1">
<summary>Resistor Color Code Calculator (reused MicroSim)</summary>
Type: microsim
**sim-id:** resistor-color-code-calculator<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/resistor-color-code-calculator/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/resistor-color-code-calculator

Reused from the MicroSim catalog (WHAT match score 0.81). Learning objective: Given a resistor's colored bands, the learner calculates its resistance value using the standard color-code table (Apply).
</details>

### LED Basics

An **LED**, short for light-emitting diode, is a component that produces light when current flows through it in one direction only, and is damaged or simply stays dark if connected backward. Because direction matters, every LED has two visibly different legs: the longer leg is the anode, which connects toward the positive side of a circuit, and the shorter leg is the cathode, which connects toward the negative side; a small flat edge on the LED's plastic dome also marks the cathode side for identification once the legs have been trimmed or bent.

A worked example: a student holding an LED with legs of clearly different lengths orients the longer leg toward the resistor-fed positive column of the breadboard and the shorter leg toward the negative power rail. Powering the circuit lights the LED; reversing the two legs simply leaves it dark, which is a safe and reversible mistake as long as the current-limiting resistor from earlier is still in the circuit.

Not every LED needs the exact same resistor value, because different LED colors have different forward voltages — the voltage the LED itself uses up once lit. A red LED typically has a forward voltage near 2 volts, matching the 150-ohm calculation worked out earlier in Current Basics, while a blue or white LED can have a forward voltage closer to 3 volts, which leaves less voltage for the resistor to absorb and calls for a smaller resistance to hit the same safe current. This is a good moment for a mentor to re-run the Ohm's Law Current Calculator MicroSim with a different LED color in mind, rather than assuming one resistor value works for every LED in the kit box.

#### Diagram: LED Anatomy

<iframe src="../../sims/led-anatomy/main.html" width="100%" height="480px" scrolling="no"></iframe>

<details markdown="1">
<summary>LED Anatomy</summary>
Type: infographic
**sim-id:** led-anatomy<br/>
**Library:** Interactive Infographic Overlay (diagram.js, callout engine)<br/>
**Status:** Specified

Purpose: Let a learner identify anode, cathode, and the flat-edge marking on a zoomed illustration of a real LED before handling one.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a zoomed illustration of an LED, the learner identifies the anode, cathode, and flat-edge marking used to orient it correctly.

Image style: Close-up flat illustration of a single 5mm LED, legs extended, with a visible length difference between the two legs and a flat edge on the dome

Image dimensions: 800x600 (landscape)

Callouts (4 total): 1. "Anode (longer leg)" color #4A90D9; 2. "Cathode (shorter leg)" color #E67E22; 3. "Flat edge" on the dome, color #9B59B6; 4. "Light-emitting dome" color #F5A623

Interactive features: Hover or click each callout to reveal a one-sentence explanation; a "Flip It" button shows the same LED reversed so learners practice recognizing orientation from either side

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` + `style.css` render numbered markers over the generated LED illustration
</details>

### Blinking Light Circuit

A **blinking light circuit** combines a power source, a resistor, and an LED with a microcontroller's digital output pin, switching the LED on and off in a repeating pattern under program control. This is the traditional first physical computing project in nearly every electronics course, because it exercises every concept covered so far — voltage, current, resistor selection, LED polarity, and breadboard wiring — in one small, visibly working build.

Building it step by step: place the LED across two breadboard columns with its longer anode leg on the side that will receive power; place the 150-ohm resistor (calculated earlier from Ohm's law) between the anode's column and a jumper wire running to the microcontroller's output pin; connect the LED's cathode column to the board's ground rail with a second jumper wire. Once wired, code on the microcontroller turns the output pin on and off, on a timer — commonly half a second on, half a second off — producing the blink.

!!! mascot-thinking "A circuit only works when the loop is completely closed"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that current has to travel in an unbroken loop — out of the power source, through the resistor, through the LED, and all the way back to the source's other terminal. Leave any single connection open anywhere in that loop, and the whole circuit goes dark, even if every other wire is perfect.

#### Diagram: Blinking LED Breadboard Circuit

<iframe src="../../sims/blinking-led-breadboard-circuit/main.html" width="100%" height="560px" scrolling="no"></iframe>

<details markdown="1">
<summary>Blinking LED Breadboard Circuit</summary>
Type: microsim
**sim-id:** blinking-led-breadboard-circuit<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/breadboard

Purpose: Show an animated, current-flow view of a complete blinking-LED circuit built on a real breadboard layout.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a breadboard, resistor, LED, and jumper wires, the learner demonstrates how they combine into a working blinking-light circuit.

Visual elements: Realistic breadboard drawing with an LED, one resistor, two jumper wires, and animated current-flow dots moving along the completed loop whenever the circuit is closed and the simulated output pin is HIGH

Interactive controls: Slider for blink interval (100ms-2000ms); toggle switch simulating "output pin HIGH/LOW"; a "break the loop" button that disconnects one jumper wire to show the LED going dark

Default parameters: Blink interval 500ms, loop intact, output cycling automatically

Behavior: While the loop is intact, the LED brightens and current-flow dots animate whenever the output is HIGH; clicking "break the loop" removes one wire and the LED stays dark regardless of output state, reinforcing the closed-loop requirement

Implementation notes: p5.js canvas rendering breadboard geometry from a coordinate table; animated dots along a path array; `setInterval`-style timing using `millis()`
</details>

## Reading Input and Producing Output

A blinking circuit runs on its own timer, but most physical computing projects also need to react to the outside world — a button press, a sensor reading — and produce more than one kind of output. The next five concepts describe the two signal types every input or output falls into: digital and analog.

### Push Button Switch

A **push button switch** is a component that closes a circuit connection while pressed and opens it again when released, giving a program a simple, physical way to detect a human action. Unlike a toggle switch that stays in whichever position you leave it, a push button always returns to its resting state on its own once you let go.

A worked example: wiring a push button into a breadboard circuit typically pairs it with a resistor connected to ground, called a pull-down resistor, so that the connected input pin reads a clear, defined LOW value when the button is not pressed, rather than an unpredictable "floating" value. Pressing the button connects that same pin directly to the positive power rail, pulling the reading to a clear HIGH. Without the pull-down resistor, an unpressed button's pin can drift between HIGH and LOW unpredictably, which is a common source of a beginner circuit that seems to "randomly" trigger on its own.

Some kits wire the same idea in reverse, using a pull-up resistor connected to the positive rail instead, so the pin reads HIGH when the button is not pressed and LOW when it is. Either approach is correct as long as the mentor and the code agree on which one is in use, since reading the wrong logic — expecting HIGH-when-pressed on a pull-up circuit, for instance — is a frequent source of a button that seems to work backward. One more real-world quirk worth knowing before a first session: a mechanical button's metal contacts can briefly vibrate and register several rapid presses for a single physical push, an effect called switch bounce, which is why many beginner projects add a short pause in code right after detecting a press rather than treating every reading as a brand-new event.

#### Diagram: Push Button Digital Input Circuit

<iframe src="../../sims/push-button-digital-input-circuit/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Push Button Digital Input Circuit</summary>
Type: microsim
**sim-id:** push-button-digital-input-circuit<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner press a simulated button and watch the connected input pin's reading change in real time, including what happens without a pull-down resistor.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a push button wired with a pull-down resistor, the learner demonstrates how pressing and releasing it changes a digital input reading between HIGH and LOW.

Visual elements: A drawn breadboard circuit with a push button, a pull-down resistor, and a labeled input-pin readout box showing "HIGH" or "LOW"

Interactive controls: A large clickable button graphic the learner can press and hold; a toggle to remove the pull-down resistor and observe an unstable, flickering reading instead of a clean LOW

Default parameters: Pull-down resistor present, reading starts at LOW

Behavior: Pressing the button graphic changes the readout to HIGH instantly and back to LOW on release; removing the pull-down resistor causes the LOW reading to flicker randomly when not pressed

Implementation notes: p5.js mouse-press detection tied to the button graphic; simple state variable for pin reading; randomized flicker effect when pull-down is toggled off
</details>

### Digital Input

**Digital input** is a signal read by a microcontroller that has only two possible states, HIGH or LOW, corresponding to a voltage near the supply voltage or near zero volts. The push button circuit above is the most common digital input example in a beginner club, but any sensor that only reports "detected" or "not detected" — a simple tilt switch, for instance — also produces a digital input.

The key idea to hold onto is the word "only": there is no in-between reading for a digital input, unlike the continuous range covered under analog input below. A worked example makes the two-state nature concrete: a program reading the push button's pin sees exactly one of two values on every check, never a partial or fractional reading — either the button is pressed (HIGH) or it is not (LOW), full stop.

Underneath that clean two-value description, a microcontroller is actually still reading a real voltage and rounding it into one of the two categories using a threshold. On a board running at 3.3 volts, a reading below roughly 0.8 volts is treated as LOW and a reading above roughly 2.0 volts is treated as HIGH, with the narrow band in between simply undefined and best avoided by good wiring — exactly the voltage vocabulary from earlier in this chapter, now put to direct use in deciding what "digital" actually means at the hardware level.

Now that both states are defined, the chart below shows what that two-state signal actually looks like over time as a button is pressed and released.

#### Diagram: Digital Signal HIGH/LOW Chart

<iframe src="../../sims/digital-signal-high-low-chart/main.html" width="100%" height="440px" scrolling="no"></iframe>

<details markdown="1">
<summary>Digital Signal HIGH/LOW Chart</summary>
Type: chart
**sim-id:** digital-signal-high-low-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Show a digital input's voltage-over-time trace as a clean step pattern, contrasting it with the smooth curve used later for analog input.

Chart type: Line chart (step-interpolation)

X-axis: Time (seconds, 0-10)

Y-axis: Voltage (0V to 5V)

Data series: One series showing voltage jumping instantly between 0V (button released) and 5V (button pressed) at five sample press/release events across the 10-second window

Title: "Digital Input Voltage Over Time"

Interactive features: Hovering any point on the step line reveals the exact voltage and HIGH/LOW label in a tooltip; a "press button" simulated button beneath the chart adds a live new step event to the right edge of the chart when clicked

Color scheme: Blue step line on a light background; HIGH segments shaded lightly to distinguish from LOW segments

Implementation: Chart.js line chart configured with `stepped: true`; click handler appends a new data point pair to simulate a live press event
</details>

### Digital Output

**Digital output** is a signal a microcontroller sends out that also has only two possible states, HIGH or LOW, used to turn something fully on or fully off. The blinking LED circuit earlier in this chapter is a digital output example: the microcontroller's pin alternates between HIGH, which lights the LED, and LOW, which turns it off, with nothing in between.

A worked example: the same output pin used for the blinking LED could instead trigger a small buzzer or a relay switching a larger device — the code concept is identical in every case, since a digital output always answers only one question: on, or off?

There is an important limit worth teaching alongside this concept: a microcontroller pin can typically source only a small amount of current directly, often no more than about 20 to 30 milliamps, which is comfortably enough to light one LED through a current-limiting resistor but nowhere near enough to run a motor or a bright display directly. Driving anything more demanding than an LED means using the digital output pin to switch a separate component — a transistor or a relay — which in turn switches the larger device's own, separately supplied power. Skipping that intermediate step and wiring a motor straight to a microcontroller pin is a common way beginners recreate the short-circuit-like overcurrent hazard described earlier in this chapter, just with a motor's demand for current standing in for a bare wire.

A quick worked check shows why this limit matters even for something as ordinary as two LEDs. Two LEDs, each drawing 20 milliamps through its own resistor but both wired to the same output pin, would together ask that single pin for 40 milliamps — beyond the roughly 20 to 30 milliamp budget most beginner boards allow per pin. The practical fix is simple once the limit is understood: give each LED its own separate output pin, each with its own resistor sized the same way the Ohm's law worked example calculated earlier, rather than doubling up on one pin and quietly exceeding its rating.

Now that both digital input and digital output are defined, the table below organizes the two states with a matching example of each.

| Signal | State | LED Circuit Example |
|---|---|---|
| Digital Output HIGH | On / full power | LED lit |
| Digital Output LOW | Off / no power | LED dark |
| Digital Input HIGH | Detected / pressed | Button pressed |
| Digital Input LOW | Not detected / released | Button released |

### Analog Input

**Analog input** is a signal read by a microcontroller that can take on a continuous range of values, not just two, typically reported as a number across a wide scale such as 0 to 1023. A potentiometer — a knob or slider that changes resistance as it turns — is the classic analog input component, since a person can rest it anywhere along its range, not just fully open or fully closed.

!!! mascot-thinking "Digital asks 'yes or no,' analog asks 'how much'"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Think of it like this: a digital input is a light switch — only on or off — while an analog input is a dimmer dial, capable of resting at any point along a smooth range. That single distinction is the mental shift this whole section is built around, and it explains why a potentiometer needs a completely different kind of reading than a push button does.

A worked example: turning a potentiometer knob a quarter of the way produces a reading of roughly 256 out of 1023; turning it halfway produces roughly 512; fully open produces the maximum 1023. Unlike the push button's clean two-value output, every position along that turn produces its own distinct number.

This is exactly the kind of input this book's Moving Rainbow project, referenced in the course description, uses to let a student dial in a color or brightness by hand rather than only choosing between a fixed set of preset options. A raw 0-to-1023 reading rarely maps directly onto whatever it is controlling, so code typically rescales it first — turning that same range into, say, a 0-to-255 brightness value — using the same kind of proportional mapping the PWM section below relies on to convert a percentage into an on-off timing pattern.

#### Diagram: Potentiometer Analog Input Explorer

<iframe src="../../sims/potentiometer-analog-input-explorer/main.html" width="100%" height="447px" scrolling="no"></iframe>

<details markdown="1">
<summary>Potentiometer Analog Input Explorer</summary>
Type: microsim
**sim-id:** potentiometer-analog-input-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/adc-potentiometer-explorer

Purpose: Let a learner turn a simulated potentiometer knob and watch the continuous analog reading change in real time, contrasted against the two-value digital reading.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a potentiometer's knob position, the learner demonstrates how turning it produces a proportional analog input reading across a continuous range.

Visual elements: A drawn rotary knob the learner can drag, plus a numeric readout (0-1023) and a filling bar graph that rises and falls with the reading

Interactive controls: Draggable knob (or equivalent slider); numeric readout; a "compare to digital" toggle that overlays a two-state HIGH/LOW indicator for contrast

Default parameters: Knob starts at center position, reading near 512

Behavior: Dragging the knob updates the numeric readout and bar graph continuously and smoothly, with no snapping between fixed values

Implementation notes: p5.js `map()` function converts knob angle directly to the 0-1023 reading range; draggable knob using mouse-drag detection
</details>

### Analog Output

**Analog output** is a signal that appears to a connected device as a continuously variable level, such as a partially dimmed LED, even though most microcontrollers actually produce it by switching a digital output on and off extremely fast — a technique called pulse-width modulation, or PWM. The proportion of time the signal spends HIGH during each rapid on-off cycle, called the duty cycle, determines how bright, fast, or loud the connected output appears.

A worked example: an LED driven with a 25 percent duty cycle — HIGH for one quarter of each cycle and LOW for the rest — appears noticeably dim to the human eye, because the switching happens far faster than the eye can perceive individual flickers, and the eye instead averages the brightness over time. Raising the duty cycle to 75 percent makes the same LED appear noticeably brighter, even though the pin is still only ever fully on or fully off at any single instant — the appearance of a smooth in-between brightness is really an average of speed, not a true in-between voltage.

Switching speed matters as much as duty cycle does. A microcontroller's PWM output typically switches many hundreds or thousands of times per second — fast enough that the human eye perceives a smooth brightness rather than a flicker. If that same duty-cycle pattern ran only a few times per second instead, students would see the LED visibly stutter on and off rather than dim smoothly, which is a useful demonstration in its own right: it shows that the "analog" appearance depends entirely on switching faster than human perception, not on any special analog hardware inside the LED itself.

#### Diagram: PWM Analog Output Brightness Explorer

<iframe src="../../sims/pwm-analog-output-brightness-explorer/main.html" width="100%" height="482px" scrolling="no"></iframe>

<details markdown="1">
<summary>PWM Analog Output Brightness Explorer</summary>
Type: microsim
**sim-id:** pwm-analog-output-brightness-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/pwm

Purpose: Show how adjusting PWM duty cycle changes perceived LED brightness, and reveal the actual fast on-off switching underneath the smooth appearance.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a duty-cycle percentage, the learner explains how the underlying on-off switching pattern produces a perceived brightness level.

Visual elements: A simulated LED that appears to dim or brighten smoothly; beneath it, a zoomed-in, slowed-down waveform showing the actual on-off square-wave pattern at the current duty cycle

Interactive controls: Slider for duty cycle (0%-100%); a "slow motion" toggle that slows the waveform enough to see individual on/off pulses

Default parameters: Duty cycle 50%, normal speed

Behavior: Moving the duty-cycle slider instantly updates both the LED's perceived brightness and the waveform's on/off proportions; the slow-motion toggle reduces switching speed so learners can see the discrete pulses that produce the smooth appearance

Implementation notes: p5.js canvas with the LED rendered as a circle whose fill opacity maps to duty cycle for the "perceived" view, and a literal square-wave line plot for the "actual" view
</details>

## Measuring What You Built

### Multimeter Usage

A **multimeter** is a handheld tool that measures electrical properties — most commonly voltage, resistance, and continuity — letting a mentor verify a circuit's behavior directly instead of guessing from a diagram. Continuity mode, specifically, tells you whether two points are electrically connected at all, by beeping when resistance between its two probes is very low.

A worked example ties this chapter's safety and fundamentals concepts together in one practical habit: before powering a new circuit for the first time, set the multimeter to continuity mode and touch its two probes to the circuit's positive and negative power rail. A beep at this stage means something is short-circuited — exactly the hazard described earlier in this chapter — and the circuit should not be powered until the short is found and fixed. Once a circuit passes that check, switching the multimeter to voltage mode and measuring across the resistor confirms the actual voltage drop matches the Ohm's law prediction from earlier, and switching to resistance mode against an unpowered resistor double-checks its color-code value directly, resolving any doubt left over from hard-to-read bands.

A multimeter's voltage mode also earns its place in the Battery Safety routine from earlier: touching the probes directly across a battery pack's terminals reads its actual remaining voltage, which is the most reliable way to tell a genuinely dead pack from one that merely looks fine, well before a student wires it into a circuit and wonders why nothing lights up.

#### Diagram: Multimeter Usage Simulator

<iframe src="../../sims/multimeter-usage-simulator/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Multimeter Usage Simulator</summary>
Type: microsim
**sim-id:** multimeter-usage-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/automating-instructional-design/tree/main/docs/sims/ohms-law-simulator

Purpose: Let a learner select a multimeter mode and touch simulated probes to a simple circuit, practicing the pre-power safety check described in the worked example.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a simple breadboard circuit, the learner demonstrates how to use a multimeter's continuity, voltage, and resistance modes to verify the circuit before and after powering it.

Visual elements: A drawn multimeter with a mode dial (Continuity/Voltage/Resistance) and two draggable probe tips; a simple breadboard circuit (battery, resistor, LED) as the measurement target, including a "hidden short" toggle for practice

Interactive controls: Mode dial (click to rotate through three modes); draggable red and black probes; a "hidden short" toggle a mentor can enable to create a practice scenario

Default parameters: Mode set to Continuity, probes unplaced, no hidden short

Behavior: Touching both probes to the power rails in Continuity mode beeps and shows "0 ohms — SHORT" if the hidden-short toggle is on, or "open circuit" if not; Voltage mode across the resistor shows the Ohm's-law-predicted voltage drop; Resistance mode on the unpowered resistor shows its color-code value

Implementation notes: p5.js canvas with draggable probe objects using distance-based "contact" detection against defined circuit-node coordinates; mode-dependent readout logic
</details>

## Chapter Summary

Physical computing turns code into something students can see, hear, and press — but it starts responsibly, with electrical safety rules for circuits, batteries, static electricity, and soldering treated as a prerequisite, not an afterthought. From there, voltage and current explain what a circuit is doing, breadboards, jumper wires, resistors, and LEDs are the physical vocabulary for building one, and digital and analog input and output describe every signal a project will sense or produce. A multimeter closes the loop, letting a mentor verify a circuit's safety and behavior directly rather than trusting a diagram alone.

!!! mascot-celebration "You can now safely build and verify a real circuit"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built the foundation for every physical computing project in this book — safety rules, breadboards, resistors, LEDs, digital and analog signals, and how to check your work with a multimeter. That's a genuinely large first step, and every future project in this track builds directly on it.
