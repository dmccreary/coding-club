---
title: Robots, USB Basics, and Electronics Workshop Skills
description: Covers assembling table and collision-avoidance robots with integrated sensors and motors, USB cable and connector types, power supply selection, and the everyday workshop skills of storage, identification, wiring, troubleshooting, and safe disposal.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 05:30:37
metadata:
  ibook:
    version: 1.10
---

# Robots, USB Basics, and Electronics Workshop Skills

## Summary

This chapter covers assembling and controlling floor and table robots, including collision avoidance, before turning to the practical workshop skills every mentor needs: USB connector types, circuit troubleshooting, and reading a datasheet. It closes with safe handling and disposal of electronic components. You will be able to assemble a basic robot and troubleshoot a non-working circuit.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Table Robot | 18 |
| Collision Avoidance Robot | 17 |
| Robot Sensor Integration | 16 |
| Robot Motor Control | 15 |
| USB Cable Basics | 14 |
| USB A Connector | 13 |
| USB C Connector | 12 |
| Power Supply Selection | 11 |
| Component Storage System | 10 |
| Wire Stripping Technique | 9 |
| Prototyping Board | 8 |
| Circuit Troubleshooting | 7 |
| Component Identification | 6 |
| Datasheet Reading | 5 |
| Electronics Vocabulary | 4 |
| Safe Disposal Of Electronics | 3 |
| Static Safe Handling | 2 |
| Component Testing Procedure | 1 |

## Prerequisites

This chapter builds on concepts from:

- [16. Physical Computing and Electrical Safety Basics](../16-physical-computing-safety/index.md)
- [17. Sensors, Displays, Motors, and Robot Chassis](../17-sensors-displays-motors/index.md)

---

Chapter 17 gave you the individual parts — sensors, displays, motors, and the chassis they mount to. This chapter shows how those parts come together into a working robot, then steps back from robotics entirely to cover the everyday workshop skills a mentor leans on at every single session: choosing the right USB cable, organizing a bin of loose components, stripping a wire cleanly, tracking down a circuit that refuses to work, and retiring a broken part safely. None of these skills are exciting on their own, but a club that has them running smoothly loses far less session time to fumbling with cables or hunting for a missing resistor.

!!! mascot-welcome "From Loose Parts to a Working Robot — and a Workshop That Runs Itself"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great — this chapter takes everything from Chapter 17 and turns it into an actual moving, sensing robot, then hands you the everyday workshop habits that keep a club running smoothly session after session. By the end you'll know how to wire up a collision-avoidance robot, pick the right USB cable and power supply, and troubleshoot a dead circuit instead of guessing. You're really wired for this!

## From Robot Chassis to Working Robot

### Table Robot

A **table robot** is a small robot chassis built to operate entirely within the boundary of a desk or table, matching the footprint distinction Chapter 17 introduced between floor robots and table robots. Because a table robot never leaves a roughly two-foot-square work surface, its designers trade the wide-open driving room of a floor robot for a smaller motor, a lighter chassis, and — most importantly for a crowded classroom — a build that one student can run at their own seat without bumping into a neighbor's project.

Typical table robot builds share a few features:

- A compact two-wheel differential-drive chassis, matching Chapter 17's turning technique at a smaller scale.
- A downward-facing line sensor or a short-range distance sensor tuned to the table's own edge, not a distant wall.
- A build small enough that one student can test code without ever leaving their seat.

A worked example shows why that matters: picture a club running six simultaneous robot-building stations on a single long table, one student per station. A floor robot at every station would force students to clear a driving lane and take turns, since two floor robots meeting head-on can collide or tangle wiring; table robots let all six students test their code at the same time, each confined to the small circle in front of them. A mentor planning a six-student session with only thirty minutes of hands-on time reaches for table robots specifically because they multiply how many students can be actively testing code at once — not because a table robot is inherently "better" than a floor robot.

### Collision Avoidance Robot

