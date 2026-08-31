#!/usr/bin/env python3
"""Generate concept-list.md and learning-graph.csv (with TaxonomyID) for the
Coding Club intelligent textbook. Concepts are organized into 15 taxonomy
categories in a fixed order; a concept may only depend on concepts in an
earlier category, or on an earlier concept within its own category. This
guarantees the result is a DAG by construction."""

import csv

# ---------------------------------------------------------------------------
# Category definitions: (TaxonomyID, ClassifierName, Color, FontColor, [concepts])
# Order matters: a concept may only depend on concepts in THIS category
# (earlier in the list) or in a PRECEDING category.
# ---------------------------------------------------------------------------

FOUND = [
    "Coding Club", "Maker Space", "STEM Education", "Computer Science Education",
    "Digital Literacy", "After School Program", "Extracurricular Learning",
    "Informal Learning", "Peer Learning", "Hands On Learning",
    "Project Based Learning", "Club Sustainability", "Single Leader Dependency",
    "Leadership Succession", "Continuous Improvement", "Post Event Notes",
    "Lessons Learned Log", "Club Evolution", "Hybrid Club Model",
    "AI In Education", "Generative AI", "AI Powered Club Tools",
    "Intelligent Textbook", "MicroSim", "Learning Graph",
    "Interactive Simulation", "Club History", "Club Benefits",
    "Library Coding Club", "Bookstore Coding Club", "Community Center Club",
    "School Based Club", "Club Mission Statement", "Club Vision",
    "Target Audience", "Course Reading Level",
]

GOV = [
    "Club Charter", "Club Values", "Code Of Conduct", "Volunteer Background Check",
    "Child Safety Policy", "Liability Considerations", "Parental Consent Form",
    "Photo Release Form", "Data Privacy Policy", "Anti Harassment Policy",
    "Conflict Resolution Process", "Club Bylaws", "Decision Making Process",
    "Roles And Responsibilities", "Club Leader Role", "Assistant Leader Role",
    "Mentor Role", "Student Role", "Parent Role", "Volunteer Coordinator Role",
    "Governance Structure", "Advisory Committee", "Club Policies Handbook",
    "Incident Reporting Process", "Emergency Contact List",
    "Insurance Considerations", "Venue Agreement", "Club Registration With Venue",
    "Legal Compliance Basics", "Trademark And Branding", "Club Naming Convention",
    "Club Logo Design",
]

LAUNCH = [
    # Launching & growing a club
    "Gauging Interest Survey", "Interest Survey Analysis", "Establishing A New Club",
    "Club Feasibility Assessment", "Founding Team", "First Club Meeting",
    "Meeting Agenda Design", "Promoting First Meeting", "Flyer Design",
    "Social Media Promotion", "Word Of Mouth Promotion", "Starting Small Strategy",
    "First Three Students", "Pilot Cohort", "Walk In Experience",
    "First Impression Design", "Parent Perception", "Student Perception",
    "Elevator Pitch", "Value Proposition Statement", "Club Growth Strategy",
    "Scaling A Club", "Multi Site Expansion", "Franchise Model", "Club Branding",
    "Welcome Statement Design", "Onboarding New Students", "Onboarding New Mentors",
    "Word Of Mouth Referral", "Community Outreach", "School Partnership Outreach",
    "Library Partnership Outreach", "Local Media Coverage", "Press Release Writing",
    "Grand Opening Event", "Club Anniversary Event", "Club Milestone Tracking",
    "Success Story Sharing", "Testimonial Collection", "Club Newsletter",
    "Club Website", "Club Social Media Account",
    # Classroom & session design (merged in)
    "Classroom Layout", "Monitors Facing Inward", "Center Table Design",
    "Challenge Card Display", "Seating Arrangement", "Power Strip Placement",
    "Cable Management", "Noise Level Management", "Lighting Considerations",
    "Room Temperature Comfort", "Storage For Kits", "Charging Station Setup",
    "Whiteboard Usage", "Session Time Block", "Session Warm Up Activity",
    "Session Wrap Up Activity", "Transition Between Activities",
    "Small Group Rotation", "Station Based Learning", "Safety Zone Marking",
    "Emergency Exit Awareness", "First Aid Kit Location", "Accessibility Of Space",
    "Restroom Break Policy", "Snack And Water Policy", "Visitor Check In Process",
    "Photography During Session", "Session Cleanup Routine",
]

