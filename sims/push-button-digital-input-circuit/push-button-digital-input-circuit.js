// Push Button Digital Input Circuit
// CANVAS_HEIGHT: 600
// Bloom: Apply (L3), verb "demonstrate"
//
// The standard "read a button" circuit: 5 V through a momentary switch into a
// sense node, with a 10 kOhm pull-down resistor holding that node at ground
// whenever the button is open. The input pin taps the sense node and draws
// essentially no current, which is why the pull-down is needed at all.
//
// Press and hold SW1 (click it, or hold the B key) and watch the readout.
// Remove the pull-down and the released state stops being a clean LOW.
//
// Honest note about the floating case: breadboard-lib pins an unconnected net
// to ~0 V through a tiny leakage conductance, because a solver has to answer
// something. A real floating pin does not do that -- it picks up whatever
// charge is nearby and reads back noise. The flicker below is drawn on purpose
// to show the real behaviour, and the readout says the measured node is
// undefined rather than pretending 0 V is the answer.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 100;     // 2 rows: buttons, then checkboxes
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const BOARD_TOP = 46;
const READOUT_HEIGHT = 96;
const COLS = 20;
const SUPPLY_V = 5;
const PULLDOWN_OHMS = 10000;
const HIGH_THRESHOLD = 2.5;  // volts; a 5 V logic input's rough switch point
const SENSE = 'h20';         // where the input pin actually taps the circuit

// ---- Controls --------------------------------------------------------------
let startButton, resetButton, pulldownCheckbox;
let isRunning = false;       // every MicroSim starts paused

// ---- Circuit state ---------------------------------------------------------
let pulldownPresent = true;
let flickerReading = false;  // the noisy value a floating pin reports
let lastFlickerMs = 0;

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

  pulldownCheckbox = createCheckbox(' Pull-down resistor connected', true);
  pulldownCheckbox.position(10, drawHeight + 46);
  pulldownCheckbox.changed(() => {
    pulldownPresent = pulldownCheckbox.checked();
    buildCircuit();
  });

  // Establish the column count before any address is parsed.
  bbLayout(margin, BOARD_TOP, 400, 300, COLS);
  buildCircuit();

  describe('A push button wired as a digital input on a solderless ' +
    'breadboard. Five volts reaches a sense node through the button, and a ' +
    '10 kilohm pull-down resistor ties that node to ground when the button is ' +
    'open. A readout box shows the input pin reading HIGH or LOW. Removing ' +
    'the pull-down resistor leaves the node floating and the released reading ' +
    'flickers instead of settling at LOW.');
}

function buildCircuit() {
  bbReset();

  bbBattery({pos: 'T+1', neg: 'T-1', volts: SUPPLY_V, label: 'BAT'});
  bbWire({a: 'T-19', b: 'B-19', color: 'black'});    // link the two - rails

  // 5 V rail -> SW1 (straddles the channel) -> sense node in rows f-j, col 7.
  // Column 7 and not 6: every sixth column is a rail-group gap with no rail
  // hole, so a jumper addressed to T+6 gets snapped to column 5 and renders as
  // a diagonal.
  bbWire({a: 'T+7', b: 'a7', color: 'red'});
  bbButton({a: 'e7', b: 'f7', color: 'red', label: 'SW1', key: 'b'});

  if (pulldownPresent) {
    bbResistor({a: 'j7', b: 'j13', ohms: PULLDOWN_OHMS, label: 'R1'});
    bbWire({a: 'j13', b: 'B-13', color: 'black'});
  }

  // The signal jumper out to the input pin. Column 20 is a dead end -- nothing
  // else is wired there -- so this branch carries no current, which is exactly
  // what a digital input does. Its dots stay still for the same reason.
  bbWire({a: 'h7', b: 'h20', color: 'green'});

  bbAddTrace({label: 'Sense node', get: () => bbVoltage(SENSE),
              color: 'seagreen', max: 5, unit: 'V'});
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
  text('Push Button Digital Input Circuit', canvasWidth / 2, 10);

  const boardW = canvasWidth - margin * 2;
  const boardH = drawHeight - BOARD_TOP - READOUT_HEIGHT;
  bbLayout(margin, BOARD_TOP, boardW, boardH, COLS);

  bbSolve(isRunning);
  bbDrawBoard();
  bbDrawParts();

  const pressed = bbPart('SW1').pressed;

  // The floating node only flickers while the sim is running; a paused sim
  // must hold still so a learner can read it.
  if (isRunning && !pulldownPresent && !pressed &&
      millis() - lastFlickerMs > 90) {
    flickerReading = random() < 0.45;
    lastFlickerMs = millis();
  }

  drawInputPinLead(pressed);
  drawReadout(pressed);

  cursor(bbHovering() ? HAND : ARROW);
}

