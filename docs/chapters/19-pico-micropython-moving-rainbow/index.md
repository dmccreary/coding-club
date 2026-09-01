---
title: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit
description: Introduces the Raspberry Pi Pico and MicroPython, then applies both to wiring and programming the club's Moving Rainbow LED kit, including seasonal patterns and an overview of robot and robot-face kits.
generated_by: claude skill chapter-content-generator
date: 2026-09-01 05:42:07
metadata:
  ibook:
    version: 1.10
---

# Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit

## Summary

This chapter introduces the Raspberry Pi Pico and MicroPython programming, then applies both to the club's most popular hardware project: the Moving Rainbow LED kit. It covers wiring the NeoPixel strip and programming color, brightness, and animation patterns, including seasonal projects like Halloween costumes and holiday lights. You will be able to wire and program a Moving Rainbow kit.

## Concepts Covered

This chapter covers the following 20 concepts from the learning graph:

| Concept | CIS Score |
|---------|-----------|
| Raspberry Pi Pico | 694 |
| MicroPython Basics | 163 |
| MicroPython Syntax | 162 |
| MicroPython Loop | 161 |
| NeoPixel LED Strip | 160 |
| LED Strip Wiring | 159 |
| Moving Rainbow Kit | 158 |
| Moving Rainbow Pattern | 79 |
| LED Noodle Project | 78 |
| Halloween Costume Lighting | 77 |
| Holiday Light Pattern | 76 |
| Fourth Of July Pattern | 75 |
| Color Wheel Programming | 74 |
| Brightness Control Code | 73 |
| Animation Timing Code | 72 |
| Robot Kit | 71 |
| Robot Kit Assembly | 70 |
| Remote Control Distraction Risk | 69 |
| Autonomous Robot Behavior | 68 |
| Robot Face Kit | 67 |

## Prerequisites

This chapter builds on concepts from:

- [14. Computational Thinking, Scratch, and Python Basics](../14-computational-thinking-scratch-python/index.md)
- [16. Physical Computing and Electrical Safety Basics](../16-physical-computing-safety/index.md)
- [17. Sensors, Displays, Motors, and Robot Chassis](../17-sensors-displays-motors/index.md)

---

Chapter 17 filled the club's kit bins with sensors, displays, and motors. This chapter introduces the board that ties every one of those parts together: the Raspberry Pi Pico, a tiny, inexpensive microcontroller that runs the MicroPython code a student writes. Once you can wire a Pico and read simple MicroPython, the chapter's second half puts both skills to work on the club's single most popular hands-on project — the Moving Rainbow kit, a NeoPixel LED strip that turns a page of code into a strip of moving color a student can wear, hang, or carry. The same Pico and MicroPython skills carry straight into robot kits, the chapter's closing topic, where a chassis, motors, and a battery turn code into motion instead of light.

