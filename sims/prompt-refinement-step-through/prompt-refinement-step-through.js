// Prompt Refinement Step-Through
// CANVAS_HEIGHT: 560
// Bloom: Apply (L3), verb "apply"
//
// One goal, four criteria, and a draft that gets closer to sendable each time
// you add one.
//
// The measure at the bottom is the honest one: how much editing is left before
// this could go out. A vague prompt does not produce a *bad* draft -- it
// produces a long, formal, dateless one that takes ten minutes to cut down.
// A specific prompt produces something you fix in one line.
//
// The four criteria are audience, tone, length, and the must-include detail.
// Of the four, the must-include detail is the one that changes the draft most
// and the one people leave out most, because it feels like the part the AI is
// supposed to know.

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

// ---- Controls --------------------------------------------------------------
let cbAudience, cbTone, cbLength, cbDetail, resetButton;

const CRITERIA = [
  {key: 'audience', label: 'Audience', add: 'for club families',
   why: 'Who is reading it. Changes the vocabulary and how much it explains.'},
  {key: 'tone', label: 'Tone', add: 'friendly',
   why: 'Without it you get corporate-formal, because that is the safe ' +
        'default.'},
  {key: 'length', label: 'Length', add: 'two sentences',
   why: 'The single cheapest constraint. Nothing else cuts as much editing.'},
  {key: 'detail', label: 'Must-include detail',
   add: 'include Tuesday 4pm and that we need one more mentor',
   why: 'The facts only you know. Leave this out and the model invents ' +
        'something plausible, which is worse than leaving a gap.'}
];

