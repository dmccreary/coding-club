// Saving Student Data Decision Tool
// CANVAS_HEIGHT: 520
// Bloom: Evaluate (L5), verb "justify"
//
// Two questions, in this order, applied to every field somebody proposes
// collecting:
//
//   1. Does a specific, current club task need this?
//   2. Is there a less identifying version that would still work?
//
// The order is the whole method. Question 2 only gets asked if question 1
// passed, which stops the common failure of arguing about how to store a field
// safely before establishing that it should exist at all. The safest place to
// keep a home address is in nobody's spreadsheet.
//
// Custom fields deliberately get no pre-loaded verdict. The tool asks both
// questions and the learner does the reasoning -- which is what an
// Evaluate-level objective needs, and what a lookup table would quietly take
// away.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 440;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

// ---- Controls --------------------------------------------------------------
let fieldSelect, customInput, q1Yes, q1No, q2Yes, q2No, restartButton;

// ---- State -----------------------------------------------------------------
let a1 = null;               // answer to question 1: true / false / null
let a2 = null;

const FIELDS = {
  'Home address': {
    guidance: 'A club that meets on site and communicates by email has no ' +
              'task that needs it. Post is the only one that would, and clubs ' +
              'do not post.',
    substitute: null,
    expected: 'no'},
  'Parent email': {
    guidance: 'Cancelling a session at short notice is a specific, current ' +
              'task, and there is no less identifying version of a contact ' +
              'address that still reaches somebody.',
    substitute: null,
    expected: 'yes'},
  'Student name': {
    guidance: 'Register, name badges, safeguarding. A first name plus a last ' +
              'initial covers almost all of it.',
    substitute: 'first name plus last initial',
    expected: 'substitute'},
  'Allergy information': {
    guidance: 'If you serve snacks, this is a safety task and it is specific ' +
              'and current. If you never serve food, it is not — and that is ' +
              'a real decision, not a formality.',
    substitute: null,
    expected: 'yes'},
  'Date of birth': {
    guidance: 'Age bands and eligibility are real tasks. A full date of birth ' +
              'is one of the strongest identifiers there is, and a birth year ' +
              'does the same job.',
    substitute: 'birth year, or an age band',
    expected: 'substitute'},
  'Photo of student': {
    guidance: 'Publicity is a task, but it is not a task that requires ' +
              'storing photos of every student. Photos need separate consent ' +
              'and separate handling, and most clubs need far fewer of them ' +
              'than they collect.',
    substitute: 'photos only of students with specific photo consent, held ' +
                'separately',
    expected: 'substitute'},
  'Parent employer': {
    guidance: 'Almost always collected in the hope of sponsorship, which is ' +
              'not a current task with a name and a date. Ask for it when you ' +
              'have an actual ask to make.',
    substitute: null,
    expected: 'no'},
  'Custom field…': {
    guidance: 'No pre-loaded answer for this one. Walk it yourself: name the ' +
              'task, name who does it, name when. If you cannot name all ' +
              'three, question 1 is a no.',
    substitute: null,
    expected: null}
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  fieldSelect = createSelect();
  for (const name of Object.keys(FIELDS)) fieldSelect.option(name);
  fieldSelect.selected('Home address');
  fieldSelect.position(90, drawHeight + 8);
  fieldSelect.changed(restart);

  customInput = createInput('');
  customInput.attribute('placeholder', 'name the field');
  customInput.size(150);
  customInput.position(280, drawHeight + 8);

  restartButton = createButton('Try another field');
  restartButton.position(450, drawHeight + 8);
  restartButton.mousePressed(restart);

  // The Yes/No pairs sit beside their own question, over the canvas, so the
  // answer you are giving is unambiguous.
  q1Yes = createButton('Yes');
  q1No = createButton('No');
  q2Yes = createButton('Yes');
  q2No = createButton('No');
  q1Yes.mousePressed(() => { a1 = true; });
  q1No.mousePressed(() => { a1 = false; a2 = null; });
  q2Yes.mousePressed(() => { a2 = true; });
  q2No.mousePressed(() => { a2 = false; });
  layoutAnswerButtons();

  describe('A minimal-data-first decision tool. A field is chosen from a list ' +
    'of common examples or typed in, then tested against two questions in ' +
    'order: does a specific current club task need it, and is there a less ' +
    'identifying version that would still work. A verdict panel reads collect ' +
    'it, do not collect it, or collect a safer substitute, with the reason.');
}

function fieldName() {
  const sel = fieldSelect.value();
  if (sel !== 'Custom field…') return sel;
  const v = customInput.value().trim();
  return v || 'your field';
}

function isCustom() { return fieldSelect.value() === 'Custom field…'; }

function questionY(n) {
  const h = drawHeight - TITLE_H - 12;
  return TITLE_H + (n === 1 ? h * 0.30 : h * 0.56);
}

function layoutAnswerButtons() {
  const bx = margin + 30;
  q1Yes.position(bx, questionY(1) + 44);
  q1No.position(bx + 58, questionY(1) + 44);
  q2Yes.position(bx, questionY(2) + 44);
  q2No.position(bx + 58, questionY(2) + 44);
}

