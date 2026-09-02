// Multimeter Usage Simulator
// CANVAS_HEIGHT: 620
// Bloom: Apply (L3), verb "demonstrate"
//
// Drag the two probes onto a real circuit and read what the meter says. The
// readings are measured, not scripted:
//
//   Voltage     the difference between the two probed nodes, straight out of
//               breadboard-lib's node-voltage solve.
//   Resistance  a real two-terminal ohmmeter: apply a 1 V test source across
//               the probes, solve the network with the battery removed, and
//               divide by the current it drives. That is what a DMM does.
//   Continuity  the same measurement with a beep threshold.
//
// Which means the hidden short is genuinely *found*, not announced: it is an
// ordinary low-resistance branch that only shows up when the learner puts the
// probes on the two rails in the right mode.
//
// The safety lesson is enforced rather than described. Ask for continuity or
// resistance while the circuit is live and the meter refuses.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 900;
let drawHeight = 540;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const BOARD_TOP = 44;
const METER_H = 172;
const COLS = 20;
const SUPPLY_V = 5;
const R_OHMS = 330;
const BEEP_OHMS = 30;        // a real DMM beeps somewhere around here

const MODES = ['Continuity', 'Voltage', 'Resistance'];

// ---- Controls --------------------------------------------------------------
let modeSelect, powerCheckbox, shortCheckbox, resetButton;

// ---- Probes ----------------------------------------------------------------
// Each probe holds a breadboard address, or null when it is resting on the
// meter rather than touching the circuit.
let probeRed   = {addr: null, x: 0, y: 0, placed: false};
let probeBlack = {addr: null, x: 0, y: 0, placed: false};
let dragging = null;

let shortFound = false;      // once the learner finds it, stop hiding it

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  modeSelect = createSelect();
  for (const m of MODES) modeSelect.option(m);
  modeSelect.selected('Continuity');
  modeSelect.position(130, drawHeight + 8);

  powerCheckbox = createCheckbox(' Circuit powered', false);
  powerCheckbox.position(250, drawHeight + 10);

  shortCheckbox = createCheckbox(' Hidden short (mentor)', false);
  shortCheckbox.position(10, drawHeight + 46);
  shortCheckbox.changed(() => { shortFound = false; buildCircuit(); });

  bbLayout(margin, BOARD_TOP, 400, 300, COLS);
  buildCircuit();

  describe('A multimeter and a simple breadboard circuit made of a five volt ' +
    'supply, a 330 ohm resistor, and an LED. A mode selector chooses ' +
    'continuity, voltage, or resistance, and two probes are dragged onto any ' +
    'hole on the board. The meter refuses to measure continuity or resistance ' +
    'while the circuit is powered. A mentor toggle adds a hidden short between ' +
    'the power rails for the learner to find with the meter.');
}

function buildCircuit() {
  bbReset();

  bbBattery({pos: 'T+1', neg: 'T-1', volts: SUPPLY_V, label: 'BAT',
             on: powerCheckbox ? powerCheckbox.checked() : false});
  bbWire({a: 'T+5',  b: 'a5',   color: 'red'});
  bbResistor({a: 'c5', b: 'c10', ohms: R_OHMS, label: 'R1'});
  bbLED({anode: 'a10', cathode: 'a15', color: 'red', label: 'D1'});
  bbWire({a: 'b15', b: 'T-15', color: 'black'});

  if (shortCheckbox && shortCheckbox.checked()) addHiddenShort();
}

// A stray strand bridging the two rails. It is a real branch in the netlist --
// the solver sees it, the ohmmeter finds it -- but it draws nothing until the
// learner locates it, which is the whole exercise.
function addHiddenShort() {
  const a = bbPin('T+17'), b = bbPin('T-17');
  bbAddPart({
    type: 'wire',
    label: 'SHORT',
    pins: [a, b],
    branches: function () {
      return [{a: this.pins[0].net, b: this.pins[1].net, R: 0.05, vf: 0,
               oneWay: false}];
    },
    render: function () {
      if (!shortFound) return;
      push();
      stroke('#D64545');
      strokeWeight(max(2, BB.pitch * 0.22));
      line(this.pins[0].x, this.pins[0].y, this.pins[1].x, this.pins[1].y);
      noStroke();
      fill('#D64545');
      textAlign(CENTER, BOTTOM);
      textSize(12);
      text('short!', (this.pins[0].x + this.pins[1].x) / 2,
           this.pins[0].y - 4);
      pop();
    }
  });
}

function draw() {
  updateCanvasSize();

  const bat = bbPart('BAT');
  if (bat) bat.on = powerCheckbox.checked();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Multimeter Usage Simulator', canvasWidth / 2, 8);

  const boardH = drawHeight - BOARD_TOP - METER_H - 10;
  bbLayout(margin, BOARD_TOP, canvasWidth - margin * 2, boardH, COLS);

  bbSolve(true);
  bbDrawBoard();
  bbDrawParts();

  const r = takeReading();
  drawMeter(r);
  drawProbes();
  drawControlLabels();

  cursor(dragging || overProbe(probeRed) || overProbe(probeBlack)
         ? HAND : ARROW);
}

