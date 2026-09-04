# MicroPython Challenge Card Ideas

Ideas for challenge cards built around Raspberry Pi Pico fundamentals in
MicroPython — the REPL, GPIO pins, digital and analog I/O, and saved scripts
(Chapter 19) — apart from the NeoPixel-specific Moving Rainbow projects and full
robot builds.

## Beginning

### Pico REPL First Contact

Connect the Pico and open the REPL, typing live commands — turning the onboard LED
on and off, doing simple math — to see instant results before ever saving a file.
Introduces the interactive REPL as a workflow distinct from writing and running a
saved script. Stretch goal: use the REPL to read and print the Pico's own
`machine.freq()` clock speed.

### Blink the Onboard LED

Write and save a `main.py` script that blinks the Pico's built-in LED on a timer,
understanding that saving under the exact name `main.py` makes it auto-run on
power-up with no computer attached. Stretch goal: change the blink pattern to two
short blinks followed by one long blink.

### MicroPython Syntax Fix-It

Given a short MicroPython script with three to five intentional syntax errors —
a missing colon, bad indentation, an incorrect import — find and correct each one
using the syntax-checking skills from the chapter. Stretch goal: explain in one
sentence what kind of real-world typo caused each error.

### Read a Digital Button With the Pico

Wire a push button to a GPIO pin and print "Pressed!" to the REPL each time it's
pushed, introducing `Pin` objects and digital input reading in MicroPython for the
first time. Stretch goal: also print "Released!" the moment the button is let go.

### Pico Pinout Scavenger Hunt

Using the Pico's pinout diagram, correctly identify and label ten different pins on
a physical board — ground, 5V, and several GPIO pins — before wiring anything to
them. Stretch goal: identify which two pins are used by the Moving Rainbow kit's
own wiring diagram.

## Intermediate

### Countdown Blink Pattern

Write a loop that blinks the onboard LED a decreasing number of times each cycle —
five blinks, then four, then three — combining a loop, a variable that changes each
pass, and `time.sleep()`. Stretch goal: make the blink speed itself get faster as
the count goes down.

### Analog Sensor Reader

Read a potentiometer or photoresistor through one of the Pico's ADC-capable pins
and print the changing analog value to the REPL as the sensor is adjusted,
introducing analog-to-digital conversion. Stretch goal: convert the raw reading
into a 0-100 percentage before printing it.

### Button-Controlled Counter With Debounce

Count and print how many times a button has been pressed, adding a short delay
after each detected press to prevent a single physical press from being counted
multiple times ("debouncing"). Stretch goal: reset the counter to zero after ten
presses instead of counting forever.

### Two-Pin Traffic Light

Wire two separate LEDs to two GPIO pins and program them to alternate on a timer —
red, then green — extending single-pin blink code to control multiple outputs at
once. Stretch goal: add a third, yellow LED that briefly lights between the red and
green phases.

### REPL vs. Saved Script Comparison Report

Run the exact same short program first live in the REPL, then again saved as
`main.py`, and write a short comparison of what stayed the same and what was
different about how and when each version ran. Stretch goal: identify one situation
where only a saved script (not the REPL) would actually work.

## Advanced

### Multi-Sensor Data Logger

Read two different sensors — for example a potentiometer and a button — in one
loop, printing a timestamped line with both readings to the REPL every second.
Introduces combining multiple simultaneous inputs into one structured program.
Stretch goal: write the logged readings to a file on the Pico instead of only
printing them.

### Custom MicroPython Function Library

Write a small personal library of three or more reusable functions — such as
`blink_pattern()` and `read_sensor_average()` — saved in a separate file, then
`import` and use them from `main.py`. Introduces MicroPython modules as a way to
organize reusable code. Stretch goal: reuse this same library file, unchanged,
inside a completely different project.

### Interrupt-Driven Button Handler

Instead of continuously checking a button inside a loop (polling), use a Pico
interrupt (`irq`) so a function runs automatically the instant the button is
pressed, even while other code is executing. Stretch goal: compare, in writing,
how this differs from the debounced polling counter built earlier.

### PWM Servo Sweep From Scratch

Without any pre-made helper library, write MicroPython PWM code directly from the
pinout and pulse-width concepts to sweep a servo motor smoothly from 0 to 180
degrees and back. Stretch goal: make the sweep pause briefly at each end before
reversing direction.

### Pico-to-Pico Communication

With two Picos and two students, use simple wired signaling between GPIO pins (or
UART) so a button press on one Pico changes the LED behavior on the other. A paired
project combining wiring and MicroPython across two independent boards. Stretch
goal: make the communication two-way, with each Pico able to trigger the other.
