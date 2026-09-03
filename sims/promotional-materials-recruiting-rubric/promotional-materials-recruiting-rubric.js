// Promotional Materials Recruiting Rubric
// CANVAS_HEIGHT: 620
// Bloom: Evaluate (L5), verb "critique"
//
// Five criteria, ten points, three sample flyers to practise on before you have
// to judge your own without help.
//
// The three samples are ordered from worst to best on purpose, but none of them
// is a caricature. Flyer 1 is a real flyer that a well-meaning club produces
// and is proud of -- "Build. Compete. Win." is exciting, and it also tells a
// student who does not already see themselves as a competitor that this is not
// for them.
//
// The lowest-scoring criterion matters more than the total. A flyer scoring 7
// out of 10 with a zero in language accessibility is not "pretty good"; it is
// invisible to a chunk of the community, and the total hides that.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 540;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

// ---- Controls --------------------------------------------------------------
let flyerSelect, revealButton, resetButton;

// ---- State -----------------------------------------------------------------
let scores = [0, 0, 0, 0, 0];
let openCriterion = -1;
let revealed = false;
let rowBoxes = [];
let stepBoxes = [];

const CRITERIA = [
  {name: 'Diverse, non-stereotyped imagery',
   rubric: ['only one gender or race shown', 'mixed, but incidental',
            'clearly and intentionally diverse'],
   fix: 'Replace the photo. Whoever is in it is who the flyer is addressed ' +
        'to, whatever the words say.'},
  {name: 'States there is no cost, plainly',
   rubric: ['cost unclear or unmentioned', 'implied',
            'stated in plain language'],
   fix: 'Add "Free to join" in the same size as the title. A family that has ' +
        'to ask what it costs usually does not ask.'},
  {name: 'Language accessibility noted',
   rubric: ['English only, no note', 'a translation exists elsewhere',
            'the flyer itself is bilingual'],
   fix: 'Produce the flyer in the second most common language in the ' +
        'catchment. Not a translation on request — the flyer itself.'},
  {name: 'Low-effort contact method',
   rubric: ['web form only', 'email listed', 'phone or text listed'],
   fix: 'Add a number that accepts text messages. A web form is the highest ' +
        'effort way to say hello and the easiest to abandon.'},
  {name: 'Accessibility or accommodation mentioned',
   rubric: ['not mentioned', 'implied by the venue',
            'explicitly stated'],
   fix: 'Add one sentence: "Tell us what would make it easier to take part." ' +
        'Explicit beats assumed.'}
];

const FLYERS = {
  '1 — "Build. Compete. Win."':
    {suggested: [0, 0, 0, 0, 0],
     summary: 'Photo described as two boys pointing at a robot. English only. ' +
              'No mention of cost. A generic email sign-up form is the only ' +
              'way to make contact. No accessibility note.'},
  '2 — "Coding Club — All Welcome"':
    {suggested: [1, 2, 0, 2, 1],
     summary: 'Photo described as a mixed-gender, mixed-race group ' +
              'mid-conversation. States "no cost to join". English only. A ' +
              'phone number is listed. The venue is a public library, which ' +
              'implies step-free access without saying so.'},
  '3 — "Club de Programación — ¡Gratis!"':
    {suggested: [2, 2, 2, 2, 2],
     summary: 'Bilingual flyer. Mixed-group photo. States there is no cost. ' +
              'Lists both an email and a text-message number. Notes the ' +
              'accessible entrance explicitly.'}
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  flyerSelect = createSelect();
  for (const name of Object.keys(FLYERS)) flyerSelect.option(name);
  flyerSelect.selected('1 — "Build. Compete. Win."');
  flyerSelect.position(120, drawHeight + 8);
  flyerSelect.changed(loadFlyer);

  revealButton = createButton('Reveal weakest criterion');
  revealButton.position(400, drawHeight + 8);
  revealButton.mousePressed(() => { revealed = true; });

  resetButton = createButton('Reset scores');
  resetButton.position(600, drawHeight + 8);
  resetButton.mousePressed(() => { scores = [0, 0, 0, 0, 0]; revealed = false; });

  loadFlyer();

  describe('A recruiting-equity rubric for club promotional materials. A ' +
    'selector loads one of three described sample flyers with a suggested ' +
    'score on each of five criteria, which the learner can override with plus ' +
    'and minus controls. The total out of ten is colour-coded, and a reveal ' +
    'control highlights the lowest-scoring criterion and names one concrete ' +
    'fix for it.');
}

function loadFlyer() {
  scores = FLYERS[flyerSelect.value()].suggested.slice();
  revealed = false;
  openCriterion = -1;
}

function total() { return scores.reduce((a, b) => a + b, 0); }

function weakestIndex() {
  let lo = 0;
  for (let i = 1; i < scores.length; i++) if (scores[i] < scores[lo]) lo = i;
  return lo;
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
  text('Promotional Materials Recruiting Rubric', canvasWidth / 2, 8);

  const split = canvasWidth * 0.63;
  drawSummary(margin, TITLE_H, split - margin * 2, 78);
  drawCriteria(margin, TITLE_H + 86, split - margin * 2,
               drawHeight - TITLE_H - 98);
  drawScore(split, TITLE_H, canvasWidth - split - margin,
            drawHeight - TITLE_H - 12);
  drawControlLabels();

  cursor(stepUnderMouse() || rowUnderMouse() >= 0 ? HAND : ARROW);
}