PEOPLE = [
    "Mentor", "Student", "Volunteer Mentor", "Professional Mentor", "Peer Mentor",
    "Student To Mentor Ratio", "Why Three To One Works", "Adding Mentors",
    "Adding Students", "Mentor Capacity Planning", "Mentor Availability Tracking",
    "Mentor Skill Matching", "Student Skill Level", "Student Age Range",
    "Student Grouping Strategy", "Mixed Age Grouping", "Sibling Pairing",
    "Returning Student", "New Student Placement", "Waiting List Management",
    "Mentor To Student Introduction", "Mentor Check In Routine",
    "Student Check In Routine", "Mentor Feedback Collection",
    "Student Feedback Collection", "Parent Volunteer Role", "Teen Mentor Program",
    "College Mentor Recruitment", "Retired Professional Mentor",
    "Mentor Burnout Prevention", "Mentor Appreciation", "Student Attendance Tracking",
    "Mentor Attendance Tracking", "No Show Policy", "Substitute Mentor Plan",
    "Mentor Pairing Consistency", "One On One Mentoring", "Small Group Mentoring",
    "Whole Class Instruction", "Mentor Student Rapport",
    "Building Trust With Students", "Student Confidence Building",
]

SCHED = [
    "Session Scheduling", "Selecting A Date And Time", "Alternating Saturday Model",
    "Weekday After School Model", "Semester Based Schedule", "Drop In Model",
    "Recurring Session Series", "Holiday Schedule Planning",
    "Working Around Holidays", "School Calendar Alignment", "Registration System",
    "Online Registration Form", "Eventbrite Case Study", "Registration Capacity Limit",
    "Registering Mentors First", "Mentor Gated Enrollment",
    "Limiting Students By Mentors", "Waiting List Signup",
    "Registration Confirmation Email", "Registration Reminder Email",
    "Cancellation Policy", "Refund Policy", "Session Check In System",
    "QR Code Check In", "Attendance Sheet", "Post Event Survey",
    "Survey Question Design", "Survey Response Analysis", "Event Debriefing Meeting",
    "Event Retrospective Checklist", "Tracking What Was Learned",
    "Proactive Mentor Engagement", "Session Capacity Planning",
    "Multi Session Series Planning", "Summer Camp Format",
    "Weeklong Intensive Format", "Single Session Workshop",
    "Field Trip Coordination", "Guest Speaker Scheduling",
    "Competition Event Scheduling", "Showcase Event Planning", "Family Night Event",
    "Open House Event", "Registration Software Comparison",
    "Payment Processing For Fees", "Scholarship Application Process",
    "Session Reminder Notification", "Calendar Sync For Families",
    "Time Zone Consideration", "Weather Cancellation Policy", "Makeup Session Policy",
    "End Of Term Celebration",
]

CT = [
    "Computational Thinking Skills", "Decomposition Skill", "Pattern Recognition Skill",
    "Abstraction Skill", "Algorithm Design Skill", "Debugging Skill",
    "Keyboarding Skills", "Typing Practice Tool", "Scratch Programming",
    "Scratch Sprite", "Scratch Block Coding", "Scratch Project Sharing",
    "Block Based To Text Transition", "Python Programming", "Python Syntax Basics",
    "Python Variable", "Python Loop", "Python Conditional", "Python Function",
    "Turtle Graphics", "Turtle Graphics Challenge", "Curriculum Design",
    "Lesson Sequencing", "Skill Progression Ladder", "Challenge Based Curriculum",
    "Project Based Curriculum", "Curriculum Pacing Guide", "Beginner Track Curriculum",
    "Intermediate Track Curriculum", "Advanced Track Curriculum",
    "Self Paced Learning Path", "Peer Code Review", "Pair Programming",
    "Code Along Session", "Live Coding Demonstration", "Coding Challenge Card",
    "Concept Challenge Card", "Designing Challenge Cards", "Printing Challenge Cards",
    "Learning Map", "Skill Badge System", "Badge And Sticker Reward",
    "Portfolio Of Student Work", "Show And Tell Session", "Code Sharing Platform",
    "Version Control Basics", "Online Coding Platform", "Offline Coding Environment",
    "Unplugged Coding Activity", "Coding Vocabulary Building",
]

