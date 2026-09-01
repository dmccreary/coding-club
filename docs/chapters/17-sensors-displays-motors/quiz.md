# Quiz: Sensors, Displays, Motors, and Robot Chassis

Test your understanding of the six sensor types, three display types, and three motor types used across club kits, plus reading a circuit diagram and choosing a robot chassis with these review questions.

---

#### 1. What is a sensor, as the chapter defines it?

<div class="upper-alpha" markdown>
1. A driver chip that controls a display over I2C
2. A component that converts a physical quantity, such as light or sound, into an electrical signal a microcontroller can read
3. A type of motor that holds a fixed angle
4. A schematic symbol used only in breadboard diagrams
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter defines a sensor as a component that converts a physical quantity -- light, heat, moisture, motion, sound, or distance -- into an electrical signal a microcontroller can read as digital or analog input, acting as a translator between the physical world and voltage. Option A describes a driver chip like the MAX7219, an unrelated display component. Option C describes a servo motor, not a sensor. Option D confuses a sensor with a schematic drawing convention.

    **Concept Tested:** Sensor Basics
    **See:** [Sensor Basics](../../glossary.md#sensor-basics)

---

#### 2. What distinguishes a servo motor from a DC motor?

<div class="upper-alpha" markdown>
1. A servo motor spins continuously in one direction, while a DC motor holds a fixed angle
2. A servo motor requires no wiring, while a DC motor requires an H-bridge
3. A servo motor has built-in gearing and feedback that lets it move to and hold a specific angle, rather than spinning continuously like a DC motor
4. A servo motor can only be used with a stepper driver chip
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter defines a servo motor as having built-in gearing and a feedback mechanism that lets it hold a specific angle within a 0-to-180-degree range, unlike a DC motor's continuous spinning. Option A reverses the actual roles of the two motor types. Option B is incorrect since a servo does require its own signal wiring, just a different scheme than a DC motor's H-bridge. Option D confuses servo control with an unrelated stepper driver chip.

    **Concept Tested:** Servo Motor
    **See:** [Servo Motor](../../glossary.md#servo-motor)

---

#### 3. What is a robot chassis?

<div class="upper-alpha" markdown>
1. The physical frame or platform that holds a robot's motors, wheels, battery, and controller board together as one working unit
2. A software library that controls motor speed
3. A single sensor mounted on a robot's front bumper
4. A type of display used to show a robot's battery level
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter defines a robot chassis as the physical frame or platform holding a robot's motors, wheels, battery, and controller board together, with a two-wheel differential drive as the most common beginner design. Option B confuses the chassis with software, an unrelated layer. Option C describes a single sensor, not the whole physical frame. Option D confuses it with a display component, not a structural frame.

    **Concept Tested:** Robot Chassis
    **See:** [Robot Chassis](../../glossary.md#robot-chassis)

---

#### 4. Why does the chapter say I2C is especially useful in a club setting when a project combines a display, a light sensor, and a humidity sensor?

<div class="upper-alpha" markdown>
1. Because I2C requires a separate pair of wires for every single device on the bus
2. Because I2C only works with displays, never with sensors
3. Because I2C transfers data faster than any other protocol
4. Because I2C lets several devices share the same two signal wires at once, each distinguished by its own numeric address, as long as no two devices share an address
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter explains that I2C's two shared wires let multiple devices, each with its own address, connect without running a separate wire pair for each one, as long as addresses don't collide. Option A directly contradicts I2C's defining shared-wire advantage. Option B is factually wrong, since the chapter describes I2C sensors as well as displays. Option C misstates the comparison, since the chapter notes SPI transfers data faster than I2C, not the reverse.

    **Concept Tested:** Display Basics
    **See:** [Display Basics](../../glossary.md#display-basics)

---

#### 5. A mentor writes code that requests a new reading from a DHT-series humidity sensor every 100 milliseconds and sees the same value repeated many times in a row. What does the chapter say is actually happening?

<div class="upper-alpha" markdown>
1. The sensor's hardware refresh rate is close to two seconds, so requesting readings faster than that just returns a stale, unchanged value rather than indicating a failure
2. The sensor has permanently failed and must be replaced
3. The microcontroller's analog input pin is wired backward
4. The sensor requires a firmware update before it can report new readings
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter explains that a DHT module's request-and-response cycle takes close to two seconds, so polling every 100 milliseconds produces the same stale reading repeated many times -- the fix is to request readings no more often than the hardware's own refresh rate. Option B jumps to an incorrect failure diagnosis the chapter does not support. Option C misapplies an analog wiring issue to a digital, single-wire sensor. Option D invents a firmware requirement the chapter never mentions.

    **Concept Tested:** Humidity Sensor
    **See:** [Humidity Sensor](../../glossary.md#humidity-sensor)

---

#### 6. Why can't a microcontroller's output pin safely drive a DC motor directly, and what fixes this?

<div class="upper-alpha" markdown>
1. A DC motor requires an I2C connection, which output pins don't support
2. An output pin can source only about 20 to 30 milliamps, far less than a motor draws under load; an H-bridge lets the pin control the motor's higher current and direction without routing that current through the microcontroller
3. A DC motor only works with analog input pins, not digital output pins
4. A DC motor requires a seven-segment display to indicate direction
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter ties this directly back to Chapter 16's current limit: an output pin can only source about 20 to 30 milliamps, far below what a motor draws, so an H-bridge lets the low-current pin control the motor's higher current and direction safely. Option A invents an I2C requirement unrelated to motor control. Option C confuses input and output pin types in a way the chapter does not describe. Option D invents an unrelated display requirement for motor operation.

    **Concept Tested:** DC Motor
    **See:** [DC Motor](../../glossary.md#dc-motor)

---

#### 7. A distance sensor reports an echo time of 6 milliseconds (0.006 seconds). Using the chapter's formula, distance = (echo time × speed of sound) / 2, with sound traveling at roughly 343 meters per second, what distance does this represent?

<div class="upper-alpha" markdown>
1. About 0.17 meters
2. About 2.06 meters
3. About 1.03 meters
4. About 343 meters
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's own worked example computes this exact scenario: (0.006 × 343) / 2 ≈ 1.03 meters, a typical "something is about a meter ahead" reading. Option A is the result for a 1-millisecond echo time instead, a different example in the chapter. Option B omits dividing by 2 for the round-trip travel. Option D ignores the time factor entirely and simply reports the speed of sound.

    **Concept Tested:** Distance Sensor
    **See:** [Distance Sensor](../../glossary.md#distance-sensor)

---

#### 8. A servo receives a pulse width of 1,750 microseconds. Using the chapter's formula, angle = (pulse width − 1000) / 1000 × 180, what angle does the servo move to?

<div class="upper-alpha" markdown>
1. 90 degrees
2. 175 degrees
3. 45 degrees
4. 135 degrees
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's own worked example computes this exact pulse width: (1750 − 1000) / 1000 × 180 = 135 degrees, three-quarters of the way toward the servo's maximum. Option A is the angle for a 1,500-microsecond pulse instead, the servo's center position. Option B misreads the pulse-width number itself as the answer rather than applying the formula. Option C would result from a pulse width of 1,250 microseconds, not 1,750.

    **Concept Tested:** Servo Motor
    **See:** [Servo Motor](../../glossary.md#servo-motor)

---

#### 9. A TMP36 temperature sensor reads 0.90 volts. Using the chapter's formula, temperature = (voltage − 0.5) × 100, what temperature does this represent?

<div class="upper-alpha" markdown>
1. 90 degrees Celsius
2. 25 degrees Celsius
3. 50 degrees Celsius
4. 40 degrees Celsius
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's own worked example computes this exact reading: (0.90 − 0.5) × 100 = 40°C, offered as a useful check value for what a feverish or sun-warmed reading looks like. Option A misreads the voltage value itself as the answer rather than applying the formula. Option B is the result for a 0.75-volt reading instead, a comfortable room temperature in the chapter's other example. Option C does not match applying the formula correctly to 0.90 volts.

    **Concept Tested:** Temperature Sensor
    **See:** [Temperature Sensor](../../glossary.md#temperature-sensor)

---

#### 10. A two-wheel differential-drive robot has its left wheel set to a speed of 50 and its right wheel set to a speed of -50 (reverse). Based on the chapter's explanation of differential drive, what motion results?

<div class="upper-alpha" markdown>
1. The robot drives straight forward
2. The robot curves gently to one side
3. The robot spins in place around a point roughly between the wheels
4. The robot stops completely, since the speeds cancel out
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter explains that driving the two wheels at equal speed in opposite directions spins the robot in place around a point roughly between the wheels, which is exactly this scenario with one wheel forward and one in reverse at equal magnitude. Option A describes equal speeds in the same direction, not opposite directions. Option B describes one wheel faster than the other in the same direction, a different case than opposite directions. Option D incorrectly assumes opposite speeds cancel into a stop, when they actually combine to produce rotation.

    **Concept Tested:** Robot Chassis
    **See:** [Robot Chassis](../../glossary.md#robot-chassis)

---
