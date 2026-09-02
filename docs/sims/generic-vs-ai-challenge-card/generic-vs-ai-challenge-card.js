// Generic vs AI Challenge Card
// CANVAS_HEIGHT: 580
// Bloom: Analyze (L4), verb "compare"
//
// The same concept, twice: once as the generic template card and once
// customised to a student's interest. Both cards teach the repeat block.
//
// The comparison is worth making because "AI can customise our materials"
// usually gets heard as "AI can rewrite our materials", and those are very
// different claims. What actually changes is the title, the example theme, and
// the stretch goal. What does not change is the format -- the green border, the
// concept tag, the step count, the materials line -- because that format is
// what makes a rack of cards usable by a student who has never seen this one
// before.
//
// A customisation that changed the format would not be a better card. It would
// be a card that no longer belongs to the set.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let defaultTextSize = 16;

const TITLE_H = 42;

// ---- Controls --------------------------------------------------------------
let themeSelect, changedButton, fixedButton, resetButton;

// ---- State -----------------------------------------------------------------
let mode = 'none';           // 'none' | 'changed' | 'fixed'

const GENERIC = {
  title: 'Loop Practice',
  steps: ['Make a sprite move across the screen.',
          'Wrap the movement in a repeat block.',
          'Change the repeat count and watch what happens.'],
  stretch: 'Try nesting one repeat block inside another.',
  materials: 'Laptop, Scratch account',
  tag: 'Repetition'
};

const THEMES = {
  'Skateboarding': {
    title: 'Trick Combo Machine',
    steps: ['Make your skater do one kickflip.',
            'Wrap the kickflip in a repeat block.',
            'Change the repeat count to build a combo run.'],
    stretch: 'Nest a repeat inside a repeat to chain two different tricks.'},
  'Music': {
    title: 'Drum Loop Builder',
    steps: ['Make a sprite play one drum hit.',
            'Wrap the drum hit in a repeat block.',
            'Change the repeat count to set the bar length.'],
    stretch: 'Nest a repeat inside a repeat to layer a second rhythm.'},
  'Basketball': {
    title: 'Free Throw Streak',
    steps: ['Make your player take one shot.',
            'Wrap the shot in a repeat block.',
            'Change the repeat count to run a whole practice set.'],
    stretch: 'Nest a repeat inside a repeat to run several sets in a row.'}
};

// Which fields the customisation is allowed to touch, and which the format
// requires to stay put.
const CHANGED = ['title', 'steps', 'stretch'];
const FIXED = ['border', 'tag', 'materials', 'stepcount'];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  changedButton = createButton('Highlight what changed');
  changedButton.position(10, drawHeight + 8);
  changedButton.mousePressed(() => {
    mode = mode === 'changed' ? 'none' : 'changed';
  });

  fixedButton = createButton('Highlight what stayed fixed');
  fixedButton.position(180, drawHeight + 8);
  fixedButton.mousePressed(() => {
    mode = mode === 'fixed' ? 'none' : 'fixed';
  });

  themeSelect = createSelect();
  for (const name of Object.keys(THEMES)) themeSelect.option(name);
  themeSelect.selected('Skateboarding');
  themeSelect.position(450, drawHeight + 8);

  resetButton = createButton('Clear highlights');
  resetButton.position(590, drawHeight + 8);
  resetButton.mousePressed(() => { mode = 'none'; });

  describe('Two challenge cards side by side teaching the same repeat-block ' +
    'concept: the generic template card on the left and an AI-customised ' +
    'version on the right. Controls highlight the fields customisation ' +
    'changed — title, example theme, and stretch goal — and separately the ' +
    'fields the format keeps fixed: the green border, the concept tag, the ' +
    'materials line, and the step count. A selector swaps the customisation ' +
    'theme.');
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
  text('Generic vs AI-Customised Challenge Card', canvasWidth / 2, 8);

  const cw = min(300, (canvasWidth - margin * 2 - 220) / 2);
  const gap = 24;
  const totalW = cw * 2 + gap + 200;
  const x0 = margin + max(0, (canvasWidth - margin * 2 - totalW) / 2);
  const ch = drawHeight - TITLE_H - 46;

  const theme = THEMES[themeSelect.value()];
  drawCard(x0, TITLE_H, cw, ch, GENERIC, 'Generic template', false);
  drawCard(x0 + cw + gap, TITLE_H, cw, ch,
           {title: theme.title, steps: theme.steps, stretch: theme.stretch,
            materials: GENERIC.materials, tag: GENERIC.tag},
           'AI-customised — ' + themeSelect.value(), true);
  drawLegend(x0 + cw * 2 + gap * 2, TITLE_H,
             canvasWidth - margin - (x0 + cw * 2 + gap * 2), ch);
  drawControlLabels();
}