PHYS = [
    "Physical Computing", "Electrical Safety Rules", "Breadboard Basics",
    "Jumper Wire", "Resistor Basics", "LED Basics", "Blinking Light Circuit",
    "Push Button Switch", "Digital Input", "Digital Output", "Analog Input",
    "Analog Output", "Voltage Basics", "Current Basics", "Short Circuit Hazard",
    "Static Electricity Precaution", "Battery Safety", "Soldering Safety Basics",
    "Multimeter Usage", "Circuit Diagram Reading", "Sensor Basics", "Light Sensor",
    "Temperature Sensor", "Humidity Sensor", "Motion Sensor", "Sound Sensor",
    "Distance Sensor", "Display Basics", "OLED Display", "LED Matrix Display",
    "Seven Segment Display", "Motor Basics", "DC Motor", "Servo Motor",
    "Stepper Motor", "Robot Chassis", "Floor Robot", "Table Robot",
    "Collision Avoidance Robot", "Robot Sensor Integration", "Robot Motor Control",
    "USB Cable Basics", "USB A Connector", "USB C Connector", "Power Supply Selection",
    "Component Storage System", "Wire Stripping Technique", "Prototyping Board",
    "Circuit Troubleshooting", "Component Identification", "Datasheet Reading",
    "Electronics Vocabulary", "Safe Disposal Of Electronics", "Static Safe Handling",
    "Component Testing Procedure",
]

KITS = [
    "Raspberry Pi Pico", "MicroPython Basics", "MicroPython Syntax",
    "MicroPython Loop", "NeoPixel LED Strip", "LED Strip Wiring", "Moving Rainbow Kit",
    "Moving Rainbow Pattern", "LED Noodle Project", "Halloween Costume Lighting",
    "Holiday Light Pattern", "Fourth Of July Pattern", "Color Wheel Programming",
    "Brightness Control Code", "Animation Timing Code", "Robot Kit",
    "Robot Kit Assembly", "Remote Control Distraction Risk", "Autonomous Robot Behavior",
    "Robot Face Kit", "Robot Emotion Display", "Display Kit", "Sensor Kit",
    "Gyroscope Kit", "Gyroscope Orientation Data", "Motion Kit", "Accelerometer Data",
    "Sound Kit", "Classroom Noise Challenge", "Microphone Kit", "Sound Spectrum Kit",
    "Frequency Spectrum Display", "Robot Sounds Kit", "Robot Display Kit",
    "IoT Project Kit", "Light Temp Humidity Monitor", "NightLight Project",
    "Kit Assembly Instructions", "Kit Component Checklist", "Kit Difficulty Rating",
    "Kit Cost Comparison", "Kit Reuse Strategy", "Kit Storage Bin",
    "Kit Return Process", "Kit Damage Assessment", "Kit Loaner Program",
    "Kit Documentation Sheet", "Kit Wiring Diagram", "Kit Code Template",
    "Kit Debugging Guide", "Kit Upgrade Path", "Kit Vendor Selection",
    "Kit Bulk Purchasing", "Kit Unboxing Procedure", "Kit Safety Checklist",
    "Signal Processing Basics", "Real Time Audio Processing",
    "Fast Fourier Transform Basics", "Smartwatch Display Kit",
    "Wearable Electronics Basics",
]

TECH = [
    "Laptop Purchasing", "Laptop Configuration", "Chromebook Management",
    "Windows Device Management", "MacOS Device Management", "Student Login Account",
    "Shared Device Account", "Individual Device Account", "Device Imaging Process",
    "Device Inventory Tracking", "Device Charging Cart", "Device Labeling System",
    "Device Loaner Agreement", "Screen Time Management", "Content Filtering Software",
    "Parental Control Software", "Device Security Policy",
    "Password Management For Kids", "Device Repair Basics", "Device Cleaning Routine",
    "Wifi Network Setup", "Guest Wifi Access", "Network Bandwidth Planning",
    "Firewall Basics For Clubs", "Device Software Updates", "App Installation Policy",
    "Browser Bookmark Management", "Class Bookmark Folder", "Student Bookmark Folder",
    "Offline Mode Preparation", "Backup Device Plan", "Device Donation Program",
    "Refurbished Device Sourcing", "Device End Of Life Plan",
    "Peripheral Device Management", "Headphone Management",
    "Mouse And Keyboard Setup", "External Storage Device", "Cloud Storage For Devices",
    "Device Troubleshooting Checklist", "IT Volunteer Role",
    "Device Setup Time Budget", "Device Return Checklist", "Shared Drive Organization",
]

