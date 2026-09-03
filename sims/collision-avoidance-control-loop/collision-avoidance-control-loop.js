// Collision Avoidance Control Loop
// CANVAS_HEIGHT: 560
// Bloom: Apply (L3), verb "demonstrate"
//
// Sense, decide, act -- as a state machine you can break.
//
// The robot only *sees* a new distance when the sensor is polled. Between polls
// it is driving on a stale number, and the sim shows both figures side by side:
// the true gap, and the reading the code is deciding on. Widen the polling
// interval and those two numbers pull apart until the robot drives straight
// into a wall it thinks is 40 cm away.
//
// That gap is the whole lesson, and it is why "how often do I read the sensor?"
// is a safety question and not a performance one.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 445;
let controlHeight = 115;     // 3 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 210;
let defaultTextSize = 16;

const TITLE_H = 42;
const ARENA_CM = 200;        // the arena is 200 cm of floor, left to right
const DRIVE_SPEED = 34;      // cm per second forward
const REVERSE_SPEED = 22;

// ---- Controls --------------------------------------------------------------
let startButton, resetButton, thresholdSlider, pollSlider;
let isRunning = false;       // every MicroSim starts paused

// ---- State machine ---------------------------------------------------------
const STATES = {
  DRIVE:   {label: 'Driving forward', color: '#3E9E6E'},
  STOP:    {label: 'Stopping',        color: '#F5A623'},
  REVERSE: {label: 'Reversing',       color: '#E8833A'},
  TURN:    {label: 'Turning',         color: '#8E7CC3'}
};

let state = 'DRIVE';
let stateEnteredMs = 0;
let robotCm = 20;            // robot's position along the arena, in cm
let wallCm = 170;            // obstacle position, in cm
let heading = 1;             // +1 driving toward the wall
let lastPollMs = 0;
let reading = ARENA_CM;      // the number the code is actually deciding on
let crashed = false;
let arena = null;
let draggingWall = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  startButton = createButton('Start');
  startButton.position(10, drawHeight + 8);
  startButton.mousePressed(toggleSimulation);

  resetButton = createButton('Reset');
  resetButton.position(75, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  thresholdSlider = createSlider(5, 50, 20, 1);
  thresholdSlider.position(sliderLeftMargin, drawHeight + 46);
  thresholdSlider.size(canvasWidth - sliderLeftMargin - margin);

  pollSlider = createSlider(50, 500, 100, 10);
  pollSlider.position(sliderLeftMargin, drawHeight + 82);
  pollSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('A top-down view of a two-wheel robot driving toward a draggable ' +
    'wall inside a bounded arena, with a forward-facing sensor cone. A panel ' +
    'shows the true distance to the wall, the last value the sensor actually ' +
    'reported, and the robot state: driving forward, stopping, reversing, or ' +
    'turning. Sliders set the stop distance and how often the sensor is polled; ' +
    'a long polling interval lets the true distance fall well below the ' +
    'threshold before the robot notices.');
}

function trueDistance() {
  return max(0, wallCm - robotCm);
}

function draw() {
  updateCanvasSize();
  computeArena();
  if (isRunning) stepRobot();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Collision Avoidance Control Loop', canvasWidth / 2, 8);

  drawArena();
  drawPanel();
  drawControlLabels();

  cursor(overWall() || draggingWall ? HAND : ARROW);
}

function computeArena() {
  const w = canvasWidth * 0.63 - margin;
  arena = {x: margin, y: TITLE_H + 20, w: w,
           h: drawHeight - TITLE_H - 52};
}

function cmToX(cm) { return arena.x + (cm / ARENA_CM) * arena.w; }
function xToCm(x)  { return ((x - arena.x) / arena.w) * ARENA_CM; }

// The loop. Everything the robot decides is decided on `reading`, which only
// changes when the sensor is polled.
function stepRobot() {
  const dt = deltaTime / 1000;
  const now = millis();

  // --- SENSE: only on a polling tick ---
  if (now - lastPollMs >= pollSlider.value()) {
    reading = trueDistance();
    lastPollMs = now;
  }

  // --- DECIDE ---
  const thr = thresholdSlider.value();
  const inState = now - stateEnteredMs;
  if (state === 'DRIVE' && reading <= thr) enter('STOP');
  else if (state === 'STOP' && inState > 400) enter('REVERSE');
  else if (state === 'REVERSE' && inState > 900) enter('TURN');
  else if (state === 'TURN' && inState > 900) enter('DRIVE');

  // --- ACT ---
  if (state === 'DRIVE') robotCm += DRIVE_SPEED * dt;
  else if (state === 'REVERSE') robotCm -= REVERSE_SPEED * dt;
  // STOP and TURN do not translate; TURN is where a real robot would rotate.

  robotCm = constrain(robotCm, 5, ARENA_CM - 5);

  // A collision is a real outcome here, not a rendering glitch: it is what a
  // threshold too low for the polling interval actually produces.
  if (trueDistance() <= 0.5 && state === 'DRIVE') {
    crashed = true;
    enter('REVERSE');
  }
}

function enter(next) {
  state = next;
  stateEnteredMs = millis();
}

