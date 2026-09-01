// Servo Angle and Pulse Width Explorer
// CANVAS_HEIGHT: 480
// Bloom: Apply (L3), verb "calculate"
// A hobby servo does not take an angle. It takes a pulse whose WIDTH encodes the
// angle: 1000 microseconds means one end of travel, 2000 the other, 1500 the
// centre. The arm on the left rotates to whatever the slider's pulse width maps
// to, and the panel on the right shows the arithmetic with the live numbers
// substituted in.

// ---------- canvas geometry ----------
let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 80;      // slider row + preset button row
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let sliderLeftMargin = 190;
let defaultTextSize = 16;

// ---------- servo model ----------
// The standard hobby-servo convention. Everything else in this sim is derived.
const MIN_PULSE_US = 1000;
const MAX_PULSE_US = 2000;
const MIN_ANGLE = 0;
const MAX_ANGLE = 180;

const AMBER = '#F5A623';
const SKY_BLUE = '#4A90D9';

let pulseUs = 1500;
let pulseSlider;
let preset0, preset90, preset180;

// The arm eases toward its target instead of snapping, which is what a real
// servo does and makes the preset buttons legible as movement.
let displayedAngle = 90;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  pulseSlider = createSlider(MIN_PULSE_US, MAX_PULSE_US, pulseUs, 10);
  pulseSlider.position(sliderLeftMargin, drawHeight + 12);
  pulseSlider.size(canvasWidth - sliderLeftMargin - margin);

  preset0 = createButton('0°  (1000 µs)');
  preset0.position(12, drawHeight + 46);
  preset0.mousePressed(() => pulseSlider.value(MIN_PULSE_US));

  preset90 = createButton('90°  (1500 µs)');
  preset90.position(122, drawHeight + 46);
  preset90.mousePressed(() => pulseSlider.value(1500));

  preset180 = createButton('180°  (2000 µs)');
  preset180.position(240, drawHeight + 46);
  preset180.mousePressed(() => pulseSlider.value(MAX_PULSE_US));

  describe('A servo explorer. A slider sets the control pulse width in ' +
           'microseconds; a drawn servo arm rotates to the matching angle and a ' +
           'panel shows the pulse-to-angle formula with the current numbers ' +
           'substituted. Preset buttons jump to 0, 90, and 180 degrees.');
}

function angleForPulse(us) {
  return map(us, MIN_PULSE_US, MAX_PULSE_US, MIN_ANGLE, MAX_ANGLE);
}

function draw() {
  updateCanvasSize();
  pulseUs = pulseSlider.value();
  const target = angleForPulse(pulseUs);
  displayedAngle = lerp(displayedAngle, target, 0.18);

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
  text('Servo Angle and Pulse Width', canvasWidth / 2, 12);

  drawServo(target);
  drawFormulaPanel(target);
  drawControlLabels(target);
}

// Left 55%: the servo body with an arm sweeping the 0-180 range.
function drawServo(target) {
  const cx = canvasWidth * 0.27;
  const cy = 265;
  const armLen = 105;

  // travel arc, so 0 and 180 are visible even when the arm is elsewhere
  noFill();
  stroke('#C6D2DC');
  strokeWeight(2);
  arc(cx, cy, armLen * 2 + 30, armLen * 2 + 30, PI, TWO_PI);

  noStroke();
  fill('#7A8A99');
  textAlign(CENTER, CENTER);
  textSize(13);
  text('0°', cx - armLen - 26, cy - 6);
  text('180°', cx + armLen + 26, cy - 6);
  text('90°', cx, cy - armLen - 30);

  // servo body
  stroke('#33475B');
  strokeWeight(2);
  fill('#5B7186');
  rectMode(CENTER);
  rect(cx, cy + 46, 108, 62, 6);
  rectMode(CORNER);

  // the arm. p5 angles run clockwise from east, and the servo sweeps from west
  // (0 degrees) to east (180), so the drawing angle is 180 + the servo angle.
  push();
  translate(cx, cy);
  rotate(radians(180 + displayedAngle));
  stroke('#8A6A18');
  strokeWeight(2);
  fill(AMBER);
  rectMode(CENTER);
  rect(armLen / 2, 0, armLen, 16, 8);
  rectMode(CORNER);
  noStroke();
  fill('#8A6A18');
  circle(armLen - 8, 0, 9);
  pop();

  // hub
  stroke('#33475B');
  strokeWeight(2);
  fill('white');
  circle(cx, cy, 26);

  noStroke();
  fill('#333333');
  textAlign(CENTER, TOP);
  textSize(14);
  text('servo horn', cx, cy + 84);
}

// Right 45%: the formula with the current numbers actually substituted.
function drawFormulaPanel(target) {
  const x = canvasWidth * 0.56;
  const w = canvasWidth - x - margin / 2;
  const top = 70;

  stroke('silver');
  strokeWeight(1);
  fill(255, 255, 255, 235);
  rect(x, top, w, 250, 10);

  const pad = x + 14;
  noStroke();
  textAlign(LEFT, TOP);

  fill('#555555');
  textSize(13);
  text('Pulse width', pad, top + 14);
  fill(SKY_BLUE);
  textSize(30);
  text(pulseUs + ' µs', pad, top + 32);

  fill('#555555');
  textSize(13);
  text('Resulting angle', pad, top + 76);
  fill(AMBER);
  textSize(38);
  text(nf(target, 1, 1) + '°', pad, top + 94);

  stroke('#DDDDDD');
  strokeWeight(1);
  line(pad, top + 148, x + w - 14, top + 148);
  noStroke();

  fill('#333333');
  textSize(13);
  text('angle = (pulse − 1000) / 1000 × 180', pad, top + 160);
  textSize(14);
  text('= (' + pulseUs + ' − 1000) / 1000 × 180', pad, top + 182);
  fill(AMBER);
  text('= ' + nf(target, 1, 1) + '°', pad, top + 204);

  fill('#777777');
  textSize(12);
  text('1000 µs of pulse range covers 180° of travel:', pad, top + 226);
  text('about 5.6 µs per degree.', pad, top + 242);
}

function drawControlLabels(target) {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Pulse width: ' + pulseUs + ' µs', 12, drawHeight + 22);
}

// ---------- responsive plumbing (must stay at the end) ----------
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  pulseSlider.size(canvasWidth - sliderLeftMargin - margin);
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
      if (pulseSlider) pulseSlider.size(canvasWidth - sliderLeftMargin - margin);
    }
  }
}
