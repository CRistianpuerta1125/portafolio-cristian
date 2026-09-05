import portraitImg from "./ayo.jpeg";
import { Language } from "./LanguageContext";

/* ── Perfil ─────────────────────────────────────────────── */
export const fullName = "Cristian Damián Calderón Puerta";
export const email = "crisdam1840@gmail.com";
export const phone = "+57 314 381 3679";
export const phoneHref = "tel:+573143813679";
export const whatsappHref = "https://wa.me/573143813679";
export const linkedinUrl = "https://www.linkedin.com/in/damian-calderon-6135b6357";
export const linkedinHandle = "damian-calderon";

/* ── Experiencia ────────────────────────────────────────── */
export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  place: string;
  current?: boolean;
  highlights: string[];
}

const experienceES: ExperienceItem[] = [
  {
    period: "Abr 2025 — Ago 2025",
    role: "Desarrollador Full Stack",
    company: "Instituto Distrital de Recreación y Deporte — IDRD",
    place: "Bogotá, Colombia",
    highlights: [
      "Desarrollo web front-end y back-end de punta a punta con Nest.js, PostgreSQL y Docker.",
      "Diseño e implementación de bases de datos relacionales.",
      "Integración, pruebas y documentación técnica y funcional utilizando Swagger.",
      "Gestión de proyectos, control de versiones y despliegue continuo con Azure DevOps bajo metodologías ágiles (Scrum).",
      "Acompañamiento a proyectos tecnológicos y soporte a usuarios.",
    ],
  },
  {
    period: "2025",
    role: "Desarrollador Full Stack",
    company: "TESTLAB S.A.S.",
    place: "Bogotá, Colombia",
    highlights: [
      "Desarrollo web front-end y back-end.",
      "Diseño e implementación de bases de datos.",
      "Creación de documentación técnica y funcional.",
      "Soporte a proyectos tecnológicos y a usuarios finales.",
      "Participación en todas las fases del ciclo de desarrollo.",
    ],
  },
  {
    period: "Abr 2022 — Mar 2025",
    role: "Desarrollador Front End",
    company: "Instituto Distrital de las Artes — Idartes",
    place: "Bogotá, Colombia",
    highlights: [
      "Desarrollo y mantenimiento de módulos front-end utilizando Three.js para gráficos 3D interactivos.",
      "Gestión de versiones mediante Bitbucket colaborando bajo metodología Scrum.",
      "Foco permanente en la optimización de la experiencia de usuario y rendimiento web.",
    ],
  },
  {
    period: "Nov 2024 — Mar 2025",
    role: "Desarrollador Front End",
    company: "Neural Tech",
    place: "Bogotá, Colombia",
    highlights: [
      "Diseño de interfaces UX intuitivas y sistemas front-end responsivos.",
      "Integración de APIs back-end para una comunicación fluida de datos.",
      "Optimización del rendimiento y resolución proactiva de incidencias técnicas.",
    ],
  },
  {
    period: "Mar 2024 — Nov 2024",
    role: "Desarrollador Full Stack",
    company: "Serviware SAS",
    place: "Tunja, Colombia",
    highlights: [
      "Aplicaciones escalables con Vue.js y Angular.js (front), Symfony, Java y TypeScript (back).",
      "Administración de bases de datos PL/SQL y MySQL: integridad y optimización.",
      "Despliegue de soluciones en servidores Linux para maximizar el rendimiento.",
    ],
  },
  {
    period: "Feb 2023 — Ene 2024",
    role: "Desarrollador Web Full Stack",
    company: "Stark Lower SAS",
    place: "Bogotá, Colombia",
    highlights: [
      "Desarrollo de una API en Python para la lógica del back-end.",
      "Interfaces dinámicas con React.js y manejo de estado con Redux.",
      "Rendimiento óptimo e interacciones de usuario intuitivas.",
    ],
  },
];

