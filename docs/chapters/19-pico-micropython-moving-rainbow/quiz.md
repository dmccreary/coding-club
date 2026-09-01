# Quiz: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit

Test your understanding of the Raspberry Pi Pico, MicroPython, and wiring and programming the club's Moving Rainbow LED kit with these review questions.

---

#### 1. What is a Raspberry Pi Pico?

<div class="upper-alpha" markdown>
1. A full laptop computer used to write MicroPython code
2. A type of NeoPixel LED strip
3. A small, low-cost microcontroller board that runs a single MicroPython program continuously, without a keyboard, monitor, or operating system of its own
4. A robot chassis designed for open-floor driving
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter defines the Pico as a small, roughly $4 microcontroller board that runs one program continuously from the moment power arrives, with no keyboard, monitor, or operating system of its own. Option A describes a Chromebook, the separate device used to write and test code before copying it to the Pico. Option B confuses the Pico with the NeoPixel strip it controls, a different component entirely. Option D describes a robot chassis, an unrelated hardware category from Chapter 17.

    **Concept Tested:** Raspberry Pi Pico
    **See:** [Raspberry Pi Pico](../../glossary.md#raspberry-pi-pico)

---

#### 2. What makes a NeoPixel LED strip different from a regular string of holiday lights?

<div class="upper-alpha" markdown>
1. Each pixel has its own tiny controller chip, letting every pixel show its own independent color under program control, unlike a regular string where every bulb shows the same color
2. A NeoPixel strip cannot be programmed with MicroPython
3. A NeoPixel strip only works when connected to a Chromebook directly
4. A regular light string can display more colors per bulb than a NeoPixel strip
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter explains that each NeoPixel pixel has its own built-in controller chip, so pixel 5 can glow blue while pixel 6 stays off or shows a different color, unlike a plain light string where every bulb receives the same power and color. Option B contradicts the entire chapter, which programs NeoPixel strips in MicroPython throughout. Option C is incorrect, since a finished kit runs from the Pico alone once `main.py` is loaded. Option D reverses the actual comparison; the chapter states a plain string shows the same color on every bulb, not more colors per bulb.

    **Concept Tested:** NeoPixel LED Strip
    **See:** [NeoPixel LED Strip](../../glossary.md#neopixel-led-strip)

---

#### 3. What is MicroPython?

<div class="upper-alpha" markdown>
1. A visual, block-based coding environment like Scratch
2. A separate programming language entirely unrelated to Python
3. A tool used exclusively for wiring diagrams, not for writing code
4. A compact reimplementation of Python trimmed down to run directly on a microcontroller like the Pico
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter defines MicroPython as a compact reimplementation of Python, trimmed to fit inside a few hundred kilobytes of memory so it can run directly on a microcontroller without an operating system or hard drive. Option A confuses MicroPython with Scratch, the block-based language from Chapter 14. Option B is incorrect, since the chapter states most Python syntax carries over unchanged. Option C misapplies the term to circuit diagrams, an unrelated tool from earlier chapters.

    **Concept Tested:** MicroPython Basics
    **See:** [MicroPython Basics](../../glossary.md#micropython-basics)

---

#### 4. What happens to a MicroPython file saved under the name `main.py`?

<div class="upper-alpha" markdown>
1. It can only be edited using the REPL, never saved permanently
2. It runs automatically every time the Pico powers on, with no computer attached
3. It is deleted automatically after the Chromebook disconnects
4. It only runs when a mentor manually clicks "Run" in the connected editor
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter explains that a file named `main.py` runs automatically every time the Pico powers on with no computer attached, exactly how a finished Moving Rainbow kit keeps running after the Chromebook is put away. Option A confuses this with the REPL, a separate live-typing mode that saves nothing. Option C invents a deletion behavior the chapter never describes. Option D describes a file saved under any other name, the opposite of how `main.py` behaves.

    **Concept Tested:** MicroPython Basics
    **See:** [MicroPython Basics](../../glossary.md#micropython-basics)

---

#### 5. Why does the chapter recommend scheduling remote-control robot driving as a bounded, five-minute reward rather than allowing it at any point during coding time?

<div class="upper-alpha" markdown>
1. Because remote-controlled robots are more expensive to repair than autonomous ones
2. Because remote controls are prohibited by the club's code of conduct
3. Because racing and crashing a remote-controlled robot is more immediately rewarding than watching sensor code, so leaving it available at any time costs real session time by default
4. Because remote-controlled robots cannot use the same distance sensor as autonomous robots
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's worked example shows two students still racing robots twenty minutes into a five-minute test drive, explaining that racing is simply more immediately rewarding than coding, so the practical fix is scheduling it as a bounded reward rather than an open invitation. Option A invents a cost difference the chapter never discusses. Option B fabricates a code-of-conduct prohibition that does not exist in the text. Option D is factually wrong, since both modes can use the same hardware, including the distance sensor.

    **Concept Tested:** Remote Control Distraction Risk
    **See:** [Remote Control Distraction Risk](../../glossary.md#remote-control-distraction-risk)

---

#### 6. Why does the chapter recommend writing or reusing one `wheel()` function rather than hand-picking RGB values for every color a pattern might need?

<div class="upper-alpha" markdown>
1. Because one function, written once, can be called for every pixel in every pattern -- Halloween, holiday, Fourth of July -- rather than reinventing color math from scratch each time
2. Because MicroPython does not allow RGB values to be typed directly into code
3. Because a `wheel()` function is required by the Moving Rainbow kit's warranty
4. Because hand-picked RGB values only work with a seven-segment display, not a NeoPixel strip
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's tip explicitly recommends copying one working `wheel()` function into every new pattern script, since it saves far more time than reinventing color math from scratch each season. Option B is factually wrong, since the chapter's own brightness example directly types RGB values into code. Option C invents a warranty requirement that does not exist. Option D confuses NeoPixel color programming with an unrelated display type from Chapter 17.

    **Concept Tested:** Color Wheel Programming
    **See:** [Color Wheel Programming](../../glossary.md#color-wheel-programming)

---

#### 7. A student writes `for i in range(1, 30):` instead of `for i in range(30):` when coloring a 30-pixel NeoPixel strip. What bug does this introduce?

<div class="upper-alpha" markdown>
1. The loop runs one extra time, coloring a nonexistent 31st pixel
2. The strip never lights up at all
3. The loop colors all 30 pixels correctly, just in reverse order
4. Pixel index 0 is skipped entirely, since MicroPython counts pixel positions starting at zero, not one
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's own worked example identifies this exact mistake: writing `range(1, 30)` instead of `range(30)` skips pixel index 0 entirely, since MicroPython counts starting at zero, and reading the loop out loud catches this faster than staring at the number. Option A misidentifies the direction of the error; this mistake skips a pixel rather than adding one. Option B overstates the bug's effect, since 29 of the 30 pixels still light correctly. Option C invents a reversal effect the chapter never describes for this bug.

    **Concept Tested:** MicroPython Loop
    **See:** [MicroPython Loop](../../glossary.md#micropython-loop)

---

#### 8. A pattern's full-brightness red value is 255, and the brightness control code applies a factor of 0.3. Using the chapter's own worked calculation, what value gets sent to the strip for that pixel's red component?

<div class="upper-alpha" markdown>
1. 255
2. 76
3. 30
4. 128
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's own worked example computes exactly this: 255 × 0.3 = 76.5, rounded to 76, noticeably dimmer than full brightness but still clearly lit. Option A is the unscaled full-brightness value, ignoring the brightness factor entirely. Option C misreads the brightness factor itself, 0.3, as if it were the answer in a different scale. Option D does not match applying the stated formula to these numbers.

    **Concept Tested:** Brightness Control Code
    **See:** [Brightness Control Code](../../glossary.md#brightness-control-code)

---

#### 9. A robot's code continuously reads its distance sensor and reverses and turns whenever the reading drops below 10 centimeters, with no person touching a controller the entire time. Which concept does this describe?

<div class="upper-alpha" markdown>
1. Remote control distraction risk
2. Robot kit assembly
3. Autonomous robot behavior, where the robot's own code and sensor readings drive its movement without a human operator directing it moment to moment
4. LED Noodle project
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter defines autonomous robot behavior as movement driven entirely by the robot's own code and sensor readings, with no human operator, matching this exact scenario of a distance-sensor-triggered reverse-and-turn. Option A describes the opposite mode, where a human driver causes distraction. Option B describes the physical build process, unrelated to runtime behavior. Option D describes an unrelated LED wearable project, not a robot's motion.

    **Concept Tested:** Autonomous Robot Behavior
    **See:** [Autonomous Robot Behavior](../../glossary.md#autonomous-robot-behavior)

---

#### 10. During robot kit assembly, why must the chassis standoffs be attached before the Pico and driver board are mounted between them?

<div class="upper-alpha" markdown>
1. There is no way to slide a standoff into place once a board is already screwed down on top of it, so skipping this order makes a later step physically impossible without disassembly
2. The Pico requires the standoffs to be grounded before it will power on
3. The motor driver board will not fit on a chassis without standoffs already attached
4. Standoffs are only needed for autonomous robots, not remote-controlled ones
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's worked example explains that standoffs must go on first because there is no way to slide one into place once a board is already screwed down on top of it, making the assembly order mechanically, not arbitrarily, important. Option B invents an electrical grounding requirement unrelated to the mechanical reason given. Option C misstates the actual mechanical constraint, which concerns standoff placement, not driver-board fit. Option D fabricates a distinction between robot behavior modes that has nothing to do with physical assembly order.

    **Concept Tested:** Robot Kit Assembly
    **See:** [Robot Kit Assembly](../../glossary.md#robot-kit-assembly)

---