!!! mascot-welcome "From kit bins to a working, blinking, moving rainbow"
    ![Circuit waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Let's build something great — this is the chapter where a $4 board and a few lines of MicroPython turn into a strip of color a student designed themselves! By the end, you'll be able to wire and program a complete Moving Rainbow kit, adapt it for Halloween, the holidays, or the Fourth of July, and know exactly which robot kit to reach for next.

## Meet the Raspberry Pi Pico

### Raspberry Pi Pico

A **Raspberry Pi Pico** is a small, low-cost microcontroller board — about the size of a stick of gum — that runs a single MicroPython program continuously, reading its own pins and driving connected components without needing a keyboard, monitor, or operating system of its own. At roughly $4, it is inexpensive enough that a club can hand one to every student without a fundraising conversation, and durable enough to survive a season of being plugged in, unplugged, and occasionally dropped.

The easiest way to introduce a Pico to a nine-year-old — or to a nervous new mentor — is a comparison, not a spec sheet. A Pico is a tiny, always-on brain with none of the distractions of a full computer: it has no web browser, no files to lose, no operating system to freeze, and nothing to click on by accident. Plug it in, and the one program stored on it starts running immediately and keeps running until the power is removed; unplug it, and it simply stops, with nothing to save and nothing to corrupt.

!!! mascot-thinking "A Pico's whole personality is 'one job, running forever'"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice that a Pico never multitasks the way a laptop does — it has exactly one program loaded, and it runs that program from the moment power arrives until the moment it doesn't. Once that clicks, every wiring diagram and every line of MicroPython in this book makes a lot more sense: you're deciding what a tiny, single-minded machine does with its one job, not configuring an app.

A club still needs both a Pico and a Chromebook, and the two are not competing for the same job. A worked comparison shows why: writing and testing a MicroPython program happens on the Chromebook, using its keyboard, screen, and a code editor, and that finished program is then copied onto the Pico over a USB cable, where it takes over and runs on its own — the Chromebook can be closed, unplugged, or handed to the next student, and the Pico keeps blinking, sensing, or lighting up its NeoPixel strip regardless. A Chromebook is the workshop where code gets written; a Pico is the tiny finished machine that goes home in a backpack, on a costume, or inside a robot, carrying only the one program it was given.

Picture a mentor introducing a Pico for the first time to three new students clustered around one table. Rather than opening with "this is a microcontroller," the mentor holds the board up and says, "This board can only do one job at a time, and right now its job is nothing — let's give it something to do." The mentor plugs it into a Chromebook, opens a three-line program that blinks the Pico's built-in LED, and clicks Run. The LED blinks. One student asks, "What if I unplug it and plug it into a battery instead?" The mentor does exactly that, and the LED keeps blinking — no Chromebook attached at all. That two-minute demonstration answers the question every new student silently has — does this thing need a computer to work? — better than any explanation would. It also sets up the physical layout every remaining section of this chapter builds on: which pins are power, which are ground, and which are general-purpose input/output (GPIO) pins free for a project to use, all explorable in the reused pinout diagram below.

#### Diagram: Raspberry Pi Pico Pinout Explorer

<iframe src="https://dmccreary.github.io/learning-micropython/sims/pico-pinout-explorer/main.html" width="100%" height="500px" scrolling="no"></iframe>

[Run the Raspberry Pi Pico Pinout Explorer MicroSim fullscreen](https://dmccreary.github.io/learning-micropython/sims/pico-pinout-explorer/main.html){ .md-button }

<details markdown="1">
<summary>Raspberry Pi Pico Pinout Explorer (reused MicroSim)</summary>
Type: microsim
**sim-id:** pico-pinout-explorer<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/pico-pinout-explorer/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/pico-pinout-explorer

Reused from the MicroSim catalog (WHAT match score 0.83). Learning objective: Given the Raspberry Pi Pico board, the learner identifies the function of each labeled pin — power, ground, and GPIO — by name and number (Remember).
</details>

## Programming the Pico with MicroPython

### MicroPython Basics

**MicroPython** is a compact reimplementation of the Python language, trimmed down to run directly on a microcontroller like the Pico instead of on a full computer with an operating system, hard drive, and gigabytes of memory. Most of the Python syntax a mentor may already know from Chapter 14 carries over unchanged — variables, if-statements, and functions all look the same — but MicroPython trades away Python's larger libraries in exchange for fitting inside a few hundred kilobytes of memory.

A worked example shows the practical difference that matters most in a club: a MicroPython program is saved directly onto the Pico's own tiny flash storage under one of two special filenames. A file named `main.py` runs automatically every time the Pico powers on, with no computer attached — exactly how a finished Moving Rainbow kit keeps running after the Chromebook that wrote it is put away. A file saved under any other name only runs when a mentor or student explicitly tells the connected editor to run it, which is the normal mode for testing a new idea before committing to it as the strip's permanent program.

Between those two saved-file modes sits a third, even faster way to try code: the REPL (Read-Evaluate-Print Loop), a live prompt where a mentor can type a single line and see it take effect immediately, without saving anything at all. A worked comparison ties the three modes together: typing a command at the REPL flips an LED once, right now, and is gone the moment power is lost; saving that same idea to a file named `test.py` lets a student re-run the exact experiment on demand while still connected to the Chromebook; and finally copying the finished, working version into `main.py` is what makes the Pico carry the program home on its own. Most mentors walk a new student through exactly that progression — REPL to test one idea, a named file to develop it, `main.py` to ship it — rather than jumping straight to writing a finished program from a blank file. The diagram below (adapted from a REPL-versus-script workflow template) lets a mentor click through all three modes and see which one is running at each step.

#### Diagram: REPL vs. Saved Script Workflow

<iframe src="../../sims/pico-repl-vs-script-workflow/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>REPL vs. Saved Script Workflow</summary>
Type: workflow
**sim-id:** pico-repl-vs-script-workflow<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/repl-workflow

Purpose: Let a mentor click through the REPL, a saved test file, and a saved main.py file to see which one is running at each stage and what happens to it when power is removed.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given the Pico's REPL prompt, a saved test file, and a saved main.py file, the learner explains the difference between typing a command interactively and running a script automatically at power-up.

Visual elements: Three labeled panels left to right — "REPL," "test.py (run manually)," "main.py (runs at power-up)" — each showing a small Pico icon and a status light that turns on only when that mode is actively running code.

Interactive controls: Three clickable panel buttons; a "Power Cycle" button that shows which panel's code survives a simulated unplug-and-replug.

Default parameters: No panel selected; all status lights off.

Behavior: Clicking a panel highlights it and shows a one-line description of what happens in that mode; clicking "Power Cycle" turns off the REPL and test.py status lights but leaves the main.py light on, reinforcing which mode survives a power loss.

Implementation notes: p5.js canvas with three static panel objects and a power-cycle animation that dims two of the three status lights.
</details>

!!! mascot-tip "Keep a folder of proven scripts, not just the current one"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: save every working `test.py` version to a dated folder on the Chromebook before overwriting it with the next experiment. When a new change breaks something, you can hand a student back the last known-good file in seconds instead of debugging from scratch.

### MicroPython Syntax

**MicroPython syntax** refers to the small set of punctuation and formatting rules — colons, indentation, and parentheses — that MicroPython inherits directly from Python and that determine whether a program runs at all or fails with an error before doing anything. This book does not teach programming syntax as its own subject — that is exactly what the companion Learning Python and Learning MicroPython textbooks are for — but a mentor running a club still needs to recognize syntax at a glance well enough to spot the handful of mistakes that show up in nearly every beginner's first script.

Two mistakes account for the overwhelming majority of syntax errors a mentor will see across a season. The first is a missing colon at the end of a line that starts a new block — an `if` statement, a `for` loop, or a function definition — since MicroPython uses that colon, not a keyword, to mark where a block begins. The second is inconsistent indentation: MicroPython uses the amount of blank space at the start of a line, not curly braces, to decide which lines belong inside a loop or an `if` block, so a line indented one space differently from its neighbors is a real error, not just a style complaint.

A worked example makes both mistakes concrete. This short snippet is meant only to show what a correctly formed block looks like, not to teach loops from scratch:

```python
for i in range(10):
    led.toggle()
    time.sleep(0.5)
```

Every line inside the loop is indented by the same four spaces, and the `for` line ends with a colon. A student who forgets that colon sees a `SyntaxError` before the program runs at all; a student who indents the `time.sleep(0.5)` line by one space less than `led.toggle()` sees an `IndentationError` naming the exact offending line. Both messages point directly at the mistake, which is worth telling students up front — a MicroPython error almost always names the exact line and the exact kind of problem, rather than failing silently.

The diagram below (adapted from a code-indentation checking template) lets a mentor click through several short snippets, some correctly indented and some not, and see which lines an interpreter would flag before ever running them.

#### Diagram: MicroPython Syntax Checker

<iframe src="../../sims/micropython-syntax-checker/main.html" width="100%" height="480px" scrolling="no"></iframe>

<details markdown="1">
<summary>MicroPython Syntax Checker</summary>
Type: microsim
**sim-id:** micropython-syntax-checker<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/code-indentation-explorer

Purpose: Let a mentor practice spotting the two most common beginner syntax mistakes — a missing colon and inconsistent indentation — before a live session.

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify

Learning objective: Given a short MicroPython snippet, the learner identifies which lines are correctly formed and which would raise a SyntaxError or IndentationError.

Visual elements: A code panel showing one short snippet at a time, line numbers on the left, with a "Check" button and a result area below.

Interactive controls: "Next Snippet" button cycling through 6 short examples (3 correct, 3 with a missing colon or bad indentation); "Check" button that highlights the offending line in red with the matching error name, or a green checkmark if the snippet is valid.

Default parameters: Starts on the first snippet, unchecked.

Behavior: Clicking "Check" evaluates the current snippet against its stored correct/incorrect answer and highlights the specific line responsible when incorrect.

Implementation notes: p5.js canvas rendering monospaced text lines from a string array per snippet; simple lookup table mapping each snippet to its correct/incorrect status and offending line index.
</details>

### MicroPython Loop

A **MicroPython loop** repeats a block of code a fixed number of times or until a condition changes, and it is the single most-used structure in every Moving Rainbow and robot program this book covers — nearly nothing interesting happens in one pass through a script. Chapter 14 introduced loops in Python on a Chromebook; the mechanics are identical in MicroPython, but the loop is now driving a physical LED strip or motor instead of printing text to a screen.

A worked example shows why a loop matters specifically for the NeoPixel strip covered in the next section. A strip of 30 LEDs needs each one of its 30 pixels set individually — there is no single command that colors an entire strip at once with different colors per pixel. A `for` loop solves this by repeating one line of code once for every pixel index:

```python
for i in range(30):
    strip[i] = (255, 0, 0)
strip.write()
```

This loop runs the line `strip[i] = (255, 0, 0)` thirty times, once for each value of `i` from 0 through 29, coloring every pixel red; changing `range(30)` to `range(60)` is the one edit needed to reuse the exact same code on a longer 60-pixel strip. The final `strip.write()` line, outside the loop, is what actually sends all thirty color values to the physical strip at once — without it, the colors exist only in the Pico's memory and the strip stays dark.

A loop's range is also where most students introduce their first bug: writing `range(1, 30)` instead of `range(30)` skips pixel index 0 entirely, since MicroPython counts pixel positions starting at zero, not one. Reading the loop out loud — "i takes every value starting at zero, up to but not including 30" — catches this mistake faster than staring at the number itself, and it is worth a mentor modeling that reading habit the first few times a new student writes a loop over an LED strip.

A second, equally common loop pattern repeats forever rather than a fixed number of times, using `while True:` instead of a `for` loop with a range — this is the pattern behind every Moving Rainbow animation that keeps cycling colors indefinitely once power is applied, since a finished kit has no keyboard attached to press a key and stop it. The diagram below (adapted from a pixel-indexing template) lets a mentor step through a loop one iteration at a time and watch which physical pixel index changes color on each pass.

#### Diagram: MicroPython Loop Pixel Stepper

<iframe src="../../sims/neopixel-loop-pixel-stepper/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>MicroPython Loop Pixel Stepper</summary>
Type: microsim
**sim-id:** neopixel-loop-pixel-stepper<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/pixel-indexing-explorer

Purpose: Let a learner step through a for loop over a NeoPixel strip one iteration at a time and see exactly which physical pixel index changes on each pass.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a for loop iterating over a NeoPixel strip's pixel indices, the learner demonstrates which physical pixel changes color on each pass through the loop.

Visual elements: A drawn strip of 30 pixel squares above a code panel showing the loop; the current loop variable `i` displayed prominently.

Interactive controls: "Step" button advancing one iteration at a time; "Run" button animating all iterations automatically; "Reset" button; a toggle to start the range at 0 or 1 to demonstrate the off-by-one mistake.

Default parameters: `i` starts unset, range 0-29, all pixels dark.

Behavior: Each "Step" click highlights the current code line, updates the `i` value shown, and colors the matching pixel on the strip; the off-by-one toggle visibly leaves pixel 0 dark for the whole run when enabled.

Implementation notes: p5.js canvas with an array of 30 rectangle objects for pixels; a state machine advancing one index per step or on a timer during "Run."
</details>

## Wiring the Moving Rainbow Kit

### NeoPixel LED Strip

A **NeoPixel LED strip** is a length of flexible circuit board holding a row of individually addressable RGB LEDs, each one capable of showing its own separate color under program control, all driven from a single data wire connected to one Pico pin. This is a meaningfully different technology from a regular string of holiday lights, where every bulb receives the exact same power and shows the exact same color — a NeoPixel strip instead gives every pixel its own tiny controller chip built directly into the LED package, so pixel 5 can glow blue while its immediate neighbor, pixel 6, stays off or glows a completely different color.

A worked example shows how that per-pixel addressing looks in code, building directly on the loop from the previous section: the line `strip[i] = (255, 0, 0)` sets pixel index `i` to full red, and `strip[i] = (0, 0, 255)` sets a different index to blue — each of the strip's pixels is simply an entry in an indexed list, the same indexing concept a student already used with Python lists back in Chapter 14, just now each entry lights up a physical LED instead of holding a number or a word.

!!! mascot-thinking "Every pixel is its own tiny, independently addressable light"
    ![Circuit thinking](../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the shift from earlier chapters: an LED in Chapter 16 was either fully on or fully off for the whole circuit, but a NeoPixel strip lets every single pixel run its own independent color decision at once. That's the one idea underneath every Moving Rainbow pattern in this chapter — thirty independent decisions, not one.

Club kits typically use a strip of 30 pixels, a size chosen deliberately: long enough to look genuinely impressive wrapped around a hat brim or hung along a shelf, but short enough that the whole strip can draw its power from the Pico's own 5-volt USB supply without needing a separate battery pack — a tradeoff the Brightness Control Code section later in this chapter revisits. This single-data-wire design is also why a NeoPixel strip is realistic for a Pico with only a couple dozen available pins in the first place: lighting sixty individually colored, non-addressable LEDs the traditional way would need sixty separate output pins, which no beginner-friendly microcontroller has to spare.

Now that the addressing idea is concrete, the table below contrasts a NeoPixel strip against the plain, non-addressable LED strips a student may have seen on a string of patio lights.

| Feature | Plain LED String | NeoPixel (Addressable) Strip |
|---|---|---|
| Color per bulb | Same color, all bulbs at once | Any color, independently, per pixel |
| Wiring | Power and ground only | Power, ground, plus one data wire |
| Controlled by | A single on/off switch or dimmer | Code, one pixel index at a time |
| Typical club use | Decoration only | Moving Rainbow kit, costumes, IoT projects |

### LED Strip Wiring

**LED strip wiring** covers the three physical connections a NeoPixel strip needs from a Pico: a 5-volt power wire, a ground wire, and a single data wire carrying the pixel-by-pixel color information from the loop code above. Getting the data wire's direction right matters more here than with most other components: a NeoPixel strip's data input is usually marked with an arrow or the letters "DI" (data in) on one end and "DO" (data out) on the other, and the strip only receives commands correctly when the Pico's data pin connects to the DI end, not DO.

A worked example ties the wiring directly to the code: connect the Pico's 5V pin to the strip's power wire, a ground pin to the strip's ground wire, and a chosen GPIO pin — commonly GPIO 0 or GPIO 28 in this book's kit layout — to the strip's data-in wire. That same GPIO pin number then has to match the number written into the MicroPython setup code, since the code has no way to detect which physical pin a wire happens to be plugged into; a mismatch between the wiring and the number in code is the most common reason a freshly wired Moving Rainbow kit produces no light at all, even though every wire is correctly connected to something.

Club kits typically add one small safety habit borrowed directly from Chapter 16's electrical safety rules: connecting a strip's power and ground before the data wire, and disconnecting them in the reverse order, reduces the chance of a stray, unintended connection during the fiddly process of pushing several jumper wires into a breadboard one at a time. A strip longer than the roughly 30-to-60-pixel range a club kit ships with needs a change to this wiring, not just longer code: pulling power for many dozens of fully-lit pixels through the Pico's own 5-volt pin can draw more current than that pin is rated to supply, so longer strips are wired to a separate external power supply instead, with only the data wire and a shared ground still running to the Pico. A club sticking to its stock kit size never needs to make this change, but it is worth a mentor knowing before a student proposes wrapping a strip around an entire classroom doorway.

The diagram below (adapted from a NeoPixel wiring template) lets a mentor click each of the three wires and see exactly which strip terminal and which Pico pin it connects.

#### Diagram: Moving Rainbow Wiring Diagram

<iframe src="../../sims/moving-rainbow-wiring-diagram/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Moving Rainbow Wiring Diagram</summary>
Type: diagram
**sim-id:** moving-rainbow-wiring-diagram<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/neopixel-wiring-diagram

Purpose: Let a mentor click each of the three Pico-to-strip wires and confirm the correct pin and terminal before powering a kit for the first time.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate

Learning objective: Given a Pico and a NeoPixel strip, the learner demonstrates how to wire the power, ground, and data connections between them, including which end of the strip is the data-in end.

Visual elements: A drawn Pico board and a drawn NeoPixel strip with three labeled wires (power, ground, data) running between them; the strip's DI and DO ends clearly marked.

Interactive controls: Click any wire to highlight its two endpoints and show a labeled tooltip ("5V to Power," "GND to Ground," "GPIO 0 to Data In"); a "Check My Wiring" quiz mode that hides the labels and asks the learner to identify each wire.

Default parameters: All three wires shown and labeled; quiz mode off.

Behavior: Clicking a wire highlights it in a distinct color and shows its tooltip; enabling quiz mode removes the labels and scores the learner's clicks against the correct wire-to-terminal mapping.

Implementation notes: p5.js canvas with fixed coordinate endpoints for the Pico and strip graphics; click-detection based on distance to each wire's path.
</details>

### Moving Rainbow Kit

**The Moving Rainbow kit** is the complete, ready-to-assemble parts bundle this book's course description points to directly: a Raspberry Pi Pico, a NeoPixel LED strip, a small breadboard, jumper wires, and a USB cable, sold together for around $15 — cheap enough that a club can outfit an entire table of students without treating the kit as precious or irreplaceable.

A worked example walks through what "assembled" actually means for this specific kit, tying together every concept from this chapter so far: the Pico sits across the center gap of the breadboard; three jumper wires run from the Pico's 5V, ground, and a chosen GPIO pin to the NeoPixel strip's power, ground, and data-in wires exactly as described in LED Strip Wiring above; and a `main.py` file — written using the loop and pixel-indexing ideas from the MicroPython Basics and Loop sections — is copied onto the Pico so the strip starts animating the instant a USB cable supplies power, with no Chromebook required afterward.

This kit earns its status as the club's most popular hardware project precisely because it completes an arc a student can feel: Chapter 16 wired a single LED that could only blink, Chapter 17 added sensors and motors that reacted to the world, and this kit finally lets a student both build something and personalize it — the same thirty pixels can become a slow rainbow fade, a Halloween strobe, or a Fourth of July sparkle purely by changing a few lines of code, without touching a single wire again. That reusability is exactly why the rest of this chapter treats color and animation as a family of small code changes on one already-wired kit, rather than as separate hardware projects.

Now that every part and connection has been introduced individually, the table below lists everything a fully stocked kit bin needs for one student station.

| Part | Approximate Cost | Role in the Kit |
|---|---|---|
| Raspberry Pi Pico | $4 | Runs the MicroPython program |
| NeoPixel LED strip (30 pixels) | $6 | Displays the color pattern |
| Small breadboard | $2 | Holds connections without soldering |
| Jumper wires (3-5) | $1 | Carry power, ground, and data |
| USB cable | $2 | Powers the Pico and loads code |

!!! mascot-tip "Test every kit with the same three-line blink program before a session"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut: load one tiny, known-good blink script onto every kit as you prep for a session, rather than trusting that a kit that worked last month still does. A thirty-second check per kit is far cheaper than diagnosing a wiring mismatch in front of a waiting student.

## Seasonal Patterns for the Moving Rainbow Kit

### Moving Rainbow Pattern

**A Moving Rainbow pattern** is the specific animation the kit is named for: a rainbow of color that appears to travel smoothly along the strip over time, produced not by physically moving anything but by shifting which color each pixel shows on every pass through the main loop. The "motion" a viewer sees is an illusion built entirely from arithmetic — each pixel's color is calculated from its own position plus a single number that increases a little on every loop iteration.

A worked example shows the core idea in miniature: if pixel `i`'s color depends on `(i + offset) % 255`, then incrementing `offset` by 1 every time through the `while True:` loop from the MicroPython Loop section shifts every pixel's color by exactly one step, and repeating that shift dozens of times per second is what the eye reads as a rainbow flowing down the strip. The `% 255` (modulo) keeps the number wrapping back to 0 once it passes 255, rather than growing forever — the same wraparound idea a student may recognize from an odometer rolling from 999999 back to 000000.

This one pattern — position plus a changing offset — is also the template every seasonal pattern in the rest of this section customizes, usually by changing nothing more than the color values or the timing, not the loop structure itself. The gallery below lets a mentor compare several running patterns side by side before choosing one to build toward with a group.

#### Diagram: Seasonal LED Pattern Gallery

<iframe src="../../sims/seasonal-led-pattern-gallery/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Seasonal LED Pattern Gallery</summary>
Type: microsim
**sim-id:** seasonal-led-pattern-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/animation-pattern-comparison

Purpose: Let a mentor compare the base Moving Rainbow pattern against its Halloween, holiday, and Fourth of July variants side by side, before choosing one for a session.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a running LED pattern, the learner differentiates which seasonal theme produced it and identifies the code parameter that changed to create it.

Visual elements: Four small animated strip previews running simultaneously, labeled "Rainbow," "Halloween," "Holiday," and "Fourth of July," each 30 pixels wide.

Interactive controls: Click any strip preview to enlarge it and show the two or three code values (palette and timing) that distinguish it from the base rainbow pattern; a shared speed slider affecting all four previews at once.

Default parameters: All four previews running at a moderate default speed.

Behavior: Clicking a preview pauses the others and displays its distinguishing parameters in a side panel; the speed slider updates all four animations' timing together in real time.

Implementation notes: p5.js canvas with four independent pixel-array objects animated on a shared frame counter; each pattern implemented as a small function returning a color per pixel per frame.
</details>

### LED Noodle Project

An **LED Noodle project** takes the same NeoPixel strip concept and threads it through a length of translucent plastic or fabric tubing — the "noodle" — which diffuses each pixel's sharp point of light into a soft glow, making the strip comfortable to wear draped around a shoulder or wound around a hat brim rather than sitting as a rigid, exposed circuit board.

A worked example shows the one code change this project usually needs beyond a standard Moving Rainbow pattern: because a noodle is viewed up close, against skin or fabric, brightness that looks perfect on a strip mounted three feet away can feel uncomfortably intense worn directly on a body, so most LED Noodle programs lower the brightness scaling factor from the Brightness Control Code section later in this chapter before anything else changes.

The wiring and looping code stay identical to the Moving Rainbow Kit and Moving Rainbow Pattern sections above — the noodle is a physical diffuser change, not a programming change, which makes it a natural second-session project once a kit's core pattern is already working. A mentor introducing this project for the first time often demonstrates both versions side by side — the bare strip and the noodle-wrapped strip running the identical code — so students see directly that the diffuser, not the program, is what changed the strip's whole visual character.

### Halloween Costume Lighting

**Halloween costume lighting** applies the Moving Rainbow kit to a wearable costume, most often swapping the rainbow's full color range for a narrower palette of orange and purple, or adding a strobe-style flicker instead of a smooth fade, to match a pumpkin, ghost, or monster theme.

A worked example shows how small this change really is in code: instead of cycling through the full `(i + offset) % 255` rainbow range, a Halloween version alternates between two fixed colors chosen by whether a pixel's index is even or odd, producing a flickering jack-o'-lantern effect rather than a flowing rainbow.

```python
if i % 2 == 0:
    strip[i] = (255, 90, 0)   # orange
else:
    strip[i] = (100, 0, 200)  # purple
```

Costume lighting introduces one safety consideration worth a mentor raising explicitly: a battery pack worn on a costume needs to sit somewhere it cannot be crushed, bent, or soaked, and any wiring running across a moving joint like an elbow needs enough slack that normal movement does not repeatedly flex a jumper wire loose or snap it — a real risk across a full evening of trick-or-treating that a strip sitting still on a desk never faces. This is also the club's highest-visibility seasonal project, which makes it worth budgeting an extra session purely for battery-mounting and wire-routing practice rather than assuming the electronics alone are the hard part.

### Holiday Light Pattern

A **holiday light pattern** adapts the same strip to a winter-holiday palette — most commonly alternating red and green — and often borrows a "chase" effect where only a handful of lit pixels appear to travel down an otherwise dark strip, echoing the look of traditional string lights rather than a continuous rainbow.

A worked example shows the chase effect's core trick: rather than every pixel showing a color at once, the loop lights only a short run of pixels starting at `offset` and turns every other pixel off, then increments `offset` each pass so the lit stretch appears to slide down the strip.

```python
for i in range(30):
    if offset <= i < offset + 5:
        strip[i] = (255, 0, 0) if i % 2 == 0 else (0, 255, 0)
    else:
        strip[i] = (0, 0, 0)
```

Because both Halloween and holiday patterns reuse the same `offset` variable and the same even/odd color trick, a student who understands one already understands roughly ninety percent of the other — a mentor short on session time can present the holiday version as a two-line change to the Halloween code rather than an unrelated, from-scratch pattern. Many clubs run their final session before winter break on this pattern, making it a natural candidate for a small in-class showcase where every student's strip runs simultaneously along one shared table.

### Fourth Of July Pattern

A **Fourth of July pattern** swaps the palette again, this time to red, white, and blue, and frequently adds a brief random sparkle layered on top of a slower base pattern — a single pixel flashing bright white for one loop pass before returning to the base sequence, mimicking the look of fireworks against a night sky.

A worked example shows how the sparkle is added without disturbing the base pattern underneath: after setting every pixel's base color for the current pass, the code picks one random pixel index and briefly overwrites just that pixel to white before calling `strip.write()`.

```python
strip[random.randint(0, 29)] = (255, 255, 255)
strip.write()
```

Picking a new random index on every single pass, rather than the same one repeatedly, is what makes the sparkle look like scattered fireworks instead of one pixel blinking predictably in place. This pattern is a natural bridge into the next section, since "pick one pixel, briefly change it, then restore the base pattern" is the same isolate-one-element logic a color wheel function uses to calculate any single pixel's color independently of its neighbors. Clubs running a summer session often pair this pattern with the same battery-mounting safety habits introduced under Halloween Costume Lighting, since a Fourth of July strip is just as likely to end up worn or carried outdoors as displayed on a shelf.

## Controlling Color, Brightness, and Timing

### Color Wheel Programming

**Color wheel programming** is the technique behind every smooth color transition in this chapter: a function that takes a single number — a position on a 0-to-255 color wheel — and returns the matching red, green, and blue values needed to display that color on a NeoPixel pixel. Rather than hand-picking RGB values for every color a pattern might need, a mentor or student writes, or reuses, one `wheel(position)` function once, and every pattern in this chapter calls it as needed.

A worked example shows the function doing real work: calling `wheel(0)` returns full red, `wheel(85)` returns full green, and `wheel(170)` returns full blue, with every value in between blending smoothly across the spectrum — exactly the values the `(i + offset) % 255` expression from the Moving Rainbow Pattern section feeds into it, one call per pixel, per loop pass. A student who wants to shift the whole rainbow's starting color changes exactly one number — the starting `offset` — rather than editing any RGB value directly, which is the one line a student typically customizes to make a pattern their own.

The diagram below (adapted from an HSV color-space template) lets a learner drag a position around a color wheel and see the matching RGB values a `wheel()` function would return.

#### Diagram: Color Wheel Hue Explorer

<iframe src="../../sims/color-wheel-hue-explorer/main.html" width="100%" height="480px" scrolling="no"></iframe>

<details markdown="1">
<summary>Color Wheel Hue Explorer</summary>
Type: microsim
**sim-id:** color-wheel-hue-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/hsv-color-explorer

Purpose: Let a learner drag a position around a 0-255 color wheel and see the matching RGB values a wheel() function would return, before writing or reading that function in code.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a position on a 0-255 color wheel, the learner calculates the resulting RGB color a wheel() function would return.

Visual elements: A circular color wheel with a draggable position marker; a swatch showing the resulting color; a readout of the R, G, B values.

Interactive controls: Draggable marker around the wheel; numeric input as an alternative to dragging; a "Show three sample positions" button highlighting 0, 85, and 170.

Default parameters: Marker starts at position 0 (red).

Behavior: Dragging the marker updates the RGB readout and swatch continuously; the sample-positions button steps through the three reference colors from the worked example.

Implementation notes: p5.js canvas with an HSV-to-RGB conversion function driven by the marker's angle; draggable marker using mouse-drag detection along the wheel's circumference.
</details>

!!! mascot-tip "One function, reused everywhere"
    ![Circuit giving a tip](../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Here's a shortcut worth teaching early: once a working `wheel()` function exists in one script, copying that exact function into every new pattern script — Halloween, holiday, Fourth of July — saves far more time than reinventing color math from scratch each season.

### Brightness Control Code

**Brightness control code** scales down the intensity of every pixel's color by a single multiplying factor, letting a program dim an entire NeoPixel strip uniformly without changing any of the hue values a pattern calculates. Full-brightness color and dim color use the exact same `wheel()` output — brightness is a separate multiplication step applied afterward, not a different color calculation.

A worked example shows the calculation directly: multiplying a full-brightness color value of 255 by a brightness factor of 0.3 gives 255 × 0.3 = 76.5, rounded to 76 — noticeably dimmer than full brightness but still clearly lit, applied identically to the red, green, and blue components of every pixel's color before `strip.write()` sends the final values to the strip.

```python
brightness = 0.3
r, g, b = int(255 * brightness), 0, 0
```

Brightness control matters for more than aesthetics. Running thirty NeoPixel pixels at full white — the single most power-hungry color and brightness combination possible — can draw more current than a Pico's own USB power pin comfortably supplies, so most Moving Rainbow programs cap brightness well below 100 percent by default specifically to keep the whole kit running safely from USB power alone, tying directly back to the power-budget tradeoff introduced in the NeoPixel LED Strip section. A mentor troubleshooting a kit that dims unexpectedly or resets when a bright pattern starts should check this brightness factor before suspecting a wiring fault — a factor left too high from a previous lesson is a far more common cause than a loose connection.

### Animation Timing Code

**Animation timing code** controls how fast a pattern appears to move by inserting a short pause inside the main loop between one frame of color and the next, the same way a flip-book's page-turning speed, not the drawings themselves, determines whether the animation looks smooth or jerky.

A worked example shows the tradeoff directly:

```python
time.sleep(0.05)
```

A pause of `0.05` seconds runs the loop about twenty times per second, fast enough that a rainbow appears to flow smoothly; stretching that same pause to `0.5` seconds runs the loop only twice per second, and the identical color code now looks like a slideshow of distinct steps rather than motion at all. Nothing about the color math changes between these two versions — only the single number inside `time.sleep()` changes, making animation speed one of the easiest, safest parameters for a student to experiment with independently. If a finished pattern looks visibly jerky, the sleep value is the first place to look — it is far more often the cause than a mistake in the color-calculating loop itself.

!!! mascot-encourage "There's no 'correct' sleep value — only one that feels right"
    ![Circuit encouraging](../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    If tuning animation speed feels like guesswork rather than a real skill, that's because it partly is — even experienced mentors nudge a sleep value up and down by feel before a pattern looks right. Trust your eyes here more than any formula, and expect to try three or four values before one clicks.

## Robot Kits and Behavior

### Robot Kit

**A robot kit** bundles a chassis, one or two DC motors from Chapter 17, wheels, a battery holder, and a Pico-compatible motor driver board into a single beginner-friendly package, playing the same "everything you need, nothing extra" role for robotics that the Moving Rainbow kit plays for LED projects. A typical club kit includes:

- A robot chassis (Chapter 17's Robot Chassis concept)
- One or two DC motors with wheels
- A battery holder
- A motor driver board that sits between the Pico and the motors
- Mounting hardware — standoffs, screws, and a Pico mounting plate

A worked example shows how the pieces map onto ideas from earlier chapters: the code driving the motors uses the exact same digital-output and PWM ideas from Chapter 16, and the driver board plays the same role an H-bridge did in Chapter 17's DC Motor section — a robot kit does not introduce new electrical concepts so much as it assembles concepts a mentor has already taught into one physical object a student can drive across a table or a floor.

Club kits in this price range typically run $18-$25, in line with the low-cost collision-avoidance robot base referenced in this book's companion STEM Robots textbook, keeping a full robotics project within the same per-student budget as a Moving Rainbow kit. A mentor unboxing a new robot kit for the first time benefits from a full dry-run assembly alone, before students arrive, for the same reason kits get blink-tested in the Moving Rainbow Kit section — finding a missing screw or an unclear instruction sheet is far cheaper to discover in an empty room than in front of six waiting students.

### Robot Kit Assembly

**Robot kit assembly** is the ordered sequence of physical steps — mounting the chassis, attaching motors and wheels, wiring the motor driver board, and securing the battery holder — that turns a box of loose robot-kit parts into one working machine ready for code. Order matters more than it first appears: several later steps are physically difficult or impossible if an earlier step was skipped or done out of sequence.

A worked example makes the ordering concrete: standoffs that hold the chassis's two layers apart have to go on before the Pico and driver board are mounted between them, since there is no way to slide a standoff into place once a board is already screwed down on top of it; similarly, motor wires need to be connected to the driver board before the chassis's second layer is closed up over them, since that layer blocks direct access to the connection points afterward. A mentor who has already assembled the kit once, following the dry-run habit from the Robot Kit section, can catch a student about to skip an order-dependent step before it becomes a frustrating disassembly.

The diagram below (adapted from a robot-assembly-workflow template) lets a mentor click through the assembly sequence and see the mechanical reason each step has to precede the next.

#### Diagram: Robot Kit Assembly Sequence

<iframe src="../../sims/robot-kit-assembly-sequence/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Robot Kit Assembly Sequence</summary>
Type: workflow
**sim-id:** robot-kit-assembly-sequence<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/stem-robots/tree/main/docs/sims/robot-assembly-workflow

Purpose: Let a mentor rehearse the correct assembly order and see the mechanical reason each step must precede the next before running a live build session.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: sequence

Learning objective: Given a robot kit's loose parts, the learner sequences the assembly steps in the order that avoids blocking a later step, and explains why each step precedes the next.

Visual elements: A row of six numbered step cards (standoffs, chassis mount, motor wiring, driver board, battery holder, final closure), each with a small icon.

Interactive controls: Drag-to-reorder step cards; a "Check Order" button; a "Why This Order?" toggle revealing the mechanical reason for each correct step.

Default parameters: Cards start in a shuffled order.

Behavior: "Check Order" compares the current arrangement to the correct sequence and marks each card green or red; the "Why This Order?" toggle shows a one-sentence mechanical explanation beneath each card in the correct sequence.

Implementation notes: p5.js canvas with draggable card objects and array-index-based order checking.
</details>

### Remote Control Distraction Risk

**Remote control distraction risk** describes a specific classroom-management pattern this book's course description names directly: when a robot is driven by a handheld remote or a phone app rather than running its own code, students naturally shift into racing, crashing, and showing off rather than engaging with the programming task a session was actually built around.

A worked example makes the risk concrete rather than abstract: a mentor hands two students remote-control robots during a session meant to practice sensor code, intending the remotes only for a quick five-minute test drive. Twenty minutes later, both students are still racing the robots down a hallway, the sensor code sits untouched, and redirecting the group back to the actual lesson now takes real effort and cuts noticeably into the time left. The remote control itself did nothing wrong — it is simply far more immediately rewarding than watching a sensor value print to a screen, and a mentor who doesn't plan around that reward gap loses session time to it by default, not by any single bad decision.

The practical fix is scheduling, not prohibition: treat remote-control driving as its own timed, bounded activity — a five-minute reward at the very end of a session — rather than as a tool available at any point during coding time, so the distraction has a defined start and end instead of an open invitation. Autonomous Robot Behavior, covered next, is often the better default mode for a coding session specifically because it keeps a robot's behavior tied to the code being taught, rather than to whoever is currently holding a controller.

!!! mascot-warning "A remote control is a reward, not a coding tool — schedule it as one"
    ![Circuit warning](../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Watch out for this: handing out remote controls mid-lesson almost always costs more session time than planned, since racing is simply more fun than debugging code. Save remote-control driving for a scheduled five-minute block at the end of a session instead of leaving it available throughout.

### Autonomous Robot Behavior

**Autonomous robot behavior** is movement and decision-making a robot performs entirely from its own code and sensor readings, with no human operator directing it moment to moment — the robot senses its surroundings, its code decides what that sensor reading means, and its motors act on that decision, the same sense-process-act loop Chapter 16 introduced for a single blinking LED, now scaled up to an entire moving robot.

A worked example contrasts directly with the previous section's remote-control scenario: instead of a student steering with a controller, an autonomous robot's code continuously reads its distance sensor from Chapter 17 and reverses and turns whenever that reading drops below roughly 10 centimeters, without any person touching a control the whole time. The robot's actual path across the floor is not scripted in advance — it emerges from that same simple sense-decide-act rule reacting to whatever obstacles happen to be in its way that day.

Now that both behavior modes are defined, the table below contrasts them directly on the dimensions that matter most for planning a session.

| Dimension | Remote-Controlled | Autonomous |
|---|---|---|
| Who decides each move | A student, moment to moment | The robot's own code and sensors |
| Coding focus during use | None — driving only | Direct — behavior comes from the code taught |
| Distraction risk | High (see previous section) | Low — runs the same regardless of who watches |
| Best scheduled as | A short, bounded reward | The main coding activity |

A mentor planning a session's balance between the two modes has a simple rule of thumb worth passing on: teach and code in autonomous mode, and save remote control, if it is used at all, for the reward slot the previous section described.

### Robot Face Kit

**A robot face kit** pairs a small OLED display — the same technology from Chapter 17's Display Basics section — with a simple robot chassis or standalone mount, letting a student draw eyes, a mouth, and simple expressions on the display instead of, or in addition to, driving motors.

A worked example shows how little code a first expression actually needs: drawing two filled circles for eyes and a single curved line beneath them for a smile reuses the exact same (x, y) pixel-coordinate approach Chapter 17's OLED Coordinate System diagram covered, just aimed at a face shape instead of a sensor readout. Moving the two eye circles a few pixels closer together, or changing the mouth's curve from smiling to a flat line, is often the entire code change between a "happy" and a "neutral" expression — small, readable edits a student can make and immediately see reflected on the physical display.

This kit closes out the chapter's hardware roster by returning to a familiar building block — an OLED display already covered in depth — applied to a new, expressive purpose. A club with both robot kits and robot face kits in its bins can even combine them: mounting a small face display on a robot chassis lets an autonomous robot's code show a simple "searching" expression while its distance sensor looks for a path forward, and a "happy" expression once it finds one — a useful closing example that nearly every advanced kit in this book's later chapters recombines a small set of parts already introduced, rather than introducing entirely new hardware every time.

## Chapter Summary

This chapter started with the Raspberry Pi Pico — a tiny, single-purpose board a mentor can hand to a student without a laptop's usual risks — and built up through MicroPython's basics, syntax, and loops to wire and program the club's most popular hardware project, the Moving Rainbow kit. Color wheel, brightness, and timing code turned one wired kit into a whole season of seasonal patterns, from Halloween to the Fourth of July, without a single wire changing. Robot kits closed the chapter by applying the same Pico and code skills to motion instead of light, with autonomous, sense-and-act behavior recommended as the default over the distraction risk of open-ended remote control.

!!! mascot-celebration "You can now wire, program, and customize a Moving Rainbow kit"
    ![Circuit celebrating](../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You just connected a Pico, MicroPython, and a NeoPixel strip into one working, customizable project — and you know how to steer a robot kit toward autonomous behavior instead of remote-control chaos. That's this book's signature hands-on project fully in your hands, ready for whichever season comes next.
