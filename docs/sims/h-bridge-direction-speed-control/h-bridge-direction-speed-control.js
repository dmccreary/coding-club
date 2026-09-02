// H-Bridge Direction and Speed Control
// CANVAS_HEIGHT: 540
// Bloom: Apply (L3), verb "demonstrate"
//
// Four switches in an H around a motor. Close the top-left and bottom-right
// pair and current crosses the motor one way; close the other pair and it
// crosses the other way. That is the entire idea, and it is why a $2 driver
// chip can reverse a motor a microcontroller could never drive directly.
//
// The layout separates the two circuits deliberately. Thin green lines are
// logic signals from the microcontroller -- microamps. Thick dark lines carry
// motor current from its own supply -- amps. They meet only at the switches,
// which is the whole point of using a driver.
//
// Both inputs HIGH is drawn as brake rather than as a short, because that is
// what a real driver chip does: it closes both low-side switches and shorts
// the motor to ground, which stops it fast. A bare four-transistor H-bridge
// driven that way would short the supply through itself, and the sim says so.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 460;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 150;
let defaultTextSize = 16;

const TITLE_H = 42;
const VMOT = 6;              // motor supply, separate from the 3.3 V logic

// ---- Controls --------------------------------------------------------------
let in1Checkbox, in2Checkbox, swapButton, resetButton, pwmSlider;

// ---- State -----------------------------------------------------------------
let wheelAngle = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  in1Checkbox = createCheckbox(' IN1 HIGH', false);
  in1Checkbox.position(78, drawHeight + 10);

  in2Checkbox = createCheckbox(' IN2 HIGH', false);
  in2Checkbox.position(180, drawHeight + 10);

  swapButton = createButton('Swap direction');
  swapButton.position(288, drawHeight + 8);
  swapButton.mousePressed(swapDirection);

  pwmSlider = createSlider(0, 100, 0, 1);
  pwmSlider.position(sliderLeftMargin, drawHeight + 46);
  pwmSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('A simplified H-bridge drawn as four switches around a DC motor, ' +
    'with logic inputs coming in from a microcontroller on thin signal lines ' +
    'and motor current flowing on separate heavy lines from its own supply. ' +
    'Two input toggles choose which diagonal pair of switches closes, which ' +
    'sets the motor direction, and a PWM duty-cycle slider sets its speed. A ' +
    'wheel icon spins in the corresponding direction at the corresponding ' +
    'speed.');
}

// -1 reverse, 0 stopped, +1 forward; plus a mode name for the readout.
function motorState() {
  const a = in1Checkbox.checked(), b = in2Checkbox.checked();
  if (a && b) return {dir: 0, mode: 'brake'};
  if (a) return {dir: 1, mode: 'forward'};
  if (b) return {dir: -1, mode: 'reverse'};
  return {dir: 0, mode: 'coast'};
}

function draw() {
  updateCanvasSize();

  const st = motorState();
  const duty = pwmSlider.value() / 100;
  const rpm = st.dir * duty;
  wheelAngle += rpm * 0.16;

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('H-Bridge Direction and Speed Control', canvasWidth / 2, 8);

  const split = canvasWidth * 0.62;
  drawBridge(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 60,
             st, duty);
  drawWheelPanel(split, TITLE_H, canvasWidth - split - margin,
                 drawHeight - TITLE_H - 60, st, duty);
  drawReadout(st, duty);
  drawControlLabels();
}

// ---------------------------------------------------------------------------
// The bridge
// ---------------------------------------------------------------------------