DATA = [
    "Saving Student Data", "Student Data Privacy", "Tracking Student Progress",
    "Progress Dashboard", "Simple Spreadsheet Tracking", "Spreadsheet Template Design",
    "Managing Email Communication", "Email List Segmentation",
    "Setting Up A Calendar", "Shared Calendar Access", "Notification System",
    "Email And Chat Tools", "Group Messaging App", "Forms And Feedback Tools",
    "Survey Tool Selection", "Feedback Loop Design", "Data Backup Routine",
    "Data Retention Policy", "Consent For Data Collection", "Anonymized Reporting",
    "Parent Communication Log", "Mentor Communication Log",
    "Automated Reminder System", "SMS Notification", "Newsletter Automation",
    "Data Visualization Basics", "Attendance Data Analysis", "Retention Rate Tracking",
    "Enrollment Trend Analysis", "Student Growth Metrics", "Skill Mastery Tracking",
    "Digital Portfolio System", "Parent Access Portal", "Data Export Process",
    "Spreadsheet Formula Basics", "Pivot Table Basics", "Data Entry Standardization",
    "Duplicate Record Cleanup", "Data Sharing Agreement", "Third Party Tool Vetting",
    "Cloud Document Sharing", "File Naming Convention",
]

MOTIV = [
    "Motivating Students", "Intrinsic Motivation", "Extrinsic Reward System",
    "Challenge Card System", "Learning Map Display", "Badge Design",
    "Sticker Reward System", "Progress Tracker Poster", "Leaderboard Consideration",
    "Friendly Competition Design", "Collaborative Challenge Design",
    "Growth Mindset Coaching", "Celebrating Small Wins", "Public Recognition Event",
    "Certificate Of Completion", "Student Showcase Wall", "Peer Recognition Activity",
    "Encouragement Language", "Handling Frustration", "Persistence Coaching",
    "Failure As Learning Tool", "Student Goal Setting", "Personal Project Choice",
    "Student Voice And Choice", "Gamification Elements", "Point System Design",
    "Level Up System", "Student Interest Survey", "Passion Project Time",
    "Mentor Praise Technique",
]

DEI = [
    "Recruiting Minorities", "Recruiting Girls And Women",
    "Underserved Community Outreach", "Language Accessibility",
    "Translated Materials", "Low Income Family Support", "No Fee Club Model",
    "Why No Fees Matters", "Scholarship Fund", "Free Device Loan Program",
    "Transportation Barrier Solution", "Accessible Session Timing",
    "Disability Accommodation", "Assistive Technology Option",
    "Culturally Responsive Teaching", "Representation In Curriculum",
    "Female Mentor Recruitment", "Role Model Visibility",
    "Community Trust Building", "Faith Based Venue Partnership",
    "Rural Community Outreach", "Urban Community Outreach",
    "Immigrant Family Outreach", "Equity Audit Of Club",
    "Inclusive Marketing Materials", "Bias Awareness Training",
]

FUND = [
    "Establishing A Budget", "Budget Line Item", "Recurring Cost Planning",
    "One Time Cost Planning", "Cost Per Student Estimate", "Raising Funds",
    "Grant Writing Basics", "Grant Proposal Structure", "Grant Application Tracking",
    "Community Support Drive", "Crowdfunding Campaign", "Corporate Sponsorship",
    "In Kind Donation", "Fundraising Event Planning", "Local Company Partnership",
    "Strategic Partnership Building", "Vendor Discount Negotiation",
    "Nonprofit Fiscal Sponsorship", "Budget Tracking Spreadsheet",
    "Expense Reporting Process", "Reimbursement Policy", "Donation Receipt Process",
    "Annual Budget Review", "Emergency Fund Reserve",
    "Equipment Depreciation Planning", "Membership Fee Model",
    "Sliding Scale Fee Model", "Community Foundation Grant",
    "School District Funding", "PTA Partnership Funding",
    "Library Funding Partnership", "Robotics Club Overlap Funding",
    "Shared Resource Agreement", "Partnership Proposal Template",
    "Sponsor Recognition Plan", "Cost Benefit Analysis",
]

