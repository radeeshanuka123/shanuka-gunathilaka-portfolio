export const portfolioData = {
  personal: {
    firstName: "Shanuka Radeeshan",
    lastName: "Gunathilaka",
    fullName: "Shanuka Radeeshan Gunathilaka",
    initials: "SG",
    title: "Assistant Lecturer & Full-Stack Developer",
    location: "Sri Lanka",
    email: "shanukagunathilaka00@gmail.com",
    heroIntro: "I combine software-development expertise with teaching experience to build reliable digital solutions and help future developers strengthen their technical skills.",
    github: "https://github.com/radeeshanuka123",
    linkedin: "https://linkedin.com/in/shanuka-radeeshan", // Using standard placeholder since exact link not provided
  },
  about: {
    cards: [
      { id: 1, title: "Current Role", description: "Assistant Lecturer at ESOFT Metro Campus", icon: "briefcase" },
      { id: 2, title: "Location", description: "Sri Lanka", icon: "map-pin" },
      { id: 3, title: "Degree", description: "BSc, University of Jaffna", icon: "graduation-cap" },
      { id: 4, title: "Master's Programme", description: "MIT, University of Colombo School of Computing", icon: "book-open" },
      { id: 5, title: "Development Focus", description: "React, Node.js, Firebase", icon: "code" },
      { id: 6, title: "Teaching Focus", description: "Software Engineering & Web Development", icon: "users" },
    ],
    description: "As an Assistant Lecturer and Full-Stack Developer, I bridge the gap between academic theory and industry practice. My academic journey began at the University of Jaffna and continues with my Master's at the University of Colombo School of Computing. I am deeply passionate about modern web technologies—especially React, Node.js, and Firebase—and I actively focus on building scalable, user-centric applications. Teaching enhances my problem-solving approach; by breaking down complex concepts for my students, I continually refine my own understanding and maintain a rigorous, continuous-learning mindset."
  },
  experience: [
    {
      id: 1,
      role: "Assistant Lecturer in Information Technology",
      company: "ESOFT Metro Campus",
      period: "January 2025 – Present",
      description: "Delivering lectures and guiding students through comprehensive IT curriculums.",
      responsibilities: [
        "Conducting lectures on programming and software engineering concepts.",
        "Guiding students through software development projects.",
        "Supporting students with coding, UI/UX design, testing, and technical documentation.",
        "Preparing comprehensive learning materials and assessments.",
        "Mentoring students through technical competitions and hackathons."
      ]
    }
  ],
  expertise: {
    frontend: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Web Design"],
    backend: ["Node.js", "REST APIs"],
    programming: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    databases: ["MongoDB", "MySQL", "Firebase Authentication", "Firestore", "Firebase Hosting"],
    tools: ["Git", "GitHub", "VS Code", "Android Studio", "Vite", "Next.js"],
    teaching: ["Leadership", "Communication", "Team Management", "Problem Solving", "Critical Thinking", "Time Management", "Project Coordination", "Student Mentoring"]
  },
  teaching: [
    {
      id: 1,
      title: "Programming & Full-Stack Tutorials",
      description: "Delivering hands-on laboratory sessions and theoretical lectures focused on modern web development practices."
    },
    {
      id: 2,
      title: "Student Project Mentoring",
      description: "Providing architectural and code-level guidance for student projects, ensuring adherence to industry standards in design and testing."
    },
    {
      id: 3,
      title: "Hackathon Mentoring",
      description: "Mentored student teams for competitive programming events, including guiding students who achieved second place in the inter-branch Networking Hackathon."
    },
    {
      id: 4,
      title: "Resource & Assessment Development",
      description: "Creating technical documentation templates, preparing assessments, and developing targeted learning resources for IT curriculums."
    }
  ],
  projects: [
    {
      id: "dineflow",
      title: "DineFlow – Restaurant Management and Online Ordering System",
      category: ["Full Stack", "Firebase", "Frontend"],
      tech: ["React.js", "Firebase Authentication", "Cloud Firestore", "Vite", "JavaScript", "Tailwind CSS"],
      description: "A comprehensive restaurant management platform featuring both a customer-facing ordering system and an administrative dashboard.",
      features: [
        "User authentication and profile management",
        "Interactive menu browsing and cart system",
        "Real-time order placement and tracking",
        "Admin panel for managing foods, categories, orders, and inquiries",
        "Sales monitoring and user management"
      ],
      contribution: "Architected the full-stack solution using React and Firebase, implemented the entire UI/UX, and established the secure Firestore database schema.",
      challenges: "Managing real-time state for order tracking and cart synchronization across different user sessions.",
      image: "/projects/dineflow.jpg", // Placeholder
      github: "https://github.com/radeeshanuka123/DineFlow",
      demo: ""
    },
    {
      id: "employee-management",
      title: "Employee Management System",
      category: ["Full Stack", "Backend"],
      tech: ["React.js", "Node.js", "MongoDB", "REST API"],
      description: "Full-stack CRUD platform with robust API communication and responsive administrative interfaces.",
      features: [
        "Complete employee lifecycle management",
        "REST API endpoints for data manipulation",
        "Responsive data tables and forms"
      ],
      contribution: "Developed the Node.js/Express backend, integrated MongoDB, and built the React frontend to consume the REST API.",
      challenges: "Ensuring secure data validation and efficient database queries for large employee datasets.",
      image: "/projects/employee.jpg", // Placeholder
      github: "https://github.com/radeeshanuka123/Employee-Management-System",
      demo: ""
    },
    {
      id: "event-pro",
      title: "Event Pro Website",
      category: ["Frontend"],
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      description: "Modern event-management web application focusing on reusable components and highly responsive layouts.",
      features: [
        "Dynamic event listings",
        "Responsive layout system",
        "Component-driven architecture"
      ],
      contribution: "Designed and implemented the frontend architecture using TypeScript for type safety and Tailwind CSS for rapid UI development.",
      challenges: "Creating a completely responsive layout that works seamlessly across all mobile and desktop viewports.",
      image: "/projects/event.jpg", // Placeholder
      github: "https://github.com/radeeshanuka123/Event-Pro",
      demo: ""
    },
    {
      id: "pos-system",
      title: "Point of Sale System",
      category: ["Frontend"],
      tech: ["React.js", "JavaScript", "CSS"],
      description: "POS application designed for retail environments with product management, transaction calculations, and stock-checking capabilities.",
      features: [
        "Real-time transaction calculation",
        "Product inventory tracking",
        "Intuitive checkout interface"
      ],
      contribution: "Built the core POS interface and integrated complex state management to handle multiple items and calculations efficiently.",
      challenges: "Optimizing the application for fast performance during checkout processes.",
      image: "/projects/pos.jpg", // Placeholder
      github: "https://github.com/radeeshanuka123/POS-System",
      demo: ""
    }
  ],
  education: [
    {
      id: 1,
      degree: "Master of Information Technology (MIT)",
      institution: "University of Colombo School of Computing",
      period: "2026 – Present",
      description: "Currently advancing technical and analytical skills through postgraduate studies."
    },
    {
      id: 2,
      degree: "Bachelor of Science",
      institution: "University of Jaffna",
      period: "2021 – 2025",
      description: "Completed undergraduate degree with a focus on core scientific and computing principles."
    }
  ],
  certifications: [
    {
      id: 1,
      title: "UX Design Certification",
      icon: "pen-tool"
    },
    {
      id: 2,
      title: "Cybersecurity Certification",
      icon: "shield"
    },
    {
      id: 3,
      title: "Digital Marketing Certification",
      icon: "trending-up"
    }
  ]
};
