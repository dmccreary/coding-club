// Motor Type Comparison Explorer
// CANVAS_HEIGHT: 580
// Bloom: Analyze (L4), verb "differentiate"
//
// Three motors, six projects, one question: does this project need to spin, to
// hold an angle, or to count steps?
//
// The three icons animate their differences rather than describing them. The DC
// motor spins continuously and never stops anywhere in particular. The servo
// sweeps to an angle and holds it. The stepper advances in visible discrete
// clicks. Watching those three motions side by side is the analysis -- the
// comparison table in the chapter is the same information without the motion.
//
// Every project here has a defensible second choice, and the feedback says so.
// "Wrong" answers are graded against the three criteria (motion style, position
// feedback, holding torque) rather than dismissed.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

// ---- Controls --------------------------------------------------------------
let nextButton, resetButton;

// ---- State -----------------------------------------------------------------
let index = 0;
let picked = null;
let score = 0;
let answered = 0;
let motorBoxes = [];
let phase = 0;               // drives all three icon animations

const MOTORS = [
  {key: 'dc', name: 'DC motor', color: '#4A90D9',
   motion: 'spins continuously', feedback: 'no position feedback',
   torque: 'no holding torque'},
  {key: 'servo', name: 'Servo', color: '#3E9E6E',
   motion: 'moves to an angle and holds it', feedback: 'knows its own angle',
   torque: 'holds against a load'},
  {key: 'stepper', name: 'Stepper', color: '#8E7CC3',
   motion: 'advances in counted steps', feedback: 'position by step count',
   torque: 'holds firmly when energised'}
];

