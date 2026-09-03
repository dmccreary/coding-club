// The Physical Computing Loop
// CANVAS_HEIGHT: 510
// Bloom: Understand (L2), verb "explain"
//
// Sense -> Process -> Act. Three stages, one worked example at a time, and the
// concrete data each stage is actually handling shown as text rather than
// implied by motion.
//
// Deliberately a step-through and not a continuous animation. The objective is
// "explain which part of the loop each component belongs to", which means the
// learner has to stop and read what a stage is holding -- something a pulse
// circling forever never gives them time to do. Run Example advances one stage
// at a time and waits at each.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 430;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 44;
const STAGE_BAND = 200;      // circles and arrows live here
const DWELL_MS = 1400;       // how long Run Example rests on each stage

const STAGE_COLOR = ['#4A90D9', '#8E7CC3', '#E8833A'];
const DIM = '#B8C4CE';

// ---- Controls --------------------------------------------------------------
let runButton, resetButton, exampleSelect;

// ---- State -----------------------------------------------------------------
let stage = 0;               // 0 Input, 1 Process, 2 Output
let running = false;
let lastStepMs = 0;

// Each example names a real component per stage and the concrete data that
// component is holding at that moment. The data column is the whole point:
// "Button pressed" is what a learner has to be able to place in the loop.
const EXAMPLES = {
  'Blinking LED': [
    {component: 'The board’s internal timer',
     data: 'Timer tick: 500 ms have elapsed',
     note: 'Input does not have to be a sensor. A blink has no sensor at all — ' +
           'the clock inside the microcontroller is the input.'},
    {component: 'Microcontroller running your code',
     data: 'Rule: if 500 ms have passed, flip the LED state',
     note: 'Process is the only stage that makes a decision. Everything it ' +
           'knows came from the input stage.'},
    {component: 'LED with a 220 Ω resistor',
     data: 'Pin driven HIGH — the LED lights',
     note: 'Output changes something physical. If you cannot see, hear, or ' +
           'feel it, it is not the output stage.'}
  ],
  'Button-Triggered Buzzer': [
    {component: 'Push button with a pull-down resistor',
     data: 'Pin reads HIGH — the button is pressed',
     note: 'The button is the input. The pull-down resistor is part of the ' +
           'input too: without it the reading is not trustworthy.'},
    {component: 'Microcontroller running your code',
     data: 'Rule: if the pin reads HIGH, sound the buzzer',
     note: 'Same processor, different rule. Swapping the rule is a code ' +
           'change; swapping the button is a wiring change.'},
    {component: 'Piezo buzzer',
     data: 'Tone at 440 Hz while the pin stays HIGH',
     note: 'Release the button and the input changes, so the rule fires ' +
           'differently and the output stops. The loop runs again.'}
  ],
  'Dimmable Light': [
    {component: 'Potentiometer on an analog input',
     data: 'Knob at 70% — ADC reads 2.31 V of 3.3 V',
     note: 'An analog input is a range, not an on/off. This is a Pico, whose ' +
           'inputs top out at 3.3 V.'},
    {component: 'Microcontroller running your code',
     data: 'Rule: scale 0–3.3 V onto a 0–255 duty cycle → 179',
     note: 'Process is where a raw reading becomes a useful number. Nothing ' +
           'physical happens here — it is arithmetic.'},
    {component: 'LED driven by PWM',
     data: 'LED at 70% brightness',
     note: 'The LED is still only ever fully on or fully off. PWM switches it ' +
           'faster than the eye can follow, which reads as dimming.'}
  ]
};

const STAGE_NAMES = ['Input', 'Process', 'Output'];
const STAGE_SUB = ['sense', 'decide', 'act'];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  runButton = createButton('Run Example');
  runButton.position(10, drawHeight + 8);
  runButton.mousePressed(toggleRun);

  resetButton = createButton('Reset');
  resetButton.position(120, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  exampleSelect = createSelect();
  for (const name of Object.keys(EXAMPLES)) exampleSelect.option(name);
  exampleSelect.selected('Blinking LED');
  exampleSelect.position(190, drawHeight + 44);
  exampleSelect.changed(() => { stage = 0; running = false; syncRunLabel(); });

  describe('Three stages of a physical computing loop drawn as circles left to ' +
    'right: Input, Process, and Output, joined by arrows with a return arrow ' +
    'closing the loop. A dropdown chooses a worked example. Clicking a stage, ' +
    'or stepping through with the Run Example button, shows the real component ' +
    'at that stage and the concrete data it is handling.');
}

function draw() {
  updateCanvasSize();

  if (running && millis() - lastStepMs >= DWELL_MS) {
    stage = (stage + 1) % 3;
    lastStepMs = millis();
  }

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('The Physical Computing Loop', canvasWidth / 2, 10);

  drawStages();
  drawDetail();
  drawControlLabels();

  cursor(stageUnderMouse() >= 0 ? HAND : ARROW);
}

