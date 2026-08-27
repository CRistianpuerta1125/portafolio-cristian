export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  alt: string;
  award?: string;
}

export const projects: Project[] = [
  {
    id: "nebula",
    index: "01",
    title: "Nébula",
    category: "Visualización de datos · WebGL",
    year: "2025",
    role: "Desarrollo creativo & dirección de arte",
    description:
      "Plataforma inmersiva para el Festival Pulso: convierte el audio en vivo —bpm, frecuencia y energía de la pista— en una nebulosa de partículas 3D que respira con el concierto. Cada asistente ve su propia constelación del festival.",
    highlights: [
      "1.2M de partículas animadas a 60fps con shaders propios",
      "Site of the Day en Awwwards y FWA of the Day",
      "+38% de conversión en venta de abonos 2025",
    ],
    tags: ["Three.js", "GLSL", "React", "Web Audio API"],
    image:
      "https://image.qwenlm.ai/generated-images/4db5fff3-f963-4edf-9188-5fd54c5811da/_result.png",
    alt: "Interfaz oscura de Nébula con una nebulosa de partículas en turquesa y ámbar",
    award: "Awwwards · SOTD",
  },
  {
    id: "cardal",
    index: "02",
    title: "Cardal",
    category: "E-commerce · Dirección de arte",
    year: "2024",
    role: "Diseño de interacción & front-end",
    description:
      "Tienda en línea para un estudio de cerámica artesanal. Cada pieza se fotografía como escultura: luz ámbar sobre fondo petróleo, transiciones lentas y un checkout que se siente como hojear un catálogo de autor.",
    highlights: [
      "Lighthouse 99/100 con fotografía de gran formato",
      "Transición de producto a detalle sin recarga (View Transitions)",
      "Ticket promedio +22% en los primeros 3 meses",
    ],
    tags: ["Next.js", "Shopify Hydrogen", "GSAP", "Sanity"],
    image:
      "https://image.qwenlm.ai/generated-images/8fc1ac1a-350c-4bd0-8b50-f5dfb354993f/_result.png",
    alt: "Sitio minimalista de Cardal con vasijas de cerámica sobre fondo oscuro",
    award: "CSSDA · Best UI",
  },
  {
    id: "vertice",
    index: "03",
    title: "Vértice",
    category: "Editorial digital · Arquitectura",
    year: "2024",
    role: "Desarrollo front-end & motion",
    description:
      "Revista digital para un estudio de arquitectura: retícula brutalista, tipografía descomunal y fotografía de concreto que se despliega con scroll narrativo. Leer un artículo se siente como recorrer un edificio.",
    highlights: [
      "Scroll narrativo con 14 secciones sincronizadas",
      "Tipografía variable que responde al avance de lectura",
      "Medalla de plata en ÑH · Lo Mejor del Diseño Editorial",
    ],
    tags: ["Astro", "GSAP ScrollTrigger", "Cloudinary", "MDX"],
    image:
      "https://image.qwenlm.ai/generated-images/d8ba10bd-2835-4205-9f8e-83f4daa9a110/_result.png",
    alt: "Portada editorial de Vértice con tipografía brutalista y fotografía de concreto",
    award: "ÑH · Plata",
  },
  {
    id: "ritmo",
    index: "04",
    title: "Ritmo",
    category: "Identidad generativa · Música",
    year: "2023",
    role: "Arte generativo & desarrollo",
    description:
      "Sistema de identidad para un sello discográfico independiente: cada lanzamiento genera su propia portada a partir de la forma de onda del máster. Un motor, infinitas carátulas —del vinilo al streaming.",
    highlights: [
      "Motor generativo que exportó 400+ portadas únicas",
      "Audio-reactivo en tiempo real para visuales de gira",
      "Seleccionado en el anuario Typographics 2024",
    ],
    tags: ["p5.js", "Canvas", "Node.js", "FFmpeg"],
    image:
      "https://image.qwenlm.ai/generated-images/1d69a7e7-7ed8-4804-8f01-4b4ef45a9d87/_result.png",
    alt: "Formas de onda en ámbar y coral sobre fondo petróleo para el sello Ritmo",
    award: "Typographics · Anuario",
  },
];

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "desarrollo",
    number: "01",
    title: "Desarrollo creativo",
    description:
      "Sitios a medida donde el código es parte del diseño: WebGL, shaders, canvas y arquitecturas front-end que aguantan el tráfico de un lanzamiento sin perder un frame.",
    tags: ["React", "Three.js", "GLSL", "Astro", "TypeScript"],
  },
  {
    id: "interaccion",
    number: "02",
    title: "Diseño de interacción",
    description:
      "Coreografío cada gesto: micro-interacciones, transiciones de página y scroll narrativo que guían la lectura. Nada se mueve por decorado — todo comunica estado.",
    tags: ["GSAP", "Framer Motion", "Prototipado", "Design systems"],
  },
  {
    id: "direccion",
    number: "03",
    title: "Dirección de arte digital",
    description:
      "Del moodboard al último píxel: sistemas visuales para pantalla con tipografía con carácter, paletas con temperatura y fotografía que no parece de stock.",
    tags: ["Identidad", "Tipografía", "Figma", "Fotografía"],
  },
  {
    id: "motion",
    number: "04",
    title: "Motion & 3D",
    description:
      "Piezas en movimiento para lanzamientos: loops para redes, visuales audio-reactivos para shows y escenas 3D en tiempo real que corren en el navegador.",
    tags: ["Blender", "After Effects", "Web Audio", "Lottie"],
  },
  {
    id: "consultoria",
    number: "05",
    title: "Auditoría & consultoría",
    description:
      "Reviso tu producto con lupa técnica y visual: performance, accesibilidad, Core Web Vitals y ese detalle de motion que separa lo correcto de lo memorable.",
    tags: ["Performance", "Accesibilidad", "Core Web Vitals", "Code review"],
  },
];

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  place: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    period: "2023 — Hoy",
    role: "Desarrolladora creativa independiente",
    company: "Estudio Ríos Digital",
    place: "CDMX · Remoto",
    description:
      "Proyectos selectos para marcas culturales, festivales y estudios de diseño en LATAM y Europa. De la dirección de arte al deploy.",
  },
  {
    period: "2021 — 2023",
    role: "Senior Creative Developer",
    company: "Agencia Mono",
    place: "Ciudad de México",
    description:
      "Lideré el equipo interactivo: 12 lanzamientos, 4 sitios premiados y la migración completa del estudio a un pipeline WebGL reutilizable.",
  },
  {
    period: "2019 — 2021",
    role: "Front-end Developer",
    company: "Andén (fintech)",
    place: "Guadalajara",
    description:
      "Construí el design system y la web app de inversiones. Aprendí que la buena ingeniería también es una forma de diseño.",
  },
  {
    period: "2017 — 2019",
    role: "Diseñadora interactiva",
    company: "Estudio Praxis",
    place: "Monterrey",
    description:
      "Primera chispa: banners que parecían cortos animados, instalaciones con sensores y muchas noches de After Effects.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Valeria no entrega páginas: entrega experiencias que la gente graba con el teléfono. Nébula nos dio la campaña más compartida en la historia del festival.",
    name: "Mariana Solís",
    role: "Directora de marca · Festival Pulso",
  },
  {
    quote:
      "Entendió la cerámica mejor que nosotros. La tienda se siente tan hecha a mano como nuestras piezas — y vende el doble.",
    name: "Íñigo Ferreyra",
    role: "Fundador · Estudio Cardal",
  },
  {
    quote:
      "Pocos perfiles dominan tipografía, código y narrativa al mismo tiempo. El scroll de Vértice es lo más cercano a caminar un edificio.",
    name: "Camila Duarte",
    role: "Editora en jefe · Vértice",
  },
];