function drawBridge(x, y, w, h, st, duty) {
  const left = x + w * 0.28;
  const right = x + w * 0.78;
  const top = y + 48;
  const bot = y + h - 36;
  const midY = (top + bot) / 2;

  // Which diagonal is closed. Q1/Q4 is the forward pair, Q2/Q3 the reverse
  // pair, and brake closes the two low-side switches together.
  const q1 = st.mode === 'forward';
  const q4 = st.mode === 'forward';
  const q2 = st.mode === 'reverse';
  const q3 = st.mode === 'reverse' || st.mode === 'brake';
  const q4b = q4 || st.mode === 'brake';

  const live = duty > 0 && st.dir !== 0;

  push();
  // Motor supply rails, drawn heavy: this is the current path.
  stroke('#2C3A45');
  strokeWeight(5);
  line(left - 40, top, right + 40, top);
  line(left - 40, bot, right + 40, bot);

  // The four legs
  drawLeg(left, top, midY - 26, q1, live && q1);
  drawLeg(right, top, midY - 26, q2, live && q2);
  drawLeg(left, midY + 26, bot, q3, live && q3);
  drawLeg(right, midY + 26, bot, q4b, live && q4);

  // Motor across the middle
  stroke('#2C3A45');
  strokeWeight(5);
  line(left, midY, right, midY);
  pop();

  drawMotorSymbol((left + right) / 2, midY, st, duty);

  // Switch labels
  noStroke();
  textSize(12);
  fill('#5B7186');
  textAlign(LEFT, CENTER);
  text('Q1', left + 12, (top + midY - 26) / 2);
  text('Q3', left + 12, (midY + 26 + bot) / 2);
  textAlign(RIGHT, CENTER);
  text('Q2', right - 12, (top + midY - 26) / 2);
  text('Q4', right - 12, (midY + 26 + bot) / 2);

  fill('#D64545');
  textAlign(LEFT, BOTTOM);
  textSize(13);
  text('V+ (' + VMOT + ' V motor supply)', left - 40, top - 24);
  fill('#5B7186');
  textAlign(LEFT, TOP);
  text('GND', left - 40, bot + 22);

  drawLogicInputs(x, y, w, left, right, top, bot, midY);
}

function drawLeg(x, y1, y2, closed, flowing) {
  const midY = (y1 + y2) / 2;
  push();
  stroke(flowing ? '#E8833A' : '#2C3A45');
  strokeWeight(5);
  line(x, y1, x, midY - 16);
  line(x, midY + 16, x, y2);

  // The switch itself, drawn open or closed so the closed diagonal is visible
  // as a shape rather than only as a colour.
  strokeWeight(3);
  stroke(closed ? '#2E7D4F' : '#8AA6BF');
  if (closed) line(x, midY - 16, x, midY + 16);
  else line(x, midY - 16, x + 15, midY + 13);
  pop();

  noStroke();
  fill(closed ? '#2E7D4F' : '#8AA6BF');
  circle(x, midY - 16, 7);
  circle(x, midY + 16, 7);
}

function drawMotorSymbol(cx, cy, st, duty) {
  push();
  stroke('#2C3A45');
  strokeWeight(3);
  fill('white');
  circle(cx, cy, 54);
  pop();
  noStroke();
  fill('#2C3A45');
  textAlign(CENTER, CENTER);
  textSize(20);
  text('M', cx, cy + 1);

  if (st.dir !== 0 && duty > 0) {
    push();
    stroke('#E8833A');
    strokeWeight(2.5);
    noFill();
    const a0 = st.dir > 0 ? -0.6 : PI - 0.6;
    arc(cx, cy, 74, 74, a0, a0 + 1.9);
    const tip = a0 + 1.9 * (st.dir > 0 ? 1 : 1);
    const tx = cx + cos(tip) * 37, ty = cy + sin(tip) * 37;
    noStroke();
    fill('#E8833A');
    push();
    translate(tx, ty);
    rotate(tip + HALF_PI);
    triangle(0, 0, -6, -10, 6, -10);
    pop();
    pop();
  }
}

// The microcontroller side. The two logic lines stop at the driver's boundary
// rather than being routed to individual switches: what matters here is that
// they carry signal only, and that motor current never crosses that line.
function drawLogicInputs(x, y, w, left, right, top, bot, midY) {
  const bw = min(70, w * 0.22);
  const bh = 50;
  const bx = x;
  const by = midY - bh / 2;

  // The driver boundary
  push();
  stroke('#8AA6BF');
  strokeWeight(1.5);
  drawingContext.setLineDash([6, 5]);
  noFill();
  rect(left - 62, top - 16, (right - left) + 124, (bot - top) + 32, 8);
  drawingContext.setLineDash([]);
  pop();

  push();
  stroke('#3E9E6E');
  strokeWeight(1.5);
  line(bx + bw, midY - 12, left - 62, midY - 12);
  line(bx + bw, midY + 12, left - 62, midY + 12);
  pop();

  noStroke();
  fill('#3E9E6E');
  rect(bx, by, bw, bh, 5);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(11);
  text('MCU', bx + bw / 2, by + bh / 2);

  textAlign(LEFT, BOTTOM);
  textSize(11);
  fill(in1Checkbox.checked() ? '#2E7D4F' : '#8AA6BF');
  text('IN1', bx + bw + 4, midY - 14);
  fill(in2Checkbox.checked() ? '#2E7D4F' : '#8AA6BF');
  text('IN2', bx + bw + 4, midY + 10);

  fill('#8AA6BF');
  textAlign(RIGHT, TOP);
  textSize(11);
  text('driver chip', right + 60, bot + 22);
}

