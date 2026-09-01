# Quiz: Robots, USB Basics, and Electronics Workshop Skills

Test your understanding of assembling table and collision-avoidance robots, USB cable and connector types, power supply selection, and everyday workshop skills with these review questions.

---

#### 1. What is a table robot?

<div class="upper-alpha" markdown>
1. A robot built to drive across an open floor surface
2. A robot chassis built to operate entirely within the boundary of a desk or table
3. A robot that can only be controlled through a datasheet
4. A robot powered exclusively by a USB-C connector
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter defines a table robot as a small chassis built to operate entirely within a desk or table's roughly two-foot-square surface, letting one student run it at their own seat without bumping a neighbor's project. Option A describes a floor robot, the opposite footprint from Chapter 17. Option C invents an unrelated control requirement tied to datasheets. Option D fabricates a power-source restriction the chapter never states.

    **Concept Tested:** Table Robot
    **See:** [Table Robot](../../glossary.md#table-robot)

---

#### 2. According to the chapter's electronics vocabulary, what does "polarity" mean?

<div class="upper-alpha" markdown>
1. An unbroken electrical path exists between two points
2. Current is flowing along an unintended low-resistance path
3. A component only works correctly installed one direction
4. A path that should carry current has been broken somewhere
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's vocabulary table defines polarity as a component only working correctly installed one direction, such as an LED or an electrolytic capacitor. Option A defines continuity instead. Option B defines a short circuit, a different term in the same table. Option D defines an open circuit, also distinct from polarity.

    **Concept Tested:** Electronics Vocabulary
    **See:** [Electronics Vocabulary](../../glossary.md#electronics-vocabulary)

---

#### 3. What does static safe handling involve?

<div class="upper-alpha" markdown>
1. Touching a grounded metal surface before handling a bare microcontroller board, and storing spare chips in anti-static foam or bags
2. Wearing insulated gloves whenever soldering
3. Charging every battery pack fully before storage
4. Labeling every parts bin with its exact resistor value
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter describes static safe handling as touching a grounded surface before handling a bare board and storing spare chips in anti-static foam or bags, since even an unfelt static discharge can destroy a chip's internal wiring. Option B confuses this with soldering safety from Chapter 16, an unrelated hot-tool precaution. Option C confuses this with an unrelated battery-charging habit. Option D describes a component storage system, a different workshop skill.

    **Concept Tested:** Static Safe Handling
    **See:** [Static Safe Handling](../../glossary.md#static-safe-handling)

---

#### 4. A student wires up a distance sensor and writes code that only executes `print(distance)`. According to the chapter, has this student achieved robot sensor integration?

<div class="upper-alpha" markdown>
1. Yes, because the sensor is successfully wired and reporting a value
2. No, because integration requires the robot's behavior to actually change based on the reading, such as `if distance < 20: stop_motors()`
3. Yes, because printing a value is the final step of sensor integration
4. No, because the sensor must be replaced with a light sensor first
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter draws this exact distinction: wiring a sensor and printing its value is not integration; integration is the added step where code changes robot behavior based on that reading, such as stopping the motors below a threshold. Option A confuses successful wiring with actual behavioral integration, which the chapter explicitly separates. Option C misstates printing as a final integration step rather than the unintegrated starting point. Option D invents an unrelated sensor-swap requirement not discussed.

    **Concept Tested:** Robot Sensor Integration
    **See:** [Robot Sensor Integration](../../glossary.md#robot-sensor-integration)

---

#### 5. How does a USB-C connector differ from a USB-A connector?

<div class="upper-alpha" markdown>
1. USB-C only carries data, never power, while USB-A carries both
2. USB-C cannot be used with microcontroller boards
3. USB-C is older and being phased out, while USB-A is the newer standard
4. USB-C is reversible and fits either orientation, while USB-A only fits one way
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter describes USB-C as a reversible oval plug fitting either orientation, unlike USB-A's rectangular plug that only fits one way and often gets attempted backward on a first try. Option A is factually wrong, since both connector types carry power and data together. Option B contradicts the chapter's examples of USB-C robot kits and microcontroller charging. Option C reverses the actual age relationship between the two connector types.

    **Concept Tested:** USB C Connector
    **See:** [USB C Connector](../../glossary.md#usb-c-connector)

---

#### 6. Why does the chapter recommend labeling a parts bin "resistors — 220Ω" instead of just "resistors"?

<div class="upper-alpha" markdown>
1. Because value-specific labeling lets a student grab a handful with confidence rather than reading every resistor's color bands one at a time hunting for a specific value
2. Because it is required by the club's data privacy policy
3. Because unlabeled bins are a fire hazard
4. Because only value-labeled bins can be used with a component testing procedure
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter explains that a bin labeled only "resistors" still forces a student to read color bands one at a time, while a value-specific label lets a student grab a handful with confidence and spot-check just one. Option B invents a data-privacy connection irrelevant to physical parts bins. Option C fabricates a fire-hazard claim not discussed. Option D invents a testing-procedure dependency the chapter never states.

    **Concept Tested:** Component Storage System
    **See:** [Component Storage System](../../glossary.md#component-storage-system)

---

#### 7. A student's Raspberry Pi Pico appears completely dead when connected to a laptop with a cable pulled from a junk drawer, even though the same cable charges a phone just fine. What does the chapter say is the most likely cause?

<div class="upper-alpha" markdown>
1. The Pico's microcontroller chip has failed and needs replacement
2. The laptop's USB port is broken
3. The cable only wires the power pins and skips the two data pins, which is fine for charging a phone but useless for programming a microcontroller
4. The Pico requires a USB-C connector and will never work with USB-A
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's worked example identifies exactly this cause: many bargain cables wire only the power pins and skip the data pins, which charges a phone fine but leaves a microcontroller needing programming data completely dead. Option A jumps to a hardware failure the chapter explicitly says is not the actual problem. Option B is not the cause the chapter identifies for this specific symptom. Option D invents a connector-type restriction unrelated to the actual data-pin issue.

    **Concept Tested:** USB Cable Basics
    **See:** [USB Cable Basics](../../glossary.md#usb-cable-basics)

---

#### 8. A robot's motors and microcontroller are both rated for 5 volts and draw up to 1.5 amps under load, but the club powers it from a USB power bank rated at 5 volts and only 1 amp maximum. The motors stall and the microcontroller resets unexpectedly whenever both motors spin at once. What does the chapter identify as the actual problem?

<div class="upper-alpha" markdown>
1. A code bug causing the motors to draw too much current
2. The voltage is too high for the microcontroller
3. The robot chassis is the wrong size for the motors installed
4. The power bank's maximum current output is too low for the robot's actual draw, even though the voltage matches -- matching voltage alone is not enough
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's worked example is precisely this scenario: a power bank matched on voltage but under-rated on current causes exactly this intermittent stalling and browning-out symptom, resolved by swapping in a power source rated for at least 2 amps. Option A misdiagnoses a hardware power mismatch as a software bug, which the chapter explicitly warns looks similar but isn't. Option B is incorrect since the voltage in this scenario matches correctly at 5 volts. Option C invents an unrelated chassis-sizing issue not discussed.

    **Concept Tested:** Power Supply Selection
    **See:** [Power Supply Selection](../../glossary.md#power-supply-selection)

---

#### 9. Following the chapter's circuit troubleshooting order for an LED that refuses to light, what should a mentor check first, before suspecting the LED itself has failed?

<div class="upper-alpha" markdown>
1. Immediately replace the LED with a new one
2. Confirm power is actually present and at the right voltage, before checking continuity, then orientation, and only then suspecting the component
3. Check the datasheet for the LED's part number
4. Reformat the microcontroller's code from scratch
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's dependable troubleshooting order checks power first, then continuity along the expected path, then component orientation, and only after all three pass does a mentor suspect the component itself has failed. Option A skips directly to the least likely and most wasteful step, replacing a part before checking simpler causes. Option C is a reasonable general skill but not the first step in this specific troubleshooting order. Option D is an extreme, unsupported overreaction the chapter never recommends for a single dark LED.

    **Concept Tested:** Circuit Troubleshooting
    **See:** [Circuit Troubleshooting](../../glossary.md#circuit-troubleshooting)

---

#### 10. A student's LED circuit stays dark even after a mentor confirms power is present, continuity is unbroken, and the LED's orientation is correct. What should the mentor do next, and which concept does this final step represent?

<div class="upper-alpha" markdown>
1. Remove the LED and test it alone with a multimeter's diode-test mode -- a component testing procedure, the step reached only after ruling out power, continuity, and orientation
2. Restart the troubleshooting order from the beginning, checking power again
3. Assume the code is at fault and rewrite the entire program
4. Replace the breadboard with a prototyping protoboard
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter's worked example describes exactly this sequence: once power, continuity, and orientation are all confirmed, a mentor removes the LED and tests it alone with a multimeter's diode-test mode, the component testing procedure that isolates whether the part itself has failed. Option B wastes effort repeating an already-confirmed check. Option C jumps to blaming code without evidence, skipping the component-level check the chapter describes. Option D confuses a prototyping board swap with a diagnostic test, an unrelated action at this stage.

    **Concept Tested:** Component Testing Procedure
    **See:** [Component Testing Procedure](../../glossary.md#component-testing-procedure)

---
