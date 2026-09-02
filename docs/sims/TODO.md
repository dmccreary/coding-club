# MicroSim / Diagram Specification TODO

This file tracks unimplemented MicroSim and diagram specifications found in
`docs/chapters/*/index.md`. Each entry below has a full JSON spec in
`docs/sims/TODO/<sim-id>.json`, ready to scaffold with
`scaffold-microsims-from-todo.py`. Rows marked :white_check_mark: are built and
link to the finished MicroSim instead of the spec.

Note: `create-microsim-todo-json-files.py` counts a sim as implemented when it
has a `main.html`, which every scaffolded directory does. Its "already
implemented" figure is therefore not trustworthy in this repo -- the counts
above are maintained by hand as sims are actually built.

- Chapters scanned: 35
- Total diagram specs found: 129
- Already implemented: 102
- **Unimplemented (TODO): 27**

Regenerate this list after adding or editing chapter diagram specs:

```bash
python3 ~/.claude/skills/microsim-utils/scripts/create-microsim-todo-json-files.py --project-dir /Users/dan/Documents/ws/coding-club
```

## Unimplemented Diagrams by Chapter

### Chapter 1: What Is a Coding Club (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`club-improvement-cycle`](club-improvement-cycle/index.md) | The Club Improvement Cycle | p5.js | Understand (L2) |
| :white_check_mark: [`coding-club-ecosystem-map`](coding-club-ecosystem-map/index.md) | Coding Club Ecosystem Map | vis-network | Understand (L2) |

### Chapter 2: AI, Intelligent Textbooks, and Where Coding Clubs Meet (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`book-levels`](book-levels/index.md) | Levels of Intelligent Textbook Sophistication | p5.js | None |

### Chapter 3: Writing Your Club Charter and Safety Policies (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`club-charter-anatomy`](club-charter-anatomy/index.md) | Anatomy of a Club Charter | vis-network | Understand (L2) |
| :white_check_mark: [`conflict-resolution-workflow`](conflict-resolution-workflow/index.md) | Handling a Conflict or Complaint | Mermaid | Apply (L3) |

### Chapter 4: Club Roles, Governance Structure, and Branding (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`club-governance-map`](club-governance-map/index.md) | Club Governance at a Glance | vis-network | Understand (L2) |

### Chapter 5: Gauging Interest and Holding Your First Meeting (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`club-feasibility-decision-path`](club-feasibility-decision-path/index.md) | Should You Start This Club? | Mermaid | Apply (L3) |
| :white_check_mark: [`interest-survey-results`](interest-survey-results/index.md) | Interest Survey Results | Chart.js | Analyze (L4) |

### Chapter 6: Growing, Branding, and Promoting Your Club (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| [`club-growth-path`](TODO/club-growth-path.json) | Club Growth Path | vis-timeline | Understand (L2) |

### Chapter 7: Telling Your Club's Story and Designing the Classroom (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`coding-club-room-layout`](coding-club-room-layout/index.md) | Coding Club Room Layout | p5.js | Apply (L3) |

### Chapter 8: "Running a Session: Room Layout to Cleanup" (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| [`session-room-safety-map`](TODO/session-room-safety-map.json) | Session Room Safety and Logistics Map | Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts) | Remember (L1) |

### Chapter 9: "Mentors, Students, and the 3:1 Ratio" (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| [`three-kinds-of-mentors`](TODO/three-kinds-of-mentors.json) | Three Kinds of Mentors | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Understand (L2) |

### Chapter 11: Choosing a Schedule and Building Registration (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| [`four-scheduling-models`](TODO/four-scheduling-models.json) | Four Coding Club Scheduling Models | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Evaluate (L5) |
| :white_check_mark: [`mentor-gated-registration-flow`](mentor-gated-registration-flow/index.md) | Mentor-Gated Registration Flow | Mermaid | Apply (L3) |

### Chapter 12: Running Events and Learning From Retrospectives (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`event-retrospective-process`](event-retrospective-process/index.md) | The Event Retrospective Process | Mermaid | Apply (L3) |

### Chapter 14: "Computational Thinking, Scratch, and Python Basics" (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| [`five-computational-thinking-skills`](TODO/five-computational-thinking-skills.json) | The Five Computational Thinking Skills | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Remember (L1) |

