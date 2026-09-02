// Differential Drive Chassis Explorer
// CANVAS_HEIGHT: 560
// Bloom: Understand (L2), verb "explain"
//
// Two wheels, two numbers, every path a two-wheel robot can take. The whole of
// differential-drive steering is the *difference* between the two speeds:
//
//     forward speed = (left + right) / 2
//     turn rate     = (right - left) / wheelbase
//
// Equal speeds cancel the turn term and the robot goes straight. Opposite
// speeds cancel the forward term and it spins on the spot. Everything else is
// an arc, and its radius comes from how big the difference is.
//
// The numbers and the named path type are shown before the chassis moves,
// because the objective is to *explain* the connection, not to watch a robot
// drive. A learner who can predict "curving left" from the two numbers has it;
// one who can only recognise it after the fact does not.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 445;
let controlHeight = 115;     // 3 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 190;
let defaultTextSize = 16;

const TITLE_H = 42;
const READOUT_H = 74;
const WHEELBASE = 56;        // pixels between the two wheels
const SPEED_SCALE = 0.032;   // slider units to pixels per frame

// ---- Controls --------------------------------------------------------------
let leftSlider, rightSlider, startButton, resetButton;

// ---- State -----------------------------------------------------------------
let isRunning = false;       // every MicroSim starts paused
let pose = {x: 0, y: 0, a: 0};   // heading set in setup(): p5
                                 // constants do not exist yet here
let trail = [];
let arena = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);
  pose.a = -HALF_PI;

  startButton = createButton('Start');
  startButton.position(10, drawHeight + 8);
  startButton.mousePressed(toggleSimulation);

  resetButton = createButton('Reset position');
  resetButton.position(75, drawHeight + 8);
  resetButton.mousePressed(resetPosition);

  leftSlider = createSlider(-100, 100, 50, 5);
  leftSlider.position(sliderLeftMargin, drawHeight + 46);
  leftSlider.size(canvasWidth - sliderLeftMargin - margin);

  rightSlider = createSlider(-100, 100, 50, 5);
  rightSlider.position(sliderLeftMargin, drawHeight + 82);
  rightSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('A two-wheel robot chassis seen from above, driving inside a walled ' +
    'arena and leaving a trail behind it. Two sliders set the left and right ' +
    'wheel speeds independently from full reverse to full forward. A readout ' +
    'shows both numbers, their difference, and the resulting path named in ' +
    'words — straight, curving, pivoting, or spinning in place — and the ' +
    'chassis then traces that path.');
}

// The named path type, derived from the two speeds alone. This is the sentence
// the learner should be able to produce before pressing Start.
function pathType() {
  const l = leftSlider.value(), r = rightSlider.value();
  if (l === 0 && r === 0) return {name: 'Stopped', color: '#7A8A99',
    why: 'Both wheels at zero. Nothing to explain yet.'};
  if (l === r) return {name: l > 0 ? 'Straight ahead' : 'Straight back',
    color: '#3E9E6E',
    why: 'Equal speeds, so the turn term (right − left) is zero. Any two equal ' +
         'numbers give a straight line; their size sets how fast.'};
  if (l === -r) return {name: 'Spinning in place', color: '#8E7CC3',
    why: 'Equal and opposite, so the forward term (left + right) / 2 is zero. ' +
         'The robot turns without going anywhere — the tightest turn possible.'};
  if (l === 0 || r === 0) return {
    name: 'Pivoting about the ' + (l === 0 ? 'left' : 'right') + ' wheel',
    color: '#E8833A',
    why: 'One wheel stopped, so the robot swings around it. The turning circle ' +
         'is exactly the wheelbase — half the radius of the same turn made ' +
         'with both wheels moving.'};
  const dir = r > l ? 'left' : 'right';
  // Turning radius from the centre of the axle, in robot widths.
  const widths = abs((l + r) / (r - l)) / 2;
  const tight = widths < 1 ? 'almost on the spot'
              : widths < 4 ? 'a tight arc' : 'a wide, gentle arc';
  return {name: 'Curving ' + dir, color: '#4A90D9',
    why: 'The ' + (r > l ? 'right' : 'left') + ' wheel is faster, so the robot ' +
         'swings toward the slower side. The turning circle is about ' +
         nf(widths, 0, 1) + ' robot widths — ' + tight + '. What sets it is ' +
         'the ratio of the two speeds, not the raw difference: 90 and 100 ' +
         'differ by only 10 and sweep a huge circle.'};
}

function draw() {
  updateCanvasSize();
  computeArena();

  if (isRunning) stepChassis();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Differential Drive Chassis Explorer', canvasWidth / 2, 8);

  drawArena();
  drawReadout();
  drawControlLabels();
}

function computeArena() {
  const h = drawHeight - TITLE_H - READOUT_H - 12;
  const w = canvasWidth - margin * 2;
  arena = {x: margin, y: TITLE_H, w: w, h: h};
  if (pose.x === 0 && pose.y === 0) {
    pose.x = arena.x + arena.w / 2;
    pose.y = arena.y + arena.h * 0.72;
  }
}

