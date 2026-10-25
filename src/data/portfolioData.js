export const personalInfo = {
  name: "Payanshi Jain",
  titles: [
    "Full-Stack Developer",
    "Java Full-Stack Developer",
    "Aspiring Software Engineer"
  ],
  headline: "Building thoughtful software. Solving real-world problems.",
  bio: "I'm Payanshi, a full-stack developer with a foundation in Java, Spring Boot, and modern web architectures. I enjoy engineering scalable microservices, designing reliable REST APIs, and turning complex problems into practical, high-impact software.",
  extendedBio: [
    "I am a final-year B.Tech student in Artificial Intelligence and Data Science at Jaipur Engineering College and Research Centre (JECRC), graduating in 2027 with a 9.20 CGPA.",
    "My technical focus spans full-stack engineering with an emphasis on backend systems in Java and Node.js. I have hands-on experience designing RESTful APIs, securing applications with JWT and Role-Based Access Control (RBAC), implementing event messaging with Spring Kafka, and architecting geospatial queries using MongoDB's 2dsphere indexing.",
    "During my six-week internship at Cynbit Technologies, I engineered core modules for an Event Registration and Ticketing System using React.js, Express, and MongoDB. I approach software development with an emphasis on clean architecture, verifiable implementation, and practical usability."
  ],
  education: {
    institution: "Jaipur Engineering College and Research Centre (JECRC)",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    duration: "2023 – 2027",
    cgpa: "9.20",
    status: "Final-Year Undergraduate"
  },
  internship: {
    company: "Cynbit Technologies",
    location: "Jaipur, Rajasthan",
    role: "Full Stack Development Intern",
    period: "July 2025 – August 2025",
    type: "Six-week Industry Internship",
    certificateUrl: "/assets/Cynbit_Certificate.jpg"
  },
  contact: {
    email: "payanshijain10@gmail.com",
    github: "https://github.com/Payanshi2006",
    linkedin: "https://www.linkedin.com/in/payanshi-jain-0a04b6295/",
    leetcode: "https://leetcode.com/u/payanshiJain2006/",
    resumeUrl: "/assets/PayanshiJainResume.pdf",
    photoUrl: "/assets/PayanshiPhoto.png"
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    tagline: "Core foundations for system design and algorithms",
    items: [
      { name: "Java", featured: true, note: "Primary backend language; OOP, Collections, Concurrency" },
      { name: "JavaScript", featured: true, note: "Modern ES6+, async/await, DOM APIs" },
      { name: "C++", featured: false, note: "DSA implementation, memory layout, STL" },
      { name: "Python", featured: false, note: "Scripting, AI/ML coursework, data analysis" },
    ]
  },
  {
    category: "Backend & Systems",
    tagline: "API design, business logic, and distributed messaging",
    items: [
      { name: "Spring Boot", featured: true, note: "Microservices, Spring Security, Spring Data" },
      { name: "Node.js", featured: true, note: "Event-driven runtime, non-blocking I/O" },
      { name: "Express.js", featured: true, note: "RESTful routing, middleware pipelines" },
      { name: "REST APIs", featured: true, note: "Stateless architecture, status codes, OpenAPI standards" },
      { name: "Spring Kafka", featured: true, note: "Event-driven decoupling, task event topics" },
      { name: "JWT & RBAC", featured: true, note: "Stateless auth, secure HTTP-only cookies, roles" },
    ]
  },
  {
    category: "Frontend Engineering",
    tagline: "Component-driven, accessible, and responsive user interfaces",
    items: [
      { name: "React", featured: true, note: "Hooks, component lifecycles, virtual DOM" },
      { name: "Redux Toolkit", featured: false, note: "Centralized state management, slices" },
      { name: "Tailwind CSS", featured: true, note: "Utility-first design, mobile-first responsive systems" },
      { name: "HTML5 & CSS3", featured: false, note: "Semantic structure, Flexbox, Grid layout" },
      { name: "Socket.IO Client", featured: false, note: "Real-time bidirectional event streaming" },
    ]
  },
  {
    category: "Databases & Storage",
    tagline: "Relational, document, and geospatial data modeling",
    items: [
      { name: "MongoDB", featured: true, note: "Mongoose ODM, GeoJSON, 2dsphere spatial index" },
      { name: "MySQL", featured: false, note: "Relational schema design, normalization, SQL" },
      { name: "SQLite", featured: false, note: "Embedded application testing and storage" },
    ]
  },
  {
    category: "Developer Tools & DevOps",
    tagline: "Version control, build automation, and observability",
    items: [
      { name: "Git & GitHub", featured: true, note: "Branching workflows, code reviews, PRs" },
      { name: "Postman", featured: false, note: "API contract testing, environment configs" },
      { name: "Docker", featured: true, note: "Containerization of microservices" },
      { name: "Jenkins CI/CD", featured: false, note: "Pipeline configuration, automated builds" },
      { name: "Prometheus", featured: false, note: "Application metrics scraping and monitoring" },
      { name: "IntelliJ IDEA", featured: false, note: "Java / Spring Boot enterprise development" },
      { name: "Visual Studio Code", featured: false, note: "Full-stack web workflow and debugging" },
    ]
  },
  {
    category: "Computer Science Fundamentals",
    tagline: "Core theoretical pillars driving engineering decisions",
    items: [
      { name: "Data Structures & Algorithms", featured: true, note: "Problem solving, time/space complexity analysis" },
      { name: "Object-Oriented Programming", featured: true, note: "Inheritance, Polymorphism, Encapsulation, SOLID" },
      { name: "Database Management Systems", featured: false, note: "ACID properties, indexing strategies, transactions" },
      { name: "Operating Systems", featured: false, note: "Process scheduling, concurrency, virtual memory" },
      { name: "Computer Networks", featured: false, note: "TCP/IP, OSI layers, HTTP/HTTPS, DNS, WebSockets" },
    ]
  }
];

