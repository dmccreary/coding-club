---
title: "Digital Signal HIGH/LOW Chart"
description: "A digital pin's voltage over time: two values, vertical transitions, nothing in between."
image: sims/digital-signal-high-low-chart/digital-signal-high-low-chart.png
status: built
library: Chart.js
bloom_level: Understand (L2)
---

# Digital Signal HIGH/LOW Chart

<iframe src="main.html" width="100%" height="502" scrolling="no"></iframe>

[Run the Digital Signal HIGH/LOW Chart MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A digital input has exactly two states, and this chart is what that looks like
plotted against time.

The shape is the lesson. The line sits at 0 V, jumps **vertically** to 5 V, sits
there, and drops vertically back. There is no ramp, no curve, no intermediate
value. Ask a digital pin what it reads and the only possible answers are HIGH and
LOW.

Press the button below to add another event. However many times you press, the
trace only ever has two heights.

Hold this shape in mind for the analog input chart later in the chapter, which
is a smooth curve through every value in between. That contrast -- a step function
against a continuous one -- is the whole distinction between the two kinds of
input pin, and it is easier to remember as two pictures than as two definitions.

## How to Use

- **Hover any point** for its exact voltage.
- **Press the button** to append another press-and-release event at the right
  edge; the window scrolls once it fills.
- Shaded regions are HIGH; the flat baseline is LOW.

## Lesson Plan

**Bloom level:** Understand (L2) -- *interpret*

**Learning objective:** Given a digital input's voltage trace, the learner
interprets it as a two-state signal and distinguishes it from an analog one.

**Before the sim (5 min).** Ask what voltage a button produces when it is half
pressed. The intuition says something in between; the hardware says no.

**With the sim (10 min).** Read the trace. Press the button a few times and watch
the pattern extend without ever gaining a third height. Ask what the vertical
edges mean physically.

**After the sim (10 min).** Sketch, from memory, what the same button would look
like plotted if it were a dimmer knob instead. That sketch is the analog contrast.

**Check for understanding.** Ask: "Your program reads 2.4 V on a digital pin. What
does it report?" Either HIGH or LOW depending on the threshold -- never 2.4. The
value is discarded, and that is what digital means.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/digital-signal-high-low-chart/main.html" width="100%" height="502" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: chart
**sim-id:** digital-signal-high-low-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Purpose: Show a digital input's voltage-over-time trace as a clean step pattern, contrasting it with the smooth curve used later for analog input.

Chart type: Line chart (step-interpolation)

X-axis: Time (seconds, 0-10)

Y-axis: Voltage (0V to 5V)

Data series: One series showing voltage jumping instantly between 0V (button released) and 5V (button pressed) at five sample press/release events across the 10-second window

Title: "Digital Input Voltage Over Time"

Interactive features: Hovering any point on the step line reveals the exact voltage and HIGH/LOW label in a tooltip; a "press button" simulated button beneath the chart adds a live new step event to the right edge of the chart when clicked

Color scheme: Blue step line on a light background; HIGH segments shaded lightly to distinguish from LOW segments

Implementation: Chart.js line chart configured with `stepped: true`; click handler appends a new data point pair to simulate a live press event
```

## References

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md) -- the chapter this MicroSim supports.
- [Potentiometer Analog Input Explorer](../potentiometer-analog-input-explorer/index.md) -- the same contrast from the analog side.
- [PWM Analog Output Brightness Explorer](../pwm-analog-output-brightness-explorer/index.md) -- how a two-state pin fakes a continuous output.
- [Digital signal](https://en.wikipedia.org/wiki/Digital_signal) -- discrete levels and switching thresholds.
- [Logic level](https://en.wikipedia.org/wiki/Logic_level) -- where the boundary between HIGH and LOW actually sits.
