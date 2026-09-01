---
title: Grant Budget Laptop Calculator
description: Given a grant amount and a chosen device platform, the learner calculates how many laptops the grant can purchase, how much budget remains, and how many students the resulting fleet can serve one-to-one.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Grant Budget Laptop Calculator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md).

```text
Type: microsim
**sim-id:** grant-budget-laptop-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified
**Template:** https://github.com/dmccreary/economics-course/tree/main/docs/sims/budget-builder

Purpose: Let a club leader explore how a grant budget converts into a device count under each platform, and see the leftover-budget and per-student-coverage consequences of that choice before committing real money.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a grant amount and a chosen device platform, the learner calculates how many laptops the grant can purchase, how much budget remains, and how many students the resulting fleet can serve one-to-one.

Instructional Rationale: A parameter-exploration pattern fits this Apply-level objective because the learner needs to test several budget and platform combinations and immediately see the arithmetic consequences, rather than watch a single pre-computed scenario play out.

Canvas layout:
- Left (450px): a simple bar showing devices purchased vs. students still needing a device
- Right (150px): control panel

Interactive controls:
- Slider: Grant amount, $500-$10,000, step $250, default $3,000
- Dropdown: Platform (Chromebook $250, Windows $450, macOS $950, Custom price)
- Input (number): Custom per-unit price, enabled only when "Custom" is selected
- Input (number): Number of students in the club, default 12
- Button: "Reset to Defaults"

Behavior:
- Devices purchasable = floor(grant amount / unit price), recalculated live as any control changes
- Remaining budget = grant amount - (devices purchasable x unit price), displayed in dollars
- Coverage = "X of Y students have their own device" compared against the student-count input
- Bar chart updates immediately; no animation delay, since this is a calculation tool, not a simulation

Default parameters: $3,000 grant, Chromebook selected, 12 students -- resulting in 12 devices, $0 remaining, "12 of 12 students covered"

Implementation notes: p5.js canvas with createSlider, createSelect, and createInput controls parented to the sketch's own control div; recompute on every draw() call rather than only on change events, since inputs may be adjusted with arrow keys.
```

## Related Resources

- [Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md)
