# Normal Circuit vs. Short Circuit — Image Generation Prompt

Please generate a new image.

## Critical Rule

**This image must contain absolutely no text, labels, arrows, callout lines, numbers, or annotation marks of any kind — including the diagram's title or any heading.** Every label, number, and the title itself are added afterwards as an interactive HTML overlay from a separate data file. Any text baked into the image will collide with that overlay and make the diagram unusable.

---

## Image Specifications

- **Format**: PNG
- **Filename to save as**: `normal-circuit-vs-short-circuit.png`
- **Dimensions**: 1200 × 600 px (landscape)
- **Background**: clean flat white (#FFFFFF)
- **Style**: clean flat vector schematic illustration, thin dark outlines (#33475B), flat fills, textbook diagram look, no photorealism, no shadows
- **Audience**: a textbook for coding club leaders, mentors, and older students

---

## What to Draw

Two separate circuit illustrations side by side, occupying the left half and the right half of the frame, with a clear vertical gap of empty white between them and no dividing line. Each illustration is a simple closed rectangular wire loop drawn with clean right-angled corners. LEFT LOOP: a battery pack on the left side of the loop, a zig-zag resistor symbol on the top wire, and a small red LED symbol (triangle with a bar) on the right side of the loop. RIGHT LOOP: the same battery pack on the left side of an otherwise completely bare rectangular wire loop -- no resistor, no LED, nothing but wire. The wire of the right-hand loop should be tinted with a warm orange-red glow (#E74C3C at low opacity) spreading outward from the wire to suggest heat, strongest along the top and right segments. The left-hand loop's wire is plain dark grey with no glow.

### 1. 6V battery pack

**Position**: On the left vertical wire of the LEFT-hand loop, about 13% from the left and 50% from the top.

**Visual**: A standard battery symbol: alternating long thin and short thick horizontal plates, drawn across the left vertical wire of the loop.

### 2. 220-ohm resistor

**Position**: On the top horizontal wire of the LEFT-hand loop, about 27% from the left and 23% from the top.

**Visual**: A classic zig-zag resistor symbol with six peaks, drawn inline in the top wire, with a small tan-coloured body if the style calls for it.

### 3. ~27 mA (safe)

**Position**: On the right vertical wire of the LEFT-hand loop, about 40% from the left and 50% from the top, at the LED symbol.

**Visual**: A red LED schematic symbol: a triangle pointing down into a horizontal bar, with two small arrows radiating away from it to indicate emitted light.

### 4. ~6 A (dangerous, gets hot)

**Position**: On the right vertical wire of the RIGHT-hand loop, about 75% from the left and 50% from the top, in the middle of the glowing bare wire.

**Visual**: Plain bare wire with no component interrupting it, surrounded by a soft warm orange-red heat glow that fades outward.

---

## Layout Notes

Each loop should occupy roughly 38% of the total frame width and 55% of the frame height, vertically centred. Leave at least 8% clear white margin around the outside of each loop and a clear 10% gap between them. Do not draw any numbers, voltage values, current values, ammeters, or component value markings -- those are all added by the overlay. Do not draw a divider, caption, or heading between or above the two loops.

**Reminder, because image models routinely ignore it:** **This image must contain absolutely no text, labels, arrows, callout lines, numbers, or annotation marks of any kind — including the diagram's title or any heading.** Every label, number, and the title itself are added afterwards as an interactive HTML overlay from a separate data file. Any text baked into the image will collide with that overlay and make the diagram unusable.
