---
title: "Grant Budget Laptop Calculator"
description: "Grant, unit price, student count -- and the leftover nobody plans for."
image: sims/grant-budget-laptop-calculator/grant-budget-laptop-calculator.png
status: built
library: p5.js
bloom_level: Apply (L3)
---

# Grant Budget Laptop Calculator

<iframe src="main.html" width="100%" height="502" scrolling="no"></iframe>

[Run the Grant Budget Laptop Calculator MicroSim fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

The arithmetic is a division. The value is doing it before the money is
spent.

**Platform is the biggest lever.** A $3,000 grant buys twelve Chromebooks or
three MacBooks. Whether that matters depends on what the club actually does —
web-based work runs fine on a Chromebook, and video editing does not — but
deciding that *after* the purchase order is the expensive way round.

**The leftover is the number people skip.** Every combination leaves something,
and the tool shows it because a leftover is real money that quietly evaporates
unless it is assigned. $300 left from a $3,000 grant is a robot kit, a year of
consumables, or the spare device you will need when one gets dropped in
November. Write it into the application, not into next year's regret.

**Buy a spare if you can.** The tool flags it when the fleet exceeds the
student count, because the day a device fails is the day a student has nothing
to work on. One spare in twelve is cheap insurance.

One honest caveat the sim states and does not model: the prices are list prices.
Tax, shipping, and any device management licence typically add ten to fifteen
percent, so a grant that divides exactly here will not divide exactly at the
checkout.

## How to Use

- Drag **Grant amount** and watch the device count and coverage change
  together.
- Switch **Platform** without touching the grant. The same money buys a very
  different fleet.
- Choose **Custom price** to enter a real quote — refurbished machines and
  education pricing are both worth entering.
- Set **Students** to your actual club size and look for the point where
  coverage tips over.
- **Reset to defaults** returns to $3,000, Chromebooks, and 12 students.

## Lesson Plan

**Bloom level:** Apply (L3) -- *calculate*

**Learning objective:** Given a grant amount and a chosen device platform, the
learner calculates how many laptops the grant can purchase, how much budget
remains, and how many students the resulting fleet can serve one-to-one.

**Before the sim (5 min).** Ask how many laptops a $3,000 grant buys. Somebody
will say a number without asking which laptop, and that is the point.

**With the sim (10 min).** Run each platform at the same grant. Then work
backwards: what grant would you need to cover your club on each platform? That
number is what goes in the application.

**After the sim (20 min).** Get real quotes, including tax and shipping, and
re-run it with Custom price. The gap between the list price and the real one is
usually enough to change the answer by a device.

**Check for understanding.** Ask: "Your grant buys eleven devices for twelve
students, with $80 left. What do you do?" Ask for a slightly larger grant, buy
eleven and pair one session activity, or find a cheaper eleventh — but not
"hope". Naming which trade you are making is the skill.

## Embedding This MicroSim

Paste this into any page of the book, adjusting the relative path to
`docs/sims/` for the page's depth:

```html
<iframe src="../../sims/grant-budget-laptop-calculator/main.html" width="100%" height="502" scrolling="no"></iframe>
```

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

## References

- [Chapter 22: Purchasing and Configuring Club Devices](../../chapters/22-purchasing-configuring-devices/index.md) -- the chapter this MicroSim supports.
- [Coding Club Budget Builder](../coding-club-budget-builder/index.md) -- the whole first-year budget this purchase sits inside.
- [Club Inventory Lifecycle Workflow](../club-inventory-lifecycle-workflow/index.md) -- what happens to the fleet after it arrives.
- [Chromebook](https://en.wikipedia.org/wiki/Chromebook) -- what the cheapest option can and cannot do.
- [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership) -- why the purchase price is not the cost.
