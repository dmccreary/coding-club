/* Bookmark Folder Structure - Mermaid MicroSim interaction script
   CANVAS_HEIGHT is declared in metadata.json (this sim renders from main.html).

   Every node in the flowchart is wired to the info panel: hovering previews a
   step, clicking pins it so the reader can keep it on screen while tracing the
   rest of the flow. nodeInfo must be defined in main.html before this loads.
*/

const infoDisplay = document.getElementById('info-display');
const defaultContent = infoDisplay.innerHTML;

// A pinned node stays in the panel until another node is clicked or the pin is
// cleared, so hovering elsewhere does not wipe the step being read.
let pinnedNodeId = null;

// Mermaid v11 emits its classDef colours as `#<svg-id> .<class> > * { ... !important }`.
// An id in that selector outranks anything an external stylesheet can write, so the
// pinned outline has to be set as an inline !important style rather than in style.css.
const PIN_STROKE = '#B87B12';
const PIN_WIDTH = '4px';

function renderNodeInfo(nodeId, pinned) {
    const info = nodeInfo[nodeId];
    if (!info) return;
    infoDisplay.innerHTML =
        '<div class="info-title">' + info.title + '</div>' +
        '<div class="info-content">' + info.description + '</div>' +
        (pinned ? '<div class="info-pin">Pinned &mdash; click this step again to unpin.</div>' : '');
}

function showNodeInfo(nodeId) {
    if (pinnedNodeId) return;      // a pinned step wins over hover
    renderNodeInfo(nodeId, false);
}

function clearNodeInfo() {
    if (pinnedNodeId) return;
    infoDisplay.innerHTML = defaultContent;
}

function togglePin(nodeId) {
    if (pinnedNodeId === nodeId) {
        pinnedNodeId = null;
        infoDisplay.innerHTML = defaultContent;
    } else {
        pinnedNodeId = nodeId;
        renderNodeInfo(nodeId, true);
    }
    highlightPinnedNode();
    advanceCounter(nodeId);
}

/* Optional running total. A sim opts in by defining nodeAdvance in main.html;
   without it this is a no-op, so the behaviour is additive for every other
   Mermaid sim in the book. The counter box lives outside #info-display so that
   pinning a step does not wipe it. */
let counterTotal = 0;

function advanceCounter(nodeId) {
    if (typeof nodeAdvance === 'undefined') return;
    const step = nodeAdvance[nodeId];
    if (!step) return;
    counterTotal += step;
    const el = document.getElementById('counter-value');
    if (el) el.textContent = Math.round(counterTotal * 10) / 10;
}

function highlightPinnedNode() {
    document.querySelectorAll('.node').forEach(node => {
        const pinned = nodeIdOf(node) === pinnedNodeId;
        node.classList.toggle('node-pinned', pinned);
        node.querySelectorAll('rect, polygon, circle, path').forEach(shape => {
            if (pinned) {
                shape.style.setProperty('stroke', PIN_STROKE, 'important');
                shape.style.setProperty('stroke-width', PIN_WIDTH, 'important');
            } else {
                shape.style.removeProperty('stroke');
                shape.style.removeProperty('stroke-width');
            }
        });
    });
}

// Mermaid v11 emits ids like "mermaid-<ts>-flowchart-<NodeId>-<index>", so anchor
// on the flowchart- segment and drop the trailing index.
function nodeIdOf(node) {
    return (node.id.match(/flowchart-(.+)-\d+$/) || [])[1];
}

function setupNodeInteractions() {
    document.querySelectorAll('.node').forEach(node => {
        const nodeId = nodeIdOf(node);
        if (typeof nodeInfo === 'undefined' || !nodeInfo[nodeId]) return;
        node.addEventListener('mouseenter', () => showNodeInfo(nodeId));
        node.addEventListener('mouseleave', clearNodeInfo);
        node.addEventListener('click', () => togglePin(nodeId));
    });
}

// Poll until Mermaid has finished rendering the SVG before binding listeners.
function waitForMermaid() {
    const mermaidDiv = document.querySelector('.mermaid');
    const svg = mermaidDiv ? mermaidDiv.querySelector('svg') : null;
    const nodes = document.querySelectorAll('.node');

    if (svg && nodes.length > 0) {
        setupNodeInteractions();
    } else {
        setTimeout(waitForMermaid, 100);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(waitForMermaid, 100));
} else {
    setTimeout(waitForMermaid, 100);
}
