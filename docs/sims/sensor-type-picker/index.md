---
title: "Sensor Type Picker"
description: "Eight project scenarios, six sensors, and one question that settles every one of them."
image: sims/sensor-type-picker/sensor-type-picker.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Sensor Type Picker

<iframe src="main.html" width="100%" height="522" scrolling="no"></iframe>

[Run the Sensor Type Picker MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Picking a sensor looks like a shopping problem and is actually a comprehension
problem. The method is one question:

> **What physical property does this project actually need to measure?**

Answer that in plain words — brightness, temperature, distance — and the sensor
picks itself. Skip it, and you end up choosing by what sounds related.

The wrong answers here are deliberately plausible. A motion sensor and a
distance sensor both sound right for "notice someone approaching", and the
difference only shows up when you say what each one reports: one says *something
warm moved*, the other says *the nearest thing is 40 cm away*. A robot that must
stop before a wall needs the number; a display that wakes when someone enters
does not.

One scenario is deliberately a trap about reading carefully. "Water a plant when
the room air is very dry" says *air*, so the answer is humidity — even though a
soil moisture sensor is the better engineering choice for the actual plant. The
feedback says so. Noticing that the stated requirement and the sensible
requirement differ is a skill worth having.

Each icon draws the property rather than the packaged part, so the picture is
itself a hint: a droplet for humidity, a pulse bouncing off a wall for distance.

## How to Use

- Read the scenario and say the property out loud *before* clicking. That is
  the whole method.
- Click a sensor. Correct answers get a green tick and the reason; wrong ones
  name what your pick actually measures and which property the scenario needed.
- **New scenario** advances; the score tracks your pass through all eight.
- **Start over** resets the score and returns to the first scenario.

## Lesson Plan

**Bloom level:** Apply (L3) -- *select*

**Learning objective:** Given a short project scenario, the learner selects the
sensor type best suited to the required measurement.

**Before the sim (5 min).** Put one project idea on the board and ask which
sensor it needs. Then ask *why* — and make people say the property out loud.
That second question is the skill.

**With the sim (15 min).** Run all eight. The motion-versus-distance pair is
where the arguing happens, which is where the learning is.

**After the sim (20 min).** Have each student write a scenario for their own
project idea, swap, and pick each other's sensor. Scenarios that cannot be
answered are the useful outcome: they were not specific about what to measure,
which means the project is not scoped yet.

**Check for understanding.** Ask: "When is a motion sensor the wrong choice for
detecting a person?" When you need to know how far away they are, or when you
need to detect someone standing still. Both come from the same question: what
does it actually measure?

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/sensor-type-picker/main.html" width="100%" height="522" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** sensor-type-picker<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a mentor rehearse the same question-driven selection process from the worked scenario above against several project ideas.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: select

Learning objective: Given a short project scenario, the learner selects the sensor type best suited to the required measurement.

Canvas layout: Left (60%) shows a project-scenario card with a one-sentence description ("Turn on a porch light automatically at dusk"); right (40%) shows six sensor icons the learner can select from.

Interactive controls: "New Scenario" button cycling through eight project prompts; six clickable sensor icons (light, temperature, humidity, motion, sound, distance); a feedback panel that appears after a selection.

Default parameters: Opens on the "porch light at dusk" scenario with no sensor selected.

Behavior: Clicking a sensor icon shows immediate feedback — green check and a one-sentence reason if correct, amber note explaining what property of the scenario points to a different sensor if incorrect — before advancing to the next scenario.

Implementation notes: p5.js canvas with an array of scenario objects, each carrying its correct sensor answer and a feedback string; click detection on six fixed icon regions.
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Temperature Sensor Reading Explorer](../temperature-sensor-reading-explorer/index.md) -- what a temperature sensor actually reports.
- [Photoresistor Voltage Divider Explorer](../photoresistor-voltage-divider-explorer/index.md) -- wiring the light sensor you just picked.
- [Sound Threshold Detector](../sound-threshold-detector/index.md) -- tuning the sound sensor once it is chosen.
- [Sensor](https://en.wikipedia.org/wiki/Sensor) -- the general idea of transducing a physical property.
- [Passive infrared sensor](https://en.wikipedia.org/wiki/Passive_infrared_sensor) -- how a PIR detects a warm body moving.
