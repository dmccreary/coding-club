// Coding Club Ecosystem Map - vis-network
// CANVAS_HEIGHT: 560
// Bloom: Understand (L2), verb "differentiate"
// A coding club sits next to six neighbouring educational contexts. Each edge
// carries the phrase that names the relationship, and clicking a node explains
// what that context is AND how a coding club differs from it.

// ---------- palette (fixed by the book's style guide) ----------
const AMBER = '#F5A623';
const AMBER_BORDER = '#B87B12';
const SKY_BLUE = '#4A90D9';
const SKY_BORDER = '#2E6BA8';
const EDGE_GREY = '#7A8A99';
const EDGE_HIGHLIGHT = '#B87B12';

// ---------- graph data ----------
// x/y are fixed so the radial layout is identical on every load; physics is
// off, which keeps labels legible and stops nodes drifting under the panel.
const nodeData = [
    {
        id: 'club', label: 'Coding Club', x: 0, y: 0, kind: 'center',
        definition: 'A recurring, voluntary group where young people write code together with mentors present, outside of a graded classroom.',
        difference: 'This is the centre of the map. Everything around it overlaps with a coding club without being one.'
    },
    {
        id: 'maker', label: 'Maker Space', x: 300, y: -150, kind: 'context',
        definition: 'A shared workshop stocked with tools -- 3D printers, soldering irons, hand tools -- where people build physical things.',
        difference: 'A maker space is defined by its tools and its room; a coding club is defined by its people and its schedule. A club can meet inside a maker space and borrow its soldering irons, but the club still exists if it moves to a library table.'
    },
    {
        id: 'stem', label: 'STEM Education', x: 320, y: 130, kind: 'context',
        definition: 'Teaching that integrates science, technology, engineering, and mathematics, usually as a curriculum-wide goal.',
        difference: 'STEM education is a goal a school district sets; a coding club is one concrete way to deliver part of it. A district can pursue STEM goals with no coding club at all.'
    },
    {
        id: 'cs', label: 'Computer Science Education', x: 60, y: 250, kind: 'context',
        definition: 'The formal study of computation -- algorithms, data structures, complexity, and how machines execute instructions.',
        difference: 'Computer science education covers far more than a club can. A coding club teaches a chosen subset, picked for what students can build in a two-hour session, not for exam coverage.'
    },
    {
        id: 'literacy', label: 'Digital Literacy', x: -250, y: 220, kind: 'context',
        definition: 'The ability to find, evaluate, create, and communicate information using digital tools safely and effectively.',
        difference: 'Digital literacy is an outcome; a coding club is an activity that builds toward it. A student can become digitally literate through a club, a class, or neither.'
    },
    {
        id: 'afterschool', label: 'After School Program', x: -330, y: -40, kind: 'context',
        definition: 'Any structured, supervised activity that runs in the hours between the end of the school day and the end of the working day.',
        difference: 'This names a time slot and a supervision model, not a subject. A coding club is commonly scheduled as one, but a Saturday-morning library club is still a coding club.'
    },
    {
        id: 'extracurricular', label: 'Extracurricular Learning', x: -140, y: -230, kind: 'context',
        definition: 'Voluntary learning that happens outside the graded curriculum, driven by student interest rather than a required course.',
        difference: 'This is the broad category a coding club belongs to, alongside debate team and orchestra. The category says nothing about what is being learned.'
    }
];

const edgeData = [
    { from: 'club', to: 'maker', label: 'often shares tools with' },
    { from: 'club', to: 'stem', label: 'is one delivery model for' },
    { from: 'club', to: 'cs', label: 'teaches a subset of' },
    { from: 'club', to: 'literacy', label: 'builds toward' },
    { from: 'club', to: 'afterschool', label: 'is commonly scheduled as' },
    { from: 'club', to: 'extracurricular', label: 'is a category of' }
];

let nodes, edges, network;

// Screen pixels the right-hand panel and the title band take out of the canvas.
const RIGHT_PANEL_PX = 320;
const TITLE_BAND_PX = 46;

// ---------- environment detection ----------
// Mouse wheel zoom and drag-pan would fight with page scrolling when the sim is
// embedded in a chapter, so they are enabled only when main.html is opened on
// its own. Navigation buttons are always available.
function isInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function buildNodes() {
    return nodeData.map(n => {
        const isCenter = n.kind === 'center';
        return {
            id: n.id,
            label: n.label,
            x: n.x,
            y: n.y,
            shape: 'ellipse',
            color: {
                background: isCenter ? AMBER : SKY_BLUE,
                border: isCenter ? AMBER_BORDER : SKY_BORDER,
                highlight: {
                    background: isCenter ? AMBER : SKY_BLUE,
                    border: '#222222'
                }
            },
            font: {
                color: isCenter ? '#000000' : '#FFFFFF',
                size: isCenter ? 20 : 16,
                face: 'Arial',
                bold: isCenter ? { color: '#000000', size: 20, face: 'Arial' } : undefined
            },
            borderWidth: isCenter ? 4 : 3,
            widthConstraint: { maximum: isCenter ? 160 : 130 },
            margin: isCenter ? 16 : 10,
            fixed: { x: isCenter, y: isCenter }   // the centre node is pinned
        };
    });
}

function buildEdges() {
    return edgeData.map((e, i) => ({
        id: i,
        from: e.from,
        to: e.to,
        label: e.label,
        color: { color: EDGE_GREY, highlight: EDGE_HIGHLIGHT, hover: EDGE_HIGHLIGHT },
        width: 2,
        font: { size: 14, face: 'Arial', color: '#333333', strokeWidth: 5, strokeColor: '#F0F8FF', align: 'horizontal' }
    }));
}