// ---------------------------------------------------------------------------
// Measurement
// ---------------------------------------------------------------------------

// Two-terminal resistance by node analysis: hold the probes at 1 V and 0 V,
// solve, and read back the current the source has to supply. R = V / I.
//
// The battery is excluded because an ohmmeter supplies its own test current --
// that is exactly why measuring a live circuit is meaningless. Diodes are
// excluded too: a diode is not a resistance, and a real DMM reads one as OL in
// resistance mode.
function measureOhms(netA, netB) {
  if (netA === netB) return 0;

  const branches = [];
  for (const p of bbParts) {
    if (p.type === 'battery' || p.type === 'led' || p.type === 'diode') continue;
    for (const br of p.branches()) {
      branches.push({a: br.a, b: br.b, R: max(br.R, 1e-3), vf: 0});
    }
  }

  const V = bbSolveNodes(branches, {[netA]: 1, [netB]: 0});
  let I = 0;
  for (const br of branches) {
    const va = V[br.a] === undefined ? 0 : V[br.a];
    const vb = V[br.b] === undefined ? 0 : V[br.b];
    if (br.a === netA) I += (va - vb) / br.R;
    if (br.b === netA) I += (vb - va) / br.R;
  }
  return I > 1e-7 ? 1 / I : Infinity;
}

function formatOhms(r) {
  if (r === Infinity) return 'OL';
  if (r < 1) return nf(r, 0, 2) + ' Ω';
  if (r < 1000) return nf(r, 0, 1) + ' Ω';
  return nf(r / 1000, 0, 2) + ' kΩ';
}

function takeReading() {
  const mode = modeSelect.value();
  const live = powerCheckbox.checked();

  if (!probeRed.placed || !probeBlack.placed) {
    return {value: '- - -', tone: 'idle',
            note: 'Drag both probes onto holes on the board. The meter reads ' +
                  'between the two points you touch, and nowhere else.'};
  }

  const a = bbPin(probeRed.addr).net;
  const b = bbPin(probeBlack.addr).net;

  if (mode === 'Voltage') {
    const v = bbVoltage(probeRed.addr) - bbVoltage(probeBlack.addr);
    if (!live) {
      return {value: '0.00 V', tone: 'idle',
              note: 'Voltage is the one mode that needs the power on. Tick ' +
                    'Circuit powered and measure again.'};
    }
    return {value: nf(v, 0, 2) + ' V', tone: 'ok',
            note: voltageNote(probeRed.addr, probeBlack.addr, v)};
  }

  // Continuity and resistance both inject the meter's own current, so a live
  // circuit gives a meaningless answer at best and blows the meter's fuse at
  // worst. Refusing is the lesson.
  if (live) {
    return {value: 'STOP', tone: 'danger',
            note: 'Never measure ' + mode.toLowerCase() + ' on a live circuit. ' +
                  'The meter supplies its own test current, so the supply ' +
                  'fights it — the reading is wrong and the meter can be ' +
                  'damaged. Switch the power off first.'};
  }

  const r = measureOhms(a, b);

  if (mode === 'Resistance') {
    return {value: formatOhms(r), tone: r === Infinity ? 'idle' : 'ok',
            note: resistanceNote(a, b, r)};
  }

  // Continuity
  const beeps = r <= BEEP_OHMS;
  if (beeps && isRailPair(a, b)) shortFound = true;
  return {
    value: beeps ? formatOhms(r) : 'OL',
    beep: beeps,
    tone: beeps && isRailPair(a, b) ? 'danger' : (beeps ? 'ok' : 'idle'),
    note: continuityNote(a, b, r, beeps)
  };
}

function isRailPair(a, b) {
  const rails = ['TP', 'TN', 'BP', 'BN'];
  return rails.includes(a) && rails.includes(b) && a !== b;
}

function voltageNote(ra, rb, v) {
  if (abs(v) < 0.01) {
    return 'Both probes are at the same potential. Either they are on the same ' +
           'net, or nothing is driving a difference between them.';
  }
  if (nearParts(ra, rb, 'R1')) {
    return 'Across R1. Ohm\'s law predicts ' + nf(v, 0, 2) + ' V across ' +
           R_OHMS + ' Ω, so the current is ' + nf(abs(v) / R_OHMS * 1000, 0, 1) +
           ' mA — and that is the current through the LED too, because they are ' +
           'in series.';
  }
  if (nearParts(ra, rb, 'D1')) {
    return 'Across the LED. This is its forward voltage: a red LED drops about ' +
           '1.9 V and does not change much with current, which is why the ' +
           'resistor is the part that sets the brightness.';
  }
  return 'The difference in potential between the two probed points.';
}

