// The Club Improvement Cycle - step-through MicroSim
// CANVAS_HEIGHT: 610
// Bloom: Understand (L2), verb "explain"
// The learner steps one worked example (a wiring problem seen in Session #4)
// all the way around the loop: session -> post-event note -> lessons learned
// log -> club evolution -> next session. Nothing animates on its own; the
// learner advances each stage so they can read the data that actually moves.

// ---------- canvas geometry ----------
let containerWidth;
let canvasWidth = 400;
// Drawing region: 350px cycle diagram on top + 215px data panel below it
let cycleHeight = 350;
let panelHeight = 215;
let drawHeight = cycleHeight + panelHeight;
let controlHeight = 45;
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 25;
let defaultTextSize = 16;

// ---------- brand palette (fixed by the book's style guide) ----------
// Sky blue = an inactive stage, amber = the stage currently being examined.
const SKY_BLUE = '#4A90D9';
const AMBER = '#F5A623';

// ---------- the worked example ----------
// One array of stage objects, so this same sim structure can be re-pointed at
// a different worked example by editing only this data.
const stages = [
  {
    node: 0,
    heading: 'Stage 1 - Session Happens',
    lines: ['Session #4: LED wiring step took 22 minutes,',
            'twice as long as planned.'],
    caption: 'Something observable happens in the room. Nothing is recorded yet.'
  },
  {
    node: 1,
    heading: 'Stage 2 - Post-Event Notes',
    lines: ['Mentor note, typed that night:',
            '"Wiring confusing again -- 3 of 5 students',
            'reversed polarity"'],
    caption: 'One mentor turns the observation into a written note within a day.'
  },
  {
    node: 2,
    heading: 'Stage 3 - Lessons Learned Log',
    log: [
      { text: 'Session 1: "Two students wired the LED backwards."', match: true },
      { text: 'Session 2: "Had to re-explain long leg = positive."', match: true },
      { text: 'Session 2: "Ran out of jumper wires before the last pair."', match: false },
      { text: 'Session 3: "Polarity confusion again, cost 15 min."', match: true },
      { text: 'Session 3: "Snack break ran long, started 10 minutes late."', match: false },
      { text: 'Session 4: "Wiring confusing again -- 3 of 5 reversed polarity."', match: true }
    ],
    caption: 'Four of these six notes say the same thing. One is an anecdote; four is a pattern.'
  },
  {
    node: 3,
    heading: 'Stage 4 - Club Evolution',
    lines: ['Decision: starting Session 5, wiring diagrams get',
            'color-coded stickers on each wire.'],
    caption: 'The pattern in the log becomes a structural change to how the club runs.'
  },
  {
    node: 0,
    heading: 'Back to Stage 1 - Session Happens',
    lines: ['Session #5: wiring step took 9 minutes.',
            'The color-coded stickers are now part of the plan.'],
    caption: 'The loop closes. The next session starts from an improved baseline.'
  }
];

const nodeLabels = [
  ['Session', 'Happens'],
  ['Post-Event', 'Notes'],
  ['Lessons', 'Learned Log'],
  ['Club', 'Evolution']
];

// ---------- state ----------
let stageIndex = 0;
let prevNode = 0;
let transitionStart = -1;   // millis() when the highlight started moving
const TRANSITION_MS = 300;

// node screen positions, recomputed every frame so the sim stays responsive
let nodePos = [];
let cx, cy, radiusX, radiusY, nodeW, nodeH;

// controls
let prevButton, nextButton, resetButton;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  prevButton = createButton('Previous');
  prevButton.position(10, drawHeight + 10);
  prevButton.mousePressed(goPrevious);

  nextButton = createButton('Next');
  nextButton.position(95, drawHeight + 10);
  nextButton.mousePressed(goNext);

  resetButton = createButton('Reset');
  resetButton.position(155, drawHeight + 10);
  resetButton.mousePressed(goReset);

  describe('A four-stage club improvement cycle. Step through one worked example ' +
           'as a session observation becomes a post-event note, accumulates in a ' +
           'lessons learned log, and produces a change to how the club runs.');
}