A **collision avoidance robot** is a mobile robot that continuously checks a distance sensor's reading and changes its motor behavior automatically whenever an obstacle gets too close, rather than relying on a student pressing buttons to steer around it. It is the single most common first "real robot" project a club builds, because it needs only one sensor, two motors, and a chassis to produce behavior an entire room of students can immediately see working.

A worked example ties the whole loop together end to end:

- The robot reads its ultrasonic distance sensor (Chapter 17) roughly every 100 milliseconds.
- While the reading stays above 20 centimeters, both drive motors keep running forward at equal speed.
- The instant a reading drops to 20 centimeters or below, both motors stop, reverse briefly, then spin the robot about 90 degrees using the differential-drive turning technique — driving the two wheels at equal speed in opposite directions.
- The robot resumes forward motion and the loop repeats.

Every number in that sequence — 20 centimeters, 100 milliseconds — is a tunable threshold, not a fixed law of physics; a robot in a cramped classroom often needs a larger stopping distance than the same code running in an open gym. A mentor coaching a student through a collision-avoidance robot that will not stop soon enough usually finds one of two causes: either the sensor's reading loop runs too slowly to catch a fast-approaching wall, or the stopping-distance threshold was copied from a tutorial written for a much larger space. Both are fixable in code, not hardware, which is exactly why this project rewards patient debugging over swapping parts. The diagram below lets you adjust both of those settings yourself and watch the loop respond.

#### Diagram: Collision Avoidance Robot Control Loop

<iframe src="../../sims/collision-avoidance-control-loop/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Collision Avoidance Robot Control Loop</summary>
Type: microsim
**sim-id:** collision-avoidance-control-loop<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/collision-avoidance-robot

Purpose: Let a learner adjust the stop-distance threshold and sensor-polling interval from the worked example above and watch a simulated robot's sense-decide-act loop respond in real time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given an adjustable stop-distance threshold and an approaching obstacle, the learner demonstrates how a collision-avoidance robot's sensor reading, motor decision, and turning behavior work together as one loop.

Canvas layout: Left (65%) shows a top-down view of a small two-wheel robot driving toward a movable wall inside a bounded arena; right (35%) shows the current distance reading, the stop-distance threshold slider, and a text readout of the robot's current state (Driving Forward, Stopping, Reversing, Turning).

Visual elements: Robot icon with a forward-facing distance-sensor cone; a draggable wall/obstacle; a live numeric distance readout; a state-machine label showing the robot's current behavior.

Interactive controls: Slider for stop-distance threshold (5cm-50cm); slider for sensor-polling interval (50ms-500ms); draggable obstacle position; "Reset" button.

Default parameters: Stop-distance threshold 20cm, polling interval 100ms, obstacle starting 150cm away and drifting slowly closer.

Behavior: As the obstacle approaches, the distance readout counts down live; when the reading crosses the threshold, the robot's state label switches to Stopping, then Reversing, then Turning, then back to Driving Forward, matching the four-step behavior from the worked example. A very short polling interval combined with a fast-approaching obstacle can demonstrate a near-miss if the threshold is set too low.

Implementation notes: p5.js canvas with a simple state machine (DRIVE, STOP, REVERSE, TURN) driven by a simulated distance value that decreases each frame based on obstacle position; slider-controlled threshold and polling interval directly gate the state transitions; canvas and controls resize responsively to the container width.
</details>

### Robot Sensor Integration

**Robot sensor integration** is the step where a robot's code actually reacts to a sensor's reading, rather than simply printing that reading to a screen for a human to read. A worked example distinguishes the two: a student who wires up a distance sensor and writes only `print(distance)` has successfully wired the sensor, but has not integrated it, since nothing in the robot's behavior changes based on that number. Integration is the added step — `if distance < 20: stop_motors()` — the entire difference between a sensor that is merely present on the robot and one that is actually driving its behavior.

A more advanced worked example shows why integration gets harder as a robot gains a second sensor. A robot combining a floor-facing light sensor for line-following with a forward-facing distance sensor for obstacle avoidance needs its code to decide which sensor wins when both fire at once. A mentor helping a student write `if distance < 20: avoid_obstacle() elif line_sensor_off_track(): follow_line() else: drive_forward()` is teaching the student that sensor integration is really about establishing a priority order among competing readings, not simply wiring more sensors onto the same chassis.