// ---------------------------------------------------------------------------
// Wheel and readout
// ---------------------------------------------------------------------------

function drawWheelPanel(x, y, w, h, st, duty) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  const cx = x + w / 2;
  const cy = y + h * 0.30;
  const r = min(w * 0.30, h * 0.24);

  push();
  translate(cx, cy);
  rotate(wheelAngle);
  noStroke();
  fill('#3A4A56');
  circle(0, 0, r * 2);
  fill('#E4EDF5');
  circle(0, 0, r * 1.1);
  stroke('#8AA6BF');
  strokeWeight(3);
  for (let i = 0; i < 6; i++) {
    const a = (i * TWO_PI) / 6;
    line(0, 0, cos(a) * r * 0.5, sin(a) * r * 0.5);
  }
  // one marked spoke, so a slow spin is still visibly a spin
  stroke('#E8833A');
  strokeWeight(5);
  line(0, 0, 0, -r * 0.9);
  pop();

  noStroke();
  textAlign(CENTER, TOP);
  textSize(15);
  fill('#4A5A68');
  const label = st.mode === 'forward' ? 'Forward'
              : st.mode === 'reverse' ? 'Reverse'
              : st.mode === 'brake' ? 'Braked' : 'Coasting';
  fill(st.dir === 0 ? '#7A8A99' : '#2C3A45');
  textSize(20);
  text(label + (st.dir !== 0 ? ' at ' + pwmSlider.value() + '%' : ''),
       cx, cy + r + 16);

  fill('#4A5A68');
  textSize(13);
  text(st.mode === 'brake'
        ? 'Both inputs HIGH: a driver chip closes both low-side switches and ' +
          'shorts the motor to ground, which stops it fast. On a bare ' +
          'four-transistor bridge the same inputs would short the supply ' +
          'through itself.'
       : st.mode === 'coast'
        ? 'Both inputs LOW: every switch is open, so the motor is connected to ' +
          'nothing and freewheels to a stop.'
       : 'One input HIGH and one LOW closes a diagonal pair, and current ' +
         'crosses the motor in that direction.',
       x + 14, cy + r + 46, w - 28, h - (cy + r + 46 - y) - 12);
}

function drawReadout(st, duty) {
  const y = drawHeight - 52;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);

  fill(in1Checkbox.checked() ? '#2E7D4F' : '#7A8A99');
  text('IN1 ' + (in1Checkbox.checked() ? 'HIGH' : 'LOW'), margin, y);
  fill(in2Checkbox.checked() ? '#2E7D4F' : '#7A8A99');
  text('IN2 ' + (in2Checkbox.checked() ? 'HIGH' : 'LOW'), margin + 100, y);
  fill('black');
  text('PWM ' + pwmSlider.value() + '%', margin + 200, y);
  text('Motor: ' + nf(VMOT * duty * (st.dir === 0 ? 0 : 1), 0, 1) +
       ' V average', margin + 310, y);

  fill('dimgray');
  textSize(13);
  text('The microcontroller never carries motor current — its two signal wires ' +
       'only tell the driver which switches to close.',
       margin, y + 22, canvasWidth - margin * 2, 20);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('PWM duty: ' + pwmSlider.value() + '%', 10, drawHeight + 58);
}

function swapDirection() {
  const a = in1Checkbox.checked(), b = in2Checkbox.checked();
  in1Checkbox.checked(b);
  in2Checkbox.checked(a);
}

function resetSimulation() {
  in1Checkbox.checked(false);
  in2Checkbox.checked(false);
  pwmSlider.value(0);
  wheelAngle = 0;
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  pwmSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
