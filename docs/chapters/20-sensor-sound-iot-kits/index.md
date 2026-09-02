---
title: Sensor, Sound, and IoT Project Kits
description: Covers gyroscope, motion, sound, and IoT project kits, including a classroom-noise-friendly sound design, plus the assembly instructions, checklists, and difficulty ratings that get any kit running in a session.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 06:06:22
metadata:
  ibook:
    version: 1.10
---

# Sensor, Sound, and IoT Project Kits

## Summary

This chapter covers a family of specialized project kits: gyroscope and motion kits for orientation data, sound and microphone kits (including a classroom-noise-friendly design), and IoT kits that monitor light, temperature, and humidity. Robot face, sound, and display kits round out the set. You will be able to select and assemble the right sensor or sound kit for a lesson.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Robot Emotion Display | 66 |
| Display Kit | 65 |
| Sensor Kit | 64 |
| Gyroscope Kit | 63 |
| Gyroscope Orientation Data | 62 |
| Motion Kit | 61 |
| Accelerometer Data | 60 |
| Sound Kit | 59 |
| Classroom Noise Challenge | 58 |
| Microphone Kit | 57 |
| Sound Spectrum Kit | 56 |
| Frequency Spectrum Display | 55 |
| Robot Sounds Kit | 54 |
| Robot Display Kit | 53 |
| IoT Project Kit | 52 |
| Light Temp Humidity Monitor | 51 |
| NightLight Project | 50 |
| Kit Assembly Instructions | 49 |
| Kit Component Checklist | 48 |
| Kit Difficulty Rating | 47 |

## Prerequisites

This chapter builds on concepts from:

- [17. Sensors, Displays, Motors, and Robot Chassis](../17-sensors-displays-motors/index.md)
- [19. Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../19-pico-micropython-moving-rainbow/index.md)

---

Chapter 19 closed with a robot rolling across a table under its own sensor-driven logic, and a small OLED face bolted on top of it blinking a simple expression. This chapter opens the rest of the kit bin: the gyroscope and motion kits that tell a program which way it is tilted or moving, the sound kits that turn a room's noise into something a Pico can react to or display, the IoT kits that quietly log light, temperature, and humidity over a whole session, and the paperwork — assembly steps, checklists, and difficulty ratings — that turns any one of those boxes of parts into a working station before students sit down. None of these kits teaches a new programming concept the way MicroPython loops or NeoPixel wiring did in Chapter 19; every one of them is really the same Pico, the same wiring habits, and the same sense-and-react pattern, aimed at a new kind of physical input or output.

!!! mascot-welcome "A whole bin of kits, one familiar pattern underneath"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great — this chapter hands you a whole shelf of specialized kits: gyroscopes, microphones, spectrum displays, IoT monitors, and more. By the end, you'll be able to look at any one of them, know exactly what it measures or displays, and pick the right kit, difficulty level, and assembly plan for the students in front of you.

## Kits That Communicate: Displays, Sensors, and Emotion

### Robot Emotion Display

**Robot emotion display** is the design pattern behind Chapter 19's Robot Face Kit, generalized to any kit in this chapter that gives a robot a visible "state": mapping something a program knows internally — an obstacle is close, a sound is loud, a timer just ended — onto a simple facial expression a bystander can read at a glance, without needing to see any code or any sensor number at all. A robot that only blinks an LED when it detects an obstacle is technically communicating, but a robot that switches from a calm, wide-eyed face to a narrow, alert one communicates the same fact in a way a five-year-old sibling in the room immediately understands.

A worked example shows why this pattern earns its place at the top of this chapter's concept list, ahead of any single kit. A mentor running a session with six different project stations — one gyroscope kit, one sound spectrum kit, one IoT monitor — can teach "map an internal state to a visible expression" exactly once, as a general idea, and every subsequent kit in this chapter becomes an application of it rather than a brand-new lesson: a gyroscope kit's face tips sideways when the board tilts, a sound kit's face looks startled when the room gets loud, and an IoT kit's face looks sleepy when the room is dark. The specific kits later in this chapter — the Robot Sounds Kit and the Robot Display Kit — are simply the hardware that makes a robot emotion display physically possible, one through sound and one through a screen.