### Robot Motor Control

**Robot motor control** is the code layer that turns a decision — "turn right," "back up," "stop" — into the actual speed and direction values sent to each drive motor, closing the loop that robot sensor integration opens. A worked example: a mentor helping a student build a reusable `drive(left_speed, right_speed)` function, where each argument ranges from -100 (full reverse) to 100 (full forward), turns every future robot behavior into a one-line call. Driving straight becomes `drive(70, 70)`; a gentle right turn becomes `drive(70, 40)`, since the left wheel spins faster than the right; a sharp spin in place becomes `drive(60, -60)`, matching the equal-and-opposite differential-drive spin from Chapter 17.

Writing motor control as one shared function, instead of scattering raw H-bridge pin commands throughout a project's code, pays off the first time a student changes chassis: swapping in a robot with faster motors means adjusting the speed scaling inside `drive()` once, rather than hunting down and rewriting every place in the code that used to reference a motor pin directly.

!!! mascot-thinking "A Working Robot Is Just the Loop, Running Fast"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that a collision-avoidance robot is not a new idea at all — it's the sense-process-act loop from Chapter 16, just running many times a second. Robot sensor integration is the "sense" and "process" half, and robot motor control is the "act" half; once you see the loop underneath, any new robot behavior is just a new rule inside the same cycle.

## USB Cables, Connectors, and Power

### USB Cable Basics

A **USB cable** — Universal Serial Bus — is a standardized cable that carries both electrical power and digital data between two devices over the same set of wires, which is why the same cable that charges a phone can also transfer files from it. Every USB cable follows a version standard that sets its maximum data transfer speed and, critically for a club's electronics projects, the maximum current and voltage it can safely carry.

A worked example a mentor runs into often: a student's Raspberry Pi Pico appears completely dead when connected to a laptop with a USB cable pulled from a junk drawer, even though the same cable charges a phone just fine. Many bargain USB cables, especially ones bundled with cheap power banks, wire only the power pins and skip the two data pins entirely to save manufacturing cost — perfectly fine for charging a phone, useless for programming a microcontroller that needs both power and a data connection at once. The fix is not a hardware problem with the Pico at all; it's swapping in a cable known to carry data, which is why a well-stocked club keeps a labeled "data cable" bin separate from a general "charging cable" bin.

A quick reference for the version numbers a mentor will see printed on cables and ports:

- USB 2.0 — up to 480 Mbps, found on many basic microcontroller cables.
- USB 3.0 / 3.1 — up to 5-10 Gbps, common on newer laptops and external drives.
- USB4 — up to 40 Gbps, found on the newest USB-C laptops and phones.

!!! mascot-tip "Suspect the Cable Before the Board"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut that saves a lot of session time: before assuming a "dead" microcontroller is actually broken, swap in a cable you've already verified carries data, not just power. Charge-only cables are behind more mystery "broken board" reports than any actual hardware failure.

### USB A Connector

A **USB-A connector** is the older, larger of the two USB connector shapes covered in this chapter — a flat rectangular plug that fits into its port only one way, not upside down. Because a USB-A connector's plastic shell hides its internal pins, students commonly try to plug it in backward on the first attempt, which is a near-universal, harmless mistake rather than a sign of anything broken.

A worked example gives students a shortcut for getting it right the first time: most USB-A cable plugs have a small embossed logo molded into the plastic on the side facing up when the plug is oriented correctly, and most USB-A ports on a laptop or hub have the wider, flatter side of their internal slot facing down. Teaching students to look for the logo-side-up cue, rather than forcing the plug in and feeling for resistance, avoids the bent-pin damage that repeated forceful insertion attempts can cause over a semester of heavy classroom use. USB-A remains common on laptops, wall chargers, and hub-style USB power strips a club might use to charge a dozen devices from a single outlet, even as newer laptops increasingly drop it in favor of USB-C.

### USB C Connector

