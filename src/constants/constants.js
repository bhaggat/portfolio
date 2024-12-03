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
    role: "Team Leader",
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

export const projects = [
  {
    title: "Guidy Tool",
    description: "Accessibility Widget and Multilingual Backend Service.",
    highlights: [
      "Developed an accessibility widget with screen readers, voice navigation, customizable font/cursor settings, and multilingual support.",
      "Integrated WCAG compliance checks, improving client websites' accessibility scores by 30%.",
      "Managed autodeploy from GitLab to AWS EC2",
    ],
    thumbnail: "guidy.png",
    technologies: [
      "React.js",
      "Node.js",
      "HTML",
      "CSS",
      "Vanilla JavaScript",
      "Gitlab Actions (CI/CD)",
      "Accessibility",
      "Puppeteer",
      "AWS S3",
      "AWS EC2",
      "AWS S3",
    ],
    links: {
      webLink: "https://staging.guidy.net/",
    },
  },
  {
    title: "NDA Signed (Component Storybooks)",
    description:
      "Customizable Component Represented In Storybook With 100% Test Coverage Using Vite",
    technologies: [
      "React.js",
      "Typescript",
      "Storybook",
      "Vitest",
      "Playwrite",
    ],
    thumbnail: "nda.png",
    highlights: [
      "Highly customizable components to be used on multiple projects represented in Storybook",
      "IImplemented 100% coverage testing using Vitest & Playwrite",
    ],
  },
  {
    title: "NDA Signed (Real-time Q&A Platform)",
    description:
      "Large-scale app for real-time customer support and messaging.",
    highlights: [
      "Led development for a platform used by clients like Microsoft and TikTok.",
      "Integrated Pusher.js/Socket.io for real-time data handling, supporting thousands of users.",
    ],
    thumbnail: "nda.png",
    technologies: [
      "React Native",
      "React.js",
      "Node.js",
      "Socket.io",
      "Typescript",
    ],
  },
  {
    title: "NDA Signed (Mortgage Loan Platform)",
    description: "Form Refactoring & ClickUp API Integration.",
    highlights: [
      "Refactored complex form fields and integrated ClickUp for backend management.",
      "Enhanced usability and data handling for core workflows.",
    ],
    thumbnail: "nda.png",
    technologies: ["React.js", "ClickUp API"],
  },
  {
    title: "Xpenso",
    description: "Offline Expense Management App.",
    highlights: [
      "Developed an expense management app with offline data storage using SQL Lite.",
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
    description: "Instant Product Categorization and Allergen Detection.",
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
    description: "Farmers and Makers Marketplace App.",
    highlights: [
      "Developed a marketplace app for connecting farmers and makers.",
      "Implemented video content sharing and integrated Shopify stores with Stripe payments.",
    ],
    technologies: ["React Native", "Firebase", "Shopify API", "Stripe"],
    thumbnail: "cultisan.png",
  },
  {
    title: "Gorilla Fit / Welnes",
    description: "Personalized Fitness & Wellness Apps.",
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
    description: "Employee and ECU Device Management App.",
    highlights: [
      "Developed an app with Bluetooth connectivity and secure login using 2FA and SSO.",
      "Streamlined employee and device management workflows.",
    ],
    technologies: ["React Native", "Bluetooth"],
    thumbnail: "aio-toolkit.webp",
  },
  {
    title: "React Gantt",
    description: "Gantt Chart Library for React Applications.",
    highlights: [
      "Built a custom Gantt chart library without third-party libraries.",
      "Optimized performance for large datasets using virtualization.",
    ],
    technologies: ["React.js"],
    thumbnail: "gantt.png",
  },
  {
    title: "NDA Signed (B2B Sales App)",
    description: "B2B Sales Rep Management App.",
    highlights: [
      "Developed an offline-enabled app for sales reps with QR code scanning.",
      "Integrated secure authentication using AWS Cognito.",
    ],
    technologies: ["Ionic 4", "SQLite", "AWS Cognito", "Bluetooth"],
    thumbnail: "nda.png",
  },
  {
    title: "Fiction Friendzy",
    description: "Proof of Concept Game Development.",
    highlights: [
      "Developed a POC game app exploring game mechanics and user journeys.",
      "Deployed the first mobile game project to the Play Store.",
    ],
    thumbnail: "fiction-friendzy.png",
    technologies: ["Flutter", "Firestore"],
    links: {
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.webosmotic.fictionfrenzy",
    },
  },
  {
    title: "Helping Hand Apps",
    description: "Assisted development for various apps.",
    highlights: [
      "Worked on projects like Mansons, Carpenter Guru, Realty Xchange, and RCSR.",
      "Developed admin modules and static websites.",
    ],
    technologies: ["Ionic", "CakePHP", "HTML", "CSS"],
    thumbnail: "misc.webp",
  },
];