| Feature | Plain Status LED | Robot Emotion Display |
|---|---|---|
| What it shows | On/off, or one color | A recognizable expression (happy, alert, confused) |
| Reader needs to know code? | Sometimes (what does blue mean?) | No — a face is self-explanatory |
| Number of distinguishable states | Usually 2-3 | Limited mainly by screen space and imagination |
| Typical club use | Power or error indicator | Robot Face Kit, Robot Display Kit, sound and IoT kit feedback |

!!! mascot-thinking "One state, many possible faces — the mapping is the design decision"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that the sensor reading and the expression are two separate things connected by a choice a student makes: nothing about "distance less than 10 centimeters" forces a narrow-eyed face rather than a surprised one. Once a student sees that the mapping itself is the creative part, they start designing expressions on purpose instead of copying whichever face example ran first.

### Display Kit

**A display kit** bundles a small screen — most often the same OLED module from Chapter 17's Display Basics section — with mounting hardware and a short starter program, sold as a standalone kit rather than pre-attached to any particular robot or sensor. Where a Robot Display Kit later in this chapter pairs a screen specifically with a robot chassis, a plain display kit is the screen and its wiring on their own, ready to attach to whatever project a student is already building.

A worked example shows the kit doing the simplest job it can do well: a student wires the display kit's four pins — power, ground, and two data pins for the I2C connection Chapter 17 introduced — to a Pico, loads a five-line starter program, and sees the words "Hello, Club!" appear on the screen. From that starting point, swapping the fixed text for a sensor reading — a temperature value, a distance in centimeters, a running count of button presses — is usually the very next thing a mentor demonstrates, since a display kit's whole value is showing a number or word a program already knows, in a form a student doesn't have to guess at from a blinking LED.

A display kit purchased on its own, without a specific sensor or robot in mind, is club shorthand for "we'll figure out what to show later" — it is the most general-purpose, reusable kit in the entire bin, which is part of why it appears second on this chapter's concept-impact ranking: nearly every other kit in this chapter eventually routes some of its output through one.

### Sensor Kit

**A sensor kit** is the umbrella term for any bundle pairing one or more sensor modules — light, distance, sound, motion, temperature — with the wiring and starter code needed to read a physical quantity from the environment into a running program. Every specific kit named later in this chapter (gyroscope, motion, microphone, sound spectrum, light/temperature/humidity) is a sensor kit; "sensor kit" itself is the category a mentor reaches for when talking about the whole family rather than any one member of it.

A worked example shows why the category matters for planning, not just vocabulary: a mentor stocking a club's kit bins for the first time buys sensor kits in bulk before deciding which specific sensor goes in which box, because every sensor kit shares the same underlying purchase logic — a breakout board, a handful of jumper wires, and a data sheet — even though a gyroscope kit and a microphone kit measure completely different physical quantities. A new mentor asking "what's the difference between a sensor kit and a display kit?" gets a clean answer once the category is clear: a sensor kit reads the world into the Pico, and a display kit shows what the Pico already knows back out to the world — inputs versus outputs, the same distinction Chapter 16 introduced for a single button and a single LED, now scaled up to whole families of specialized hardware.

Now that the general category is defined, the rest of this chapter walks through specific sensor kits one family at a time, starting with the ones that report orientation and movement.

## Motion and Orientation Kits

### Gyroscope Kit

**A gyroscope kit** pairs a small gyroscope sensor module with a Pico, wiring, and starter code, and is built specifically to answer one question a plain distance sensor cannot: which way is this board currently rotated, and how fast is that rotation changing? A gyroscope module measures angular velocity — how quickly an object is spinning around each of three axes — rather than distance or light level, which makes it the sensor kit of choice for any project where orientation itself, not just presence or absence of an object, is the interesting quantity.