### Chapter 15: Designing a Curriculum With Challenge Cards and Portfolios (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| [`anatomy-of-a-challenge-card`](TODO/anatomy-of-a-challenge-card.json) | Anatomy of a Challenge Card | Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts) | Remember (L1) |
| [`three-curriculum-tracks`](TODO/three-curriculum-tracks.json) | Three Curriculum Tracks | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Understand (L2) |

### Chapter 16: Physical Computing and Electrical Safety Basics (15)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`blinking-led-breadboard-circuit`](blinking-led-breadboard-circuit/index.md) | Blinking LED Breadboard Circuit | p5.js | Apply (L3) |
| :white_check_mark: [`breadboard-tie-point-explorer`](breadboard-tie-point-explorer/index.md) | Breadboard Tie-Point Explorer | p5.js | Remember (L1) |
| :white_check_mark: [`digital-signal-high-low-chart`](digital-signal-high-low-chart/index.md) | Digital Signal HIGH/LOW Chart | Chart.js | None |
| [`electrical-safety-rules-poster`](TODO/electrical-safety-rules-poster.json) | Electrical Safety Rules Poster | Interactive Infographic Overlay (grid-diagram.js, four-panel comparison poster + rectangular hover zones) | Remember (L1) |
| [`led-anatomy`](TODO/led-anatomy.json) | LED Anatomy | Interactive Infographic Overlay (diagram.js, callout engine) | Remember (L1) |
| :white_check_mark: [`multimeter-usage-simulator`](multimeter-usage-simulator/index.md) | Multimeter Usage Simulator | p5.js | Apply (L3) |
| [`normal-circuit-vs-short-circuit`](TODO/normal-circuit-vs-short-circuit.json) | Normal Circuit vs. Short Circuit | Interactive Infographic Overlay (diagram.js, side-by-side comparison + numbered callouts) | Understand (L2) |
| :white_check_mark: [`ohms-law-current-calculator`](ohms-law-current-calculator/index.md) | Ohm's Law Current Calculator | p5.js | Apply (L3) |
| :white_check_mark: [`physical-computing-loop`](physical-computing-loop/index.md) | The Physical Computing Loop | p5.js | Understand (L2) |
| :white_check_mark: [`potentiometer-analog-input-explorer`](potentiometer-analog-input-explorer/index.md) | Potentiometer Analog Input Explorer | p5.js | Apply (L3) |
| :white_check_mark: [`push-button-digital-input-circuit`](push-button-digital-input-circuit/index.md) | Push Button Digital Input Circuit | p5.js | Apply (L3) |
| :white_check_mark: [`pwm-analog-output-brightness-explorer`](pwm-analog-output-brightness-explorer/index.md) | PWM Analog Output Brightness Explorer | p5.js | Understand (L2) |
| :white_check_mark: [`resistor-color-code-calculator`](resistor-color-code-calculator/index.md) | Resistor Color Code Calculator | p5.js | None |
| :white_check_mark: [`soldering-safety-workflow`](soldering-safety-workflow/index.md) | Soldering Safety Workflow | Mermaid | Apply (L3) |
| [`static-electricity-precaution-checklist`](TODO/static-electricity-precaution-checklist.json) | Static Electricity Precaution Checklist | Interactive Infographic Overlay (checklist overlay, illustrated classroom scene + clickable hotspots) | Remember (L1) |

