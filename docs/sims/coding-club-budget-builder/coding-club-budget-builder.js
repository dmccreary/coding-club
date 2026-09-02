// Coding Club Budget Builder
// CANVAS_HEIGHT: 560
// Bloom: Apply (L3), verb "calculate"
//
// A first-year budget, built one line at a time, with the split that actually
// matters kept in front of you.
//
// Recurring versus one-time is the distinction the whole thing turns on. A
// $2,660 first year sounds like a $2,660 club, and it is not: $1,830 of that
// buys hardware once, and only $830 comes back every September. Get that
// backwards in a grant application and you either ask for too little to start
// or promise a funder a number you cannot sustain.
//
// Cost per student is the other number, and it is the one that converts a
// budget into an argument. "$221 per student in year one, $69 after that" is a
// sentence a principal can act on; "$2,660" is not.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 445;
let controlHeight = 115;     // 3 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

// ---- Controls --------------------------------------------------------------
let nameInput, amountInput, typeSelect, addButton, sampleButton, resetButton;
let studentsInput;

// ---- State -----------------------------------------------------------------
let items = [];
let removeBoxes = [];

// The worked example from the chapter, so the sim opens on a real budget
// rather than an empty form.
const SAMPLE = [
  {name: 'Internet / hosting', amount: 240, type: 'recurring'},
  {name: 'Club insurance', amount: 350, type: 'recurring'},
  {name: 'Snacks', amount: 180, type: 'recurring'},
  {name: 'Printing (challenge cards)', amount: 60, type: 'recurring'},
  {name: 'Chromebooks (4)', amount: 1000, type: 'one-time'},
  {name: 'Moving Rainbow kits (6)', amount: 300, type: 'one-time'},
  {name: 'Robot kits (4)', amount: 400, type: 'one-time'},
  {name: 'Storage cart', amount: 130, type: 'one-time'}
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  sampleButton = createButton('Load sample year-1 budget');
  sampleButton.position(10, drawHeight + 8);
  sampleButton.mousePressed(loadSample);

  resetButton = createButton('Clear all');
  resetButton.position(196, drawHeight + 8);
  resetButton.mousePressed(() => { items = []; });

  studentsInput = createInput('12', 'number');
  studentsInput.size(56);
  studentsInput.position(350, drawHeight + 8);

  nameInput = createInput('');
  nameInput.attribute('placeholder', 'line item name');
  nameInput.size(180);
  nameInput.position(10, drawHeight + 46);

  amountInput = createInput('', 'number');
  amountInput.attribute('placeholder', 'amount');
  amountInput.size(80);
  amountInput.position(200, drawHeight + 46);

  typeSelect = createSelect();
  typeSelect.option('recurring');
  typeSelect.option('one-time');
  typeSelect.position(292, drawHeight + 46);

  addButton = createButton('Add item');
  addButton.position(400, drawHeight + 46);
  addButton.mousePressed(addItem);

  loadSample();

  describe('A first-year club budget built from named line items, each marked ' +
    'recurring or one-time. A stacked bar shows the two totals side by side ' +
    'with a large cost-per-student readout, and the list of items sits beside ' +
    'it with a remove control on each row. Adding, removing, or reclassifying ' +
    'an item updates the totals immediately.');
}

function loadSample() {
  items = SAMPLE.map(o => ({name: o.name, amount: o.amount, type: o.type}));
}

function addItem() {
  const name = nameInput.value().trim();
  const amount = Number(amountInput.value());
  if (!name || !(amount > 0)) return;
  items.push({name: name, amount: amount, type: typeSelect.value()});
  nameInput.value('');
  amountInput.value('');
}

function totals() {
  let recurring = 0, onetime = 0;
  for (const it of items) {
    if (it.type === 'recurring') recurring += it.amount;
    else onetime += it.amount;
  }
  return {recurring: recurring, onetime: onetime,
          total: recurring + onetime};
}

function draw() {
  updateCanvasSize();

  const t = totals();
  const students = max(1, int(studentsInput.value()) || 1);

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Coding Club Budget Builder', canvasWidth / 2, 8);

  const split = canvasWidth * 0.54;
  drawChart(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 12,
            t, students);
  drawList(split, TITLE_H, canvasWidth - split - margin,
           drawHeight - TITLE_H - 12);
  drawControlLabels();

  cursor(removeUnderMouse() >= 0 ? HAND : ARROW);
}