A worked example shows a gyroscope kit doing exactly the job it is built for: a student wires the kit's four pins (power, ground, and the same I2C data pins used by the display kit above) to a Pico, and a short starter program reads three numbers, once per loop, representing rotation speed around the X, Y, and Z axes. Holding the board flat on a table produces three numbers near zero; tipping it forward briefly produces a spike on one axis that returns to near zero once the tipping motion stops — the sensor reports the rotation itself, not the board's resting angle, which is the detail that most surprises a student expecting a simple tilt reading.

### Gyroscope Orientation Data

**Gyroscope orientation data** refers to the pitch, roll, and yaw values a program calculates from a gyroscope kit's raw rotation readings — pitch describing a tip forward or backward, roll describing a tip left or right, and yaw describing a spin around the vertical axis, the same three terms a pilot uses to describe an aircraft's attitude in the air. A gyroscope module itself reports how fast each axis is currently rotating; orientation data is what a program gets by continuously adding up those small rotation amounts over time to track the board's current tilt.

A worked example makes the pitch/roll/yaw distinction concrete rather than abstract: propping one edge of the kit up on a pencil produces a large pitch reading and a roll and yaw reading both near zero, since only one axis is actually tilting; spinning the whole board flat on the table like a record produces a large yaw reading while pitch and roll stay near zero. A student who tilts the board and watches all three numbers on a connected display quickly learns to associate each axis with a specific hand motion, which is exactly the skill the diagram below is built to practice before a student ever wires a physical kit.

#### Diagram: Gyroscope Orientation Data Explorer

<iframe src="../../sims/gyroscope-orientation-data-explorer/main.html" width="100%" height="522px" scrolling="no"></iframe>

[Run the Gyroscope Orientation Data Explorer MicroSim fullscreen](../../sims/gyroscope-orientation-data-explorer/main.html){ .md-button }

<details markdown="1">
<summary>Gyroscope Orientation Data Explorer</summary>
Type: microsim
**sim-id:** gyroscope-orientation-data-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/accelerometer-axes

Purpose: Let a learner drag a drawn gyroscope-kit board and see the matching pitch, roll, and yaw readout update, before wiring or reading a physical kit.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: interpret

Learning objective: Given a tilted or rotated orientation of a gyroscope kit, the learner interprets which of the pitch, roll, and yaw values changes and by how much.

Visual elements: A simple drawn rectangular board with a marked "front" edge, three axis arrows labeled pitch, roll, and yaw, and three numeric readouts below the drawing.

Interactive controls: Drag handles on two edges of the board to tip it forward/back and side to side; a rotate handle for yaw; a "Reset to Flat" button.

Default parameters: Board starts flat, all three readouts at 0 degrees.

Behavior: Dragging a handle updates the board's drawn tilt and the matching readout in real time; dragging one handle changes only its associated axis reading, reinforcing that the three axes are independent.

Implementation notes: p5.js canvas with a 3D-look board drawn using simple perspective skewing; drag detection mapped to rotation angles converted directly into the three displayed numbers.
</details>

### Motion Kit

**A motion kit** pairs an accelerometer sensor module with a Pico, wiring, and starter code, and answers a related but different question from a gyroscope kit: how is this board's speed currently changing, and which direction is "down" relative to the board right now? An accelerometer measures acceleration — including the constant pull of gravity — rather than rotation speed, which makes a motion kit better suited to detecting shakes, bumps, drops, and steady tilt than a gyroscope kit is.

A worked example shows a motion kit answering a question a gyroscope kit cannot answer well: a student wires the kit and reads three acceleration values continuously; setting the board flat on a table produces a reading near zero on two axes and a steady reading near one full "g" of gravity on the third, telling the program which way is down even while the board sits perfectly still. A gyroscope kit reading zero on every axis at that same moment would tell a program nothing about which way is down — only that nothing is currently rotating — which is the practical reason clubs stock both kits rather than treating one as a strict upgrade of the other.

### Accelerometer Data

**Accelerometer data** is the set of X, Y, and Z acceleration readings a motion kit reports, each one combining any deliberate motion of the board with the constant background pull of gravity, measured in units of "g" where 1g equals the acceleration a resting object feels from gravity alone. Because gravity never turns off, an accelerometer at rest on a table already reports a nonzero reading on whichever axis currently points down — a detail that trips up nearly every student's first program until it is named explicitly.

