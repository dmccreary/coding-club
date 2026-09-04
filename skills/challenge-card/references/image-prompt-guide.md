# Image Prompt Guide

Every card's front side needs a real illustration, not just a single
emoji glyph -- `front.icon` (the emoji) is only a placeholder that
renders until the illustration exists. Writing that illustration is a
two-agent handoff: **this** skill (or whichever agent is running it)
authors a highly detailed `image-prompt.md` and logs the task in
`docs/cards/TODO.md`; a *separate* agent with image-generation tools
does the actual rendering later. Do not attempt to generate the PNG
yourself as part of card authoring -- write the prompt, log the TODO,
and move on to solution verification.

See `docs/cards/motor-spin/image-prompt.md` and
`docs/cards/rock-paper-scissors/image-prompt.md` for two fully worked
examples at the right level of detail. `docs/cards/measure-led-current/image-prompt.md`
is an earlier, shorter draft of the same idea -- match the depth of the
first two, not that one.

## Where the file goes

`docs/cards/<card-id>/image-prompt.md`, written during Step 1 of
`SKILL.md`, right after `card.yaml` -- before solution verification or
rendering. The card renders and prints fine in the meantime using the
`front.icon` emoji fallback; nothing blocks on the illustration existing.

## Required sections

Write every section below. "Highly detailed" means concrete color
names, shapes, proportions, and spatial relationships -- not vague
adjectives like "nice" or "colorful." A prompt an illustrator (human or
AI) could follow with no follow-up questions is the bar.

1. **Title** (`# <Card Title> Image Prompt`)

2. **`## Subject`** -- what the illustration must depict and why, tied
   directly to the card's concept. Name every object that must appear,
   and how many of each (an image-generation model will happily draw
   the wrong count unless you pin it down -- see motor-spin's "exactly
   three AA batteries").

3. **`## Composition`** -- canvas shape and roughly where things sit.
   This card style displays the image inside a `2.6in` square icon box
   with `object-fit: contain`, so both a square canvas (`measure-led-current`,
   1000x1000) and a wide landscape canvas (`motor-spin`, `rock-paper-scissors`,
   ~1774x887, 2:1) work fine -- pick whichever suits the subject. State
   the aspect ratio and pixel dimensions explicitly. Call out a clean
   white (or transparent) background, no horizon/tabletop/room, and that
   every element must stay fully inside the frame.

4. **One subsection per key object/element** -- for anything with more
   than one or two visual parts, give each its own `##` or `###`
   subsection (see motor-spin's "Left object" / "Right object", or
   rock-paper-scissors's per-object breakdown). Cover shape, exact
   colors, outline weight, shading/highlights, and how it connects to
   or relates to neighboring elements.

5. **`## Style, color, and readability`** -- describe the rendering
   style (e.g. "flat vector," "polished educational illustration with
   bold outlines and soft dimensional shading"), the specific color
   palette used, and why it stays legible when printed small on a
   folded card. When the concept doesn't dictate its own palette,
   default to this book's mascot colors: warm amber `#F5A623` and sky
   blue `#4A90D9`, both on white.

6. **`## Avoid`** -- an explicit exclusion list: no text/labels/numbers
   beyond what the subject truly needs, no people/hands/faces/mascots
   unless the card is specifically about the mascot, no logos or
   watermarks, no photorealism (flat/vector illustration only), no
   extra props not called for by the subject.

7. **`## Detailed recreation prompt`** (or `## Detailed prompt` for a
   not-yet-generated image) -- one paste-ready block of prose that
   restates every constraint above as instructions to an image
   generator, so nothing is lost by only skimming the sections above.

## After the image exists

The image-generation agent that produces the PNG should update this
same `image-prompt.md` with a `## Finished image` section at the top
(an inline `![alt](file.png)` plus a short factual description of what
actually got generated, in case the image needs to be adjusted or recreated exactly).
That step belongs to the image-generation agent, not to this skill.