### Chapter 17: Sensors, Displays, Motors, and Robot Chassis (15)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`circuit-symbol-reader`](circuit-symbol-reader/index.md) | Circuit Symbol Reader | p5.js | Remember (L1) |
| :white_check_mark: [`differential-drive-chassis-explorer`](differential-drive-chassis-explorer/index.md) | Differential Drive Chassis Explorer | p5.js | Understand (L2) |
| :white_check_mark: [`h-bridge-direction-speed-control`](h-bridge-direction-speed-control/index.md) | H-Bridge Direction and Speed Control | p5.js | Apply (L3) |
| :white_check_mark: [`led-matrix-pattern-designer`](led-matrix-pattern-designer/index.md) | LED Matrix Pattern Designer | p5.js | Create (L6) |
| :white_check_mark: [`motor-type-comparison-explorer`](motor-type-comparison-explorer/index.md) | Motor Type Comparison Explorer | p5.js | Analyze (L4) |
| :white_check_mark: [`oled-coordinate-system`](oled-coordinate-system/index.md) | OLED Coordinate System (reused MicroSim) | p5.js | None |
| :white_check_mark: [`photoresistor-voltage-divider-explorer`](photoresistor-voltage-divider-explorer/index.md) | Photoresistor Voltage Divider Explorer | p5.js | Apply (L3) |
| [`pir-detection-zone-map`](TODO/pir-detection-zone-map.json) | PIR Detection Zone Map | Interactive Infographic Overlay (diagram.js, top-down room view + clickable zones) | Understand (L2) |
| :white_check_mark: [`sensor-type-picker`](sensor-type-picker/index.md) | Sensor Type Picker | p5.js | Apply (L3) |
| :white_check_mark: [`servo-angle-pulse-width-explorer`](servo-angle-pulse-width-explorer/index.md) | Servo Angle Pulse-Width Explorer | p5.js | Apply (L3) |
| :white_check_mark: [`seven-segment-display`](seven-segment-display/index.md) | Seven Segment Display Explorer (reused MicroSim) | p5.js | None |
| :white_check_mark: [`sound-threshold-detector`](sound-threshold-detector/index.md) | Sound Threshold Detector | p5.js | Understand (L2) |
| :white_check_mark: [`stepper-motor-step-sequence`](stepper-motor-step-sequence/index.md) | Stepper Motor Step Sequence | Mermaid | Apply (L3) |
| :white_check_mark: [`temperature-sensor-reading-explorer`](temperature-sensor-reading-explorer/index.md) | Temperature Sensor Reading Explorer | p5.js | Apply (L3) |
| :white_check_mark: [`ultrasonic-ranging`](ultrasonic-ranging/index.md) | Ultrasonic Ranging Explorer (reused MicroSim) | p5.js | None |

### Chapter 18: Robots, USB Basics, and Electronics Workshop Skills (3)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`circuit-troubleshooting-workflow`](circuit-troubleshooting-workflow/index.md) | Circuit Troubleshooting Decision Workflow | Mermaid | Analyze (L4) |
| :white_check_mark: [`collision-avoidance-control-loop`](collision-avoidance-control-loop/index.md) | Collision Avoidance Robot Control Loop | p5.js | Apply (L3) |
| :white_check_mark: [`usb-connector-comparison`](usb-connector-comparison/index.md) | USB-A vs USB-C Connector Comparison | p5.js | Analyze (L4) |

### Chapter 19: Raspberry Pi Pico, MicroPython, and the Moving Rainbow Kit (8)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`color-wheel-hue-explorer`](color-wheel-hue-explorer/index.md) | Color Wheel Hue Explorer | p5.js | Apply (L3) |
| :white_check_mark: [`micropython-syntax-checker`](micropython-syntax-checker/index.md) | MicroPython Syntax Checker | p5.js | Remember (L1) |
| :white_check_mark: [`moving-rainbow-wiring-diagram`](moving-rainbow-wiring-diagram/index.md) | Moving Rainbow Wiring Diagram | p5.js | Apply (L3) |
| :white_check_mark: [`neopixel-loop-pixel-stepper`](neopixel-loop-pixel-stepper/index.md) | MicroPython Loop Pixel Stepper | p5.js | Apply (L3) |
| :white_check_mark: [`pico-pinout-explorer`](pico-pinout-explorer/index.md) | Raspberry Pi Pico Pinout Explorer | p5.js | None |
| :white_check_mark: [`pico-repl-vs-script-workflow`](pico-repl-vs-script-workflow/index.md) | REPL vs. Saved Script Workflow | p5.js | Understand (L2) |
| :white_check_mark: [`robot-kit-assembly-sequence`](robot-kit-assembly-sequence/index.md) | Robot Kit Assembly Sequence | p5.js | Apply (L3) |
| :white_check_mark: [`seasonal-led-pattern-gallery`](seasonal-led-pattern-gallery/index.md) | Seasonal LED Pattern Gallery | p5.js | Analyze (L4) |

### Chapter 20: Sensor, Sound, and IoT Project Kits (3)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`frequency-spectrum-display-explorer`](frequency-spectrum-display-explorer/index.md) | Frequency Spectrum Display Explorer | p5.js | Understand (L2) |
| :white_check_mark: [`gyroscope-orientation-data-explorer`](gyroscope-orientation-data-explorer/index.md) | Gyroscope Orientation Data Explorer | p5.js | Understand (L2) |
| :white_check_mark: [`robot-emotion-display-control-panel`](robot-emotion-display-control-panel/index.md) | Robot Emotion Display Control Panel | p5.js | Apply (L3) |