const experienceEN: ExperienceItem[] = [
  {
    period: "Apr 2025 — Aug 2025",
    role: "Full Stack Developer",
    company: "District Institute of Recreation and Sport — IDRD",
    place: "Bogotá, Colombia",
    highlights: [
      "End-to-end front-end and back-end web development with Nest.js, PostgreSQL, and Docker.",
      "Relational database design and implementation.",
      "API integration, testing, and technical/functional documentation using Swagger.",
      "Project management, version control, and continuous deployment with Azure DevOps using Scrum.",
      "Technical project advisory and end-user support.",
    ],
  },
  {
    period: "2025",
    role: "Full Stack Developer",
    company: "TESTLAB S.A.S.",
    place: "Bogotá, Colombia",
    highlights: [
      "Front-end and back-end web development.",
      "Database design and implementation.",
      "Technical and functional documentation creation.",
      "Support for tech projects and end-users.",
      "Involvement across all software lifecycle phases.",
    ],
  },
  {
    period: "Apr 2022 — Mar 2025",
    role: "Front End Developer",
    company: "District Institute of the Arts — Idartes",
    place: "Bogotá, Colombia",
    highlights: [
      "Development and maintenance of front-end modules using Three.js for interactive 3D graphics.",
      "Version management using Bitbucket collaborating under Scrum methodology.",
      "Continuous focus on user experience optimization and web performance.",
    ],
  },
  {
    period: "Nov 2024 — Mar 2025",
    role: "Front End Developer",
    company: "Neural Tech",
    place: "Bogotá, Colombia",
    highlights: [
      "Intuitive UX interface design and responsive front-end systems.",
      "Back-end API integration for seamless data communication.",
      "Performance optimization and proactive technical issue resolution.",
    ],
  },
  {
    period: "Mar 2024 — Nov 2024",
    role: "Full Stack Developer",
    company: "Serviware SAS",
    place: "Tunja, Colombia",
    highlights: [
      "Scalable applications with Vue.js & Angular.js (front), Symfony, Java & TypeScript (back).",
      "PL/SQL and MySQL database management: integrity and query optimization.",
      "Deployment of solutions on Linux servers to maximize performance.",
    ],
  },
  {
    period: "Feb 2023 — Jan 2024",
    role: "Full Stack Web Developer",
    company: "Stark Lower SAS",
    place: "Bogotá, Colombia",
    highlights: [
      "Python API development for back-end business logic.",
      "Dynamic interfaces with React.js and state management with Redux.",
      "Optimal performance and intuitive user interactions.",
    ],
  },
];

export function getExperience(lang: Language): ExperienceItem[] {
  return lang === "en" ? experienceEN : experienceES;
}

/* ── Formación ──────────────────────────────────────────── */
export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  place: string;
  note: string;
}

const educationES: EducationItem[] = [
  {
    period: "2023 — En curso (7° Semestre)",
    title: "Ingeniería de Software",
    institution: "Corporación Universitaria Tecnológica del Oriente",
    place: "Colombia",
    note: "Formación profesional enfocada en el ciclo completo de vida del software, patrones de diseño, arquitectura y metodologías ágiles.",
  },
  {
    period: "Graduado · Dic 2020",
    title: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
    institution: "SENA",
    place: "Ibagué, Colombia",
    note: "Base técnica en análisis, diseño y desarrollo de sistemas de información: bases de datos, programación y ciclo de vida del software.",
  },
];

const educationEN: EducationItem[] = [
  {
    period: "2023 — Present (7th Semester)",
    title: "Software Engineering",
    institution: "Corporación Universitaria Tecnológica del Oriente",
    place: "Colombia",
    note: "Professional education focused on full software lifecycle, design patterns, architecture, and agile methodologies.",
  },
  {
    period: "Graduated · Dec 2020",
    title: "Technologist in Information Systems Analysis and Development",
    institution: "SENA",
    place: "Ibagué, Colombia",
    note: "Technical background in analysis, design, and development of information systems: databases, programming, and SDLC.",
  },
];

export function getEducation(lang: Language): EducationItem[] {
  return lang === "en" ? educationEN : educationES;
}

