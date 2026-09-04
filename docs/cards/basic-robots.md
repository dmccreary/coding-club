# Basic Robots Challenge Card Ideas

Ideas for challenge cards built around first robot chassis builds — table and floor
robots, differential-drive motors, and the sense-decide-act control loop
(Chapters 17-18).

## Beginning

### Assemble a Table Robot Chassis

Follow the kit's build steps to assemble a basic two-wheel table-robot chassis and
motors without wiring any electronics yet, confirming both wheels turn freely by
hand before any power is connected. Stretch goal: identify which wheel is left and
which is right by tracing the wiring back to the chassis.

### Straight-Line Drive Test

Wire both drive motors to run forward at equal speed for three seconds, then stop —
the first working test confirming a new chassis drives in a straight line instead
of curving to one side. Stretch goal: if it curves, adjust the motor speeds until it
drives straight.

### Motor Direction Check

Write a short program that runs each drive motor individually, first forward then
reverse, confirming which wire connections control which direction before
attempting any coordinated driving. Stretch goal: label each motor's wires with
tape based on what was learned.

### Simple Spin-in-Place Turn

Program the two drive motors to spin in opposite directions at equal speed for one
second, rotating the robot roughly 90 degrees in place. Stretch goal: adjust the
timing so the robot turns exactly 180 degrees instead.

### Remote-Controlled Robot

Wire four push buttons — forward, back, left, right — so a student can manually
drive the table robot around one command at a time. Stretch goal: add a fifth
button that stops the robot immediately regardless of what it was doing.

## Intermediate

### Drive Function Library

Write a reusable `drive(left_speed, right_speed)` function using the book's own
-100-to-100 convention, then use it to program a short pre-planned path: forward,
turn, forward, turn, stop. Stretch goal: rewrite the same path using only calls to
the function, with no other motor code anywhere else in the program.

### Basic Collision Avoidance Robot

Combine a distance sensor with the drive function so the robot stops and turns
automatically when an obstacle comes within a set distance, following the chapter's
sense-decide-act loop. Stretch goal: tune the stopping distance for the room the
robot is actually driving in.

### Line-Following Robot (Table Version)

Use a downward-facing line sensor on a table robot to follow a strip of dark tape
on a lighter table surface, adjusting motor speed based on what the sensor reports.
Stretch goal: make the robot follow a line with at least one sharp turn in it.

### Timed Square Path

Program the robot to drive in a complete square using only timed forward drives and
timed 90-degree turns, with no sensors involved, then measure how close the final
position lands to the starting point. Stretch goal: adjust the timings to make the
error as small as possible.

### Adjustable Speed Dial

Wire a potentiometer as a live speed control so turning the dial while the robot
drives changes its forward speed in real time, connecting an analog input directly
to motor output. Stretch goal: make turning the dial all the way down stop the
robot completely.

## Advanced

### Full Collision-Avoidance Floor Robot

Build and tune a floor robot — not confined to a tabletop — that continuously reads
a distance sensor and stops, reverses, and turns around obstacles in an open
driving area, matching the chapter's complete four-step control loop with
thresholds tuned for the actual room being used. Stretch goal: test the same robot
in a much smaller space and retune the thresholds.

### Priority-Based Sensor Integration

Combine a forward-facing distance sensor with a downward-facing line sensor on one
robot, writing `if`/`elif`/`else` priority logic so obstacle avoidance always wins
over line-following whenever both sensors trigger at the same time. Stretch goal:
swap the priority order and describe how the robot's behavior changes.

### Maze-Solving Robot

Using distance sensors on the front and one side, program a wall-following
algorithm that navigates a simple maze from a marked start to a marked finish
without any pre-mapped path. Stretch goal: solve the same maze from the opposite
direction without changing the algorithm.

### Robot Relay Race

Two students each build and hand off control between two robots at a marked
checkpoint — the first robot must stop precisely at the checkpoint, and the second
must start driving automatically. A substantial paired project combining timing,
sensing, and coordination between two independent programs. Stretch goal: time the
full relay and try to beat the previous run.

### Troubleshoot-the-Broken-Robot

Given a robot chassis with one deliberately introduced wiring or code fault, use
the chapter's troubleshooting decision workflow to diagnose and fix the fault
without simply replacing parts at random. Stretch goal: introduce a different fault
into a partner's robot and see how quickly they find it.
