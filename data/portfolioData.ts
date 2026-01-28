
import { Project, Experience, SkillGroup, Achievement } from '../types';

export const personalInfo = {
  name: "Yefta Febrianto Panggabean",
  image:"src/images/yeftaProfil.png",
  role: "Full Stack Developer | Software Developer",
  location: "Bandung, Indonesia",
  email: "panggabeaneta@gmail.com",
  instagram: "https://www.instagram.com/yefta_panggabean",
  whatsapp: "+62 822-7882-7021",
  tagline: "Serious about software, Curious about everything",
  summary: "A passionate Software Engineer with a strong foundation in both Frontend and Backend development. With a 3.91 GPA in Information Technology, I combine academic excellence with practical experience in frameworks like Laravel and React. I specialize in building robust web applications and solving complex architectural challenges.",
};

export const education = {
  university: "Universitas Advent Indonesia",
  major: "Information Technology",
  gpa: "3.91 / 4.00",
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Vue.js", "Tailwind", "Bootstrap", "CSS", "JavaScript", "HTML5",]
  },
  {
    category: "Backend",
    items: ["Laravel", "Node.js", "RESTful APIs", "Inertia.js"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "SQL Server"]
  },
  {
    category: "Tools & Analytics",
    items: ["Git", "GitHub", "Tableau", "Excel", "Vite"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "PT Adidata Informatika",
    period: "May 2025 - August 2025",
    description: [
      "Developed and maintained complex web applications using Laravel and React.js.",
      "Implemented seamless frontend-backend communication using Inertia.js and REST APIs.",
      "Optimized database queries and application performance for large-scale enterprise solutions.",
      "Collaborated with cross-functional teams to deliver high-quality software features."
    ]
  },
  {
    role: "Lecturer's Assistant",
    company: "Universitas Advent Indonesia",
    period: "2023 - 2024",
    description: [
      "Assisted in delivering course material for programming and database management subjects.",
      "Provided technical guidance and mentorship to over 50+ students in laboratory sessions.",
      "Graded assignments and helped organize curriculum-based workshops."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Visitor Kiosk System",
    description: "A comprehensive digital guestbook and registration system for campus security and management. Featuring real-time check-ins and an intuitive dashboard.",
    tech: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/YeftaPanggabean13/visitor-kiosk-system",
    image: "src/images/visitorKiosk.png"
  },
  {
    title: "YBFT Academy",
    description: "A modern learning space for students who want to build real digital skills — helping you develop faster without unnecessary hassle.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/YeftaPanggabean13/YBFTAcademy",
    image: "src/images/YBFTAcademy.png"
  },
  {
    title: "GarageTI Workshop",
    description: "project in the web 2 course, developing a car repair system.",
    tech: ["Laravel", "Vue.JS", "Bootstrap", "MySQL","CSS"],
    githubUrl: "https://github.com/YeftaPanggabean13/GarageTI",
    image: "src/images/garageti.png"
  }
];

export const achievements = [
  {
    title: "Cyber Cup Champion",
    issuer: "Universitas Advent Indonesia",
    year: "2023 & 2024",
    type: "Achievement",
  },
  {
    title: "Alibaba Cloud Certified Associate",
    issuer: "Alibaba Cloud",
    year: "2025",
    type: "Certification",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
    type: "Certification",
  },
];