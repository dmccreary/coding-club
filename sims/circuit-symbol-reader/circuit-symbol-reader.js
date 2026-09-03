// Circuit Symbol Reader
// CANVAS_HEIGHT: 460
// Bloom: Remember (L1), verb "identify"
//
// Five symbols. That is the whole vocabulary needed to read every schematic in
// this book, and a mentor who has to look one up mid-session has lost the room.
//
// Flashcards are the right shape for a Remember-level objective: one item at a
// time, an answer that stays hidden until you commit, and a score across a full
// pass so "I know these" becomes something you can check rather than assume.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 380;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

// ---- Controls --------------------------------------------------------------
let prevButton, flipButton, nextButton, quizCheckbox, answerSelect, checkButton;

// ---- State -----------------------------------------------------------------
let index = 0;
let flipped = false;
let quizMode = false;
let score = 0;
let attempted = 0;
let seen = [];               // which cards have been answered this pass
let lastResult = null;       // 'right' | 'wrong' | null

const SYMBOLS = [
  {
    name: 'Battery',
    role: 'Supplies the voltage that pushes current round the circuit. The ' +
          'long thin line is the positive terminal, the short fat one is ' +
          'negative.',
    tip: 'Count the line pairs: each pair is one cell. Two pairs drawn means a ' +
         'battery of cells, not a single cell.',
    draw: drawBatterySymbol
  },
  {
    name: 'Resistor',
    role: 'Limits how much current flows. Every LED in this book has one in ' +
          'series with it, and without it the LED burns out.',
    tip: 'This book draws the IEC rectangle. American schematics use a zigzag ' +
         'for the same part — both mean resistor.',
    draw: drawResistorSymbol
  },
  {
    name: 'LED',
    role: 'Emits light when current flows through it, and only conducts in one ' +
          'direction. The two small arrows are what separate it from a plain ' +
          'diode.',
    tip: 'The triangle points the way current flows: in at the flat back, out ' +
         'through the point, which is stopped by the bar.',
    draw: drawLedSymbol
  },
  {
    name: 'Switch',
    role: 'Opens or closes the circuit. Drawn open, which is the state that ' +
          'stops current — a schematic shows a switch in its resting position.',
    tip: 'A gap you can see is a gap current cannot cross. If a circuit does ' +
         'nothing, look for a switch drawn open.',
    draw: drawSwitchSymbol
  },
  {
    name: 'Ground',
    role: 'The 0 V reference every other voltage is measured against. Every ' +
          'ground symbol on a schematic is the same electrical point, however ' +
          'far apart they are drawn.',
    tip: 'Grounds are how schematics avoid drawing long return wires. Two ' +
         'ground symbols are connected even with no line between them.',
    draw: drawGroundSymbol
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  prevButton = createButton('◀ Previous');
  prevButton.position(10, drawHeight + 8);
  prevButton.mousePressed(() => step(-1));

  flipButton = createButton('Flip');
  flipButton.position(107, drawHeight + 8);
  flipButton.mousePressed(() => { flipped = !flipped; });

  nextButton = createButton('Next ▶');
  nextButton.position(158, drawHeight + 8);
  nextButton.mousePressed(() => step(1));

  quizCheckbox = createCheckbox(' Quiz me', false);
  quizCheckbox.position(240, drawHeight + 10);
  quizCheckbox.changed(toggleQuiz);

  answerSelect = createSelect();
  answerSelect.option('— choose —');
  for (const s of SYMBOLS) answerSelect.option(s.name);
  answerSelect.position(10, drawHeight + 46);

  checkButton = createButton('Check answer');
  checkButton.position(140, drawHeight + 46);
  checkButton.mousePressed(checkAnswer);

  syncQuizControls();

  describe('A flashcard trainer for the five schematic symbols used in this ' +
    'book: battery, resistor, LED, switch, and ground. One large symbol is ' +
    'shown at a time; Flip reveals its name and what it does in a circuit. A ' +
    'quiz mode hides the name, asks the learner to pick it from a list, and ' +
    'keeps a score across a full pass through all five.');
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
  text('Circuit Symbol Reader', canvasWidth / 2, 8);

  drawCard(margin, TITLE_H, canvasWidth - margin * 2,
           drawHeight - TITLE_H - 34);
  drawProgress();
  drawControlLabels();
}

function drawCard(x, y, w, h) {
  const sym = SYMBOLS[index];
  const showAnswer = flipped;

  noStroke();
  fill(0, 0, 0, 18);
  rect(x + 3, y + 4, w, h, 12);
  fill('white');
  rect(x, y, w, h, 12);
  fill(showAnswer ? '#3E9E6E' : '#4A90D9');
  rect(x, y, w, 6, 3);

  // The symbol sits on the left half when the answer is showing, and centred
  // when it is not -- so an unflipped card is nothing but the symbol.
  const symX = showAnswer ? x + w * 0.24 : x + w / 2;
  const symSize = min(150, h * 0.52, w * 0.32);
  push();
  translate(symX, y + h * (showAnswer ? 0.46 : 0.48));
  sym.draw(symSize);
  pop();

  if (!showAnswer) {
    noStroke();
    fill('#8AA6BF');
    textAlign(CENTER, BOTTOM);
    textSize(14);
    text(quizMode ? 'Pick the name below, then press Check answer.'
                  : 'Press Flip to see what this is.',
         x + w / 2, y + h - 16);
    return;
  }

  const tx = x + w * 0.46;
  const tw = w - (tx - x) - 26;
  noStroke();
  textAlign(LEFT, TOP);
  fill('#2E7D4F');
  textSize(26);
  text(sym.name, tx, y + 28);

  fill('black');
  textSize(15);
  text(sym.role, tx, y + 66, tw);

  fill('#4A5A68');
  textSize(13);
  text('Reading it: ' + sym.tip, tx, y + 150, tw, h - 166);
}

function drawProgress() {
  const y = drawHeight - 24;
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#5B7186');
  text('Card ' + (index + 1) + ' of ' + SYMBOLS.length, margin, y);

  // Dots, so a full pass is visible as progress rather than a number.
  const dotX = margin + 100;
  for (let i = 0; i < SYMBOLS.length; i++) {
    fill(i === index ? '#4A90D9' : (seen.includes(i) ? '#B8C4CE' : '#E4EDF5'));
    circle(dotX + i * 18, y, 11);
  }

  if (!quizMode) return;

  textAlign(RIGHT, CENTER);
  fill('#2C3A45');
  textSize(15);
  text('Score ' + score + ' / ' + attempted, canvasWidth - margin, y);

  if (lastResult) {
    textAlign(CENTER, CENTER);
    fill(lastResult === 'right' ? '#2E7D4F' : '#C0392B');
    text(lastResult === 'right' ? '✓ correct' : '✗ not quite',
         canvasWidth / 2, y);
  }
}

function drawControlLabels() {
  if (quizMode) return;
  noStroke();
  fill('dimgray');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('Turn on Quiz me to be asked instead of told.', 10, drawHeight + 62);
}

// ---------------------------------------------------------------------------
// Symbols. Each draws centred on the origin, scaled to fit a box of size `s`.
// ---------------------------------------------------------------------------

function symbolStroke(s) {
  stroke('#2C3A45');
  strokeWeight(max(2, s * 0.022));
  noFill();
}

function drawBatterySymbol(s) {
  symbolStroke(s);
  const half = s * 0.5;
  line(-half, 0, -s * 0.18, 0);
  line(s * 0.18, 0, half, 0);
  // two cells: long-short, long-short
  const xs = [-s * 0.18, -s * 0.06, s * 0.06, s * 0.18];
  for (let i = 0; i < 4; i++) {
    const tall = i % 2 === 0 ? s * 0.30 : s * 0.16;
    strokeWeight(i % 2 === 0 ? max(2, s * 0.022) : max(3, s * 0.05));
    line(xs[i], -tall, xs[i], tall);
  }
  strokeWeight(max(2, s * 0.022));
  noStroke();
  fill('#5B7186');
  textAlign(CENTER, BOTTOM);
  textSize(max(11, s * 0.11));
  text('+', -s * 0.18, -s * 0.34);
  text('−', s * 0.18, -s * 0.34);
}

function drawResistorSymbol(s) {
  symbolStroke(s);
  line(-s * 0.5, 0, -s * 0.28, 0);
  line(s * 0.28, 0, s * 0.5, 0);
  fill('white');
  rect(-s * 0.28, -s * 0.15, s * 0.56, s * 0.30, s * 0.02);
}

function drawLedSymbol(s) {
  symbolStroke(s);
  line(-s * 0.5, 0, -s * 0.20, 0);
  line(s * 0.20, 0, s * 0.5, 0);
  fill('white');
  triangle(-s * 0.20, -s * 0.22, -s * 0.20, s * 0.22, s * 0.16, 0);
  noFill();
  strokeWeight(max(3, s * 0.04));
  line(s * 0.16, -s * 0.24, s * 0.16, s * 0.24);
  // the two arrows that make it a light-emitting diode
  strokeWeight(max(2, s * 0.02));
  stroke('#E8833A');
  for (let i = 0; i < 2; i++) {
    const ox = -s * 0.02 + i * s * 0.16;
    const x1 = ox, y1 = -s * 0.30, x2 = ox + s * 0.14, y2 = -s * 0.48;
    line(x1, y1, x2, y2);
    line(x2, y2, x2 - s * 0.09, y2 + s * 0.02);
    line(x2, y2, x2 - s * 0.02, y2 + s * 0.09);
  }
}

function drawSwitchSymbol(s) {
  symbolStroke(s);
  line(-s * 0.5, 0, -s * 0.22, 0);
  line(s * 0.22, 0, s * 0.5, 0);
  // the blade, drawn lifted: a switch is shown in its resting state
  line(-s * 0.22, 0, s * 0.14, -s * 0.26);
  noStroke();
  fill('#2C3A45');
  circle(-s * 0.22, 0, s * 0.07);
  circle(s * 0.22, 0, s * 0.07);
}

function drawGroundSymbol(s) {
  symbolStroke(s);
  line(0, -s * 0.40, 0, -s * 0.05);
  const widths = [0.40, 0.26, 0.13];
  for (let i = 0; i < 3; i++) {
    const y = -s * 0.05 + i * s * 0.13;
    line(-s * widths[i], y, s * widths[i], y);
  }
}

// ---------------------------------------------------------------------------
// Navigation and quiz
// ---------------------------------------------------------------------------

function step(d) {
  index = (index + d + SYMBOLS.length) % SYMBOLS.length;
  flipped = false;
  lastResult = null;
  answerSelect.selected('— choose —');
}

function toggleQuiz() {
  quizMode = quizCheckbox.checked();
  score = 0;
  attempted = 0;
  seen = [];
  index = 0;
  flipped = false;
  lastResult = null;
  answerSelect.selected('— choose —');
  syncQuizControls();
}

// Quiz mode hides Flip so the answer cannot be peeked at before committing.
function syncQuizControls() {
  if (quizMode) {
    answerSelect.show();
    checkButton.show();
    flipButton.hide();
  } else {
    answerSelect.hide();
    checkButton.hide();
    flipButton.show();
  }
}

function checkAnswer() {
  if (!quizMode || flipped) return;
  const picked = answerSelect.value();
  if (picked === '— choose —') return;

  // Each card counts once per pass, so cycling back and re-answering cannot
  // inflate the score.
  if (!seen.includes(index)) {
    seen.push(index);
    attempted++;
    if (picked === SYMBOLS[index].name) score++;
  }
  lastResult = picked === SYMBOLS[index].name ? 'right' : 'wrong';
  flipped = true;
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
