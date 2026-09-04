# Beginning Circuits Challenge Card Ideas

Ideas for challenge cards built around breadboard electronics without a
microcontroller — LEDs, resistors, buttons, potentiometers, and a multimeter — per
Chapter 16's electrical safety rules, Ohm's law, and first-circuit fundamentals.

## Beginning

### Light Up an LED

Build the first breadboard circuit: a battery pack, a correctly sized resistor, and
an LED wired so it lights, paying attention to the LED's long leg (positive) and
short leg (negative). Stretch goal: swap in a different-value resistor and observe
how the brightness changes.

### Resistor Color Code Detective

Given five mystery resistors, use the resistor color-code chart to calculate each
one's resistance value, then verify every calculation with a multimeter set to
measure resistance. Stretch goal: find two resistors with different color bands
that measure the same resistance.

### Push-Button Powered LED

Wire a push button in series with an LED, resistor, and battery pack so the LED only
lights while the button is physically held down, introducing digital input as a
purely mechanical, no-code concept. Stretch goal: wire a second button so either
button independently lights the LED.

### Potentiometer Dimmer

Wire a potentiometer into an LED circuit so turning its knob manually varies the
current reaching the LED, then use a multimeter to record the voltage at three
different knob positions. Introduces the voltage-divider idea behind every analog
input used later in the book. Stretch goal: mark the knob position that makes the
LED just barely visible.

### Two-LED Series vs. Parallel

Build the same two LEDs first wired in series, then rewired in parallel, comparing
brightness by eye and measuring the voltage across each LED with a multimeter in
both configurations. Stretch goal: explain in writing, using Ohm's law, why the
brightness differs between the two wiring styles.

## Intermediate

### Ohm's Law Detective

Given a target current for an LED, calculate the resistor value needed using Ohm's
law, build the circuit, then verify the actual current draw with a multimeter and
compare it to the calculated target. Stretch goal: repeat the calculation and build
for a second, different battery voltage.

### Buzzer Alarm Circuit

Wire a push button, a buzzer, and a battery pack so the buzzer sounds only while the
button is pressed. Stretch goal: add an LED on a second parallel branch so it lights
at the same moment the buzzer sounds.

### Static Electricity Safety Demo

Following the chapter's static-electricity precaution checklist, correctly discharge
static electricity before handling a sensitive component, then write a short
explanation of which specific step protects the component and why skipping it is
risky. Stretch goal: identify which season or weather condition makes static
discharge most likely in the club's own meeting space.

### Short Circuit Spot-the-Difference

Given two nearly identical breadboard photos — one wired correctly and one with an
accidental short circuit — identify exactly where the short is and explain the
safety risk it creates. Stretch goal: safely reproduce a low-voltage version of the
short circuit and measure how quickly the battery pack heats up.

### Multimeter Continuity Scavenger Hunt

Use a multimeter's continuity setting to trace which rows and columns on an
unfamiliar breadboard are electrically connected to each other, mapping the board's
tie-point layout before ever applying power. Stretch goal: draw a simple diagram of
the traced connections from memory, then check it against the actual breadboard.

## Advanced

### Two-LED Priority Logic Circuit

Build a circuit with two push buttons and two LEDs wired so that only one LED can
ever be lit at a time, even if both buttons are pressed at once — solving the
priority conflict with wiring alone, no microcontroller involved. Stretch goal:
add a third "both pressed" state that lights neither LED.

### Soldered Permanent LED Nightlight

Following the chapter's soldering safety workflow, solder — rather than
breadboard — a simple LED, resistor, and battery holder into a permanent nightlight,
then heat-shrink or tape every exposed lead. Often attempted with a partner given
the added soldering-iron safety supervision required. Stretch goal: add a switch so
the nightlight can be turned off without disconnecting the battery.

### Voltage Divider Sensor Circuit

Build a photoresistor voltage-divider circuit and use a multimeter to record the
voltage at several light levels — room light, a hand covering the sensor, a
flashlight held close — then plot the readings to show a working analog light
sensor without any microcontroller yet. Stretch goal: find the light level where
the voltage crosses exactly half the battery's voltage.

### Multi-Component Logic Board

Combine a potentiometer, two LEDs, and a buzzer on one board so the potentiometer's
position determines which LED lights, and the buzzer only sounds once the
potentiometer passes a set threshold. Often attempted with a partner given the wire
count involved. Stretch goal: label the exact knob position where the buzzer first
turns on.

### Multimeter Mystery Box

Given a sealed breadboard circuit built by a mentor or another student, use only a
multimeter — no visual inspection of the wiring — to diagnose and diagram what
components are inside and how they're connected, following the same troubleshooting
mindset later used on full robots. Stretch goal: identify a single deliberately
broken connection inside the mystery box.