function draw() {
  updateCanvasSize();
  layoutNodes();

  // drawing region
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // control region
  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  drawTitle();
  drawArrows();
  drawNodes();
  drawTravellingDot();
  drawDataPanel();
  drawControlLabel();
}

function drawTitle() {
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('The Club Improvement Cycle', canvasWidth / 2, 10);
}

// Recompute node centres so the diagram scales with the container width.
function layoutNodes() {
  cx = canvasWidth / 2;
  cy = 210;
  nodeW = constrain(canvasWidth * 0.24, 130, 200);
  nodeH = 50;
  radiusX = constrain(canvasWidth * 0.26, 95, 240);
  radiusY = 115;
  // 0 = top, 1 = right, 2 = bottom, 3 = left; flow runs clockwise
  nodePos = [
    { x: cx, y: cy - radiusY },
    { x: cx + radiusX, y: cy },
    { x: cx, y: cy + radiusY },
    { x: cx - radiusX, y: cy }
  ];
}

// Point on the layout ellipse at the given angle, in degrees.
function ellipsePoint(angleDeg) {
  const a = radians(angleDeg);
  return { x: cx + radiusX * cos(a), y: cy + radiusY * sin(a) };
}

// Curved one-way arrows between consecutive stages, drawn on the ellipse the
// four nodes sit on. The gap at each end keeps the arc clear of the node boxes.
function drawArrows() {
  const angles = [-90, 0, 90, 180];
  for (let i = 0; i < 4; i++) {
    const start = angles[i] + 28;
    const end = angles[i] + 90 - 28;
    stroke('#8AA9C4');
    strokeWeight(2.5);
    noFill();
    beginShape();
    for (let t = 0; t <= 1.0001; t += 0.05) {
      const p = ellipsePoint(lerp(start, end, t));
      vertex(p.x, p.y);
    }
    endShape();
    // arrowhead at the far end, aimed along the arc
    const tip = ellipsePoint(end);
    const just = ellipsePoint(end - 5);
    drawArrowHead(just.x, just.y, tip.x, tip.y, '#8AA9C4');
  }
}

function drawArrowHead(fromX, fromY, toX, toY, col) {
  const a = atan2(toY - fromY, toX - fromX);
  push();
  translate(toX, toY);
  rotate(a);
  noStroke();
  fill(col);
  triangle(0, 0, -11, -5, -11, 5);
  pop();
}

function drawNodes() {
  const activeNode = currentActiveNode();
  const logCount = notesInLog();

  for (let i = 0; i < 4; i++) {
    const p = nodePos[i];
    const isActive = (i === activeNode);

    stroke(isActive ? '#B87B12' : '#2E6BA8');
    strokeWeight(2);
    fill(isActive ? AMBER : SKY_BLUE);
    rectMode(CENTER);
    rect(p.x, p.y, nodeW, nodeH, 10);
    rectMode(CORNER);

    noStroke();
    fill(isActive ? 'black' : 'white');
    textAlign(CENTER, CENTER);
    textSize(16);
    const label = nodeLabels[i];
    text(label[0], p.x, p.y - 9);
    text(label[1], p.x, p.y + 9);

    // counter badge on the Lessons Learned Log node
    if (i === 2) {
      const bx = p.x + nodeW / 2 - 6;
      const by = p.y + nodeH / 2 - 4;
      stroke('white');
      strokeWeight(2);
      fill('#2E6BA8');
      circle(bx, by, 26);
      noStroke();
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(13);
      text(logCount, bx, by);
    }
  }
}

