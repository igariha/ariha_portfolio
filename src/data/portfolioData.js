export const portfolioData = {
  personal: {
    name: "Ariha Jain",
    role: "B.Tech Mechanical Engineering Student",
    institution: "JECRC University",
    tagline: "Curious to Learn. Driven to Innovate.",
    bio: "First-year Mechanical Engineering undergraduate at JECRC University passionate about bridging physical hardware with embedded logic. Enthusiastic about robotics, IoT, automation, automotive systems, and aircraft engineering.",
    aboutDetailed: [
      "I am a first-year Mechanical Engineering student at JECRC University with a drive to understand how complex mechanisms work from the ground up and how modern electronics can breathe autonomy into them.",
      "My core interests span IoT devices, automobiles, aircraft, mechanical CAD design, and C programming. I am constantly fascinated by robotics, industrial automation, and emerging engineering technologies.",
      "Beyond the engineering workbench, I enjoy engaging in outdoor sports, listening to music, and participating in intellectual conversations that spark new ideas and perspectives.",
      "I believe true engineering growth comes through boundless curiosity, open collaboration, and an unwavering commitment to continuous learning."
    ],
    resumeAvailable: false, // Set to true once resume.pdf is placed in public/
    resumeUrl: "/resume.pdf"
  },

  education: [
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "JECRC University",
      period: "2026 – 2030 (Expected)",
      highlight: "First-Year Undergraduate",
      description: "Building foundational competencies in engineering mechanics, thermodynamics, material science, and mechanical design while exploring robotics and microcontroller systems."
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Narayana e-Techno School, Indore",
      period: "2026",
      highlight: "83%",
      description: "Focused on Physics, Chemistry, and Mathematics (PCM), strengthening analytical thinking and problem-solving fundamentals."
    },
    {
      degree: "Secondary School (Class X)",
      institution: "Banasthali Vidyapith, Rajasthan",
      period: "2024",
      highlight: "87%",
      description: "Gained strong academic grounding with an early curiosity for science, mathematics, and technological innovation."
    }
  ],

  skills: {
    technical: [
      {
        category: "Programming",
        items: ["C Language", "Algorithmic Logic", "Embedded C Basics"]
      },
      {
        category: "Hardware & Electronics",
        items: ["Arduino Prototyping", "Basic Electronics", "Sensors & Actuators", "Circuit Breadboarding"]
      },
      {
        category: "Design & CAD Tools",
        items: ["AutoCAD (Drafting)", "Blender (3D Modeling)"]
      }
    ],
    interests: [
      "Internet of Things (IoT)",
      "Robotics & Mechatronics",
      "Automation Systems",
      "Automotive Engineering",
      "Aerodynamics & Aircraft",
      "Emerging Tech & AI"
    ],
    coreStrengths: [
      "Analytical Problem-Solving",
      "Rapid Adaptability",
      "Eagerness & Willingness to Learn",
      "Team Collaboration",
      "Design Thinking"
    ]
  },

  projects: [
    {
      id: "oled-virtual-pet",
      title: "Arduino OLED Virtual Pet",
      tagline: "Interactive micro-companion powered by microcontroller logic",
      description: "An interactive digital pet simulation rendered on a monochrome OLED display using an Arduino microcontroller. Features real-time state updates, expressive animations, and tactile button inputs.",
      technologies: ["Arduino", "C/C++", "I2C OLED Display", "Push Buttons", "State Machine Logic"],
      status: "In Progress / Prototyping",
      statusType: "in-progress", // 'in-progress' | 'prototype' | 'concept' | 'complete'
      links: {
        github: "https://github.com/igariha",
        demo: null
      }
    },
    {
      id: "bionic-butterfly",
      title: "Bionic Butterfly",
      tagline: "Biomimetic flight mechanism & lightweight structural modeling",
      description: "An exploration into bio-inspired mechanics simulating the lightweight wing flapping dynamics of a butterfly. Centers on linkage kinematics, weight distribution, and actuator control.",
      technologies: ["Biomimicry", "Mechanical Linkages", "CAD Modeling", "Lightweight Materials", "Micro Actuators"],
      status: "Concept & Kinematic Modeling",
      statusType: "concept",
      links: {
        github: "https://github.com/igariha",
        demo: null
      }
    },
    {
      id: "tamagotchi-pet",
      title: "Tamagotchi Pet",
      tagline: "Dedicated embedded virtual pet system with sensory feedback",
      description: "A compact embedded handheld device inspired by classic virtual pets. Implements custom pixel sprites, interactive feeding/happiness metrics, and low-power microcontroller operation.",
      technologies: ["Microcontrollers", "Embedded C", "Display Drivers", "Power Management", "Interactive UI"],
      status: "Prototyping & Design",
      statusType: "prototype",
      links: {
        github: "https://github.com/igariha",
        demo: null
      }
    }
  ],

  achievements: [
    {
      type: "Hackathon",
      title: "Smart India Hackathon (SIH)",
      role: "Participant",
      description: "Collaborated in an intensive hackathon environment tackling real-world problem statements, applying structured ideation, teamwork, and rapid hardware-software prototyping."
    },
    {
      type: "Workshop",
      title: "Arduino & Embedded Prototyping",
      role: "Hands-on Participant",
      description: "Explored interfacing sensors, motor drivers, and serial communication to control physical systems via microcontroller code."
    },
    {
      type: "Workshop",
      title: "Agentic AI & Google Developer Technologies",
      role: "Participant",
      description: "Gained insight into modern developer toolchains, AI agent architecture, automated workflows, and Google ecosystem developer technologies."
    },
    {
      type: "Workshop",
      title: "Vibe Coding & Modern Development",
      role: "Participant",
      description: "Hands-on immersion in accelerated coding practices, modern developer utilities, and AI-augmented programming workflows."
    },
    {
      type: "Workshop",
      title: "Product Development & Go-To-Market (GTM) Strategy",
      role: "Participant",
      description: "Learned end-to-end methodologies for transitioning from engineering prototypes to viable user-centric products and commercialization models."
    },
    {
      type: "Workshop",
      title: "Entrepreneurship Development",
      role: "Participant",
      description: "Studied startup fundamentals, innovation frameworks, resource management, and technology venture creation."
    }
  ],

  socials: {
    email: "arihajain101@gmail.com",
    github: "https://github.com/igariha",
    linkedin: "https://www.linkedin.com/in/ariha-jain-695a75338",
    instagram: "https://www.instagram.com/ig_ariha/"
  }
};