A worked example shows how a program turns raw accelerometer data into something useful for a lesson: reading the Z-axis value once a second and comparing it to a fixed 1.5g threshold lets a program detect a sharp shake or bump — the value spikes well above 1g for a fraction of a second and then settles back down — without needing to understand gravity, physics notation, or any calculus at all. A shake-detection program built this way is often a club's first "it reacted to something I did with my hands, not just a button" moment, which is why motion kits pair especially well with a Robot Emotion Display: a shaken robot can show a startled face using exactly this one threshold check.

Now that both motion-sensing kits have been introduced individually, the table below compares them directly on the choice a mentor actually has to make when picking one for a lesson.

| Kit | Core Sensor | What It Reports | Best Suited For |
|---|---|---|---|
| Gyroscope Kit | Gyroscope | Rotation speed → pitch, roll, yaw | Orientation games, tilt-controlled projects |
| Motion Kit | Accelerometer | Acceleration on X, Y, Z (includes gravity) | Shake/bump detection, "which way is down" |

## Sound Kits: From Raw Noise to a Spectrum

### Sound Kit

**A sound kit** is the umbrella term for any bundle that captures, processes, or produces audio using a Pico — the sound-family equivalent of the general sensor kit category defined earlier in this chapter. Every specific audio kit covered in this section (the microphone kit and the sound spectrum kit) is a sound kit; the term itself is what a mentor reaches for when discussing the whole audio-project family, including the room-management issue every one of them shares.

A worked example shows why "sound kit" needs to exist as its own category, separate from the general sensor kit label: a microphone module counts as a sensor by the earlier definition, since it reads a physical quantity — air pressure changes — into the Pico, but sound behaves differently from light, distance, or motion in one specific way that changes how a mentor plans a session around it, covered in the very next section.

### Classroom Noise Challenge

**The classroom noise challenge** is the practical problem created by running several microphone-based kits in the same room at once: unlike a distance sensor, which only reacts to whatever object is directly in front of it, a microphone kit at one table picks up sound from every other table's conversation, kit, and mentor explanation happening anywhere nearby, because sound travels through open air rather than staying contained to one workstation.

A worked example makes this concrete rather than theoretical. A mentor sets six sound kits running simultaneously so each group can see its own display react to sound, expecting each display to respond mainly to noises its own group makes. Within minutes, every display in the room is reacting constantly regardless of which table is actually talking, because the six microphones are all picking up the same general classroom hum, and no single group can tell whether their own sound kit is even working correctly. The fix is scheduling and spacing, not new code: running sound kits one table at a time while the rest of the room stays relatively quiet, or physically spacing microphone stations as far apart as the room allows, restores each kit's ability to demonstrate cause and effect clearly.

!!! mascot-tip "Test sound kits one table at a time, not all six at once"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut worth planning into the agenda: run sound and microphone kits as a rotating station rather than a simultaneous, room-wide activity. One table demonstrating clearly to a gathered group beats six tables all picking up each other's noise at once.

### Microphone Kit

**A microphone kit** pairs a microphone module with a Pico, wiring, and starter code, and reports a single, continuously changing number representing the loudness of whatever sound the microphone currently picks up — nothing about which frequencies make up that sound, only how loud the air pressure changes are moment to moment. This is the simplest sound kit in the bin, and it is the one most other sound projects, including the sound spectrum kit below, build on top of.

A worked example shows the kit at its most basic: a student wires the microphone kit to a Pico and watches a raw loudness number climb sharply the instant someone claps nearby, then decay back toward a quiet baseline over the next second or two. A simple threshold check — "if the loudness number exceeds 500, do something" — turns that raw number into a clap-triggered event, the exact same threshold-and-react pattern the Motion Kit section used for shake detection, now applied to sound instead of acceleration.

### Sound Spectrum Kit

