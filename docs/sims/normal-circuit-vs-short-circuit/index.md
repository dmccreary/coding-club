---
title: Normal Circuit vs. Short Circuit
description: Given a circuit diagram, the learner explains why a low-resistance path produces a current spike compared to a normal, resistor-limited path.
status: scaffold
library: Interactive Infographic Overlay (diagram.js, side-by-side comparison + numbered callouts)
bloom_level: Understand (L2)
---

# Normal Circuit vs. Short Circuit



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md).

```text
Type: infographic
**sim-id:** normal-circuit-vs-short-circuit<br/>
**Library:** Interactive Infographic Overlay (diagram.js, side-by-side comparison + numbered callouts)<br/>
**Status:** Specified

Purpose: Show why removing the resistor and LED from a circuit's current path causes a dangerous current spike, using the same numbers worked through in the prose above.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain

Learning objective: Given a circuit diagram, the learner explains why a low-resistance path produces a current spike compared to a normal, resistor-limited path.

Image style: Two side-by-side breadboard circuit illustrations — left labeled "Normal Circuit" (battery, resistor, LED, wire loop), right labeled "Short Circuit" (battery, bare wire loop, no resistor)

Image dimensions: 1200x600 (landscape)

Callouts (4 total): 1. "6V battery pack" on both illustrations; 2. "220-ohm resistor" on the normal circuit only, color #4A90D9; 3. "~27 mA (safe)" current readout on the normal circuit, color #2ECC71; 4. "~6 A (dangerous, gets hot)" current readout on the short circuit, color #E74C3C

Interactive features: Hover either current readout to reveal the Ohm's law calculation behind it; click either full illustration to toggle a heat-glow effect on the wire showing where the energy is being dissipated

Implementation: Interactive Infographic Overlay Guide (callout engine) — `diagram.js` + `style.css` render the two illustrations with hover-revealed calculation tooltips
```

## Related Resources

- [Chapter 16: Physical Computing and Electrical Safety Basics](../../chapters/16-physical-computing-safety/index.md)
