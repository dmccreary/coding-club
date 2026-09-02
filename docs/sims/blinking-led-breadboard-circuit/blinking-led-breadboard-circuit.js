// Blinking LED Breadboard Circuit
// CANVAS_HEIGHT: 600
// Bloom: Apply (L3), verb "demonstrate"
//
// The circuit a student actually builds for their first blink sketch: the 5 V
// rail, a current-limiting resistor, an LED, and the jumper wires that close
// the loop.
//
// Two things are modelled deliberately:
//
//   PIN     a latching switch standing in for the microcontroller's output
//           driver. It connects the branch to the 5 V rail (HIGH) or leaves it
//           open (LOW). The rails stay energized either way, which is the
//           truth: toggling a pin does not power down the board.
//
//   JUMPER  the ground-return wire. The "Break the loop" button rebuilds the
//           circuit without it, so the LED stays dark no matter what the pin
//           does -- the closed-loop requirement, shown rather than asserted.
//
// Everything electrical comes from breadboard-lib.js: a real node-voltage
// solve, so the current reading is computed, not scripted.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 485;
let controlHeight = 115;     // 3 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 170;
let defaultTextSize = 16;

const BOARD_TOP = 46;
const READOUT_HEIGHT = 54;
const COLS = 20;
const SUPPLY_V = 5;
const SERIES_OHMS = 220;

// ---- Controls --------------------------------------------------------------
let startButton, resetButton, loopButton, autoCheckbox, scopeCheckbox;
let intervalSlider;
let isRunning = false;       // every MicroSim starts paused

// ---- Circuit state ---------------------------------------------------------
let loopIntact = true;
let pinHigh = true;
let lastFlipMs = 0;

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

  loopButton = createButton('Break the loop');
  loopButton.position(143, drawHeight + 8);
  loopButton.mousePressed(toggleLoop);

  autoCheckbox = createCheckbox(' Auto blink', true);
  autoCheckbox.position(10, drawHeight + 44);

  scopeCheckbox = createCheckbox(' Show scope', true);
  scopeCheckbox.position(120, drawHeight + 44);

  intervalSlider = createSlider(100, 2000, 500, 50);
  intervalSlider.position(sliderLeftMargin, drawHeight + 82);
  intervalSlider.size(canvasWidth - sliderLeftMargin - margin);

  // Establish the column count before any address is parsed.
  bbLayout(margin, BOARD_TOP, 400, 300, COLS);
  buildCircuit();

  describe('A blinking LED circuit on a solderless breadboard. A latching ' +
    'switch stands in for a microcontroller output pin and connects the LED ' +
    'branch to the 5 volt rail on an adjustable blink interval. A second ' +
    'control removes the ground-return jumper wire, which breaks the loop so ' +
    'the LED stays dark no matter what the output pin does.');
}

// Rebuilt whenever the jumper is added or removed. bbReset() clears parts and
// traces together, so the traces are re-added here rather than in setup().
function buildCircuit() {
  bbReset();

  bbBattery({pos: 'T+1', neg: 'T-1', volts: SUPPLY_V, label: 'BAT'});
  bbWire({a: 'T-19', b: 'B-19', color: 'black'});    // link the two - rails

  // 5 V rail -> PIN -> R1 -> LED -> ground
  bbWire({a: 'T+4', b: 'a4', color: 'red'});
  bbSwitch({a: 'e4', b: 'f4', label: 'PIN', closed: pinHigh});
  bbResistor({a: 'j4', b: 'j9', ohms: SERIES_OHMS, label: 'R1'});
  bbLED({anode: 'g9', cathode: 'g13', color: 'red', label: 'D1'});
  if (loopIntact) {
    bbWire({a: 'j13', b: 'B-13', color: 'black'});   // the removable jumper
  }

  bbAddTrace({label: 'LED current', get: () => bbCurrent('D1'),
              color: 'crimson', max: 25, unit: 'mA'});
  bbAddTrace({label: 'LED voltage', get: () => bbVoltageAcross('D1'),
              color: 'royalblue', max: 5, unit: 'V'});
}

function draw() {
  updateCanvasSize();

  const auto = autoCheckbox.checked();
  const pin = bbPart('PIN');
  if (auto) {
    // Timer drives the pin. Advance only while running so a paused sim holds.
    if (isRunning && millis() - lastFlipMs >= intervalSlider.value()) {
      pinHigh = !pinHigh;
      lastFlipMs = millis();
    }
    pin.closed = pinHigh;          // re-asserted every frame, so a stray click
  } else {                         // on the switch cannot fight the timer
    pinHigh = pin.closed;          // hand mode: the switch is the control
  }

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Blinking LED Breadboard Circuit', canvasWidth / 2, 10);

  const showScope = scopeCheckbox.checked() && canvasWidth >= 640;
  const boardW = showScope ? (canvasWidth - margin * 3) * 0.62
                           : (canvasWidth - margin * 2);
  const boardH = drawHeight - BOARD_TOP - READOUT_HEIGHT;
  bbLayout(margin, BOARD_TOP, boardW, boardH, COLS);

  bbSolve(isRunning);
  bbDrawBoard();
  bbDrawParts();

  if (isRunning) bbSampleTraces();

  if (showScope) {
    const sx = margin * 2 + boardW;
    bbDrawScope(sx, BOARD_TOP, canvasWidth - sx - margin, boardH,
                'LED Current and Voltage');
  }

  drawReadout();
  drawControlLabels();

  cursor(bbHovering() ? HAND : ARROW);
}

function drawReadout() {
  const mA = bbCurrent('D1');
  const y = drawHeight - READOUT_HEIGHT + 4;
  const narrow = canvasWidth < 620;

  noStroke();
  textAlign(LEFT, TOP);
  textSize(narrow ? 13 : defaultTextSize);
  const step = narrow ? 150 : 200;

  fill(pinHigh ? '#2E7D4F' : '#7A8A99');
  text('Output pin: ' + (pinHigh ? 'HIGH' : 'LOW'), margin, y);

  fill(loopIntact ? '#2E7D4F' : '#C0392B');
  text('Loop: ' + (loopIntact ? 'closed' : 'BROKEN'), margin + step, y);

  fill('black');
  text('LED current: ' + nf(mA, 0, 1) + ' mA', margin + step * 2, y);

  fill('dimgray');
  textSize(13);
  text(loopIntact
        ? 'Current flows only when the loop is closed AND the pin is HIGH.'
        : 'The ground-return jumper is gone, so no current flows however the '
          + 'pin is driven.',
       margin, y + 24, canvasWidth - margin * 2, 20);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Blink interval: ' + intervalSlider.value() + ' ms',
       10, drawHeight + 92);
}

function toggleSimulation() {
  isRunning = !isRunning;
  startButton.html(isRunning ? 'Pause' : 'Start');
  lastFlipMs = millis();
}

function toggleLoop() {
  loopIntact = !loopIntact;
  loopButton.html(loopIntact ? 'Break the loop' : 'Reconnect the jumper');
  buildCircuit();
}

function resetSimulation() {
  loopIntact = true;
  loopButton.html('Break the loop');
  pinHigh = true;
  autoCheckbox.checked(true);
  intervalSlider.value(500);
  lastFlipMs = millis();
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
  intervalSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
