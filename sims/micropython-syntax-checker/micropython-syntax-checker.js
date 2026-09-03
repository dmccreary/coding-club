// MicroPython Syntax Checker
// CANVAS_HEIGHT: 460
// Bloom: Remember (L1), verb "identify"
//
// Six short snippets. Three are fine, three carry the two mistakes that account
// for most of a beginner's first hour: a missing colon, and indentation that
// does not line up.
//
// The value for a mentor is speed. Both errors are trivially fixable once you
// have seen them, and agonising if you have not, so a two-minute pass through
// this before a session is the difference between "line 3 needs a colon" and
// five minutes of reading a traceback together.
//
// The two error names are worth learning apart: a missing colon is a
// SyntaxError (Python cannot even parse the line), while a misaligned body is
// an IndentationError (it parsed, but the block structure is ambiguous).

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
const RESULT_H = 96;
const LINE_H = 26;

// ---- Controls --------------------------------------------------------------
let nextButton, checkButton, resetButton;

// ---- State -----------------------------------------------------------------
let index = 0;
let checked = false;
let score = 0;
let attempted = 0;
let seen = [];

// badLine is a 0-based index into `code`, or -1 when the snippet is fine.
const SNIPPETS = [
  {
    code: ['from machine import Pin',
           'led = Pin(15, Pin.OUT)',
           'led.value(1)'],
    badLine: -1, error: null,
    note: 'Three straight statements, no blocks, nothing to indent. This runs.'
  },
  {
    code: ['for i in range(10)',
           '    print(i)'],
    badLine: 0, error: 'SyntaxError',
    note: 'A `for` line opens a block, and every line that opens a block ends ' +
          'in a colon. Without it Python cannot tell where the header stops, ' +
          'so it fails to parse the line at all — which is why this is a ' +
          'SyntaxError and not an IndentationError.'
  },
  {
    code: ['import time',
           '',
           'while True:',
           '    led.toggle()',
           '   time.sleep(0.5)'],
    badLine: 4, error: 'IndentationError',
    note: 'Line 4 is indented four spaces and line 5 is indented three. Python ' +
          'parsed both lines fine, but it cannot tell whether line 5 belongs ' +
          'to the loop or ends it. Mixing tabs and spaces produces exactly ' +
          'this, invisibly.'
  },
  {
    code: ['def blink(times):',
           '    for i in range(times):',
           '        led.toggle()',
           '        time.sleep(0.2)'],
    badLine: -1, error: null,
    note: 'Two nested blocks, each header ending in a colon and each body ' +
          'indented one more level. This is what correct nesting looks like.'
  },
  {
    code: ['if button.value() == 1',
           '    print("pressed")',
           'else:',
           '    print("not pressed")'],
    badLine: 0, error: 'SyntaxError',
    note: 'The `else:` on line 3 has its colon, which makes the missing one on ' +
          'line 1 easy to skim past. Python reports the first line it cannot ' +
          'parse, so the error points at line 1 — read the error line number, ' +
          'not the line that looks odd.'
  },
  {
    code: ['for pixel in range(8):',
           '    r = pixel * 30',
           '        g = 255 - r',
           '    show(r, g, 0)'],
    badLine: 2, error: 'IndentationError',
    note: 'Line 3 is indented deeper than line 2 for no reason — nothing on ' +
          'line 2 opened a new block. Python calls this an unexpected indent. ' +
          'Extra indentation is only legal directly after a line ending in a ' +
          'colon.'
  }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  checkButton = createButton('Check');
  checkButton.position(10, drawHeight + 8);
  checkButton.mousePressed(check);

  nextButton = createButton('Next snippet ▶');
  nextButton.position(74, drawHeight + 8);
  nextButton.mousePressed(nextSnippet);

  resetButton = createButton('Start over');
  resetButton.position(196, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  describe('A code panel showing one short MicroPython snippet at a time with ' +
    'line numbers. A check control marks the snippet valid, or highlights the ' +
    'offending line in red and names the error as either a SyntaxError from a ' +
    'missing colon or an IndentationError from misaligned lines. Six snippets ' +
    'cycle, three of them correct.');
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
  text('MicroPython Syntax Checker', canvasWidth / 2, 8);

  drawCode(margin, TITLE_H, canvasWidth - margin * 2,
           drawHeight - TITLE_H - RESULT_H - 8);
  drawResult(margin, drawHeight - RESULT_H, canvasWidth - margin * 2,
             RESULT_H - 10);
  drawControlLabels();
}

function drawCode(x, y, w, h) {
  const sn = SNIPPETS[index];

  noStroke();
  fill('#1E2A33');
  rect(x, y, w, h, 8);

  // Header bar with the filename, the way an editor shows it.
  fill('#2A3843');
  rect(x, y, w, 28, 8);
  rect(x, y + 18, w, 10);
  fill('#8AA6BF');
  textAlign(LEFT, CENTER);
  textSize(12);
  textFont('monospace');
  text('main.py — snippet ' + (index + 1) + ' of ' + SNIPPETS.length,
       x + 14, y + 15);

  const top = y + 42;
  for (let i = 0; i < sn.code.length; i++) {
    const ly = top + i * LINE_H;
    const bad = checked && sn.badLine === i;

    if (bad) {
      noStroke();
      fill(198, 40, 40, 130);
      rect(x + 6, ly - 3, w - 12, LINE_H - 3, 3);
    }

    noStroke();
    fill(bad ? '#FFC9C9' : '#5B7186');
    textAlign(RIGHT, TOP);
    textSize(13);
    text(i + 1, x + 40, ly);

    fill(bad ? '#FFE1E1' : '#D8E4EE');
    textAlign(LEFT, TOP);
    textSize(15);
    // A leading space is invisible on a dark background, so render the
    // indentation as visible guides -- which is the whole point here.
    drawCodeLine(sn.code[i], x + 54, ly);
  }
  textFont('sans-serif');
}

// Draws one line with its leading spaces shown as faint tick marks, so an
// indentation that is off by one is something you can see rather than count.
function drawCodeLine(src, x, y) {
  const lead = src.length - src.trimStart().length;
  const charW = textWidth(' ');
  push();
  stroke(120, 150, 175, 110);
  strokeWeight(1);
  for (let s = 0; s < lead; s++) {
    const gx = x + s * charW + charW * 0.5;
    line(gx, y + 4, gx, y + 15);
  }
  pop();
  text(src.trimStart(), x + lead * charW, y);
}

function drawResult(x, y, w, h) {
  const sn = SNIPPETS[index];

  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  if (!checked) {
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Decide whether this snippet runs. Press Check when you have ' +
         'committed to an answer — the two things to look for are a header ' +
         'line without a colon, and a body whose indentation does not line up.',
         x + 16, y + 14, w - 32, h - 24);
    return;
  }

  const ok = sn.badLine < 0;
  fill(ok ? '#3E9E6E' : '#D64545');
  rect(x, y, 6, h, 3);

  textAlign(LEFT, TOP);
  fill(ok ? '#2E7D4F' : '#C0392B');
  textSize(18);
  text(ok ? '✓ This snippet is valid'
          : '✗ ' + sn.error + ' on line ' + (sn.badLine + 1),
       x + 20, y + 12);

  fill('#2C3A45');
  textSize(13);
  text(sn.note, x + 20, y + 38, w - 40, h - 46);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Seen ' + seen.length + ' of ' + SNIPPETS.length, 10, drawHeight + 58);
  fill('dimgray');
  textSize(13);
  text('Three of the six are correct.', 160, drawHeight + 58);
}

function check() {
  if (checked) return;
  checked = true;
  if (!seen.includes(index)) {
    seen.push(index);
    attempted++;
  }
}

function nextSnippet() {
  index = (index + 1) % SNIPPETS.length;
  checked = false;
}

function resetSimulation() {
  index = 0;
  checked = false;
  seen = [];
  score = 0;
  attempted = 0;
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
