// Robot Emotion Display Control Panel
// CANVAS_HEIGHT: 520
// Bloom: Apply (L3), verb "demonstrate"
//
// One sensor reading, two outputs. Drag the distance slider past 10 cm and the
// face changes AND the speaker pulses -- from the same comparison, in the same
// pass through the loop.
//
// That is the whole idea, and it is the thing that makes two separate kits into
// one project. The mute toggle exists to prove the outputs are independent of
// each other: silence the speaker and the face still reacts, because the face
// was never reading the speaker, it was reading the sensor.
//
// The hysteresis band is drawn because a real build needs it. A reading sitting
// exactly on the threshold jitters, and a robot that flickers between calm and
// alert twenty times a second is the bug every distance-triggered project hits.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 440;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 210;
let defaultTextSize = 16;

const TITLE_H = 42;
const THRESHOLD = 10;        // cm

// ---- Controls --------------------------------------------------------------
let distanceSlider, muteCheckbox, resetButton;

// ---- State -----------------------------------------------------------------
let isAlert = false;           // latched, so the face does not flicker
let pulse = 0;               // speaker pulse envelope, 1 down to 0
let blink = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  muteCheckbox = createCheckbox(' Mute the speaker', false);
  muteCheckbox.position(78, drawHeight + 10);

  distanceSlider = createSlider(0, 50, 50, 1);
  distanceSlider.position(sliderLeftMargin, drawHeight + 46);
  distanceSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('A robot face drawn on an OLED-style panel beside a speaker icon, ' +
    'driven by a single distance slider from 0 to 50 centimetres with a ' +
    'trigger marked at 10. Below the trigger the face switches from calm to ' +
    'alert and the speaker pulses once; above it the face returns to calm. A ' +
    'mute toggle silences the speaker without changing the face, showing that ' +
    'both outputs read the sensor rather than each other.');
}

function draw() {
  updateCanvasSize();

  const d = distanceSlider.value();

  // A 2 cm hysteresis band: trip below 10, release above 12. Without it a
  // reading hovering at the threshold flips state every frame.
  const wasAlert = isAlert;
  if (!isAlert && d <= THRESHOLD) isAlert = true;
  else if (isAlert && d > THRESHOLD + 2) isAlert = false;
  if (isAlert && !wasAlert) pulse = 1;

  pulse = max(0, pulse - 0.02);
  blink += 0.05;

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Robot Emotion Display Control Panel', canvasWidth / 2, 8);

  const split = canvasWidth * 0.56;
  drawFacePanel(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 78);
  drawSpeakerPanel(split, TITLE_H, canvasWidth - split - margin,
                   drawHeight - TITLE_H - 78);
  drawScale(margin, drawHeight - 70, canvasWidth - margin * 2, 58, d);
  drawControlLabels();
}

function drawFacePanel(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(isAlert ? '#D64545' : '#3E9E6E');
  rect(x, y, w, 5, 3);

  // an OLED module: black glass in a board-coloured frame
  const gw = w - 40, gh = h - 78;
  const gx = x + 20, gy = y + 30;
  fill('#1B2027');
  rect(gx, gy, gw, gh, 8);

  drawFace(gx + gw / 2, gy + gh / 2, min(gw * 0.34, gh * 0.42));

  noStroke();
  fill(isAlert ? '#C0392B' : '#2E7D4F');
  textAlign(CENTER, TOP);
  textSize(17);
  text(isAlert ? 'ALERT — something is close' : 'Calm — path is clear',
       x + w / 2, y + h - 40);
}

// Two states drawn from the same parameterised eye and mouth shapes, so the
// difference is the numbers rather than two unrelated pictures.
function drawFace(cx, cy, r) {
  const eyeY = cy - r * 0.34;
  const eyeDx = r * 0.62;
  const lidBlink = (sin(blink) > 0.96 && !isAlert) ? 0.14 : 1;

  push();
  noStroke();
  fill(isAlert ? '#FF7A5A' : '#7CE0FF');

  if (isAlert) {
    // wide eyes, angled brows
    circle(cx - eyeDx, eyeY, r * 0.52);
    circle(cx + eyeDx, eyeY, r * 0.52);
    stroke(isAlert ? '#FF7A5A' : '#7CE0FF');
    strokeWeight(r * 0.11);
    line(cx - eyeDx - r * 0.30, eyeY - r * 0.52,
         cx - eyeDx + r * 0.26, eyeY - r * 0.34);
    line(cx + eyeDx + r * 0.30, eyeY - r * 0.52,
         cx + eyeDx - r * 0.26, eyeY - r * 0.34);
    // open mouth
    noStroke();
    ellipse(cx, cy + r * 0.64, r * 0.78, r * 0.54);
  } else {
    // calm, occasionally blinking eyes
    ellipse(cx - eyeDx, eyeY, r * 0.44, r * 0.44 * lidBlink);
    ellipse(cx + eyeDx, eyeY, r * 0.44, r * 0.44 * lidBlink);
    // a gentle smile
    noFill();
    stroke('#7CE0FF');
    strokeWeight(r * 0.13);
    arc(cx, cy + r * 0.30, r * 1.0, r * 0.8, 0.35, PI - 0.35);
  }
  pop();
}

