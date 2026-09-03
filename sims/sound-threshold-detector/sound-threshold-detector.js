// Sound Threshold Detector
// CANVAS_HEIGHT: 480
// Bloom: Understand (L2), verb "explain"
//
// A sound sensor does not hear a clap. It reports a level, many times a second,
// and your code decides what counts. Everything interesting is in where you put
// the line.
//
// Three scenarios share the same clap so the comparison is fair: the only thing
// that changes between them is the background. A threshold that works in a
// quiet room fires on chatter in a noisy one, and the sim shows exactly which
// peaks cross and which do not rather than leaving it to a general
// sound-reactive wobble.
//
// Waveforms are generated from a fixed seed, so a mentor and a student running
// this separately see the identical trace and can argue about the same peak.

// ---- Standard MicroSim canvas variables ------------------------------------
let containerWidth;
let canvasWidth = 800;
let drawHeight = 400;
let controlHeight = 80;      // 2 rows x 35 + 10
let canvasHeight = drawHeight + controlHeight;
let containerHeight = canvasHeight;
let margin = 20;
let sliderLeftMargin = 170;
let defaultTextSize = 16;

const TITLE_H = 42;
const PLOT_H = 230;
const SAMPLES = 420;
const PEAK_FLOOR = 0.08;     // below this a bump is not a peak, it is hiss

// ---- Controls --------------------------------------------------------------
let thresholdSlider, scenarioSelect, replayButton, resetButton;

// ---- State -----------------------------------------------------------------
let waves = {};              // scenario name -> {data: [], peaks: []}
let playhead = SAMPLES;      // SAMPLES means "finished"; Replay resets it to 0
let replaying = false;

const SCENARIOS = {
  'Quiet room': {bg: 0.06, chatter: 0.04, maxBump: 0.28, bumps: 2, seed: 11,
                 blurb: 'An empty room with the projector fan running.'},
  'Noisy room': {bg: 0.28, chatter: 0.22, maxBump: 0.68, bumps: 4, seed: 29,
                 blurb: 'Twenty students talking, chairs scraping.'},
  'Single clap': {bg: 0.03, chatter: 0.02, maxBump: 0.14, bumps: 2, seed: 47,
                  blurb: 'One clap in near silence — the easy case.'}
};

const CLAP_AT = 0.62;        // fraction along the trace where the clap lands
const CLAP_PEAK = 0.95;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  replayButton = createButton('Replay waveform');
  replayButton.position(10, drawHeight + 8);
  replayButton.mousePressed(startReplay);

  resetButton = createButton('Reset');
  resetButton.position(148, drawHeight + 8);
  resetButton.mousePressed(resetSimulation);

  scenarioSelect = createSelect();
  for (const name of Object.keys(SCENARIOS)) scenarioSelect.option(name);
  scenarioSelect.selected('Noisy room');
  scenarioSelect.position(218, drawHeight + 8);
  scenarioSelect.changed(startReplay);

  // Default sits above the noisy room's chatter and below the clap, so the
  // sim opens on a correctly tuned threshold rather than on a broken one.
  thresholdSlider = createSlider(0.05, 1.0, 0.80, 0.01);
  thresholdSlider.position(sliderLeftMargin, drawHeight + 46);
  thresholdSlider.size(canvasWidth - sliderLeftMargin - margin);

  for (const name of Object.keys(SCENARIOS)) waves[name] = buildWave(name);

  describe('A simulated sound level plotted against time with an adjustable ' +
    'horizontal threshold line. Three scenarios share one clap and differ only ' +
    'in their background noise. Every peak in the trace is marked either ' +
    'TRIGGERED or ignored depending on whether it crosses the threshold, and a ' +
    'panel lists the peaks with a count of false triggers and missed events.');
}

