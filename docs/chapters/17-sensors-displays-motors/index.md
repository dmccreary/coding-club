---
title: Sensors, Displays, Motors, and Robot Chassis
description: Covers the six sensor types, three display types, and three motor types used across club kits, plus reading a circuit diagram and choosing a robot chassis.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 05:13:13
metadata:
  ibook:
    version: 1.10
---

# Sensors, Displays, Motors, and Robot Chassis

## Summary

Building on basic circuits, this chapter covers the sensor types (light, temperature, humidity, motion, sound, distance) and display types (OLED, LED matrix, seven-segment) used across the club's projects. It introduces motors -- DC, servo, and stepper -- and the robot chassis that many kits are built around. You will be able to identify the right sensor or motor for a given project.

## Concepts Covered

This chapter covers the following 18 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Circuit Diagram Reading | 466 |
| Sensor Basics | 465 |
| Light Sensor | 448 |
| Temperature Sensor | 395 |
| Humidity Sensor | 342 |
| Motion Sensor | 289 |
| Sound Sensor | 288 |
| Distance Sensor | 282 |
| Display Basics | 264 |
| OLED Display | 263 |
| LED Matrix Display | 195 |
| Seven Segment Display | 194 |
| Motor Basics | 193 |
| DC Motor | 177 |
| Servo Motor | 176 |
| Stepper Motor | 175 |
| Robot Chassis | 174 |
| Floor Robot | 19 |

## Prerequisites

This chapter builds on concepts from:

- [16. Physical Computing and Electrical Safety Basics](../16-physical-computing-safety/index.md)

---

Chapter 16 gave you the vocabulary for a single closed loop: sense, process, act. This chapter fills that loop with the actual parts a club stocks in its kit bins. You will meet six sensor types that turn light, heat, moisture, motion, sound, and distance into signals a microcontroller can read; three display types that turn a program's output into something a student can see at a glance; and three motor types that turn a program's decision into something a robot can actually do. Reading a circuit diagram ties all of it together, since every kit's instruction sheet leans on the same handful of schematic symbols no matter which sensor, display, or motor is wired to it.

!!! mascot-welcome "From one blinking LED to a whole sensing, showing, moving robot"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great — this chapter is where your club's kit bins start making sense as a system, not just a pile of parts! You'll leave here able to look at any sensor, display, or motor a vendor sells and know exactly what it does, how to wire it, and which project it belongs in.

## Circuit Diagrams and Breadboard Layouts

All our coding club textbooks feature several different types of diagrams:

1. **Circuit Diagrams** contain logical component symbols, 
component values and show how the component symbols
2. **Breadboard Diagrams** contain simulated images of what the students will see on their breadboards with photorealistic images of the components that are easy to recognize
3. **Hybrid Diagrams** are combinations of the two types of diagrams.  They show images of components and their connections, however they often mix both symbols (like +5 for power)
and a picture of a component, like an image of a potentiometer with it's three connections.

The good news is that we have AI skills that can help you generate all three types of diagrams for your students.

<!--TODO: Add a infographic comparison overlay microsims with samples of the 
three types of schematics for a Pico and a potentiometer connection -->

### Circuit Diagram Reading

A **circuit diagram**, also called a schematic, represents a circuit's electrical connections using standardized symbols instead of a realistic picture of the physical parts. Where the breadboard photo-diagrams from Chapter 16 showed exactly which physical hole each wire plugged into, a schematic strips that physical detail away and keeps only what matters electrically: which component connects to which, and in what order current flows between them.

Reading a schematic is a lot like reading a subway map instead of a satellite photo of a city. A subway map does not show the actual curve of the tracks or the true distance between stations — it shows only the information a rider needs, which stops connect to which lines. A circuit diagram works the same way: it throws away the breadboard's physical layout and keeps only the wiring topology, which is exactly the information a mentor needs to understand what a circuit does without caring which specific holes a student happened to use.

A handful of symbols cover nearly every beginner circuit a club will build.

- A **battery or power source** is drawn as a set of parallel lines of alternating length — a long line marks the positive terminal, a short line marks the negative terminal.
- A **resistor** is drawn as a zigzag line (or a plain rectangle in some diagrams), the same component whose color bands you decoded in Chapter 16.
- An **LED** is drawn as a diode triangle pointing in the direction current flows, with two small arrows beside it showing light being emitted.
- A **switch or push button** is drawn as a line with a gap in it and a small lever, open when unpressed and closed when pressed.
- A **ground symbol** — three descending horizontal lines — marks a shared return path back to the power source's negative terminal, used so a busy diagram does not need one continuous line drawn all the way back for every single component.

A worked example puts these together. Picture the same blinking-LED circuit from Chapter 16, but drawn as a schematic instead of a breadboard photo: a battery symbol on the left, a wire leading to a resistor symbol, then to an LED symbol (its triangle pointing away from the battery's positive line, matching the LED's anode-to-cathode current direction), then a wire returning to the ground symbol at the battery's negative terminal. A mentor tracing this loop with a finger — battery, resistor, LED, ground, back to battery — is doing exactly the same "unbroken loop" check Circuit highlighted back in Chapter 16, just using symbols instead of a photograph of a real board.

The two diagram styles are not competitors; they answer different questions. A schematic answers "what is electrically connected to what," which is the question you need answered when debugging why a circuit does not work. A breadboard photo-diagram answers "which physical hole does this wire go in," which is the question you need answered when actually building the thing. Most kit instruction sheets print both side by side for exactly this reason, and a mentor who can only read one of the two will get stuck the moment a kit's sheet only shows the other.

#### Diagram: Circuit Symbol Reader

<iframe src="../../sims/circuit-symbol-reader/main.html" width="100%" height="462px" scrolling="no"></iframe>

<details markdown="1">
<summary>Circuit Symbol Reader</summary>
Type: microsim
**sim-id:** circuit-symbol-reader<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/circuits/tree/main/docs/sims/circuit-symbol-flashcards

Purpose: Let a mentor practice recognizing the five schematic symbols used throughout this book's kit diagrams before relying on them during a live session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a schematic symbol, the learner identifies its component name and its role in a circuit.

