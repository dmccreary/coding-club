---
title: "Seasonal LED Pattern Gallery"
description: "Four strips running the same algorithm, and the two or three numbers that make each one a different season."
image: sims/seasonal-led-pattern-gallery/seasonal-led-pattern-gallery.png
status: built
library: p5.js
bloom_level: Analyze (L4)
---

# Seasonal LED Pattern Gallery

<iframe src="main.html" width="100%" height="482" scrolling="no"></iframe>

[Run the Seasonal LED Pattern Gallery MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Four strips, one algorithm. That is the whole observation, and it changes what
a student does next.

A student who believes "Halloween mode" is a different program will sit down to
write one from scratch. A student who can see that it is the base rainbow with
**two hues instead of 360** and **half the scroll speed** will make their own
variant in five minutes.

What actually differs between them:

- **Rainbow** takes each pixel's hue from its position and shifts the whole
  wheel a couple of degrees per frame.
- **Halloween** keeps two hues, switches hard between them instead of blending,
  and scrolls at half speed — which is what makes it read as a crawl rather
  than a shimmer.
- **Holiday** alternates pixel by pixel instead of in blocks, and adds the one
  genuinely new idea in the set: a twinkle that dims every seventh pixel on a
  slow cycle.
- **Fourth of July** is three colours in bands, and white is the interesting
  one. White is not a hue at all — it is zero saturation. A palette that
  includes white needs saturation as a parameter, not just hue, and noticing
  that is the analysis this sim is really after.

The shared speed slider is there so the comparison stays fair. Two patterns
running at different speeds look more different than they are.

## How to Use

- Watch all four at once first. The differences in **blend** — gradient, hard
  blocks, alternating pixels, three-colour bands — are visible before you read
  a single number.
- **Click a strip** to enlarge it and see the two or three values that differ
  from the base rainbow. The other three stay visible as small swatches.
- Drag **Speed** to zero and compare the frozen patterns. Palette differences
  are clearer without motion.
- **Show all four** returns to the gallery.

## Lesson Plan

**Bloom level:** Analyze (L4) -- *differentiate*

**Learning objective:** Given a running LED pattern, the learner differentiates
which seasonal theme produced it and identifies the code parameter that changed
to create it.

**Before the sim (5 min).** Run the plain rainbow on real hardware. Ask what
you would change to make it look like Halloween. The answers will be about
colours, which is right, and not about timing, which is the half that gets
missed.

**With the sim (15 min).** Compare in pairs: what is different, and is it the
palette, the blend, or the timing? Fourth of July is the one to spend time on,
because white forces saturation into the conversation.

**After the sim (30 min).** Everyone invents a theme — a school colours
pattern, a birthday pattern — and writes it by changing the base rainbow's
parameters rather than starting fresh.

**Check for understanding.** Ask: "You want a pattern in your school's two
colours. Which of these four is the closest starting point, and what would you
change?" Halloween — swap the two hues and leave everything else. A student who
says "write a new one" has not yet seen that these are one program.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/seasonal-led-pattern-gallery/main.html" width="100%" height="482" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md).

```text
Type: microsim
**sim-id:** seasonal-led-pattern-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/animation-pattern-comparison

Purpose: Let a mentor compare the base Moving Rainbow pattern against its Halloween, holiday, and Fourth of July variants side by side, before choosing one for a session.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a running LED pattern, the learner differentiates which seasonal theme produced it and identifies the code parameter that changed to create it.

Visual elements: Four small animated strip previews running simultaneously, labeled "Rainbow," "Halloween," "Holiday," and "Fourth of July," each 30 pixels wide.

Interactive controls: Click any strip preview to enlarge it and show the two or three code values (palette and timing) that distinguish it from the base rainbow pattern; a shared speed slider affecting all four previews at once.

Default parameters: All four previews running at a moderate default speed.

Behavior: Clicking a preview pauses the others and displays its distinguishing parameters in a side panel; the speed slider updates all four animations' timing together in real time.

Implementation notes: p5.js canvas with four independent pixel-array objects animated on a shared frame counter; each pattern implemented as a small function returning a color per pixel per frame.
```

## References

- [Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit](../../chapters/19-pico-micropython-moving-rainbow/index.md) -- the chapter this MicroSim supports.
- [Moving Rainbow Wiring Diagram](../moving-rainbow-wiring-diagram/index.md) -- wiring the strip these run on.
- [Color Wheel Hue Explorer](../color-wheel-hue-explorer/index.md) -- where the hue numbers in these palettes come from.
- [LED Matrix Pattern Designer](../led-matrix-pattern-designer/index.md) -- designing a pattern by hand instead of by formula.
- [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) -- hue, saturation, and why white is a saturation of zero.
