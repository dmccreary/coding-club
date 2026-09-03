// AI Agent Loop Explorer
// CANVAS_HEIGHT: 560
// Bloom: Understand (L2), verb "explain"
//
// Four stages: input, draft, human review, send or reject. Stepped, with the
// actual text at each one.
//
// The stage that matters is the third, and the sim is built to make skipping it
// look like what it is. Every scenario's draft contains one wrong detail that
// reads perfectly -- a start time carried over from an old calendar entry, a
// room number that changed last term. The draft is not badly written. It is
// fluent, confident, and wrong in exactly one place, which is the failure mode
// worth teaching, because a badly written draft gets caught by anyone.
//
// Press "What if no one reviewed this?" to see the uncorrected version as it
// would have gone out.

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
const STAGES = ['Input', 'Draft', 'Human review', 'Send / reject'];

// ---- Controls --------------------------------------------------------------
let scenarioSelect, prevButton, nextButton, whatIfButton;

// ---- State -----------------------------------------------------------------
let stage = 0;
let whatIf = false;

const SCENARIOS = {
  'Registration reminder': {
    goal: 'Draft Tuesday\'s session reminder for club families.',
    draft: 'Hi everyone — welcome back! Tuesday Coding Club meets this week ' +
           'at 3:30pm in the library. Bring your laptop if you have one; we ' +
           'have spares if not. See you there!',
    wrong: '3:30pm',
    right: '4:00pm',
    note: 'Fixed the time — the agent used last term\'s 3:30 start from an ' +
          'old calendar entry. Kept the welcome-back line, it reads well.',
    final: 'Hi everyone — welcome back! Tuesday Coding Club meets this week ' +
           'at 4:00pm in the library. Bring your laptop if you have one; we ' +
           'have spares if not. See you there!',
    damage: 'Thirty families arrive half an hour early to a locked library.'
  },
  'Room-change announcement': {
    goal: 'Tell families this week\'s session has moved rooms.',
    draft: 'Quick note: this week we are meeting in Room 12 instead of the ' +
           'library. Same time as always. Sorry for the short notice!',
    wrong: 'Room 12',
    right: 'Room 21',
    note: 'Room 21, not 12. The agent transposed the digits from the ' +
          'booking email. Everything else is fine.',
    final: 'Quick note: this week we are meeting in Room 21 instead of the ' +
           'library. Same time as always. Sorry for the short notice!',
    damage: 'Families arrive at a room being used by another class, then go ' +
            'home.'
  },
  'Parent chatbot reply': {
    goal: 'Answer a parent asking whether their 9-year-old can join.',
    draft: 'Thanks for asking! Tuesday Coding Club is open to students aged ' +
           '8 and up, so your child is very welcome. There is a small ' +
           'termly fee of $20 — just let us know and we will save a place.',
    wrong: 'a small termly fee of $20',
    right: 'no cost to join',
    note: 'There is no fee. The agent invented one, plausibly, because most ' +
          'clubs have one. Age range was right.',
    final: 'Thanks for asking! Tuesday Coding Club is open to students aged ' +
           '8 and up, so your child is very welcome. There is no cost to ' +
           'join — just let us know and we will save a place.',
    damage: 'A family that could not pay $20 quietly does not reply, and ' +
            'nobody ever finds out why.'
  }
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  scenarioSelect = createSelect();
  for (const name of Object.keys(SCENARIOS)) scenarioSelect.option(name);
  scenarioSelect.selected('Registration reminder');
  scenarioSelect.position(90, drawHeight + 8);
  scenarioSelect.changed(() => { stage = 0; whatIf = false; });

  prevButton = createButton('◀ Previous');
  prevButton.position(300, drawHeight + 8);
  prevButton.mousePressed(() => { stage = max(0, stage - 1); whatIf = false; });

  nextButton = createButton('Next ▶');
  nextButton.position(400, drawHeight + 8);
  nextButton.mousePressed(() => { stage = min(3, stage + 1); whatIf = false; });

  whatIfButton = createButton('What if no one reviewed this?');
  whatIfButton.position(478, drawHeight + 8);
  whatIfButton.mousePressed(() => { whatIf = !whatIf; });

  describe('A four-stage walkthrough of an AI agent\'s loop — input, draft, ' +
    'human review, and send or reject — with the actual text at each stage. ' +
    'Three scenarios are available. Every draft contains one confidently ' +
    'wrong detail that the review stage corrects, and a control shows the ' +
    'uncorrected draft as it would have gone out unreviewed, with what that ' +
    'would have cost.');
}

function sc() { return SCENARIOS[scenarioSelect.value()]; }

function draw() {
  updateCanvasSize();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('AI Agent Loop Explorer', canvasWidth / 2, 8);

  const split = canvasWidth * 0.70;
  drawContent(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 12);
  drawTracker(split, TITLE_H, canvasWidth - split - margin,
              drawHeight - TITLE_H - 12);
  drawControlLabels();
}

