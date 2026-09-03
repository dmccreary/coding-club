// Moving Rainbow Wiring Diagram
// CANVAS_HEIGHT: 500
// Bloom: Apply (L3), verb "demonstrate"
//
// Three wires between a Pico and a NeoPixel strip. Get one of them wrong and
// you get anything from nothing at all to a dead strip, so this is worth two
// minutes before a kit gets powered for the first time.
//
// The detail the diagram is really about is the arrow printed on the strip.
// A NeoPixel strip has a data-in end and a data-out end, and data only travels
// one way along it. Wire the Pico to DO instead of DI and every connection is
// electrically fine, nothing gets hot, and not one pixel lights -- which is a
// far more confusing failure than a wrong pin.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 420;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const INFO_H = 92;

// ---- Controls --------------------------------------------------------------
let quizCheckbox, resetButton;

// ---- State -----------------------------------------------------------------
let selected = null;         // wire key
let quizMode = false;
let quizTarget = 0;          // which wire the quiz is asking for
let score = 0;
let asked = 0;
let lastResult = null;
let wireGeom = [];

const WIRES = [
  {key: 'power', label: '5 V to Power', color: '#D64545',
   picoPin: 'VBUS (pin 40)', stripPin: '+5V',
   note: 'The strip draws its power from the Pico\'s VBUS pin, which is the ' +
         'USB supply passed straight through. A short strip is fine on USB; ' +
         'anything over about 15 pixels at full white wants its own supply, ' +
         'because 60 mA per pixel adds up faster than a USB port can deliver.'},
  {key: 'ground', label: 'GND to Ground', color: '#2C3A45',
   picoPin: 'GND (pin 38)', stripPin: 'GND',
   note: 'The one wire people leave out when the strip has its own power ' +
         'supply — and the one that must always be there. Data is a voltage ' +
         'measured against ground, so without a shared ground the strip has ' +
         'no reference for what a 1 or a 0 even means.'},
  {key: 'data', label: 'GPIO 0 to Data In', color: '#3E9E6E',
   picoPin: 'GP0 (pin 1)', stripPin: 'DI — the arrow end',
   note: 'This must go to the DI end. Data travels one way along the strip, ' +
         'in the direction of the printed arrows: each pixel reads its own ' +
         'colour and passes the rest along. Wired to DO instead, everything ' +
         'is electrically fine and nothing lights.'}
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  quizCheckbox = createCheckbox(' Check my wiring', false);
  quizCheckbox.position(78, drawHeight + 10);
  quizCheckbox.changed(toggleQuiz);

  describe('A wiring diagram between a Raspberry Pi Pico and a NeoPixel strip, ' +
    'with three labelled wires for power, ground, and data, and the strip\'s ' +
    'data-in and data-out ends marked. Clicking a wire highlights both its ' +
    'endpoints and explains the connection. A quiz mode hides the labels and ' +
    'asks the learner to click the wire that carries each named connection.');
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
  text('Moving Rainbow Wiring Diagram', canvasWidth / 2, 8);

  drawDiagram(margin, TITLE_H, canvasWidth - margin * 2,
              drawHeight - TITLE_H - INFO_H - 8);
  drawInfo(margin, drawHeight - INFO_H, canvasWidth - margin * 2, INFO_H - 10);
  drawControlLabels();

  cursor(wireUnderMouse() ? HAND : ARROW);
}

function drawDiagram(x, y, w, h) {
  const picoW = min(150, w * 0.20);
  const picoH = min(240, h * 0.72);
  const px = x + w * 0.14;
  const py = y + h / 2;

  const stripX = x + w * 0.58;
  const stripW = w * 0.36;
  const stripY = py;

  // Wire endpoints, recomputed every frame so hit detection follows the
  // drawing rather than a stale copy of it.
  wireGeom = WIRES.map((wr, i) => ({
    key: wr.key,
    x1: px + picoW / 2,
    y1: py - picoH * 0.28 + i * (picoH * 0.28),
    x2: stripX - 6,
    y2: stripY - 26 + i * 26
  }));

  drawPico(px, py, picoW, picoH);
  drawStrip(stripX, stripY, stripW);

  for (let i = 0; i < WIRES.length; i++) {
    const wr = WIRES[i];
    const g = wireGeom[i];
    const on = selected === wr.key;
    push();
    stroke(on ? wr.color : color(red(color(wr.color)), green(color(wr.color)),
                                 blue(color(wr.color)), 130));
    strokeWeight(on ? 6 : 4);
    noFill();
    beginShape();
    vertex(g.x1, g.y1);
    bezierVertex((g.x1 + g.x2) / 2, g.y1, (g.x1 + g.x2) / 2, g.y2, g.x2, g.y2);
    endShape();
    pop();

    noStroke();
    fill(wr.color);
    circle(g.x1, g.y1, on ? 12 : 8);
    circle(g.x2, g.y2, on ? 12 : 8);

    if (!quizMode) {
      textAlign(CENTER, BOTTOM);
      textSize(12);
      fill(on ? wr.color : '#7A8A99');
      text(wr.label, (g.x1 + g.x2) / 2, (g.y1 + g.y2) / 2 - 8);
    }
  }

  if (quizMode) {
    noStroke();
    fill('#2C3A45');
    textAlign(CENTER, TOP);
    textSize(17);
    text('Which wire carries: ' + WIRES[quizTarget].label + '?',
         x + w / 2, y + 2);
  }
}