// Standard differential-drive kinematics, integrated one frame at a time.
function stepChassis() {
  const vl = leftSlider.value() * SPEED_SCALE;
  const vr = rightSlider.value() * SPEED_SCALE;
  const v = (vl + vr) / 2;
  const omega = (vr - vl) / WHEELBASE;

  pose.a += omega;
  pose.x += cos(pose.a) * v;
  pose.y += sin(pose.a) * v;

  // Bounce off the walls rather than driving off the canvas, and turn the
  // robot around so it stays in view.
  const pad = 16;
  if (pose.x < arena.x + pad) { pose.x = arena.x + pad; pose.a = PI - pose.a; }
  if (pose.x > arena.x + arena.w - pad) {
    pose.x = arena.x + arena.w - pad; pose.a = PI - pose.a;
  }
  if (pose.y < arena.y + pad) { pose.y = arena.y + pad; pose.a = -pose.a; }
  if (pose.y > arena.y + arena.h - pad) {
    pose.y = arena.y + arena.h - pad; pose.a = -pose.a;
  }

  trail.push({x: pose.x, y: pose.y});
  if (trail.length > 900) trail.shift();
}

function drawArena() {
  noStroke();
  fill('white');
  rect(arena.x, arena.y, arena.w, arena.h, 8);
  push();
  stroke('#D4DEE7');
  strokeWeight(1);
  for (let gx = arena.x + 40; gx < arena.x + arena.w; gx += 40) {
    line(gx, arena.y, gx, arena.y + arena.h);
  }
  for (let gy = arena.y + 40; gy < arena.y + arena.h; gy += 40) {
    line(arena.x, gy, arena.x + arena.w, gy);
  }

  // The trail is the evidence: the path shape, drawn rather than described.
  const pt = pathType();
  stroke(pt.color);
  strokeWeight(2);
  noFill();
  beginShape();
  for (const p of trail) vertex(p.x, p.y);
  endShape();
  pop();

  drawChassis();
}

function drawChassis() {
  const l = leftSlider.value(), r = rightSlider.value();
  push();
  translate(pose.x, pose.y);
  rotate(pose.a);

  // body
  noStroke();
  fill('#3A4A56');
  rectMode(CENTER);
  rect(0, 0, 46, WHEELBASE - 10, 5);

  // wheels, coloured by what they are doing: green forward, red reverse
  drawWheel(-4, -WHEELBASE / 2, l);
  drawWheel(-4, WHEELBASE / 2, r);

  // nose, so heading is unambiguous
  fill('#F5A623');
  triangle(23, -9, 23, 9, 36, 0);
  pop();

  noStroke();
  fill('#5B7186');
  textAlign(CENTER, TOP);
  textSize(11);
  text('L', pose.x + cos(pose.a - HALF_PI) * 34,
       pose.y + sin(pose.a - HALF_PI) * 34 - 6);
  text('R', pose.x + cos(pose.a + HALF_PI) * 34,
       pose.y + sin(pose.a + HALF_PI) * 34 - 6);
}

function drawWheel(x, y, speed) {
  const col = speed > 0 ? '#3E9E6E' : speed < 0 ? '#D64545' : '#8AA6BF';
  noStroke();
  fill(col);
  rectMode(CENTER);
  rect(x, y, 26, 10, 3);
}

function drawReadout() {
  const pt = pathType();
  const l = leftSlider.value(), r = rightSlider.value();
  const y = drawHeight - READOUT_H;

  noStroke();
  textAlign(LEFT, TOP);

  // Stage 1: the two numbers, side by side.
  textSize(15);
  fill('#4A5A68');
  text('left', margin, y);
  text('right', margin + 78, y);
  text('difference', margin + 168, y);
  textSize(22);
  fill(l > 0 ? '#2E7D4F' : l < 0 ? '#C0392B' : '#7A8A99');
  text(l, margin, y + 18);
  fill(r > 0 ? '#2E7D4F' : r < 0 ? '#C0392B' : '#7A8A99');
  text(r, margin + 78, y + 18);
  fill('#2C3A45');
  text(r - l, margin + 168, y + 18);

  // Stage 2: the path type, in words.
  const tx = margin + 268;
  fill(pt.color);
  textSize(20);
  text(pt.name, tx, y);
  fill('#4A5A68');
  textSize(13);
  text(pt.why, tx, y + 26, canvasWidth - tx - margin, 46);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Left wheel: ' + leftSlider.value(), 10, drawHeight + 58);
  text('Right wheel: ' + rightSlider.value(), 10, drawHeight + 94);
}

function toggleSimulation() {
  isRunning = !isRunning;
  startButton.html(isRunning ? 'Pause' : 'Start');
}

function resetPosition() {
  pose = {x: arena.x + arena.w / 2, y: arena.y + arena.h * 0.72, a: -HALF_PI};
  trail = [];
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  leftSlider.size(canvasWidth - sliderLeftMargin - margin);
  rightSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