**A sound spectrum kit** extends a microphone kit with additional processing that breaks a captured sound into separate frequency bands — roughly, how much of the sound is low-pitched bass versus high-pitched treble — rather than reporting a single overall loudness number the way a plain microphone kit does. Where a microphone kit answers "how loud is it right now," a sound spectrum kit answers the more detailed question "which pitches make up that sound right now."

A worked example shows the practical difference a student can hear and see at the same time: humming a low note into a sound spectrum kit lights up bars on the left side of its display, representing low-frequency bands, while whistling a high note lights up bars toward the right side, representing high-frequency bands — a plain microphone kit would report a similarly large loudness number for both sounds and show no difference between them at all. This book does not teach the signal-processing math that turns a raw audio signal into those frequency bands — that is exactly the specialized territory of the companion Signal Processing on a $5 MicroController textbook — but a mentor running a club still needs to recognize what the resulting display means well enough to explain it to a curious student.

### Frequency Spectrum Display

**A frequency spectrum display** is the visual output of a sound spectrum kit: a row of bars, each one representing a fixed band of frequencies, with each bar's height showing how much sound energy currently falls in that band. Reading the display is a matter of position and height together — a bar's left-to-right position tells a viewer which pitch range it represents, and its height tells a viewer how strongly that pitch range is currently present in the sound the microphone is picking up.

A worked example ties the display directly back to the previous section's humming-versus-whistling comparison: on a spectrum display with bars ordered from low frequency on the left to high frequency on the right, a low hum produces one or two tall bars near the left edge with the rest of the display mostly flat, while a high whistle produces a tall bar (or two) near the right edge instead — the same physical sound difference a listener's ear already picks up on, now made visible as a shape rather than left as an unlabeled number. A room full of general background chatter, by contrast, tends to light up bars across most of the display at once, rather than concentrating energy in one narrow band — a pattern worth a mentor pointing out explicitly when explaining why the classroom noise challenge above affects a spectrum kit even more visibly than it affects a plain microphone kit.

#### Diagram: Frequency Spectrum Display Explorer

<iframe src="../../sims/frequency-spectrum-display-explorer/main.html" width="100%" height="482px" scrolling="no"></iframe>

[Run the Frequency Spectrum Display Explorer MicroSim fullscreen](../../sims/frequency-spectrum-display-explorer/main.html){ .md-button }

<details markdown="1">
<summary>Frequency Spectrum Display Explorer</summary>
Type: chart
**sim-id:** frequency-spectrum-display-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/fft-benchmarking/tree/main/docs/sims/live-spectrum-display-bin-averaging

Purpose: Let a learner select a sound type (low hum, high whistle, or general chatter) and see the resulting bar pattern on a simplified frequency spectrum display, before reading one from a physical sound spectrum kit.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: interpret

Learning objective: Given a frequency spectrum display showing a bar pattern, the learner interprets which sound type (a low hum, a high whistle, or general chatter) most likely produced it.

Visual elements: A row of 12 vertical bars labeled low-to-high left to right; a dropdown or button set to pick a sample sound type; a caption describing the currently shown sound.

Interactive controls: Buttons for "Low Hum," "High Whistle," and "Room Chatter"; hovering any bar shows its approximate frequency band and current height as a tooltip.

Default parameters: Starts with all bars at a low, flat baseline height, no sound selected.

Behavior: Clicking a sound-type button animates the bars into that sound's representative pattern (concentrated left, concentrated right, or spread across most bars) and updates the caption; hovering a bar always shows its band label and value regardless of which pattern is active.

Implementation notes: p5.js canvas with a fixed array of 12 rectangle objects; three preset height arrays swapped in on button click with a short easing animation between states.
</details>

Now that every sound kit has been introduced individually, the table below compares the three sound-family kits directly.

| Kit | Core Component | What It Reports | Classroom Noise Sensitivity |
|---|---|---|---|
| Microphone Kit | Microphone | One loudness number | High — reacts to any nearby sound |
| Sound Spectrum Kit | Microphone + frequency processing | A bar per frequency band | High — same room-noise issue, more visibly |
| Robot Sounds Kit | Speaker or buzzer | Plays tones or sounds (output, not input) | None — it produces sound rather than capturing it |