AI = [
    "AI Agent Basics", "Leveraging AI Agents", "Planning AI Agent",
    "Communication AI Agent", "Registration AI Agent", "Scheduling AI Agent",
    "Reminder AI Agent", "Mentor Coaching AI Agent", "Influence Graph Concept",
    "Building An Influence Graph", "Targeting Mentor Populations",
    "AI Managed Mailing List", "AI Generated Announcement", "AI Drafted Newsletter",
    "AI Survey Analysis", "AI Sentiment Analysis", "AI Chatbot For Parents",
    "AI Chatbot For Students", "Prompt Engineering Basics", "Reviewing AI Output",
    "AI Output Quality Check", "AI Agent Guardrails", "AI Agent Oversight",
    "Human In The Loop Review", "AI Ethics For Clubs", "AI Bias Awareness",
    "AI Data Privacy Risk", "AI Tool Selection Criteria",
    "AI Assisted Curriculum Design", "AI Generated Challenge Card",
    "AI Assisted Lesson Customization", "Building Student Mental Models",
    "Customizing Lessons With AI", "AI Assisted Mentor Matching",
    "AI Scheduling Optimization", "AI Agent Cost Management",
    "AI Agent Vendor Comparison", "AI Assisted Grant Writing",
    "AI Assisted Social Media", "AI Generated Website Content",
    "AI Assisted Translation", "AI Voice Assistant Use",
    "AI Assisted Debugging Help", "AI Tutor For Students", "AI Code Review Assistant",
    "AI Agent Workflow Design", "AI Agent Integration Testing",
    "AI Agent Rollout Plan", "AI Agent Training For Leaders",
    "Coaching Leaders With AI",
]

BOARD = [
    "Oversight Board", "Board Roles And Duties", "Board Meeting Cadence",
    "Board Member Recruitment", "Board Term Limits", "Succession Planning",
    "Club Inventory System", "Inventory Sticker Printing", "QR Code On Kits",
    "Asset Tagging Process", "Inventory Audit Process", "Lost Item Policy",
    "Equipment Checkout System", "Equipment Return Tracking",
    "Advanced Mentor Recruiting", "Finding Qualified Mentors",
    "Mentor Interview Process", "Mentor Training Curriculum",
    "Bringing Out Mentor Strengths", "Mentor Certification Program",
    "Mentor Peer Support Program", "Leadership Pipeline Development",
    "Documenting Club Procedures", "Standard Operating Procedure",
    "Knowledge Transfer Process", "New Leader Onboarding", "Club Playbook Document",
    "Annual Strategic Plan", "Club Health Metrics", "Sustainability Checklist",
    "Multi Year Vision Plan", "Building Sustainable Clubs",
]

CATEGORIES = [
    ("FOUND", "Coding Club Foundations", "SteelBlue", "white", FOUND, []),
    ("GOV", "Governance And Charter", "DarkSlateBlue", "white", GOV, ["Coding Club"]),
    ("LAUNCH", "Launching And Session Design", "DarkGreen", "white", LAUNCH, ["Coding Club", "Club Charter"]),
    ("PEOPLE", "Mentors Students And Ratios", "LimeGreen", "black", PEOPLE, ["Coding Club"]),
    ("SCHED", "Scheduling Registration And Events", "Gold", "black", SCHED, ["Mentor", "Gauging Interest Survey"]),
    ("CT", "Computational Thinking And Curriculum", "DarkGoldenrod", "white", CT, []),
    ("PHYS", "Physical Computing And Electronics", "Khaki", "black", PHYS, []),
    ("KITS", "Project Kits And Hardware", "Teal", "white", KITS, ["Physical Computing", "Electrical Safety Rules"]),
    ("TECH", "Devices And IT Management", "DodgerBlue", "white", TECH, []),
    ("DATA", "Data Tracking And Communication", "LightSkyBlue", "black", DATA, ["Laptop Purchasing", "Session Scheduling"]),
    ("MOTIV", "Motivation And Recognition", "Crimson", "white", MOTIV, ["Student", "Computational Thinking Skills"]),
    ("DEI", "Diversity Equity And Access", "DarkRed", "white", DEI, ["Mentor", "Gauging Interest Survey"]),
    ("FUND", "Budget Funding And Partnerships", "MediumPurple", "white", FUND, ["Club Charter"]),
    ("AI", "AI Agents For Club Management", "Indigo", "white", AI, ["Coding Club", "Saving Student Data"]),
    ("BOARD", "Oversight And Sustainability", "SaddleBrown", "white", BOARD, ["Club Charter", "Establishing A Budget", "Saving Student Data"]),
]

