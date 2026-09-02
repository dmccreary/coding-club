// Grant Budget Laptop Calculator
// CANVAS_HEIGHT: 500
// Bloom: Apply (L3), verb "calculate"
//
// Three numbers -- grant, unit price, student count -- and the arithmetic that
// turns them into a decision. Nothing here is hard; what is hard is doing it
// before the money is spent rather than after.
//
// The number worth staring at is the leftover. A grant that buys 6 machines at
// $450 with $300 left over has bought you nothing with that $300 unless you
// planned for it, and $300 is a robot kit, a year of consumables, or a spare
// device for the mentor. Every combination here produces a leftover, and asking
// "what is that going to be" is the part of budgeting people skip.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 385;
let controlHeight = 115;     // 3 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 190;
let defaultTextSize = 16;

const TITLE_H = 42;

const PLATFORMS = {
  'Chromebook — $250': 250,
  'Windows laptop — $450': 450,
  'macOS laptop — $950': 950,
  'Custom price': null
};

// ---- Controls --------------------------------------------------------------
let grantSlider, platformSelect, priceInput, studentsInput, resetButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset to defaults');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  platformSelect = createSelect();
  for (const name of Object.keys(PLATFORMS)) platformSelect.option(name);
  platformSelect.selected('Chromebook — $250');
  platformSelect.position(225, drawHeight + 8);

  priceInput = createInput('600', 'number');
  priceInput.size(70);
  priceInput.position(452, drawHeight + 8);

  studentsInput = createInput('12', 'number');
  studentsInput.size(56);
  studentsInput.position(612, drawHeight + 8);

  grantSlider = createSlider(500, 10000, 3000, 250);
  grantSlider.position(sliderLeftMargin, drawHeight + 46);
  grantSlider.size(canvasWidth - sliderLeftMargin - margin);

  describe('A grant budget calculator. A slider sets the grant amount, a ' +
    'selector picks a device platform with its per-unit price, and a number ' +
    'field sets the club\'s student count. A bar shows how many devices the ' +
    'grant buys against how many students are still without one, and readouts ' +
    'give the device count, the leftover budget, and the coverage.');
}

function unitPrice() {
  const p = PLATFORMS[platformSelect.value()];
  if (p !== null) return p;
  return max(1, int(priceInput.value()) || 1);
}

function studentCount() {
  return max(1, int(studentsInput.value()) || 1);
}

function draw() {
  updateCanvasSize();

  // Recomputed every frame rather than on change events: a number field driven
  // with the arrow keys does not always fire the events you would expect.
  const grant = grantSlider.value();
  const price = unitPrice();
  const students = studentCount();
  const devices = floor(grant / price);
  const leftover = grant - devices * price;
  const covered = min(devices, students);

  // The custom price field only means anything when Custom is selected.
  const custom = PLATFORMS[platformSelect.value()] === null;
  if (custom) priceInput.removeAttribute('disabled');
  else priceInput.attribute('disabled', '');

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Grant Budget Laptop Calculator', canvasWidth / 2, 8);

  const split = canvasWidth * 0.62;
  drawCoverage(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 12,
               devices, students, covered);
  drawNumbers(split, TITLE_H, canvasWidth - split - margin,
              drawHeight - TITLE_H - 12, grant, price, devices, leftover,
              students, covered);
  drawControlLabels(custom);
}

function drawCoverage(x, y, w, h, devices, students, covered) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#2C3A45');
  textSize(16);
  text('One device per student', x + 18, y + 14);

  // One tile per student, filled if a device covers them. Twelve tiles reads
  // faster than "12 of 12", and a shortfall is visible before it is read.
  const cols = min(students, 10);
  const rows = ceil(students / cols);
  const boxW = (w - 44) / cols;
  const boxH = min(boxW * 0.72, (h - 130) / max(rows, 1));
  const top = y + 46;

  for (let i = 0; i < students; i++) {
    const bx = x + 22 + (i % cols) * boxW;
    const by = top + floor(i / cols) * (boxH + 8);
    const has = i < covered;
    noStroke();
    fill(has ? '#3E9E6E' : '#E4EDF5');
    rect(bx, by, boxW - 8, boxH, 4);
    // a tiny laptop glyph on covered students
    if (has) {
      fill('white');
      rect(bx + boxW * 0.20, by + boxH * 0.26, boxW * 0.46, boxH * 0.34, 2);
      rect(bx + boxW * 0.13, by + boxH * 0.64, boxW * 0.60, boxH * 0.10, 2);
    }
  }

  const spare = max(0, devices - students);
  noStroke();
  fill('#4A5A68');
  textSize(14);
  const shortfall = max(0, students - devices);
  text(shortfall > 0
        ? shortfall + ' student' + (shortfall === 1 ? '' : 's') +
          ' still without a device'
        : spare > 0
          ? 'Every student covered, with ' + spare + ' spare device' +
            (spare === 1 ? '' : 's') + ' — worth having, because one will break'
          : 'Every student covered exactly, with no spare',
       x + 22, y + h - 62, w - 44, 50);
}

function drawNumbers(x, y, w, h, grant, price, devices, leftover, students,
                     covered) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill('#4A90D9');
  rect(x, y, w, 5, 3);

  const rows = [
    ['Grant', '$' + nfc(grant, 0)],
    ['Unit price', '$' + nfc(price, 0)],
    ['Devices', nfc(devices, 0)],
    ['Leftover', '$' + nfc(leftover, 0)],
    ['Coverage', covered + ' of ' + students]
  ];

  textAlign(LEFT, TOP);
  for (let i = 0; i < rows.length; i++) {
    const ry = y + 24 + i * 42;
    fill('#8AA6BF');
    textSize(13);
    text(rows[i][0], x + 18, ry);
    fill(i === 3 && leftover > 0 ? '#B8860B' : '#2C3A45');
    textFont('monospace');
    textSize(24);
    text(rows[i][1], x + 18, ry + 15);
    textFont('sans-serif');
  }

  fill('#4A5A68');
  textSize(13);
  text(leftover > 0
        ? 'That leftover is real money. ' +
          (leftover >= 250
            ? 'It is another device, or a robot kit, or a year of consumables — ' +
              'but only if you plan it before the grant report is written.'
            : 'Too little for another device, so decide now what it buys.')
        : 'The grant divides exactly. Rare, and worth double-checking against ' +
          'shipping and tax, which this figure does not include.',
       x + 18, y + 24 + rows.length * 42 + 4, w - 36,
       h - (24 + rows.length * 42 + 16));
}

function drawControlLabels(custom) {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Platform:', 155, drawHeight + 22);
  fill(custom ? '#2C3A45' : '#B8C4CE');
  text('$', 438, drawHeight + 22);
  fill('#2C3A45');
  text('Students:', 540, drawHeight + 22);

  textSize(defaultTextSize);
  text('Grant amount: $' + nfc(grantSlider.value(), 0), 10, drawHeight + 58);

  fill('dimgray');
  textSize(13);
  text('Prices exclude tax, shipping, and any management licence — add 10 to ' +
       '15 percent before you commit.', 10, drawHeight + 94);
}

function resetSimulation() {
  grantSlider.value(3000);
  platformSelect.selected('Chromebook — $250');
  priceInput.value('600');
  studentsInput.value('12');
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  grantSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