Visual elements: A flashcard-style panel showing one large schematic symbol at a time (battery, resistor, LED, switch, ground), drawn in a clean black-on-white style matching standard schematic conventions.

Interactive controls: "Flip" button revealing the symbol's name and one-sentence function; "Next" and "Previous" buttons to cycle through all five symbols; a "Quiz Me" toggle that hides the name and asks the learner to type or select it before flipping.

Default parameters: Starts on the battery symbol, unflipped.

Behavior: Clicking "Flip" reveals the answer with a short animation; "Quiz Me" mode tracks a running score of correct identifications across a full pass through all five symbols.

Implementation notes: p5.js canvas rendering each symbol from vector line-drawing functions (no external images); simple state machine for flipped/unflipped and quiz-mode scoring.
</details>

## Circuit Diagram Generator Skill

The Circuit Diagram generator skill is stored in the Beginning Electronics GitHub repo.

[Draw SchemaDraw Circuit](https://github.com/dmccreary/beginning-electronics/tree/main/skills/draw-schemdraw-circuit)

The skill works by using an AI tool like Claude to generate the diagram.  The input is a short description of the circuit.  The output is a image in the format of a PNG image that you can place in your project or lesson plan.  There is also an intermediate file called a "schemadraw" file which is stored in the format of a small Python program.  This format is very easy for AI tool to manipulate and for humans to read.  If you don't like the positioning of a component in the diagram you can just ask your AI tool to modify it.

<!-- TODO: Create an image from the Beginning Electronics Samples -->

### Sample Prompts

!!! prompt
    Please use the /draw-schemadraw-circuit skill to draw a simple LED circuit.

!!! prompt
    Please use the /draw-schemadraw-circuit skill to draw a simple LED circuit.
    Put a 3.3 volt DC power supply on the left and the LED and resistor on the right.
    Make all the components vertically oriented.
    Put the LED above the resistor on the right.
    Make the resistor value be 330 ohm.
    Place the labels to the right of each component.
    Make the 3.3+ power on the top wire red.
    Make the other wires black.

## Sensor Basics and the Sensor Family

In this section we will review some basic sensors that you many want to include
in your coding club electronics kits.  Most sensors we review here cost under $5
and the costs can be significantly reduced by buying sensors in quantities of 10 or more.
The Teacher's Guides for many of the STEM textbooks provide tips on purchasing your
own components.  If you are new to this area, purchasing a sensor kit is a good option.

### Sensor Basics

A **sensor** is a component that converts a physical quantity — light, heat, moisture, motion, sound, or distance — into an electrical signal a microcontroller can read as a digital or analog input. Every sensor in this chapter does the same fundamental job Chapter 16 described for the human body's senses: it translates something happening in the physical world into a voltage or a digital reading, the same "input" stage of the sense-process-act loop, just with a specific, purpose-built physical quantity attached to each one.

Think of a sensor as a translator standing between the physical world and a microcontroller that only understands voltage. A photoreceptor translates "how bright is it" into "how much resistance." A thermistor translates "how hot is it" into a different resistance. A microphone translates "how loud is it" into a wobbling voltage. None of these translators speak the microcontroller's native language directly — code always has to interpret the raw reading and convert it into something meaningful, exactly the way the Analog Input concept from Chapter 16 required rescaling a raw 0-to-1023 potentiometer reading into a usable range.

Picture a mentor helping a new student choose a sensor for a project idea: "I want my robot to stop before it hits the wall." The mentor does not reach for a catalog and start reading specs; instead, the mentor asks a chain of questions out loud. "Are you measuring something that changes continuously, like distance, or something that's basically yes-or-no, like 'is anyone standing in front of it'? Distance — so you want a sensor that reports a number, not just a trigger. Do you need it to work in total darkness? Then skip anything based on visible light and reach for ultrasonic instead." That question-driven process — what am I measuring, continuous or triggered, what conditions will it run in — is the same reasoning a mentor should walk every student through before opening a parts drawer, and it is exactly what the six sensor types in the rest of this section differ on.

Now that a translator role is defined for every sensor, the table below compares the six types this chapter covers side by side.

| Sensor Type | What It Measures | Signal Type | Typical Output |
|---|---|---|---|
| Light Sensor | Brightness | Analog | Voltage from a resistive divider |
| Temperature Sensor | Heat | Analog or digital | Voltage or a direct Celsius reading |
| Humidity Sensor | Moisture in the air | Analog or digital | Percent relative humidity |
| Motion Sensor | Presence of a moving warm body | Digital | HIGH/LOW trigger |
| Sound Sensor | Volume of nearby sound | Analog or digital | Voltage or a threshold trigger |
| Distance Sensor | Distance to the nearest object | Digital timing or analog | A distance value in centimeters |

#### Diagram: Sensor Type Picker

<iframe src="../../sims/sensor-type-picker/main.html" width="100%" height="520px" scrolling="no"></iframe>

<details markdown="1">
<summary>Sensor Type Picker</summary>
Type: microsim
**sim-id:** sensor-type-picker<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a mentor rehearse the same question-driven selection process from the worked scenario above against several project ideas.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: select

Learning objective: Given a short project scenario, the learner selects the sensor type best suited to the required measurement.

Canvas layout: Left (60%) shows a project-scenario card with a one-sentence description ("Turn on a porch light automatically at dusk"); right (40%) shows six sensor icons the learner can select from.

Interactive controls: "New Scenario" button cycling through eight project prompts; six clickable sensor icons (light, temperature, humidity, motion, sound, distance); a feedback panel that appears after a selection.

Default parameters: Opens on the "porch light at dusk" scenario with no sensor selected.

Behavior: Clicking a sensor icon shows immediate feedback — green check and a one-sentence reason if correct, amber note explaining what property of the scenario points to a different sensor if incorrect — before advancing to the next scenario.

Implementation notes: p5.js canvas with an array of scenario objects, each carrying its correct sensor answer and a feedback string; click detection on six fixed icon regions.
</details>

!!! mascot-thinking "A sensor is a translator, not a magic answer"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that every sensor in this chapter does the exact same job at heart: turn a physical quantity into a voltage or a digital reading that code has to interpret. Once that shift clicks, a new sensor you've never used before stops feeling unfamiliar — it's just a new translator for a new physical quantity.

### Light Sensor

A **light sensor**, most commonly a photoresistor or light-dependent resistor (LDR), is a component whose electrical resistance changes with the amount of light falling on it — resistance drops as light increases, a property called photoconductivity. A typical LDR reads roughly 1,000 ohms in bright daylight and can climb past 200,000 ohms in near darkness, a huge swing that makes it easy to detect even modest changes in brightness.

Because a microcontroller's analog input pin reads voltage, not resistance directly, a light sensor is always wired into a voltage divider — the same fixed-resistor-plus-variable-resistor arrangement used for the potentiometer in Chapter 16, just with the LDR playing the variable role instead of a knob. A worked example makes the calculation concrete: pair an LDR with a fixed 10-kilohm resistor across a 5-volt supply, with the analog input reading the voltage at the point between them. In bright light, with the LDR near 1 kilohm, the divider formula gives roughly 5V × 10k / (10k + 1k) ≈ 4.5 volts. In near darkness, with the LDR near 200 kilohms, the same formula gives roughly 5V × 10k / (10k + 200k) ≈ 0.24 volts — a swing large enough that a simple threshold in code reliably tells day from night.

#### Diagram: Photoresistor Voltage Divider Explorer

<iframe src="../../sims/photoresistor-voltage-divider-explorer/main.html" width="100%" height="522px" scrolling="no"></iframe>

<details markdown="1">
<summary>Photoresistor Voltage Divider Explorer</summary>
Type: microsim
**sim-id:** photoresistor-voltage-divider-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/photoresistor-component

Purpose: Let a learner drag a simulated brightness slider and see the LDR's resistance and the resulting divider voltage update together, reinforcing the worked calculation above.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a simulated light level, the learner calculates the resulting LDR resistance and voltage-divider output.

Canvas layout: Left (55%) shows a simple divider circuit diagram (battery, LDR, fixed resistor, analog input point) that brightens or dims a small sun icon with the slider; right (45%) shows the slider, the calculated LDR resistance, and the divider voltage.

Interactive controls: Slider for simulated light level (0%-100%); numeric readouts for LDR resistance (ohms) and divider voltage (volts); a toggle to swap the fixed resistor value between 1k, 10k, and 100k ohms.

Default parameters: Light level 50%, fixed resistor 10k ohms.

Behavior: Moving the light slider recalculates LDR resistance along a logarithmic curve and updates the divider-voltage readout using the standard voltage-divider formula in real time.

Implementation notes: p5.js canvas with a `map()`-based logarithmic curve from light percentage to resistance; live divider-formula calculation on every `draw()` frame.
</details>

### Temperature Sensor

A **temperature sensor** reports the surrounding air or surface temperature, either as an analog voltage that code must convert to degrees or as a ready-made digital reading. Two families cover nearly every club project: an analog sensor such as the TMP36 outputs a voltage that rises 10 millivolts for every degree Celsius, with 0.5 volts corresponding to 0°C; a digital sensor such as the DS18B20 does that conversion internally and reports a temperature value directly over a simple digital connection, at the cost of being slightly more complex to wire and code for a first-time user.

A worked example shows the analog conversion in action: a TMP36 reading 0.75 volts converts to temperature using the sensor's own formula, temperature = (voltage − 0.5) × 100, giving (0.75 − 0.5) × 100 = 25°C — a comfortable room temperature. A reading of 0.90 volts converts to (0.90 − 0.5) × 100 = 40°C, a useful check value for a mentor demonstrating what a feverish reading or a sun-warmed sensor looks like on the same formula. This is the same style of linear formula Chapter 16 used to convert a raw potentiometer reading into a usable output value — a straightforward multiply-and-offset, not a lookup table.

#### Diagram: Temperature Sensor Reading Explorer

<iframe src="../../sims/temperature-sensor-reading-explorer/main.html" width="100%" height="502px" scrolling="no"></iframe>

<details markdown="1">
<summary>Temperature Sensor Reading Explorer</summary>
Type: microsim
**sim-id:** temperature-sensor-reading-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner adjust a simulated analog voltage and watch the TMP36 conversion formula produce a temperature reading step by step.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given an analog sensor voltage, the learner calculates the corresponding temperature using the sensor's linear conversion formula.

Canvas layout: Left (50%) shows a thermometer graphic that rises and falls with the calculated temperature; right (50%) shows the voltage slider, the formula written out with live numbers substituted in, and the final answer.

Interactive controls: Slider for sensor voltage (0.0V-1.5V); a toggle switching between the TMP36 analog formula and a "digital sensor" mode that skips the formula and shows a direct Celsius readout instead, for contrast.

Default parameters: Voltage 0.75V (25°C), analog mode selected.

Behavior: Moving the voltage slider updates the formula's substituted numbers live — "(0.75 − 0.5) × 100 = 25°C" — and the thermometer graphic in real time; switching to digital mode replaces the formula panel with a note explaining that a digital sensor performs this conversion internally.

Implementation notes: p5.js canvas with a text-rendering routine that rebuilds the formula string from the current slider value every frame; simple thermometer fill rendered as a rectangle scaled to temperature.
</details>

!!! mascot-tip "Match the sensor family to the skill level in the room"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: reach for an analog sensor like the TMP36 with newer students, since the conversion formula is simple enough to compute by hand, and save digital sensors like the DS18B20 for older students who are ready for the extra wiring protocol that comes with them.

### Humidity Sensor

A **humidity sensor** measures the amount of water vapor in the surrounding air, reported as a percentage called relative humidity (%RH) — the ratio of the water vapor actually present to the maximum the air could hold at that temperature before it condenses. Most beginner-friendly humidity sensors use a capacitive design: a thin polymer film absorbs moisture from the air, and that absorbed moisture changes the film's electrical capacitance in a way the sensor's internal circuitry converts into a percentage.

A worked example ties humidity back to a real hazard worth knowing before wiring anything: a combined temperature-and-humidity sensor module reading 22°C and 85% relative humidity is close to its dew point — the temperature at which that air's moisture would condense into liquid water on a cool surface. If that same air contacts an exposed circuit board that has cooled below the dew point, for instance sitting near an open window on a cold morning, water condensation can form directly on the board, which is a real short-circuit and corrosion risk. This is exactly the same short-circuit hazard from Chapter 16, just caused by ambient moisture instead of a stray wire, and it is the practical reason humidity sensors matter beyond wanting to know if a room "feels muggy."

Reading the sensor itself takes more care than reading a simple analog voltage. A DHT-series module does not report a smooth, continuously available voltage the way a photoresistor divider does; instead it sends its temperature and humidity readings as a short digital data burst over a single wire whenever code requests one, and that request-and-response cycle takes close to two seconds to complete. A mentor writing code that polls the sensor every 100 milliseconds, expecting a fast update like a light sensor's, will see the same stale reading repeated many times in a row and may mistakenly assume the sensor has failed — when the actual fix is simply to request a new reading no more often than once every two seconds, matching the hardware's own refresh rate.

The table below compares the two humidity sensor modules a club is most likely to encounter.

| Module | Interface | Accuracy | Best Club Use |
|---|---|---|---|
| DHT11 | Digital, single wire | ±5% RH | Budget kits, casual readings |
| DHT22 | Digital, single wire | ±2-5% RH | IoT projects needing better accuracy |

## Displays: Basics and Types

### Display Basics

A **display** is an output component that shows information visually — text, numbers, shapes, or images — rather than a single on/off indicator like an LED. Where a blinking LED from Chapter 16 can only signal one bit of information, on or off, a display can show a changing number, a scrolling message, or a drawn picture, which is exactly why a project that needs to report a sensor reading to a student usually reaches for a display instead of a single light.

Nearly every beginner-friendly display connects to a microcontroller through one of two communication protocols: I2C, which uses just two signal wires shared among multiple devices, or SPI, which uses more wires but transfers data faster. The two-wire I2C protocol matters most in a club setting because several devices can share the very same two wires at once, each one distinguished by a small numeric address baked into the chip — a project that combines a display with a light sensor and a humidity sensor can often wire all three onto the same two I2C wires rather than running a separate pair for each one, as long as no two devices on the bus happen to share an address. A useful way to sort displays for a club's purposes is by how much visual freedom they offer: a fixed-segment display can only show a small, predetermined set of shapes, while a matrix-style display can show any pattern the code chooses to draw, pixel by pixel.

Now that both protocols and both display families are named, the table below sorts the three display types this chapter covers by that same visual-freedom distinction.

| Display Type | Visual Freedom | Typical Interface | Common Club Use |
|---|---|---|---|
| Seven Segment Display | Fixed digit shapes only | Direct pins or a driver chip | Clocks, counters, scoreboards |
| LED Matrix Display | Any pattern within a fixed grid | I2C or SPI via a driver chip | Scrolling text, pixel art, simple animations |
| OLED Display | Any pattern within a high-resolution grid | I2C or SPI | Sensor readouts, small graphics, robot faces |

### OLED Display

An **OLED display** — organic light-emitting diode display — produces its image from an array of individually lit pixels that each generate their own light directly, without needing a separate backlight the way older LCD screens do. A common beginner OLED module packs 128 pixels across and 64 pixels down into a screen not much larger than a postage stamp, addressed over I2C using just two signal wires.

A worked example shows how code actually reaches a specific pixel: every pixel on a 128x64 OLED has an (x, y) coordinate, with (0, 0) at the top-left corner and (127, 63) at the bottom-right. Drawing a horizontal line across the middle of the screen means turning on every pixel where y equals 32, from x = 0 through x = 127 — a single row out of 64 possible rows. This is the same coordinate-and-pixel thinking behind the OLED faces used in this book's sibling robot-building textbooks, where a robot's "eyes" are drawn by lighting up a small cluster of pixels at chosen coordinates rather than by any special "eye" hardware.

#### Diagram: OLED Coordinate System (reused MicroSim)

<iframe src="https://dmccreary.github.io/learning-micropython/sims/oled-coordinate-system/main.html" width="100%" height="432px" scrolling="no"></iframe>

[Run the OLED Coordinate System MicroSim fullscreen](https://dmccreary.github.io/learning-micropython/sims/oled-coordinate-system/main.html){ .md-button }

<details markdown="1">
<summary>OLED Coordinate System (reused MicroSim)</summary>
Type: microsim
**sim-id:** oled-coordinate-system<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/oled-coordinate-system/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/oled-coordinate-system

Reused from the MicroSim catalog (WHAT match score 0.77). Learning objective: Given an (x, y) coordinate, the learner identifies which pixel on a 128x64 OLED display will be affected by a drawing command (Remember).
</details>

### LED Matrix Display

An **LED matrix display** arranges individual LEDs in a grid — most commonly 8 rows by 8 columns, 64 LEDs total — each of which can be switched on or off independently to build up a pattern, letter, or simple animation. Rather than wiring all 64 LEDs to 64 separate microcontroller pins, a driver chip such as the MAX7219 handles the wiring internally and lets code control the whole grid using just a few pins.

A worked example shows how one row of the grid is represented in code: each row of 8 LEDs maps naturally onto a single byte, where each bit position controls one LED — a 1 turns that LED on, a 0 leaves it off. The byte `0b00111100` lights the middle four LEDs of a row and leaves the two on each end dark, which is exactly the kind of pattern a scrolling-text or simple pixel-art project builds up one row at a time, eight bytes forming one complete 8x8 image.

#### Diagram: LED Matrix Pattern Designer

<iframe src="../../sims/led-matrix-pattern-designer/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>LED Matrix Pattern Designer</summary>
Type: microsim
**sim-id:** led-matrix-pattern-designer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/linear-algebra/tree/main/docs/sims/image-matrix-visualizer

Purpose: Let a learner build an 8x8 pattern by toggling individual pixels and see the matching byte-per-row values update live.

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: construct

Learning objective: Given an 8x8 LED matrix grid, the learner constructs a simple pattern or letter by toggling individual pixels and reads off the resulting byte values.

Canvas layout: Left (65%) shows a clickable 8x8 grid of squares representing LEDs; right (35%) shows the eight byte values, one per row, in binary and hex.

Interactive controls: Click any grid cell to toggle it on/off; "Clear" button; a dropdown of preset patterns (heart, arrow, smiley, letter A) to load as a starting point.

Default parameters: Blank grid on load.

Behavior: Clicking a cell toggles its LED state and immediately recalculates and redisplays that row's byte value in both binary and hexadecimal.

Implementation notes: p5.js 2D boolean array for the 8x8 grid; byte value computed per row by summing bit weights of "on" cells; click detection maps mouse position to the nearest grid cell.
</details>

### Seven Segment Display

A **seven segment display** shows a single digit using seven individually controllable LED bars arranged in a figure-eight pattern, labeled a through g by convention, plus an optional decimal point. Lighting a specific combination of those seven segments forms any digit from 0 through 9, and the same idea extends to a handful of letters used in simple digital readouts.

A worked example fixes the segment labeling in memory: segments a, b, and c are the top bar and the two upper side bars; d, e, and f are the bottom bar and the two lower side bars; g is the middle bar splitting the figure-eight in half. Displaying the digit "5" lights segments a, c, d, f, and g while leaving b and e dark — worth tracing by hand once, since it is the segment pattern most often gotten backward by a student who assumes "5" looks like a mirror image of "2" rather than checking the actual segment map.

#### Diagram: Seven Segment Display Explorer (reused MicroSim)

<iframe src="https://dmccreary.github.io/microsims/sims/seven-segment-display/main.html" width="100%" height="472px" scrolling="no"></iframe>

[Run the Seven Segment Display Explorer MicroSim fullscreen](https://dmccreary.github.io/microsims/sims/seven-segment-display/main.html){ .md-button }

<details markdown="1">
<summary>Seven Segment Display Explorer (reused MicroSim)</summary>
Type: microsim
**sim-id:** seven-segment-display<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/microsims/sims/seven-segment-display/<br/>
**Source Repo:** https://github.com/dmccreary/microsims/tree/main/docs/sims/seven-segment-display

Reused from the MicroSim catalog (WHAT match score 0.75). Learning objective: Given a digit 0-9, the learner identifies which of the seven segments (a-g) must be lit to display it (Remember).
</details>

## Sensing Motion, Sound, and Distance

### Motion Sensor

A **motion sensor**, most commonly a PIR (passive infrared) sensor, detects movement by sensing changes in infrared radiation — the heat naturally given off by a warm body — passing across its field of view, rather than by emitting any signal of its own. A small dome-shaped Fresnel lens on top of the sensor splits its field of view into several narrow zones, so a person walking across the room crosses from one infrared zone into another and triggers a detectable change, while someone standing perfectly still produces no change at all and goes undetected.

A worked example matters for a club setting specifically: most PIR modules include a cooldown period, typically 2 to 5 seconds, during which the sensor ignores further motion after it fires once. A project meant to light up every time a student walks past needs that cooldown to be shorter than the gap between students; a project meant to avoid rapid re-triggering from someone lingering nearby needs it longer. A mentor tuning this value by trial and error, rather than assuming the sensor's default setting fits every layout, is a normal and expected part of setting up a motion-triggered activity for the first time.

#### Diagram: PIR Detection Zone Map

<iframe src="../../sims/pir-detection-zone-map/main.html" width="100%" height="480px" scrolling="no"></iframe>

<details markdown="1">
<summary>PIR Detection Zone Map</summary>
Type: infographic
**sim-id:** pir-detection-zone-map<br/>
**Library:** Interactive Infographic Overlay (diagram.js, top-down room view + clickable zones)<br/>
**Status:** Specified

Purpose: Let a learner see the fan-shaped detection zones a PIR sensor's Fresnel lens creates, and identify where a walking path will and will not trigger a reading.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a PIR sensor's detection zones and a person's walking path, the learner explains why crossing zone boundaries triggers detection while standing still within one zone does not.

Image style: Top-down illustrated floor plan showing a PIR sensor mounted on a wall, its field of view divided into 5 narrow fan-shaped zones extending into the room

Image dimensions: 900x600 (landscape)

Zones (5 detection fans, each clickable, plus 2 walking-path overlays): each fan zone shows a color gradient from near (closer to sensor) to far; two path overlays — "Path A: crosses zones" (triggers repeatedly) and "Path B: stands still in one zone" (never triggers after the initial crossing)

Interactive features: Click any zone to highlight it and show its approximate distance range; toggle between Path A and Path B to animate a walking dot and see a live "Motion Detected" / "No Change" indicator update as it moves

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` renders the zone fans and two selectable animated path overlays with a live detection-state readout
</details>

### Sound Sensor

A **sound sensor** converts nearby sound pressure into an electrical signal, typically using a small electret microphone paired with an amplifier circuit, and reports either a continuously varying analog voltage or a simple digital trigger once volume crosses an adjustable threshold. The analog version is useful for measuring how loud something is; the digital, threshold-based version is useful for a simple "did a sound just happen" trigger, such as a clap-activated light.

A worked example shows why the threshold has to be tuned rather than left at a factory default: a classroom's normal background noise might sit around a baseline voltage level, with a hand clap spiking well above it for a fraction of a second. Setting the trigger threshold too close to that background level causes false triggers every time someone talks nearby; setting it too high means a clap has to be uncomfortably loud to register at all. The correct threshold sits clearly above the noisiest normal classroom moment a mentor can produce on purpose during testing — talking loudly, moving a chair — and clearly below an actual clap, found by testing in the room the project will actually run in, not by trusting a number from a tutorial written for a quieter space.

#### Diagram: Sound Threshold Detector

<iframe src="../../sims/sound-threshold-detector/main.html" width="100%" height="482px" scrolling="no"></iframe>

<details markdown="1">
<summary>Sound Threshold Detector</summary>
Type: microsim
**sim-id:** sound-threshold-detector<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner watch a simulated sound waveform against an adjustable threshold line and see exactly when a digital trigger would fire, tracing the same tuning problem worked through above.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a sound waveform and an adjustable threshold, the learner explains how threshold placement determines which sounds register as a trigger and which are ignored.

Data Visibility Requirements: Stage 1 shows the raw simulated waveform (background talk and chair noise as a gently bumpy line, one sharp clap spike); Stage 2 shows the threshold line overlaid at the learner's chosen level; Stage 3 shows a running "TRIGGERED" / "ignored" readout for each waveform peak as it crosses the threshold line.

Interactive controls: Slider to set the threshold level; a "Replay Waveform" button; buttons to swap between three preset waveform scenarios (quiet room, noisy room, single clap).

Default parameters: Threshold set at a level between the noisy-room peaks and the clap spike in the default scenario, so the default already demonstrates correct tuning.

Instructional Rationale: A step-through waveform display with a visible, adjustable threshold line suits this Understand-level objective better than a continuous, unlabeled animation, since a mentor needs to see exactly which peaks cross the line and why, not just watch a general sound-reactive effect.

Implementation notes: p5.js line plot of pre-generated waveform data arrays for each scenario; horizontal threshold line drawn at the slider's y-position; per-peak trigger check comparing peak height to threshold value.
</details>

### Distance Sensor

A **distance sensor**, most commonly an ultrasonic sensor, measures how far away the nearest object is by emitting a burst of sound above human hearing range and timing how long the echo takes to return. A common module emits a 40-kilohertz ultrasonic pulse from one small speaker-like element and listens for the returning echo on a second element, then reports the elapsed time back to the microcontroller.

A worked example turns that elapsed time into an actual distance. Sound travels through air at roughly 343 meters per second at room temperature, and because the pulse has to travel to the object and back, the total echo time covers double the actual distance. The distance formula is therefore distance = (echo time × speed of sound) / 2. An echo time of 6 milliseconds (0.006 seconds) gives distance = (0.006 × 343) / 2 ≈ 1.03 meters — a robot's typical "something is about a meter ahead" reading. A much shorter echo time of 1 millisecond gives distance = (0.001 × 343) / 2 ≈ 0.17 meters, close enough to trigger a collision-avoidance stop on a floor robot.

#### Diagram: Ultrasonic Ranging Explorer (reused MicroSim)

<iframe src="https://dmccreary.github.io/learning-micropython/sims/ultrasonic-ranging/main.html" width="100%" height="452px" scrolling="no"></iframe>

[Run the Ultrasonic Ranging Explorer MicroSim fullscreen](https://dmccreary.github.io/learning-micropython/sims/ultrasonic-ranging/main.html){ .md-button }

<details markdown="1">
<summary>Ultrasonic Ranging Explorer (reused MicroSim)</summary>
Type: microsim
**sim-id:** ultrasonic-ranging<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/ultrasonic-ranging/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/ultrasonic-ranging

Reused from the MicroSim catalog (WHAT match score 0.76). Learning objective: Given an ultrasonic sensor's echo return time, the learner calculates the distance to an obstacle using the speed-of-sound formula (Apply).
</details>

!!! mascot-warning "Two ultrasonic sensors can talk over each other"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: if a robot uses two ultrasonic sensors pointed in similar directions, one sensor's pulse can bounce back and get picked up by the other sensor's receiver, producing a bogus distance reading. The fix is to fire the sensors one at a time in code rather than both at once, giving each one's echo time to arrive before the next one sends its pulse.

## Motors: Making Things Move

### Motor Basics

A **motor** converts electrical energy into rotational mechanical motion — completing the third piece of Chapter 16's body metaphor, where sensors act as senses, a microcontroller's code acts as the decision-making brain, and motors act as the muscles that carry a decision out into physical movement. Three motor families cover nearly every club project, and they differ mainly in how much control and precision a project actually needs.

A **DC motor** spins continuously in one direction at a speed roughly proportional to the voltage applied to it, reverses direction when that voltage is reversed, and has no built-in way to report its own position — it is the simplest and cheapest option, well suited to a robot's drive wheels, where continuous spinning is exactly what is wanted. A **servo motor** adds internal gearing and a feedback mechanism that lets it hold a specific angle, typically somewhere within a 0-to-180-degree range, rather than spinning continuously — well suited to a robot arm joint or a steering mechanism that needs to point somewhere and stay there. A **stepper motor** moves in small, fixed-size steps rather than a smooth continuous rotation, and can report its position indirectly simply by counting how many steps it has been told to take — well suited to a project needing precise, repeatable positioning, such as a small pen-plotter arm, at the cost of more wiring and a dedicated driver chip.

A worked scenario shows this decision play out: a mentor helping a student build a simple line-following robot needs continuous wheel rotation at varying speed — a DC motor, paired with an H-bridge for direction control. The same mentor helping a different student build a robot arm that needs to point at a specific angle and stay there reaches for a servo instead. A third student building a small automated plotter that must move its pen an exact, repeatable distance every time reaches for a stepper. None of the three motors is simply "better" than the others — each wins on the specific dimension its project actually needs.

Now that all three motor families are defined, the table below compares them directly.

| Motor Type | Motion Style | Position Feedback | Control Complexity | Typical Club Use |
|---|---|---|---|---|
| DC Motor | Continuous rotation | None built in | Low | Drive wheels |
| Servo Motor | Holds a set angle (0-180°) | Built in | Low to moderate | Arm joints, steering |
| Stepper Motor | Discrete fixed steps | Indirect (step counting) | Moderate to high | Precise positioning |

#### Diagram: Motor Type Comparison Explorer

<iframe src="../../sims/motor-type-comparison-explorer/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Motor Type Comparison Explorer</summary>
Type: microsim
**sim-id:** motor-type-comparison-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner test the same reasoning from the worked scenario above against new project prompts, matching each one to the correct motor family.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a project's motion requirement, the learner differentiates which of the three motor types — DC, servo, or stepper — is the best fit and explains why.

Visual elements: Three animated motor icons (a spinning wheel for DC, a pointer sweeping to an angle for servo, a dial advancing in discrete clicks for stepper) alongside a project-prompt card.

Interactive controls: "New Project" button cycling through six prompts (drive wheels, robot arm joint, camera pan mount, plotter pen arm, conveyor belt, door latch); three clickable motor icons.

Default parameters: Opens on the "drive wheels" prompt with no motor selected.

Behavior: Clicking a motor icon reveals feedback explaining whether that motor's motion style and feedback match the prompt's requirement, referencing the comparison table's three criteria.

Implementation notes: p5.js canvas with three animated icon functions (continuous rotation, angle sweep, stepped rotation); array of prompt objects each carrying a correct-answer key and explanation text.
</details>

!!! mascot-thinking "Muscles complete the sense-process-act loop"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Think back to Chapter 16's body comparison: sensors were the senses, code running on the microcontroller was the brain, and now motors are the muscles. Every physical computing project you'll ever help a student build is some combination of those three roles — nothing more exotic than that.

### DC Motor

A **DC motor** is a motor that spins continuously in one direction when voltage is applied and reverses direction when that voltage's polarity is reversed. A microcontroller's own output pin cannot safely drive a motor directly, for the same current-limit reason from Chapter 16 that a digital output pin can only source about 20 to 30 milliamps — nowhere near the several hundred milliamps or more a small hobby DC motor draws under load.

A worked example shows the standard fix: an H-bridge is a small circuit, often packaged as a single driver chip, containing four switching elements arranged so that a microcontroller's low-current signal pins can control a motor's much higher current and its direction, without the motor's current ever passing through the microcontroller itself. Setting one pair of the H-bridge's control inputs HIGH and the other LOW spins the motor one direction; swapping which pair is HIGH and which is LOW reverses it. Layering PWM — the same pulse-width modulation technique from Chapter 16's dimmable-LED example — onto one of those control signals adjusts speed the same way duty cycle adjusted LED brightness, just now controlling how fast the motor spins rather than how bright a light appears.

#### Diagram: H-Bridge Direction and Speed Control

<iframe src="../../sims/h-bridge-direction-speed-control/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>H-Bridge Direction and Speed Control</summary>
Type: microsim
**sim-id:** h-bridge-direction-speed-control<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/microsims/tree/main/docs/sims/h-bridge

Purpose: Let a learner toggle H-bridge control inputs and a PWM speed slider and see a simulated DC motor respond with the correct direction and speed.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a set of H-bridge control inputs and a PWM duty cycle, the learner demonstrates how DC motor direction and speed are controlled without routing motor current through the microcontroller.

Visual elements: A simplified H-bridge diagram (four switch symbols in an H shape) with a motor symbol in the middle, plus a spinning wheel icon reflecting current direction and speed.

Interactive controls: Two toggle switches representing the H-bridge control inputs; a PWM duty-cycle slider (0%-100%); a "swap direction" preset button.

Default parameters: Both control inputs LOW (motor stopped), duty cycle 0%.

Behavior: Setting one control input HIGH and the other LOW spins the wheel icon in one direction; swapping the pattern reverses it; raising the duty-cycle slider speeds up the spin animation proportionally.

Implementation notes: p5.js canvas with switch-state variables mapped to a rotation-direction sign and duty-cycle mapped to rotation speed via `map()`.
</details>

### Servo Motor

A **servo motor** is a motor with built-in gearing and a feedback mechanism that lets it move to and hold a specific angle, typically within a 0-to-180-degree range, rather than spinning continuously like a DC motor. A servo is controlled by sending it a repeating pulse on a single signal wire, and the width of that pulse — not its voltage or frequency — determines the angle the servo moves to.

A worked example makes the pulse-to-angle relationship concrete: a standard hobby servo expects a pulse repeated roughly every 20 milliseconds (a 50-hertz rate), with the pulse's own width ranging from about 1,000 to 2,000 microseconds mapping onto the servo's full 0-to-180-degree range. A pulse width of 1,500 microseconds — exactly in the middle of that range — points the servo to its center position, 90 degrees. Using the formula angle = (pulse width − 1000) / 1000 × 180, a pulse width of 1,750 microseconds gives angle = (1750 − 1000) / 1000 × 180 = 135 degrees, turning the servo three-quarters of the way toward its maximum.

#### Diagram: Servo Angle Pulse-Width Explorer

<iframe src="../../sims/servo-angle-pulse-width-explorer/main.html" width="100%" height="482px" scrolling="no"></iframe>

<details markdown="1">
<summary>Servo Angle Pulse-Width Explorer</summary>
Type: microsim
**sim-id:** servo-angle-pulse-width-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/servo-pwm-explorer

Purpose: Let a learner adjust a pulse-width slider and watch a simulated servo arm move to the matching angle, reinforcing the worked formula above.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a target pulse width in microseconds, the learner calculates the resulting servo angle using the standard pulse-to-angle formula.

Canvas layout: Left (55%) shows a drawn servo arm that rotates to match the calculated angle; right (45%) shows the pulse-width slider and the formula with live substituted numbers.

Interactive controls: Slider for pulse width (1000µs-2000µs); numeric angle readout; a "snap to 0°/90°/180°" preset button row.

Default parameters: Pulse width 1500µs (90°, centered arm).

Behavior: Moving the slider recalculates the angle using the formula in real time and rotates the arm graphic to match; preset buttons jump directly to the three reference angles.

Implementation notes: p5.js canvas with arm rotation driven by `map()` from pulse width to angle in degrees, converted to radians for drawing.
</details>

!!! mascot-encourage "Stepper wiring looks intimidating before it clicks"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If four coil wires and a step sequence feels like more than a DC motor's two wires ever asked of you, that's a completely normal reaction — most mentors need to watch the sequence animate once before the pattern makes sense. You've already worked through H-bridges and pulse widths; this is the same kind of "trace it once, then it sticks" idea.

### Stepper Motor

A **stepper motor** moves in small, fixed-size increments called steps rather than rotating smoothly, by energizing a sequence of internal coils in a specific pattern that pulls a toothed rotor forward one step at a time. A common stepper motor takes 200 steps to complete one full 360-degree rotation, meaning each individual step moves the shaft exactly 1.8 degrees — a level of precision neither a DC motor nor a servo can match, since a stepper's position is always known exactly by counting how many steps it has been commanded to take.

A worked example traces one full step cycle on a common four-coil stepper: energizing coil pair 1, then coil pair 2, then coil pair 3, then coil pair 4, then back to coil pair 1, advances the rotor by one step with each transition in that four-step sequence. Repeating that four-step cycle 50 times completes a full 200-step rotation. A dedicated driver chip, such as a ULN2003 or an A4988, handles the actual coil-energizing sequence so that code only needs to specify a direction and a number of steps, rather than toggling four individual pins in the correct order by hand.

#### Diagram: Stepper Motor Step Sequence

<iframe src="../../sims/stepper-motor-step-sequence/main.html" width="100%" height="722px" scrolling="no"></iframe>

<details markdown="1">
<summary>Stepper Motor Step Sequence</summary>
Type: workflow
**sim-id:** stepper-motor-step-sequence<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Purpose: Let a learner trace the four-coil energizing sequence from the worked example above, one transition at a time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a four-coil stepper motor, the learner sequences the coil-energizing pattern that advances the rotor by one step at a time.

Steps: 1. "Energize Coil Pair 1 — rotor aligns to position 1"; 2. "Energize Coil Pair 2 — rotor advances 1.8°"; 3. "Energize Coil Pair 3 — rotor advances another 1.8°"; 4. "Energize Coil Pair 4 — rotor advances another 1.8°"; 5. "Return to Coil Pair 1 — cycle repeats, 50 cycles complete one full rotation"

Interactivity requirement: Every node MUST carry a `click` directive opening an infobox with that step's full explanation, e.g. `click step2 call showInfo("coil-pair-2-energized")`.

Visual style: Circular Mermaid flowchart (steps 1-4-3-2 looping back to 1) with a small rotor-angle readout embedded in each node's label.

Implementation: Mermaid flowchart rendered inside a small wrapper page at the sim-id path, with a JavaScript `showInfo()` callback that populates an infobox beneath the diagram on any node click, and a running "total rotation" counter that increments as the learner clicks through multiple cycles.
</details>

### Robot Chassis

A **robot chassis** is the physical frame or platform that holds a robot's motors, wheels, battery, and controller board together as one working unit. The most common beginner chassis design is a two-wheel differential drive: two independently controlled drive wheels, usually DC motors, plus a free-spinning caster wheel or a skid pad for balance, with no steering linkage at all.

A worked example shows why no steering mechanism is needed: with differential drive, driving both wheels at equal speed and the same direction moves the robot in a straight line; driving one wheel faster than the other curves the robot toward the slower side; and driving the two wheels at equal speed in opposite directions spins the robot in place around a point roughly between the wheels. A mentor demonstrating a simple turn does not need to explain any mechanical steering parts at all — the entire turning behavior comes from independently varying two motor speeds, a detail worth calling out explicitly since it surprises students expecting a robot to steer the way a car does.

#### Diagram: Differential Drive Chassis Explorer

<iframe src="../../sims/differential-drive-chassis-explorer/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Differential Drive Chassis Explorer</summary>
Type: microsim
**sim-id:** differential-drive-chassis-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner set independent left and right wheel speeds and watch a simulated chassis move in a straight line, curve, or spin accordingly.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given independent left and right wheel speeds on a two-wheel differential-drive chassis, the learner explains how the speed difference produces straight-line motion, turning, or spinning in place.

Data Visibility Requirements: Stage 1 shows both wheel speed values side by side as numbers; Stage 2 shows the resulting path type in words ("straight," "curving left," "spinning in place"); Stage 3 shows the chassis icon tracing that actual path on the canvas so the learner connects the numbers to the motion.

Interactive controls: Two sliders, one for left wheel speed and one for right wheel speed (each -100 to 100, negative meaning reverse); a "Reset Position" button.

Default parameters: Both wheel speeds at 50 (equal), producing straight-line motion.

Instructional Rationale: Showing the two numeric speed values alongside a named path type before the chassis moves suits this Understand-level objective, since a mentor needs to connect the cause (speed difference) to the effect (path shape) explicitly rather than only watching motion happen.

Implementation notes: p5.js canvas with a simple differential-drive kinematics calculation (path curvature proportional to the difference between left and right speed) driving an icon's position and heading each frame.
</details>

!!! mascot-tip "A wider wheelbase turns more predictably than a narrow one"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut worth passing to students building their own chassis: a wider gap between the two drive wheels makes turns slower and more controllable, while a narrow gap makes a robot spin sharply from even a small speed difference — pick the wheelbase based on whether the project needs precise, gentle turns or fast, tight ones.

## Floor Robots and What Comes Next

### Floor Robot

A **floor robot** is a robot chassis built to drive across an open floor surface, as opposed to a compact tabletop robot sized to stay within the boundary of a desk or table — a contrast the next chapter explores in full detail. A floor robot's larger drivable area supports bigger, more visible projects, such as an obstacle course or a maze challenge, but it also demands more classroom space, produces more motor noise, and needs closer supervision so a moving robot does not wander into another group's workspace.

A worked example shows the choice in practice: a mentor planning an open-floor obstacle-course activity for a group of six students reaches for floor robots, since the activity's whole point is watching a robot navigate real physical space. A club stocking a low-cost floor robot kit built around a roughly $20 collision-avoidance robot base, paired with a distance sensor from earlier in this chapter, gets a full obstacle-course-ready robot without needing to design a chassis from scratch. The same mentor planning a compact, one-student-at-a-time sensor-testing station at a crowded table reaches for a tabletop robot instead, since a floor robot would need far more room than the table provides and would risk driving off the edge.

| Robot Type | Typical Footprint | Noise Level | Supervision Need |
|---|---|---|---|
| Floor Robot | Full room or open floor area | Higher (drive motors on hard floors) | Higher — needs open, monitored space |
| Table Robot | Desktop-sized | Lower | Lower — contained to one work surface |

## Chapter Summary

This chapter filled in the sense-process-act loop from Chapter 16 with real hardware: six sensor types that translate light, heat, moisture, motion, sound, and distance into readable signals; three display types that turn a program's output into something visible; and three motor types that turn a decision into movement, mounted on a chassis built for either the floor or the tabletop. Reading a circuit diagram ties all of it together, since every kit's instruction sheet leans on the same handful of schematic symbols no matter which specific sensor, display, or motor is wired to it.

!!! mascot-celebration "You can now identify the right sensor, display, and motor for any project"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just built a working mental map of six sensors, three displays, and three motors — and you can now match any project idea a student brings you to the right part in the kit bin. That's the exact skill this chapter set out to give you, and every robot-building project from here on out leans on it.