export const projectsData = [
  {
    id: "neuroforge-nexus",
    title: "NeuroForge Nexus Individual",
    tier: "featured-lead",
    tagline: "Enterprise Agile Project Management & CI/CD Platform",
    brief: "A distributed Java Spring Boot and React microservices architecture featuring sprint analytics, burndown metrics, and Kafka event streaming.",
    repoUrl: "https://github.com/Payanshi2006/NeuroForge_Nexus_Individual",
    liveUrl: null,
    stack: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "Spring Kafka",
      "MongoDB",
      "React",
      "Docker",
      "Jenkins CI/CD",
      "Prometheus"
    ],
    architecture: {
      services: [
        { name: "user-service", port: "8081", desc: "Auth, team hierarchy, sprint management, velocity engine, MongoDB persistence" },
        { name: "cicd-service", port: "8082", desc: "Build triggers, Jenkins pipeline hooks, deployment lifecycle management" },
        { name: "Kafka Broker", port: "9092", desc: "Decoupled task lifecycle event streaming on 'task-events' topic" },
        { name: "Prometheus", port: "9090", desc: "Real-time metrics scraping and microservice health observability" }
      ],
      highlights: [
        "Stateless token-based authentication with Spring Security and BCrypt hashing",
        "Role-Based Access Control (RBAC) protecting project, team, and sprint operations",
        "Spring Kafka event producer emitting TASK_CREATED, TASK_UPDATED, and TASK_DELETED events",
        "Sprint velocity calculation endpoint (/velocity) based on completed story points",
        "Sprint burndown tracking endpoint (/burndown) computing remaining points and completion rate",
        "Recursive subtask hierarchies managed through parentTaskId relationships",
        "Interactive React frontend with Kanban workflow boards and sprint status tracking"
      ]
    },
    problem: "Modern software development teams struggle with fragmented tooling between task management, sprint burndown tracking, and CI/CD status visibility.",
    solution: "Engineered an integrated microservices ecosystem that combines role-based project and sprint workflows with Kafka event decoupling and CI/CD pipeline automation.",
    contributions: "Authored the Spring Boot backend architecture, implemented Spring Security JWT filter, engineered the sprint metrics engine (velocity & burndown), integrated the Spring Kafka event producer, and built Docker container configurations."
  },
  {
    id: "vendormap",
    title: "VendorMap",
    tier: "featured-supporting",
    tagline: "Location-Based Offline Vendor Marketplace & Discovery Engine",
    brief: "A full-stack, location-aware web platform bridging local offline merchants in Tier 2/3 Indian cities with nearby customers via GPS proximity search.",
    repoUrl: "https://github.com/Payanshi2006/VendorMap",
    liveUrl: null,
    stack: [
      "React 18",
      "Node.js v18+",
      "Express.js",
      "MongoDB Atlas",
      "GeoJSON",
      "Tailwind CSS",
      "Mistral AI",
      "Recharts",
      "Cloudinary"
    ],
    architecture: {
      highlights: [
        "MongoDB GeoJSON 2dsphere indexing enabling efficient $nearSphere proximity queries",
        "Smart Radius Expansion Algorithm: 5 km → 20 km → 50 km → all shops progressive fallback",
        "Client-side distance calculations computed using the Haversine formula",
        "Weekly operating hours configuration with live dynamic Open/Closed badge indicators",
        "Mistral AI integration for automated one-click vendor product descriptions",
        "Vendor analytics dashboard tracking 7-day traffic trends and peak-hour distribution via Recharts",
        "XSS-resistant authentication using JWTs stored in HTTP-only cookies with role protection"
      ]
    },
    problem: "Small brick-and-mortar retailers in Tier 2 and Tier 3 cities lose local foot-traffic because they cannot afford steep e-commerce commissions or delivery logistics.",
    solution: "VendorMap acts as a smart local directory without taking cuts or forcing delivery: customers discover physical shops within walking or driving distance and visit them in person.",
    contributions: "Contributed to geospatial query integration, smart radius fallback logic, vendor catalogue management, and responsive UI components with Tailwind CSS."
  },
  {
    id: "tavilyte",
    title: "Tavilyte",
    tier: "featured-supporting",
    tagline: "Agentic AI Chat Workspace with Real-Time Web Grounding",
    brief: "An intelligent conversational workspace leveraging LangGraph multi-agent reasoning, Tavily deep web search, and WebSocket streaming.",
    repoUrl: "https://github.com/Payanshi2006/Tavilyte",
    liveUrl: null,
    stack: [
      "React 19",
      "Redux Toolkit",
      "Node.js",
      "Express 5",
      "Socket.IO",
      "LangChain",
      "LangGraph",
      "Tavily Search API",
      "Google Gemini",
      "pdf2json",
      "Tailwind CSS v4"
    ],
    architecture: {
      highlights: [
        "LangGraph cyclic agent execution loop allowing dynamic tool selection and reflection",
        "Tavily Search integration providing real-time, citation-backed web grounding",
        "Bidirectional low-latency token streaming over WebSockets via Socket.IO",
        "Document ingestion engine utilizing pdf2json for document parsing and context retrieval",
        "Centralized frontend state management using Redux Toolkit slices",
        "Markdown rendering with mathematical notation support via Remark GFM",
        "Configured rate limiting and Express 5 async error handling pipelines"
      ]
    },
    problem: "Standard LLM chatbots frequently hallucinate on current events, lack live web verification, and suffer from high latency when processing deep queries.",
    solution: "Tavilyte combines LangGraph multi-agent orchestration with Tavily's dedicated research search engine to verify facts and stream grounded responses in real time.",
    contributions: "Developed full-stack features including the Socket.IO streaming event handler, Tavily search service integration, PDF upload controller, and Redux chat state management."
  },
  {
    id: "event-registration-system",
    title: "Event Registration & Ticketing System",
    tier: "supporting-compact",
    tagline: "Campus & Corporate Event Ticketing Platform",
    brief: "The six-week internship platform built at Cynbit Technologies providing role-based event creation, seat booking, and JWT access control.",
    repoUrl: "https://github.com/Payanshi2006/Event_Registration_System",
    liveUrl: null,
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "BCrypt",
      "REST APIs"
    ],
    architecture: {
      highlights: [
        "Role-Based Access Control separating administrative event organizers from attendees",
        "RESTful API endpoints for event lifecycle: creation, update, listing, and attendee registration",
        "MongoDB collections for users, events, and bookings with relational references",
        "Seat availability counter decrementing atomically upon confirmed registration",
        "Protected client-side routing preventing unauthorized access to administrative panels"
      ]
    },
    problem: "Event organizers face frequent ticketing discrepancies, double-booking issues, and disorganized manual registration pipelines.",
    solution: "Engineered a streamlined, role-protected web portal with instantaneous ticket confirmation and centralized registration management.",
    contributions: "Internship project at Cynbit Technologies: created REST endpoints in Express, implemented JWT authentication and role validation, designed Mongoose schemas, and built React UI dashboards."
  },
  {
    id: "placeprep",
    title: "PlacePrep",
    tier: "supporting-compact",
    tagline: "Institutional Campus Placement Intelligence Platform",
    brief: "A collaborative Java Spring Boot 3.5 & React 19 SaaS platform featuring automated eligibility evaluation and interview debrief workflows.",
    repoUrl: "https://github.com/Priyansh1867/PlacePrep",
    liveUrl: "https://place-prep.vercel.app",
    stack: [
      "Java 25",
      "Spring Boot 3.5",
      "Spring Security 6",
      "Spring Data JPA",
      "H2 Database",
      "React 19",
      "Vite 8",
      "Tailwind CSS"
    ],
    architecture: {
      highlights: [
        "Automated eligibility engine checking CGPA, 10th/12th percentages, backlogs, and branch constraints",
        "Schedule Conflict Radar detecting overlapping company assessment slots across drives",
        "Company-specific question bank categorized by interview rounds and technical domains",
        "Community debriefing forum with candidate upvoting and administrative moderation",
        "Live production deployment hosted on Vercel with REST proxy forwarding"
      ]
    },
    problem: "Engineering students lack grounded, company-specific preparation intelligence, while placement cells struggle with manual eligibility verification.",
    solution: "Delivered a centralized placement preparation ecosystem with real-time drive management, eligibility screening, and interview experience sharing.",
    contributions: "Collaborative project created with Priyansh Jain: contributed to frontend UI components, question catalog views, candidate workflow views, and documentation."
  }
];