// A tiny deterministic generator, so the trace is identical on every machine
// and a mentor can point at "the third peak" and be understood.
function makeRandom(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function buildWave(name) {
  const cfg = SCENARIOS[name];
  const rnd = makeRandom(cfg.seed);
  const data = new Array(SAMPLES);

  // Background: slow drift plus fast hiss, so the line is bumpy rather than
  // flat, the way a real sensor reads a room that is not silent.
  let drift = cfg.bg;
  for (let i = 0; i < SAMPLES; i++) {
    drift += (rnd() - 0.5) * cfg.chatter * 0.35;
    drift = constrain(drift, cfg.bg * 0.25, cfg.bg + cfg.chatter);
    data[i] = drift + rnd() * cfg.chatter * 0.4;
  }

  // A few louder background events -- a chair scrape, a dropped pen. Capped
  // at maxBump so the clap always stands clear of them.
  const floorBump = cfg.bg + cfg.chatter;
  for (let b = 0; b < cfg.bumps; b++) {
    const at = floor(rnd() * (SAMPLES - 60)) + 20;
    const height = lerp(floorBump, cfg.maxBump, 0.45 + rnd() * 0.55);
    addPulse(data, at, 14, height);
  }

  // The clap: sharp attack, quick decay, identical in all three scenarios.
  addPulse(data, floor(SAMPLES * CLAP_AT), 9, CLAP_PEAK);

  for (let i = 0; i < SAMPLES; i++) data[i] = constrain(data[i], 0, 1);
  return {data: data, peaks: findPeaks(data)};
}

function addPulse(data, at, width, height) {
  for (let i = -width; i <= width * 3; i++) {
    const j = at + i;
    if (j < 0 || j >= data.length) continue;
    const env = i < 0 ? exp(-pow(i / (width * 0.5), 2))
                      : exp(-i / (width * 1.2));
    data[j] = max(data[j], height * env);
  }
}

// Local maxima that clear the floor and are separated by at least 12 samples,
// which is what a peak detector in a student's code would do.
function findPeaks(data) {
  const peaks = [];
  for (let i = 2; i < data.length - 2; i++) {
    if (data[i] < PEAK_FLOOR) continue;
    if (data[i] <= data[i - 1] || data[i] < data[i + 1]) continue;
    if (peaks.length && i - peaks[peaks.length - 1].i < 12) {
      if (data[i] > peaks[peaks.length - 1].v) peaks[peaks.length - 1] = {i: i, v: data[i]};
      continue;
    }
    peaks.push({i: i, v: data[i]});
  }
  // Keep the loudest handful, or the list becomes unreadable hiss.
  return peaks.sort((a, b) => b.v - a.v).slice(0, 7).sort((a, b) => a.i - b.i);
}

function currentWave() { return waves[scenarioSelect.value()]; }

function draw() {
  updateCanvasSize();

  if (replaying) {
    playhead += 5;
    if (playhead >= SAMPLES) { playhead = SAMPLES; replaying = false; }
  }

  background('aliceblue');
  noStroke();
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Sound Threshold Detector', canvasWidth / 2, 8);

  const px = margin, pw = canvasWidth - margin * 2;
  drawPlot(px, TITLE_H, pw, PLOT_H);
  drawVerdict(px, TITLE_H + PLOT_H + 16, pw,
              drawHeight - TITLE_H - PLOT_H - 28);
  drawControlLabels();
}

function plotY(y0, h, v) { return y0 + h - v * h; }

function drawPlot(x, y, w, h) {
  const wave = currentWave();
  const thr = thresholdSlider.value();

  noStroke();
  fill('white');
  rect(x, y, w, h, 6);

  // Everything above the threshold line is the "would trigger" region.
  const ty = plotY(y, h, thr);
  fill(214, 69, 69, 22);
  rect(x, y, w, ty - y);

  push();
  stroke('#E9EFF5');
  strokeWeight(1);
  for (let i = 1; i < 5; i++) line(x, y + (h * i) / 5, x + w, y + (h * i) / 5);

  // The trace, drawn only as far as the playhead has reached.
  const upTo = min(playhead, SAMPLES);
  stroke('#4A90D9');
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < upTo; i++) {
    vertex(x + (i / (SAMPLES - 1)) * w, plotY(y, h, wave.data[i]));
  }
  endShape();

  // Threshold line
  stroke('#D64545');
  strokeWeight(2);
  drawingContext.setLineDash([8, 5]);
  line(x, ty, x + w, ty);
  drawingContext.setLineDash([]);

  if (replaying) {
    stroke('#5B7186');
    strokeWeight(1);
    const hx = x + (upTo / (SAMPLES - 1)) * w;
    line(hx, y, hx, y + h);
  }
  pop();

  // Peak markers, revealed as the playhead passes them.
  for (const p of wave.peaks) {
    if (p.i > upTo) continue;
    const mx = x + (p.i / (SAMPLES - 1)) * w;
    const my = plotY(y, h, p.v);
    const hit = p.v >= thr;
    noStroke();
    fill(hit ? '#D64545' : '#8AA6BF');
    circle(mx, my, 9);
    const nearTop = my < y + h * 0.12;
    textAlign(CENTER, nearTop ? TOP : BOTTOM);
    textSize(10);
    text(hit ? 'TRIGGERED' : 'ignored', mx, my + (nearTop ? 7 : -7));
  }

  noStroke();
  fill('#D64545');
  textAlign(LEFT, CENTER);
  textSize(12);
  text('threshold ' + nf(thr, 0, 2), x + 6, ty - 9);

  fill('#8AA6BF');
  textAlign(RIGHT, TOP);
  textSize(11);
  text('sound level', x + w - 6, y + 6);
  textAlign(CENTER, TOP);
  text('time →', x + w / 2, y + h + 2);
}