# ---------------------------------------------------------------------------
# Assign sequential ConceptIDs in category order
# ---------------------------------------------------------------------------

concept_id = {}   # label -> id
concept_cat = {}  # label -> (cat_index, pos_in_cat, taxonomy_id)
rows = []         # (id, label, taxonomy_id)

cid = 0
for cat_idx, (tax_id, class_name, color, font, labels, anchor_deps) in enumerate(CATEGORIES):
    for pos, label in enumerate(labels):
        cid += 1
        if label in concept_id:
            raise SystemExit(f"DUPLICATE LABEL: {label!r} (already id {concept_id[label]})")
        if len(label) > 32:
            raise SystemExit(f"LABEL TOO LONG ({len(label)} chars): {label!r}")
        concept_id[label] = cid
        concept_cat[label] = (cat_idx, pos, tax_id)
        rows.append([cid, label, "", tax_id])

print(f"Total concepts: {cid}")

# ---------------------------------------------------------------------------
# Build dependency chains: a primary linear link to the previous concept in
# the category, plus a sparse secondary link back to the category anchor
# every 6th concept (branching for realism without recursive fan-out --
# a uniform prev+prev-2 skip-link was tried first and produced Fibonacci-like
# exponential Concept Impact Scores over the long within-category chains;
# linear-plus-sparse-hub keeps CIS growth polynomial and sane). Anchor deps
# (category's first concept depends on named concepts in strictly earlier
# categories) are unchanged.
# ---------------------------------------------------------------------------

deps = {label: set() for label in concept_id}

for cat_idx, (tax_id, class_name, color, font, labels, anchor_deps) in enumerate(CATEGORIES):
    for pos, label in enumerate(labels):
        if pos == 0:
            for dep_label in anchor_deps:
                if dep_label not in concept_id:
                    raise SystemExit(f"ANCHOR DEP NOT FOUND: {dep_label!r} for {label!r}")
                dep_cat_idx = concept_cat[dep_label][0]
                if dep_cat_idx >= cat_idx:
                    raise SystemExit(f"INVALID ANCHOR DEP DIRECTION: {label!r} ({tax_id}) -> {dep_label!r}")
                deps[label].add(dep_label)
        else:
            deps[label].add(labels[pos - 1])
            if pos >= 6 and pos % 6 == 0:
                deps[label].add(labels[0])

# ---------------------------------------------------------------------------
# Curated cross-category EXTRA_DEPS for pedagogical realism. Validated:
# dependency's global order index must be strictly less than the target's.
# ---------------------------------------------------------------------------

def order_index(label):
    cat_idx, pos, _ = concept_cat[label]
    return (cat_idx, pos)