function drawChart(x, y, w, h, t, students) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  const barTop = y + 40;
  const barH = h * 0.42;
  const maxV = max(t.recurring, t.onetime, 1);
  const bw = min(90, w * 0.20);
  const gap = w * 0.16;
  const cx = x + w / 2;

  const bars = [
    {label: 'Recurring', sub: 'every year', v: t.recurring, col: '#4A90D9',
     bx: cx - gap - bw},
    {label: 'One-time', sub: 'year one only', v: t.onetime, col: '#F5A623',
     bx: cx + gap}
  ];

  for (const b of bars) {
    const bh = (b.v / maxV) * barH;
    noStroke();
    fill(b.col);
    rect(b.bx, barTop + barH - bh, bw, bh, 4);
    fill('#2C3A45');
    textAlign(CENTER, BOTTOM);
    textSize(16);
    text('$' + nfc(b.v, 0), b.bx + bw / 2, barTop + barH - bh - 6);
    fill(b.col);
    textAlign(CENTER, TOP);
    textSize(14);
    text(b.label, b.bx + bw / 2, barTop + barH + 8);
    fill('#8AA6BF');
    textSize(11);
    text(b.sub, b.bx + bw / 2, barTop + barH + 26);
  }

  push();
  stroke('#D4DEE7');
  strokeWeight(1);
  line(x + 20, barTop + barH, x + w - 20, barTop + barH);
  pop();

  // The two numbers that turn a budget into an argument.
  const perStudent = t.total / students;
  const perStudentAfter = t.recurring / students;

  noStroke();
  textAlign(CENTER, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('COST PER STUDENT, YEAR ONE', x + w / 2, y + h - 108);
  fill('#2C3A45');
  textFont('monospace');
  textSize(34);
  text('$' + nf(perStudent, 0, 2), x + w / 2, y + h - 90);
  textFont('sans-serif');

  fill('#4A5A68');
  textSize(13);
  text('Total $' + nfc(t.total, 0) + ' across ' + students + ' students. ' +
       'After year one the hardware is bought, so the recurring cost alone is ' +
       '$' + nf(perStudentAfter, 0, 2) + ' per student — quote both numbers, ' +
       'never just the first.',
       x + 18, y + h - 48, w - 36, 44);
}

function drawList(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#2C3A45');
  textSize(15);
  text('Line items', x + 16, y + 12);
  textAlign(RIGHT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text(items.length + ' item' + (items.length === 1 ? '' : 's'),
       x + w - 16, y + 15);

  removeBoxes = [];
  if (items.length === 0) {
    fill('#8AA6BF');
    textAlign(LEFT, TOP);
    textSize(14);
    text('No items. Add one below, or load the sample year-1 budget.',
         x + 16, y + 46, w - 32);
    return;
  }

  const rowH = min(30, (h - 60) / items.length);
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const ry = y + 40 + i * rowH;
    const col = it.type === 'recurring' ? '#4A90D9' : '#F5A623';

    noStroke();
    fill(i % 2 ? '#F7FAFC' : 'white');
    rect(x + 10, ry, w - 20, rowH - 2, 3);
    fill(col);
    rect(x + 12, ry + 4, 4, rowH - 10, 2);

    fill('#2C3A45');
    textAlign(LEFT, CENTER);
    textSize(min(13, rowH * 0.5));
    text(it.name, x + 24, ry + rowH / 2, w - 130);

    textAlign(RIGHT, CENTER);
    fill('#2C3A45');
    text('$' + nfc(it.amount, 0), x + w - 40, ry + rowH / 2);

    // remove control
    const rx = x + w - 26, ry2 = ry + rowH / 2;
    removeBoxes.push({x: rx, y: ry2, i: i});
    const hot = removeUnderMouse() === i;
    noStroke();
    fill(hot ? '#D64545' : '#D4DEE7');
    circle(rx, ry2, 17);
    fill(hot ? 'white' : '#5B7186');
    textAlign(CENTER, CENTER);
    textSize(12);
    text('×', rx, ry2 - 1);
  }
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Students:', 280, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('Click the × on any row to remove it. Reclassify by removing and ' +
       're-adding with the other type.', 10, drawHeight + 94);
}

function removeUnderMouse() {
  for (const b of removeBoxes) {
    if (dist(mouseX, mouseY, b.x, b.y) < 11) return b.i;
  }
  return -1;
}

function mousePressed() {
  const i = removeUnderMouse();
  if (i >= 0) items.splice(i, 1);
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
