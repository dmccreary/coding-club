// Potentiometer Analog Input Explorer
// CANVAS_HEIGHT: 445
// Bloom: Apply (L3), verb "demonstrate"
// A digital pin answers one question: is this high or low? An analog pin answers
// a different one: how much? Drag the knob and the reading sweeps smoothly
// through 1024 values with no steps. Turn on the comparison and the same knob
// position collapses to a single HIGH or LOW, which is what the learner is meant
// to notice.

// ---------- canvas geometry ----------
let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 45;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

const AMBER = '#F5A623';
const SKY_BLUE = '#4A90D9';

// ---------- knob model ----------
// A real potentiometer turns about 270 degrees, not a full circle. Sweep runs
// from 135 degrees past south, round through north, to 135 the other side.
const KNOB_SWEEP = 270;
const KNOB_START = 135;      // degrees clockwise from east
const ADC_MAX = 1023;

// A digital input decides HIGH or LOW at a threshold near the middle of the
// supply. Below it the pin reads 0, above it the pin reads 1 -- nothing between.
const DIGITAL_THRESHOLD = 512;

let knobAngle = KNOB_START + KNOB_SWEEP / 2;   // start centred
let dragging = false;
let compareCheckbox, centreButton;

let knobCx, knobCy;
const KNOB_R = 78;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  compareCheckbox = createCheckbox(' Compare to a digital input', false);
  compareCheckbox.position(12, drawHeight + 12);

  centreButton = createButton('Centre the knob');
  centreButton.position(255, drawHeight + 12);
  centreButton.mousePressed(() => knobAngle = KNOB_START + KNOB_SWEEP / 2);

  describe('A potentiometer explorer. Drag the knob to sweep an analog reading ' +
           'smoothly from 0 to 1023, shown as a number and a filling bar. An ' +
           'option overlays what a digital input would report for the same knob ' +
           'position: a single HIGH or LOW with nothing in between.');
}

function readingFromAngle() {
  const travelled = (knobAngle - KNOB_START + 360) % 360;
  return Math.round(map(constrain(travelled, 0, KNOB_SWEEP), 0, KNOB_SWEEP, 0, ADC_MAX));
}

function draw() {
  updateCanvasSize();
  knobCx = canvasWidth * 0.27;
  knobCy = 190;
  const reading = readingFromAngle();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Potentiometer Analog Input', canvasWidth / 2, 12);

  drawKnob(reading);
  drawReadout(reading);
  drawBar(reading);
}

function drawKnob(reading) {
  // travel arc
  noFill();
  stroke('#C6D2DC');
  strokeWeight(10);
  arc(knobCx, knobCy, KNOB_R * 2 + 26, KNOB_R * 2 + 26,
      radians(KNOB_START), radians(KNOB_START + KNOB_SWEEP));

  // travelled portion
  stroke(AMBER);
  strokeWeight(10);
  const travelled = (knobAngle - KNOB_START + 360) % 360;
  if (travelled > 0.5) {
    arc(knobCx, knobCy, KNOB_R * 2 + 26, KNOB_R * 2 + 26,
        radians(KNOB_START), radians(KNOB_START + min(travelled, KNOB_SWEEP)));
  }

  // knob body
  stroke('#33475B');
  strokeWeight(3);
  fill('#E8EEF3');
  circle(knobCx, knobCy, KNOB_R * 2);

  // pointer
  push();
  translate(knobCx, knobCy);
  rotate(radians(knobAngle));
  stroke('#33475B');
  strokeWeight(6);
  line(18, 0, KNOB_R - 12, 0);
  pop();

  noStroke();
  fill('#666666');
  textAlign(CENTER, TOP);
  textSize(13);
  text('drag the knob', knobCx, knobCy + KNOB_R + 24);
  textAlign(CENTER, CENTER);
  text('0', knobCx - KNOB_R - 6, knobCy + KNOB_R - 6);
  text('1023', knobCx + KNOB_R + 12, knobCy + KNOB_R - 6);
}

