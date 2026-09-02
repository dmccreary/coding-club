---
title: "Photoresistor Voltage Divider Explorer"
description: "Light level in, resistance and divider voltage out -- with a curve showing why the fixed resistor choice matters."
image: sims/photoresistor-voltage-divider-explorer/photoresistor-voltage-divider-explorer.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Photoresistor Voltage Divider Explorer

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Photoresistor Voltage Divider Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A microcontroller has no way to measure resistance. It measures voltage. So
reading a photoresistor takes one more part: a fixed resistor underneath it,
turning the pair into a voltage divider whose middle point the analog input can
read.

    Vout = Vcc × Rfixed / (Rldr + Rfixed)

Drag the light slider and both numbers move together. In the dark the
photoresistor is around 1 MΩ, so almost all the supply is dropped across it and
the output sits near zero. In bright light it falls to about 1 kΩ and the
output climbs.

**The fixed resistor is the design decision.** Swap it and watch the response
curve at the bottom of the panel slide. With 1 kΩ the output barely moves until
the light is already bright — good if you only care about direct sunlight,
useless indoors. With 100 kΩ the output is high almost everywhere and only
drops in real darkness. With 10 kΩ the steep part of the curve sits in the
middle of the range, which is why 10 kΩ is the value most tutorials reach for.

The rule of thumb worth taking away: **pick a fixed resistor near the
photoresistor's resistance at the light level you care about most.** That puts
the steepest part of the curve where your readings are, which is where you want
your sensitivity.

The panel also shows what `read_u16()` would actually return, because that
number — not the voltage — is what a student's code receives.

## How to Use

- Drag **Light level** from 0 to 100% and watch the LDR resistance and the
  output voltage change together.
- Note the red dot on the response curve: that is where the slider currently
  sits on the whole light range.
- Swap **Fixed resistor** between 1 kΩ, 10 kΩ, and 100 kΩ and watch the curve
  shift. The slider position stays put; only the response moves.
- Find the setting where the curve is steepest in the middle. That is the one
  worth building.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a simulated light level, the learner calculates
the resulting LDR resistance and voltage-divider output.

**Before the sim (10 min).** Measure a real photoresistor with a multimeter in
resistance mode: in the room, covered with a hand, under a phone torch. Write
the three numbers on the board. They will span three orders of magnitude, which
is the surprise.

**With the sim (15 min).** Work two divider calculations on paper, then check
them. Then run the fixed-resistor comparison as a design question rather than a
calculation: which value would you build for a night light, and which for a
sunlight detector?

**After the sim (20 min).** Build it and print the readings. Cover the sensor
and watch the numbers move. Then set a threshold and make an LED come on.

**Check for understanding.** Ask: "Your light sensor reads almost the same
number indoors whether the lights are on or off. What would you change?" The
fixed resistor — the useful part of the curve is not where the readings are.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/photoresistor-voltage-divider-explorer/main.html" width="100%" height="522" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** photoresistor-voltage-divider-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified<br/>
**Template:** https://github.com/dmccreary/moving-rainbow/tree/main/docs/sims/photoresistor-component

Purpose: Let a learner drag a simulated brightness slider and see the LDR's resistance and the resulting divider voltage update together, reinforcing the worked calculation above.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a simulated light level, the learner calculates the resulting LDR resistance and voltage-divider output.

Canvas layout: Left (55%) shows a simple divider circuit diagram (battery, LDR, fixed resistor, analog input point) that brightens or dims a small sun icon with the slider; right (45%) shows the slider, the calculated LDR resistance, and the divider voltage.

Interactive controls: Slider for simulated light level (0%-100%); numeric readouts for LDR resistance (ohms) and divider voltage (volts); a toggle to swap the fixed resistor value between 1k, 10k, and 100k ohms.

Default parameters: Light level 50%, fixed resistor 10k ohms.

Behavior: Moving the light slider recalculates LDR resistance along a logarithmic curve and updates the divider-voltage readout using the standard voltage-divider formula in real time.

Implementation notes: p5.js canvas with a `map()`-based logarithmic curve from light percentage to resistance; live divider-formula calculation on every `draw()` frame.
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Temperature Sensor Reading Explorer](../temperature-sensor-reading-explorer/index.md) -- the other analog conversion in this chapter.
- [Circuit Symbol Reader](../circuit-symbol-reader/index.md) -- the symbols this schematic is drawn from.
- [Multimeter Usage Simulator](../multimeter-usage-simulator/index.md) -- measuring the photoresistor for real.
- [Voltage divider](https://en.wikipedia.org/wiki/Voltage_divider) -- the formula and where else it turns up.
- [Photoresistor](https://en.wikipedia.org/wiki/Photoresistor) -- how the cadmium sulfide layer changes resistance with light.
