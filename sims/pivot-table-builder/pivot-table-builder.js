// Pivot Table Builder
// CANVAS_HEIGHT: 560
// Bloom: Apply (L3), verb "construct"
//
// Twenty rows of attendance on the left, the summary they produce on the right,
// and two dropdowns that decide what the summary is *about*.
//
// A pivot table is not a new dataset. It is the same twenty rows counted a
// different way, which is why the grand total never changes no matter what you
// pick -- it is always 20. Watching that number hold still while every other
// cell moves is the thing that makes pivots stop being magic.
//
// The chosen fields are highlighted in the raw rows as you change them, so the
// link between "the column I picked" and "the headers that appeared" is
// visible rather than inferred.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 480;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;
const FIELDS = ['Day of Week', 'Month', 'Student Initials'];

// ---- Controls --------------------------------------------------------------
let rowsSelect, colsSelect, resetButton;

// Twenty attendance records, deliberately unsorted, the way an export from a
// sign-in sheet actually arrives.
const ROWS = [
  ['Tue', 'Sep', 'AR'], ['Thu', 'Sep', 'BK'], ['Tue', 'Sep', 'CM'],
  ['Thu', 'Oct', 'AR'], ['Tue', 'Oct', 'DL'], ['Thu', 'Sep', 'AR'],
  ['Tue', 'Nov', 'BK'], ['Thu', 'Oct', 'CM'], ['Tue', 'Oct', 'AR'],
  ['Thu', 'Nov', 'DL'], ['Tue', 'Sep', 'BK'], ['Thu', 'Nov', 'AR'],
  ['Tue', 'Nov', 'CM'], ['Thu', 'Oct', 'BK'], ['Tue', 'Oct', 'CM'],
  ['Thu', 'Sep', 'DL'], ['Tue', 'Nov', 'AR'], ['Thu', 'Nov', 'BK'],
  ['Tue', 'Sep', 'DL'], ['Thu', 'Oct', 'DL']
];

// Fixed orders, so headers do not jump about between rebuilds.
const ORDER = {
  'Day of Week': ['Tue', 'Thu'],
  'Month': ['Sep', 'Oct', 'Nov'],
  'Student Initials': ['AR', 'BK', 'CM', 'DL']
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset to default');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  rowsSelect = createSelect();
  for (const f of FIELDS) rowsSelect.option(f);
  rowsSelect.selected('Day of Week');
  rowsSelect.position(228, drawHeight + 8);

  colsSelect = createSelect();
  for (const f of FIELDS) colsSelect.option(f);
  colsSelect.option('none');
  colsSelect.selected('Month');
  colsSelect.position(508, drawHeight + 8);

  describe('Twenty raw attendance rows on the left with day of week, month, ' +
    'and student initials, and the pivot table they produce on the right. Two ' +
    'selectors choose which field becomes the rows and which becomes the ' +
    'columns; the chosen fields are highlighted in the raw data and the grid ' +
    'rebuilds with recalculated counts, a grand total row, and a grand total ' +
    'column that always sums to twenty.');
}

function fieldIndex(name) { return FIELDS.indexOf(name); }

function draw() {
  updateCanvasSize();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Pivot Table Builder', canvasWidth / 2, 8);

  const split = canvasWidth * 0.40;
  drawRaw(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 12);
  drawPivot(split, TITLE_H, canvasWidth - split - margin,
            drawHeight - TITLE_H - 12);
  drawControlLabels();
}

