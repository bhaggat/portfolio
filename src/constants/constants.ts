export const myDetails = {
  name: "Dhruv Bhagat",
  title: "Senior Full Stack Developer",
  location: "Surat, Gujarat, India",
  gitLink: "https://github.com/bhaggat",
  linkedinLink: "https://www.linkedin.com/in/bhagatdhruv/",
  email: "dhruvbhagat98@gmail.com",
  phone: "+91-7990850502",
  whatsapp: "https://wa.me/917990850502",
  avatar: "dhruv.jpeg",
  resume: "Dhruv MERN CV.pdf",
  summary: [
    "I have around 8 years of experience in the IT industry, specializing in developing web and mobile applications.",
    "Throughout my career, I have worked with a variety of technologies, including React.js, React Native, Ionic, Angular, and Node.js, successfully delivered projects to the clients.",
    "Beyond technical development, I also have experience in team management, mentoring, and training team members, as well as conducting interviews to build the teams.",
  ],
};

export const workExperience = [
  {
    role: "Senior Software Engineer",
    company: "Jeavio Private Limited",
    logo: "jeavio.png",
    location: "Remote",
    start: "Jan 13, 2025",
    end: "Present",
    responsibilities: [
      "Architecting robust backend systems and designing scalable database schemas for high-concurrency applications.",
      "Implementing and optimizing image analysis and facial recognition features using AWS Rekognition.",
      "Developing microservices and serverless functions to enhance system modularity and efficiency.",
      "Collaborating with stakeholders to translate business requirements into technical architectures.",
      "Leading technical discussions and ensuring code quality through peer reviews and best practices.",
    ],
  },
  {
    role: "Technical Team Leader",
    company: "Webosmotic Pvt. Ltd.",
    logo: "webosmotic.png",
    location: "Surat",
    start: "Sept 2022",
    end: "Nov 2024",
    responsibilities: [
      "Led a cross-functional team of developers to deliver web and mobile applications.",
      "Client communication, Project estimation/timeline/roadmap creation for the project",
      "Developed and deployed over 5+ mobile applications on play store and app store.",
      "Managed cloud infrastructure on AWS.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Webosmotic Pvt. Ltd.",
    logo: "webosmotic.png",
    location: "Surat",
    start: "Jul 2021",
    end: "Sept 2022",
    responsibilities: [
      "Implemented real-time features such as live streaming and messaging using Socket.io, Firebase, Pusher.js, and Agora.io.",
      "Frontend/Backend optimization and manage scalability",
      "Training interns/team members",
      "Client communication, Help juniors",
    ],
  },
  {
    role: "Mobile Application Developer",
    company: "Webosmotic Pvt. Ltd.",
    logo: "webosmotic.png",
    location: "Surat",
    start: "Jul 2019",
    end: "Jul 2021",
    responsibilities: [
      "Built mobile applications using Ionic and React native and deployed them",
      "Worked on Angular for dashboard/admin module",
    ],
  },
  {
    role: "App & Web Developer",
    company: "Bcube Solutions",
    logo: "bcube.gif",
    location: "Surat",
    start: "July 2018",
    end: "July 2019",
    responsibilities: [
      "Developed responsive web applications using HTML5, CSS3, Bootstrap, jQuery, and JavaScript.",
      "Built PWA applications with Capacitor.",
    ],
  },
  {
    role: "Intern",
    company: "Bcube Solutions",
    logo: "bcube.gif",
    location: "Surat",
    start: "Jan 2018",
    end: "July 2018",
    responsibilities: [
      "Developed responsive web applications using HTML5, CSS3, Bootstrap, jQuery, and JavaScript.",
      "Built PWA applications with Capacitor.",
    ],
  },
];

export const education = [
  {
    institution: "Bhagwan Mahavir College Of Management, Surat",
    degree: "Master of Computer Applications (Integrated)",
    duration: "March 2013 - March 2018",
  },
  {
    institution: "T & TV Nanpura School, Surat",
    degree: "HSC (Gujarat Board)",
    duration: "March 2011 - March 2013",
  },
];

export const skills = {
  technical: {
    Frontend: [
      "React.js",
      "React Native",
      "Flutter",
      "Ionic 5",
      "Angular (6)",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    Backend: ["Node.js", "Next.js", "Express.js"],
    Database: [
      "MongoDB (NoSQL)",
      "SQL Lite (On Mobile)",
      "Redis (In Memory) with adaptor",
      "InfluxDB (Analytics)",
    ],
    Firebase: [
      "Auth",
      "Firestore",
      "Realtime Database",
      "Messaging/Notifications",
      "Storage",
      "Crashlytics ",
    ],
    "State Management": [
      "Redux Core",
      "Redux Toolkit",
      "RTK Query",
      "Context API",
      "DVA",
    ],
    "DevOps & Cloud": [
      "AWS (EC2",
      "S3",
      "CloudFront)",
      "GitLab CI/CD",
      "Docker",
      "Gitlab Pipelines",
      "Github Actions",
    ],
    "Real-Time & Integrations": [
      "Socket.io",
      "Pusher.js",
      "Agora.io",
      "Shopify API",
      "ClickUp API",
      "REST API",
    ],
    Payments: [
      "Stripe",
      "Razorpay",
      "Accept Payments",
      "Google In-App Purchase",
      "Apple In-App Purchase",
    ],
    "Testing & UI": ["Jest", "Storybook", "MUI", "AntD", "React Native Paper"],
    "Code Quality": ["TypeScript", "ESLint", "Prettier"],
    Other: [
      "Accessibility (WCAG 2.1)",
      "Puppeteer",
      "Axe core",
      "Joi",
      "Docker",
      "i18n",
    ],
  },
  soft: [
    "Leadership & Team Management",
    "Agile Project Management (Scrum)",
    "Strong Communication & Collaboration",
    "Quick Learning & Adaptability",
  ],
};

export const personalProjects = [
  {
    title: "Split Easy",
    description:
      "A sleek expense-sharing web & Android app to easily track shared expenses, split bills, and settle balances with friends & family.",
    highlights: [
      "Expense Tracking: Add, categorize, and monitor shared expenses with real-time analytics and visual charts.",
      "Group Management: Create and organize multiple groups for trips, households, and social circles.",
      "Smart Bill Splitting: Split expenses equally, by percentage, or custom amounts with automated debt simplification.",
    ],
    technologies: ["React.js", "TypeScript", "CSS", "Firebase", "Firestore"],
    thumbnail: "split-easy.svg",
    showFullImage: true,
    links: {
      webLink: "https://split-easy.bhaggat.in/home",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=io.bhagatdhruv.spliteasy",
    },
  },
  {
    title: "Xpenso",
    description:
      "An offline-first personal finance app built with SQLite for instant expense tracking and intelligent spending insights.",
    highlights: [
      "Offline Storage: High-performance SQLite database for zero-latency local expense storage and privacy.",
      "Intuitive Spending UI: Smart expense categorization, automatic suggestions, and visual spending summaries.",
    ],
    technologies: ["Ionic 4", "React Native", "SQLite"],
    thumbnail: "xpenso.png",
    links: {
      webLink: "https://xpenso.bhaggat.in",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.xpenso.app",
    },
  },
  {
    title: "Kachuful Score Tracker",
    description:
      "A modern, responsive web & Android app with offline PWA support for tracking scores in the traditional Gujarati card game Kachuful.",
    highlights: [
      "Multi-Player Support: Track scores for up to 8 players simultaneously with flexible round-based rules.",
      "Progressive Web App: Fully installable PWA featuring offline functionality and instant state recovery.",
      "Smart Score Engine: Automated real-time score calculations, customizable game rules, and game history tracking.",
    ],
    technologies: ["React.js", "TypeScript", "CSS"],
    thumbnail: "kachuful.png",
    showFullImage: true,
    links: {
      webLink: "https://kachuful.bhaggat.in/home",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=io.bhagatdhruv.kachuful",
    },
  },
  {
    title: "Rewriter AI",
    description:
      "Inline AI text assistant to rewrite, refine, or summarize text on any webpage using your own API keys.",
    highlights: [
      "Inline Text Rewriter: Select text on any webpage (Alt+Shift+R or context menu) to rewrite inline, fix grammar, adjust tone, or run custom AI prompts.",
      "Multi-Model Chat Assistant: Toolbar popup supporting leading AI models (OpenAI, Gemini, Claude, Grok, Groq, Mistral, and OpenRouter).",
      "Privacy-First & BYOK: Operates 100% client-side with no middleman servers; API keys are encrypted and stored locally.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Chrome Extension",
      "OpenAI API",
      "Gemini API",
    ],
    thumbnail: "rewriter-ai.png",
    showFullImage: true,
    links: {
      webLink: "https://rewriter.bhaggat.in/",
      chromeWebStoreLink:
        "https://chromewebstore.google.com/detail/rewriter-ai/dfeikdphcfjnkdeolkcnblpdokkcddlm?authuser=0&hl=en-GB",
    },
  },
  {
    title: "Scheduled Website Opener",
    description:
      "A productivity Chrome extension that automates website launching on customizable daily, weekly, or annual schedules.",
    highlights: [
      "Flexible Scheduling: Schedule specific URLs to open automatically on recurring times or dates.",
      "Browser Startup Triggers: Configure key dashboards and links to launch automatically upon Chrome startup.",
    ],
    technologies: ["React.js", "Chrome Extension"],
    thumbnail: "chrome-schaduler.png",
    showFullImage: true,
    links: {
      webLink: "https://scheduler.bhaggat.in",
      chromeWebStoreLink:
        "https://chromewebstore.google.com/detail/scheduled-website-opener/fblmgicjhjgnocgdceoflhlnifngmngb",
    },
  },
  {
    title: "Git Pull Watched",
    description:
      "A developer productivity VS Code extension that automatically runs database migrations and custom scripts after git pull.",
    highlights: [
      "Auto File Detection: Detects changes in critical files like schema.prisma or package.json following git pull.",
      "Custom Script Execution: Automatically triggers CLI commands or build scripts to keep dev environments synchronized.",
      "Multi-Environment Support: Flexible per-repository configuration with custom execution rules.",
    ],
    technologies: ["VS Code Extension", "TypeScript", "Node.js"],
    thumbnail: "git-pull-watched.png",
    showFullImage: true,
    links: {
      vscodeLink:
        "https://marketplace.visualstudio.com/items?itemName=DhruvBhagat.git-pull-watched",
    },
  },
  {
    title: "React Native SMS Module",
    description:
      "A modern React Native library for Android to query, filter, and monitor incoming SMS messages with real-time event triggers.",
    highlights: [
      "Real-Time SMS Listener: Subscribes to incoming SMS events with low-latency device event listeners.",
      "Inbox Querying & Filtering: Advanced inbox searching by sender, keywords, date ranges, and read status.",
      "TurboModule Architecture: Built with React Native's New Architecture for maximum native execution speed.",
    ],
    technologies: ["React Native", "NPM Package", "TypeScript"],
    thumbnail: "Npm-logo.svg.png",
    links: {
      npmLink: "https://www.npmjs.com/package/react-native-sms-module",
      githubLink: "https://github.com/bhaggat/react-native-sms-module",
    },
  },
];

export const webosmoticProjects = [
  {
    title: "Guidy Tool",
    description:
      "An accessibility widget and multilingual backend service to enhance website inclusivity.",
    highlights: [
      "Developed an accessibility widget with screen readers, voice navigation, customizable font/cursor settings, and multilingual support.",
      "Integrated WCAG compliance checks, improving client websites' accessibility scores by 30%.",
      "Managed automated deployments from GitLab to AWS EC2.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "GitLab Actions (CI/CD)",
      "Accessibility",
      "Puppeteer",
      "AWS S3",
      "AWS EC2",
    ],
    thumbnail: "guidy.png",
  },
  {
    title: "NDA Signed (Component Storybooks)",
    description:
      "Highly customizable components represented in Storybook with comprehensive test coverage.",
    highlights: [
      "Highly customizable components for multiple projects represented in Storybook.",
      "Implemented 100% test coverage using Vitest and Playwright.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Storybook",
      "Vitest",
      "Playwright",
    ],
    thumbnail: "nda.png",
  },
  {
    title: "NDA Signed (Real-time Q&A Platform)",
    description:
      "A large-scale app enabling real-time customer support and messaging.",
    highlights: [
      "Led development for a platform used by clients like Microsoft and TikTok.",
      "Integrated Pusher.js/Socket.io for real-time data handling, supporting thousands of users.",
    ],

    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Socket.io",
      "TypeScript",
    ],
    thumbnail: "pubble.jpeg",
  },
  {
    title: "NDA Signed (Mortgage Loan Platform)",
    description:
      "Enhanced usability for mortgage-related workflows with backend integration.",
    highlights: [
      "Refactored complex form fields and integrated ClickUp for backend management.",
      "Enhanced usability and data handling for core workflows.",
    ],
    technologies: ["React.js", "ClickUp API"],
    thumbnail: "lendai-logo.svg",
  },
  {
    title: "Food Detective",
    description:
      "An AI-powered app for instant product categorization and allergen detection.",
    highlights: [
      "Built an AI-driven app to scan product ingredients and categorize them as Vegetarian, Non-Vegetarian, or Vegan.",
      "Implemented allergen detection and dietary guidance, enhancing user engagement.",
    ],
    technologies: ["React Native"],
    thumbnail: "Food-Detective-Logo.webp",
  },
  {
    title: "Cultisan",
    description:
      "A marketplace app connecting farmers and makers with end-users.",
    highlights: [
      "Developed a marketplace app for connecting farmers and makers.",
      "Implemented video content sharing and integrated Shopify stores with Stripe payments.",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Firestore",
      "Shopify API",
      "Stripe",
    ],
    thumbnail: "cultisan.png",
  },
  {
    title: "Gorilla Fit / Welnes",
    description:
      "Fitness and wellness apps offering personalized challenges and nutrition plans.",
    highlights: [
      "Created fitness and wellness apps with personalized challenges and nutrition plans.",
      "Integrated secure payments via Stripe and Apple In-App Purchases.",
    ],
    technologies: [
      "React Native",
      "Firestore",
      "Stripe",
      "Apple In-App Purchases",
    ],
    thumbnail: "welnes.webp",
    backgroundColor: "#0F5171",
  },
  {
    title: "AIoT Toolkit",
    description:
      "An app for streamlined employee and device management with Bluetooth support.",
    highlights: [
      "Developed an app with Bluetooth connectivity and secure login using 2FA and SSO.",
      "Streamlined employee and device management workflows.",
    ],
    technologies: ["React Native", "Bluetooth"],
    thumbnail: "aio-toolkit.webp",
  },
  {
    title: "React Gantt",
    description:
      "A high-performance Gantt chart library for React applications.",
    highlights: [
      "Built a custom Gantt chart library without third-party dependencies.",
      "Optimized performance for large datasets using virtualization.",
    ],
    technologies: ["React.js", "NPM Package"],
    thumbnail: "gantt.png",
  },
  {
    title: "NDA Signed (B2B Sales App)",
    description: "A sales rep management app with offline capabilities.",
    highlights: [
      "Developed an offline-enabled app for sales reps with QR code scanning.",
      "Integrated secure authentication using AWS Cognito.",
    ],
    technologies: ["Ionic 4", "SQLite", "Bluetooth"],
    thumbnail: "nda.png",
  },
  {
    title: "Fiction Friendzy",
    description:
      "A proof-of-concept mobile game exploring user engagement strategies.",
    highlights: [
      "Developed a POC game app exploring game mechanics and user journeys.",
      "Deployed the first mobile game project to the Play Store.",
    ],
    technologies: ["Flutter", "Firestore"],
    thumbnail: "fiction-frenzy-1-1.png",
  },
];

export const bcubeProjects = [
  {
    title: "Helping Hand Apps",
    description:
      "Assisted in developing multiple utility apps and static websites.",
    highlights: [
      "Worked on projects like Mansons, Carpenter Guru, Realty Xchange, and RCSR.",
      "Developed admin modules and static websites.",
    ],
    technologies: ["Ionic", "CakePHP", "HTML", "CSS"],
    thumbnail: "misc.webp",
  },
];

export const jeavioProjects = [
  {
    title: "Distinct",
    description:
      "Live Data Intelligence platform for Global Brands. A purpose-built tech infrastructure for live experiences that captures intelligence from every interaction to drive real-time optimization and measurable valuation.",
    highlights: [
      "Live Optimization Data that improves experiences in real-time.",
      "Unified ROI Measurement to quantify activation performance across all touchpoints.",
      "Patent-Pending Tech Process that transforms live data into measurable valuation intelligence.",
      "Enterprise-ready infrastructure that is SOC-II certified and procurement-ready.",
    ],
    backgroundColor: "#FFFFFF",
    links: {
      webLink: "https://distinct.so/",
    },
    technologies: [
      "React.js",
      "Node.js",
      "Storybook",
      "PostgreSQL",
      "MongoDB",
      "Amazon Rekognition",
      "AWS ECS",
      "AWS S3",
      "Python",
    ],
    thumbnail: "distinct.svg",
  },
];