function drawReadout(reading) {
  const x = canvasWidth * 0.54;
  const w = canvasWidth - x - margin / 2;
  const top = 62;
  const showDigital = compareCheckbox.checked();

  stroke('silver');
  strokeWeight(1);
  fill(255, 255, 255, 235);
  rect(x, top, w, showDigital ? 208 : 138, 10);

  const pad = x + 14;
  noStroke();
  textAlign(LEFT, TOP);

  fill('#555555');
  textSize(13);
  text('Analog reading', pad, top + 12);
  fill(SKY_BLUE);
  textSize(40);
  text(reading, pad, top + 30);
  fill('#777777');
  textSize(12);
  text('one of 1024 values, 0 to 1023', pad, top + 78);
  text('≈ ' + nf(reading / ADC_MAX * 3.3, 1, 2) + ' V on the pin', pad, top + 96);

  if (!showDigital) return;

  const high = reading >= DIGITAL_THRESHOLD;
  stroke('#DDDDDD');
  strokeWeight(1);
  line(pad, top + 122, x + w - 14, top + 122);
  noStroke();

  fill('#555555');
  textSize(13);
  text('The same knob, read digitally', pad, top + 132);
  fill(high ? '#2E7D4F' : '#C0392B');
  textSize(30);
  text(high ? 'HIGH  (1)' : 'LOW  (0)', pad, top + 152);
  fill('#777777');
  textSize(12);
  text('two values only - everything else is lost', pad, top + 188);
}

function drawBar(reading) {
  const left = margin + 10;
  const right = canvasWidth - margin - 10;
  const top = 320;
  const h = 30;

  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(left, top, right - left, h, 6);

  noStroke();
  fill(SKY_BLUE);
  const w = (right - left) * (reading / ADC_MAX);
  if (w > 2) rect(left, top, w, h, 6);

  // where a digital input would flip, marked on the same scale
  if (compareCheckbox.checked()) {
    const tx = left + (right - left) * (DIGITAL_THRESHOLD / ADC_MAX);
    stroke('#C0392B');
    strokeWeight(2);
    line(tx, top - 8, tx, top + h + 8);
    noStroke();
    fill('#C0392B');
    textAlign(CENTER, TOP);
    textSize(12);
    text('digital flips here', tx, top + h + 10);
  }

  noStroke();
  fill('#666666');
  textAlign(LEFT, BOTTOM);
  textSize(12);
  text('0', left, top - 4);
  textAlign(RIGHT, BOTTOM);
  text('1023', right, top - 4);
}

// ---------- dragging ----------
function mousePressed() {
  if (dist(mouseX, mouseY, knobCx, knobCy) < KNOB_R + 20) dragging = true;
}

function mouseReleased() {
  dragging = false;
}

function mouseDragged() {
  if (!dragging) return;
  // Convert the pointer position to an angle, then clamp it into the knob's
  // 270-degree travel rather than letting it wrap past the end stops.
  const a = (degrees(atan2(mouseY - knobCy, mouseX - knobCx)) + 360) % 360;
  const travelled = (a - KNOB_START + 360) % 360;
  if (travelled <= KNOB_SWEEP) {
    knobAngle = a;
  } else {
    // past an end stop: snap to whichever stop is nearer
    const pastEnd = travelled - KNOB_SWEEP;
    const beforeStart = 360 - travelled;
    knobAngle = pastEnd < beforeStart ? KNOB_START + KNOB_SWEEP : KNOB_START;
  }
}

// ---------- responsive plumbing (must stay at the end) ----------
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  const w = Math.floor(container.width);
  if (w !== containerWidth) {
    containerWidth = w;
    canvasWidth = containerWidth;
    if (typeof width !== 'undefined' && width > 0) {
      resizeCanvas(containerWidth, containerHeight);
    }
  }
}