EXTRA_DEPS = {
    "Turtle Graphics": ["Python Programming"],
    "Robot Kit Assembly": ["Robot Chassis", "Electrical Safety Rules"],
    "LED Noodle Project": ["Moving Rainbow Kit"],
    "Halloween Costume Lighting": ["LED Noodle Project"],
    "Robot Face Kit": ["OLED Display", "Robot Chassis"],
    "Sound Spectrum Kit": ["Microphone Kit"],
    "IoT Project Kit": ["Light Sensor", "Temperature Sensor", "Humidity Sensor"],
    "MicroPython Basics": ["Python Programming"],
    "Signal Processing Basics": ["Sound Sensor"],
    "Registration AI Agent": ["Registration System", "AI Agent Basics"],
    "Scheduling AI Agent": ["Session Scheduling"],
    "Reminder AI Agent": ["Automated Reminder System"],
    "Mentor Coaching AI Agent": ["Mentor Feedback Collection"],
    "AI Managed Mailing List": ["Managing Email Communication"],
    "AI Generated Announcement": ["Managing Email Communication"],
    "AI Survey Analysis": ["Post Event Survey", "Survey Response Analysis"],
    "AI Chatbot For Parents": ["Parent Communication Log"],
    "AI Chatbot For Students": ["Student"],
    "AI Assisted Mentor Matching": ["Mentor Skill Matching"],
    "AI Scheduling Optimization": ["Session Scheduling"],
    "AI Assisted Grant Writing": ["Grant Writing Basics"],
    "AI Assisted Social Media": ["Social Media Promotion"],
    "AI Generated Website Content": ["Club Website"],
    "AI Assisted Translation": ["Language Accessibility"],
    "AI Tutor For Students": ["Python Programming"],
    "AI Code Review Assistant": ["Peer Code Review"],
    "Building An Influence Graph": ["Learning Graph"],
    "Coaching Leaders With AI": ["Leadership Succession"],
    "Grant Writing Basics": ["Establishing A Budget"],
    "Scholarship Fund": ["Why No Fees Matters"],
    "Free Device Loan Program": ["Laptop Purchasing"],
    "Translated Materials": ["Language Accessibility"],
    "Student Data Privacy": ["Data Privacy Policy"],
    "Digital Portfolio System": ["Portfolio Of Student Work"],
    "Device Security Policy": ["Data Privacy Policy"],
    "Wifi Network Setup": ["Laptop Purchasing"],
    "Club Inventory System": ["Kit Storage Bin"],
    "Advanced Mentor Recruiting": ["Mentor", "Mentor Skill Matching"],
    "Mentor Training Curriculum": ["Mentor Feedback Collection"],
    "New Leader Onboarding": ["Leadership Succession"],
    "Building Sustainable Clubs": ["Club Sustainability"],
    "Classroom Layout": ["First Club Meeting"],
    "Robot Sensor Integration": ["Sensor Basics"],
    "Robot Motor Control": ["Motor Basics"],
    "Collision Avoidance Robot": ["Distance Sensor", "Robot Chassis"],
    "Circuit Troubleshooting": ["Multimeter Usage"],
    "Component Testing Procedure": ["Multimeter Usage"],
}

warnings = []
for label, dep_labels in EXTRA_DEPS.items():
    if label not in concept_id:
        warnings.append(f"EXTRA_DEPS target not found: {label!r}")
        continue
    for dep_label in dep_labels:
        if dep_label not in concept_id:
            warnings.append(f"EXTRA_DEPS source not found: {dep_label!r} (for {label!r})")
            continue
        if order_index(dep_label) >= order_index(label):
            warnings.append(f"INVALID DIRECTION skipped: {label!r} -> {dep_label!r}")
            continue
        deps[label].add(dep_label)

for w in warnings:
    print("WARNING:", w)

# ---------------------------------------------------------------------------
# Write concept-list.md
# ---------------------------------------------------------------------------

with open("concept-list.md", "w") as f:
    f.write("# Concept List\n\n")
    f.write("Numbered list of concepts for the Coding Club learning graph.\n\n")
    for cid, label, _, tax_id in rows:
        f.write(f"{cid}. {label}\n")

print("Wrote concept-list.md")

# ---------------------------------------------------------------------------
# Write learning-graph.csv
# ---------------------------------------------------------------------------

