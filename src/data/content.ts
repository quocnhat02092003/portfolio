import { Github, Linkedin, Mail } from "lucide-react";

export const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = [
  { icon: Github, href: "https://github.com/quocnhat02092003", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pham-quoc-nhat-64a10a320/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:quocnhat02092003@gmail.com", label: "Email" },
];

export const PROJECTS = [
  {
    title: "Threads Clone",
    desc: "A social microblogging app with real‑time notifications, JWT auth, and infinite scroll.",
    tech: ["React", "Redux Toolkit", ".NET", "SignalR", "Docker", "nginx", "MySQL"],
    demo: "https://thread-app-ui.onrender.com/",
    source: "https://github.com/quocnhat02092003/thread-app",
    image: "https://idm.edu.vn/wp-content/uploads/2025/01/chien-luoc-marketing-tren-threads-giup-ban-phat-trien-thuong-hieu.jpg"
  },
  {
    title: "Portfolio",
    desc: "Ultra‑clean personal site you’re looking at now—single file, responsive, fast.",
    tech: ["React", "Tailwind", "shadcn/ui", "Framer Motion"],
    demo: "#",
    source: "#",
    image : "https://topdev.vn/blog/wp-content/uploads/2025/07/8bb45bff22be9e260339d6f6b735ba93.jpg"
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "ASP.NET Core",
  "Entity Framework",
  "LINQ",
  "SignalR",
  "MongoDB",
  "MySQL",
  "Docker",
  "nginx",
  "Vite",
  "Git/GitHub",
  "CI/CD Pipelines"
];

export const EXPERIENCE = [
  {
    role: "Freelance Developer",
    company: "Self‑employed",
    time: "2024 – Present",
    location: "Remote",
    bullets: [
      "Developed responsive, clean UIs with React.",
      "Built scalable, high-performance APIs with .NET."
    ],
  },
] as const;
