---
title: Membership Fee Model Comparison
description: Flat fee against sliding scale on the same families -- with the reach that a revenue bar alone does not show.
image: sims/membership-fee-model-comparison/membership-fee-model-comparison.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Membership Fee Model Comparison

<iframe src="main.html" width="100%" height="562" scrolling="no"></iframe>

[Run the Membership Fee Model Comparison MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

Two models, the same ten families, and a comparison that a revenue bar on its
own gets wrong.

With the sample mix the flat fee raises **$900** and the sliding scale raises
**$855**. On revenue alone the flat fee wins by $45, and the sim says so.

What the flat bar does not show is that three of the ten families selected the
$0 tier. Under a flat $10 fee those three families are not in the club, so that
$900 is $630 from seven families — the $900 figure quietly assumes ten families
who would not all be there. That is why the sim prints the reach beside each
bar: **7 families against 10.**

So the question is not which bar is taller. It is whether $45 a year is worth
three families, and once it is put that way most clubs answer it quickly.

**The $0 tier is the whole mechanism.** A sliding scale without one is a flat
fee with extra steps. And a sliding scale that asks a family to prove hardship
to reach the $0 tier is worse than a flat fee, because it adds the stigma the
fee was meant to avoid while still collecting less. Self-selected, on the
honour system, no questions — or do not bother.

Worth checking against your own budget: $855 covers the sample club's $830 of
recurring costs, with $25 to spare. A model that reaches every family *and*
covers the year is not a compromise.

## How to Use

- The sim opens on the ten-family sample mix. Compare the two bars, then read
  the reach under each.
- Drag the **$0 tier** slider up and watch the flat fee's revenue *and* reach
  both fall while the sliding scale's reach holds.
- Push the **$25 tier** up. A handful of families choosing the top tier can
  close the gap entirely.
- Change **Flat monthly fee** to find the flat fee that matches the sliding
  scale's revenue — then ask how many families that fee excludes.
- **Load sample family mix** restores the worked example.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a number of families and a distribution of
self-selected fee tiers, the learner calculates and compares total annual
revenue under a flat membership fee model versus a sliding scale fee model.

**Before the sim (5 min).** Ask which model raises more. Most people say flat,
and most people are right — which makes the reach number land harder.

**With the sim (15 min).** Run the sample, then have the group guess their own
club's likely mix and enter it. The guess about how many families would pick $0
is itself worth discussing.

**After the sim (20 min).** Draft the actual form. One question, five options,
no explanation required. The wording matters more than the tiers: "choose what
works for your family" collects differently from "select your contribution
level".

**Check for understanding.** Ask: "Your sliding scale raises less than you
need. Name two changes that do not exclude anybody." Add a higher tier, or
make up the gap from the community support drive. Lowering the $0 tier's
availability is not on the list.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/membership-fee-model-comparison/main.html" width="100%" height="562" scrolling="no"></iframe>
```

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

Default parameters: loads with the sample mix from the worked example (10 families: 3 at $0, 4 at $10, 2 at $15, 1 at $25; flat fee $10; 9 months) yielding $900 flat versus $855 sliding scale

Implementation notes: p5.js canvas with createSlider and createButton controls parented to the sketch's own control div; recompute both totals every draw() call from current slider values so the bars stay perfectly in sync with the controls.
```

## References

- [Chapter 31: Tracking Expenses and Building Funding Partnerships](../../chapters/31-expenses-and-funding-partnerships/index.md) -- the chapter this MicroSim supports.
- [Coding Club Budget Builder](../coding-club-budget-builder/index.md) -- the recurring total this revenue has to cover.
- [Access Barrier to Fix Map](../access-barrier-to-fix-map/index.md) -- why a fee is an access barrier at all.
- [Sliding scale fees](https://en.wikipedia.org/wiki/Sliding_scale_fees) -- the model and where else it is used.
- [Pay what you can](https://en.wikipedia.org/wiki/Pay_what_you_want) -- self-selection, and what actually happens when you try it.
