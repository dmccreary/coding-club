// Sensor Type Picker
// CANVAS_HEIGHT: 520
// Bloom: Apply (L3), verb "select"
//
// Eight project scenarios, six sensors, one question each time: what physical
// property does this project actually need to measure?
//
// That question is the whole method, and it is why the wrong answers here are
// plausible rather than silly. A motion sensor and a distance sensor both
// "notice someone approaching"; the difference is that one reports movement and
// the other reports how far away. Feedback on a wrong answer names the property
// the scenario needs, so a miss teaches the method rather than just correcting
// the answer.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 440;
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
let picked = null;           // sensor key the learner chose, or null
let score = 0;
let answered = 0;
let iconBoxes = [];          // hit regions, rebuilt each frame

const SENSORS = [
  {key: 'light',   name: 'Light',    color: '#F5A623',
   measures: 'how bright it is'},
  {key: 'temp',    name: 'Temperature', color: '#D64545',
   measures: 'how hot or cold something is'},
  {key: 'humid',   name: 'Humidity',  color: '#4A90D9',
   measures: 'how much water vapour is in the air'},
  {key: 'motion',  name: 'Motion',    color: '#8E7CC3',
   measures: 'whether something warm moved nearby'},
  {key: 'sound',   name: 'Sound',     color: '#3E9E6E',
   measures: 'how loud it is right now'},
  {key: 'dist',    name: 'Distance',  color: '#E8833A',
   measures: 'how far away the nearest object is'}
];

