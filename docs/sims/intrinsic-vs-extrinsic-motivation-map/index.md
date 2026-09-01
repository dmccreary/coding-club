---
title: Intrinsic vs Extrinsic Motivation Map
description: Given a proposed club motivator, the learner classifies it as primarily intrinsic, primarily extrinsic, or a well-designed blend of the two.
status: scaffold
library: Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)
bloom_level: Understand (L2)
---

# Intrinsic vs Extrinsic Motivation Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md).

```text
Type: infographic-overlay (grid)
**sim-id:** intrinsic-vs-extrinsic-motivation-map<br/>
**Library:** Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones)<br/>
**Status:** Specified

Purpose: Let a mentor classify a proposed motivator as intrinsic, extrinsic, or a blend of both, and see concrete club examples of each, reinforcing the overjustification-effect warning above with real cases where a badge supports rather than undercuts intrinsic drive.

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify

Learning objective: Given a proposed club motivator, the learner classifies it as primarily intrinsic, primarily extrinsic, or a well-designed blend of the two.

Image style: Flat comparison poster, two vertical columns plus a narrower center column, each with a bold printed column header baked into the image ("Intrinsic Motivators," "Well-Designed Blend," "Extrinsic Motivators")

Image dimensions: 1200x800 (landscape)

Zones (3 columns, each with id, label, color, approximate x1/y1/x2/y2 percentage boundaries, one-line summary, and 3-5 bullet facts):
1. `intrinsic-column` -- color #4A90D9 -- boundaries approximately x1:2,y1:10,x2:32,y2:92 -- Summary: "Driven by the activity itself." Facts: curiosity about how something works; pride in a working robot; the pleasure of finally fixing a stubborn bug; enjoyment of building alongside a friend
2. `blend-column` -- color #7ED6A5 -- boundaries approximately x1:35,y1:10,x2:65,y2:92 -- Summary: "External rewards tied to real, demonstrated skill." Facts: a badge named after the specific skill it proves; a certificate marking a track genuinely completed; a sticker given after a student explains what they built, not just for showing up
3. `extrinsic-column` -- color #F5A623 -- boundaries approximately x1:68,y1:10,x2:98,y2:92 -- Summary: "Driven by an outside reward alone." Facts: a sticker for every card attempted regardless of outcome; points awarded purely for attendance; a prize tied to finishing first rather than finishing well; risk of the overjustification effect when overused on already-loved tasks

showLabels: false (column titles are printed in the generated image)

Interactive features: Click or hover any column to highlight its zone and reveal its full fact list in a detail panel; a "Sort the Motivator" quiz mode presents a new example motivator and asks the learner to click the correct column before revealing the right answer

Implementation: Interactive Infographic Overlay Guide (grid engine) -- `grid-diagram.js` + `grid-overlay.css` render the three rectangular hover zones over the generated poster image; `data.json` holds the 3 zones plus a bank of quiz-mode example motivators per the overlay-grid-data-json-schema
```

## Related Resources

- [Chapter 26: Motivation, Badges, and Growth Mindset Coaching](../../chapters/26-motivation-badges-growth-mindset/index.md)