## Giving Robots a Voice and a Face

### Robot Sounds Kit

**A robot sounds kit** pairs a small speaker or piezo buzzer with a Pico and a robot chassis, and plays back short tones or sound effects tied to specific events in a robot's code — the audio equivalent of the Robot Emotion Display pattern introduced earlier in this chapter, using sound instead of a facial expression to signal a robot's internal state. Unlike the microphone and sound spectrum kits above, a robot sounds kit is entirely an output device: it produces sound rather than capturing it, which is exactly why the noise-sensitivity comparison in the table above marks it as unaffected by the classroom noise challenge.

A worked example shows the kit doing its simplest and most common job: a robot's autonomous obstacle-avoidance code from Chapter 19 already checks a distance sensor and reverses when an obstacle is close; adding a robot sounds kit means adding one line that plays a short beep the instant that same distance check triggers, giving a bystander an audible cue exactly when the robot is reacting, without that person needing to be looking at the robot at all. A slightly more advanced version plays a rising three-note chime on a successful maneuver and a low buzz on a stall, turning the robot's internal state into a small, recognizable sound vocabulary the same way an emotion display turns state into a recognizable face.

### Robot Display Kit

**A robot display kit** pairs a display kit — the general OLED bundle defined earlier in this chapter — specifically with a robot chassis and mounting hardware, making it the concrete piece of hardware that turns the general robot emotion display pattern into something a student can actually build and mount. Where "robot emotion display" describes the idea of mapping state to a visible expression, a robot display kit is the physical screen, bracket, and wiring that makes showing that expression on a moving robot possible in the first place.

A worked example ties every earlier concept in this section together into one finished project: a robot's code continuously reads its distance sensor, exactly as it did in Chapter 19's autonomous behavior section, and now drives two outputs from that same one reading — a robot display kit shows a calm, wide-eyed face while the path ahead is clear, switches to a narrow, alert-looking face the instant an obstacle is detected within range, and a robot sounds kit plays a short beep at that same instant. Nothing about the sensor code changes between having one output and having three; only the number of things reacting to the same reading changes, which is the exact idea the diagram below lets a learner operate directly before wiring a physical kit.

#### Diagram: Robot Emotion Display Control Panel

<iframe src="../../sims/robot-emotion-display-control-panel/main.html" width="100%" height="522px" scrolling="no"></iframe>

[Run the Robot Emotion Display Control Panel MicroSim fullscreen](../../sims/robot-emotion-display-control-panel/main.html){ .md-button }

<details markdown="1">
<summary>Robot Emotion Display Control Panel</summary>
Type: microsim
**sim-id:** robot-emotion-display-control-panel<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/robot-faces/tree/main/docs/sims/expression-menu-live-simulator

Purpose: Let a learner operate a simulated distance-sensor slider and buzzer toggle to see how one sensor reading can drive both a robot display kit's face and a robot sounds kit's beep at the same time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a simulated distance reading, the learner demonstrates how a single sensor value can drive both a robot display kit's expression and a robot sounds kit's audio cue simultaneously.

Visual elements: A drawn robot face on an OLED-style panel; a speaker icon that visibly pulses when "sound" plays; a slider labeled "Distance to Obstacle (cm)."

Interactive controls: The distance slider (0-50 cm); a threshold marker on the slider showing the 10 cm trigger point; a mute toggle for the speaker icon.

Default parameters: Slider starts at 50 cm (clear path), calm face shown, speaker silent.

Behavior: Dragging the slider below the 10 cm threshold switches the face to an alert expression and pulses the speaker icon once; dragging back above the threshold returns the face to calm; the mute toggle disables only the speaker pulse, leaving the face logic unaffected.

Implementation notes: p5.js canvas with two simple face states (calm, alert) drawn from parameterized eye/mouth shapes; threshold comparison against the slider's current value on every frame.
</details>