function drawSpeakerPanel(x, y, w, h) {
  const muted = muteCheckbox.checked();
  const live = pulse > 0 && !muted;

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(live ? '#F5A623' : '#D4DEE7');
  rect(x, y, w, 5, 3);

  const cx = x + w / 2, cy = y + h * 0.40;
  const r = min(w * 0.20, h * 0.24);

  push();
  translate(cx, cy);
  noStroke();
  fill(muted ? '#B8C4CE' : '#5B7186');
  triangle(-r * 0.2, -r * 0.7, -r * 0.2, r * 0.7, -r * 1.1, 0);
  rect(-r * 1.15, -r * 0.32, r * 0.5, r * 0.64);

  // sound waves, sized by the pulse envelope
  if (live) {
    noFill();
    stroke(245, 166, 35, 255 * pulse);
    strokeWeight(3);
    for (let i = 1; i <= 3; i++) {
      const rad = r * (0.6 + i * 0.55) * (1 + (1 - pulse) * 0.35);
      arc(-r * 0.1, 0, rad, rad, -0.9, 0.9);
    }
  } else if (muted) {
    stroke('#C0392B');
    strokeWeight(3);
    line(r * 0.1, -r * 0.5, r * 0.9, r * 0.5);
    line(r * 0.9, -r * 0.5, r * 0.1, r * 0.5);
  }
  pop();

  noStroke();
  fill(muted ? '#C0392B' : live ? '#B8860B' : '#8AA6BF');
  textAlign(CENTER, TOP);
  textSize(16);
  text(muted ? 'Muted' : live ? '♪ Beep' : 'Silent', cx, cy + r + 14);

  fill('#4A5A68');
  textSize(13);
  text(muted
        ? 'The speaker is off and the face still reacts. Both outputs read the ' +
          'sensor, not each other — muting one cannot break the other.'
        : 'One beep fires on the transition into alert, not continuously. A ' +
          'robot that beeps every frame while an obstacle is close is ' +
          'unbearable within ten seconds.',
       x + 16, y + h - 74, w - 32, 66);
}

// The slider's own scale, drawn so the threshold and the hysteresis band are
// visible things rather than numbers in the code.
function drawScale(x, y, w, h, d) {
  const tx = x + (THRESHOLD / 50) * w;
  const hx = x + ((THRESHOLD + 2) / 50) * w;

  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  fill(214, 69, 69, 30);
  rect(x + 1, y + 14, tx - x, h - 28, 4);
  fill(245, 166, 35, 40);
  rect(tx, y + 14, hx - tx, h - 28, 0);

  stroke('#D64545');
  strokeWeight(2);
  line(tx, y + 10, tx, y + h - 10);
  noStroke();
  fill('#D64545');
  textAlign(RIGHT, TOP);
  textSize(11);
  text('trigger at ' + THRESHOLD + ' cm', tx - 5, y + 5);
  fill('#B8860B');
  textAlign(LEFT, TOP);
  text('release at ' + (THRESHOLD + 2) + ' cm', hx + 5, y + 5);

  // where the reading currently sits
  const px = x + (d / 50) * w;
  fill(isAlert ? '#D64545' : '#3E9E6E');
  circle(px, y + h / 2, 14);
  textAlign(CENTER, TOP);
  textSize(12);
  text(d + ' cm', px, y + h / 2 + 10);

  fill('#8AA6BF');
  textAlign(LEFT, BOTTOM);
  textSize(11);
  text('0 cm', x + 4, y + h - 2);
  textAlign(RIGHT, BOTTOM);
  text('50 cm', x + w - 4, y + h - 2);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Distance to obstacle: ' + distanceSlider.value() + ' cm',
       10, drawHeight + 58);
}

function resetSimulation() {
  distanceSlider.value(50);
  muteCheckbox.checked(false);
  isAlert = false;
  pulse = 0;
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  distanceSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
