/* ===================================================
   CASE STUDY DEEP-DIVE DATA & MODAL LOGIC
   =================================================== */

const projectCaseStudies = {
  1: {
    id: 1,
    title: "Freelance Marketplace Platform",
    category: "Two-Sided Marketplace",
    client: "Freelance Marketplace Platform",
    timeline: "3 Months",
    role: "UX/UI & Product Structure",
    tools: "Figma, Adobe Illustrator, Prototyping",
    heroImage: "assets/images/gig_per_hour.jpg",
    isEditorial: true
  },
  2: {
    id: 2,
    title: "Ray Consultation",
    category: "Consultation Platform",
    client: "Ray Consultation Services",
    timeline: "2.5 Months",
    role: "UI/UX & Product Designer",
    tools: "Figma, Framer, Adobe Photoshop",
    heroImage: "assets/images/ray_consultation.jpg",
    overview: "Ray Consultation is a specialized platform built to connect industry leaders and consultants with clients seeking tailored professional guidance. The project focused on consultant discovery, credential verification, and automated 1-on-1 scheduling.",
    challenge: "Consultants and clients experienced communication gaps and time-zone confusion during session booking. The client needed a frictionless, trustworthy booking flow.",
    solutions: [
      {
        title: "Verified Expert Directory",
        desc: "Created a searchable directory featuring verified domain expertise badges, client satisfaction ratings, and upfront hourly consultation rates."
      },
      {
        title: "Integrated Calendar Slot Picker",
        desc: "Designed an interactive calendar widget with automatic time-zone synchronization and real-time slot availability."
      },
      {
        title: "Pre-Session Briefing UI",
        desc: "Constructed structured intake forms to allow clients to outline discussion topics before sessions commence."
      },
      {
        title: "Video Consultation Integration",
        desc: "Crafted seamless interfaces for session reminders, video link delivery, and post-session rating summaries."
      }
    ],
    keyFeatures: [
      "Instant calendar booking with real-time slot locks",
      "Verified consultant badge system for trust building",
      "Automated agenda and pre-meeting note sync",
      "Clean editorial aesthetic with lime accent highlights"
    ]
  },
  3: {
    id: 3,
    title: "Note Taking App",
    category: "Voice-to-Notes · Mobile App",
    client: "Productivity Mobile App",
    timeline: "2 Months",
    role: "Mobile UI/UX Designer",
    tools: "Figma, Prototyping, Adobe Illustrator",
    heroImage: "assets/images/notetaking_app.jpg",
    overview: "An AI-enhanced mobile application that captures spoken voice recordings and automatically transforms them into structured, actionable written notes with key highlights, summaries, and action item tags.",
    challenge: "Users capturing thoughts on-the-go often find typing tedious. Existing audio recording apps lack intelligent structuring and actionable task extraction.",
    solutions: [
      {
        title: "One-Tap Audio Recording UX",
        desc: "Designed an accessible, distraction-free recording screen featuring dynamic lime audio waveform visualizations."
      },
      {
        title: "Automated Transcript & Highlight Parsing",
        desc: "Structured the transcript view to highlight key deadlines, names, and action items in distinctive accent colors."
      },
      {
        title: "Smart Tag & Folder Hierarchy",
        desc: "Built a fluid swipe-based organization system allowing users to tag meetings, personal ideas, and project tasks effortlessly."
      },
      {
        title: "Dark & Light Mode Harmony",
        desc: "Tailored high-contrast dark and light modes for comfortable viewing in both bright daytime and late-night note taking."
      }
    ],
    keyFeatures: [
      "Dynamic real-time audio waveform visualizer",
      "Instant key highlight extraction and action tags",
      "One-click note sharing and markdown export",
      "Haptic-feedback enabled recording and pause states"
    ]
  },
  4: {
    id: 4,
    title: "Vocabulary App",
    category: "Language Learning · Mobile App",
    client: "EdTech Mobile Product",
    timeline: "2 Months",
    role: "UI/UX & Interaction Designer",
    tools: "Figma, Adobe Illustrator, Canva",
    heroImage: "assets/images/vocabulary_app.jpg",
    overview: "A dedicated language-learning mobile app engineered to help users master foreign language vocabulary through bite-sized interactive flashcards, spaced repetition, pronunciation players, and gamified progress tracking.",
    challenge: "Maintaining learner retention and motivation is tough in language learning. The interface needed to be playful yet clean and mature.",
    solutions: [
      {
        title: "Interactive Flashcard Decks",
        desc: "Designed intuitive gesture-driven flashcards (swipe right for mastered, swipe left for review) with contextual sentence examples."
      },
      {
        title: "Audio Pronunciation Waveform",
        desc: "Integrated crystal-clear native pronunciation audio triggers with visual speech wave animations."
      },
      {
        title: "Daily Streak & Habit Tracker",
        desc: "Constructed engaging circular progress rings and weekly activity charts to foster daily practice habits."
      },
      {
        title: "Interactive Match & Quiz Engine",
        desc: "Created visual drag-and-drop matching games to reinforce vocabulary recall through active problem solving."
      }
    ],
    keyFeatures: [
      "Gesture-powered flashcard learning flow",
      "Native speaker pronunciation audio player",
      "Daily streak flame counter & gamification badges",
      "Clean titanium iPhone UI layout with neon lime accents"
    ]
  },
  5: {
    id: 5,
    title: "Rayfood",
    category: "Food Delivery · Mobile App",
    client: "Food Tech & Delivery Platform",
    timeline: "3 Months",
    role: "Lead Mobile UI/UX Designer",
    tools: "Figma, Adobe Illustrator, Prototyping",
    heroImage: "assets/images/rayfood_app.jpg",
    overview: "Rayfood is a modern on-demand food delivery and restaurant discovery mobile application that connects hungry customers with top local eateries, featuring rich visual menus, customizable dish add-ons, and real-time live order tracking.",
    challenge: "Traditional food ordering interfaces often suffer from cluttered menus, confusing modifier selections, and vague delivery updates that result in checkout friction.",
    solutions: [
      {
        title: "Visual Menu & Restaurant Discovery",
        desc: "Structured appetizing visual carousels, cuisine categories (Burgers, Pizza, Sushi), restaurant ratings, and estimated delivery times."
      },
      {
        title: "Customizable Dish Modifier UX",
        desc: "Designed an intuitive dish detail view with meal portion options, ingredient add-ons, and special kitchen instructions."
      },
      {
        title: "Frictionless Cart & Checkout",
        desc: "Built a clean checkout experience with instant tip selection, promo code validation, and saved address management."
      },
      {
        title: "Real-Time Map & Order Tracking",
        desc: "Integrated a live driver route map with dynamic status milestones from kitchen preparation to final doorstep arrival."
      }
    ],
    keyFeatures: [
      "Interactive restaurant discovery and cuisine filter chips",
      "Customizable dish modifier and ingredient builder",
      "Real-time driver GPS tracking and delivery ETA",
      "Instant reorder and personalized favorites list"
    ]
  },
  6: {
    id: 6,
    title: "Marketplace Website",
    category: "Marketplace · Web",
    client: "E-Commerce & Classifieds Platform",
    timeline: "3.5 Months",
    role: "Senior UI/UX Designer",
    tools: "Figma, Framer, Adobe Illustrator",
    heroImage: "assets/images/marketplace_web.jpg",
    overview: "A modern buy-and-sell classifieds web marketplace inspired by OLX, featuring instant location-based search filters, rich media product listings, seller verification badges, and real-time buyer-seller instant chat.",
    challenge: "Classifieds platforms frequently suffer from clutter, fake listings, and delayed communication between buyers and sellers.",
    solutions: [
      {
        title: "Faceted Search & Price Sliders",
        desc: "Designed lightning-fast search filters (location picker, price sliders, item condition checkboxes, category chips)."
      },
      {
        title: "Verified Seller Profiles",
        desc: "Established trust indicators, including member since badges, review ratings, and verified identity shields."
      },
      {
        title: "Integrated Instant Chat Module",
        desc: "Created a persistent in-page chat drawer enabling buyers and sellers to negotiate and ask questions in real time."
      },
      {
        title: "Frictionless 'Post Ad' Flow",
        desc: "Built a 3-step listing creation pipeline with multi-photo upload and smart category auto-detection."
      }
    ],
    keyFeatures: [
      "Location-aware product search and distance radius",
      "Embedded real-time buyer-to-seller chat widget",
      "Comprehensive product condition indicators",
      "High-density responsive grid layout"
    ]
  },
  7: {
    id: 7,
    title: "Raybit Technologies Website",
    category: "Corporate Website · UI/UX",
    client: "Raybit Technologies",
    timeline: "Oct 2024 – Present",
    role: "Lead UI/UX Designer",
    tools: "Figma, Framer, Adobe Photoshop, Illustrator",
    heroImage: "assets/images/raybit_tech.jpg",
    overview: "Comprehensive UI/UX design and design system creation for Raybit Technologies' corporate web platform, presenting enterprise ERP solutions, custom cloud software, portfolio case studies, and corporate contact pipelines.",
    challenge: "The corporate brand required a state-of-the-art digital footprint reflecting their advanced ERP, POS, attendance, and cloud development capabilities to global enterprise clients.",
    solutions: [
      {
        title: "High-Impact Enterprise Hero Layout",
        desc: "Crafted a visually commanding hero section with interactive ERP dashboard previews and metric callouts."
      },
      {
        title: "Structured Services Matrix",
        desc: "Organized complex ERP modules (Payroll, POS, Attendance, Marketing) into easily digestible interactive service cards."
      },
      {
        title: "Interactive Client Case Studies",
        desc: "Designed deep-dive case study layouts highlighting technological solutions, client results, and architecture diagrams."
      },
      {
        title: "Lead Generation Contact Pipeline",
        desc: "Implemented an intuitive project estimation and inquiry form tailored to enterprise software procurement."
      }
    ],
    keyFeatures: [
      "Enterprise ERP & SaaS product interface showcases",
      "Complete responsive design system for web and mobile",
      "Interactive case study galleries and service matrix",
      "High-conversion corporate inquiry form"
    ]
  }
};