/* ── Servicios ──────────────────────────────────────────── */
export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const servicesES: Service[] = [
  {
    id: "fullstack",
    number: "01",
    title: "Desarrollo web Full Stack",
    description:
      "Construcción de aplicaciones de punta a punta: interfaces dinámicas con React, Vue, Angular o Three.js y back-ends robustos con Nest.js, Symfony, Java, TypeScript o Python.",
    tags: ["Nest.js", "React.js", "Three.js", "TypeScript", "Symfony", "Java"],
  },
  {
    id: "datos",
    number: "02",
    title: "Bases de datos",
    description:
      "Diseño e implementación de bases de datos PostgreSQL, MySQL y PL/SQL con foco en integridad, normalización y optimización de consultas para aplicaciones exigentes.",
    tags: ["PostgreSQL", "MySQL", "PL/SQL", "SQL"],
  },
  {
    id: "apis",
    number: "03",
    title: "APIs e integraciones",
    description:
      "Desarrollo y documentación de APIs utilizando Swagger, asegurando una integración ágil y comunicación fluida de datos con el front-end.",
    tags: ["Swagger", "REST", "TypeScript", "Python"],
  },
  {
    id: "deploy",
    number: "04",
    title: "Despliegue & servidores",
    description:
      "Contenedores Docker y despliegues mediante Azure DevOps en servidores locales y en la nube para garantizar estabilidad y CI/CD.",
    tags: ["Docker", "Azure DevOps", "Bitbucket", "Linux"],
  },
  {
    id: "docs",
    number: "05",
    title: "Metodologías & soporte",
    description:
      "Gestión de proyectos bajo metodología ágil Scrum, documentación técnica y funcional, acompañamiento a usuarios y soporte del ciclo de vida del software.",
    tags: ["Scrum", "SDLC", "Azure DevOps", "Bitbucket"],
  },
];

const servicesEN: Service[] = [
  {
    id: "fullstack",
    number: "01",
    title: "Full Stack Web Development",
    description:
      "End-to-end application development: dynamic UIs with React, Vue, Angular, or Three.js and robust back-ends with Nest.js, Symfony, Java, TypeScript, or Python.",
    tags: ["Nest.js", "React.js", "Three.js", "TypeScript", "Symfony", "Java"],
  },
  {
    id: "datos",
    number: "02",
    title: "Databases & Architecture",
    description:
      "Design and implementation of PostgreSQL, MySQL, and PL/SQL databases with a focus on integrity, normalization, and query optimization.",
    tags: ["PostgreSQL", "MySQL", "PL/SQL", "SQL"],
  },
  {
    id: "apis",
    number: "03",
    title: "APIs & Integrations",
    description:
      "API development and documentation using Swagger, ensuring agile integration and seamless data communication with the front-end.",
    tags: ["Swagger", "REST", "TypeScript", "Python"],
  },
  {
    id: "deploy",
    number: "04",
    title: "Deployment & Infrastructure",
    description:
      "Docker containers and deployments via Azure DevOps on cloud and local servers to guarantee stability and CI/CD.",
    tags: ["Docker", "Azure DevOps", "Bitbucket", "Linux"],
  },
  {
    id: "docs",
    number: "05",
    title: "Methodologies & Support",
    description:
      "Project management using Scrum agile methodology, technical and functional documentation, user support, and software lifecycle maintenance.",
    tags: ["Scrum", "SDLC", "Azure DevOps", "Bitbucket"],
  },
];

export function getServices(lang: Language): Service[] {
  return lang === "en" ? servicesEN : servicesES;
}

/* ── Stack ──────────────────────────────────────────────── */
export interface SkillGroup {
  id: string;
  category: string;
  note: string;
  icon: "code" | "layers" | "tools";
  skills: string[];
}