A **USB-C connector** is the newer of the two connector shapes, a smaller oval plug that is reversible — it fits into its port right-side up or upside down, with no wrong orientation to guess at. Beyond the shape, USB-C also supports a much wider power range through a negotiation standard called USB Power Delivery, letting the same connector safely carry anywhere from a few watts for a small sensor board up to 100 watts or more for charging a laptop.

A worked example shows why "it's USB-C" does not always mean "it will work the same way": two USB-C cables can look identical yet support very different capabilities, since the USB-C shape is shared across USB 2.0 speeds, USB4's much faster data speeds, and multiple Power Delivery wattage tiers — and a cable's own internal wiring, not just its connector shape, decides which of those it actually supports. A mentor whose USB-C robot kit charges painfully slowly from a phone charger, but charges quickly from the kit's own included adapter, is usually running into exactly this mismatch: the phone charger's cable or power brick simply was not built to negotiate the higher wattage the kit expects.

#### Diagram: USB-A vs USB-C Connector Comparison

<iframe src="../../sims/usb-connector-comparison/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>USB-A vs USB-C Connector Comparison</summary>
Type: infographic
**sim-id:** usb-connector-comparison<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner compare the two connector shapes side by side and click each labeled feature to see why it matters for a club's day-to-day cable choices.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a USB-A and a USB-C connector drawn side by side, the learner differentiates the two by shape, orientation, and typical power/data capability.

Visual elements: Two large scale drawings side by side — a rectangular USB-A plug on the left, an oval USB-C plug on the right — each with 3 labeled callout points (shape/orientation, typical host device, typical power delivery).

Interactive controls: Click any callout point on either connector to open an infobox with that feature's explanation; a "Flip It" button under each drawing that visually rotates the plug 180 degrees to show whether it still fits.

Default parameters: Both connectors shown unselected, right-side up.

Behavior: Clicking a callout (e.g., "Reversible") opens an infobox pulling its definition from the chapter glossary; clicking "Flip It" animates the rotation and displays a green checkmark (USB-C, always fits) or a red X (USB-A, only fits one way).

Implementation notes: p5.js canvas with two vector-drawn connector shapes; click-region detection for callouts; a simple rotation animation triggered by the Flip It buttons; canvas resizes responsively to container width.
</details>

### Power Supply Selection

**Power supply selection** is the practice of matching a project's voltage and current needs to a power source rated to supply them safely, rather than grabbing whichever wall adapter or battery pack is closest at hand. A power supply mismatched too low in voltage makes a project act erratically or not at all; one mismatched too high in voltage can damage components outright, which is why this decision deserves more thought than it usually gets in a rushed classroom setup.

A worked example: a robot kit's motors and microcontroller are both rated for 5 volts, and the kit draws up to 1.5 amps total when both motors run at full speed under load. A USB power bank rated at 5 volts but only 1 amp of maximum output will undercharge that robot, causing its motors to stall or its microcontroller to brown out and reset unexpectedly whenever both motors spin at once — a maddening intermittent failure that looks like a code bug but is actually a power problem. Swapping in a power bank or wall adapter rated for at least 2 amps at 5 volts resolves it immediately, with no code changes at all. The lesson for a mentor is to always check a kit's documented current draw against a power source's rated output current, not just its voltage — matching voltage alone is not enough to guarantee reliable operation.

The table below summarizes the power sources a club typically has on hand.

| Power Source | Typical Voltage | Typical Max Current | Best For |
|---|---|---|---|
| USB Power Bank | 5V | 1-3A | Portable robot and sensor projects |
| USB Wall Adapter | 5V (higher via USB-C Power Delivery) | 1-3A, more with Power Delivery | Stationary desk projects |
| Battery Pack (AA/AAA) | 3-9V, depending on cell count | Varies, often lower | Untethered floor robots |

## Organizing the Workshop: Storage, Identification, and Documentation

### Component Storage System

A **component storage system** is a deliberate scheme for sorting and labeling a club's loose parts — resistors, capacitors, LEDs, connectors, and small hardware — so a mentor or student can find the right part in seconds instead of digging through one giant junk drawer mid-session. The simplest workable system is a small parts organizer box with a dozen or more individual compartments, each one labeled with a printed sticker naming both the component type and its specific value.

