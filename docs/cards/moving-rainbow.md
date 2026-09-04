# Moving Rainbow Challenge Card Ideas

Ideas for challenge cards built around the Moving Rainbow kit — a Raspberry Pi Pico
wired to a NeoPixel LED strip and programmed in MicroPython (Chapter 19).

## Beginning

### Wire the Moving Rainbow Kit

Correctly wire the Pico's 5V, ground, and a chosen GPIO pin to the NeoPixel strip's
power, ground, and data-in wire — making sure the data wire connects to the strip's
DI end, not its DO end — then verify the wiring with the book's known-good three-line
blink script. Stretch goal: identify what happens if the data wire is connected to
the DO end instead.

### Single Pixel Blink

Write a MicroPython script that turns exactly pixel 0 on to any color, waits, then
turns it off, repeating in a loop — confirming the Pico and strip are communicating
correctly before attempting any full-strip pattern. Stretch goal: blink pixel 0 and
pixel 29 (the last pixel) at the same time, out of sync with each other.

### Solid Color Fill

Light every pixel on the strip the same solid color using a loop that sets each
index to the same RGB tuple, then change to a second solid color. Introduces
addressing every pixel in the strip's indexed list at once. Stretch goal: cycle
through three solid colors, each held for two seconds.

### Traffic-Light Strip Sections

Light the first third of the strip red, the middle third yellow, and the last third
green, all at the same time with no animation, introducing indexing a specific
range of the pixel list rather than every pixel at once. Stretch goal: make the
boundaries between sections adjustable by changing one variable.

### Button-Controlled Color Toggle

Wire a push button so pressing it toggles the entire strip between two preset
colors, combining the digital-input wiring skills from Beginning Circuits with
NeoPixel output for the first time. Stretch goal: add a third color that cycles in
after the first two.

## Intermediate

### Build the Moving Rainbow Pattern

Implement the book's own core pattern: set each pixel's color from
`(i + offset) % 255` inside the main loop, incrementing `offset` by one on every
pass so the rainbow appears to travel down the strip. Stretch goal: make the rainbow
travel in the opposite direction by changing how `offset` is applied.

### Seasonal Pattern: Halloween Strobe

Build an orange-and-purple strobe pattern with an adjustable strobe-speed variable,
matching the chapter's seasonal pattern gallery. Stretch goal: make the strobe speed
controllable live with a potentiometer instead of a fixed variable.

### Color Wheel Hue Cycle

Use the chapter's color-wheel/hue math to smoothly cycle the entire strip through
the full rainbow of hues over time, where every pixel always matches and only the
shared hue value changes — a deliberately different effect from the traveling
Moving Rainbow pattern. Stretch goal: reverse the direction of the hue cycle
partway through the animation.

### Brightness Fade Breathing Effect

Smoothly ramp the strip's overall brightness up and down like a slow "breathing"
light, gradually changing a brightness value over each pass through the loop
instead of jumping straight between states. Stretch goal: combine breathing
brightness with a fixed solid color of the student's choice.

### Potentiometer-Controlled Speed

Wire a potentiometer as an analog input and use its live reading to control how
quickly the Moving Rainbow pattern's `offset` increases, connecting a physical knob
to animation speed in real time. Stretch goal: add a second potentiometer that
controls overall brightness at the same time.

## Advanced

### Custom Seasonal Pattern Designer

Design and code an entirely new seasonal pattern not in the book's gallery — for a
holiday or club event — documenting the chosen colors and the offset/timing formula
used, then wire it in as a selectable option alongside the existing patterns.
Stretch goal: get feedback from another student and revise the pattern based on it.

### Multi-Pattern Mode Switcher

Wire a push button so each press advances the strip to the next pattern in a list
of pattern functions (rainbow, strobe, breathing, solid), cycling through modes
without ever re-uploading code. Stretch goal: add a long-press action that resets
back to the first pattern.

### Sound-Reactive Rainbow

Combine a sound sensor from the sound and IoT kits with the Moving Rainbow strip so
the pattern's brightness or speed reacts to the ambient sound level, integrating a
second sensor input directly into the animation loop. Often attempted with a
partner given the two independent input/output systems involved. Stretch goal:
make loud sounds trigger a completely different pattern rather than just brighter
lights.

### Two-Strip Synchronized Show

Wire and program two NeoPixel strips from a single Pico so both run synchronized or
complementary patterns, such as mirrored rainbows traveling toward each other,
managing two separate pixel-index loops inside one program. Stretch goal: make one
strip's pattern depend on what the other strip is currently displaying.

### Longer-Strip External Power Conversion

Following the chapter's guidance for strips beyond the stock kit size, plan and wire
an external power supply for a longer strip — power and ground from the external
supply, with data and a shared ground still running to the Pico — documenting in
writing why the Pico's own 5V pin can no longer supply the strip safely. Stretch
goal: calculate the maximum strip length the Pico's own 5V pin could safely power
before this conversion becomes necessary.
