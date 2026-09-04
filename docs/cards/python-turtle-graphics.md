# Python Turtle Graphics Challenge Card Ideas

Ideas for challenge cards built around Python's `turtle` module — the book's own
first text-based Python project (Chapter 14), chosen because it makes typed code
visual again right when a student most needs that reassurance.

## Beginning

### Draw a Square

Using only `forward()` and `right(90)` repeated four times, draw a square on the
canvas. This is the simplest possible turtle program and confirms a student
understands that the turtle moves and turns based on typed commands, not blocks.
Stretch goal: draw the square, then draw a second smaller square inside it.

### Draw a Five-Pointed Star

The book's own example challenge: repeat `forward(100)` and `right(144)` five times
in a loop to draw a five-pointed star, verifying visually whether the angle math was
right without a mentor checking line by line. Stretch goal: figure out what angle
draws a six-pointed star instead.

### Rainbow Spiral

Draw a spiral by slightly increasing the forward distance on each pass through a
loop while turning a fixed angle each time, and change `pencolor` on every
iteration to cycle through a list of colors. Stretch goal: make the spiral wind
inward instead of outward.

### Traffic Light Turtle

Draw three stacked filled circles — red, yellow, green — using `turtle.circle()`
and `begin_fill()`/`end_fill()`, with no loop required. This introduces shape
drawing and fill color as a small, achievable step beyond straight lines. Stretch
goal: add a black rectangle "housing" behind the three circles.

### Write Your Initials

Plan out and draw a student's initials using only `forward()` and `left()`/`right()`
turns, requiring the angles and distances to be worked out on paper before typing
any code. Stretch goal: fill each letter with a different color.

## Intermediate

### Polygon Machine

Write a function `draw_polygon(sides, length)` that draws any regular polygon based
on its two parameters, using the fact that each turn angle equals `360 / sides`.
Combines functions, parameters, and loops into one reusable tool. Stretch goal: call
the function five times in a row with increasing side counts to draw a
triangle-through-heptagon gallery.

### Turtle Color Wheel

Store a list of colors and loop through it, drawing one ring of a different color
for each item in the list using `turtle.circle()` with increasing radius. This is a
visual first use of a Python list, each item producing one physical ring. Stretch
goal: use `turtle.color()` with RGB tuples instead of named colors.

### Random Walk Explorer

Import the `random` module and, inside a `while` loop, move the turtle forward a
random distance and turn a random angle each pass, using a conditional to check the
turtle's `xcor()`/`ycor()` and bounce it back if it drifts off the visible canvas.
Combines loops, conditionals, and randomness. Stretch goal: leave a trail that fades
in color the longer the walk continues.

### User-Controlled Turtle Steering

Use `turtle.onkey()` to bind the arrow keys to functions that turn and move the
turtle, plus `turtle.listen()` to start capturing key presses — the Python parallel
to Scratch's event blocks. Stretch goal: add a key that lifts the pen so the turtle
can move without drawing.

### Interactive Star Generator

Ask the user for a number of points with `input()`, then use a function to draw a
star with that many points by calculating the turn angle from the input value.
Combines `input()`, functions, loops, and angle math in one program. Stretch goal:
handle a point count that doesn't produce a clean star and explain what happens.

## Advanced

### Recursive Fractal Tree

Write a function that draws a branch, then calls itself twice — once for each of
two smaller branches — stopping once a `depth` parameter reaches zero. This is a
genuine first encounter with recursion: a function calling itself with a smaller
version of the same problem. Stretch goal: randomize branch angles slightly so no
two trees look identical.

### Recursive Koch Snowflake

Implement the classic Koch snowflake fractal recursively, where each straight edge
is replaced by four smaller edges at each level of recursion, controlled by a
`depth` parameter. Best attempted with a partner, since reasoning through the
recursive geometry is genuinely difficult the first time. Stretch goal: time how
long depth 5 takes to draw versus depth 3, and explain why.

### Turtle Race Simulator

Create two or more turtle objects that each move forward a random distance on every
pass through a shared `while` loop, checking after each pass whether any turtle has
crossed a finish line to declare a winner. Introduces multiple independent turtle
objects with their own state. Stretch goal: give each turtle a different top speed.

### Data-Driven Drawing From a List

Store a list of `(distance, angle)` tuples and have the turtle replay them in order
as a drawing "macro" — iterating over a list of tuples to reconstruct a picture from
data rather than from hardcoded commands. Stretch goal: write a second program that
records a student's own turtle movements into that same list format.

### Turtle Clock

Build a working analog clock face where the hour and minute hands are redrawn each
second at an angle calculated from the real system time using the `time` module,
combining functions, an animation loop (`turtle.ontimer()`), and real-world angle
math. Stretch goal: add a smoothly moving second hand.