A worked example shows why the labeling detail matters as much as the sorting: a bin labeled only "resistors" still forces a student to read every resistor's color bands (Chapter 16) one at a time hunting for a specific value, while a bin labeled "resistors — 220Ω" lets a student grab a handful with confidence and check just one to confirm the bin was filled correctly. A club running the same handful of projects every semester — the same LED circuit, the same sensor divider — gets the most value from labeling bins by the exact values those projects actually need, rather than trying to stock and label a hobbyist's entire range of standard values the club will never use most of.

!!! mascot-tip "Label by Value, Not Just by Type"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Want to turn a two-minute bin search into a two-second grab? Label every compartment with both the component type and its specific value — "resistors" tells a student almost nothing, but "220Ω resistors" tells them exactly where to reach.

### Component Identification

**Component identification** is the skill of recognizing a component's type from its physical package before ever reading a label or datasheet — telling a resistor from a capacitor from a diode by shape and markings alone. Three visual cues cover most of what a club needs to sort a mixed parts bin correctly:

- A resistor is a small cylinder with colored bands.
- A ceramic capacitor is a small flattened disc, usually blue or brown, with two unmarked legs.
- An electrolytic capacitor is a larger cylinder, often black or blue, with a printed stripe marking its negative leg and numbers printed directly on its body instead of color bands.

A worked example shows why that negative-leg stripe matters beyond simple recognition: unlike a resistor or a ceramic capacitor, an electrolytic capacitor is polarized, meaning it only works correctly installed one direction — reversing it can cause it to overheat, and in rare cases even to leak or rupture. A mentor teaching component identification should have students physically find and point to the stripe on an electrolytic capacitor before soldering or breadboarding a single one, the same "identify before you wire it" habit that prevents an LED from being installed backward.

### Electronics Vocabulary

**Electronics vocabulary** is the shared set of precise terms that lets a mentor describe a circuit problem accurately instead of vaguely. Continuity means an unbroken electrical path exists between two points; a short circuit means current is flowing along an unintended low-resistance path, usually because two wires that should stay separate are touching; an open circuit means a path that should carry current has been broken somewhere; and polarity means a component only works correctly installed one direction.

| Term | Definition |
|---|---|
| Continuity | An unbroken electrical path exists between two points |
| Short Circuit | Current flows along an unintended low-resistance path |
| Open Circuit | A path that should carry current has been broken |
| Polarity | A component only works correctly installed one direction |

Precise vocabulary matters in practice: a student who tells a mentor "it's not working" gives far less to act on than one who says "I'm getting no continuity between the battery and the resistor," which points a mentor almost directly at the fault.

### Datasheet Reading

**Datasheet reading** is the skill of finding the specific facts a project needs — a component's pinout diagram, its rated voltage and current, and its absolute maximum ratings — inside a manufacturer's official specification document, rather than guessing from a similar-looking part. A datasheet is usually many pages long, but a mentor rarely needs to read it cover to cover; the pinout diagram and the absolute maximum ratings table answer most club-level questions on their own.

A worked example: before wiring an unfamiliar sensor a student found in a parts drawer, a mentor searches the part number printed on its body, opens the manufacturer's datasheet, and checks two things in under a minute:

- The pinout diagram, to confirm which pin is power, ground, and signal.
- The operating voltage range, to confirm it matches the project's 3.3-volt or 5-volt supply.

Only after both checks pass does a single wire get connected.

## Hands-On Skills: Prototyping, Wiring, and Troubleshooting

### Prototyping Board

A **prototyping board** is any board used to build and test a circuit's wiring before making it permanent — most often the solderless breadboard already familiar from Chapter 16, but also including a perforated protoboard (a rigid board of pre-drilled holes on a fixed grid, without the breadboard's internal spring clips) for circuits a club wants to keep working reliably for an entire semester rather than rebuild every session.