// The input pin tap. Drawn as a plain lead rather than a bbWire because an
// input pin draws no measurable current -- animated dots would be a lie.
function drawInputPinLead(pressed) {
  const pin = bbPin(SENSE);
  const boxW = 96, boxH = 30;
  const bx = min(BB.x + BB.w + 16, canvasWidth - margin - boxW);
  const by = pin.y - boxH / 2;

  stroke('#3E9E6E');
  strokeWeight(3);
  noFill();
  line(pin.x, pin.y, bx, pin.y);

  noStroke();
  fill(readingIsHigh(pressed) ? '#3E9E6E' : '#5B7186');
  rect(bx, by, boxW, boxH, 5);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(13);
  text('INPUT PIN', bx + boxW / 2, by + boxH / 2);
}

function readingIsHigh(pressed) {
  if (pressed) return true;
  if (pulldownPresent) return bbVoltage(SENSE) > HIGH_THRESHOLD;
  return flickerReading;
}

function drawReadout(pressed) {
  const high = readingIsHigh(pressed);
  const floating = !pulldownPresent && !pressed;
  const y = drawHeight - READOUT_HEIGHT + 6;

  // The big HIGH/LOW box -- the thing the learner is actually reading.
  const boxW = 150, boxH = 44;
  noStroke();
  fill(high ? '#3E9E6E' : '#5B7186');
  rect(margin, y, boxW, boxH, 6);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(24);
  text(high ? 'HIGH' : 'LOW', margin + boxW / 2, y + boxH / 2);

  const tx = margin + boxW + 20;
  textAlign(LEFT, TOP);
  textSize(14);
  fill('black');
  text('Sense node: ' +
       (floating ? 'floating — undefined' : nf(bbVoltage(SENSE), 0, 2) + ' V'),
       tx, y + 2);

  fill('dimgray');
  textSize(13);
  let msg;
  if (pressed) {
    msg = 'The button connects the sense node straight to 5 V, so the pin ' +
          'reads a solid HIGH.';
  } else if (pulldownPresent) {
    msg = 'Button open: the 10 kΩ pull-down drains the node to 0 V, giving a ' +
          'clean LOW.';
  } else {
    msg = 'No pull-down: the node is connected to nothing, so the pin reads ' +
          'stray noise instead of a reliable LOW.';
  }
  text(msg, tx, y + 24, canvasWidth - tx - margin, 44);

  fill('dimgray');
  textSize(13);
  textAlign(LEFT, TOP);
  text('Click and hold SW1 on the board (or hold the B key).',
       margin, y + boxH + 6);
}

function toggleSimulation() {
  isRunning = !isRunning;
  startButton.html(isRunning ? 'Pause' : 'Start');
}

function resetSimulation() {
  pulldownPresent = true;
  pulldownCheckbox.checked(true);
  flickerReading = false;
  buildCircuit();
}

function mousePressed()  { bbMousePressed(); }
function mouseReleased() { bbReleaseAll(); }
function keyPressed()    { bbKeyPressed(); }
function keyReleased()   { bbKeyReleased(); }

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
