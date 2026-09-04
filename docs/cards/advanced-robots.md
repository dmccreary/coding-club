# Advanced Robots Challenge Card Ideas

Ideas for challenge cards built around richer robot sensors and actuators — servos,
steppers, H-bridges, gyroscopes, sound, robot expression, and IoT — plus the USB
power and workshop practices that support them (Chapters 18 and 20). These build on
the drive-function and control-loop skills from Basic Robots.

## Beginning

### Servo Sweep Demo

Wire and program a servo motor to sweep back and forth between two fixed angles on
a timer, introducing pulse-width control on its own before attaching the servo to
any robot arm or gripper. Stretch goal: change the sweep so it pauses briefly at
each end before reversing.

### USB Power Check

Using a multimeter and the chapter's USB-A vs. USB-C comparison, correctly identify
a robot's cable and connector type, measure its actual output voltage, and confirm
it can safely power the robot's electronics. Stretch goal: compare the measured
voltage of two different USB cables from the kit bin.

### Gyroscope Orientation Reader

Wire a gyroscope or IMU sensor and print live tilt and orientation readings to the
console, without yet using the data to control anything, to see the raw sensor
output firsthand. Stretch goal: identify which reading changes when the sensor is
tilted forward versus rolled sideways.

### Robot Emotion Face (Static)

Wire a small display to show one fixed "face" — happy, confused, alert —
representing the robot's current status, introducing the idea that a robot can
communicate its state to a person without speaking. Stretch goal: design a second
face and switch between them with a button.

### Workshop Parts Labeling Station

Organize and label a bin of loose robot parts — motors, sensors, screws — following
the chapter's storage and documentation practices, then write a one-page inventory
so the next student can find everything without asking. Stretch goal: propose one
change to the bin's organization that would have saved time during this challenge.

## Intermediate

### Stepper Motor Precision Turn

Wire and program a stepper motor to rotate a precise number of degrees, not just
"spin," using the chapter's step-sequence concept, then verify the accuracy with a
marked protractor. Stretch goal: chain two precise turns in a row and check whether
the error compounds.

### H-Bridge Speed and Direction Control

Wire a single DC motor through an H-bridge chip and write code that controls both
its direction and its speed via PWM from one program, rather than only turning it
on and off. Stretch goal: create a smooth ramp-up from stopped to full speed
instead of an instant jump.

### Gyroscope-Balanced Alert

Use live gyroscope readings to detect when a robot has been tipped past a set
angle, triggering a buzzer or LED alert — turning raw sensor data from the earlier
Gyroscope Orientation Reader challenge into a reactive behavior. Stretch goal: make
the alert stop automatically once the robot is leveled again.

### Sound Spectrum Visualizer

Read a sound sensor and display a simple live bar-graph or LED representation of
loudness, or a basic frequency band, based on the chapter's frequency-spectrum
work. Stretch goal: make the display react differently to a low hum versus a sharp
clap.

### Robot Voice Cue

Wire a small speaker or buzzer so the robot plays a distinct short sound cue for
two different events — task complete versus obstacle detected — giving the robot
an audible "voice" alongside any visual feedback. Stretch goal: add a third,
different cue for a low-battery warning.

## Advanced

### Full Emotion Display Robot

Combine a display and a sound cue so the robot shows a matching "face" and plays a
matching sound for at least three states — idle, thinking, alert — all driven by
real sensor conditions rather than manually triggered. Stretch goal: add a fourth
state for "task complete" with its own face and sound.

### IoT Environmental Monitor Robot

Combine an IoT sensor kit reading — temperature or humidity — with a mobile robot
chassis so the robot patrols a set path and logs or reports readings from multiple
locations along the way. Stretch goal: flag any location where the reading crosses
a chosen threshold.

### Differential-Drive Precision Docking

Using timed-step precision or an encoder, program a robot to drive to a specific
marked location and stop within a small tolerance — a "docking" maneuver combining
differential-drive math with careful calibration. Stretch goal: dock successfully
from two different starting positions without changing the code.

### Multi-Sensor Fusion Robot

Combine at least three sensor types — for example gyroscope, sound, and distance —
on one robot chassis, with priority logic deciding which sensor's data controls
behavior at any given moment. A substantial paired build given the wiring and logic
involved. Stretch goal: log which sensor "won" at each decision point during a test
run.

### USB-Powered Autonomous Demo Station

Design a complete, documented, self-contained robot station — correct USB power
source, clearly labeled wiring, written setup instructions — that another mentor or
student could power on and run with zero verbal explanation. Stretch goal: hand the
station to someone who has never seen it and time how long it takes them to get it
running from the instructions alone.
