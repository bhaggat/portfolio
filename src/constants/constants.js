export const myDetails = {
  name: "Dhruv Bhagat",
  title: "Senior Full Stack Developer",
  gitLink: "https://github.com/bhaggat",
  linkedinLink: "https://www.linkedin.com/in/bhagatdhruv/",
  email: "dhruvbhagat98@gmail.com",
  phone: "+91-7990850502",
  summary: [
    "I have around 7 years of experience in the IT industry, specializing in developing web and mobile applications.",
    "Throughout my career, I have worked with a variety of technologies, including React.js, React Native, Ionic, Angular, and Node.js, successfully delivered  projects to the clients.",
    "Beyond technical development, I also have experience in team management, mentoring, and training team members, as well as conducting interviews to build the teams.",
  ],
};

export const workExperience = [
  {
    role: "Technical Team Leader",
    company: "Webosmotic Pvt. Ltd.",
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

export const technologiesIconMapper = {
  "React.js": "react.svg",
  "Chrome Extension": "chrome.svg",
  "React Native": "react.svg",
  "NPM Package": "npm.svg",
  "Node.js": "node.svg",
  HTML: "html.svg",
  CSS: "css.svg",
  "Vanilla JavaScript": "javascript.svg",
  "GitLab Actions (CI/CD)": "gitlab.svg",
  Accessibility: "accessibility.svg",
  Puppeteer: "puppeteer.svg",
  "AWS S3": "aws-s3.svg",
  "AWS EC2": "aws-ec2.svg",
  TypeScript: "typescript.svg",
  Storybook: "storybook.svg",
  Vitest: "jest.svg",
  Playwright: "playwright.png",
  "Socket.io": "socket-io.svg",
  "ClickUp API": "clickup.png",
  "Ionic 4": "ionic.svg",
  SQLite: "sqlite.svg",
  Firebase: "firebase.svg",
  "Shopify API": "shopify.svg",
  Stripe: "stripe.svg",
  Firestore: "firestore.svg",
  "Apple In-App Purchases": "apple-pay.svg",
  Bluetooth: "bluetooth.svg",
  Flutter: "flutter.svg",
  Ionic: "ionic.svg",
  CakePHP: "cakephp.svg",
};
export const projects = [
  {
    title: "Split Easy",
    description:
      "Effortlessly Split Expenses with Friends & Family.",
    highlights: [
      "Expense Tracking: Easily add, categorize, and track expenses with detailed analytics.",
      "Group Management: Create and manage multiple groups for different social circles.",
      "Smart Bill Splitting: Automatically split bills equally, by percentage, or by custom amounts.",
    ],
    technologies: ["React.js", "TypeScript", "CSS", "Firebase", "Firestore"],
    thumbnail: "split-easy.svg",
    links: {
      webLink: "http://split-eazy.netlify.app/",
    },
  },
  {
    title: "Kachuful Score Tracker",
    description:
      "A modern, responsive web application for tracking scores in the traditional Gujarati card game Kachuful.",
    highlights: [
      "Multi-player support tracking up to 8 players simultaneously with flexible round patterns.",
      "Progressive Web App (PWA) support with offline functionality and installable capabilities.",
      "Smart scoring system with configurable rules, real-time tracking, and detailed game history.",
    ],
    technologies: ["React.js", "TypeScript", "CSS"],
    thumbnail: "kachuful.svg",
    links: {
      webLink: "https://kachuful-score.netlify.app/",
    },
  },
  {
    title: "Scheduled Website Opener (Personal)",
    description:
      "A Chrome extension that automates website opening based on a customizable schedule.",
    highlights: [
      "Set specific times to open websites automatically—daily, weekly, monthly, or annually.",
      "Configure websites to launch immediately when Chrome opens.",
    ],
    technologies: ["React.js", "Chrome Extension"],
    thumbnail: "scheduler-logo.webp",
    links: {
      webLink:
        "https://chromewebstore.google.com/detail/scheduled-website-opener/peimippheccjbhianpahacphickkbbjl",
    },
  },
  {
    title: "React Native SMS Module (Personal)",
    description:
      "A React Native library to fetch and monitor SMS messages with real-time event triggers.",
    highlights: [
      "Fetch SMS messages from the device inbox with advanced filtering options.",
      "Listen for incoming SMS messages in real-time.",
    ],
    technologies: ["React Native", "NPM Package", "TypeScript"],
    thumbnail: "react-native-sms-module.png",
    links: {
      webLink: "https://www.npmjs.com/package/react-native-sms-module",
    },
  },
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
    links: {
      webLink: "https://staging.guidy.net/",
    },
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
    thumbnail: "nda.png",
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
    thumbnail: "nda.png",
  },
  {
    title: "Xpenso (Personal)",
    description: "A comprehensive offline expense management app.",
    highlights: [
      "Developed an expense management app with offline data storage using SQLite.",
      "Designed an intuitive interface with smart suggestions for expenses.",
    ],
    technologies: ["Ionic 4", "React Native", "SQLite"],
    thumbnail: "xpenso.webp",
    links: {
      playStoreLink:
        "https://play.google.com/store/apps/details?id=io.bhagatdhruv.xpenso2&hl=en_IN",
    },
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
    thumbnail: "food-detective.png",
    links: {
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.webosmotic.ingredient_analyzer",
    },
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
    links: {
      playStoreLink: "https://play.google.com/store/apps/details?id=com.welnes",
      appStore: "https://apps.apple.com/eg/app/welnes/id1513854681",
    },
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
    thumbnail: "fiction-friendzy.png",
    links: {
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.webosmotic.fictionfrenzy",
    },
  },
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