// During a stage change, a small amber dot travels along the arc so the learner
// sees which way the data moved. It runs for 300ms and then stops.
function drawTravellingDot() {
  if (transitionStart < 0) return;
  const t = (millis() - transitionStart) / TRANSITION_MS;
  if (t >= 1) {
    transitionStart = -1;
    return;
  }
  const angles = [-90, 0, 90, 180];
  const from = angles[prevNode];
  let to = angles[currentActiveNode()];
  // always travel the short way round, in the direction of the cycle
  let sweep = to - from;
  if (sweep <= 0) sweep += 360;
  if (sweep > 180) sweep -= 360;
  const p = ellipsePoint(from + sweep * t);
  noStroke();
  fill(AMBER);
  circle(p.x, p.y, 14);
}

function drawDataPanel() {
  const top = cycleHeight + 5;
  const h = panelHeight - 12;
  const stage = stages[stageIndex];

  stroke('silver');
  strokeWeight(1);
  fill(255, 255, 255, 230);
  rect(margin / 2, top, canvasWidth - margin, h, 10);

  const left = margin / 2 + 14;
  const maxW = canvasWidth - margin - 28;

  noStroke();
  fill('#B87B12');
  textAlign(LEFT, TOP);
  textSize(17);
  text(stage.heading, left, top + 12);

  fill('black');
  textSize(15);
  let y = top + 40;

  if (stage.log) {
    // Stage 3 shows the log itself, with the matching entries called out.
    for (const entry of stage.log) {
      fill(entry.match ? '#B87B12' : '#9AA5AF');
      text(entry.match ? '▶' : '•', left, y);
      fill(entry.match ? 'black' : '#9AA5AF');
      text(clipToWidth(entry.text, maxW - 20), left + 18, y);
      y += 22;
    }
    y += 6;
  } else {
    for (const line of stage.lines) {
      text(clipToWidth(line, maxW), left, y);
      y += 22;
    }
    y += 8;
  }

  fill('#555555');
  textSize(14);
  text(clipToWidth(stage.caption, maxW), left, y);
}

function drawControlLabel() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Stage ' + (stageIndex + 1) + ' of ' + stages.length +
       '   (click a node to jump to it)', 220, drawHeight + controlHeight / 2);
}

// Shorten a line with an ellipsis if the container is too narrow for it.
function clipToWidth(str, maxW) {
  if (textWidth(str) <= maxW) return str;
  let s = str;
  while (s.length > 4 && textWidth(s + '...') > maxW) {
    s = s.substring(0, s.length - 1);
  }
  return s + '...';
}

function currentActiveNode() {
  return stages[stageIndex].node;
}

// Five notes were already in the log before this walkthrough; the sixth is only
// added once the learner actually reaches the Lessons Learned Log stage.
function notesInLog() {
  return stageIndex >= 2 ? 6 : 5;
}

// ---------- interaction ----------
function goNext() {
  if (stageIndex >= stages.length - 1) return;
  prevNode = currentActiveNode();
  stageIndex++;
  transitionStart = millis();
}

function goPrevious() {
  if (stageIndex <= 0) return;
  prevNode = currentActiveNode();
  stageIndex--;
  transitionStart = millis();
}

function goReset() {
  prevNode = currentActiveNode();
  stageIndex = 0;
  transitionStart = -1;
}

// Clicking a node jumps to the first stage that uses it.
function mousePressed() {
  if (mouseY > cycleHeight) return;
  for (let i = 0; i < 4; i++) {
    const p = nodePos[i];
    if (abs(mouseX - p.x) < nodeW / 2 && abs(mouseY - p.y) < nodeH / 2) {
      const target = stages.findIndex(s => s.node === i);
      if (target >= 0 && target !== stageIndex) {
        prevNode = currentActiveNode();
        stageIndex = target;
        transitionStart = millis();
      }
      return;
    }
  }
}

// ---------- responsive plumbing (must stay at the end) ----------
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  const w = Math.floor(container.width);
  if (w !== containerWidth) {
    containerWidth = w;
    canvasWidth = containerWidth;
    if (typeof width !== 'undefined' && width > 0) {
      resizeCanvas(containerWidth, containerHeight);
    }
  }
}