A worked example shows when a mentor reaches for each: a student actively experimenting with a new sensor, still moving wires around and testing different resistor values, belongs on a solderless breadboard, since nothing there requires solder and mistakes cost only a few seconds of rewiring. Once that same circuit is finalized and a club wants a kit's control circuit to survive being carried between sessions in a bin without its connections shaking loose, transferring the proven layout onto a soldered protoboard turns a fragile prototype into a durable club asset — the same circuit, wired instead of clipped.

### Wire Stripping Technique

**Wire stripping technique** is the skill of removing exactly the right length of plastic insulation from a wire's end without nicking, thinning, or cutting through any of the thin copper strands underneath — a nicked wire is fragile and prone to snapping off inside a connector days after it looked fine. A wire stripping tool has several graduated notches sized for different wire gauges; selecting a notch too large fails to fully remove the insulation, while selecting one too small cuts partway into the copper itself.

A worked example walks through the motion:

1. Select the notch matching the wire's printed gauge.
2. Position the wire so about a quarter-inch of insulation sits inside the jaws.
3. Close the stripper fully and pull straight along the wire's length in one smooth motion, never twisting.
4. Run a finger gently along the exposed copper, feeling for a full, even bundle of strands rather than a thinned or partially cut one.

Catching a bad strip at this last step is far easier than diagnosing the intermittent connection it causes three sessions later.

### Circuit Troubleshooting

**Circuit troubleshooting** is a systematic process for isolating why a circuit is not behaving as expected, checking the most likely and easiest-to-test causes first rather than guessing or swapping parts at random. A dependable order for a beginner circuit is:

1. Confirm power is actually present and at the right voltage.
2. Confirm continuity along the expected path, wire by wire.
3. Confirm every polarized component is installed the correct direction.
4. Only then suspect a bad component or an error in code.

A worked example traces that order on a classic case — an LED that refuses to light. First, checking the power supply confirms voltage is reaching the breadboard rail at all. Second, checking continuity from that rail through the resistor to the LED's leg rules out a loose connection or a wire plugged into the wrong row. Third, checking the LED's orientation rules out the single most common cause of a dark LED in a beginner circuit. Only after all three checks pass does a mentor suspect the LED itself has failed, at which point swapping in a known-good LED confirms or rules that out in seconds. Working the list in this order, cheapest and fastest check first, finds the fault far more often — and far faster — than immediately assuming the most exotic explanation.

!!! mascot-encourage "A Troubleshooting Checklist Feels Slow — Until It Isn't"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If working through four checks in order feels slower than just guessing, that's a completely normal first reaction — most mentors want to skip straight to "replace the part." Stick with the checklist for a few sessions and it stops feeling like a list and starts feeling like instinct.

The interactive workflow below lets you click through that same four-step order and see what each check actually rules out.

#### Diagram: Circuit Troubleshooting Decision Workflow

<iframe src="../../sims/circuit-troubleshooting-workflow/main.html" width="100%" height="802px" scrolling="no"></iframe>

<details markdown="1">
<summary>Circuit Troubleshooting Decision Workflow</summary>
Type: workflow
**sim-id:** circuit-troubleshooting-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Let a learner click through the four-step troubleshooting order from the worked example above and see what each check actually rules out.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine

Learning objective: Given a non-working LED circuit, the learner examines the four-step troubleshooting order (power, continuity, orientation, component) to isolate the most likely fault first.

Steps: 1. "Check Power — is voltage actually present at the rail?"; 2. "Check Continuity — is there an unbroken path wire by wire?"; 3. "Check Orientation — is every polarized part installed the right way?"; 4. "Test the Component — swap in a known-good part to confirm or rule it out"

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation and a concrete example, e.g. `click step1 call showInfo("check-power")`.

Visual style: Vertical Mermaid flowchart, steps 1 through 4 in sequence, with a "Fault Found" end node branching off each step to represent stopping the checklist early once a cause is confirmed.

Implementation: Mermaid flowchart rendered in a wrapper page at the sim-id path, with a JavaScript `showInfo()` callback populating an infobox beneath the diagram on any node click; each infobox reuses the worked-example wording from the chapter (power check, continuity check, orientation check, component check).
</details>