function nearParts(ra, rb, label) {
  const p = bbPart(label);
  if (!p) return false;
  const nets = [bbPin(ra).net, bbPin(rb).net];
  return nets.includes(p.pins[0].net) && nets.includes(p.pins[1].net);
}

function resistanceNote(a, b, r) {
  if (r === 0) {
    return 'Both probes are in the same tie group, so you are measuring a piece ' +
           'of metal. Move one probe to the other side of a component.';
  }
  if (r === Infinity) {
    return 'OL means over limit: no path at all between these two points with ' +
           'the power off. Probing across the LED reads OL as well — a diode ' +
           'is not a resistor, and the ohmmeter cannot measure one.';
  }
  if (r > R_OHMS * 0.9 && r < R_OHMS * 1.1) {
    return 'That is R1. Its bands read orange-orange-brown, which is ' +
           R_OHMS + ' Ω — the meter and the colour code agree, which is the ' +
           'check worth doing before you build.';
  }
  return 'The resistance of the path between the two probed points.';
}

function continuityNote(a, b, r, beeps) {
  if (beeps && isRailPair(a, b)) {
    return 'BEEP — and it should not. The two power rails are connected to each ' +
           'other, which is a dead short across the supply. Find it and remove ' +
           'it before you connect power.';
  }
  if (beeps && a === b) {
    return 'BEEP. Same tie group: these holes were connected before you touched ' +
           'the board.';
  }
  if (beeps) {
    return 'BEEP. There is a near-zero-resistance path between these points — ' +
           'wire, or a closed switch, but nothing with resistance in it.';
  }
  return 'No beep. Either there is no path, or the path runs through a ' +
         'component: R1 is ' + R_OHMS + ' Ω, far above the beep threshold of ' +
         'about ' + BEEP_OHMS + ' Ω. Continuity answers "is this a wire?", not ' +
         '"is this connected?".';
}

// ---------------------------------------------------------------------------
// Drawing
// ---------------------------------------------------------------------------

function meterRect() {
  const w = min(330, canvasWidth - margin * 2);
  return {x: margin, y: drawHeight - METER_H, w: w, h: METER_H - 12};
}

function drawMeter(r) {
  const m = meterRect();
  push();
  noStroke();
  fill('#2C3A45');
  rect(m.x, m.y, m.w, m.h, 10);

  // Display
  const dx = m.x + 14, dy = m.y + 14, dw = m.w - 28, dh = 58;
  fill(r.tone === 'danger' ? '#4A1D1D' : '#1B2A20');
  rect(dx, dy, dw, dh, 5);

  fill(r.tone === 'danger' ? '#FF8A80'
       : r.tone === 'ok' ? '#7CE0A0' : '#8FA8B5');
  textAlign(RIGHT, CENTER);
  textSize(34);
  text(r.value, dx + dw - 12, dy + dh / 2 + 2);

  textAlign(LEFT, CENTER);
  textSize(12);
  fill('#8FA8B5');
  text(modeSelect.value().toUpperCase(), dx + 12, dy + 14);
  if (r.beep) {
    fill('#7CE0A0');
    text('♪ BEEP', dx + 12, dy + dh - 14);
  }

  // Mode dial. A drawn indicator, not a control -- the selector below the
  // canvas is the control, so screen readers and keyboards reach it too.
  const cx = m.x + 44, cy = m.y + dh + 52, rad = 26;
  stroke('#8FA8B5');
  strokeWeight(2);
  fill('#202C35');
  circle(cx, cy, rad * 2);
  const idx = MODES.indexOf(modeSelect.value());
  const ang = -PI * 0.8 + idx * PI * 0.3;
  // position ticks, so the pointer has something to point at
  stroke('#5B7186');
  strokeWeight(2);
  for (let i = 0; i < 3; i++) {
    const a = -PI * 0.8 + i * PI * 0.3;
    line(cx + cos(a) * rad * 0.95, cy + sin(a) * rad * 0.95,
         cx + cos(a) * rad * 1.2, cy + sin(a) * rad * 1.2);
  }
  stroke('#F5A623');
  strokeWeight(4);
  line(cx, cy, cx + cos(ang) * rad * 0.8, cy + sin(ang) * rad * 0.8);
  noStroke();
  fill('#8FA8B5');
  textAlign(CENTER, TOP);
  textSize(10);
  text('MODE', cx, cy + rad + 4);

  // Jacks the probe leads come out of
  drawJack(m.x + m.w - 34, m.y + m.h - 26, '#D64545');
  drawJack(m.x + m.w - 74, m.y + m.h - 26, '#333333');
  pop();

  // The interpretation line, beside the meter when there is room.
  const tx = m.x + m.w + 16;
  if (canvasWidth - tx > 180) {
    noStroke();
    fill(r.tone === 'danger' ? '#C0392B' : '#3A4A56');
    textAlign(LEFT, TOP);
    textSize(14);
    text(r.note, tx, m.y + 6, canvasWidth - tx - margin, m.h);
  }
}

