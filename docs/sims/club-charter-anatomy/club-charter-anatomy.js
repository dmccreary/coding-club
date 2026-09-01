// Anatomy of a Club Charter - vis-network
// CANVAS_HEIGHT: 560
// Bloom: Understand (L2), verb "differentiate"
// A charter is one document made of five distinct sections. Each edge names what
// that section governs, and clicking a node gives a definition plus a concrete
// example, so the five terms stop reading as loose synonyms.

// ---------- palette (fixed by the book's style guide) ----------
const AMBER = '#F5A623';
const AMBER_BORDER = '#B87B12';
const SKY_BLUE = '#4A90D9';
const SKY_BORDER = '#2E6BA8';
const EDGE_GREY = '#7A8A99';
const EDGE_HIGHLIGHT = '#B87B12';

// ---------- graph data ----------
// Fixed pentagon positions around the pinned centre node; physics is off so the
// layout is identical on every load and labels never drift under the panel.
const nodeData = [
    {
        id: 'charter', label: 'Club Charter', x: 0, y: 0, kind: 'center',
        definition: 'The single founding document that states what a club is, how it behaves, and how it runs.',
        example: 'A two-page charter posted on the club website and handed to every new family at sign-up.'
    },
    {
        id: 'values', label: 'Club Values', x: 0, y: -260, kind: 'section',
        definition: 'The short list of beliefs the club will not trade away, written so members can tell when a decision violates one.',
        example: '"Everyone gets keyboard time" -- which is why the club buys a second laptop instead of a nicer projector.'
    },
    {
        id: 'conduct', label: 'Code of Conduct', x: 360, y: -80, kind: 'section',
        definition: 'The rules for how members treat each other, and the consequences when someone breaks them.',
        example: '"No laughing at anyone else\'s code." A repeat violation means a call home before the next session.'
    },
    {
        id: 'bylaws', label: 'Club Bylaws', x: 300, y: 230, kind: 'section',
        definition: 'The operating rules of the club as an organisation: meeting frequency, quorum, membership, dues, and how the charter itself gets amended.',
        example: '"The club meets the first and third Saturday. Changing the charter needs a two-thirds vote of active members."'
    },
    {
        id: 'decisions', label: 'Decision-Making Process', x: -300, y: 230, kind: 'section',
        definition: 'The stated method for reaching a decision, including who decides what and what happens in a tie.',
        example: 'Project choices go to a member vote; spending over 100 dollars is the club leader\'s call after mentors weigh in.'
    },
    {
        id: 'roles', label: 'Roles and Responsibilities', x: -360, y: -80, kind: 'section',
        definition: 'The named jobs in the club and the specific duties attached to each one.',
        example: 'The Equipment Lead counts the kits at the end of every session and orders replacements before stock runs out.'
    }
];

const edgeData = [
    { from: 'charter', to: 'values', label: 'states what we believe' },
    { from: 'charter', to: 'conduct', label: 'states how we behave' },
    { from: 'charter', to: 'bylaws', label: 'states our operating rules' },
    { from: 'charter', to: 'decisions', label: 'states how we decide' },
    { from: 'charter', to: 'roles', label: 'states who does what' }
];

let nodes, edges, network;

// Screen pixels the right-hand panel and the title band take out of the canvas.
const RIGHT_PANEL_PX = 320;
const TITLE_BAND_PX = 46;

// ---------- environment detection ----------
// Wheel zoom and drag-pan would hijack page scrolling inside a chapter iframe,
// so they turn on only when main.html is opened standalone. Nav buttons always show.
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
                face: 'Arial'
            },
            borderWidth: isCenter ? 4 : 3,
            widthConstraint: { maximum: isCenter ? 150 : 125 },
            margin: isCenter ? 16 : 10,
            fixed: { x: isCenter, y: isCenter }   // the charter stays at the centre
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
            dragNodes: true,
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
        ? '<div class="info-relation">The charter ' + rel.label + '.</div>'
        : '';
    document.getElementById('info-content').innerHTML =
        '<div class="info-label">' + n.label + '</div>' +
        relLine +
        '<p><strong>What it governs:</strong> ' + n.definition + '</p>' +
        '<p><strong>Example:</strong> ' + n.example + '</p>';
}

function clearNodeInfo() {
    document.getElementById('info-content').innerHTML =
        '<p class="info-placeholder">Click any section to see what it governs and a real example.</p>';
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