function drawArena() {
  noStroke();
  fill('white');
  rect(arena.x, arena.y, arena.w, arena.h, 8);

  push();
  stroke('#E9EFF5');
  strokeWeight(1);
  for (let cm = 25; cm < ARENA_CM; cm += 25) {
    line(cmToX(cm), arena.y, cmToX(cm), arena.y + arena.h);
  }
  pop();

  const midY = arena.y + arena.h * 0.55;

  // The threshold, marked on the floor ahead of the robot.
  const thrX = cmToX(min(wallCm, robotCm + thresholdSlider.value()));
  push();
  stroke('#D64545');
  strokeWeight(2);
  drawingContext.setLineDash([6, 5]);
  line(thrX, arena.y + 10, thrX, arena.y + arena.h - 10);
  drawingContext.setLineDash([]);
  pop();
  noStroke();
  fill('#D64545');
  textAlign(CENTER, TOP);
  textSize(11);
  text('stop at ' + thresholdSlider.value() + ' cm', thrX,
       arena.y + arena.h - 18);

  drawSensorCone(midY);
  drawWall(midY);
  drawRobot(midY);

  noStroke();
  fill('#8AA6BF');
  textAlign(LEFT, TOP);
  textSize(11);
  text('0 cm', arena.x + 4, arena.y + arena.h + 3);
  textAlign(RIGHT, TOP);
  text(ARENA_CM + ' cm', arena.x + arena.w - 4, arena.y + arena.h + 3);
}

function drawSensorCone(midY) {
  const x = cmToX(robotCm) + 16;
  const reach = cmToX(robotCm + reading) - x;
  push();
  noStroke();
  fill(74, 144, 217, 40);
  triangle(x, midY, x + reach, midY - 26, x + reach, midY + 26);
  pop();
}

function drawWall(midY) {
  const x = cmToX(wallCm);
  push();
  noStroke();
  fill('#5B7186');
  rect(x - 7, arena.y + 14, 14, arena.h - 28, 3);
  fill('#8AA6BF');
  textAlign(CENTER, TOP);
  textSize(11);
  text('drag me', x, arena.y + 2);
  pop();
}

function drawRobot(midY) {
  const x = cmToX(robotCm);
  push();
  translate(x, midY);
  noStroke();
  fill(crashed ? '#C0392B' : '#3A4A56');
  rectMode(CENTER);
  rect(0, 0, 30, 34, 5);
  fill('#2C3A45');
  rect(-2, -20, 24, 8, 3);
  rect(-2, 20, 24, 8, 3);
  fill(STATES[state].color);
  triangle(15, -8, 15, 8, 26, 0);
  pop();
}

function drawPanel() {
  const x = canvasWidth * 0.63 + 8;
  const w = canvasWidth - x - margin;
  const y = TITLE_H;
  const h = drawHeight - TITLE_H - 12;
  const td = trueDistance();
  const thr = thresholdSlider.value();
  const blind = td < reading - 1;

  noStroke();
  fill('white');
  rect(x, y, w, h, 8);
  fill(STATES[state].color);
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('ROBOT STATE', x + 16, y + 16);
  fill(STATES[state].color);
  textSize(24);
  text(STATES[state].label, x + 16, y + 34);

  // The two numbers, deliberately side by side. When they disagree, the robot
  // is acting on information that is already out of date.
  fill('#8AA6BF');
  textSize(12);
  text('LAST SENSOR READING', x + 16, y + 78);
  fill('#2C3A45');
  textSize(26);
  text(nf(reading, 0, 0) + ' cm', x + 16, y + 96);

  fill('#8AA6BF');
  textSize(12);
  text('TRUE DISTANCE', x + 16, y + 138);
  fill(blind ? '#C0392B' : '#2C3A45');
  textSize(26);
  text(nf(td, 0, 0) + ' cm', x + 16, y + 156);

  if (blind) {
    noStroke();
    fill('#C0392B');
    textSize(13);
    text('The robot is ' + nf(reading - td, 0, 0) + ' cm closer than it ' +
         'knows — it has not polled since it last looked.',
         x + 16, y + 194, w - 32, 60);
  }

  fill('#4A5A68');
  textSize(13);
  const msg = crashed
    ? 'It hit the wall. With a ' + pollSlider.value() + ' ms polling ' +
      'interval the robot travels ' +
      nf(DRIVE_SPEED * pollSlider.value() / 1000, 0, 1) + ' cm between ' +
      'readings, so a ' + thr + ' cm threshold left no room. Raise the ' +
      'threshold or poll faster.'
    : 'Between polls the robot travels ' +
      nf(DRIVE_SPEED * pollSlider.value() / 1000, 0, 1) + ' cm blind. Your ' +
      'stop distance has to be bigger than that, or the loop cannot react in ' +
      'time.';
  text(msg, x + 16, y + h - 92, w - 32, 84);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Stop distance: ' + thresholdSlider.value() + ' cm', 10, drawHeight + 58);
  text('Poll every: ' + pollSlider.value() + ' ms', 10, drawHeight + 94);
}

function overWall() {
  if (!arena) return false;
  return abs(mouseX - cmToX(wallCm)) < 14 &&
         mouseY > arena.y && mouseY < arena.y + arena.h;
}

function mousePressed() { if (overWall()) draggingWall = true; }
function mouseReleased() { draggingWall = false; }

function mouseDragged() {
  if (!draggingWall) return;
  wallCm = constrain(xToCm(mouseX), robotCm + 6, ARENA_CM - 4);
}

function toggleSimulation() {
  isRunning = !isRunning;
  startButton.html(isRunning ? 'Pause' : 'Start');
  lastPollMs = millis();
  stateEnteredMs = millis();
}

function resetSimulation() {
  robotCm = 20;
  wallCm = 170;
  reading = ARENA_CM;
  state = 'DRIVE';
  crashed = false;
  stateEnteredMs = millis();
  lastPollMs = millis();
  thresholdSlider.value(20);
  pollSlider.value(100);
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  thresholdSlider.size(canvasWidth - sliderLeftMargin - margin);
  pollSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