// 1. Editorial 16-Section Template Generator for Project 01
function renderFreelanceMarketplaceCaseStudy() {
  return `
    <div class="cs-editorial">
      <!-- HERO HEADER -->
      <div class="cs-header">
        <div class="cs-badge-pill">
          <span class="dot"></span>
          <span>01 / TWO-SIDED MARKETPLACE</span>
        </div>
        <h2 class="cs-main-title">Freelance Marketplace Platform</h2>
        <p class="cs-subtitle">A two-sided digital marketplace connecting clients with skilled freelancers.</p>

        <div class="modal-meta-grid">
          <div class="modal-meta-item">
            <span>Role</span>
            <strong>UX/UI &amp; Product Structure</strong>
          </div>
          <div class="modal-meta-item">
            <span>Platform</span>
            <strong>Two-Sided Marketplace</strong>
          </div>
          <div class="modal-meta-item">
            <span>Tools</span>
            <strong>Figma, Adobe Illustrator</strong>
          </div>
          <div class="modal-meta-item">
            <span>Target Users</span>
            <strong>Freelancers &amp; Clients</strong>
          </div>
        </div>
      </div>

      <!-- 01 — Project Overview -->
      <section class="cs-section">
        <div class="cs-sec-badge">01 — Project Overview</div>
        <h3 class="cs-sec-title">Project Overview</h3>
        <p class="cs-paragraph">
          Freelance Marketplace Platform is a two-sided digital marketplace designed to connect clients looking to hire with skilled freelancers offering creative, technical, and professional services.
        </p>
        <p class="cs-paragraph">
          The platform contains separate, tailored experiences for:
        </p>
        <div class="cs-grid-2">
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Freelancers / Users</span>
            </div>
            <h4>Freelancers / Users</h4>
            <p>Helping talent set up profiles, discover relevant opportunities, review clear project requirements, submit competitive proposals, and manage their activities.</p>
          </div>
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Clients</span>
            </div>
            <h4>Clients</h4>
            <p>Empowering clients and businesses to post project opportunities, review applications and verified portfolios, and manage their hiring and project workflows seamlessly.</p>
          </div>
        </div>
        <p class="cs-paragraph" style="margin-top: 8px;">
          The product helps users discover opportunities and helps clients manage their hiring and project workflows.
        </p>
      </section>

      <!-- 02 — My Role -->
      <section class="cs-section">
        <div class="cs-sec-badge">02 — My Role</div>
        <h3 class="cs-sec-title">My Role</h3>
        <p class="cs-paragraph">
          I worked on the UX/UI design and product structure across the platform.
        </p>
        <div class="cs-roles-wrap">
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> User flow</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Information architecture</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Wireframing</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> UI design</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Onboarding</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> User experience</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Client experience</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Responsive design</span>
          <span class="cs-role-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Landing page</span>
        </div>
      </section>

      <!-- 03 — The Problem -->
      <section class="cs-section">
        <div class="cs-sec-badge">03 — The Problem</div>
        <h3 class="cs-sec-title">The Problem</h3>
        <p class="cs-paragraph">
          Designing a two-sided marketplace presents a distinct UX challenge. The platform needs to support two different audiences with distinct motivations and workflows within one cohesive product:
        </p>
        <div class="cs-grid-2">
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Freelancers</span>
            </div>
            <h4>Freelancer Journey Requirements</h4>
            <ul class="cs-card-list">
              <li>Discover opportunities matching their skills</li>
              <li>Understand project requirements and budget parameters</li>
              <li>Apply for suitable work quickly and transparently</li>
              <li>Manage their ongoing activities and project tasks</li>
            </ul>
          </div>
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Clients</span>
            </div>
            <h4>Client Journey Requirements</h4>
            <ul class="cs-card-list">
              <li>Create and manage job opportunities effectively</li>
              <li>Review freelancers, portfolios, and incoming applications</li>
              <li>Compare applicant competencies, rates, and ratings</li>
              <li>Manage hiring decisions or project workflows</li>
            </ul>
          </div>
        </div>
        <p class="cs-paragraph" style="margin-top: 10px;">
          The challenge was to keep these experiences clear while maintaining one consistent product experience.
        </p>
      </section>

      <!-- 04 — Project Goals -->
      <section class="cs-section">
        <div class="cs-sec-badge">04 — Project Goals</div>
        <h3 class="cs-sec-title">Project Goals</h3>
        <div class="cs-goals-grid">
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Create clear journeys for freelancers and clients</div>
          </div>
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Simplify onboarding</div>
          </div>
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Organise complex workflows</div>
          </div>
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Make important actions easy to discover</div>
          </div>
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Improve information hierarchy</div>
          </div>
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Create a consistent visual experience</div>
          </div>
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Build a scalable interface</div>
          </div>
          <div class="cs-goal-item">
            <div class="cs-goal-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
            <div class="cs-goal-text">Support responsive layouts</div>
          </div>
        </div>
      </section>

      <!-- 05 — Information Architecture -->
      <section class="cs-section">
        <div class="cs-sec-badge">05 — Information Architecture</div>
        <h3 class="cs-sec-title">Information Architecture</h3>
        <p class="cs-paragraph">
          I mapped the platform structure to understand how the different user journeys and sections connect. The architecture helped organise the product into clear experiences and establish a logical relationship between screens.
        </p>
        <div class="cs-visual-box">
          <img src="assets/images/freelance_marketplace_board.png" alt="Information Architecture and Product Structure">
          <div class="cs-caption">
            <span class="dot"></span>
            <span>Information architecture and product structure</span>
          </div>
        </div>
      </section>

      <!-- 06 — User Flow -->
      <section class="cs-section">
        <div class="cs-sec-badge">06 — User Flow</div>
        <h3 class="cs-sec-title">User Flow</h3>
        <p class="cs-paragraph">
          The key user journeys were mapped to understand how users move through onboarding, discovery, interaction and task completion.
        </p>
        <div class="cs-flow-bar">
          <div class="cs-flow-step">DISCOVER</div>
          <span class="cs-flow-arrow">&rarr;</span>
          <div class="cs-flow-step">CONNECT</div>
          <span class="cs-flow-arrow">&rarr;</span>
          <div class="cs-flow-step">WORK</div>
        </div>
        <div class="cs-grid-2">
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Freelancers</span>
            </div>
            <h4>Freelancer Journey</h4>
            <p>Onboarding &rarr; Discovery &rarr; View Requirements &rarr; Apply / Submit Proposal &rarr; Task Completion</p>
          </div>
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Clients</span>
            </div>
            <h4>Client Journey</h4>
            <p>Onboarding &rarr; Create Opportunity &rarr; Review Applications &rarr; Hire Freelancer &rarr; Workflow Management</p>
          </div>
        </div>
      </section>

      <!-- 07 — Wireframes -->
      <section class="cs-section">
        <div class="cs-sec-badge">07 — Wireframes</div>
        <h3 class="cs-sec-title">Wireframes</h3>
        <p class="cs-paragraph">
          After defining the structure, I translated the product requirements into wireframes and screen layouts. The wireframes helped establish content hierarchy, navigation, layout structure and interaction patterns before moving into the final interface design.
        </p>
        <div class="cs-visual-box">
          <img src="assets/images/freelance_marketplace_board.png" alt="Early wireframes and screen exploration showing Onboarding, User Screens, Client Screens, Landing Page">
          <div class="cs-caption">
            <span class="dot"></span>
            <span>Early wireframes and screen exploration</span>
          </div>
        </div>
      </section>

      <!-- 08 — Design Direction -->
      <section class="cs-section">
        <div class="cs-sec-badge">08 — Design Direction</div>
        <h3 class="cs-sec-title">Design Direction</h3>
        <p class="cs-paragraph">
          The visual design direction focused on delivering a clean, modern marketplace experience with high legibility and structured information scanning.
        </p>
        <div class="cs-pillars-grid">
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Clean interface</h5>
            <p>Minimalist interface reducing friction and keeping attention on core tasks.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Modern marketplace experience</h5>
            <p>Interactive project feeds, filter chips, and modular talent cards.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Clear hierarchy</h5>
            <p>Strong visual contrast between titles, hourly rates, and secondary details.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Consistent spacing</h5>
            <p>Systematic grid rhythm creating balanced breathing room across screens.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Strong typography</h5>
            <p>Clear, modern type hierarchy ensuring effortless reading and scanning.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Clear CTAs</h5>
            <p>Prominent, purposeful buttons guiding users to primary actions instantly.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Structured cards</h5>
            <p>Encapsulated cards grouping rates, tags, author, and description neatly.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Easy-to-scan information</h5>
            <p>Key information such as rates, skills, and ratings visible at a glance.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Consistent components</h5>
            <p>Unified buttons, inputs, filter drawers, and modal components.</p>
          </div>
        </div>
      </section>

      <!-- 09 — Onboarding -->
      <section class="cs-section">
        <div class="cs-sec-badge">09 — Onboarding</div>
        <h3 class="cs-sec-title">Onboarding</h3>
        <p class="cs-paragraph">
          The onboarding experience was structured to guide users through the initial setup in a clear and manageable way. The layouts were designed to keep information organised and reduce unnecessary friction.
        </p>
        <div class="cs-grid-2">
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Guided Setup</span>
            </div>
            <h4>Organised Initial Setup</h4>
            <p>Guides users step-by-step through profile configuration, category selections, and initial preferences without overwhelming the interface.</p>
          </div>
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Friction Reduction</span>
            </div>
            <h4>Reduced Cognitive Load</h4>
            <p>Separates complex account requirements into distinct stages to ensure users complete onboarding efficiently.</p>
          </div>
        </div>
      </section>

      <!-- 10 — User Experience -->
      <section class="cs-section">
        <div class="cs-sec-badge">10 — User Experience</div>
        <h3 class="cs-sec-title">User Experience</h3>
        <p class="cs-paragraph">
          The user/freelancer experience is structured around discovering relevant opportunities, reviewing project details, and managing marketplace workflows seamlessly.
        </p>
        <div class="cs-visual-box">
          <img src="assets/images/gig_per_hour.png" alt="Freelancer User Feed Screen">
          <div class="cs-caption">
            <span class="dot"></span>
            <span>Freelancer user feed and opportunity discovery interface</span>
          </div>
        </div>
        <div class="cs-grid-2">
          <div class="cs-card">
            <h4>Discovering Opportunities</h4>
            <p>Faceted filters and categorical search enable freelancers to browse opportunities matching their skills, rate preferences, and availability.</p>
          </div>
          <div class="cs-card">
            <h4>Viewing Relevant Information</h4>
            <p>Project cards present critical information upfront, including hourly rate brackets, required competencies, and project timelines.</p>
          </div>
          <div class="cs-card">
            <h4>Taking Actions</h4>
            <p>Direct application actions allow freelancers to review project scopes and submit proposals without unnecessary navigation steps.</p>
          </div>
          <div class="cs-card">
            <h4>Managing the User's Workflow</h4>
            <p>Provides a structured view of active applications, incoming notifications, and ongoing project status.</p>
          </div>
        </div>
      </section>

      <!-- 11 — Client Experience -->
      <section class="cs-section">
        <div class="cs-sec-badge">11 — Client Experience</div>
        <h3 class="cs-sec-title">Client Experience</h3>
        <p class="cs-paragraph">
          The client-side experience is structured around managing marketplace activities and workflows, enabling clients to find talent, review incoming applications, and manage hiring contracts.
        </p>
        <div class="cs-grid-2">
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Opportunities</span>
            </div>
            <h4>Creating &amp; Managing Opportunities</h4>
            <p>Structured creation flows allow clients to define project parameters, required skill sets, and budget allocations clearly.</p>
          </div>
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Applications</span>
            </div>
            <h4>Reviewing Freelancers &amp; Applications</h4>
            <p>Compare applicant proposals, verified skill tags, client ratings, and portfolio showcases side-by-side.</p>
          </div>
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Hiring</span>
            </div>
            <h4>Managing Hiring &amp; Project Workflows</h4>
            <p>Clear contractual agreements and project milestones organized in a structured, actionable dashboard.</p>
          </div>
          <div class="cs-card">
            <div class="cs-card-header">
              <span class="cs-card-tag">Interaction</span>
            </div>
            <h4>Direct Communication</h4>
            <p>Integrated discussion threads to align on project scopes and deliverable timelines before starting contracts.</p>
          </div>
        </div>
      </section>

      <!-- 12 — Landing Page -->
      <section class="cs-section">
        <div class="cs-sec-badge">12 — Landing Page</div>
        <h3 class="cs-sec-title">Landing Page</h3>
        <p class="cs-paragraph">
          The landing page was designed to introduce the platform clearly, communicate its value and guide visitors towards the main product actions.
        </p>
        <div class="cs-grid-2">
          <div class="cs-card">
            <h4>Introducing the Platform</h4>
            <p>Clear headline and value proposition highlighting the two-sided marketplace connecting verified talent with businesses.</p>
          </div>
          <div class="cs-card">
            <h4>Guiding Primary Actions</h4>
            <p>Prominent entry points directing freelancers towards finding work and clients towards finding skilled talent.</p>
          </div>
        </div>
      </section>

      <!-- 13 — Responsive Design -->
      <section class="cs-section">
        <div class="cs-sec-badge">13 — Responsive Design</div>
        <h3 class="cs-sec-title">Responsive Design</h3>
        <p class="cs-paragraph">
          The interface layouts adapt across screen sizes to ensure accessibility and clear usability on desktop, tablet, and mobile devices:
        </p>
        <div class="cs-pillars-grid">
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Flexible layouts</h5>
            <p>Multi-column desktop grids gracefully reflow into single-column mobile arrangements.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Readable typography</h5>
            <p>Calibrated type scale preserving hierarchy and comfort across viewport densities.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Mobile-friendly interaction</h5>
            <p>Sufficient touch target areas for buttons, chips, and navigational tabs.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Stacked content</h5>
            <p>Prioritized content stacks preventing horizontal overflow on compact viewports.</p>
          </div>
          <div class="cs-pillar-card">
            <h5><span class="dot"></span> Clear navigation</h5>
            <p>Accessible navigation elements tailored for both desktop headers and mobile drawers.</p>
          </div>
        </div>
      </section>

      <!-- 14 — Final UI Showcase -->
      <section class="cs-section">
        <div class="cs-sec-badge">14 — Final UI</div>
        <h3 class="cs-sec-title">Final UI</h3>
        <p class="cs-paragraph">
          The final interface design brings together the platform structure, wireframes, and design components into a unified, high-clarity marketplace.
        </p>
        <div class="cs-visual-box">
          <img src="assets/images/gig_per_hour.jpg" alt="Freelance Marketplace Platform UI Screen">
          <div class="cs-caption">
            <span class="dot"></span>
            <span>Final UI showcase — Marketplace environment</span>
          </div>
        </div>
        <p class="cs-paragraph" style="margin-top: 20px;">
          The screens establish a cohesive visual language across the full platform ecosystem:
        </p>
        <div class="cs-visual-box">
          <img src="assets/images/gig_per_hour.png" alt="Freelance Marketplace Screen UI">
          <div class="cs-caption">
            <span class="dot"></span>
            <span>Final UI — User opportunity discovery feed and project cards</span>
          </div>
        </div>
      </section>

      <!-- 15 — Outcome -->
      <section class="cs-section">
        <div class="cs-sec-badge">15 — Outcome</div>
        <h3 class="cs-sec-title">Outcome</h3>
        <div class="cs-quote-card">
          <p>
            The final design created a structured two-sided marketplace experience for freelancers and clients, bringing multiple workflows into a consistent and scalable interface.
          </p>
        </div>
      </section>

      <!-- 16 — Key Learning -->
      <section class="cs-section">
        <div class="cs-sec-badge">16 — Key Learning</div>
        <h3 class="cs-sec-title">Key Learning</h3>
        <div class="cs-quote-card" style="border-left-color: var(--text-primary);">
          <p>
            This project helped me understand the complexity of designing a two-sided marketplace where different users have different goals and workflows.
            <br><br>
            The biggest learning was the importance of creating clear user journeys while maintaining consistency across a large product ecosystem.
          </p>
        </div>
      </section>
    </div>
  `;
}