// Circle centres, recomputed every frame so click detection cannot drift away
// from what is drawn.
function stageGeometry() {
  const r = min(72, (canvasWidth - margin * 2) / 8);
  const cy = TITLE_H + STAGE_BAND / 2 - 10;
  const span = canvasWidth - margin * 2 - r * 2;
  return [0, 1, 2].map(i => ({
    x: margin + r + (span * i) / 2,
    y: cy,
    r: r
  }));
}

function drawStages() {
  const g = stageGeometry();

  // Arrows between the stages, then the return arrow that closes the loop.
  for (let i = 0; i < 2; i++) {
    const active = running || stage === i + 1;
    drawArrow(g[i].x + g[i].r + 6, g[i].y, g[i + 1].x - g[i + 1].r - 6, g[i].y,
              stage === i + 1 ? STAGE_COLOR[i + 1] : DIM, active ? 3 : 2);
  }
  drawReturnArrow(g);

  for (let i = 0; i < 3; i++) {
    const on = stage === i;
    push();
    stroke(on ? STAGE_COLOR[i] : DIM);
    strokeWeight(on ? 5 : 3);
    fill(on ? color(STAGE_COLOR[i] + '22') : 'white');
    circle(g[i].x, g[i].y, g[i].r * 2);
    pop();

    noStroke();
    fill(on ? STAGE_COLOR[i] : '#5B7186');
    textAlign(CENTER, CENTER);
    textSize(g[i].r * 0.34);
    text(STAGE_NAMES[i], g[i].x, g[i].y - g[i].r * 0.16);
    textSize(g[i].r * 0.24);
    fill('#5B7186');
    text(STAGE_SUB[i], g[i].x, g[i].y + g[i].r * 0.22);

    // The component sitting at this stage, under the circle.
    const ex = EXAMPLES[exampleSelect.value()][i];
    fill(on ? 'black' : '#7A8A99');
    textSize(13);
    const lw = min(210, canvasWidth / 3 - 12);
    const lx = constrain(g[i].x - lw / 2, 4, canvasWidth - lw - 4);
    text(ex.component, lx, g[i].y + g[i].r + 18, lw);
  }
}

function drawArrow(x1, y, x2, y2, col, w) {
  push();
  stroke(col);
  strokeWeight(w);
  line(x1, y, x2 - 10, y2);
  noStroke();
  fill(col);
  triangle(x2, y2, x2 - 12, y2 - 7, x2 - 12, y2 + 7);
  pop();
}

// The loop is a loop: output changes the world, which the input senses next
// time round. Drawing it flat would make it a pipeline instead.
function drawReturnArrow(g) {
  const yBase = g[0].y + g[0].r + 60;
  push();
  stroke(DIM);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(g[2].x, g[2].y + g[2].r + 4);
  bezierVertex(g[2].x + 40, yBase, g[0].x - 40, yBase, g[0].x, g[0].y + g[0].r + 4);
  endShape();
  noStroke();
  fill(DIM);
  triangle(g[0].x, g[0].y + g[0].r + 2, g[0].x - 6, g[0].y + g[0].r + 15,
           g[0].x + 6, g[0].y + g[0].r + 15);
  textAlign(CENTER, TOP);
  textSize(12);
  text('… and round again', (g[0].x + g[2].x) / 2, yBase - 14);
  pop();
}

function drawDetail() {
  const ex = EXAMPLES[exampleSelect.value()][stage];
  const y = TITLE_H + STAGE_BAND + 42;
  const w = canvasWidth - margin * 2;

  noStroke();
  fill('white');
  rect(margin, y, w, drawHeight - y - 12, 8);
  fill(STAGE_COLOR[stage]);
  rect(margin, y, 6, drawHeight - y - 12, 3);

  textAlign(LEFT, TOP);
  fill(STAGE_COLOR[stage]);
  textSize(18);
  text(STAGE_NAMES[stage] + ' — ' + ex.component, margin + 20, y + 12);

  // The data this stage is holding, set in monospace so it reads as a value
  // rather than as more prose.
  fill('black');
  textFont('monospace');
  textSize(15);
  text(ex.data, margin + 20, y + 40, w - 40);
  textFont('sans-serif');

  fill('#4A5A68');
  textSize(14);
  text(ex.note, margin + 20, y + 64, w - 40, drawHeight - y - 78);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Example project:', 10, drawHeight + 55);
  fill('dimgray');
  textSize(13);
  text('Click a circle to jump to that stage.', 200, drawHeight + 22);
}

function stageUnderMouse() {
  const g = stageGeometry();
  for (let i = 0; i < 3; i++) {
    if (dist(mouseX, mouseY, g[i].x, g[i].y) < g[i].r) return i;
  }
  return -1;
}

function toggleRun() {
  running = !running;
  lastStepMs = millis();
  syncRunLabel();
}

function syncRunLabel() {
  runButton.html(running ? 'Pause' : 'Run Example');
}

function resetSimulation() {
  running = false;
  stage = 0;
  syncRunLabel();
}

// Clicking a stage stops the run: the learner has taken over the stepping.
function mousePressed() {
  const i = stageUnderMouse();
  if (i < 0) return;
  stage = i;
  running = false;
  syncRunLabel();
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