!!! mascot-encourage "Combining kits feels harder than it is — the sensor code never changes"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If wiring a display kit and a sounds kit onto the same robot feels like doubling the difficulty, that's a normal first reaction — but it isn't true here. The distance-reading code you already trust stays exactly the same; you're only adding a second and third thing that reacts to it.

## IoT Kits for Monitoring the World

### IoT Project Kit

**An IoT project kit** ("Internet of Things") bundles one or more environmental sensors with a Pico and, in this book's projects, keeps its readings local to the device rather than requiring a network connection — the club-friendly version of a category more often associated with sensors that report to a cloud service. An IoT project kit's defining trait is what it measures, not where the data ends up: conditions in a room over time, rather than a single momentary reading a student checks once and moves on from.

A worked example shows why IoT project kits behave differently in a session from every other kit in this chapter: a gyroscope or motion kit's reading is interesting the instant a student tilts or shakes it, but a light, temperature, or humidity reading barely changes over a five-minute demonstration, so an IoT project kit's real payoff usually shows up only after it has been left running for an hour, a class period, or an overnight stretch, logging a value every few minutes rather than reacting to something the moment it happens.

### Light Temp Humidity Monitor

**A light, temperature, and humidity monitor** is the most common IoT project kit built for this book's clubs, combining a photoresistor for ambient light, a temperature sensor, and a humidity sensor into one small board that a program can read together on a shared schedule, typically once every minute or few minutes rather than continuously.

A worked example walks through a full session's use of the kit: a student sets the monitor on a windowsill at the start of a two-hour club meeting, and a short program appends one line — timestamp, light level, temperature, and humidity — to a simple list every sixty seconds. By the end of the session, that list has grown to roughly 120 rows, and displaying it as a simple line chart afterward shows the light level climbing as the afternoon sun moves onto that side of the building, while temperature and humidity stay comparatively flat — a clear, visual result from a kit that produced nothing dramatic to look at moment to moment, only a pattern once enough readings accumulated.

### NightLight Project

**The NightLight project** applies a light, temperature, and humidity monitor's photoresistor reading to a single practical output: automatically switching on an LED, or a short strip of NeoPixels from Chapter 19, once the ambient light level drops below a chosen threshold, and switching it back off once light returns above that same threshold.

A worked example shows the entire project as one threshold check layered on top of a reading a student has already seen: reading the monitor's light-level value once a second and comparing it against a threshold of, say, 200 out of a possible 1000 turns on an LED the moment a room goes dark and turns it back off the moment a light switch flips on again — the identical threshold-and-react pattern the Motion Kit section used for shake detection and the Microphone Kit section used for clap detection, now applied to light instead of acceleration or sound. A student who has already built a shake-detecting or clap-detecting program typically needs only a few minutes to adapt it into a working NightLight, which is worth a mentor pointing out directly: threshold checks are one pattern reused across nearly every sensor kit in this book, not a separate skill per kit.

!!! mascot-thinking "Every threshold project in this chapter is the same three-step idea"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the pattern repeating across this whole chapter: read a number, compare it to a fixed threshold, react. A gyroscope, a microphone, and a light sensor all plug into that exact same three-step shape — once a student has built one threshold project, they have effectively built the skeleton for all of them.

## Getting Any Kit Running

### Kit Assembly Instructions

**Kit assembly instructions** are the ordered, written steps that accompany every kit in the club's bins, specifying which wires connect to which pins, in what order, and what a correctly wired kit should do the moment it is powered on — the same role Chapter 19's Robot Kit Assembly sequence played for the robot kit, generalized here to every sensor, sound, and IoT kit this chapter has covered.

A worked example shows why generic, kit-independent instructions fail in practice: a gyroscope kit and a motion kit share the same four-pin I2C wiring pattern used by the display kit earlier in this chapter, but a written instruction sheet that only says "connect the data pins" leaves a student unable to tell which of the module's several pins is which without a labeled diagram specific to that exact board. Good kit assembly instructions name the physical pin labels printed on the module itself — SDA, SCL, VCC, GND — rather than only abstract role names, since a student matching a printed label to a printed label makes far fewer mistakes than a student trying to infer which unlabeled pin plays which electrical role.

