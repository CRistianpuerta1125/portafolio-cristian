import portraitImg from "./ayo.jpeg";

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

export const experience: ExperienceItem[] = [
  {
    period: "Abr 2025 — Actualidad",
    role: "Desarrollador Full Stack",
    company: "Instituto Distrital de Recreación y Deporte — IDRD",
    place: "Bogotá, Colombia",
    current: true,
    highlights: [
      "Desarrollo web front-end y back-end de punta a punta.",
      "Diseño e implementación de bases de datos.",
      "Creación de documentación técnica y funcional.",
      "Acompañamiento a proyectos tecnológicos y soporte a usuarios.",
      "Participación en las distintas fases del ciclo de vida del software.",
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
      "Desarrollo y mantenimiento de módulos front-end.",
      "Foco permanente en la optimización de la experiencia de usuario.",
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

/* ── Formación ──────────────────────────────────────────── */
export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  place: string;
  note: string;
}

export const education: EducationItem[] = [
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

/* ── Servicios ──────────────────────────────────────────── */
export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "fullstack",
    number: "01",
    title: "Desarrollo web Full Stack",
    description:
      "Construcción de aplicaciones de punta a punta: interfaces dinámicas con React, Vue o Angular y back-ends robustos con Symfony, Java, TypeScript o Python.",
    tags: ["React.js", "Vue.js", "Angular.js", "Symfony", "Java", "TypeScript"],
  },
  {
    id: "datos",
    number: "02",
    title: "Bases de datos",
    description:
      "Diseño e implementación de bases de datos MySQL y PL/SQL con foco en integridad, normalización y optimización de consultas para aplicaciones exigentes.",
    tags: ["MySQL", "PL/SQL", "SQL", "Modelado de datos"],
  },
  {
    id: "apis",
    number: "03",
    title: "APIs e integraciones",
    description:
      "Desarrollo de APIs —como la API en Python de Stark Lower— e integración con el front-end para una comunicación de datos fluida y confiable.",
    tags: ["Python", "REST", "Redux", "Integraciones"],
  },
  {
    id: "deploy",
    number: "04",
    title: "Despliegue & servidores",
    description:
      "Soluciones desplegadas y administradas en servidores Linux, orientadas a maximizar rendimiento, estabilidad y disponibilidad en producción.",
    tags: ["Linux", "Deploy", "Rendimiento"],
  },
  {
    id: "docs",
    number: "05",
    title: "Documentación & soporte",
    description:
      "Documentación técnica y funcional, acompañamiento a usuarios y participación activa en todas las fases del ciclo de vida del software.",
    tags: ["SDLC", "Documentación", "Soporte a usuarios"],
  },
];

/* ── Stack ──────────────────────────────────────────────── */
export interface SkillGroup {
  id: string;
  category: string;
  note: string;
  icon: "code" | "layers" | "tools";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
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
    skills: ["Symfony", "React.js", "Angular.js", "Vue.js", "Redux", "Java"],
  },
  {
    id: "herramientas",
    category: "Herramientas & datos",
    note: "El día a día",
    icon: "tools",
    skills: ["MySQL", "Linux", "Power BI", "Excel", "Word"],
  },
];

export const toolbox = [
  "SQL",
  "PL/SQL",
  "Python",
  "PHP",
  "TypeScript",
  "JavaScript",
  "Symfony",
  "React.js",
  "Angular.js",
  "Vue.js",
  "Redux",
  "Java",
  "MySQL",
  "Linux",
  "Power BI",
];

/* ── Cifras ─────────────────────────────────────────────── */
export const counters = [
  { value: 3, suffix: "+", label: "años de experiencia" },
  { value: 6, suffix: "", label: "empresas & equipos" },
  { value: 12, suffix: "+", label: "tecnologías en el stack" },
  { value: 2, suffix: "", label: "programas de formación" },
];

/* ── Marquee ────────────────────────────────────────────── */
export const marqueeItems = [
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
  "Power BI",
];

/* ── Navegación ─────────────────────────────────────────── */
export const navLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Stack", href: "#stack" },
  { label: "Sobre mí", href: "#sobre" },
];

/* ── Contacto / redes ───────────────────────────────────── */
export const socials = [
  {
    label: "LinkedIn",
    handle: linkedinHandle,
    href: linkedinUrl,
    icon: "linkedin" as const,
    external: true,
  },
  {
    label: "Correo",
    handle: email,
    href: `mailto:${email}`,
    icon: "mail" as const,
    external: false,
  },
  {
    label: "Teléfono",
    handle: phone,
    href: phoneHref,
    icon: "phone" as const,
    external: false,
  },
  {
    label: "WhatsApp",
    handle: "Escríbeme directo",
    href: whatsappHref,
    icon: "whatsapp" as const,
    external: true,
  },
];

export const portraitImage = portraitImg;