function draw() {
  updateCanvasSize();

  // Question 2 only exists if question 1 was a yes, and neither exists once
  // the verdict is in.
  showButtons([q1Yes, q1No], a1 === null);
  showButtons([q2Yes, q2No], a1 === true && a2 === null);
  if (isCustom()) customInput.show(); else customInput.hide();

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Saving Student Data Decision Tool', canvasWidth / 2, 8);

  const split = canvasWidth * 0.62;
  drawPath(margin, TITLE_H, split - margin * 2, drawHeight - TITLE_H - 12);
  drawVerdict(split, TITLE_H, canvasWidth - split - margin,
              drawHeight - TITLE_H - 12);
  drawControlLabels();
}

function showButtons(list, on) {
  for (const b of list) { if (on) b.show(); else b.hide(); }
}

function drawPath(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('PROPOSED FIELD', x + 18, y + 14);
  fill('#2C3A45');
  textSize(24);
  text(fieldName(), x + 18, y + 32);

  drawQuestion(x, questionY(1), w, 1,
    'Does a specific, current club task need this?',
    a1,
    'Name the task, who does it, and when. "It might be useful one day" is a ' +
    'no.');

  if (a1 === true) {
    drawQuestion(x, questionY(2), w, 2,
      'Is there a less identifying version that would still work?',
      a2,
      'A birth year instead of a full date. A first name and a last initial ' +
      'instead of a full name.');
  } else if (a1 === false) {
    noStroke();
    fill('#8AA6BF');
    textAlign(LEFT, TOP);
    textSize(13);
    text('Question 2 is not asked. If no task needs the field, how safely you ' +
         'could have stored it does not matter.',
         x + 30, questionY(2), w - 60, 44);
  }
}

function drawQuestion(x, y, w, n, q, answer, hint) {
  noStroke();
  fill(answer === null ? '#EDF2F6'
       : answer ? '#E8F5EE' : '#FDECEC');
  rect(x + 18, y - 8, w - 36, 96, 8);

  fill(answer === null ? '#8AA6BF' : answer ? '#2E7D4F' : '#C0392B');
  textAlign(LEFT, TOP);
  textSize(12);
  text('QUESTION ' + n, x + 30, y);
  fill('#2C3A45');
  textSize(16);
  text(q, x + 30, y + 18, w - 60);

  if (answer === null) {
    fill('#8AA6BF');
    textSize(12);
    textAlign(RIGHT, TOP);
    const hintW = w * 0.52;
    text(hint, x + w - 30 - hintW, y + 46, hintW, 44);
  } else {
    fill(answer ? '#2E7D4F' : '#C0392B');
    textSize(18);
    textAlign(LEFT, TOP);
    text(answer ? 'Yes' : 'No', x + 30, y + 48);
  }
}

function drawVerdict(x, y, w, h) {
  const f = FIELDS[fieldSelect.value()];
  let verdict = null, colour = '#8AA6BF', reason = '';

  if (a1 === false) {
    verdict = "Don't collect it";
    colour = '#D64545';
    reason = 'No current club task needs ' + fieldName().toLowerCase() +
             '. The safest place for a field is nobody\'s spreadsheet — ' +
             'there is nothing to leak, nothing to secure, and nothing to ' +
             'delete later.';
  } else if (a1 === true && a2 === true) {
    verdict = 'Collect a safer substitute';
    colour = '#F5A623';
    reason = 'The task is real, so something has to be collected — but not ' +
             'this. ' + (f.substitute
               ? 'Collect ' + f.substitute + ' instead: it does the same job ' +
                 'and identifies less.'
               : 'Collect the least identifying version that still does the ' +
                 'job, and write down which version you chose.');
  } else if (a1 === true && a2 === false) {
    verdict = 'Collect it';
    colour = '#3E9E6E';
    reason = 'A current task needs it and there is no lesser version that ' +
             'works. Collect it — and now the other obligations start: say ' +
             'why you hold it, keep it only as long as the task lasts, and ' +
             'delete it when the task ends.';
  }

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);
  fill(colour);
  rect(x, y, w, 5, 3);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text('VERDICT', x + 18, y + 16);

  if (!verdict) {
    fill('#5B7186');
    textSize(15);
    text('Answer question 1 to get a verdict.', x + 18, y + 38, w - 36);
    fill('#4A5A68');
    textSize(13);
    text(f.guidance, x + 18, y + 76, w - 36, h - 140);
    fill('#8AA6BF');
    textSize(12);
    text(isCustom()
          ? 'Custom fields have no stored answer. The reasoning is yours.'
          : 'This field has guidance, but the verdict still depends on your ' +
            'club — a club that serves no food does not need allergy ' +
            'information.',
         x + 18, y + h - 58, w - 36, 50);
    return;
  }

  fill(colour);
  textSize(21);
  text(verdict, x + 18, y + 36, w - 36);
  fill('#2C3A45');
  textSize(13);
  text(reason, x + 18, y + 84, w - 36, h - 150);

  fill('#4A5A68');
  textSize(12);
  text(f.guidance, x + 18, y + h - 62, w - 36, 54);
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Field:', 40, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('Minimal data first: the question is never how to store a field ' +
       'safely, it is whether it should exist.', 10, drawHeight + 58);
}

function restart() {
  a1 = null;
  a2 = null;
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  layoutAnswerButtons();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