const skillGroupsES: SkillGroup[] = [
  {
    id: "lenguajes",
    category: "Lenguajes",
    note: "La base de todo",
    icon: "code",
    skills: ["SQL", "PL/SQL", "Python", "PHP", "TypeScript", "JavaScript"],
  },
  {
    id: "frameworks",
    category: "Frameworks & librerías",
    note: "Front y back",
    icon: "layers",
    skills: ["Nest.js", "Three.js", "Symfony", "React.js", "Angular.js", "Vue.js", "Redux", "Java"],
  },
  {
    id: "herramientas",
    category: "Herramientas & datos",
    note: "El día a día",
    icon: "tools",
    skills: ["PostgreSQL", "MySQL", "Docker", "Azure DevOps", "Bitbucket", "Swagger", "Scrum", "Linux"],
  },
];

const skillGroupsEN: SkillGroup[] = [
  {
    id: "lenguajes",
    category: "Languages",
    note: "The core foundation",
    icon: "code",
    skills: ["SQL", "PL/SQL", "Python", "PHP", "TypeScript", "JavaScript"],
  },
  {
    id: "frameworks",
    category: "Frameworks & Libraries",
    note: "Front and back",
    icon: "layers",
    skills: ["Nest.js", "Three.js", "Symfony", "React.js", "Angular.js", "Vue.js", "Redux", "Java"],
  },
  {
    id: "herramientas",
    category: "Tools & Infrastructure",
    note: "Daily toolkit",
    icon: "tools",
    skills: ["PostgreSQL", "MySQL", "Docker", "Azure DevOps", "Bitbucket", "Swagger", "Scrum", "Linux"],
  },
];

export function getSkillGroups(lang: Language): SkillGroup[] {
  return lang === "en" ? skillGroupsEN : skillGroupsES;
}

export const toolbox = [
  "SQL",
  "PL/SQL",
  "Python",
  "PHP",
  "TypeScript",
  "JavaScript",
  "Nest.js",
  "Three.js",
  "Symfony",
  "React.js",
  "Angular.js",
  "Vue.js",
  "Redux",
  "Java",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Azure DevOps",
  "Bitbucket",
  "Swagger",
  "Scrum",
  "Linux",
];

/* ── Cifras ─────────────────────────────────────────────── */
export function getCounters(lang: Language) {
  if (lang === "en") {
    return [
      { value: 3, suffix: "+", label: "years of experience" },
      { value: 6, suffix: "", label: "companies & teams" },
      { value: 16, suffix: "+", label: "technologies in stack" },
      { value: 2, suffix: "", label: "training programs" },
    ];
  }
  return [
    { value: 3, suffix: "+", label: "años de experiencia" },
    { value: 6, suffix: "", label: "empresas & equipos" },
    { value: 16, suffix: "+", label: "tecnologías en el stack" },
    { value: 2, suffix: "", label: "programas de formación" },
  ];
}

/* ── Marquee ────────────────────────────────────────────── */
export const marqueeItems = [
  "Nest.js",
  "Three.js",
  "PostgreSQL",
  "Docker",
  "Azure DevOps",
  "Bitbucket",
  "Swagger",
  "Scrum",
  "TypeScript",
  "JavaScript",
  "Python",
  "PHP",
  "SQL · PL/SQL",
  "React.js",
  "Vue.js",
  "Angular.js",
  "Symfony",
  "Redux",
  "MySQL",
  "Linux",
];

/* ── Proyectos ──────────────────────────────────────────── */
export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  company?: string;
  featured?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

const projectsES: ProjectItem[] = [
  {
    id: "jardin-3d",
    title: "Jardín 3D Interactivo",
    category: "Experiencia 3D & WebGL",
    company: "Proyecto Personal / 3D Engine",
    featured: true,
    image: "/projects/jardin-3d.png",
    description:
      "Simulación interactiva tridimensional en tiempo real desarrollada con Three.js, React y TypeScript, enfocada en visualización inmersiva, iluminación ambiental, física y renderizado fluido.",
    tags: ["Three.js", "React.js", "TypeScript", "WebGL", "Framer Motion", "TailwindCSS"],
    demoUrl: "https://garden3d.vercel.app/",
  },
  {
    id: "web-empresarial",
    title: "Web Empresarial — Kluane",
    category: "Full Stack & Corporativo",
    company: "Kluane / Enterprise Platform",
    featured: true,
    image: "/projects/web-empresarial.png",
    description:
      "Plataforma web corporativa de alto rendimiento con arquitectura modular, diseño responsivo de primer nivel, integración de servicios REST, interfaz intuitiva y gestión de datos.",
    tags: ["Nest.js", "React.js", "PostgreSQL", "Docker", "REST API", "TailwindCSS"],
    demoUrl: "https://kluane.vercel.app/",
  },
  {
    id: "pagina-navidad",
    title: "Página de Navidad Interactiva",
    category: "Frontend & Experiencia Web",
    company: "Edición Festiva",
    featured: false,
    image: "/projects/pagina-navidad.png",
    description:
      "Landing page temática interactiva con efectos visuales dinámicos, micro-animaciones en tiempo real, diseño UI/UX festivo y rendimiento web optimizado.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Animations", "UI/UX"],
    demoUrl: "https://navidad-mom.netlify.app/",
  },
];