function drawRaw(x, y, w, h) {
  const ri = fieldIndex(rowsSelect.value());
  const ci = fieldIndex(colsSelect.value());

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#2C3A45');
  textSize(15);
  text('Raw sign-in rows', x + 14, y + 12);
  textAlign(RIGHT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text(ROWS.length + ' rows', x + w - 14, y + 15);

  const colW = (w - 28) / 3;
  const rowH = min(19, (h - 66) / (ROWS.length + 1));
  const top = y + 40;

  // header
  textFont('monospace');
  textSize(min(11, rowH * 0.62));
  for (let f = 0; f < 3; f++) {
    const hx = x + 14 + f * colW;
    noStroke();
    fill(f === ri ? '#4A90D9' : f === ci ? '#F5A623' : '#EDF2F6');
    rect(hx, top, colW - 3, rowH, 2);
    fill(f === ri || f === ci ? 'white' : '#5B7186');
    textAlign(LEFT, CENTER);
    text(FIELDS[f].replace('Student ', ''), hx + 5, top + rowH / 2);
  }

  for (let r = 0; r < ROWS.length; r++) {
    const ry = top + (r + 1) * rowH + 2;
    for (let f = 0; f < 3; f++) {
      const hx = x + 14 + f * colW;
      noStroke();
      // The two chosen fields are tinted in every row, so the connection
      // between a dropdown and the grid headers is something you can see.
      if (f === ri) fill(74, 144, 217, 40);
      else if (f === ci) fill(245, 166, 35, 45);
      else fill(r % 2 ? '#F7FAFC' : 'white');
      rect(hx, ry, colW - 3, rowH - 1, 2);
      fill('#2C3A45');
      textAlign(LEFT, CENTER);
      text(ROWS[r][f], hx + 5, ry + rowH / 2);
    }
  }
  textFont('sans-serif');
}

function drawPivot(x, y, w, h) {
  const ri = fieldIndex(rowsSelect.value());
  const ci = colsSelect.value() === 'none' ? -1 : fieldIndex(colsSelect.value());

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#2C3A45');
  textSize(15);
  text('Pivot: count of sessions', x + 16, y + 12);

  const rowKeys = ORDER[FIELDS[ri]];
  const colKeys = ci < 0 ? ['Count'] : ORDER[FIELDS[ci]];

  // Count into the grid. Nothing is invented here -- every raw row lands in
  // exactly one cell, which is why the grand total is always 20.
  const grid = rowKeys.map(() => colKeys.map(() => 0));
  for (const rec of ROWS) {
    const r = rowKeys.indexOf(rec[ri]);
    const c = ci < 0 ? 0 : colKeys.indexOf(rec[ci]);
    if (r >= 0 && c >= 0) grid[r][c]++;
  }

  const labelW = min(150, w * 0.30);
  const cellW = (w - 32 - labelW) / (colKeys.length + 1);
  const cellH = min(38, (h - 96) / (rowKeys.length + 2));
  const top = y + 48;

  textFont('monospace');
  textSize(min(14, cellH * 0.42));

  // column headers
  for (let c = 0; c < colKeys.length; c++) {
    const cx = x + 16 + labelW + c * cellW;
    noStroke();
    fill('#F5A623');
    rect(cx, top, cellW - 3, cellH, 3);
    fill('white');
    textAlign(CENTER, CENTER);
    text(colKeys[c], cx + (cellW - 3) / 2, top + cellH / 2);
  }
  noStroke();
  fill('#5B7186');
  rect(x + 16 + labelW + colKeys.length * cellW, top, cellW - 3, cellH, 3);
  fill('white');
  textAlign(CENTER, CENTER);
  text('Total', x + 16 + labelW + colKeys.length * cellW + (cellW - 3) / 2,
       top + cellH / 2);

  // body
  let grand = 0;
  for (let r = 0; r < rowKeys.length; r++) {
    const ry = top + (r + 1) * cellH;
    noStroke();
    fill('#4A90D9');
    rect(x + 16, ry, labelW - 3, cellH - 2, 3);
    fill('white');
    textAlign(LEFT, CENTER);
    text(rowKeys[r], x + 24, ry + cellH / 2);

    let rowTotal = 0;
    for (let c = 0; c < colKeys.length; c++) {
      const cx = x + 16 + labelW + c * cellW;
      const v = grid[r][c];
      rowTotal += v;
      noStroke();
      fill(v === 0 ? '#F2F5F8' : '#E8F1FA');
      rect(cx, ry, cellW - 3, cellH - 2, 3);
      fill(v === 0 ? '#B8C4CE' : '#2C3A45');
      textAlign(CENTER, CENTER);
      text(v, cx + (cellW - 3) / 2, ry + cellH / 2);
    }
    grand += rowTotal;
    const tx = x + 16 + labelW + colKeys.length * cellW;
    noStroke();
    fill('#EDF2F6');
    rect(tx, ry, cellW - 3, cellH - 2, 3);
    fill('#2C3A45');
    textAlign(CENTER, CENTER);
    text(rowTotal, tx + (cellW - 3) / 2, ry + cellH / 2);
  }

  // grand total row
  const gy = top + (rowKeys.length + 1) * cellH;
  noStroke();
  fill('#5B7186');
  rect(x + 16, gy, labelW - 3, cellH - 2, 3);
  fill('white');
  textAlign(LEFT, CENTER);
  text('Total', x + 24, gy + cellH / 2);
  for (let c = 0; c < colKeys.length; c++) {
    let colTotal = 0;
    for (let r = 0; r < rowKeys.length; r++) colTotal += grid[r][c];
    const cx = x + 16 + labelW + c * cellW;
    fill('#EDF2F6');
    rect(cx, gy, cellW - 3, cellH - 2, 3);
    fill('#2C3A45');
    textAlign(CENTER, CENTER);
    text(colTotal, cx + (cellW - 3) / 2, gy + cellH / 2);
  }
  const gx = x + 16 + labelW + colKeys.length * cellW;
  fill('#2E7D4F');
  rect(gx, gy, cellW - 3, cellH - 2, 3);
  fill('white');
  textAlign(CENTER, CENTER);
  text(grand, gx + (cellW - 3) / 2, gy + cellH / 2);
  textFont('sans-serif');

  noStroke();
  fill(grand === ROWS.length ? '#2E7D4F' : '#C0392B');
  textAlign(LEFT, TOP);
  textSize(13);
  text('The grand total is ' + grand + ', and it is ' + grand +
       ' whichever fields you pick — a pivot re-counts the same rows, it does ' +
       'not create or lose any. If that number ever stops matching the raw ' +
       'row count, the pivot has dropped something.',
       x + 16, gy + cellH + 12, w - 32, (y + h) - (gy + cellH) - 20);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#4A90D9');
  text('Rows field:', 148, drawHeight + 22);
  fill('#F5A623');
  text('Columns field:', 400, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('The two tinted columns in the raw data are the fields you picked.',
       10, drawHeight + 58);
}

function resetSimulation() {
  rowsSelect.selected('Day of Week');
  colsSelect.selected('Month');
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