// Each combination maps to a written draft, so the text always reads naturally
// however the criteria are ticked. The key is the four flags in order.
const DRAFTS = {
  '0000': {
    text: 'Dear Members,\n\nWe are writing to inform you of an upcoming ' +
          'meeting of the coding club. We look forward to your attendance ' +
          'and participation in this session.\n\nWe would like to take this ' +
          'opportunity to thank you for your continued engagement with the ' +
          'club and its activities.\n\nKind regards,\nThe Committee',
    edits: 6,
    note: 'Three paragraphs, no date, no time, no ask, and a tone nobody in ' +
          'the club uses. Every one of those is an edit.'},
  '1000': {
    text: 'Hi families,\n\nJust a note about the next coding club session. ' +
          'We hope your student can make it — sessions are a great chance ' +
          'for them to build on what they have been learning.\n\nThanks for ' +
          'your support!',
    edits: 4,
    note: 'Naming the audience fixed the vocabulary. Still no date, still ' +
          'too long, still no ask.'},
  '1100': {
    text: 'Hi families! Quick note about the next coding club session — we ' +
          'would love to see your student there. It is always a good ' +
          'evening and there is usually pizza.',
    edits: 3,
    note: 'Friendlier, and now inventing things. Nobody said anything about ' +
          'pizza. Tone without facts is where fabrication starts.'},
  '1110': {
    text: 'Hi families! Quick reminder about coding club this week — hope to ' +
          'see your student there.',
    edits: 2,
    note: 'Two sentences, right voice, nothing invented. And still missing ' +
          'the two things the message exists to say.'},
  '1111': {
    text: 'Hi families! Coding club is on Tuesday at 4pm — and we are still ' +
          'looking for one more mentor, so do get in touch if you can help.',
    edits: 0,
    note: 'Sendable. Both facts present, right length, right voice, nothing ' +
          'invented. The must-include detail did most of that work.'},
  '0001': {
    text: 'Please be advised that the coding club session will take place on ' +
          'Tuesday at 4pm. Additionally, we wish to note that one further ' +
          'mentor is required at this time.\n\nWe thank you for your ' +
          'attention to this matter.',
    edits: 3,
    note: 'The facts are right and the voice is a parking notice. Detail ' +
          'without tone is accurate and unreadable.'},
  '1011': {
    text: 'Hi families — coding club is on Tuesday at 4pm. We are also ' +
          'looking for one more mentor to join us this term, so if you have ' +
          'a couple of hours and any interest at all, we would love to hear ' +
          'from you. It is a friendly group and no coding experience is ' +
          'needed to help out.',
    edits: 1,
    note: 'Everything correct, just long. Length is the criterion doing the ' +
          'least glamorous and most reliable work.'}
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  resetButton = createButton('Reset to vague prompt');
  resetButton.position(10, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  cbAudience = createCheckbox(' Audience', false);
  cbAudience.position(200, drawHeight + 10);
  cbTone = createCheckbox(' Tone', false);
  cbTone.position(310, drawHeight + 10);
  cbLength = createCheckbox(' Length', false);
  cbLength.position(392, drawHeight + 10);
  cbDetail = createCheckbox(' Must-include detail', false);
  cbDetail.position(484, drawHeight + 10);

  describe('A prompt refinement comparison. Four checkboxes add audience, ' +
    'tone, length, and a must-include detail to a vague prompt one at a ' +
    'time, and the draft the prompt produces is rewritten each time. A ' +
    'counter shows how many edits the draft still needs before it could be ' +
    'sent, falling to zero when all four criteria are present.');
}

function flags() {
  return [cbAudience.checked(), cbTone.checked(),
          cbLength.checked(), cbDetail.checked()];
}

// Named draftKey, not key: p5 has a global `key` and installs it after
// this script is parsed, so it would win.
function draftKey() { return flags().map(f => f ? '1' : '0').join(''); }

// Fall back to the nearest written draft rather than showing nothing for a
// combination nobody wrote.
function currentDraft() {
  const k = draftKey();
  if (DRAFTS[k]) return DRAFTS[k];
  const n = flags().filter(Boolean).length;
  const near = ['0000', '1000', '1100', '1110', '1111'][n];
  return DRAFTS[near];
}

function promptText() {
  const f = flags();
  let s = 'write a reminder';
  const parts = [];
  for (let i = 0; i < CRITERIA.length; i++) if (f[i]) parts.push(CRITERIA[i].add);
  if (parts.length) s += ' ' + parts.join(', ');
  return s;
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
  text('Prompt Refinement Step-Through', canvasWidth / 2, 8);

  const split = canvasWidth * 0.66;
  drawPromptAndDraft(margin, TITLE_H, split - margin * 2,
                     drawHeight - TITLE_H - 12);
  drawChecklist(split, TITLE_H, canvasWidth - split - margin,
                drawHeight - TITLE_H - 12);
  drawControlLabels();
}

function drawPromptAndDraft(x, y, w, h) {
  const d = currentDraft();

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('THE PROMPT', x + 18, y + 14);
  fill('#F7FAFC');
  rect(x + 18, y + 32, w - 36, 52, 6);
  fill('#8E7CC3');
  rect(x + 18, y + 32, 4, 52, 2);
  fill('#2C3A45');
  textFont('monospace');
  textSize(13);
  text(promptText(), x + 34, y + 42, w - 66, 40);
  textFont('sans-serif');

  fill('#8AA6BF');
  textSize(12);
  text('THE DRAFT IT PRODUCES', x + 18, y + 100);
  const dh = h - 210;
  fill('#F7FAFC');
  rect(x + 18, y + 118, w - 36, dh, 6);
  fill(d.edits === 0 ? '#3E9E6E' : '#4A90D9');
  rect(x + 18, y + 118, 4, dh, 2);
  fill('#2C3A45');
  textSize(14);
  text(d.text, x + 34, y + 130, w - 66, dh - 22);

  // The measure that matters: how much work is left.
  const my = y + 118 + dh + 12;
  noStroke();
  fill(d.edits === 0 ? '#E8F5EE' : d.edits <= 2 ? '#FDF3DF' : '#FDECEC');
  rect(x + 18, my, w - 36, (y + h) - my - 12, 6);
  fill(d.edits === 0 ? '#2E7D4F' : d.edits <= 2 ? '#B8860B' : '#C0392B');
  textSize(15);
  text(d.edits === 0 ? '✓ Ready to send — 0 edits'
                     : d.edits + ' edit' + (d.edits === 1 ? '' : 's') +
                       ' still needed before this could go out',
       x + 32, my + 10, w - 60);
  fill('#4A5A68');
  textSize(12);
  text(d.note, x + 32, my + 32, w - 60, (y + h) - (my + 32) - 16);
}

function drawChecklist(x, y, w, h) {
  const f = flags();

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('SPECIFICITY CRITERIA', x + 16, y + 16);

  for (let i = 0; i < CRITERIA.length; i++) {
    const cy = y + 46 + i * 84;
    const on = f[i];
    noStroke();
    fill(on ? '#E8F5EE' : '#F7FAFC');
    rect(x + 12, cy, w - 24, 74, 6);
    fill(on ? '#3E9E6E' : '#D4DEE7');
    rect(x + 12, cy, 4, 74, 2);

    fill(on ? '#2E7D4F' : '#8AA6BF');
    textSize(14);
    text((on ? '✓ ' : '○ ') + CRITERIA[i].label, x + 26, cy + 8);
    fill('#4A5A68');
    textSize(11);
    text(CRITERIA[i].why, x + 26, cy + 30, w - 44, 42);
  }

  const n = f.filter(Boolean).length;
  fill('#5B7186');
  textSize(12);
  text(n + ' of 4 added. Tick them in any order — the draft is rewritten each ' +
       'time, and the must-include detail is the one that moves it furthest.',
       x + 16, y + 46 + CRITERIA.length * 84 + 6, w - 32,
       (y + h) - (y + 46 + CRITERIA.length * 84) - 14);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Add:', 170, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('A vague prompt does not give you a bad draft. It gives you a long ' +
       'one, and cutting is the expensive part.', 10, drawHeight + 58);
}

function resetSimulation() {
  cbAudience.checked(false);
  cbTone.checked(false);
  cbLength.checked(false);
  cbDetail.checked(false);
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
