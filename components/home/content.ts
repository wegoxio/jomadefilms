import type {
  Film,
  ProcessStep,
  Service,
  SocialLink,
  Stat,
} from "@/components/home/types";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/filosofia", label: "Filosofia" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export const heroSlides = [
  {
    src: "/images/hero-production.png",
    eyebrow: "Cine. Emocion. Impacto.",
    title: "Creamos historias que perduran.",
    description:
      "Productora audiovisual y cinematografica fundada en Madrid, con una mirada narrativa para cine, eventos y marca.",
  },
  {
    src: "/images/hero-location.png",
    eyebrow: "Madrid. Mexico. Mundo.",
    title: "Contenido con identidad propia y proyeccion profesional.",
    description:
      "Integramos creatividad, estrategia visual y sensibilidad narrativa para proyectos con recorrido real.",
  },
  {
    src: "/images/hero-postproduction.png",
    eyebrow: "Idea. Rodaje. Entrega.",
    title: "Del concepto al corte final.",
    description:
      "Acompanamos el proceso completo con excelencia tecnica, ritmo y una estetica cinematografica cuidada.",
  },
];

export const serviceCards: Service[] = [
  {
    title: "Produccion cinematografica",
    description:
      "Desarrollo y produccion de piezas de ficcion con identidad visual, estructura narrativa y criterio de industria.",
    icon: "clapper",
  },
  {
    title: "Eventos",
    description:
      "Cobertura y piezas audiovisuales para eventos, concebidas con ritmo, atmosfera y lenguaje cinematografico.",
    icon: "play",
  },
  {
    title: "Publicidad y marca",
    description:
      "Contenido para marcas que conecta comunicacion audiovisual, direccion creativa e impacto emocional.",
    icon: "megaphone",
  },
  {
    title: "Postproduccion",
    description:
      "Edicion, color, montaje y acabado final para convertir el material en una pieza precisa y memorable.",
    icon: "film",
  },
];

export const serviceLinks = serviceCards.map((service) => service.title);

export const philosophyPillars = [
  {
    title: "Creatividad con direccion",
    description:
      "Cada proyecto parte de una idea clara y se desarrolla con una mirada visual consistente.",
  },
  {
    title: "Impacto emocional",
    description:
      "El objetivo no es solo producir imagenes, sino construir piezas que conecten con la audiencia.",
  },
  {
    title: "Excelencia tecnica",
    description:
      "Produccion, direccion, postproduccion y marketing trabajan como un sistema integral.",
  },
  {
    title: "Proyeccion profesional",
    description:
      "Aspiramos a piezas con recorrido en festivales, mercados y circuitos audiovisuales.",
  },
];

export const portfolioProjects = [
  {
    title: "Piso Piloto",
    category: "Cortometraje de ficcion",
    year: "2025",
    status: "En comercializacion",
    image: "/images/hero-production.png",
    description:
      "Primer proyecto de Jomade Films S.L. y punto de partida de su trayectoria como productora cinematografica.",
    tags: ["Ficcion", "Madrid", "Cine"],
  },
  {
    title: "Albatros",
    category: "Cortometraje de ficcion",
    year: "2025",
    status: "En proceso de calificacion",
    image: "/images/hero-location.png",
    description:
      "Proyecto de ficcion en desarrollo de carrera profesional, alineado con la busqueda de identidad propia de la productora.",
    tags: ["Ficcion", "Festival", "Narrativa"],
  },
  {
    title: "Proyectos comerciales",
    category: "Contenido corporativo y marca",
    year: "2022-2026",
    status: "Mexico y España",
    image: "/images/hero-postproduction.png",
    description:
      "Piezas audiovisuales para comunicacion de marca, eventos y contenido comercial con enfoque cinematografico.",
    tags: ["Marca", "Eventos", "Comercial"],
  },
];

export const stats: Stat[] = [
  { value: "2025", label: "Fundacion en Madrid", icon: "badge" },
  { value: "03", label: "Lineas de produccion", icon: "clapper" },
  { value: "02", label: "Mercados activos", icon: "globe" },
  { value: "100%", label: "Compromiso creativo", icon: "spark" },
];

export const films: Film[] = portfolioProjects.map((project, index) => ({
  title: project.title,
  meta: `${project.year} - ${project.category}`,
  gradient:
    index === 0
      ? "from-[#2b2118] via-[#5c4632] to-[#1a1510]"
      : index === 1
        ? "from-[#202733] via-[#3e4f5f] to-[#1a2028]"
        : "from-[#423121] via-[#7a5c41] to-[#2a2018]",
}));

export const processSteps: ProcessStep[] = [
  { label: "Idea y concepto", icon: "idea" },
  { label: "Desarrollo y planificacion", icon: "script" },
  { label: "Produccion y rodaje", icon: "camera" },
  { label: "Postproduccion y edicion", icon: "edit" },
  { label: "Entrega y difusion", icon: "publish" },
];

export const reasons = philosophyPillars.map((pillar) => pillar.title);

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
];
