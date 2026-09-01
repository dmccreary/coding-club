---
title: Digital Signal HIGH/LOW Chart
description: Digital Signal HIGH/LOW Chart
status: scaffold
library: Chart.js
bloom_level: TBD
---

# Digital Signal HIGH/LOW Chart



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

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

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