### Chapter 21: Managing Your Kit Inventory and Signal Processing Kits (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`kit-lifecycle-workflow`](kit-lifecycle-workflow/index.md) | Kit Lifecycle Workflow | Mermaid | Analyze (L4) |
| [`kits-ready-to-go-further`](TODO/kits-ready-to-go-further.json) | Kits Ready to Go Further | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Remember (L1) |

### Chapter 22: Purchasing and Configuring Club Devices (4)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`device-lifecycle-workflow`](device-lifecycle-workflow/index.md) | Device Lifecycle Workflow | Mermaid | Analyze (L4) |
| :white_check_mark: [`grant-budget-laptop-calculator`](grant-budget-laptop-calculator/index.md) | Grant Budget Laptop Calculator | p5.js | Apply (L3) |
| :white_check_mark: [`platform-management-workflow`](platform-management-workflow/index.md) | Platform Management Workflow | Mermaid | Analyze (L4) |
| [`youth-safety-layers`](TODO/youth-safety-layers.json) | Layers of Youth Digital Safety | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Understand (L2) |

### Chapter 23: Network, Peripherals, and the Device Lifecycle (3)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`bookmark-folder-structure`](bookmark-folder-structure/index.md) | Bookmark Folder Structure | Mermaid | Understand (L2) |
| :white_check_mark: [`device-end-of-life-decision-workflow`](device-end-of-life-decision-workflow/index.md) | Device End-of-Life Decision Workflow | Mermaid | Analyze (L4) |
| [`peripheral-management-layers`](TODO/peripheral-management-layers.json) | Peripheral and Storage Management Layers | Interactive Infographic Overlay Guide (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Understand (L2) |

### Chapter 24: Tracking Student Data and Managing Club Communication (15)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`anonymized-attendance-chart`](anonymized-attendance-chart/index.md) | Anonymized Attendance Chart | Chart.js | Understand (L2) |
| :white_check_mark: [`calendar-setup-workflow`](calendar-setup-workflow/index.md) | Club Calendar Setup Workflow | Mermaid | Apply (L3) |
| :white_check_mark: [`consent-collection-workflow`](consent-collection-workflow/index.md) | Guardian Consent Collection Workflow | Mermaid | Analyze (L4) |
| [`data-backup-routine-timeline`](TODO/data-backup-routine-timeline.json) | Data Backup Routine Timeline | vis-timeline | Apply (L3) |
| [`data-retention-schedule`](TODO/data-retention-schedule.json) | Data Retention Schedule by Type | Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones) | Understand (L2) |
| :white_check_mark: [`email-list-segments-venn`](email-list-segments-venn/index.md) | Email List Segments | p5.js | Analyze (L4) |
| [`feedback-form-annotated`](TODO/feedback-form-annotated.json) | Annotated Feedback Form | Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones) | Understand (L2) |
| :white_check_mark: [`feedback-loop-cycle`](feedback-loop-cycle/index.md) | Feedback Loop Cycle | Mermaid | Understand (L2) |
| :white_check_mark: [`message-channel-decision-tree`](message-channel-decision-tree/index.md) | Message Channel Decision Tree | Mermaid | Evaluate (L5) |
| [`notification-lead-time-timeline`](TODO/notification-lead-time-timeline.json) | Notification Lead-Time Timeline | vis-timeline | Apply (L3) |
| :white_check_mark: [`progress-dashboard-explorer`](progress-dashboard-explorer/index.md) | Progress Dashboard Explorer | Chart.js | Analyze (L4) |
| :white_check_mark: [`progress-tracking-cycle`](progress-tracking-cycle/index.md) | Student Progress Tracking Cycle | Mermaid | Understand (L2) |
| :white_check_mark: [`saving-student-data-decision-tool`](saving-student-data-decision-tool/index.md) | Do You Actually Need This Data Field? | p5.js | Evaluate (L5) |
| [`spreadsheet-template-zones`](TODO/spreadsheet-template-zones.json) | Spreadsheet Template Zones | Interactive Infographic Overlay (grid-diagram.js, annotation-free poster + rectangular hover zones) | Understand (L2) |
| :white_check_mark: [`student-data-privacy-principles`](student-data-privacy-principles/index.md) | Student Data Privacy Principles | Mermaid | Understand (L2) |