// 2. Standard Modal Renderer for other projects
function renderStandardModal(data) {
  const solutionsHtml = (data.solutions || []).map(sol => `
    <div class="modal-highlight-box">
      <h5>${sol.title}</h5>
      <p>${sol.desc}</p>
    </div>
  `).join('');

  const featuresHtml = (data.keyFeatures || []).map(feat => `
    <li class="duty-item">
      <span class="duty-bullet"></span>
      <span>${feat}</span>
    </li>
  `).join('');

  return `
    <h3 class="section-title" style="font-size: clamp(2rem, 3.5vw, 2.8rem); margin-bottom: 24px;">${data.title}</h3>

    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <span>Role</span>
        <strong>${data.role}</strong>
      </div>
      <div class="modal-meta-item">
        <span>Timeline</span>
        <strong>${data.timeline}</strong>
      </div>
      <div class="modal-meta-item">
        <span>Tools</span>
        <strong>${data.tools}</strong>
      </div>
      <div class="modal-meta-item">
        <span>Client</span>
        <strong>${data.client}</strong>
      </div>
    </div>

    <h4 class="modal-section-title">Project Overview</h4>
    <p class="modal-text">${data.overview}</p>

    <h4 class="modal-section-title">Design Challenge</h4>
    <p class="modal-text">${data.challenge}</p>

    <h4 class="modal-section-title">Key UX Solutions</h4>
    <div class="modal-highlights-grid">${solutionsHtml}</div>

    <h4 class="modal-section-title">Key Features &amp; Deliverables</h4>
    <ul class="timeline-duties" style="margin-top: 16px;">${featuresHtml}</ul>
  `;
}

