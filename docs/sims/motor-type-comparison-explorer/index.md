---
title: Motor Type Comparison Explorer
description: Given a project's motion requirement, the learner differentiates which of the three motor types — DC, servo, or stepper — is the best fit and explains why.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Motor Type Comparison Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md).

```text
Type: microsim
**sim-id:** motor-type-comparison-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a learner test the same reasoning from the worked scenario above against new project prompts, matching each one to the correct motor family.

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate

Learning objective: Given a project's motion requirement, the learner differentiates which of the three motor types — DC, servo, or stepper — is the best fit and explains why.

Visual elements: Three animated motor icons (a spinning wheel for DC, a pointer sweeping to an angle for servo, a dial advancing in discrete clicks for stepper) alongside a project-prompt card.

Interactive controls: "New Project" button cycling through six prompts (drive wheels, robot arm joint, camera pan mount, plotter pen arm, conveyor belt, door latch); three clickable motor icons.

Default parameters: Opens on the "drive wheels" prompt with no motor selected.

Behavior: Clicking a motor icon reveals feedback explaining whether that motor's motion style and feedback match the prompt's requirement, referencing the comparison table's three criteria.

Implementation notes: p5.js canvas with three animated icon functions (continuous rotation, angle sweep, stepped rotation); array of prompt objects each carrying a correct-answer key and explanation text.
```

## Related Resources

- [Chapter 17: Sensors, Displays, Motors, and Robot Chassis](../../chapters/17-sensors-displays-motors/index.md)
