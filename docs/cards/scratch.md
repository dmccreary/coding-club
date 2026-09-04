# Scratch Challenge Card Ideas

Ideas for challenge cards built around Scratch block coding: sprites, events, loops,
conditionals, variables, broadcasts, and the remix culture of the Scratch community
site (Chapter 14).

## Beginning

### Sprite Maze Walker

A student uses arrow-key event blocks and `move`/`turn` blocks to steer a sprite
through a simple hand-drawn maze backdrop without touching the walls. The challenge
introduces motion blocks and edge/costume-based collision as an all-visual first
project with no loops required. Stretch goal: add a second maze that's harder to
navigate.

### Say Hello Chain

A sprite introduces itself through a sequence of `say` blocks separated by `wait`
blocks, teaching that program order matters and that timing is itself something you
control. Stretch goal: have a second sprite respond after the first sprite finishes
talking.

### Repeat-10 Dance

A sprite performs a short dance by cycling through several costumes inside a
`repeat 10` block, giving a first hands-on feel for a loop repeating a fixed number
of times rather than running once. Stretch goal: swap `repeat 10` for `forever` and
notice how the dance never stops.

### Bounce Off Walls

A sprite drifts across the stage using `move` and `if on edge, bounce`, introducing
a built-in conditional block that reacts to the sprite's own position. Stretch goal:
change the sprite's costume every time it bounces.

### Color-Changing Sprite

Pressing a key changes the sprite's color using an `if key pressed then` block
inside a `forever` loop, combining an event check with a conditional for the first
time. Stretch goal: make a different key produce a different color each time.

## Intermediate

### Score Keeper Catch Game

An object falls from the top of the stage on a loop; touching it with the player
sprite broadcasts a "caught" message that increments a score variable displayed on
stage. This combines variables, broadcast/receive, and collision detection into one
working mini-game. Stretch goal: make the falling object speed up as the score rises.

### Maze Runner With Lives

Building on the beginner Sprite Maze Walker, add a `lives` variable that starts at
3 and decreases by 1 each time the sprite touches a wall, broadcasting a "game over"
message when lives reach 0. Stretch goal: reset the sprite to the start position
after losing a life instead of ending immediately.

### Remix a Shared Project

Find an existing Scratch community project close to a chosen idea, remix it, and add
one genuinely new feature — a power-up, an extra level, a new sprite — documenting
in a short note what was changed and why. This reinforces Scratch project sharing
as a real way to build on other programmers' work. Stretch goal: message the
original creator to say what was added.

### Multi-Sprite Broadcast Relay

One sprite broadcasts a message that triggers three other sprites to each perform a
different action in sequence (one moves, one changes costume, one plays a sound),
teaching broadcast/receive as a way to coordinate independent sprites without
tangled direct references. Stretch goal: have the last sprite broadcast a second
message that resets the whole relay.

### Random Number Guessing Game

A variable holds a random number from `pick random`; the player enters guesses
through `ask`/`answer`, and an `if-then-else` inside a loop compares the guess and
gives a "too high" or "too low" hint until the guess is correct. Stretch goal: count
and display how many guesses it took.

## Advanced

### Full Pong or Breakout Clone

A two-paddle or paddle-and-brick game with ball-angle changes on each bounce, a
score variable, and a clear win condition, combining motion, conditionals,
variables, and broadcasts into a complete playable game. Stretch goal: add a
second ball for extra difficulty.

### Custom Block Animation Library

Build three custom blocks ("My Blocks") — a walk cycle, a jump, and an idle
animation — then reuse all three across multiple sprites in one project. This is
Scratch's direct equivalent of a Python function: naming a reusable sequence of
steps once instead of repeating it. Stretch goal: add parameters to one custom
block, like walk speed.

### Multi-Level Platformer

Use clone blocks to spawn multiple platforms or enemies at runtime, chaining
broadcasts so completing one level clears the stage and loads the next. This
combines cloning, broadcasts, and variables tracking the current level. Stretch
goal: save and display the player's best completion time.

### Data-Driven Quiz Game

Store quiz questions and answers in a Scratch list, loop through the list asking
each question with `ask`, and track a running score by comparing `answer` to the
matching list item. Stretch goal: shuffle the question order using `pick random`
each time the quiz runs.

### Peer-Reviewed Group Project

Pair with another student and combine two separately built mechanics — one
student's sprite movement system with another's scoring system, for example —
into a single playable game, then write a short peer code review note describing
what changed and why. Stretch goal: present the finished project at a show-and-tell
session.