### Chapter 25: Analyzing Club Data and Choosing the Right Tools (4)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`attendance-enrollment-trend-explorer`](attendance-enrollment-trend-explorer/index.md) | Attendance and Enrollment Trend Explorer | Chart.js | Analyze (L4) |
| :white_check_mark: [`automated-communication-pipeline`](automated-communication-pipeline/index.md) | Automated Communication Pipeline | Mermaid | Analyze (L4) |
| :white_check_mark: [`pivot-table-builder`](pivot-table-builder/index.md) | Pivot Table Builder | p5.js | Apply (L3) |
| :white_check_mark: [`student-growth-portfolio-network`](student-growth-portfolio-network/index.md) | Student Growth to Portfolio Network | vis-network | Understand (L2) |

### Chapter 26: Motivation, Badges, and Growth Mindset Coaching (4)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`growth-mindset-coaching-response-flow`](growth-mindset-coaching-response-flow/index.md) | Growth Mindset Coaching Response Flow | Mermaid | Analyze (L4) |
| [`intrinsic-vs-extrinsic-motivation-map`](TODO/intrinsic-vs-extrinsic-motivation-map.json) | Intrinsic vs Extrinsic Motivation Map | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Understand (L2) |
| [`leaderboard-vs-collaborative-challenge`](TODO/leaderboard-vs-collaborative-challenge.json) | Leaderboard vs Collaborative Challenge | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Evaluate (L5) |
| [`tangible-reward-ladder`](TODO/tangible-reward-ladder.json) | The Tangible Reward Ladder | Interactive Infographic Overlay (diagram.js, annotation-free illustration + numbered callouts) | Understand (L2) |

### Chapter 27: Encouraging Persistence and Student Voice (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`frustration-escalation-response-flow`](frustration-escalation-response-flow/index.md) | Frustration Escalation Response Flow | Mermaid | Analyze (L4) |
| [`showcase-wall-vs-peer-recognition`](TODO/showcase-wall-vs-peer-recognition.json) | Showcase Wall vs Peer Recognition Activity | Interactive Infographic Overlay (grid-diagram.js, annotation-free comparison poster + rectangular hover zones) | Evaluate (L5) |

### Chapter 28: Reaching Underserved Communities and Removing Barriers (2)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`access-barrier-to-fix-map`](access-barrier-to-fix-map/index.md) | Access Barrier to Fix Map | vis-network | Analyze (L4) |
| :white_check_mark: [`promotional-materials-recruiting-rubric`](promotional-materials-recruiting-rubric/index.md) | Promotional Materials Recruiting Rubric | p5.js | Evaluate (L5) |

### Chapter 29: Building Trust and Representation in Your Club (1)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`equity-audit-checklist`](equity-audit-checklist/index.md) | Coding Club Equity Audit Checklist | p5.js | Evaluate (L5) |

### Chapter 30: Budgeting, Fundraising, and Grant Writing (4)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`coding-club-budget-builder`](coding-club-budget-builder/index.md) | Coding Club Budget Builder | p5.js | Apply (L3) |
| :white_check_mark: [`funding-partnership-fit-map`](funding-partnership-fit-map/index.md) | Funding Partnership Fit Map | vis-network | Analyze (L4) |
| :white_check_mark: [`fundraising-channel-yield-comparison`](fundraising-channel-yield-comparison/index.md) | Fundraising Channel Yield Comparison | Chart.js | Analyze (L4) |
| :white_check_mark: [`grant-writing-tracking-workflow`](grant-writing-tracking-workflow/index.md) | Grant Writing and Tracking Workflow | Mermaid | Apply (L3) |

### Chapter 31: Tracking Expenses and Building Funding Partnerships (3)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`club-financial-operations-cycle`](club-financial-operations-cycle/index.md) | Club Financial Operations Cycle | Mermaid | Apply (L3) |
| [`institutional-funding-partnership-map`](TODO/institutional-funding-partnership-map.json) | Institutional Funding Partnership Map | vis-network | Analyze (L4) |
| :white_check_mark: [`membership-fee-model-comparison`](membership-fee-model-comparison/index.md) | Membership Fee Model Comparison | p5.js | Apply (L3) |