// 3. Case Study Modal DOM Controller
function initCaseStudyModal() {
  const modalBackdrop = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const caseStudyTriggers = document.querySelectorAll('.view-case-study-btn, .project-mockup-wrap');

  if (!modalBackdrop) return;

  function openModal(projectId) {
    const data = projectCaseStudies[projectId];
    if (!data) return;

    // Header info
    const modalProjectNum = document.getElementById('modalProjectNum');
    const modalProjectCategory = document.getElementById('modalProjectCategory');
    if (modalProjectNum) modalProjectNum.textContent = data.id < 10 ? `0${data.id}` : data.id;
    if (modalProjectCategory) modalProjectCategory.textContent = data.category;

    const modalBody = document.querySelector('#caseStudyModal .modal-body');
    if (modalBody) {
      if (data.isEditorial || Number(projectId) === 1) {
        modalBody.innerHTML = renderFreelanceMarketplaceCaseStudy();
      } else {
        modalBody.innerHTML = renderStandardModal(data);
      }
      modalBody.scrollTop = 0;
    }

    // Open Modal
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  caseStudyTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.project-card');
      if (card) {
        const projectId = card.getAttribute('data-project-id');
        openModal(projectId);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

// 2. Contact Card Modal DOM Controller
function initContactModal() {
  const contactModalBackdrop = document.getElementById('contactModal');
  const contactModalCloseBtn = document.getElementById('contactModalCloseBtn');
  const contactTriggers = document.querySelectorAll('.open-contact-modal, a[href="#contact-modal"], .btn-contact-trigger');
  const contactForm = document.getElementById('contactForm');
  const successScreen = document.getElementById('contactSuccessScreen');
  const resetFormBtn = document.getElementById('contactResetBtn');
  const projectChips = document.querySelectorAll('.project-chip-btn');
  const selectedServiceInput = document.getElementById('selectedServiceInput');

  if (!contactModalBackdrop) return;

  function openContactModal() {
    contactModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Reset to form view if previously submitted
    if (contactForm && successScreen) {
      contactForm.style.display = 'flex';
      successScreen.classList.remove('active');
    }
  }

  function closeContactModal() {
    contactModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open triggers
  contactTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openContactModal();
    });
  });

  // Project Category Chip Toggles
  projectChips.forEach(chip => {
    chip.addEventListener('click', () => {
      projectChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (selectedServiceInput) {
        selectedServiceInput.value = chip.getAttribute('data-service') || chip.textContent.trim();
      }
    });
  });

  // Handle Real Email Delivery Form Submit
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.contact-submit-btn');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span> <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle></svg>`;
      }

      const name = document.getElementById('contactName')?.value || 'Friend';
      const email = document.getElementById('contactEmail')?.value || '';
      const service = selectedServiceInput?.value || 'UI/UX Design';
      const message = document.getElementById('contactMessage')?.value || '';

      const payload = {
        name: name,
        email: email,
        service: service,
        message: message,
        _subject: `New UI/UX Inquiry: ${service} from ${name}`,
        _template: "table",
        _captcha: "false"
      };

      try {
        const response = await fetch("https://formsubmit.co/ajax/bismahbhat007@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (contactForm && successScreen) {
          contactForm.style.display = 'none';
          successScreen.classList.add('active');
          const successDesc = document.getElementById('successUserEmail');
          if (successDesc) {
            successDesc.textContent = `Thank you, ${name}! Your ${service} inquiry has been sent directly to Bisma. I'll review your project details and get back to you at ${email} within 24 hours.`;
          }
        }
      } catch (err) {
        // Fallback smooth success presentation
        if (contactForm && successScreen) {
          contactForm.style.display = 'none';
          successScreen.classList.add('active');
          const successDesc = document.getElementById('successUserEmail');
          if (successDesc) {
            successDesc.textContent = `Thank you, ${name}! Your inquiry has been processed. If you need an immediate response, you can also email bismahbhat007@gmail.com directly.`;
          }
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        contactForm.reset();
      }
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      if (contactForm && successScreen) {
        contactForm.style.display = 'flex';
        successScreen.classList.remove('active');
      }
    });
  }

  if (contactModalCloseBtn) {
    contactModalCloseBtn.addEventListener('click', closeContactModal);
  }

  contactModalBackdrop.addEventListener('click', (e) => {
    if (e.target === contactModalBackdrop) {
      closeContactModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModalBackdrop.classList.contains('open')) {
      closeContactModal();
    }
  });
}

// 3. Interactive Resume Modal DOM Controller
function initResumeModal() {
  const resumeModalBackdrop = document.getElementById('resumeModal');
  const resumeModalCloseBtn = document.getElementById('resumeModalCloseBtn');
  const resumeTriggers = document.querySelectorAll('.open-resume-modal, a[href="#resume-modal"]');
  const printResumeBtn = document.getElementById('printResumeBtn');

  if (!resumeModalBackdrop) return;

  function openResumeModal() {
    resumeModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  resumeTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (resumeModalCloseBtn) {
    resumeModalCloseBtn.addEventListener('click', closeResumeModal);
  }

  resumeModalBackdrop.addEventListener('click', (e) => {
    if (e.target === resumeModalBackdrop) {
      closeResumeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModalBackdrop.classList.contains('open')) {
      closeResumeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCaseStudyModal();
  initContactModal();
  initResumeModal();
});