### Component Testing Procedure

A **component testing procedure** is a focused check that confirms whether one specific, isolated component is working correctly — the step a circuit troubleshooting checklist reaches for only after ruling out power, continuity, and orientation as causes. The most common club-level test uses a multimeter's continuity or diode-test mode: touching its two probes to a resistor's leads should read close to its labeled value, and touching them to an LED's leads (matching polarity) should read a voltage drop and often make the LED glow faintly, confirming it still functions even outside its original circuit.

A worked example: a student's LED circuit stays dark even after confirming power, continuity, and correct orientation, so a mentor removes the LED alone and tests it with a multimeter's diode-test mode. A faint glow and a reasonable voltage-drop reading mean the LED is fine and the fault lies elsewhere; no response at all confirms the LED itself has failed and needs replacing.

## Handling Components Safely, From Bench to Bin

### Static Safe Handling

**Static safe handling** means taking simple precautions to prevent a static electric discharge — an invisible, often unfelt zap of built-up static electricity — from damaging a sensitive component such as a microcontroller chip. A human body can build up several thousand volts of static charge just from walking across carpet on a dry day, and while that charge is far too weak to hurt a person, it is easily strong enough to destroy a delicate integrated circuit's internal wiring the instant it discharges through one.

A worked example gives a club two low-cost habits that prevent nearly all static damage: touching a grounded metal surface, such as a laptop's metal chassis or a radiator, right before handling a bare microcontroller board discharges any built-up static harmlessly through the mentor's hand first; and storing spare chips and boards in the anti-static foam or bags they originally shipped in, rather than a plain cardboard box, prevents static buildup during storage itself.

!!! mascot-warning "An Unfelt Zap Can Still Kill a Chip"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: a static shock too small for a person to even feel can still destroy a microcontroller's internal wiring instantly. The fix is simple — touch a grounded metal surface before handling any bare board, every single time, not just when you remember.

### Safe Disposal Of Electronics

**Safe disposal of electronics** means routing dead boards, batteries, and components to a proper e-waste recycling channel instead of a regular trash can, since electronics contain materials — heavy metals in circuit boards, lithium in rechargeable batteries — that are both an environmental hazard in a landfill and, in a battery's case, a genuine fire risk if crushed or punctured in a garbage truck.

A worked example gives a club a simple two-bin system: a small, clearly labeled "dead batteries" container, since a damaged lithium battery can catch fire if its terminals short against loose metal in a regular trash bag, and a separate box for dead boards and components, brought periodically to a local electronics retailer, library, or municipal recycling event that accepts e-waste. Most communities offer at least one free e-waste drop-off point, and keeping the two labeled bins next to the club's regular supply shelf costs nothing but turns proper disposal into the easy default instead of an extra chore no one gets around to.

!!! mascot-warning "A Damaged Battery in the Trash Is a Fire Risk"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A common trap here is treating dead batteries like ordinary trash. A punctured or crushed lithium battery can genuinely catch fire in a garbage bag or truck — keep a clearly labeled battery bin next to your supply shelf so the safe choice is also the easy one.

## Chapter Summary

This chapter turned Chapter 17's individual sensors, displays, and motors into a complete collision-avoidance robot, then covered the everyday workshop skills that keep a club running: choosing the right USB cable, connector, and power supply; organizing and identifying components; reading a datasheet; prototyping on a breadboard or protoboard; stripping wire cleanly; troubleshooting a dead circuit in the right order; and handling and disposing of components safely. None of these skills depend on any one leader remembering them — a labeled bin, a documented troubleshooting order, and a clearly marked battery-disposal box keep working long after a specific mentor moves on.

!!! mascot-celebration "You Can Now Build a Robot AND Run a Workshop"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just went from individual sensors and motors to a complete collision-avoidance robot, and picked up the USB, storage, wiring, and troubleshooting habits that keep an entire club running smoothly. That's this chapter fully handled — and it's the kind of practical know-how that pays off in every session from here on.
