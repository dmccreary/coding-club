---
title: "Ultrasonic Ranging Explorer"
description: "Send a pulse at a wall, watch the echo come back, and see how a duration in microseconds becomes a distance in centimetres."
image: sims/ultrasonic-ranging/ultrasonic-ranging.png
status: built
library: p5.js
bloom_level: Understand (L2)
---

# Ultrasonic Ranging Explorer

<iframe src="main.html" width="100%" height="452" scrolling="no"></iframe>

[Run the Ultrasonic Ranging Explorer MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

An HC-SR04 does not measure distance. It measures **time** -- how long a burst of
sound takes to leave the sensor, bounce off something, and come back. Distance is
arithmetic the program does afterwards, and a student who does not know that
cannot debug a reading that looks wrong.

Drag the wall and the panel shows the echo duration in microseconds next to the
distance derived from it. The divide-by-58 in the formula is not magic: sound
travels about 343 metres per second, the pulse covers the gap twice, and the
units work out to centimetres.

The temperature slider is the part worth dwelling on. Sound travels faster in
warm air, so the same echo duration means a different distance on a hot day. A
robot calibrated in a cool classroom will read slightly short in a warm gym.

## How to Use

- **Hover near the sensor** to send a pulse and watch the echo travel.
- **Drag the wall** left or right to change the real distance.
- **Air temperature** changes the speed of sound, which changes the distance the
  same echo duration implies.

## Lesson Plan

**Bloom level:** Understand (L2) -- *explain*

**Learning objective:** Given an ultrasonic sensor's echo return time, the learner
explains how that duration converts into a distance.

**Before the sim (5 min).** Ask what an ultrasonic sensor measures. Almost
everyone says "distance." Write that on the board; you will correct it in five
minutes.

**With the sim (10 min).** Send a pulse with the wall close, then far. Point out
that the number the sensor actually reports is the microsecond figure, and the
centimetre figure underneath it is arithmetic. Then move the temperature slider
without touching the wall and ask why the distance changed when nothing moved.

**After the sim (10 min).** Ask the group to work out, on paper, why the divisor
is 58: 343 m/s is 0.0343 cm per microsecond, the sound makes a round trip, so
one centimetre of distance costs about 58 microseconds.

**Check for understanding.** Ask: "Your robot stops too late in the gym but was
fine in the classroom. What might be different?" Naming air temperature as a
candidate is the objective met.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/ultrasonic-ranging/main.html" width="100%" height="452" scrolling="no"></iframe>
```

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** ultrasonic-ranging<br/>
**Library:** p5.js<br/>
**Status:** Reused<br/>
**Source:** https://dmccreary.github.io/learning-micropython/sims/ultrasonic-ranging/<br/>
**Source Repo:** https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/ultrasonic-ranging

Reused from the MicroSim catalog (WHAT match score 0.76). Learning objective: Given an ultrasonic sensor's echo return time, the learner calculates the distance to an obstacle using the speed-of-sound formula (Apply).
```

## References

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md) -- the chapter this MicroSim supports.
- [Ultrasonic transducer](https://en.wikipedia.org/wiki/Ultrasonic_transducer) -- how the sensor produces and detects the burst.
- [Speed of sound](https://en.wikipedia.org/wiki/Speed_of_sound) -- the temperature dependence the slider demonstrates.
- [Time of flight](https://en.wikipedia.org/wiki/Time_of_flight) -- the general measurement principle, also used by lidar.
- [Echolocation](https://en.wikipedia.org/wiki/Animal_echolocation) -- the same trick, evolved first by bats.

## Credits

This MicroSim is adapted from
[ultrasonic-ranging](https://dmccreary.github.io/learning-micropython/sims/ultrasonic-ranging/) in the *learning-micropython* project by the same author
([source](https://github.com/dmccreary/learning-micropython/tree/main/docs/sims/ultrasonic-ranging)). It is used here unchanged; the club context is supplied by the lesson plan above.
