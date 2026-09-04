# Print Layout Guide

## Physical production method

1. Print `sheet.html` -> `sheet.pdf` **single-sided** on 8.5x11 paper, in
   landscape (the sheet is 11in wide x 8.5in tall).
2. Fold along the **vertical center line** (a mountain fold, ink-side
   out) so the sheet becomes two 5.5in x 8.5in portrait panels, front and
   back.
3. Laminate the folded card. No trim step -- the finished card is
   ~5.5in x 8.5in, not cut down to a literal 5x7.

## Why the back panel is NOT pre-rotated (back_rotation_deg: 0)

This card has a **vertical spine** -- you flip it open/closed like a book
cover or a greeting card, rotating about that vertical crease. Working
through the actual physical rotation:

- The fold itself is a 180-degree rotation about the vertical crease
  (the Y axis), which flips which face points toward the viewer.
- Picking the closed card up and turning it over to see the other side
  (like turning a book to see its back cover) is a **second** 180-degree
  rotation about that same vertical axis.
- Two 180-degree rotations about the same axis compose to 360 degrees =
  the identity transformation. Net effect on the back panel's *authored*
  content: **zero rotation needed.**

This was confirmed empirically, not just by this math: an earlier
version of this template defaulted `back_rotation_deg` to 180 (copying
the card spec's literal wording without doing the geometry above first).
Rendering `docs/cards/motor-spin/sheet.pdf` with that default showed the
entire back panel fully upside-down. Setting it to `0` and re-rendering
fixed it -- both panels read upright, side by side, exactly as they will
once folded.

**If a future card design uses a different fold** (e.g., a top-fold tent
card meant to be read from two sides simultaneously by two people, rather
than a side-fold spine), the correct rotation is genuinely different --
recompute it for that geometry rather than assuming 0 carries over, and
confirm by reading the rendered PDF before trusting it.

The rotation value lives in exactly one place:
`assets/templates/challenge-card/difficulty-themes.json` ->
`<theme>.back_rotation_deg`, applied via CSS `transform: rotate()` on the
back panel's container in `sheet-template.html` only -- never baked into
`front-template.html`/`back-template.html`, which always render in normal
reading orientation for on-screen preview.

## CSS structure

- `@page { size: 11in 8.5in landscape; margin: 0; }` -- see
  `docs/sims/certificate-generator/main.html` lines 282-307 in
  `ibook-skills` for the precedent this pattern is adapted from.
- `.panel { width: 5.5in; height: 8.5in; border: 0.25in solid
  var(--difficulty-color); }` -- the 1/4 inch difficulty border.
- `.sheet { width: 11in; height: 8.5in; display: flex; }` wraps both
  panels side by side for the combined print sheet only.

## Printer margin risk (untested in this prototype)

Most consumer printers cannot print true edge-to-edge. If a printer's
minimum unprintable margin exceeds the 0.25in border inset, part of the
border could get clipped on the sheet's outer (non-crease) edges. This
has NOT been validated against a real printer yet -- do a real print
test before mass-producing cards, and inset the border slightly (e.g.
`--border-width: 0.22in`) if clipping shows up.

## Rendering pipeline

`scripts/render_card_pdf.py` loads `card.yaml`, renders
`front-template.html` / `back-template.html` / `sheet-template.html`
(each including the shared `_front-panel.html` / `_back-panel.html`
partials so on-screen previews and the print sheet never drift out of
sync with each other), then calls Playwright's `page.pdf()` against
`sheet.html` with `emulate_media(media="print")` so the `@media print`
CSS rules apply.

## Content-fit autofit

Card content (steps, hints, solution code, `see_also`) is
author-supplied and unbounded in length -- there is no word-count cap.
`.panel` is a fixed 8.5in-tall flex column with `overflow: hidden`, so
before the autofit pass existed, a panel with enough content would
silently clip text at the very bottom edge with zero warning (this is
exactly what happened to `draw-a-square-turtle`'s back panel: the
`see_also` URL got cut off mid-word, flush against the border, and
looked fine in a casual glance at the HTML preview).

`autofit_fit_scales()` in `render_card_pdf.py` fixes this per panel,
independently for front and back, before the real render happens:

1. Render the panel at `--fit-scale: 1` (no shrink).
2. Measure its TRUE natural height in a headless Chromium page by
   temporarily setting `height: auto; overflow: visible` on the
   `.panel` element and reading `getBoundingClientRect().height` --
   this bypasses the `overflow: hidden` clip so a too-tall panel
   reports its real size instead of the clipped 8.5in.
3. If that natural height leaves less than `MIN_BOTTOM_GAP_IN` (0.125in
   -- 1/8in) of clearance before the border, shrink `--fit-scale` and
   re-measure, up to `MAX_FIT_ATTEMPTS` (4) times or down to
   `MIN_FIT_SCALE` (0.8 -- a 20% shrink floor chosen so body copy stays
   readable when laminated).
4. If even the floor scale doesn't reach the 1/8in target, print a
   loud `WARNING` distinguishing two severities: text that will
   actually cross the border ("TEXT WILL BE CLIPPED") vs. text that
   fits but leaves less than 1/8in of margin. Either way the fix is to
   shorten that panel's content in `card.yaml`, not to keep shrinking
   fonts -- there is no floor below 0.8 because illegible-but-technically-
   fitting text is not an acceptable outcome for a printed, laminated card.

`--fit-scale` is a CSS custom property, set inline per panel
(`_front-panel.html` / `_back-panel.html`) and consumed via
`calc(<value> * var(--fit-scale))` on every font-size/margin/padding in
`style.css` that scales body copy -- including the `.panel__icon` /
`.panel__icon--image` box, since a generated illustration is often the
single biggest reclaimable block on the front panel. `.panel__title`
and `.panel__meta-row` are deliberately NOT scaled (title stays
prominent; the footer row is small and fixed).

This check requires Playwright (already a hard dependency of the PDF
step). If Playwright isn't installed, `autofit_fit_scales()` prints a
warning and leaves `--fit-scale: 1` -- content-fit is unverified in
that case, so **Critical Gotcha #3 (read the rendered PDF) still
applies**; the autofit pass narrows how often that manual check catches
something, it doesn't replace it.