function drawJack(x, y, col) {
  noStroke();
  fill('#111');
  circle(x, y, 16);
  fill(col);
  circle(x, y, 9);
}

function jackPos(which) {
  const m = meterRect();
  return which === 'red'
    ? {x: m.x + m.w - 34, y: m.y + m.h - 26}
    : {x: m.x + m.w - 74, y: m.y + m.h - 26};
}

function homePos(which) {
  const m = meterRect();
  return which === 'red'
    ? {x: m.x + m.w - 58, y: m.y + m.h - 58}
    : {x: m.x + m.w - 108, y: m.y + m.h - 58};
}

function drawProbes() {
  drawProbe(probeBlack, 'black', '#333333');
  drawProbe(probeRed, 'red', '#D64545');
}

function drawProbe(p, which, col) {
  const jack = jackPos(which);
  const tip = probeTip(p, which);

  // Lead, bowed so the two do not sit on top of each other.
  push();
  stroke(col);
  strokeWeight(3);
  noFill();
  const bow = p.placed ? (which === 'red' ? 40 : 70) : 0;
  const midX = (jack.x + tip.x) / 2;
  const midY = (jack.y + tip.y) / 2 + bow;
  beginShape();
  vertex(jack.x, jack.y);
  quadraticVertex(midX, midY, tip.x, tip.y);
  endShape();

  // Tip, drawn pointing back along the lead so a probe on a top rail does not
  // stab up through the title.
  const ang = atan2(tip.y - midY, tip.x - midX);
  push();
  translate(tip.x, tip.y);
  rotate(ang);
  noStroke();
  fill(col);
  triangle(0, 0, -15, -5, -15, 5);
  rect(-26, -4, 12, 8, 2);
  pop();
  pop();

  if (p.placed) {
    noStroke();
    fill(col);
    textAlign(CENTER, CENTER);
    textSize(12);
    // Label below the tip in the top half of the board, above it in the bottom
    // half — either way it stays inside the drawing area.
    const below = tip.y < BB.y + bbHeight() / 2;
    const ly = tip.y + (below ? 20 : -20);
    // A chip behind the address, or it disappears into the hole grid.
    const lw = textWidth(p.addr) + 10;
    fill(255, 255, 255, 225);
    rect(tip.x - lw / 2, ly - 8, lw, 16, 3);
    fill(col);
    text(p.addr, tip.x, ly);
  }
}

function probeTip(p, which) {
  if (p.placed) {
    const pin = bbPin(p.addr);
    return {x: pin.x, y: pin.y};
  }
  if (dragging === which) return {x: mouseX, y: mouseY};
  return homePos(which);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Mode:', 78, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('Power off for continuity and resistance.',
       min(canvasWidth - 260, 250), drawHeight + 62);
}

// ---------------------------------------------------------------------------
// Interaction
// ---------------------------------------------------------------------------

function nearestHole(mx, my) {
  if (my < BB.y - BB.pitch || my > BB.y + bbHeight() + BB.pitch) return null;
  let best = null, bestD = BB.pitch * 0.8;
  for (let col = 1; col <= BB.cols; col++) {
    for (const row of ['T+', 'T-', 'a', 'b', 'c', 'd', 'e',
                       'f', 'g', 'h', 'i', 'j', 'B+', 'B-']) {
      if (bbIsRail(row) && bbSnapRailCol(col) !== col) continue;
      const d = dist(mx, my, bbColX(col), bbRowY(row));
      if (d < bestD) { bestD = d; best = row + col; }
    }
  }
  return best;
}

function overProbe(p) {
  const which = p === probeRed ? 'red' : 'black';
  const tip = probeTip(p, which);
  return dist(mouseX, mouseY, tip.x, tip.y - 20) < 22;
}

function mousePressed() {
  if (overProbe(probeRed)) { dragging = 'red'; probeRed.placed = false; return; }
  if (overProbe(probeBlack)) { dragging = 'black'; probeBlack.placed = false; }
}

function mouseReleased() {
  if (!dragging) return;
  const p = dragging === 'red' ? probeRed : probeBlack;
  const hole = nearestHole(mouseX, mouseY);
  if (hole) { p.addr = hole; p.placed = true; }
  dragging = null;
}

function resetSimulation() {
  probeRed.placed = false;
  probeBlack.placed = false;
  dragging = null;
  shortFound = false;
  modeSelect.selected('Continuity');
  powerCheckbox.checked(false);
  shortCheckbox.checked(false);
  buildCircuit();
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