export const experienceData = [
  {
    company: "Cynbit Technologies",
    role: "Full Stack Development Intern",
    location: "Jaipur, Rajasthan",
    duration: "July 2025 – August 2025",
    type: "Six-Week Full-Stack Internship",
    project: "Event Registration and Ticketing System",
    certificateUrl: "/assets/Cynbit_Certificate.jpg",
    bullets: [
      "Completed an intensive six-week full-stack engineering internship, developing core features for a commercial Event Registration and Ticketing System.",
      "Engineered frontend user interfaces using React.js and built backend microservices using Node.js and Express.js.",
      "Designed and implemented RESTful API endpoints for event creation, event discovery, attendee registration, and dynamic ticket booking workflows.",
      "Modeled and managed MongoDB collections for users, events, and bookings using Mongoose ODM schemas.",
      "Implemented JWT-based authentication and Role-Based Access Control (Admin vs User), securing administrative endpoints from unauthorized mutations."
    ]
  }
];

export const educationData = [
  {
    institution: "Jaipur Engineering College and Research Centre (JECRC)",
    qualification: "B.Tech in Artificial Intelligence and Data Science",
    duration: "2023 – 2027",
    score: "9.20 CGPA",
    badge: "Undergraduate (Final Year)",
    highlights: [
      "Focusing on Distributed Backend Systems, Database Engineering, and Machine Learning",
      "Maintained consistent academic distinction with a 9.20 cumulative GPA",
      "Active participant in technical hackathons and institutional software development"
    ]
  },
  {
    institution: "Mahatma Gandhi School",
    qualification: "Senior Secondary (Class XII — CBSE)",
    duration: "Completed 2023",
    score: "82.40%",
    badge: "Science & Mathematics Stream",
    highlights: [
      "Core coursework in Physics, Chemistry, and Mathematics",
      "Built strong foundation in algorithmic reasoning and scientific problem-solving"
    ]
  },
  {
    institution: "Shiv Jyoti School",
    qualification: "Secondary (Class X — State Board)",
    duration: "Completed 2021",
    score: "96.00%",
    badge: "Academic Merit",
    highlights: [
      "Ranked at the top of the academic cohort with 96.00% distinction",
      "Recognized for academic excellence across mathematics and science"
    ]
  }
];