export const marqueeItems = [
  "Desarrollo creativo",
  "WebGL & shaders",
  "Dirección de arte",
  "Motion design",
  "React · TypeScript",
  "Identidad generativa",
  "Diseño de interacción",
  "Scroll narrativo",
];

export const toolbox = [
  "TypeScript",
  "React",
  "Three.js",
  "GLSL",
  "GSAP",
  "Astro",
  "Next.js",
  "Node.js",
  "Figma",
  "Blender",
  "p5.js",
  "Sanity",
];

export const counters = [
  { value: 7, suffix: "", label: "años de oficio" },
  { value: 52, suffix: "+", label: "proyectos lanzados" },
  { value: 31, suffix: "", label: "clientes en 6 países" },
  { value: 9, suffix: "", label: "premios y menciones" },
];

export const navLinks = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Trayectoria", href: "#trayectoria" },
];

export const socials = [
  {
    label: "GitHub",
    handle: "@valeriarios",
    href: "https://github.com",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    handle: "in/valeriarios",
    href: "https://linkedin.com",
    icon: "linkedin" as const,
  },
  {
    label: "Instagram",
    handle: "@rios.digital",
    href: "https://instagram.com",
    icon: "instagram" as const,
  },
  {
    label: "X / Twitter",
    handle: "@rios_dev",
    href: "https://x.com",
    icon: "x" as const,
  },
];

export const portraitImage =
  "https://image.qwenlm.ai/generated-images/15537d91-6b44-493d-9366-ea9188d5c3a9/_result.png";

export const email = "hola@valeriarios.dev";
