---
title: Membership Fee Model Comparison
description: Given a number of families and a distribution of self-selected fee tiers, the learner calculates and compares total annual revenue under a flat membership fee model versus a sliding scale fee model.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Membership Fee Model Comparison



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md).

```text
Type: microsim
**sim-id:** membership-fee-model-comparison<br/>
**Library:** p5.js<br/>
**Status:** Specified

Purpose: Let a club leader build a family mix and compare the total annual revenue and family reach of a flat membership fee against a self-selected sliding scale fee.

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: calculate

Learning objective: Given a number of families and a distribution of self-selected fee tiers, the learner calculates and compares total annual revenue under a flat membership fee model versus a sliding scale fee model.

Instructional Rationale: A parameter-exploration pattern fits this Apply-level objective because the learner needs to adjust the number of families at each fee tier and immediately see how total revenue and the number of $0-tier families shift, rather than watch one fixed scenario play out.

Canvas layout:
- Left (60%): two side-by-side vertical bars -- "Flat Fee Revenue" and "Sliding Scale Revenue" -- each with a "months per year" multiplier applied, plus a small readout of how many families pay $0
- Right (40%): sliders for the flat fee amount and for how many families sit at each sliding-scale tier ($0, $5, $10, $15, $25), plus a total-families readout

Interactive controls:
- Slider: Flat monthly fee amount ($0-$30, default $10)
- Slider (x5): Number of families at each sliding-scale tier ($0, $5, $10, $15, $25), each 0-15, defaulting to 3, 0, 4, 2, 1
- Input (number): Months per year fees are collected, default 9
- Button: "Load Sample Family Mix" -- prefills the exact 10-family worked example above
- Button: "Reset"

Behavior:
- Total Families = sum of the five tier sliders
- Flat Fee Revenue = Flat monthly fee x Total Families x Months per year
- Sliding Scale Revenue = sum over each tier of (tier amount x families at that tier) x Months per year
- Both bars and the $0-tier family count recalculate immediately whenever any slider changes

Default parameters: loads with the sample mix from the worked example (10 families: 3 at $0, 4 at $10, 2 at $15, 1 at $25; flat fee $10; 9 months) yielding $900 flat versus $765 sliding scale

Implementation notes: p5.js canvas with createSlider and createButton controls parented to the sketch's own control div; recompute both totals every draw() call from current slider values so the bars stay perfectly in sync with the controls.
```

## Related Resources

- [Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md)