function drawVerdict(x, y, w, h) {
  const wave = currentWave();
  const thr = thresholdSlider.value();
  const clapIdx = floor(SAMPLES * CLAP_AT);

  // The clap is whichever peak sits nearest where we planted it.
  let clap = wave.peaks[0];
  for (const p of wave.peaks) {
    if (abs(p.i - clapIdx) < abs(clap.i - clapIdx)) clap = p;
  }
  const clapHeard = clap.v >= thr;
  const falseTriggers = wave.peaks.filter(p => p !== clap && p.v >= thr).length;

  noStroke();
  fill('white');
  rect(x, y, w, h, 6);

  const good = clapHeard && falseTriggers === 0;
  fill(good ? '#3E9E6E' : '#D64545');
  rect(x, y, 6, h, 3);

  textAlign(LEFT, TOP);
  textSize(16);
  fill(good ? '#2E7D4F' : '#C0392B');
  let verdict;
  if (good) verdict = 'Tuned: the clap triggers and nothing else does.';
  else if (!clapHeard && falseTriggers === 0)
    verdict = 'Threshold too high — the clap is missed entirely.';
  else if (clapHeard) verdict = falseTriggers + ' false trigger' +
    (falseTriggers === 1 ? '' : 's') + ' as well as the clap.';
  else verdict = 'Worst case: the clap is missed and ' + falseTriggers +
    ' background noise' + (falseTriggers === 1 ? '' : 's') + ' trigger instead.';
  text(verdict, x + 18, y + 10, w - 36);

  fill('#4A5A68');
  textSize(13);
  text(SCENARIOS[scenarioSelect.value()].blurb +
       '  Clap peaks at ' + nf(clap.v, 0, 2) + '; the loudest background peak ' +
       'is ' + nf(max(...wave.peaks.filter(p => p !== clap).map(p => p.v)), 0, 2) +
       '. Any threshold between those two works — and the gap between them is ' +
       'how much room the tuning has.',
       x + 18, y + 36, w - 36, h - 46);
}

function drawControlLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Threshold: ' + nf(thresholdSlider.value(), 0, 2),
       10, drawHeight + 58);
}

function startReplay() {
  playhead = 0;
  replaying = true;
}

function resetSimulation() {
  scenarioSelect.selected('Noisy room');
  thresholdSlider.value(0.80);
  playhead = SAMPLES;
  replaying = false;
}

// These two functions must be present for width responsiveness
function windowResized() {
  updateCanvasSize();
  resizeCanvas(containerWidth, containerHeight);
  thresholdSlider.size(canvasWidth - sliderLeftMargin - margin);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