const SCENARIOS = [
  {text: 'Turn on a porch light automatically at dusk.',
   answer: 'light',
   why: 'Dusk is a brightness level, so a light sensor reads it directly. ' +
        'A clock would also work — until the seasons change.',
   miss: 'The trigger here is how dark it has got, not motion or heat.'},
  {text: 'Make a robot stop before it bumps into a wall.',
   answer: 'dist',
   why: 'The robot needs a number — how far away — so it can stop in time. ' +
        'A distance sensor gives centimetres.',
   miss: 'The robot needs to know how far, not merely that something is there.'},
  {text: 'Warn the club when the 3D printer room gets too warm.',
   answer: 'temp',
   why: 'The property is temperature, and the trigger is a threshold on it.',
   miss: 'The measurement is heat, not light or air quality.'},
  {text: 'Light up a display when someone walks into the room.',
   answer: 'motion',
   why: 'A PIR motion sensor detects a warm body moving through its field of ' +
        'view, which is exactly the event here.',
   miss: 'The event is a person arriving, not a measurement of how far off ' +
         'they are.'},
  {text: 'Flash the lights when the room gets too noisy during a session.',
   answer: 'sound',
   why: 'Loudness is the property, and it is compared against a threshold you ' +
        'tune for the room.',
   miss: 'What is being measured is noise level, not movement.'},
  {text: 'Check whether the storage cupboard is damp enough to ruin the kits.',
   answer: 'humid',
   why: 'Damp is water vapour in the air, which is exactly what a humidity ' +
        'sensor reports.',
   miss: 'Damp is a property of the air, not of temperature alone — a cold ' +
         'room is not necessarily a damp one.'},
  {text: 'Make a hand-wave gesture turn a lamp on, without touching anything.',
   answer: 'dist',
   why: 'A hand passing close is a sudden drop in measured distance, which is ' +
        'a reliable, cheap gesture trigger.',
   miss: 'A motion sensor sees the whole room, so it would fire when anyone ' +
         'walks past. This needs something that only reacts up close.'},
  {text: 'Automatically water a plant when the room air is very dry.',
   answer: 'humid',
   why: 'The stated trigger is dry air, which is a humidity reading. (Soil ' +
        'moisture would be the better sensor for the plant — but it is not ' +
        'what this scenario asked for.)',
   miss: 'Read the scenario carefully: the trigger given is the dryness of ' +
         'the air.'}
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  nextButton = createButton('New scenario');
  nextButton.position(10, drawHeight + 8);
  nextButton.mousePressed(nextScenario);

  resetButton = createButton('Start over');
  resetButton.position(126, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('A project scenario card beside six clickable sensor icons: light, ' +
    'temperature, humidity, motion, sound, and distance. The learner picks the ' +
    'sensor that measures the property the scenario needs, and gets immediate ' +
    'feedback naming that property. A running score tracks a pass through all ' +
    'eight scenarios.');
}

function draw() {
  updateCanvasSize();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Sensor Type Picker', canvasWidth / 2, 8);

  const split = canvasWidth * 0.56;
  drawScenario(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 34);
  drawSensorGrid(split, TITLE_H, canvasWidth - split - margin,
                 drawHeight - TITLE_H - 34);
  drawProgress();
  drawControlLabels();

  cursor(iconUnderMouse() ? HAND : ARROW);
}

function drawScenario(x, y, w, h) {
  const sc = SCENARIOS[index];

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill('#4A90D9');
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('PROJECT ' + (index + 1) + ' OF ' + SCENARIOS.length, x + 18, y + 16);

  fill('#2C3A45');
  textSize(19);
  text(sc.text, x + 18, y + 40, w - 36);

  if (!picked) {
    fill('#4A5A68');
    textSize(14);
    text('Ask one question: what does this project actually need to measure? ' +
         'Then pick the sensor that measures it.',
         x + 18, y + h * 0.42, w - 36, h * 0.5);
    return;
  }

  const right = picked === sc.answer;
  const sensor = SENSORS.find(s => s.key === picked);
  const answer = SENSORS.find(s => s.key === sc.answer);

  noStroke();
  fill(right ? '#E8F5EE' : '#FDF3DF');
  rect(x + 14, y + h * 0.40, w - 28, h * 0.55, 8);

  fill(right ? '#2E7D4F' : '#B8860B');
  textSize(18);
  text(right ? '✓ ' + sensor.name + ' — correct'
             : '✗ ' + sensor.name + ' measures ' + sensor.measures,
       x + 28, y + h * 0.40 + 12, w - 56);

  fill('#2C3A45');
  textSize(14);
  text(right ? sc.why
             : sc.miss + ' A ' + answer.name.toLowerCase() + ' sensor reads ' +
               answer.measures + '. ' + sc.why,
       x + 28, y + h * 0.40 + 46, w - 56, h * 0.5 - 56);
}

function drawSensorGrid(x, y, w, h) {
  const sc = SCENARIOS[index];
  const cols = 2, rows = 3;
  const cw = w / cols, ch = min(h / rows, 116);
  const top = y + (h - ch * rows) / 2;
  iconBoxes = [];

  for (let i = 0; i < SENSORS.length; i++) {
    const s = SENSORS[i];
    const bx = x + (i % cols) * cw;
    const by = top + floor(i / cols) * ch;
    const box = {x: bx + 6, y: by + 6, w: cw - 12, h: ch - 12, key: s.key};
    iconBoxes.push(box);

    const isPick = picked === s.key;
    const isAnswer = picked && sc.answer === s.key;
    const hovering = !picked && iconUnderMouse() &&
                     iconUnderMouse().key === s.key;

    noStroke();
    fill(isAnswer ? '#E8F5EE' : isPick ? '#FDECEC' : 'white');
    rect(box.x, box.y, box.w, box.h, 8);
    if (isAnswer || isPick || hovering) {
      noFill();
      stroke(isAnswer ? '#3E9E6E' : isPick ? '#D64545' : '#F5A623');
      strokeWeight(2.5);
      rect(box.x, box.y, box.w, box.h, 8);
    }

    push();
    translate(box.x + box.w / 2, box.y + box.h * 0.38);
    drawSensorIcon(s.key, min(38, box.h * 0.34), s.color);
    pop();

    noStroke();
    fill('#2C3A45');
    textAlign(CENTER, TOP);
    textSize(13);
    text(s.name, box.x + box.w / 2, box.y + box.h * 0.56);
    fill('#8AA6BF');
    textSize(10);
    text(s.measures, box.x + 6, box.y + box.h * 0.56 + 17, box.w - 12);
  }
}

// Each icon draws the thing it measures rather than the packaged part, so the
// picture itself is a hint about the property.
function drawSensorIcon(key, r, col) {
  push();
  noFill();
  stroke(col);
  strokeWeight(2.5);

  if (key === 'light') {
    fill(col);
    noStroke();
    circle(0, 0, r * 0.8);
    stroke(col);
    strokeWeight(2.5);
    for (let i = 0; i < 8; i++) {
      const a = (i * TWO_PI) / 8;
      line(cos(a) * r * 0.6, sin(a) * r * 0.6, cos(a) * r * 0.95,
           sin(a) * r * 0.95);
    }
  } else if (key === 'temp') {
    // a thermometer
    line(0, -r * 0.8, 0, r * 0.35);
    fill(col);
    noStroke();
    circle(0, r * 0.55, r * 0.55);
    rect(-r * 0.11, -r * 0.4, r * 0.22, r * 0.9);
  } else if (key === 'humid') {
    // a droplet
    fill(col);
    noStroke();
    beginShape();
    vertex(0, -r * 0.9);
    bezierVertex(r * 0.75, -r * 0.05, r * 0.55, r * 0.8, 0, r * 0.8);
    bezierVertex(-r * 0.55, r * 0.8, -r * 0.75, -r * 0.05, 0, -r * 0.9);
    endShape(CLOSE);
  } else if (key === 'motion') {
    // a walking figure
    fill(col);
    noStroke();
    circle(0, -r * 0.62, r * 0.36);
    stroke(col);
    strokeWeight(2.5);
    noFill();
    line(0, -r * 0.42, 0, r * 0.1);
    line(0, r * 0.1, -r * 0.4, r * 0.75);
    line(0, r * 0.1, r * 0.42, r * 0.7);
    line(-r * 0.42, -r * 0.15, r * 0.42, -r * 0.3);
  } else if (key === 'sound') {
    // a speaker with waves
    fill(col);
    noStroke();
    triangle(-r * 0.15, -r * 0.45, -r * 0.15, r * 0.45, -r * 0.75, 0);
    rect(-r * 0.75, -r * 0.22, r * 0.3, r * 0.44);
    noFill();
    stroke(col);
    strokeWeight(2.5);
    for (let i = 1; i <= 3; i++) arc(-r * 0.1, 0, r * i * 0.5, r * i * 0.5,
                                     -0.8, 0.8);
  } else if (key === 'dist') {
    // a pulse bouncing off a wall
    stroke(col);
    strokeWeight(3);
    line(r * 0.72, -r * 0.8, r * 0.72, r * 0.8);
    strokeWeight(2.5);
    for (let i = 0; i < 3; i++) {
      const x = -r * 0.75 + i * r * 0.42;
      arc(x, 0, r * 0.5, r * 0.9, -1.0, 1.0);
    }
  }
  pop();
}

function drawProgress() {
  const y = drawHeight - 22;
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#5B7186');
  text('Scenario ' + (index + 1) + ' of ' + SCENARIOS.length, margin, y);
  textAlign(RIGHT, CENTER);
  fill('#2C3A45');
  text('Score ' + score + ' / ' + answered, canvasWidth - margin, y);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text(picked ? 'Press New scenario for the next project.'
              : 'Click a sensor to answer.', 10, drawHeight + 58);
}

function iconUnderMouse() {
  for (const b of iconBoxes) {
    if (mouseX > b.x && mouseX < b.x + b.w &&
        mouseY > b.y && mouseY < b.y + b.h) return b;
  }
  return null;
}

function mousePressed() {
  if (picked) return;               // one answer per scenario
  const hit = iconUnderMouse();
  if (!hit) return;
  picked = hit.key;
  answered++;
  if (picked === SCENARIOS[index].answer) score++;
}

function nextScenario() {
  index = (index + 1) % SCENARIOS.length;
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