function drawPico(cx, cy, w, h) {
  push();
  rectMode(CENTER);
  noStroke();
  fill('#2E7D4F');
  rect(cx, cy, w, h, 5);
  // USB shell
  fill('#C9D2DA');
  rect(cx, cy - h / 2 - 5, w * 0.32, 12, 2);
  // pin headers down both edges
  fill('#F0C24B');
  for (let i = 0; i < 12; i++) {
    const py = cy - h / 2 + 14 + i * (h - 28) / 11;
    rect(cx - w / 2 + 5, py, 8, 5, 1);
    rect(cx + w / 2 - 5, py, 8, 5, 1);
  }
  fill('#1E2A33');
  rect(cx, cy, w * 0.3, h * 0.18, 2);
  pop();

  noStroke();
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(11);
  text('Pico', cx, cy + h * 0.30);
}

function drawStrip(x, y, w) {
  const n = 8;
  const cell = w / n;
  push();
  rectMode(CORNER);
  noStroke();
  fill('#1E2A33');
  rect(x, y - 22, w, 44, 4);
  for (let i = 0; i < n; i++) {
    // A pale rainbow, so the strip reads as a NeoPixel strip at a glance.
    colorMode(HSB, 360, 100, 100);
    fill((i * 360) / n, 62, 96);
    colorMode(RGB, 255);
    rect(x + i * cell + cell * 0.18, y - 12, cell * 0.64, 24, 3);
  }
  // the direction-of-data arrows printed on every real strip
  stroke('#8AA6BF');
  strokeWeight(1.5);
  for (let i = 0; i < n; i++) {
    const ax = x + i * cell + cell * 0.5;
    line(ax - 5, y + 17, ax + 5, y + 17);
    line(ax + 5, y + 17, ax + 1, y + 14);
    line(ax + 5, y + 17, ax + 1, y + 20);
  }
  pop();

  noStroke();
  textAlign(CENTER, TOP);
  textSize(13);
  fill('#3E9E6E');
  text('DI', x - 2, y + 26);
  fill('#8AA6BF');
  text('DO', x + w + 2, y + 26);
  textSize(11);
  text('data flows this way →', x + w / 2, y + 26);
}

function drawInfo(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  if (quizMode) {
    fill(lastResult === 'right' ? '#3E9E6E'
         : lastResult === 'wrong' ? '#D64545' : '#8AA6BF');
    rect(x, y, 6, h, 3);
    textAlign(LEFT, TOP);
    textSize(16);
    fill(lastResult === 'right' ? '#2E7D4F'
         : lastResult === 'wrong' ? '#C0392B' : '#5B7186');
    text(lastResult === 'right' ? '✓ Correct'
         : lastResult === 'wrong' ? '✗ Not that one'
         : 'Click the wire that carries the connection named above.',
         x + 20, y + 12);
    fill('#2C3A45');
    textSize(13);
    if (lastResult) {
      const wr = WIRES[(quizTarget + WIRES.length - 1) % WIRES.length];
      text(wr.picoPin + ' → ' + wr.stripPin + '. ' + wr.note,
           x + 20, y + 36, w - 40, h - 44);
    }
    return;
  }

  if (!selected) {
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Click any of the three wires to see which pin it leaves and which ' +
         'terminal it lands on. Then turn on Check my wiring to be asked ' +
         'instead of told.', x + 16, y + 14, w - 32, h - 24);
    return;
  }

  const wr = WIRES.find(o => o.key === selected);
  fill(wr.color);
  rect(x, y, 6, h, 3);
  textAlign(LEFT, TOP);
  fill(wr.color);
  textSize(17);
  text(wr.picoPin + '  →  ' + wr.stripPin, x + 20, y + 12);
  fill('#2C3A45');
  textSize(13);
  text(wr.note, x + 20, y + 36, w - 40, h - 44);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  if (quizMode) {
    fill('#2C3A45');
    textSize(14);
    text('Score ' + score + ' / ' + asked, 10, drawHeight + 58);
  } else {
    fill('dimgray');
    textSize(13);
    text('The arrows printed on a NeoPixel strip point away from the DI end.',
         10, drawHeight + 58);
  }
}

// Distance from the pointer to a wire's bezier, sampled.
function wireUnderMouse() {
  for (const g of wireGeom) {
    for (let t = 0; t <= 1; t += 0.05) {
      const bx = bezierPoint(g.x1, (g.x1 + g.x2) / 2, (g.x1 + g.x2) / 2, g.x2, t);
      const by = bezierPoint(g.y1, g.y1, g.y2, g.y2, t);
      if (dist(mouseX, mouseY, bx, by) < 12) return g;
    }
  }
  return null;
}

function mousePressed() {
  const g = wireUnderMouse();
  if (!g) return;
  if (!quizMode) { selected = g.key; return; }

  asked++;
  if (g.key === WIRES[quizTarget].key) { score++; lastResult = 'right'; }
  else lastResult = 'wrong';
  quizTarget = (quizTarget + 1) % WIRES.length;
}

function toggleQuiz() {
  quizMode = quizCheckbox.checked();
  selected = null;
  quizTarget = 0;
  score = 0;
  asked = 0;
  lastResult = null;
}

function resetSimulation() {
  quizCheckbox.checked(false);
  toggleQuiz();
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