function drawSummary(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill('#8AA6BF');
  textAlign(LEFT, TOP);
  textSize(12);
  text('THE FLYER YOU ARE JUDGING', x + 16, y + 12);
  fill('#2C3A45');
  textSize(13);
  text(FLYERS[flyerSelect.value()].summary, x + 16, y + 30, w - 32, h - 38);
}

function drawCriteria(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  rowBoxes = [];
  stepBoxes = [];
  const rowH = (h - 16) / CRITERIA.length;
  const wk = weakestIndex();

  for (let i = 0; i < CRITERIA.length; i++) {
    const ry = y + 8 + i * rowH;
    const hot = revealed && i === wk;
    rowBoxes.push({y: ry, h: rowH, i: i});

    noStroke();
    fill(hot ? '#FDF3DF' : (i % 2 ? '#F7FAFC' : 'white'));
    rect(x + 8, ry, w - 16, rowH - 4, 5);
    if (hot) { fill('#B8860B'); rect(x + 8, ry, 5, rowH - 4, 2); }

    fill('#2C3A45');
    textAlign(LEFT, TOP);
    textSize(13);
    text(CRITERIA[i].name, x + 22, ry + 8, w - 150);

    // plus / minus, and the score between them
    const sx = x + w - 96;
    const sy = ry + (rowH - 4) / 2;
    stepBoxes.push({x: sx, y: sy, i: i, d: -1});
    stepBoxes.push({x: sx + 62, y: sy, i: i, d: 1});
    for (const b of [{x: sx, t: '−'}, {x: sx + 62, t: '+'}]) {
      fill('#E4EDF5');
      circle(b.x, sy, 24);
      fill('#4A5A68');
      textAlign(CENTER, CENTER);
      textSize(15);
      text(b.t, b.x, sy - 1);
    }
    fill(['#D64545', '#F5A623', '#3E9E6E'][scores[i]]);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(scores[i], sx + 31, sy);

    // the rubric line for the current score, always visible; the full 0/1/2
    // scale appears when the row is opened
    fill('#5B7186');
    textAlign(LEFT, TOP);
    textSize(11);
    if (openCriterion === i) {
      let ty = ry + 26;
      for (let s = 0; s < 3; s++) {
        fill(s === scores[i] ? '#2C3A45' : '#8AA6BF');
        text(s + ' = ' + CRITERIA[i].rubric[s], x + 22, ty, w - 150);
        ty += 15;
      }
    } else {
      text(scores[i] + ' = ' + CRITERIA[i].rubric[scores[i]] +
           '   (click for the full scale)', x + 22, ry + 28, w - 150);
    }
  }
}

function drawScore(x, y, w, h) {
  const t = total();
  const col = t < 4 ? '#D64545' : t <= 7 ? '#F5A623' : '#3E9E6E';

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(col);
  rect(x, y, w, 5, 3);

  textAlign(CENTER, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('TOTAL', x + w / 2, y + 18);
  fill(col);
  textFont('monospace');
  textSize(52);
  text(t + ' / 10', x + w / 2, y + 36);
  textFont('sans-serif');

  fill('#4A5A68');
  textAlign(LEFT, TOP);
  textSize(13);
  text(t < 4 ? 'This flyer is speaking to people who already see themselves ' +
                'in it.'
       : t <= 7 ? 'Better than most, and the total is hiding at least one ' +
                  'zero. Look at the lowest row, not the total.'
       : 'Strong. Worth keeping as the template for everything else you ' +
         'publish.',
       x + 16, y + 110, w - 32, 60);

  if (!revealed) {
    fill('#8AA6BF');
    textSize(12);
    text('Press "Reveal weakest criterion" for the one to fix first.',
         x + 16, y + h - 150, w - 32, 60);
    return;
  }

  const i = weakestIndex();
  noStroke();
  fill('#FDF3DF');
  rect(x + 12, y + 176, w - 24, (y + h) - (y + 176) - 12, 8);
  fill('#B8860B');
  rect(x + 12, y + 176, 5, (y + h) - (y + 176) - 12, 3);
  textAlign(LEFT, TOP);
  fill('#B8860B');
  textSize(12);
  text('FIX THIS FIRST', x + 26, y + 186);
  fill('#2C3A45');
  textSize(14);
  text(CRITERIA[i].name, x + 26, y + 204, w - 44);
  fill('#4A5A68');
  textSize(12);
  text(CRITERIA[i].fix, x + 26, y + 244, w - 44, (y + h) - (y + 244) - 20);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Flyer:', 60, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('The suggested scores are a starting point — override any of them if ' +
       'you disagree, and be ready to say why.', 10, drawHeight + 58);
}

function rowUnderMouse() {
  const x = margin, w = canvasWidth * 0.63 - margin * 2;
  if (mouseX < x || mouseX > x + w) return -1;
  for (const b of rowBoxes) {
    if (mouseY > b.y && mouseY < b.y + b.h) return b.i;
  }
  return -1;
}

function stepUnderMouse() {
  for (const b of stepBoxes) {
    if (dist(mouseX, mouseY, b.x, b.y) < 14) return b;
  }
  return null;
}

function mousePressed() {
  const st = stepUnderMouse();
  if (st) {
    scores[st.i] = constrain(scores[st.i] + st.d, 0, 2);
    return;
  }
  const i = rowUnderMouse();
  if (i >= 0) openCriterion = openCriterion === i ? -1 : i;
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
