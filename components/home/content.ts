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
    src: "/images/CLAQUETA 1.png",
    eyebrow: "Cine. Emoción. Impacto.",
    title: "Creamos historias que perduran.",
    description:
      "Productora audiovisual y cinematográfica fundada en Madrid, con una mirada narrativa para cine, eventos y marcas.",
  },
  {
    src: "/images/madrid 1.png",
    eyebrow: "Madrid. Historias para el mundo.",
    title: "Contenido con identidad propia y proyección profesional.",
    description:
      "Integramos creatividad, estrategia visual y sensibilidad narrativa para proyectos con recorrido real.",
  },
  {
    src: "/images/2S2A7980(1).webp",
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
    image: "/images/portfolio/cine/cine.png",
    videoSrc: "/videos/cine.mp4",
    description:
      "Piezas de ficción y proyectos audiovisuales con dirección narrativa, puesta en escena y una mirada cinematográfica reconocible.",
    detail:
      "Una línea pensada para historias con peso narrativo: piezas de ficción, escenas con atmósfera y proyectos donde la dirección visual sostiene el pulso emocional del relato.",
    client: "Jomade Films",
    location: "Madrid",
    festivalHighlights: [
      {
        title: "Selección oficial de festivales",
        items: [
          "FFICAB - Festival Ficción Cortos de Albacete - Sección Nacional - 25-may al 29-may",
          "Frame Film Festival - Festival itinerante - Vila-Rodona - 5-jun al 6-jun",
          "Festival Internacional de Cine de Huesca - 05-jun al 13-jun - Concurso de Cortometraje - Documental",
        ],
      },
    ],
    cast: ["Lucía Díez", "Nicolás Illoro", "Janick"],
    deliverables: ["Dirección", "Producción", "Postproducción"],
    gallery: [
      {
        type: "video",
        label: "Pieza principal",
        src: "/videos/cine.mp4",
        poster: "/images/portfolio/cine/cine.png",
      },
      {
        type: "image",
        label: "Escena 01",
        src: "/images/portfolio/cine/piso-piloto-01.webp",
        poster: "/images/portfolio/cine/piso-piloto-01.webp",
      },
      {
        type: "image",
        label: "Escena 02",
        src: "/images/portfolio/cine/piso-piloto-02.webp",
        poster: "/images/portfolio/cine/piso-piloto-02.webp",
      },
      {
        type: "image",
        label: "Escena 03",
        src: "/images/portfolio/cine/piso-piloto-03.webp",
        poster: "/images/portfolio/cine/piso-piloto-03.webp",
      },
      {
        type: "image",
        label: "Escena 04",
        src: "/images/portfolio/cine/piso-piloto-04.webp",
        poster: "/images/portfolio/cine/piso-piloto-04.webp",
      },
      {
        type: "image",
        label: "Escena 05",
        src: "/images/portfolio/cine/piso-piloto-09.webp",
        poster: "/images/portfolio/cine/piso-piloto-09.webp",
      },
      {
        type: "image",
        label: "Escena 06",
        src: "/images/portfolio/cine/piso-piloto-11.webp",
        poster: "/images/portfolio/cine/piso-piloto-11.webp",
      },
    ],
    tags: ["Ficción", "Dirección", "Cine"],
  },
  {
    slug: "bodas",
    title: "Bodas",
    category: "Cobertura y narrativa de bodas",
    year: "2025",
    status: "Bodas en Francia",
    image: "/images/portfolio/bodas/bodas-01.jpg",
    videoSrc: "",
    description:
      "Dos historias de boda filmadas en Francia durante 2025: una celebración en París y otra en Morlaix, narradas con una mirada emocional, elegante y documental.",
    detail:
      "Coberturas internacionales en París y Morlaix pensadas como relatos íntimos: emoción, sensibilidad narrativa y un lenguaje visual cuidado para convertir cada celebración en un recuerdo con alma.",
    client: "Parejas y celebraciones",
    location: "París y Morlaix, Francia",
    deliverables: ["Cobertura", "Edición", "Entrega digital"],
    gallery: [
      ...["01.jpg", "02.webp", "03.jpg", "04.jpg", "05.jpg", "06.jpg"].map(
        (file, index) => ({
          type: "image",
          label: `París ${String(index + 1).padStart(2, "0")}`,
          src: `/images/portfolio/bodas/bodas-${file}`,
          poster: `/images/portfolio/bodas/bodas-${file}`,
        }),
      ),
      ...[
        "10.jpg",
        "11.jpg",
        "13.jpg",
        "14.jpg",
        "16.jpg",
        "18.jpg",
        "19.jpg",
        "20.JPG",
        "21.jpg",
      ].map((file, index) => ({
        type: "image",
        label: `Morlaix ${String(index + 1).padStart(2, "0")}`,
        src: `/images/portfolio/bodas/bodas-${file}`,
        poster: `/images/portfolio/bodas/bodas-${file}`,
      })),
    ],
    tags: ["Bodas", "Emoción", "Narrativa"],
  },
  {
    slug: "musica",
    title: "Música",
    category: "Videoclips y piezas musicales",
    year: "2022-2026",
    status: "Ritmo y escena",
    image: "/images/portfolio/musica.png",
    videoSrc: "/videos/Musica_WP_V2.mov",
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
        src: "/videos/Musica_WP_V2.mov",
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
    image: "/images/portfolio/eventos/eventos-18.jpeg",
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
        poster: "/images/portfolio/eventos/eventos-18.jpeg",
      },
      {
        type: "image",
        label: "Evento 02",
        src: "/images/portfolio/eventos/eventos-02.jpg",
        poster: "/images/portfolio/eventos/eventos-02.jpg",
      },
      {
        type: "image",
        label: "Evento 03",
        src: "/images/portfolio/eventos/eventos-03.jpg",
        poster: "/images/portfolio/eventos/eventos-03.jpg",
      },
      {
        type: "image",
        label: "Evento 04",
        src: "/images/portfolio/eventos/eventos-04.jpg",
        poster: "/images/portfolio/eventos/eventos-04.jpg",
      },
      {
        type: "image",
        label: "Evento 05",
        src: "/images/portfolio/eventos/eventos-05.jpg",
        poster: "/images/portfolio/eventos/eventos-05.jpg",
      },
      {
        type: "image",
        label: "Evento 06",
        src: "/images/portfolio/eventos/eventos-06.jpg",
        poster: "/images/portfolio/eventos/eventos-06.jpg",
      },
      {
        type: "image",
        label: "Evento 07",
        src: "/images/portfolio/eventos/eventos-07.jpg",
        poster: "/images/portfolio/eventos/eventos-07.jpg",
      },
      {
        type: "image",
        label: "Evento 08",
        src: "/images/portfolio/eventos/eventos-08.jpg",
        poster: "/images/portfolio/eventos/eventos-08.jpg",
      },
      {
        type: "image",
        label: "Evento 09",
        src: "/images/portfolio/eventos/eventos-09.jpg",
        poster: "/images/portfolio/eventos/eventos-09.jpg",
      },
      {
        type: "image",
        label: "Evento 10",
        src: "/images/portfolio/eventos/eventos-10.jpg",
        poster: "/images/portfolio/eventos/eventos-10.jpg",
      },
      {
        type: "image",
        label: "Evento 11",
        src: "/images/portfolio/eventos/eventos-11.jpg",
        poster: "/images/portfolio/eventos/eventos-11.jpg",
      },
      {
        type: "image",
        label: "Evento 12",
        src: "/images/portfolio/eventos/eventos-12.jpg",
        poster: "/images/portfolio/eventos/eventos-12.jpg",
      },
      {
        type: "image",
        label: "Evento 13",
        src: "/images/portfolio/eventos/eventos-13.jpg",
        poster: "/images/portfolio/eventos/eventos-13.jpg",
      },
      {
        type: "image",
        label: "Evento 14",
        src: "/images/portfolio/eventos/eventos-14.jpg",
        poster: "/images/portfolio/eventos/eventos-14.jpg",
      },
      {
        type: "image",
        label: "Evento 15",
        src: "/images/portfolio/eventos/eventos-15.jpg",
        poster: "/images/portfolio/eventos/eventos-15.jpg",
      },
      {
        type: "image",
        label: "Evento 16",
        src: "/images/portfolio/eventos/eventos-16.jpg",
        poster: "/images/portfolio/eventos/eventos-16.jpg",
      },
      {
        type: "image",
        label: "Evento 17",
        src: "/images/portfolio/eventos/eventos-17.jpg",
        poster: "/images/portfolio/eventos/eventos-17.jpg",
      },
      {
        type: "image",
        label: "Evento 18",
        src: "/images/portfolio/eventos/eventos-18.jpeg",
        poster: "/images/portfolio/eventos/eventos-18.jpeg",
      },
      {
        type: "image",
        label: "Evento 19",
        src: "/images/portfolio/eventos/eventos-19.jpeg",
        poster: "/images/portfolio/eventos/eventos-19.jpeg",
      },
      {
        type: "image",
        label: "Evento 20",
        src: "/images/portfolio/eventos/eventos-20.jpeg",
        poster: "/images/portfolio/eventos/eventos-20.jpeg",
      },
      {
        type: "image",
        label: "Evento 21",
        src: "/images/portfolio/eventos/eventos-21.jpeg",
        poster: "/images/portfolio/eventos/eventos-21.jpeg",
      },
      {
        type: "image",
        label: "Evento 22",
        src: "/images/portfolio/eventos/eventos-22.jpeg",
        poster: "/images/portfolio/eventos/eventos-22.jpeg",
      },
      {
        type: "image",
        label: "Evento 23",
        src: "/images/portfolio/eventos/eventos-23.jpeg",
        poster: "/images/portfolio/eventos/eventos-23.jpeg",
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
    videoSrc: "/videos/Corporativo_WP_V2.mov",
    description:
      "Vídeos corporativos y comerciales orientados a comunicar valor, reforzar la marca y presentar proyectos con acabado profesional.",
    detail:
      "Piezas corporativas enfocadas en explicar, presentar y reforzar confianza. El lenguaje visual combina claridad comercial con acabado cinematográfico para marcas, empresas y proyectos institucionales.",
    client: "Empresas y marcas",
    location: "España",
    deliverables: ["Vídeo corporativo", "Marca", "Postproducción"],
    gallery: [
      {
        type: "video",
        label: "Pieza principal",
        src: "/videos/Corporativo_WP_V2.mov",
        poster: "/images/portfolio/corporativo.png",
      },
    ],
    tags: ["Marca", "Empresa", "Comercial"],
  },
];

export const stats: Stat[] = [
  { value: "2025", label: "Fundación en Madrid", icon: "badge" },
  { value: "04", label: "Líneas audiovisuales", icon: "clapper" },
  { value: "Global", label: "Vocación internacional", icon: "globe" },
  { value: "100%", label: "Compromiso creativo", icon: "spark" },
];

export const films: Film[] = portfolioProjects
  .filter((project) => project.slug !== "bodas")
  .map((project, index) => ({
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
  { name: "Instagram", href: "https://www.instagram.com/jomade.films/" },
];