### Kit Component Checklist

**A kit component checklist** is the itemized list of every part a specific kit should contain, used before and after a session to confirm nothing is missing or has migrated into the wrong bin — the same discipline a mentor already applies informally when blink-testing a Moving Rainbow kit in Chapter 19, made explicit and written down for kits with more small, easily separated parts.

A worked example shows the checklist catching a problem before it becomes a session-time crisis: a mentor opens a sound spectrum kit bin the morning of a session and checks it against a printed list — Pico, microphone module, four jumper wires, small breadboard, USB cable — and discovers only three jumper wires present, one having ended up in a different kit's bin during the previous week's cleanup. Discovering that gap during a five-minute morning check costs nothing; discovering it after a student has already wired three of the four needed connections and is waiting on a mentor to find a fourth wire costs real session time and a student's patience.

### Kit Difficulty Rating

**A kit difficulty rating** is a simple label — commonly beginner, intermediate, or advanced — assigned to each kit in the bin based on how many wiring connections it needs, how much code a working project requires, and how easily a small mistake produces a confusing, hard-to-diagnose result rather than an obvious one. A gyroscope kit that reports three separate axis numbers a student must interpret together rates higher than a microphone kit that reports one obvious loudness value, even though both wire up in a similar number of steps.

A worked example shows a difficulty rating changing a real scheduling decision: a mentor planning a club's very first session for three brand-new students chooses microphone kits, rated beginner, over sound spectrum kits, rated intermediate, specifically because a beginner student's first successful project should confirm one clear cause and effect — clap, number jumps — rather than asking that same student to also interpret a twelve-bar frequency display on day one. The sound spectrum kit is not a worse kit; it is simply the wrong kit for a first session, which is exactly the judgment a difficulty rating exists to support.

!!! mascot-tip "Match difficulty rating to session number, not to the loudest student request"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut for planning: save advanced-rated kits — sound spectrum, gyroscope orientation projects — for a club's third or fourth session, once beginner-rated kits have built confidence, even when an eager student asks for the fancier kit on day one.

Now that assembly, checklists, and difficulty ratings have all been defined, the table below gathers every kit family from this chapter into one reference a mentor can scan before planning a session.

| Kit | Sensor/Component Type | Typical Difficulty Rating | Classroom Noise Level |
|---|---|---|---|
| Display Kit | OLED screen (output only) | Beginner | Silent |
| Gyroscope Kit | Gyroscope | Intermediate | Silent |
| Motion Kit | Accelerometer | Beginner | Silent |
| Microphone Kit | Microphone | Beginner | High (picks up whole room) |
| Sound Spectrum Kit | Microphone + frequency processing | Advanced | High (picks up whole room) |
| Robot Sounds Kit | Speaker/buzzer (output only) | Beginner | Low (adds sound, doesn't capture it) |
| Robot Display Kit | OLED + robot chassis (output only) | Intermediate | Silent |
| IoT Project Kit (light/temp/humidity) | Photoresistor + temperature + humidity | Beginner | Silent |

## Chapter Summary

This chapter filled out the rest of the club's kit bin: gyroscope and motion kits for orientation and movement, a family of sound kits that runs from a single loudness number up to a full frequency spectrum display, IoT kits that quietly log light, temperature, and humidity over a whole session, and the robot sounds and display kits that turn any of those readings into a face or a chime a bystander can read without touching a keyboard. Underneath nearly every kit sits the same read-compare-react pattern this book has used since Chapter 16, and every kit now comes with the assembly instructions, component checklist, and difficulty rating that keep a mentor from discovering a missing wire or an over-ambitious lesson plan in front of a room full of waiting students.

!!! mascot-celebration "You can now match any sensor, sound, or IoT kit to the right lesson"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just worked through an entire shelf of specialized kits — gyroscope, motion, sound, spectrum, and IoT — and you know how to read a difficulty rating, run a component checklist, and pick the right kit for the session in front of you. That's a mentor's real toolkit, not just a student's.

[See Annotated References](./references.md)