function initializeNetwork() {
    const enableMouse = !isInIframe();

    nodes = new vis.DataSet(buildNodes());
    edges = new vis.DataSet(buildEdges());

    const options = {
        layout: { improvedLayout: false },
        physics: { enabled: false },
        interaction: {
            hover: true,
            selectConnectedEdges: false,
            dragNodes: true,          // learners may reposition nodes
            dragView: enableMouse,
            zoomView: enableMouse,
            navigationButtons: true,
            keyboard: { enabled: false }
        },
        nodes: {
            shadow: { enabled: true, color: 'rgba(0,0,0,0.2)', size: 5, x: 2, y: 2 }
        },
        edges: {
            arrows: { to: { enabled: false } },
            smooth: { type: 'continuous', roundness: 0.2 }
        }
    };

    const container = document.getElementById('network');
    network = new vis.Network(container, { nodes: nodes, edges: edges }, options);

    network.on('selectNode', function (params) {
        showNodeInfo(params.nodes[0]);
    });

    network.on('deselectNode', clearNodeInfo);

    // Hovering an edge enlarges its label so a crowded map stays readable.
    network.on('hoverEdge', function (params) {
        edges.update({ id: params.edge, width: 4, font: { size: 18, face: 'Arial', color: EDGE_HIGHLIGHT, strokeWidth: 6, strokeColor: '#F0F8FF' } });
    });

    network.on('blurEdge', function (params) {
        edges.update({ id: params.edge, width: 2, font: { size: 14, face: 'Arial', color: '#333333', strokeWidth: 5, strokeColor: '#F0F8FF' } });
    });

    // vis-network runs its own fit() after the first draw, which would clobber a
    // one-shot camera call. Re-assert the view on every draw instead; applyView
    // is a no-op once the view matches, so the redraw loop settles immediately.
    network.on('afterDrawing', applyView);
}

// Extent of the laid-out graph, derived from the authored node coordinates plus
// a fixed allowance for how far an ellipse extends past its centre.
//
// This deliberately does NOT use network.getBoundingBox(): that reports canvas
// coordinates that shift with the current view, so re-running the fit compounded
// the offset and pushed the lower nodes off the bottom edge. Authored
// coordinates are fixed, which makes this function idempotent.
const NODE_HALF_W = 110;
const NODE_HALF_H = 45;

function graphBounds() {
    const xs = nodeData.map(n => n.x);
    const ys = nodeData.map(n => n.y);
    const left = Math.min.apply(null, xs) - NODE_HALF_W;
    const right = Math.max.apply(null, xs) + NODE_HALF_W;
    const top = Math.min.apply(null, ys) - NODE_HALF_H;
    const bottom = Math.max.apply(null, ys) + NODE_HALF_H;
    return {
        width: right - left,
        height: bottom - top,
        cx: (left + right) / 2,
        cy: (top + bottom) / 2
    };
}

// vis-network's own fit() fills the WHOLE canvas, which puts nodes underneath the
// right-hand panel and the title. So size the graph against the clear strip
// instead, then move the camera right and down by half of each reserved band so
// the graph re-centres inside it. moveTo takes graph units, hence dividing the
// pixel offsets by the scale.
function computeView() {
    const el = document.getElementById('network');
    const reserved = Math.min(RIGHT_PANEL_PX, el.clientWidth * 0.5);
    const availW = el.clientWidth - reserved;
    const availH = el.clientHeight - TITLE_BAND_PX;
    const bb = graphBounds();
    if (!(bb.width > 0) || !(bb.height > 0) || availW <= 0 || availH <= 0) return null;

    const scale = Math.min(availW / bb.width, availH / bb.height) * 0.94;
    return {
        scale: scale,
        position: {
            x: bb.cx + (reserved / 2) / scale,
            y: bb.cy - (TITLE_BAND_PX / 2) / scale
        }
    };
}

function applyView() {
    const target = computeView();
    if (!target) return;
    const scale = network.getScale();
    const pos = network.getViewPosition();
    if (Math.abs(scale - target.scale) < 1e-4 &&
        Math.abs(pos.x - target.position.x) < 0.5 &&
        Math.abs(pos.y - target.position.y) < 0.5) {
        return;   // already framed - do not trigger another redraw
    }
    network.moveTo({
        position: target.position,
        scale: target.scale,
        animation: false
    });
}

function showNodeInfo(nodeId) {
    const n = nodeData.find(d => d.id === nodeId);
    if (!n) return;
    const rel = edgeData.find(e => e.to === nodeId);
    const relLine = rel
        ? '<div class="info-relation">A coding club ' + rel.label + ' this.</div>'
        : '';
    document.getElementById('info-content').innerHTML =
        '<div class="info-label">' + n.label + '</div>' +
        relLine +
        '<p><strong>What it is:</strong> ' + n.definition + '</p>' +
        '<p><strong>How a coding club differs:</strong> ' + n.difference + '</p>';
}

function clearNodeInfo() {
    document.getElementById('info-content').innerHTML =
        '<p class="info-placeholder">Click any circle to see what it means and how a coding club differs from it.</p>';
}

function reset() {
    network.destroy();
    initializeNetwork();
    clearNodeInfo();
}

document.addEventListener('DOMContentLoaded', function () {
    initializeNetwork();

    // Keep the graph framed when the container is resized.
    if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(() => { if (network) applyView(); })
            .observe(document.getElementById('network'));
    }

    document.getElementById('reset-btn').addEventListener('click', reset);
});
