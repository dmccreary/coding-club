# Quiz: Sensor, Sound, and IoT Project Kits

Test your understanding of gyroscope, motion, sound, and IoT project kits, plus the assembly instructions, checklists, and difficulty ratings that get any kit running in a session with these review questions.

---

#### 1. What does a gyroscope kit measure?

<div class="upper-alpha" markdown>
1. Loudness of nearby sound
2. Angular velocity -- how quickly a board is rotating around each of three axes
3. Ambient light level
4. Relative humidity in the air
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter defines a gyroscope kit as measuring angular velocity -- how fast a board is spinning around each of three axes -- rather than distance or light level, answering "which way is this rotated, and how fast is that changing." Option A describes a microphone kit's measurement instead. Option C describes a photoresistor's measurement, part of an IoT project kit. Option D describes a humidity sensor's measurement, also part of an IoT project kit rather than a gyroscope.

    **Concept Tested:** Gyroscope Kit
    **See:** [Gyroscope Kit](../../glossary.md#gyroscope-kit)

---

#### 2. What is a sensor kit, as the chapter's umbrella term?

<div class="upper-alpha" markdown>
1. A kit that only produces sound, never captures it
2. A kit limited exclusively to gyroscope modules
3. A kit that displays a robot's facial expression
4. Any bundle pairing one or more sensor modules with the wiring and starter code needed to read a physical quantity into a running program
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter defines a sensor kit as the umbrella term for any bundle pairing sensor modules -- light, distance, sound, motion, temperature -- with wiring and starter code to read a physical quantity into a program, covering every specific kit named later in the chapter. Option A describes an output device like a robot sounds kit, the opposite of a sensor. Option B wrongly narrows the umbrella term to one specific kit type. Option C confuses the category with a robot emotion display, a design pattern rather than a sensor category.

    **Concept Tested:** Sensor Kit
    **See:** [Sensor Kit](../../glossary.md#sensor-kit)

---

#### 3. What is accelerometer data?

<div class="upper-alpha" markdown>
1. The set of X, Y, and Z acceleration readings a motion kit reports, each one combining deliberate motion with the constant background pull of gravity
2. A single loudness number reported by a microphone kit
3. The pitch, roll, and yaw values calculated from a gyroscope's rotation readings
4. A list of timestamped light and temperature readings logged over a session
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter defines accelerometer data as the X, Y, and Z readings a motion kit reports, each combining deliberate motion with gravity's constant pull, measured in units of "g." Option B describes a microphone kit's loudness output, an unrelated sound measurement. Option C describes gyroscope orientation data, a different motion-sensing kit's output. Option D describes an IoT project kit's logged readings, not accelerometer data.

    **Concept Tested:** Accelerometer Data
    **See:** [Accelerometer Data](../../glossary.md#accelerometer-data)

---

#### 4. Why does the classroom noise challenge affect microphone kits differently than a distance sensor is affected by nearby activity?

<div class="upper-alpha" markdown>
1. Because microphone kits are more expensive to replace than distance sensors
2. Because a distance sensor only works in complete darkness
3. Because sound travels through open air and reaches every microphone in the room, while a distance sensor only reacts to whatever object is directly in front of it
4. Because microphone kits require a network connection to function
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter explains that sound travels through open air and reaches every nearby microphone, unlike a distance sensor, which only reacts to an object directly in its own path -- this is exactly why six simultaneous sound kits interfere with each other while six distance sensors would not. Option A invents a cost comparison unrelated to the actual noise-interference cause. Option B fabricates a darkness requirement for distance sensors that does not exist. Option D confuses microphone kits with an unrelated networking requirement.

    **Concept Tested:** Classroom Noise Challenge
    **See:** [Classroom Noise Challenge](../../glossary.md#classroom-noise-challenge)

---

#### 5. How does a sound spectrum kit differ from a plain microphone kit?

<div class="upper-alpha" markdown>
1. A sound spectrum kit reports a single overall loudness number, while a microphone kit breaks sound into frequency bands
2. A sound spectrum kit breaks captured sound into separate frequency bands, showing which pitches make up a sound, rather than reporting a single loudness number like a plain microphone kit
3. A sound spectrum kit produces sound rather than capturing it, unlike a microphone kit
4. A sound spectrum kit is unaffected by the classroom noise challenge, unlike a microphone kit
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's worked example shows a sound spectrum kit answering "which pitches make up that sound" by breaking captured audio into frequency bands, while a plain microphone kit only answers "how loud is it right now" with a single number. Option A reverses which kit does which job. Option C is incorrect, since both kits are input devices that capture sound rather than produce it. Option D contradicts the chapter's comparison table, which shows the spectrum kit affected by room noise even more visibly than the microphone kit.

    **Concept Tested:** Sound Spectrum Kit
    **See:** [Sound Spectrum Kit](../../glossary.md#sound-spectrum-kit)

---

#### 6. Why does the chapter recommend microphone kits over sound spectrum kits for a club's very first session with brand-new students?

<div class="upper-alpha" markdown>
1. Because sound spectrum kits are too expensive for a first session's budget
2. Because microphone kits do not require any wiring at all
3. Because sound spectrum kits cannot be used with a Pico
4. Because a beginner student's first successful project should confirm one clear cause and effect, rather than asking them to also interpret a twelve-bar frequency display on day one
</div>

??? question "Show Answer"
    The correct answer is **D**. The chapter's worked example explains that a beginner-rated microphone kit lets a new student see one clear cause and effect -- clap, number jumps -- while a sound spectrum kit asks that same student to also interpret a multi-bar display, better suited to a later session. Option A invents a cost-based reason the chapter never gives. Option B is factually wrong, since the chapter describes microphone kits as needing wiring just like other sensor kits. Option C contradicts the chapter, which builds the sound spectrum kit directly on a microphone and a Pico.

    **Concept Tested:** Kit Difficulty Rating
    **See:** [Kit Difficulty Rating](../../glossary.md#kit-difficulty-rating)

---

#### 7. A gyroscope kit reads zero on all three axes while resting flat on a table. Why does this reading tell a program nothing about which way is down, while a motion kit's reading at that same moment would?

<div class="upper-alpha" markdown>
1. A gyroscope measures rotation speed, and a stationary board has no rotation to report, while a motion kit's accelerometer detects gravity's constant pull even when the board is perfectly still
2. A gyroscope kit is broken if it reads zero on all axes
3. A motion kit only works in complete darkness, unlike a gyroscope kit
4. A gyroscope kit and a motion kit report identical data in every situation
</div>

??? question "Show Answer"
    The correct answer is **A**. The chapter explains that a gyroscope reports rotation speed, so a motionless board correctly reads zero on every axis and reveals nothing about orientation, while a motion kit's accelerometer detects gravity's constant pull even at rest, telling a program which way is down. Option B misdiagnoses a correct, expected reading as a malfunction. Option C invents a darkness dependency that has nothing to do with either kit. Option D directly contradicts the chapter's explicit comparison table distinguishing the two kits.

    **Concept Tested:** Motion Kit
    **See:** [Motion Kit](../../glossary.md#motion-kit)

---

#### 8. A student places a light, temperature, and humidity monitor on a windowsill and logs one reading every 60 seconds for a full two-hour club meeting. Why does the chapter say this kit's real payoff shows up only after being left running for a while, unlike a gyroscope kit's payoff?

<div class="upper-alpha" markdown>
1. Because IoT project kits are illegal to use for less than one hour at a time
2. Because the monitor requires an internet connection to log any data at all
3. Because a light, temperature, or humidity reading barely changes over a short demonstration, so the pattern only becomes visible once enough readings accumulate over time, unlike a gyroscope's instantly interesting tilt response
4. Because temperature sensors cannot report a reading more than once per hour
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter explains that a light, temperature, or humidity reading barely changes over a five-minute demonstration, so the kit's payoff -- such as light climbing as afternoon sun moves across a window -- only becomes visible once enough logged readings accumulate over an hour or a full session. Option A invents a legal restriction that does not exist. Option B contradicts the chapter's description of the kit keeping its readings local rather than requiring a network connection. Option D fabricates a reporting-frequency limitation not discussed in the chapter.

    **Concept Tested:** Light Temp Humidity Monitor
    **See:** [Light Temp Humidity Monitor](../../glossary.md#light-temp-humidity-monitor)

---

#### 9. A robot's autonomous obstacle-avoidance code already reverses when its distance sensor detects an obstacle, and a mentor adds one line so the robot also plays a short beep at that same instant, giving a bystander an audible cue without needing to look at the robot. Which kit does this describe?

<div class="upper-alpha" markdown>
1. Sound spectrum kit
2. Microphone kit
3. Robot sounds kit, which produces tones or sound effects tied to specific events in a robot's code
4. IoT project kit
</div>

??? question "Show Answer"
    The correct answer is **C**. The chapter's worked example describes exactly this: adding a robot sounds kit means adding one line that plays a beep the instant the distance check triggers, giving an audible cue without requiring the bystander to be looking. Option A describes an input device that analyzes frequency content, unrelated to producing a beep on cue. Option B describes another input device that captures sound rather than producing it. Option D describes an environmental logging kit, unrelated to robot event sounds.

    **Concept Tested:** Robot Sounds Kit
    **See:** [Robot Sounds Kit](../../glossary.md#robot-sounds-kit)

---

#### 10. A mentor checks a sound spectrum kit bin against its printed component checklist the morning of a session and discovers only three of the four needed jumper wires are present, one having migrated into a different bin during cleanup. What does the chapter say about the value of catching this now versus later?

<div class="upper-alpha" markdown>
1. It makes no real difference when the missing wire is discovered, as long as it is found eventually
2. Catching the gap during a five-minute morning check costs nothing, while discovering it after a student has already wired three of four connections costs real session time and the student's patience
3. A missing jumper wire always requires replacing the entire kit
4. The checklist should only be used at the end of a session, never at the beginning
</div>

??? question "Show Answer"
    The correct answer is **B**. The chapter's worked example draws this exact contrast: discovering the gap during a quick morning check costs nothing, while discovering it mid-session after a student has already wired three connections costs real time and patience. Option A ignores the chapter's explicit point about timing mattering a great deal. Option C is an extreme, unsupported response the chapter never suggests for a single missing wire. Option D contradicts the chapter's own example, which uses the checklist specifically before a session begins.

    **Concept Tested:** Kit Component Checklist
    **See:** [Kit Component Checklist](../../glossary.md#kit-component-checklist)

---