### Chapter 32: AI Agents for Registration, Scheduling, and Communication (7)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`ai-agent-loop-explorer`](ai-agent-loop-explorer/index.md) | AI Agent Loop Explorer | p5.js | Understand (L2) |
| :white_check_mark: [`ai-agent-roster-network`](ai-agent-roster-network/index.md) | Meet the Club's AI Agent Roster | vis-network | Understand (L2) |
| :white_check_mark: [`ai-content-drafting-pipeline`](ai-content-drafting-pipeline/index.md) | From Draft to Delivered — AI Content Pipeline | Mermaid | Analyze (L4) |
| :white_check_mark: [`human-in-the-loop-review-workflow`](human-in-the-loop-review-workflow/index.md) | Human-in-the-Loop Review Workflow | Mermaid | Evaluate (L5) |
| [`mentor-recruiting-influence-graph`](TODO/mentor-recruiting-influence-graph.json) | Building and Reading an Influence Graph | vis-network | Analyze (L4) |
| :white_check_mark: [`prompt-refinement-step-through`](prompt-refinement-step-through/index.md) | Prompt Refinement Step-Through | p5.js | Apply (L3) |
| :white_check_mark: [`survey-sentiment-dashboard`](survey-sentiment-dashboard/index.md) | Survey Themes and Sentiment Dashboard | Chart.js | Analyze (L4) |

### Chapter 33: AI-Customized Curriculum and Rolling Out New Agents (8)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`ai-agent-rollout-pipeline`](ai-agent-rollout-pipeline/index.md) | The AI Agent Rollout Pipeline | Mermaid | Understand (L2) |
| :white_check_mark: [`ai-lesson-customization-workflow`](ai-lesson-customization-workflow/index.md) | From Observation to Customized Lesson | Mermaid | Understand (L2) |
| :white_check_mark: [`ai-tool-selection-radar`](ai-tool-selection-radar/index.md) | Comparing AI Tools Against Selection Criteria | Chart.js | Evaluate (L5) |
| :white_check_mark: [`bias-privacy-risk-sorter`](bias-privacy-risk-sorter/index.md) | Bias Risk, Privacy Risk, or Neither? | p5.js | Evaluate (L5) |
| :white_check_mark: [`coding-help-agent-handoff`](coding-help-agent-handoff/index.md) | Where a Coding-Help Request Goes | Mermaid | Analyze (L4) |
| :white_check_mark: [`generic-vs-ai-challenge-card`](generic-vs-ai-challenge-card/index.md) | Template Card vs. AI-Customized Card | p5.js | Analyze (L4) |
| [`mentor-matching-schedule-optimizer`](TODO/mentor-matching-schedule-optimizer.json) | Matching Mentors and Optimizing a Schedule | vis-network | Analyze (L4) |
| :white_check_mark: [`specialized-agent-roster`](specialized-agent-roster/index.md) | Meet the Specialized Agent Roster | vis-network | Understand (L2) |

### Chapter 34: Establishing an Oversight Board and Inventory System (4)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`board-governance-cycle`](board-governance-cycle/index.md) | Board Governance Cycle | Mermaid | Analyze (L4) |
| :white_check_mark: [`club-inventory-lifecycle-workflow`](club-inventory-lifecycle-workflow/index.md) | Club Inventory Lifecycle Workflow | Mermaid | Analyze (L4) |
| :white_check_mark: [`mentor-recruiting-channel-effectiveness`](mentor-recruiting-channel-effectiveness/index.md) | Mentor Recruiting Channel Effectiveness | Chart.js | Analyze (L4) |
| :white_check_mark: [`oversight-board-org-chart`](oversight-board-org-chart/index.md) | Oversight Board Org Chart | vis-network | Remember (L1) |

### Chapter 35: Training Mentors and Building a Club That Outlasts You (3)

| Sim ID | Diagram Name | Library | Bloom Level |
|---|---|---|---|
| :white_check_mark: [`club-health-metrics-dashboard`](club-health-metrics-dashboard/index.md) | Club Health Metrics Dashboard | Chart.js | Evaluate (L5) |
| :white_check_mark: [`club-playbook-assembly-workflow`](club-playbook-assembly-workflow/index.md) | From Scattered Knowledge to a Club Playbook | Mermaid | Analyze (L4) |
| :white_check_mark: [`mentor-development-pipeline`](mentor-development-pipeline/index.md) | Mentor Development Pipeline | Mermaid | Analyze (L4) |

