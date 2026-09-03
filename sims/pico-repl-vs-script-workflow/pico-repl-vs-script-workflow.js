// Pico REPL vs Script Workflow
// CANVAS_HEIGHT: 530
// Bloom: Understand (L2), verb "explain"
//
// Three ways to run code on a Pico, and the only question that separates them:
// what is still running after you pull the USB cable out?
//
// The REPL forgets everything. A test file you ran by hand stops. main.py runs
// again on its own. That last property is the one students want and the one
// they most often have not set up, which is why "it works when I press run but
// not when I plug it into the battery" is such a common session-ending
// frustration.
//
// Power Cycle is the whole sim. Everything else is labels.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 450;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const INFO_H = 140;

// ---- Controls --------------------------------------------------------------
let powerButton, resetButton;

// ---- State -----------------------------------------------------------------
let selected = null;
let panelBoxes = [];
let cycling = 0;             // frames left in the power-cycle animation
let poweredOff = false;

const MODES = [
  {
    key: 'repl',
    name: 'REPL',
    sub: '>>> typed live',
    color: '#4A90D9',
    survives: false,
    running: true,
    what: 'You type one line at a time at the >>> prompt and the Pico runs it ' +
          'the instant you press Enter.',
    when: 'Use it to try one thing: does this pin number light the right LED? ' +
          'What does this sensor actually return? It is the fastest way to ' +
          'answer a question, and the worst way to keep an answer.',
    after: 'Everything typed at the prompt is gone. Variables, imports, the ' +
           'lot — the prompt starts empty.'
  },
  {
    key: 'test',
    name: 'test.py',
    sub: 'saved, run by hand',
    color: '#F5A623',
    survives: false,
    running: true,
    what: 'A file saved on the Pico that you start yourself, usually by ' +
          'pressing Run in Thonny.',
    when: 'Use it while you are building something. The code is saved, so you ' +
          'do not retype it — but nothing starts it except you.',
    after: 'The file is still on the Pico. It is simply not running, and ' +
           'nothing will start it until somebody presses Run again.'
  },
  {
    key: 'main',
    name: 'main.py',
    sub: 'runs at power-up',
    color: '#3E9E6E',
    survives: true,
    running: true,
    what: 'A file with this exact name. MicroPython looks for it every time ' +
          'the board powers up and runs it automatically.',
    when: 'Use it for the finished thing — the project that has to work on a ' +
          'battery, at a demo table, with no laptop attached.',
    after: 'Still running. The board came up, found main.py, and started it ' +
           'without being asked. This is the only mode that survives.'
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  powerButton = createButton('Power cycle (unplug and replug)');
  powerButton.position(10, drawHeight + 8);
  powerButton.mousePressed(powerCycle);

  resetButton = createButton('Reset');
  resetButton.position(250, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('Three panels side by side for the three ways to run code on a ' +
    'Raspberry Pi Pico: the interactive REPL prompt, a saved test file run by ' +
    'hand, and main.py which runs automatically at power-up. Each panel has a ' +
    'status light showing whether its code is running, and clicking a panel ' +
    'explains what that mode is for. A power-cycle control simulates ' +
    'unplugging the board: the REPL and the test file go dark and main.py ' +
    'comes back on by itself.');
}

function draw() {
  updateCanvasSize();
  if (cycling > 0) cycling--;
  if (cycling === 0 && poweredOff) {
    // The board has come back up: main.py starts itself, the other two do not.
    poweredOff = false;
    for (const m of MODES) m.running = m.survives;
  }

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Pico REPL vs Script Workflow', canvasWidth / 2, 8);

  drawPanels(margin, TITLE_H, canvasWidth - margin * 2,
             drawHeight - TITLE_H - INFO_H - 10);
  drawInfo(margin, drawHeight - INFO_H, canvasWidth - margin * 2, INFO_H - 10);
  drawControlLabels();

  cursor(panelUnderMouse() ? HAND : ARROW);
}

function drawPanels(x, y, w, h) {
  const cw = w / 3;
  panelBoxes = [];

  for (let i = 0; i < MODES.length; i++) {
    const m = MODES[i];
    const box = {x: x + i * cw + 6, y: y, w: cw - 12, h: h, key: m.key};
    panelBoxes.push(box);

    const on = selected === m.key;
    noStroke();
    fill('white');
    rect(box.x, box.y, box.w, box.h, 10);
    fill(m.color);
    rect(box.x, box.y, box.w, 5, 3);
    if (on) {
      noFill();
      stroke(m.color);
      strokeWeight(2.5);
      rect(box.x, box.y, box.w, box.h, 10);
    }

    noStroke();
    fill(m.color);
    textAlign(CENTER, TOP);
    textSize(19);
    text(m.name, box.x + box.w / 2, box.y + 16);
    fill('#8AA6BF');
    textSize(12);
    text(m.sub, box.x + box.w / 2, box.y + 40);

    drawPico(box.x + box.w / 2, box.y + h * 0.52, min(box.w * 0.46, 128),
             m.running && cycling === 0);
    drawStatusLight(box.x + box.w / 2, box.y + h - 44,
                    m.running && cycling === 0, m.color);
  }
}

function drawPico(cx, cy, w, live) {
  const bh = w * 0.42;
  push();
  rectMode(CENTER);
  noStroke();
  fill('#2E7D4F');
  rect(cx, cy, w, bh, 4);
  // USB shell at the top
  fill('#C9D2DA');
  rect(cx, cy - bh / 2 - 4, w * 0.24, 10, 2);
  // castellated edges
  fill('#F0C24B');
  for (let i = 0; i < 10; i++) {
    const px = cx - w / 2 + 4 + i * (w - 8) / 9;
    rect(px, cy - bh / 2 + 3, 4, 6, 1);
    rect(px, cy + bh / 2 - 3, 4, 6, 1);
  }
  // the chip
  fill('#1E2A33');
  rect(cx, cy, w * 0.26, bh * 0.34, 2);
  // onboard LED, lit only while code is running
  fill(live ? '#7CE0A0' : '#3E6B52');
  circle(cx + w * 0.30, cy - bh * 0.18, 7);
  pop();
}

function drawStatusLight(cx, cy, live, col) {
  push();
  noStroke();
  if (live) {
    fill(red(color(col)), green(color(col)), blue(color(col)), 60);
    circle(cx, cy, 30);
  }
  fill(live ? col : '#C9D2DA');
  circle(cx, cy, 16);
  fill(live ? col : '#8AA6BF');
  textAlign(CENTER, TOP);
  textSize(12);
  text(live ? 'running' : 'not running', cx, cy + 12);
  pop();
}

function drawInfo(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  if (cycling > 0) {
    fill('#C0392B');
    rect(x, y, 6, h, 3);
    textAlign(LEFT, TOP);
    textSize(18);
    text('Power removed …', x + 20, y + 14);
    fill('#4A5A68');
    textSize(14);
    text('Everything stops. Watch which light comes back on by itself.',
         x + 20, y + 42, w - 40);
    return;
  }

  if (!selected) {
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Click any of the three panels to see what that mode is for. Then ' +
         'press Power cycle: only one of the three status lights comes back ' +
         'on by itself, and that is the whole difference between them.',
         x + 16, y + 14, w - 32, h - 24);
    return;
  }

  const m = MODES.find(o => o.key === selected);
  fill(m.color);
  rect(x, y, 6, h, 3);
  textAlign(LEFT, TOP);
  fill(m.color);
  textSize(18);
  text(m.name + ' — ' + m.sub, x + 20, y + 12);
  fill('#2C3A45');
  textSize(14);
  text(m.what + ' ' + m.when, x + 20, y + 38, w - 40, 56);
  fill(m.survives ? '#2E7D4F' : '#B8860B');
  textSize(13);
  text('After a power cycle: ' + m.after, x + 20, y + 98, w - 40, h - 106);
}

function drawControlLabels() {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('The name main.py is not a convention — MicroPython looks for that ' +
       'exact filename.', 10, drawHeight + 58);
}

function panelUnderMouse() {
  for (const b of panelBoxes) {
    if (mouseX > b.x && mouseX < b.x + b.w &&
        mouseY > b.y && mouseY < b.y + b.h) return b;
  }
  return null;
}

function mousePressed() {
  const b = panelUnderMouse();
  if (b) selected = b.key;
}

function powerCycle() {
  cycling = 75;              // about a second and a quarter of darkness
  poweredOff = true;
  for (const m of MODES) m.running = false;
}

function resetSimulation() {
  selected = null;
  cycling = 0;
  poweredOff = false;
  for (const m of MODES) m.running = true;
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
