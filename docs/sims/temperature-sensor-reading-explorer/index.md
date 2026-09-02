---
title: Temperature Sensor Reading Explorer
description: A TMP36 reports volts, not degrees -- watch the conversion formula fill in with live numbers.
image: sims/temperature-sensor-reading-explorer/temperature-sensor-reading-explorer.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Temperature Sensor Reading Explorer

<iframe src="main.html" width="100%" height="502" scrolling="no"></iframe>

[Run the Temperature Sensor Reading Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A TMP36 does not know what a degree is. It produces a voltage, and your code
turns that voltage into a temperature:

    °C = (V − 0.5) × 100

The sim rewrites that line every frame with the slider's value substituted in,
and shows each step of the arithmetic separately. Watching the same number land
in the same slot over and over is what makes the formula stick.

**Why the 0.5 V offset?** Because a sensor running on a positive supply cannot
output a negative voltage, and temperatures go below zero. Putting 0 °C at half
a volt leaves room underneath: at 0 V the TMP36 is reporting −50 °C. Drag the
slider to the bottom and watch it happen.

**Why × 100?** The sensor changes by 10 mV per degree. There are 100 lots of
10 mV in a volt, so multiplying by 100 converts volts to degrees. Both numbers
in the formula are physical facts about the part, not magic constants.

The digital toggle is there for contrast. A DS18B20 or DHT22 does this same
conversion inside the chip and hands your code a number, which is why the panel
has nothing to show. That convenience costs money, needs a library, and updates
only a few times a second. Neither choice is wrong — but a student should know
which kind of part they bought.

## How to Use

- Drag **Sensor voltage** and watch every line of the formula update together.
- Stop at **0.75 V** — the reading is 25 °C, which is why that is the default.
- Drag to **0 V**. The answer goes to −50 °C, which is the whole reason for the
  offset.
- Tick **Digital sensor instead** and see what the same reading looks like when
  the chip has already done the arithmetic.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given an analog sensor voltage, the learner calculates
the corresponding temperature using the sensor's linear conversion formula.

**Before the sim (5 min).** Read a TMP36 with real hardware and print the raw
value. It will be a number like 15000, which is neither volts nor degrees, and
the gap between that and "the temperature" is the lesson.

**With the sim (10 min).** Work three voltages by hand on paper first, then
check each against the slider. Getting it right before looking is the practice;
the sim is the answer key.

**After the sim (20 min).** Write the conversion in code and compare the
reading against a thermometer in the room. They will not match exactly, and
discussing why — sensor tolerance, self-heating, ADC noise — is a better lesson
than a perfect match would have been.

**Check for understanding.** Ask: "Your code reports 425 °C. What went wrong?"
The conversion is being applied to the raw ADC count rather than to a voltage.
That single bug accounts for most first-attempt temperature readings.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/temperature-sensor-reading-explorer/main.html" width="100%" height="502" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** temperature-sensor-reading-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner adjust a simulated analog voltage and watch the TMP36 conversion formula produce a temperature reading step by step.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given an analog sensor voltage, the learner calculates the corresponding temperature using the sensor's linear conversion formula.

Canvas layout: Left (50%) shows a thermometer graphic that rises and falls with the calculated temperature; right (50%) shows the voltage slider, the formula written out with live numbers substituted in, and the final answer.

Interactive controls: Slider for sensor voltage (0.0V-1.5V); a toggle switching between the TMP36 analog formula and a "digital sensor" mode that skips the formula and shows a direct Celsius readout instead, for contrast.

Default parameters: Voltage 0.75V (25°C), analog mode selected.

Behavior: Moving the voltage slider updates the formula's substituted numbers live — "(0.75 − 0.5) × 100 = 25°C" — and the thermometer graphic in real time; switching to digital mode replaces the formula panel with a note explaining that a digital sensor performs this conversion internally.

Implementation notes: p5.js canvas with a text-rendering routine that rebuilds the formula string from the current slider value every frame; simple thermometer fill rendered as a rectangle scaled to temperature.
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Photoresistor Voltage Divider Explorer](../photoresistor-voltage-divider-explorer/index.md) -- the other half of analog sensing: turning resistance into a voltage.
- [Sensor Type Picker](../sensor-type-picker/index.md) -- choosing between analog and digital parts.
- [Thermistor](https://en.wikipedia.org/wiki/Thermistor) -- the cheaper, non-linear alternative and why its maths is harder.
- [Analog-to-digital converter](https://en.wikipedia.org/wiki/Analog-to-digital_converter) -- what turns the sensor's volts into the number your code sees.