function drawContent(x, y, w, h) {
  const s = sc();

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(stage === 2 ? '#F5A623' : stage === 3 ? '#3E9E6E' : '#4A90D9');
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('STAGE ' + (stage + 1) + ' — ' + STAGES[stage].toUpperCase(),
       x + 20, y + 16);

  if (whatIf) { drawWhatIf(x, y, w, h, s); return; }

  if (stage === 0) {
    fill('#2C3A45');
    textSize(15);
    text('What a person asked the agent to do, in plain language:',
         x + 20, y + 42, w - 40);
    drawQuote(x + 20, y + 74, w - 40, s.goal, '#4A90D9');
    fill('#4A5A68');
    textSize(13);
    text('No template, no form. The whole appeal of an agent is that the ' +
         'input is a sentence — and the whole risk is that a sentence leaves ' +
         'a lot unspecified.',
         x + 20, y + 150, w - 40, 60);
  } else if (stage === 1) {
    fill('#2C3A45');
    textSize(15);
    text('What the agent produced, in seconds:', x + 20, y + 42, w - 40);
    drawQuote(x + 20, y + 68, w - 40, s.draft, '#4A90D9');
    fill('#C0392B');
    textSize(13);
    text('Read it again. It is fluent, it is the right length, it sounds ' +
         'like your club — and one detail in it is wrong. That combination ' +
         'is exactly why the next stage exists.',
         x + 20, y + 176, w - 40, 60);
  } else if (stage === 2) {
    fill('#2C3A45');
    textSize(15);
    text('What the reviewer changed:', x + 20, y + 42, w - 40);
    drawDiff(x + 20, y + 70, w - 40, s);
    noStroke();
    fill('#B8860B');
    textSize(13);
    text('Reviewer\'s note: ' + s.note, x + 20, y + 170, w - 40, 70);
  } else {
    fill('#2C3A45');
    textSize(15);
    text('What actually went out:', x + 20, y + 42, w - 40);
    drawQuote(x + 20, y + 68, w - 40, s.final, '#3E9E6E');
    fill('#4A5A68');
    textSize(13);
    text('One detail different from the draft. The agent did the writing, ' +
         'the human did the checking, and the loop closed. Reject works the ' +
         'same way — it is the same stage saying no instead of yes.',
         x + 20, y + 176, w - 40, 70);
  }
}

function drawQuote(x, y, w, txt, col) {
  noStroke();
  fill('#F7FAFC');
  rect(x, y, w, 96, 6);
  fill(col);
  rect(x, y, 4, 96, 2);
  fill('#2C3A45');
  textAlign(LEFT, TOP);
  textSize(14);
  text(txt, x + 16, y + 12, w - 32, 78);
}

// The draft and the correction, with only the one changed detail marked.
function drawDiff(x, y, w, s) {
  noStroke();
  fill('#FDECEC');
  rect(x, y, w, 44, 6);
  fill('#D64545');
  rect(x, y, 4, 44, 2);
  fill('#8AA6BF');
  textAlign(LEFT, TOP);
  textSize(11);
  text('AGENT WROTE', x + 16, y + 8);
  fill('#C0392B');
  textSize(16);
  text(s.wrong, x + 16, y + 22);

  fill('#E8F5EE');
  rect(x, y + 52, w, 44, 6);
  fill('#3E9E6E');
  rect(x, y + 52, 4, 44, 2);
  fill('#8AA6BF');
  textSize(11);
  text('REVIEWER CHANGED IT TO', x + 16, y + 60);
  fill('#2E7D4F');
  textSize(16);
  text(s.right, x + 16, y + 74);
}

function drawWhatIf(x, y, w, h, s) {
  noStroke();
  fill('#FDECEC');
  rect(x + 14, y + 40, w - 28, h - 56, 8);
  fill('#D64545');
  rect(x + 14, y + 40, 5, h - 56, 3);

  textAlign(LEFT, TOP);
  fill('#C0392B');
  textSize(17);
  text('Sent without review', x + 30, y + 54);
  fill('#2C3A45');
  textSize(14);
  text(s.draft, x + 30, y + 82, w - 60, 100);
  fill('#C0392B');
  textSize(14);
  text('What happens: ' + s.damage, x + 30, y + h - 110, w - 60, 50);
  fill('#4A5A68');
  textSize(13);
  text('Nothing about the message looks wrong. That is the point — the review ' +
       'stage is not there to catch bad writing, it is there to catch ' +
       'confident writing that is factually off.',
       x + 30, y + h - 62, w - 60, 50);
}

function drawTracker(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('THE LOOP', x + 16, y + 16);

  for (let i = 0; i < STAGES.length; i++) {
    const sy = y + 46 + i * 62;
    const on = i === stage;
    const done = i < stage;
    const col = i === 2 ? '#F5A623' : i === 3 ? '#3E9E6E' : '#4A90D9';

    noStroke();
    fill(on ? col : done ? '#D4DEE7' : '#EDF2F6');
    circle(x + 30, sy + 12, on ? 26 : 20);
    fill(on ? 'white' : done ? '#5B7186' : '#8AA6BF');
    textAlign(CENTER, CENTER);
    textSize(12);
    text(i + 1, x + 30, sy + 12);

    fill(on ? '#2C3A45' : '#8AA6BF');
    textAlign(LEFT, CENTER);
    textSize(13);
    text(STAGES[i], x + 50, sy + 12);

    if (i < STAGES.length - 1) {
      push();
      stroke('#D4DEE7');
      strokeWeight(2);
      line(x + 30, sy + 26, x + 30, sy + 50);
      pop();
    }
  }

  noStroke();
  fill('#B8860B');
  textSize(12);
  text('Stage 3 is the one people want to remove. It is the only stage that ' +
       'is not automatable, and the only one that catches a fluent mistake.',
       x + 16, y + 46 + STAGES.length * 62 + 4, w - 32,
       (y + h) - (y + 46 + STAGES.length * 62) - 12);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Scenario:', 20, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('Every scenario\'s draft has exactly one wrong detail, and it always ' +
       'reads perfectly well.', 10, drawHeight + 58);
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