with open("learning-graph.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["ConceptID", "ConceptLabel", "Dependencies", "TaxonomyID"])
    for cid, label, _, tax_id in rows:
        dep_ids = sorted(concept_id[d] for d in deps[label])
        dep_str = "|".join(str(d) for d in dep_ids)
        writer.writerow([cid, label, dep_str, tax_id])

print("Wrote learning-graph.csv")

# ---------------------------------------------------------------------------
# Write concept-taxonomy.md
# ---------------------------------------------------------------------------

CATEGORY_DESCRIPTIONS = {
    "FOUND": "The nature and history of coding clubs, their evolution, and the role of AI in modern club operations and intelligent textbooks.",
    "GOV": "Club charters, values, policies, safety rules, and the roles and responsibilities that keep a club legally and ethically sound.",
    "LAUNCH": "Gauging interest, holding a first meeting, promoting the club, growing it over time, and designing the physical classroom and session flow.",
    "PEOPLE": "Mentors, students, the 3:1 ratio, recruiting and retaining both groups, and the day-to-day relationship between them.",
    "SCHED": "Choosing meeting times, registration systems, waiting lists, post-event surveys, and running the full event lifecycle.",
    "CT": "Computational thinking skills and the coding curriculum itself: Scratch, Python, Turtle Graphics, and how lessons are sequenced.",
    "PHYS": "The electronics fundamentals behind physical computing: circuits, sensors, displays, motors, and robot components.",
    "KITS": "The specific project kits used in sessions -- Moving Rainbow, robot, display, sensor, sound, and IoT kits -- and how they are managed.",
    "TECH": "Purchasing, configuring, and maintaining the laptops and Chromebooks students use, plus accounts, network, and device lifecycle.",
    "DATA": "Tracking student progress, managing communication tools, and handling club data responsibly.",
    "MOTIV": "Keeping students engaged through challenge cards, badges, recognition, and growth-mindset coaching.",
    "DEI": "Reaching underserved communities, removing cost and access barriers, and building an inclusive club.",
    "FUND": "Budgeting, fundraising, grant writing, and building partnerships that keep a club financially healthy.",
    "AI": "Using AI agents for registration, communication, scheduling, curriculum customization, and mentor coaching -- with appropriate oversight.",
    "BOARD": "Oversight boards, inventory systems, advanced mentor recruiting, and the succession planning that makes a club outlast its founder.",
}

with open("concept-taxonomy.md", "w") as f:
    f.write("# Concept Taxonomy\n\n")
    f.write("This taxonomy organizes the Coding Club learning graph's concepts into "
            f"{len(CATEGORIES)} categories.\n\n")
    for tax_id, class_name, color, font, labels, _ in CATEGORIES:
        pct = 100 * len(labels) / cid
        f.write(f"## {class_name} ({tax_id})\n\n")
        f.write(f"{CATEGORY_DESCRIPTIONS[tax_id]}\n\n")
        f.write(f"- **TaxonomyID:** {tax_id}\n")
        f.write(f"- **Concept count:** {len(labels)} ({pct:.1f}% of total)\n\n")

print("Wrote concept-taxonomy.md")

# ---------------------------------------------------------------------------
# Write taxonomy-names.json, color-config.json, metadata.json
# ---------------------------------------------------------------------------

import json

taxonomy_names = {tax_id: class_name for tax_id, class_name, *_ in CATEGORIES}
with open("taxonomy-names.json", "w") as f:
    json.dump(taxonomy_names, f, indent=2)
print("Wrote taxonomy-names.json")

color_config = {tax_id: color for tax_id, class_name, color, *_ in CATEGORIES}
with open("color-config.json", "w") as f:
    json.dump(color_config, f, indent=2)
print("Wrote color-config.json")

metadata = {
    "title": "Coding Clubs: How to Create, Organize, Promote and Manage a Sustainable Coding Club",
    "description": "A learning graph for an intelligent textbook that teaches educators, librarians, and volunteers how to launch and sustain a coding club, covering governance, mentors and students, scheduling, computational thinking curriculum, physical computing and electronics, project kits, device management, funding, diversity and inclusion, and the use of AI agents to manage club operations.",
    "creator": "Dan McCreary",
    "date": "2026-08-31",
    "version": "1.0",
    "format": "Learning Graph JSON v1.0",
    "schema": "https://raw.githubusercontent.com/dmccreary/learning-graphs/refs/heads/main/src/schema/learning-graph-schema.json",
    "license": "CC BY-NC-SA 4.0 DEED",
}
with open("metadata.json", "w") as f:
    json.dump(metadata, f, indent=2)
print("Wrote metadata.json")

# ---------------------------------------------------------------------------
# Summary stats
# ---------------------------------------------------------------------------

zero_dep = [label for label in concept_id if not deps[label]]
print(f"\nZero-dependency (foundational) concepts: {len(zero_dep)}")
for label in zero_dep:
    print(f"  - {label} (id {concept_id[label]})")

print(f"\nCategory sizes:")
for tax_id, class_name, color, font, labels, _ in CATEGORIES:
    print(f"  {tax_id:8s} {len(labels):4d}  {class_name}")
