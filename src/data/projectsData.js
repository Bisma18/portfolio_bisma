export const projectsData = [
  {
    id: 1,
    number: "01",
    title: "FREELANCE MARKETPLACE",
    category: "Two-Sided Marketplace",
    description: "A two-sided digital marketplace connecting clients with skilled freelancers, featuring distinct discovery, onboarding, and contract workflows.",
    tags: [
      "Two-Sided Platform",
      "Freelancers & Clients",
      "Information Architecture",
      "Hiring Workflows"
    ],
    image: "assets/images/gig_per_hour.jpg",
    hasModal: false,
    isStatic: true
  },
  {
    id: 2,
    number: "02",
    title: "RAY CONSULTATION",
    category: "Consultation Platform",
    description: "Designed a consultation platform focused on consultant discovery, profiles and a streamlined user experience.",
    tags: [
      "Consultant Discovery",
      "Expert Profiles",
      "Consultation Flow",
      "Booking System"
    ],
    image: "assets/images/ray_consultation.jpg",
    hasModal: true,
    isReverse: true
  },
  {
    id: 3,
    number: "03",
    title: "NOTE TAKING APP",
    category: "Voice-to-Notes · Mobile App",
    description: "Created a modern mobile interface designed to capture spoken thoughts and turn them into structured notes.",
    tags: [
      "Voice Recording UX",
      "Note Organization",
      "Mobile Architecture",
      "Dark & Light Harmony"
    ],
    image: "assets/images/notetaking_app.jpg",
    hasModal: true
  },
  {
    id: 4,
    number: "04",
    title: "VOCABULARY APP",
    category: "Language Learning · Mobile App",
    description: "Designed a mobile learning experience that helps users learn and practice new language vocabulary efficiently.",
    tags: [
      "Flashcard UX",
      "Pronunciation Audio",
      "Habit Tracking",
      "Bite-Sized Lessons"
    ],
    image: "assets/images/vocabulary_app.jpg",
    hasModal: true,
    isReverse: true
  },
  {
    id: 5,
    number: "05",
    title: "RAYFOOD",
    category: "Food Delivery · Mobile App",
    description: "Designed a food delivery experience focusing on dish discovery, intuitive menus, and order tracking.",
    tags: [
      "Restaurant Discovery",
      "Menu Layout",
      "Cart & Checkout",
      "Order Tracking"
    ],
    image: "assets/images/rayfood_app.jpg",
    hasModal: true
  },
  {
    id: 6,
    number: "06",
    title: "MARKETPLACE WEBSITE",
    category: "Classifieds & Buying Platform",
    description: "Designed a modern buy-and-sell classifieds web interface with rapid location filtering, rich listings, and in-app buyer-seller chat.",
    tags: [
      "Buy & Sell Marketplace",
      "Product Discovery",
      "Chat Flow",
      "Filter Systems"
    ],
    image: "assets/images/marketplace_web.jpg",
    hasModal: true,
    isReverse: true
  },
  {
    id: 7,
    number: "07",
    title: "RAYBIT TECHNOLOGIES",
    category: "Corporate Website · UI/UX",
    description: "Full UI/UX design and design system for Raybit Technologies, showcasing enterprise software, ERP solutions, and client case studies.",
    tags: [
      "Corporate Web Design",
      "Design Systems",
      "Enterprise ERP UX",
      "Interactive Components"
    ],
    image: "assets/images/raybit_tech.jpg",
    hasModal: true
  }
];

export const caseStudyDetails = {
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
