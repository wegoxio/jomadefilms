import type {
  Film,
  ProcessStep,
  Service,
  SocialLink,
  Stat,
} from "@/components/home/types";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/filosofia", label: "Filosofía" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export const heroSlides = [
  {
    src: "/images/hero-production.png",
    eyebrow: "Cine. Emoción. Impacto.",
    title: "Creamos historias que perduran.",
    description:
      "Productora audiovisual y cinematográfica fundada en Madrid, con una mirada narrativa para cine, eventos y marca.",
  },
  {
    src: "/images/hero-location.png",
    eyebrow: "Madrid. México. Mundo.",
    title: "Contenido con identidad propia y proyección profesional.",
    description:
      "Integramos creatividad, estrategia visual y sensibilidad narrativa para proyectos con recorrido real.",
  },
  {
    src: "/images/hero-postproduction.png",
    eyebrow: "Idea. Rodaje. Entrega.",
    title: "Del concepto al corte final.",
    description:
      "Acompañamos el proceso completo con excelencia técnica, ritmo y una estética cinematográfica cuidada.",
  },
];

export const serviceCards: Service[] = [
  {
    title: "Producción cinematográfica",
    description:
      "Desarrollo y producción de piezas de ficción con identidad visual, estructura narrativa y criterio de industria.",
    icon: "clapper",
  },
  {
    title: "Eventos",
    description:
      "Cobertura y piezas audiovisuales para eventos, concebidas con ritmo, atmósfera y lenguaje cinematográfico.",
    icon: "play",
  },
  {
    title: "Publicidad y marca",
    description:
      "Contenido para marcas que conecta comunicación audiovisual, dirección creativa e impacto emocional.",
    icon: "megaphone",
  },
  {
    title: "Postproducción",
    description:
      "Edición, color, montaje y acabado final para convertir el material en una pieza precisa y memorable.",
    icon: "film",
  },
];

export const serviceLinks = serviceCards.map((service) => service.title);

export const philosophyPillars = [
  {
    title: "Creatividad con dirección",
    description:
      "Cada proyecto parte de una idea clara y se desarrolla con una mirada visual consistente.",
  },
  {
    title: "Impacto emocional",
    description:
      "El objetivo no es solo producir imágenes, sino construir piezas que conecten con la audiencia.",
  },
  {
    title: "Excelencia técnica",
    description:
      "Producción, dirección, postproducción y marketing trabajan como un sistema integral.",
  },
  {
    title: "Proyección profesional",
    description:
      "Aspiramos a piezas con recorrido en festivales, mercados y circuitos audiovisuales.",
  },
];

export const portfolioProjects = [
  {
    slug: "cine",
    title: "Cine",
    category: "Producción cinematográfica",
    year: "2025",
    status: "Narrativa visual",
    image: "/images/portfolio/cine.png",
    videoSrc: "/videos/cine.mp4",
    description:
      "Piezas de ficción y proyectos audiovisuales con dirección narrativa, puesta en escena y una mirada cinematográfica reconocible.",
    detail:
      "Una línea pensada para historias con peso narrativo: piezas de ficción, escenas con atmósfera y proyectos donde la dirección visual sostiene el pulso emocional del relato.",
    client: "Jomade Films",
    location: "Madrid",
    deliverables: ["Dirección", "Producción", "Postproducción"],
    gallery: [
      {
        type: "video",
        label: "Pieza principal",
        src: "/videos/cine.mp4",
        poster: "/images/portfolio/cine.png",
      },
    ],
    tags: ["Ficción", "Dirección", "Cine"],
  },
  {
    slug: "musica",
    title: "Música",
    category: "Videoclips y piezas musicales",
    year: "2022-2026",
    status: "Ritmo y escena",
    image: "/images/portfolio/musica.png",
    videoSrc: "/videos/musica.mp4",
    description:
      "Producción de contenido musical con energía visual, lectura del artista y montaje pensado para reforzar la identidad de cada pieza.",
    detail:
      "Contenido musical construido desde el ritmo, la presencia del artista y la fuerza de la puesta en escena. La edición acompaña la energía del tema y la identidad visual de la pieza.",
    client: "Artistas y proyectos musicales",
    location: "Madrid",
    deliverables: ["Videoclip", "Rodaje", "Edición"],
    gallery: [
      {
        type: "video",
        label: "Pieza principal",
        src: "/videos/musica.mp4",
        poster: "/images/portfolio/musica.png",
      },
    ],
    tags: ["Videoclip", "Artista", "Montaje"],
  },
  {
    slug: "eventos",
    title: "Eventos",
    category: "Cobertura audiovisual",
    year: "2022-2026",
    status: "Momentos reales",
    image: "/images/portfolio/eventos.png",
    videoSrc: "/videos/eventos.mp4",
    description:
      "Registro de eventos con sensibilidad documental, ritmo de edición y capacidad para convertir momentos clave en piezas memorables.",
    detail:
      "Coberturas diseñadas para capturar lo irrepetible sin perder criterio estético: momentos, reacciones, espacios y ritmo narrativo para que el evento tenga una pieza audiovisual con recorrido.",
    client: "Eventos privados y profesionales",
    location: "España",
    deliverables: ["Cobertura", "Resumen", "Entrega digital"],
    gallery: [
      {
        type: "video",
        label: "Pieza principal",
        src: "/videos/eventos.mp4",
        poster: "/images/portfolio/eventos.png",
      },
    ],
    tags: ["Eventos", "Documental", "Entrega"],
  },
  {
    slug: "corporativo",
    title: "Corporativo",
    category: "Contenido para marca",
    year: "2022-2026",
    status: "Comunicación visual",
    image: "/images/portfolio/corporativo.png",
    videoSrc: "/videos/corporativo.mp4",
    description:
      "Videos corporativos y comerciales orientados a comunicar valor, reforzar marca y presentar proyectos con acabado profesional.",
    detail:
      "Piezas corporativas enfocadas en explicar, presentar y reforzar confianza. El lenguaje visual combina claridad comercial con acabado cinematográfico para marcas, empresas y proyectos institucionales.",
    client: "Empresas y marcas",
    location: "España",
    deliverables: ["Video corporativo", "Marca", "Postproducción"],
    gallery: [
      {
        type: "video",
        label: "Pieza principal",
        src: "/videos/corporativo.mp4",
        poster: "/images/portfolio/corporativo.png",
      },
    ],
    tags: ["Marca", "Empresa", "Comercial"],
  },
];

export const stats: Stat[] = [
  { value: "2025", label: "Fundación en Madrid", icon: "badge" },
  { value: "04", label: "Líneas audiovisuales", icon: "clapper" },
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
  { label: "Desarrollo y planificación", icon: "script" },
  { label: "Producción y rodaje", icon: "camera" },
  { label: "Postproducción y edición", icon: "edit" },
  { label: "Entrega y difusión", icon: "publish" },
];

export const reasons = philosophyPillars.map((pillar) => pillar.title);

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
];