const PROJECTS = [
  {text: 'Drive the wheels of a robot across the floor.',
   answer: 'dc',
   why: 'Wheels need to keep turning, and nobody cares what angle a wheel ' +
        'stops at. Continuous rotation with no position feedback is exactly ' +
        'the cheap, fast option — pair it with an H-bridge for direction.',
   alt: {servo: 'A continuous-rotation servo would work and is easier to ' +
                'wire, but you pay for gearing and control you do not need.',
         stepper: 'A stepper can drive wheels, and precision robots do use ' +
                  'them — but they are heavy, slow, and draw current even ' +
                  'standing still.'}},
  {text: 'Bend the elbow joint of a robot arm to a set angle and hold it.',
   answer: 'servo',
   why: 'Two requirements in one sentence: a specific angle, and holding it ' +
        'against gravity. A servo does both by design.',
   alt: {dc: 'A DC motor has no idea where it is and will not hold a ' +
             'position — the arm would sag the moment you stopped driving it.',
         stepper: 'A stepper holds well and hits angles accurately, but it is ' +
                  'bulkier and needs a driver board and its own supply.'}},
  {text: 'Pan a camera slowly across a room and stop at chosen viewpoints.',
   answer: 'servo',
   why: 'Chosen viewpoints are angles. A servo takes an angle as its command, ' +
        'which makes the code a single line per viewpoint.',
   alt: {stepper: 'A stepper would be smoother for slow panning and is what ' +
                  'professional rigs use — but it is far more setup for a ' +
                  'club project.',
         dc: 'A DC motor cannot stop at a viewpoint; it can only be run for a ' +
             'guessed length of time.'}},
  {text: 'Move a plotter pen precisely along an axis and return to the exact ' +
         'same origin every time.',
   answer: 'stepper',
   why: '"Exact same origin" is a counting problem, not an angle problem. A ' +
        'stepper moves a known distance per step, so the software always ' +
        'knows where the pen is.',
   alt: {servo: 'A standard servo only sweeps about 180° — not enough travel ' +
                'to drive a plotter axis.',
         dc: 'A DC motor with an encoder can do this, but you have added the ' +
             'counting hardware a stepper already includes.'}},
  {text: 'Run a conveyor belt at a steady speed for as long as the club ' +
         'session lasts.',
   answer: 'dc',
   why: 'Continuous rotation, one direction, no position to track. This is ' +
        'the job DC motors are cheapest and most reliable at.',
   alt: {stepper: 'A stepper would run hot and waste power holding torque ' +
                  'that a belt does not need.',
         servo: 'A standard servo cannot rotate continuously at all.'}},
  {text: 'Swing a door latch open when a card is scanned, then close it again.',
   answer: 'servo',
   why: 'A latch has two positions and needs to stay in whichever one it was ' +
        'put. A servo commanded to two angles is the simplest thing that ' +
        'works.',
   alt: {stepper: 'A stepper would hold the latch, but it needs a driver ' +
                  'board and keeps drawing current to stay put.',
         dc: 'A DC motor would keep driving past the latch position and has ' +
             'nothing to hold it there.'}}
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  nextButton = createButton('New project');
  nextButton.position(10, drawHeight + 8);
  nextButton.mousePressed(nextProject);

  resetButton = createButton('Start over');
  resetButton.position(112, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('A project requirement card above three animated motor icons: a DC ' +
    'motor spinning continuously, a servo sweeping to an angle and holding it, ' +
    'and a stepper advancing in discrete clicks. The learner picks the motor ' +
    'family that fits the requirement, and the feedback grades the choice ' +
    'against motion style, position feedback, and holding torque — including ' +
    'why the other two are defensible or not.');
}

function draw() {
  updateCanvasSize();
  phase += 0.02;

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Motor Type Comparison Explorer', canvasWidth / 2, 8);

  const cardH = picked ? 168 : 96;
  drawCard(margin, TITLE_H, canvasWidth - margin * 2, cardH);
  drawMotors(margin, TITLE_H + cardH + 12, canvasWidth - margin * 2,
             drawHeight - TITLE_H - cardH - 46);
  drawProgress();
  drawControlLabels();

  cursor(motorUnderMouse() ? HAND : ARROW);
}

function drawCard(x, y, w, h) {
  const pr = PROJECTS[index];

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(picked ? (picked === pr.answer ? '#3E9E6E' : '#F5A623') : '#4A90D9');
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('PROJECT ' + (index + 1) + ' OF ' + PROJECTS.length, x + 18, y + 14);

  fill('#2C3A45');
  textSize(18);
  text(pr.text, x + 18, y + 36, w - 36);

  if (!picked) return;

  const right = picked === pr.answer;
  const best = MOTORS.find(m => m.key === pr.answer);
  const chose = MOTORS.find(m => m.key === picked);

  fill(right ? '#2E7D4F' : '#B8860B');
  textSize(16);
  text(right ? '✓ ' + best.name + ' — the right call'
             : '✗ ' + chose.name + ' — ' + best.name + ' fits better here',
       x + 18, y + 84, w - 36);

  fill('#2C3A45');
  textSize(14);
  text(right ? pr.why : (pr.alt[picked] || '') + ' ' + pr.why,
       x + 18, y + 108, w - 36, h - 116);
}

function drawMotors(x, y, w, h) {
  const pr = PROJECTS[index];
  const cw = w / 3;
  motorBoxes = [];

  for (let i = 0; i < MOTORS.length; i++) {
    const m = MOTORS[i];
    const box = {x: x + i * cw + 8, y: y, w: cw - 16, h: h, key: m.key};
    motorBoxes.push(box);

    const isPick = picked === m.key;
    const isAnswer = picked && pr.answer === m.key;
    const hovering = !picked && motorUnderMouse() &&
                     motorUnderMouse().key === m.key;

    noStroke();
    fill(isAnswer ? '#E8F5EE' : isPick ? '#FDECEC' : 'white');
    rect(box.x, box.y, box.w, box.h, 10);
    if (isAnswer || isPick || hovering) {
      noFill();
      stroke(isAnswer ? '#3E9E6E' : isPick ? '#D64545' : '#F5A623');
      strokeWeight(2.5);
      rect(box.x, box.y, box.w, box.h, 10);
    }

    const r = min(box.w * 0.22, box.h * 0.24);
    push();
    translate(box.x + box.w / 2, box.y + h * 0.26);
    drawMotorIcon(m.key, r, m.color);
    pop();

    noStroke();
    fill(m.color);
    textAlign(CENTER, TOP);
    textSize(16);
    text(m.name, box.x + box.w / 2, box.y + h * 0.26 + r + 10);

    fill('#4A5A68');
    textSize(11);
    textAlign(LEFT, TOP);
    const ly = box.y + h * 0.26 + r + 32;
    text('• ' + m.motion, box.x + 12, ly, box.w - 24);
    text('• ' + m.feedback, box.x + 12, ly + 22, box.w - 24);
    text('• ' + m.torque, box.x + 12, ly + 44, box.w - 24);
  }
}

// The three motions are the lesson, so each icon animates the way its motor
// actually behaves rather than being a static picture of a can with a shaft.
function drawMotorIcon(key, r, col) {
  push();
  stroke('#8AA6BF');
  strokeWeight(2);
  fill('white');
  circle(0, 0, r * 2);

  if (key === 'dc') {
    // continuous rotation, never stopping anywhere in particular
    const a = phase * 3.2;
    stroke(col);
    strokeWeight(4);
    line(0, 0, cos(a) * r * 0.78, sin(a) * r * 0.78);
    noFill();
    strokeWeight(2);
    arc(0, 0, r * 2.5, r * 2.5, a + 0.6, a + 2.0);
  } else if (key === 'servo') {
    // sweeps between two angles and pauses at each: it holds a position
    const t = (sin(phase * 1.6) + 1) / 2;
    const eased = t * t * (3 - 2 * t);
    const a = lerp(-PI * 0.9, -PI * 0.1, eased);
    stroke('#D4DEE7');
    strokeWeight(2);
    noFill();
    arc(0, 0, r * 1.9, r * 1.9, -PI * 0.9, -PI * 0.1);
    stroke(col);
    strokeWeight(4);
    line(0, 0, cos(a) * r * 0.85, sin(a) * r * 0.85);
    noStroke();
    fill(col);
    circle(cos(a) * r * 0.85, sin(a) * r * 0.85, 7);
  } else {
    // discrete steps, with the notches it lands on drawn
    const steps = 12;
    const a = (floor(phase * 3) % steps) * (TWO_PI / steps);
    stroke('#D4DEE7');
    strokeWeight(2);
    for (let i = 0; i < steps; i++) {
      const na = (i * TWO_PI) / steps;
      line(cos(na) * r * 0.82, sin(na) * r * 0.82,
           cos(na) * r * 0.98, sin(na) * r * 0.98);
    }
    stroke(col);
    strokeWeight(4);
    line(0, 0, cos(a) * r * 0.78, sin(a) * r * 0.78);
  }

  noStroke();
  fill('#5B7186');
  circle(0, 0, 8);
  pop();
}

function drawProgress() {
  const y = drawHeight - 22;
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#5B7186');
  text('Project ' + (index + 1) + ' of ' + PROJECTS.length, margin, y);
  textAlign(RIGHT, CENTER);
  fill('#2C3A45');
  text('Score ' + score + ' / ' + answered, canvasWidth - margin, y);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text(picked ? 'Press New project for the next requirement.'
              : 'Watch how the three icons move, then click one.',
       10, drawHeight + 58);
}

function motorUnderMouse() {
  for (const b of motorBoxes) {
    if (mouseX > b.x && mouseX < b.x + b.w &&
        mouseY > b.y && mouseY < b.y + b.h) return b;
  }
  return null;
}

function mousePressed() {
  if (picked) return;               // one answer per project
  const hit = motorUnderMouse();
  if (!hit) return;
  picked = hit.key;
  answered++;
  if (picked === PROJECTS[index].answer) score++;
}

function nextProject() {
  index = (index + 1) % PROJECTS.length;
  picked = null;
}

function resetSimulation() {
  index = 0;
  picked = null;
  score = 0;
  answered = 0;
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
