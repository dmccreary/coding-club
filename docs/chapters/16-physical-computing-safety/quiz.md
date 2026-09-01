# Quiz: Physical Computing and Electrical Safety Basics

Test your understanding of physical computing, electrical safety rules, and the breadboard, resistor, LED, and switch vocabulary a mentor needs with these review questions.

---

#### 1. What is physical computing?

<div class="upper-alpha" markdown>
1. Writing Python code that only displays text output on a screen
2. Any club activity that takes place away from a computer lab
3. The process of designing a website's user interface
4. The practice of building systems that sense or act on the physical world through electronic hardware controlled by code
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter defines physical computing as building systems that sense or act on the physical world through hardware controlled by code, contrasted with a traditional program that only takes keyboard input and prints text. Option A describes the opposite, screen-only case the chapter explicitly contrasts physical computing against. Option B invents a location-based definition unrelated to the actual concept. Option C describes web design, an unrelated discipline entirely.

    **Concept Tested:** Physical Computing
    **See:** [Physical Computing](../../glossary.md#physical-computing)

---

#### 2. What causes a short circuit?

<div class="upper-alpha" markdown>
1. A resistor with too high a resistance value
2. Electric current finding a path of very low resistance that bypasses the intended load and flows almost unopposed between a power source's two terminals
3. An LED connected with reversed polarity
4. A battery that has fully discharged
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter defines a short circuit as current finding a very-low-resistance path that bypasses the intended load, causing current to climb far beyond what the circuit was designed to carry, per Ohm's law. Option A describes the opposite condition, since high resistance limits current rather than causing a short. Option C describes a reversed LED, which simply stays dark rather than creating a short. Option D describes a dead battery, an unrelated condition.

    **Concept Tested:** Short Circuit Hazard
    **See:** [Short Circuit Hazard](../../glossary.md#short-circuit-hazard)

---

#### 3. What defines a digital input signal?

<div class="upper-alpha" markdown>
1. It has only two possible states, HIGH or LOW, with no in-between reading
2. It reports a continuous range of values, such as 0 to 1023
3. It only works with a potentiometer
4. It requires pulse-width modulation to function
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter defines digital input as a signal with only two possible states, HIGH or LOW, with no partial or fractional in-between reading, unlike an analog input's continuous range. Option B describes analog input instead, the opposite signal type. Option C confuses digital input with a potentiometer, which is actually an analog input example. Option D confuses digital input with PWM, a technique used for analog output.

    **Concept Tested:** Digital Input
    **See:** [Digital Input](../../glossary.md#digital-input)

---

#### 4. Why does the chapter recommend touching a grounded metal object before handling a microcontroller board?

<div class="upper-alpha" markdown>
1. It improves the microcontroller's wireless signal strength
2. It is required before every multimeter measurement
3. It drains away static charge safely before it can jump into the board and damage sensitive circuitry
4. It resets the board to its factory settings
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter explains that walking across carpet can build thousands of volts of static charge, and touching a grounded object first drains that charge away safely before it can destroy the microscopic circuitry inside a chip. Option A invents an unrelated wireless-signal effect. Option B overstates the habit, which is tied specifically to handling boards, not every multimeter use. Option D fabricates a reset function grounding does not perform.

    **Concept Tested:** Static Electricity Precaution
    **See:** [Static Electricity Precaution](../../glossary.md#static-electricity-precaution)

---

#### 5. How does an analog output using PWM create the appearance of a dimmed LED?

<div class="upper-alpha" markdown>
1. It lowers the supply voltage feeding the LED continuously
2. It switches a digital output on and off extremely fast, and the human eye averages the resulting brightness over time based on the duty cycle
3. It replaces the LED's resistor with a variable one
4. It reduces the LED's forward voltage permanently
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter explains that PWM switches a digital output on and off far faster than the eye can perceive individual flickers, and the eye averages the brightness over time based on the proportion of time spent HIGH, the duty cycle. Option A misdescribes the mechanism as a continuous voltage change rather than fast switching. Option C invents a variable-resistor swap the chapter never describes. Option D fabricates a permanent change to the LED's forward voltage, which PWM does not alter.

    **Concept Tested:** Analog Output
    **See:** [Analog Output](../../glossary.md#analog-output)

---

#### 6. Why does a push button circuit typically include a pull-down resistor connected to ground?

<div class="upper-alpha" markdown>
1. It increases the button's physical durability
2. It converts the button into an analog input
3. It reduces the voltage needed to power the microcontroller
4. It ensures the connected input pin reads a clear, defined LOW value when the button is not pressed, instead of an unpredictable floating value
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter explains that a pull-down resistor gives the input pin a clear LOW reading when the button is not pressed, preventing the unpredictable floating value that can cause a circuit to seem to trigger randomly. Option A invents a durability benefit unrelated to the resistor's electrical function. Option B is incorrect, since a push button remains a digital input regardless of the pull-down resistor. Option C misapplies the resistor's role to overall power supply, not pin-reading stability.

    **Concept Tested:** Push Button Switch
    **See:** [Push Button Switch](../../glossary.md#push-button-switch)

---

#### 7. A mentor wants to safely light an LED from a 5-volt USB source. The LED uses about 2 volts once lit, leaving 3 volts for the resistor to absorb, and the mentor wants current limited to 20 milliamps (0.02 amps). Using Ohm's law, what resistor value should the mentor choose?

<div class="upper-alpha" markdown>
1. 150 ohms
2. 20 ohms
3. 60 ohms
4. 300 ohms
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's own worked example computes this exact scenario: resistance equals voltage divided by current, so 3 volts divided by 0.02 amps equals 150 ohms, the value used later in the Blinking Light Circuit example. Option B results from dividing by the wrong quantity entirely. Option C is not the result of applying Ohm's law correctly to these numbers. Option D doubles the correct value and does not match the chapter's calculation.

    **Concept Tested:** Current Basics
    **See:** [Current Basics](../../glossary.md#current-basics)

---

#### 8. Before handing out a robot kit, a mentor notices its battery pack looks slightly puffy and feels warm to the touch. What does the chapter say the mentor should do?

<div class="upper-alpha" markdown>
1. Use it anyway, since AA and coin-cell batteries are always low-risk
2. Charge it fully first, then set it aside for inspection later
3. Set the pack aside immediately and never plug it back in, since this is a stop-work situation rather than something to troubleshoot further
4. Wrap it in an anti-static bag and continue the session as planned
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's warning is explicit: a battery pack that looks even slightly puffy or feels warm should be set aside immediately and never plugged back in, since this is one of the few situations where the right response is to simply stop. Option A misapplies a low-risk description that the chapter reserves for batteries that pass inspection, not damaged ones. Option B dangerously suggests charging a compromised pack, the opposite of the chapter's guidance. Option D confuses an unrelated static-electricity precaution with a damaged-battery response.

    **Concept Tested:** Battery Safety
    **See:** [Battery Safety](../../glossary.md#battery-safety)

---

#### 9. A resistor has bands colored brown, black, red, then gold. Using the chapter's worked example of resistor color coding, what resistance value does this represent?

<div class="upper-alpha" markdown>
1. 100 ohms
2. 1,000 ohms (1 kilohm)
3. 220 ohms
4. 10,000 ohms
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's own worked example decodes brown-black-red-gold as 1,000 ohms: brown and black give the digits 1 and 0, red adds two zeros, and gold indicates a 5 percent tolerance. Option A omits one of the zeros the red band adds. Option C is a different common club resistor value, not the one these specific bands encode. Option D adds one zero too many to the correct calculation.

    **Concept Tested:** Resistor Basics
    **See:** [Resistor Basics](../../glossary.md#resistor-basics)

---

#### 10. A student wires half a circuit on one side of a full-size breadboard's power rail, then continues wiring on the far side of the same rail, and reports that "nothing works" on that far side. Based on the chapter's explanation of breadboard basics, what is the most likely cause?

<div class="upper-alpha" markdown>
1. The student used a female-to-female jumper wire instead of a male-to-male one
2. The resistor's color bands were misread
3. The LED was connected with reversed polarity
4. The center gap on a full-size breadboard splits each side's power rail into two disconnected halves, so a wire on one half does not automatically reach the other half of that same rail
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter explicitly warns that a full-size breadboard's center gap splits each power rail into two disconnected halves, and a student who forgets this often reports that "nothing works" on the far side of the board. Option A describes an unrelated connector mismatch that would not produce this specific symptom. Option B describes a resistor-reading error, unrelated to which rail half a wire reaches. Option C describes reversed LED polarity, which would leave that specific LED dark rather than affect an entire half of the board.

    **Concept Tested:** Breadboard Basics
    **See:** [Breadboard Basics](../../glossary.md#breadboard-basics)

---
