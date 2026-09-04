# Draw a Square with Turtle Graphics Image Prompt

## Subject

A small cartoon turtle mid-way through drawing a square, shown exactly at
the moment it has finished one side and is about to execute its 90-degree
turn. The illustration must depict exactly three things: one completed
square path (drawn as a bold outlined loop), one turtle character sitting
on that path facing along the next side to be drawn, and one curved
turn-arrow at the upcoming corner showing the quarter turn the turtle is
about to make. This is the front-side icon for a beginner Python
challenge card whose whole point is "forward(), then right(90), four
times" -- the image should make that rhythm visually obvious without any
text or code on the canvas.

## Composition

Square canvas, 1000x1000 pixels, 1:1 aspect ratio, clean white background,
no horizon, no tabletop, no surrounding scene. The square path sits
centered in the frame, occupying roughly the middle 650x650 pixels, with
generous white margin on all four sides so nothing crowds the edge of the
2.6in icon box it will be scaled into. The turtle sits directly on the
top edge of the square path, a little left of the top-right corner,
facing right (east) along that edge. Every element -- all four sides of
the square, the turtle, and the turn-arrow -- must be fully inside the
frame with no cropping.

## The square path

A single continuous square outline, drawn as if freshly plotted by the
turtle: four straight sides of equal length, sharp 90-degree corners (no
rounding), rendered as a thick line (approximately 14px stroke at this
resolution) in warm amber `#F5A623`. The top-right corner -- the one
the turtle is approaching -- is marked with a small solid amber dot where
the two sides meet, slightly larger than the stroke width, so the
"target corner" reads clearly. The other three corners are plain line
joins with no dot. The three already-drawn sides (left, bottom, right, and
the completed left portion of the top side up to the turtle) are solid
amber; nothing about the square is dashed or faded -- it is finished,
solid geometry.

## The turtle

A simple, friendly, flat-vector turtle character, sitting directly on the
top edge of the square path and facing right, matching this book's
mascot illustration style (rounded shapes, bold dark-navy outlines, no
photorealistic texture). Sky-blue `#4A90D9` shell with two or three darker
blue hexagonal shell-segment lines for texture, pale green head and short
limbs, two small simple dot eyes on the forward-facing head, no visible
mouth or other facial detail. The turtle is compact and rounded -- roughly
as tall as the square's stroke width times six -- and sits exactly on the
amber line, not above or below it, as if the line is the path it just
traced.

## The turn-arrow

A short, curved arrow drawn in the same amber `#F5A623` as the square,
positioned just ahead of the turtle below the top-right corner dot. It
sweeps in a quarter-circle from pointing right (matching the turtle's
current heading) to pointing down (the turtle's next heading after turning
right along the square), with a small solid arrowhead at the end of the
sweep. The arrow is noticeably thinner than the square's own stroke (about
6px) so it clearly reads as a motion annotation rather than a fourth side
of the square, and it sits entirely inside the white margin below the
corner, not overlapping the square path itself.

## Style, color, and readability

Flat vector illustration, bold dark-navy outlines throughout, simple flat
fills with no gradients, shadows, or photorealistic texture -- matching
this book's mascot and diagram art style. Three colors carry the whole
image: warm amber `#F5A623` for the drawn path and the turn-arrow, sky
blue `#4A90D9` and pale green for the turtle, and white for the
background. Every shape stays bold and simple enough to read clearly when
the whole illustration is scaled down to fit a roughly 2.6-inch square
icon on a printed, laminated card.

## Avoid

Do not render any text, labels, numbers, coordinate axes, or code on the
canvas -- only the square path, the turtle, and the turn-arrow. Do not
draw a second, smaller inner square (that is the card's stretch goal and
should stay a surprise, not a spoiler in the icon). Do not add other
turtles, people, hands, a mascot face with a mouth, logos, watermarks, a
background scene, or photorealistic shading. Do not round the square's
corners -- a rounded corner would misrepresent the sharp 90-degree turns
the card is actually testing.

## Detailed prompt

Create a flat-vector educational illustration on a 1000x1000 pixel square
canvas with a clean white background. Draw a bold amber (`#F5A623`) square
outline, centered, roughly 650x650 pixels, with sharp unrounded 90-degree
corners and a stroke about 14px wide. Mark the top-right corner with a
small solid amber dot. Place a simple, friendly, flat-vector cartoon
turtle -- sky-blue `#4A90D9` shell with darker blue hexagonal shell-line
texture, pale green head and limbs, two small dot eyes, bold dark-navy
outlines, no mouth -- sitting directly on the top edge of the square, a
little left of that marked corner, facing right. Just below the marked
corner, draw a short curved amber arrow (about 6px stroke, thinner than
the square) sweeping in a quarter circle from pointing right to pointing
down, ending in a small solid arrowhead, to show the turtle's next 90-degree
turn. Keep the whole composition simple, bold, and legible at small print
size: no text, numbers, code, extra turtles, people, mascots faces, second
inner square, background scenery, logos, or watermarks -- just the
finished square path, the turtle, and the one turn-arrow, on white.

## Generation note

Generated with the built-in image generation tool. The saved PNG is 1254 × 1254 pixels. The turtle approaches the top-right corner facing right, and the arrow curves clockwise downward to correctly illustrate `right(90)`.