export const achievementsData = [
  {
    title: "Smart India Hackathon (SIH)",
    award: "Ranked among Top 23 Nationally",
    description: "Competed in the prestigious Smart India Hackathon; team evaluated and ranked among the Top 23 teams across the country for developing a software solution to national institutional challenges.",
    certificateUrl: "/assets/SIH_CERTIFICATE.pdf",
    category: "National Hackathon"
  },
  {
    title: "Cognizant Hackathon",
    award: "Advanced to Round 2",
    description: "Engineered a rapid software prototype under competitive time constraints, clearing Round 1 and advancing to Round 2 of the national technical evaluation.",
    certificateUrl: null,
    category: "Corporate Hackathon"
  },
  {
    title: "Zero Hour Summit / MUN",
    award: "Delegate Participant",
    description: "Participated in diplomatic debate and policy analysis committees at the Zero Hour Summit / Model United Nations, addressing global geopolitical and technology governance issues.",
    certificateUrl: "/assets/MUN_CERTIFICATE.pdf",
    category: "Debate & Leadership"
  }
];

export const certificationsData = [
  {
    name: "Juniper Networks Certified Associate – Junos (JNCIA-Junos)",
    issuer: "Juniper Networks",
    date: "September 2026",
    credentialId: "Verified Certificate",
    description: "Validates foundational networking knowledge, Junos OS routing fundamentals, switching technologies, and network configuration practices.",
    status: "Active"
  },
  {
    name: "Copado AI Certification",
    issuer: "Copado",
    date: "July 2026",
    credentialId: "Verified Certificate",
    description: "Focuses on AI-assisted DevOps pipelines, continuous quality assurance, and automated software delivery workflows.",
    status: "Active"
  },
  {
    name: "Google Cloud Certificate through GDSC",
    issuer: "Google Developer Student Clubs (GDSC)",
    date: "May 2024",
    credentialId: "Verified Certificate",
    description: "Foundational training in Google Cloud Platform infrastructure, container orchestration, compute engines, and cloud storage architectures.",
    status: "Active"
  }
];

export const codingProfilesData = [
  {
    platform: "GitHub",
    username: "Payanshi2006",
    url: "https://github.com/Payanshi2006",
    highlight: "5+ Public Repositories",
    description: "Host to Java Spring Boot microservices, Kafka event-driven backends, MERN applications, and full-stack AI workspaces.",
    primaryAction: "Explore Repositories"
  },
  {
    platform: "LeetCode",
    username: "payanshiJain2006",
    url: "https://leetcode.com/u/payanshiJain2006/",
    highlight: "Algorithms & DSA Focus",
    description: "Consistent problem-solving in Data Structures, Algorithms, Dynamic Programming, and Graph Traversals in Java and C++.",
    primaryAction: "View LeetCode Profile"
  },
  {
    platform: "LinkedIn",
    username: "payanshi-jain-0a04b6295",
    url: "https://www.linkedin.com/in/payanshi-jain-0a04b6295/",
    highlight: "Professional Network",
    description: "Connect for Software Engineering, Java Full-Stack, and Full-Stack Developer opportunities.",
    primaryAction: "Connect on LinkedIn"
  }
];
