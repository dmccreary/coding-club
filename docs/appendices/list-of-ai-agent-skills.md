# List of AI Agent Skills for Coding Clubs

An AI agent skill is a folder with a `SKILL.md` file that teaches a coding agent, such as
Claude Code, OpenAI ChatGPT or Google AntiGravity how to do one job well and the same way every time.
AI agent skills are the primary tool we use to keep consistently high quality in all
the content we create for our coding clubs.

The skills listed below came from this book and from the related textbooks listed in the
[course description](../course-description.md). Each one turns a task that would take
a club leader an afternoon into a single request: "make a challenge card for the
motor lab" or "draw the wiring diagram for the Moving Rainbow kit."

To use a skill, copy or link its folder into your agent's skills directory. For Claude
Code that is `~/.claude/skills/`. For OpenAI that is `~/codex/skills`.  For Google the
directory is `~/.gemini/antigravity/skills`. Each entry below links to the skill's folder on
GitHub, where you can read the full instructions before you install it.  You can usually
just tell your generative where the skill is tell it to add the skill.  You will
usually have to restart your generative AI tool after new skills are installed.

## Challenge Card Creator

Writes and prints the [challenge cards](../glossary.md#challenge-card) students pick up from the center table. Each card
has a front side with a title, an icon, a short description and numbered steps, and a
back side with hints followed by a working solution in code or in circuit-building steps.
Cards are color-coded by difficulty: green for beginner, blue for intermediate and black
for advanced. The skill lays out each card as two portrait panels on one landscape
8.5 x 11 sheet, so you print on one side, fold and laminate. It also writes an image
prompt for the card illustration, validates the card data, and checks that Python
solutions actually run.

- **Skill name:** `challenge-card`
- **Source textbook:** Coding Club (this book)
- **Link:** [skills/challenge-card on GitHub](https://github.com/dmccreary/coding-club/tree/main/skills/challenge-card)

## Club Operations

The club leader's assistant for the recurring paperwork of running a club. One skill covers
four jobs: drafting mailing-list messages, announcements, newsletters, reminders and waitlist
notices; onboarding mentors and tracking the status of their background checks; sizing
student capacity from the number of cleared mentors and running the waiting list; and
producing attendance, grant and diversity reports. It drafts and proposes, and a person
approves everything. It never sends a message, never touches a Social Security or license number,
never decides whether a volunteer or child is accepted, and reports gender and race only as
counts with small groups hidden so no child can be identified. This is an early prototype.
It ships with a tested reporting script, message templates and evaluation prompts.

- **Skill name:** `club-operations`
- **Source textbook:** Coding Club (this book)
- **Link:** [skills/club-operations on GitHub](https://github.com/dmccreary/coding-club/tree/main/skills/club-operations)

## Scratch Lab Generator

Turns a one-sentence description of a challenge and its solution into a finished
Scratch lab. Each lab includes a lesson page narrated by the mascot, a "before" and an
"after" block diagram, and two real `.sb3` project files students can open directly in
Scratch. The block programs are written first as text, and both the diagrams and the
downloadable projects are generated from that text, so they never disagree with each other.

- **Skill name:** `scratch-lab-generator`
- **Source textbook:** [Scratch Programming](https://dmccreary.github.io/scratch-textbook/)
- **Link:** [skills/scratch-lab-generator on GitHub](https://github.com/dmccreary/scratch-textbook/tree/main/skills/scratch-lab-generator)

## Python Lab Generator

Generates a complete student-facing Python lab page from a topic or concept. The page
has an in-browser code editor with line numbers and syntax highlighting, connected to
the Skulpt Python interpreter, so students read, run and edit code without installing
anything. The skill prefers turtle graphics labs that draw on screen, and falls back to
text-only labs when a program produces no drawing. Each lab includes prediction
prompts, learning checks and experiments, and the skill adds the new lab to the lab
index page.

- **Skill name:** `python-lab-generator`
- **Source textbook:** [Learning Python](https://dmccreary.github.io/learning-python/)
- **Link:** [skills/python-lab-generator on GitHub](https://github.com/dmccreary/learning-python/tree/main/skills/python-lab-generator)

## Project Kit Generator

Turns a dull single-sensor MicroPython lab into a complete, classroom-ready project kit.
A low-cost color smartwatch display (about $5) acts as a "window" on the sensor so students watch
it react to their breath and fingertips. The skill builds a ladder of small numbered
labs that gradually introduce more complex concept to the student, and they verifies every lab in a desktop
simulator before any hardware exists. The skill also writes the student lesson, the README, and
a printable box cover with a fun name, a photo and a QR code.

- **Skill name:** `project-kit-generator`
- **Source textbook:** [Learning MicroPython](https://dmccreary.github.io/learning-micropython/)
- **Link:** [skills/project-kit-generator on GitHub](https://github.com/dmccreary/learning-micropython/tree/main/skills/project-kit-generator)

## Circuit Diagram Generator

Creates clear wiring diagrams for microcontroller projects in a consistent standard
style: a red power rail across the top, a black ground rail across the bottom, amber
signal wires, light component blocks and a white background. The skill covers Raspberry Pi Pico
projects with NeoPixels, push buttons, rotary encoders, sensors, switches and
batteries. Each diagram is a small Python program built on the schemdraw library, so
it is easy to tweak and re-render, and it produces both PNG and SVG files.

- **Skill name:** `circuit-diagram-generator`
- **Source textbook:** [Moving Rainbow](https://dmccreary.github.io/moving-rainbow/)
- **Link:** [skills/circuit-diagram-generator on GitHub](https://github.com/dmccreary/moving-rainbow/tree/master/skills/circuit-diagram-generator)

## LED Strip Pattern Generator

Writes MicroPython programs for the Moving Rainbow LED strip project. The default
hardware is a Raspberry Pi Pico, a 30-pixel NeoPixel strip and two push buttons, with
pin numbers kept in a shared `config.py` file. The skill knows the classic patterns
(moving dot, color wipe, rainbow cycle, comet tail and random effects) and can combine
several of them into a multi-mode program where a button press switches between
patterns.

- **Skill name:** `led-strip-pattern-generator`
- **Source textbook:** [Moving Rainbow](https://dmccreary.github.io/moving-rainbow/)
- **Link:** [skills/led-strip-pattern-generator on GitHub](https://github.com/dmccreary/moving-rainbow/tree/master/skills/led-strip-pattern-generator)


## Purchasing Guide Generator

Turns a short parts list into a teacher-ready purchasing guide for a kit. The page opens
with a bill of materials that lists required parts first and optional parts after. Each
part then gets its own section with a photo, what it does in the kit, any prep work such
as soldering leads, a price estimate for one unit and for a class of 20, the exact
search keywords that find it, and live eBay, AliExpress and Amazon search links. Use it
when you need to answer "what do I order and what will it cost?" before a purchase
order goes out.

- **Skill name:** `purchasing-guide-generator`
- **Source textbook:** [Moving Rainbow](https://dmccreary.github.io/moving-rainbow/)
- **Link:** [skills/purchasing-guide-generator on GitHub](https://github.com/dmccreary/moving-rainbow/tree/master/skills/purchasing-guide-generator)

## Breadboard Simulation Generator

Builds interactive p5.js MicroSims drawn on a solderless breadboard. Students see what
they would see on their desk: a board, components pushed into numbered holes, jumper
wires, and current visibly moving along the wires when a button closes the circuit. The
simulation runs a real circuit solver for LEDs, resistors, buttons, switches,
capacitors, diodes, potentiometers, buzzers and NPN transistors, and can show an optional
scope panel with voltage and current over time. The skill is set to run on the Opus
model, which handles the layout and circuit logic more reliably.

- **Skill name:** `breadboard-sim-generator`
- **Source textbook:** [Beginning Electronics](https://dmccreary.github.io/beginning-electronics/)
- **Link:** [skills/breadboard-sim-generator on GitHub](https://github.com/dmccreary/beginning-electronics/tree/main/skills/breadboard-sim-generator)

## Schemdraw Circuit Drawer

Converts a plain-language circuit description into a Python Schemdraw program and a
rendered SVG or PNG schematic. It handles series, parallel and mixed circuits as well as
transistor, op-amp, filter and power circuits. The skill keeps the original request in
the program's docstring, runs a validation script on the output, and inspects the
rendered image against the request before it reports success. Where a chapter is in
scope, it proposes the best place for the diagram and asks you to confirm before
editing the chapter.

- **Skill name:** `draw-schemdraw-circuit`
- **Source textbook:** [Beginning Electronics](https://dmccreary.github.io/beginning-electronics/)
- **Link:** [skills/draw-schemdraw-circuit on GitHub](https://github.com/dmccreary/beginning-electronics/tree/main/skills/draw-schemdraw-circuit)

## Hands-On Lab Evaluator

Scores a hands-on electronics lab against a 103-point rubric built around one question:
can a 13-year-old with a $50 parts kit follow the page alone, build the circuit and know
why it works? The score goes into the page's frontmatter as `quality_score`. Every lost
point becomes a specific item in the lab's TODO list, together with the name of the
skill that can generate the missing piece. Run it before publishing a new lab so you
know what is missing before you write anything else.

- **Skill name:** `hands-on-lab-evaluator`
- **Source textbook:** [Beginning Electronics](https://dmccreary.github.io/beginning-electronics/)
- **Link:** [skills/hands-on-lab-evaluator on GitHub](https://github.com/dmccreary/beginning-electronics/tree/main/skills/hands-on-lab-evaluator)

## Add Robotics Sensor

Adds a new standalone sensor kit to the textbook from a sensor description and the way
you actually wired it to a Raspberry Pi Pico. The skill works with the real board over
`mpremote`: it runs I2C scans and identity checks, diagnoses real failures, and only then
writes the raw-data lesson, a Thonny Plotter lesson, the upload script, the README and
the published student guide. Because it starts from what works on real hardware, the
guide matches what students will see. You need the board connected to your computer to
use it.

- **Skill name:** `add-robotics-sensor`
- **Source textbook:** [STEM Robots](https://dmccreary.github.io/stem-robots/)
- **Link:** [.claude/skills/add-robotics-sensor on GitHub](https://github.com/dmccreary/stem-robots/tree/main/.claude/skills/add-robotics-sensor)

## Kit Quality Guide

Audits an existing robot or sensor kit, or scaffolds a new one, against a full quality
checklist. It checks that each kit pairs its student lesson pages with its MicroPython
code, and that the parts list and wiring photos are complete. It also checks that the
`config.py` and upload script follow the standard conventions, that the README serves
both students and instructors, and that lessons progress from simple to complex. It is
the companion to Add Robotics Sensor, which handles the live hardware bring-up.

- **Skill name:** `kit-quality-guide`
- **Source textbook:** [STEM Robots](https://dmccreary.github.io/stem-robots/)
- **Link:** [.claude/skills/kit-quality-guide on GitHub](https://github.com/dmccreary/stem-robots/tree/main/.claude/skills/kit-quality-guide)

## Kit Box Cover Generator

Creates a printable, single-page HTML box cover for a hardware kit. The 6 x 4 inch retail-style
cover shows a real photo of the assembled kit, a short list of reasons a student would
want to build it, audience badges and a footer bar of specifications. It rewrites the
engineering README into student-friendly benefits instead of copying it. You must
supply a photo of the assembled kit, and the skill asks for one if you have not.

- **Skill name:** `kit-box-cover-generator`
- **Source textbook:** [Robot Faces](https://dmccreary.github.io/robot-faces/)
- **Link:** [skills/kit-box-cover-generator on GitHub](https://github.com/dmccreary/robot-faces/tree/main/skills/kit-box-cover-generator)

## MicroPython OLED Renderer

Runs MicroPython drawing code on your computer and saves what the 128 x 64 monochrome OLED
screen would show as a PNG image, scaled up five times to 640 x 320 pixels. It works
with unmodified `framebuf` and `ssd1306` scripts, so you can preview a robot face or
generate an image for a lesson without any hardware. For animations it can capture
several frames and combine them into a GIF.

- **Skill name:** `micropython-oled-render`
- **Source textbook:** [Robot Faces](https://dmccreary.github.io/robot-faces/)
- **Link:** [skills/micropython-oled-render on GitHub](https://github.com/dmccreary/robot-faces/tree/main/skills/micropython-oled-render)

The related textbooks Clocks and Watches, Signal Processing on a $5 MicroController,
STEM Classroom Administration, Raspberry Pi STEM and Learning Linux did not have any skills
when this list was compiled.

## Pi Keys Generator

Generates Python and shell scripts that control the RGB lights under the keys of the
Raspberry Pi 500+ keyboard. Ask for "turn F1-F12 blue," a typing-speed indicator or an
email notification flash and it writes the script using the `RPiKeyboardConfig` library
and the `rpi-keyboard-config` command-line tool. It is a fun way to show students that
code can change something physical on the desk in front of them.

- **Skill name:** `pi-keys-generator`
- **Source textbook:** [Moving Rainbow](https://dmccreary.github.io/moving-rainbow/)
- **Link:** [skills/pi-keys-generator on GitHub](https://github.com/dmccreary/moving-rainbow/tree/master/skills/pi-keys-generator)