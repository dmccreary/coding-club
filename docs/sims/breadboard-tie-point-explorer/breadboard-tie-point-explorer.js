// Breadboard Tie Point Explorer
// CANVAS_HEIGHT: 640
// Bloom: Remember (L1), verb "identify"
//
// A breadboard's holes are already wired together under the plastic, and every
// first-time mistake on a club bench comes from guessing that wiring wrong.
// Click any hole and every hole electrically tied to it lights up.
//
// The three rules the highlight makes visible:
//
//   * A tie column is five holes, not ten. The center channel is a wall.
//   * Rows a-e in column 7 and rows f-j in column 7 are different nets.
//   * A power rail is one net running the whole length of the board.
//
// The board itself, its geometry, and its net naming come from
// breadboard-lib.js -- the same board the other circuit sims in this chapter
// use, so what a learner identifies here transfers directly.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 560;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const BOARD_TOP = 46;
const READOUT_HEIGHT = 90;
const COLS = 30;

const HIGHLIGHT = '#F5A623';   // the clicked net
const RAIL_TINT = '#4A90D9';   // every rail, from the Show all rails toggle

// ---- Controls --------------------------------------------------------------
let clearButton, railsCheckbox;

// ---- Selection state -------------------------------------------------------
let selected = null;           // {row, col} of the clicked hole

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  clearButton = createButton('Clear selection');
  clearButton.position(10, drawHeight + 8);
  clearButton.mousePressed(() => { selected = null; });

  railsCheckbox = createCheckbox(' Show all rails', false);
  railsCheckbox.position(10, drawHeight + 44);

  // No parts on this board: the wiring under the plastic is the whole lesson.
  bbLayout(margin, BOARD_TOP, 400, 300, COLS, {supply: false});
  bbReset();

  describe('A solderless breadboard with no components on it. Clicking any ' +
    'hole highlights every other hole electrically connected to it: the five ' +
    'holes of one tie column, or an entire power rail. A toggle highlights ' +
    'all four power rails at once in a second color. A label names the ' +
    'selection as a power rail or as a numbered column.');
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
  text('Breadboard Tie Point Explorer', canvasWidth / 2, 10);

  const boardH = drawHeight - BOARD_TOP - READOUT_HEIGHT;
  bbLayout(margin, BOARD_TOP, canvasWidth - margin * 2, boardH, COLS,
           {supply: false});

  bbDrawBoard();

  if (railsCheckbox.checked()) drawRailHighlight();
  if (selected) drawNetHighlight(bbNetOf(selected.row, selected.col));

  const hover = hitTest(mouseX, mouseY);
  if (hover) {
    noFill();
    stroke('#D64545');
    strokeWeight(2);
    circle(holeX(hover), bbRowY(hover.row), BB.pitch * 0.85);
    strokeWeight(1);
  }

  drawReadout(hover);
  cursor(hover ? HAND : ARROW);
}

// A rail hole's x is snapped: every sixth column has no rail hole on a real
// board, and bbDrawBoard skips those, so the highlight must skip them too.
function holeX(hole) {
  const col = bbIsRail(hole.row) ? bbSnapRailCol(hole.col) : hole.col;
  return bbColX(col);
}

function markHole(row, col) {
  const s = BB.pitch * 0.42;
  rect(bbColX(col) - s, bbRowY(row) - s, s * 2, s * 2, s * 0.5);
}

function drawNetHighlight(net) {
  noStroke();
  fill(HIGHLIGHT);
  for (let col = 1; col <= BB.cols; col++) {
    for (const row of ['T+', 'T-', 'a', 'b', 'c', 'd', 'e',
                       'f', 'g', 'h', 'i', 'j', 'B+', 'B-']) {
      if (bbIsRail(row) && bbSnapRailCol(col) !== col) continue;
      if (bbNetOf(row, col) === net) markHole(row, col);
    }
  }
}

function drawRailHighlight() {
  noStroke();
  fill(RAIL_TINT);
  for (let col = 1; col <= BB.cols; col++) {
    if (bbSnapRailCol(col) !== col) continue;
    for (const row of ['T+', 'T-', 'B+', 'B-']) markHole(row, col);
  }
}

// Nearest hole to the pointer, or null if the pointer is not near one.
function hitTest(mx, my) {
  if (my < BB.y || my > BB.y + bbHeight()) return null;

  let best = null;
  let bestD = BB.pitch * 0.7;
  for (let col = 1; col <= BB.cols; col++) {
    for (const row of ['T+', 'T-', 'a', 'b', 'c', 'd', 'e',
                       'f', 'g', 'h', 'i', 'j', 'B+', 'B-']) {
      if (bbIsRail(row) && bbSnapRailCol(col) !== col) continue;
      const d = dist(mx, my, bbColX(col), bbRowY(row));
      if (d < bestD) { bestD = d; best = {row: row, col: col}; }
    }
  }
  return best;
}

function drawReadout(hover) {
  const y = drawHeight - READOUT_HEIGHT + 6;
  noStroke();
  textAlign(LEFT, TOP);

  if (!selected) {
    fill('dimgray');
    textSize(15);
    text(hover
          ? 'Click hole ' + hover.row + hover.col + ' to light up everything '
            + 'it is connected to.'
          : 'Click any hole on the board to see its connected group.',
         margin, y);
    return;
  }

  const rail = bbIsRail(selected.row);
  const label = rail ? 'Power rail' : 'Column ' + selected.col;

  fill(HIGHLIGHT);
  textSize(22);
  text(label, margin, y);

  fill('black');
  textSize(14);
  let detail;
  if (rail) {
    const which = selected.row.charAt(0) === 'T' ? 'top' : 'bottom';
    const sign = selected.row.charAt(1) === '+' ? '+ (power)' : '− (ground)';
    detail = 'The ' + which + ' ' + sign + ' rail is a single net running the '
           + 'full length of the board. Every hole on it shares one voltage — '
           + 'and it is NOT connected to the rail on the other edge unless you '
           + 'add a jumper wire.';
  } else {
    const half = selected.row <= 'e' ? 'a–e (top half)' : 'f–j (bottom half)';
    const other = selected.row <= 'e' ? 'f–j' : 'a–e';
    detail = 'Rows ' + half + ' of column ' + selected.col + ' are five holes '
           + 'tied together — put two component legs here and they are wired '
           + 'together. Rows ' + other + ' of column ' + selected.col + ' are a '
           + 'separate net: the center channel does not connect across.';
  }
  text(detail, margin, y + 28, canvasWidth - margin * 2, 44);
}

function mousePressed() {
  const hit = hitTest(mouseX, mouseY);
  if (hit) selected = hit;
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
