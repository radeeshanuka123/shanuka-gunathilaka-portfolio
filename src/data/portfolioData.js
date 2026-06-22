export const portfolioData = {
  personal: {
    firstName: "Shanuka",
    lastName: "Gunathilaka",
    fullName: "Shanuka Gunathilaka",
    initials: "SG",
    title: "Assistant Lecturer & Full-Stack Developer",
    location: "Sri Lanka",
    email: "shanukagunathilaka00@gmail.com",
    heroIntro: "Building practical software solutions and helping future developers master modern technology.",
    heroDescription: "I develop responsive, database-driven web applications using React, Next.js, Node.js, Firebase and modern software-engineering practices while delivering technical education and mentoring students through real-world computing projects.",
    github: "https://github.com/radeeshanuka123",
    linkedin: "https://linkedin.com/in/shanuka-radeeshan", // TODO: Update with real URL
  },
  about: {
    cards: [
      { id: 1, title: "Current Role", description: "Assistant Lecturer", icon: "briefcase" },
      { id: 2, title: "Location", description: "Sri Lanka", icon: "map-pin" },
      { id: 3, title: "Development", description: "React, Node.js, Firebase", icon: "code" },
      { id: 4, title: "Education", description: "Mentoring & Technical Guidance", icon: "users" },
    ],
    description: "As an Assistant Lecturer and Full-Stack Developer, I bridge the gap between academic theory and industry practice. My academic journey began at the University of Jaffna and continues with my Master's at the University of Colombo School of Computing. I am deeply passionate about modern web technologies—especially React, Node.js, and Firebase—and I actively focus on building scalable, user-centric applications. Teaching enhances my problem-solving approach; by breaking down complex concepts for my students, I continually refine my own understanding and maintain a rigorous, continuous-learning mindset."
  },
  experience: [
    {
      id: 1,
      role: "Assistant Lecturer",
      company: "ESOFT Metro Campus",
      period: "January 2025 – Present",
      location: "Sri Lanka",
      responsibilities: [
        "Deliver lectures, tutorials and practical sessions in programming, web development, database systems and software engineering.",
        "Guide students through project planning, system design, implementation, testing and technical documentation.",
        "Prepare learning materials, practical exercises and assessment-support resources.",
        "Mentor students in developing technical, analytical and problem-solving skills.",
        "Support students during technical presentations, demonstrations and project evaluations."
      ],
      tech: ["Software Engineering", "Web Development", "Database Systems"]
    }
  ],
  expertise: [
    {
      id: "frontend",
      category: "Frontend Development",
      skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive Design"]
    },
    {
      id: "backend",
      category: "Backend and APIs",
      skills: ["Node.js", "Express.js", "PHP", "REST APIs", "Authentication", "Validation"]
    },
    {
      id: "databases",
      category: "Databases and Cloud",
      skills: ["Firebase", "Firestore", "MongoDB", "MySQL", "Firebase Authentication", "Firebase Hosting"]
    },
    {
      id: "engineering",
      category: "Software Engineering",
      skills: ["Object-Oriented Programming", "SDLC", "Requirements Analysis", "System Design", "Testing", "Technical Documentation", "Git and GitHub"]
    },
    {
      id: "teaching",
      category: "Teaching and Mentoring",
      skills: ["Programming Tutorials", "Web Development", "Database Design", "Project Mentoring", "Practical Sessions", "Assessment Guidance"]
    }
  ],
  teaching: {
    introduction: "I support computing students in connecting theoretical concepts with practical system development through lectures, tutorials, project mentoring and technical guidance.",
    cards: [
      { id: 1, title: "Programming Fundamentals", icon: "terminal" },
      { id: 2, title: "Full-Stack Web Development", icon: "layout" },
      { id: 3, title: "Database Design", icon: "database" },
      { id: 4, title: "Software Engineering", icon: "cpu" },
      { id: 5, title: "System Analysis and Design", icon: "git-merge" },
      { id: 6, title: "UI/UX Principles", icon: "pen-tool" },
      { id: 7, title: "Technical Documentation", icon: "file-text" },
      { id: 8, title: "Project and Viva Preparation", icon: "presentation" },
    ]
  },
  projects: [
    {
      id: "dineflow",
      title: "DineFlow",
      subtitle: "Restaurant Management and Online Ordering System",
      category: "Full Stack",
      tech: ["React", "Firebase", "Firestore", "Firebase Authentication", "Firebase Hosting"],
      description: "A comprehensive restaurant management platform featuring both a customer-facing ordering system and an administrative dashboard.",
      features: [
        "Customer authentication and Google sign-in",
        "Food and category management",
        "Shopping cart and checkout",
        "Order management",
        "User management and administrator dashboard",
        "Protected routes and responsive interfaces"
      ],
      role: "Architected the full-stack solution using React and Firebase, implemented the entire UI/UX, and established the secure Firestore database schema.",
      challenges: "Managing real-time state for order tracking and cart synchronization across different user sessions.",
      results: "Delivered a complete, scalable solution ready for restaurant deployment.",
      image: "/projects/dineflow.jpg",
      github: "https://github.com/radeeshanuka123/DineFlow",
      demo: "https://restaurant-01-ee661.web.app/",
      status: "Completed"
    },
    {
      id: "employee-management",
      title: "Employee Management System",
      subtitle: "Full-stack CRUD platform",
      category: "Backend",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
      description: "A robust employee management application with full CRUD operations, form validation, and advanced search and filtering capabilities.",
      features: [
        "Employee CRUD operations",
        "Form validation",
        "Search and filtering",
        "Backend API integration",
        "Database integration with MongoDB",
        "Responsive interface"
      ],
      role: "Developed the Node.js/Express backend, integrated MongoDB, and built the React frontend to consume the REST API.",
      challenges: "Ensuring secure data validation and efficient database queries.",
      results: "A secure, efficient system for managing employee records.",
      image: "/projects/ems.png",
      github: "https://github.com/radeeshanuka123/Employee-Management-System",
      demo: "",
      status: "Completed"
    },
    {
      id: "event-pro",
      title: "Event Pro",
      subtitle: "Modern event-management application",
      category: "Frontend",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      description: "A highly responsive event-management web application focusing on reusable components and clean UI.",
      features: [
        "Dynamic event listings",
        "Responsive layout system",
        "Component-driven architecture"
      ],
      role: "Designed and implemented the frontend architecture.",
      challenges: "Creating a completely responsive layout that works seamlessly across all viewports.",
      results: "A visually appealing and fast frontend interface.",
      image: "/projects/eventpro.jpg",
      github: "https://github.com/radeeshanuka123/Event-Pro",
      demo: "",
      status: "Completed"
    },
    {
      id: "pos-system",
      title: "Point of Sale System",
      subtitle: "Retail checkout application",
      category: "Frontend",
      tech: ["React", "JavaScript", "CSS"],
      description: "POS application designed for retail environments with product management and transaction calculations.",
      features: [
        "Real-time transaction calculation",
        "Product inventory tracking",
        "Intuitive checkout interface"
      ],
      role: "Built the core POS interface and integrated complex state management.",
      challenges: "Optimizing the application for fast performance during checkout.",
      results: "A reliable point of sale frontend.",
      image: "/projects/pos.png",
      github: "https://github.com/radeeshanuka123/Point-Of-Sale-System",
      demo: "",
      status: "Completed"
    }
  ],
  education: [
    {
      id: 1,
      degree: "Master of Information Technology (MIT)",
      institution: "University of Colombo School of Computing",
      period: "2026 – Present",
      status: "In Progress",
      description: "Advancing technical and analytical skills through postgraduate studies."
    },
    {
      id: 2,
      degree: "Bachelor of Science",
      institution: "University of Jaffna",
      period: "2021 – 2025",
      status: "Completed",
      description: "Completed undergraduate degree with a focus on core scientific and computing principles."
    }
  ],
  certifications: [
    {
      id: 1,
      title: "UX Design Certification",
      organization: "Issuing Organization", // Needs real org if applicable
      year: "2023",
      icon: "pen-tool"
    },
    {
      id: 2,
      title: "Cybersecurity Certification",
      organization: "Issuing Organization",
      year: "2024",
      icon: "shield"
    },
    {
      id: 3,
      title: "Digital Marketing Certification",
      organization: "Issuing Organization",
      year: "2023",
      icon: "trending-up"
    }
  ]
};