const projectsEN: ProjectItem[] = [
  {
    id: "jardin-3d",
    title: "Interactive 3D Garden",
    category: "3D Experience & WebGL",
    company: "Personal Project / 3D Engine",
    featured: true,
    image: "/projects/jardin-3d.png",
    description:
      "Interactive 3D real-time simulation built with Three.js, React, and TypeScript, focused on immersive visualization, ambient lighting, physics, and smooth rendering.",
    tags: ["Three.js", "React.js", "TypeScript", "WebGL", "Framer Motion", "TailwindCSS"],
    demoUrl: "https://garden3d.vercel.app/",
  },
  {
    id: "web-empresarial",
    title: "Enterprise Web Platform — Kluane",
    category: "Full Stack & Corporate",
    company: "Kluane / Enterprise Platform",
    featured: true,
    image: "/projects/web-empresarial.png",
    description:
      "High-performance corporate web platform featuring modular architecture, premium responsive design, REST API integrations, intuitive UI, and data management.",
    tags: ["Nest.js", "React.js", "PostgreSQL", "Docker", "REST API", "TailwindCSS"],
    demoUrl: "https://kluane.vercel.app/",
  },
  {
    id: "pagina-navidad",
    title: "Interactive Christmas Web Page",
    category: "Frontend & Web Experience",
    company: "Festive Edition",
    featured: false,
    image: "/projects/pagina-navidad.png",
    description:
      "Interactive thematic landing page featuring dynamic visual effects, real-time micro-animations, festive UI/UX design, and optimized web performance.",
    tags: ["React.js", "TypeScript", "TailwindCSS", "Animations", "UI/UX"],
    demoUrl: "https://navidad-mom.netlify.app/",
  },
];

export function getProjects(lang: Language): ProjectItem[] {
  return lang === "en" ? projectsEN : projectsES;
}

/* ── Navegación ─────────────────────────────────────────── */
export function getNavLinks(lang: Language) {
  if (lang === "en") {
    return [
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#proyectos" },
      { label: "Services", href: "#servicios" },
      { label: "Stack", href: "#stack" },
      { label: "About me", href: "#sobre" },
    ];
  }
  return [
    { label: "Experiencia", href: "#experiencia" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Stack", href: "#stack" },
    { label: "Sobre mí", href: "#sobre" },
  ];
}

/* ── Contacto / redes ───────────────────────────────────── */
export function getSocials(lang: Language) {
  return [
    {
      label: "LinkedIn",
      handle: linkedinHandle,
      href: linkedinUrl,
      icon: "linkedin" as const,
      external: true,
    },
    {
      label: lang === "en" ? "Email" : "Correo",
      handle: email,
      href: `mailto:${email}`,
      icon: "mail" as const,
      external: false,
    },
    {
      label: lang === "en" ? "Phone" : "Teléfono",
      handle: phone,
      href: phoneHref,
      icon: "phone" as const,
      external: false,
    },
    {
      label: "WhatsApp",
      handle: lang === "en" ? "Message direct" : "Escríbeme directo",
      href: whatsappHref,
      icon: "whatsapp" as const,
      external: true,
    },
  ];
}

export const portraitImage = portraitImg;