function drawCard(x, y, w, h, card, caption, custom) {
  const showChanged = mode === 'changed';
  const showFixed = mode === 'fixed';

  // The green border is a fixed part of the format, so it highlights under
  // "what stayed fixed" on BOTH cards.
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);
  noFill();
  stroke(showFixed ? '#F5A623' : '#3E9E6E');
  strokeWeight(showFixed ? 6 : 4);
  rect(x, y, w, h, 8);
  noStroke();

  fill('#8AA6BF');
  textAlign(LEFT, TOP);
  textSize(11);
  text(caption.toUpperCase(), x + 16, y + 12);

  // Title — a changed field
  if (showChanged && custom) { fill('#FDF3DF'); rect(x + 12, y + 28, w - 24, 30, 4); }
  fill('#2C3A45');
  textSize(19);
  text(card.title, x + 16, y + 32, w - 32);

  // Materials — fixed
  if (showFixed) { fill('#FDF3DF'); rect(x + 12, y + 66, w - 24, 22, 4); }
  fill('#5B7186');
  textSize(11);
  text('Materials: ' + card.materials, x + 16, y + 70, w - 32);

  // Steps — changed content, fixed count
  if (showChanged && custom) { fill('#FDF3DF'); rect(x + 12, y + 96, w - 24, 108, 4); }
  fill('#8AA6BF');
  textSize(11);
  text('STEPS', x + 16, y + 100);
  fill('#2C3A45');
  textSize(12);
  for (let i = 0; i < card.steps.length; i++) {
    text((i + 1) + '. ' + card.steps[i], x + 16, y + 116 + i * 30, w - 32, 28);
  }
  if (showFixed) {
    fill('#B8860B');
    textSize(11);
    textAlign(RIGHT, TOP);
    text(card.steps.length + ' steps', x + w - 16, y + 100);
    textAlign(LEFT, TOP);
  }

  // Stretch goal — a changed field
  if (showChanged && custom) { fill('#FDF3DF'); rect(x + 12, y + 212, w - 24, 56, 4); }
  fill('#8AA6BF');
  textSize(11);
  text('STRETCH GOAL', x + 16, y + 216);
  fill('#2C3A45');
  textSize(12);
  text(card.stretch, x + 16, y + 232, w - 32, 44);

  // Concept tag — fixed, and the reason the two cards are interchangeable
  const ty = y + h - 40;
  noStroke();
  fill(showFixed ? '#F5A623' : '#3E9E6E');
  rect(x + 16, ty, 96, 24, 12);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(12);
  text(card.tag, x + 64, ty + 12);
}

function drawLegend(x, y, w, h) {
  noStroke();
  fill('white');
  rect(x, y, w, h, 8);

  textAlign(LEFT, TOP);
  fill('#8AA6BF');
  textSize(12);
  text(mode === 'changed' ? 'WHAT CHANGED'
       : mode === 'fixed' ? 'WHAT STAYED FIXED'
       : 'THE COMPARISON', x + 14, y + 14);

  fill('#2C3A45');
  textSize(13);
  if (mode === 'changed') {
    const items = ['Title', 'Example theme in every step', 'Stretch goal wording'];
    for (let i = 0; i < items.length; i++) {
      text('• ' + items[i], x + 14, y + 38 + i * 24, w - 28);
    }
    fill('#4A5A68');
    textSize(12);
    text('Three fields. The customisation is a re-skin of the example, not a ' +
         'new lesson — both cards still teach the repeat block, in the same ' +
         'three moves.', x + 14, y + 118, w - 28, 140);
  } else if (mode === 'fixed') {
    const items = ['Green border', 'Concept tag', 'Materials line', 'Three steps'];
    for (let i = 0; i < items.length; i++) {
      text('• ' + items[i], x + 14, y + 38 + i * 24, w - 28);
    }
    fill('#4A5A68');
    textSize(12);
    text('The format is what makes a rack of cards usable. A student picks up ' +
         'a card they have never seen and already knows where the concept tag ' +
         'is and how long it will take. A customisation that changed the ' +
         'format would not be a better card — it would be a card that no ' +
         'longer belongs to the set.',
         x + 14, y + 142, w - 28, 190);
  } else {
    fill('#4A5A68');
    textSize(13);
    text('Both cards teach the same thing. Use the two highlight controls to ' +
         'separate what the customisation was allowed to touch from what the ' +
         'format requires.\n\nSwitch themes to see three equally valid ' +
         'customisations of the same underlying card.',
         x + 14, y + 38, w - 28, h - 60);
  }
}

function drawControlLabels() {
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  fill('#2C3A45');
  text('Theme:', 390, drawHeight + 22);
  fill('dimgray');
  textSize(13);
  text('Customisation changes the example, not the format. That is the whole ' +
       'distinction.', 10, drawHeight + 58);
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
