import type { Film, ProcessStep, Service, SocialLink, Stat } from "@/components/home/types";

export const serviceCards: Service[] = [
  {
    title: "Produccion cinematografica",
    description:
      "Desarrollamos proyectos de ficcion con narrativa solida y una estetica cinematografica consistente.",
    icon: "clapper",
  },
  {
    title: "Eventos",
    description:
      "Capturamos la esencia de tu evento con una realizacion audiovisual precisa y de alto impacto.",
    icon: "play",
  },
  {
    title: "Publicidad y marca",
    description:
      "Creamos contenido que conecta emocionalmente y fortalece la identidad visual y narrativa de tu marca.",
    icon: "megaphone",
  },
  {
    title: "Postproduccion",
    description:
      "Editamos y damos forma final a cada pieza con detalle tecnico, ritmo y criterio cinematografico.",
    icon: "film",
  },
];

export const reasons: string[] = [
  "Vision cinematografica enfocada en cada proyecto.",
  "Equipo multidisciplinar con experiencia integral.",
  "Excelencia tecnica en detalle, ritmo y narrativa.",
  "Proyeccion internacional para marcas y festivales.",
];

export const stats: Stat[] = [
  { value: "03+", label: "Proyectos originales", icon: "clapper" },
  { value: "02", label: "Paises de operacion", icon: "globe" },
  { value: "100%", label: "Compromiso con cada historia", icon: "badge" },
  { value: "oo", label: "Pasion por el cine", icon: "spark" },
];

export const films: Film[] = [
  {
    title: "Piso Piloto",
    meta: "2025 - Cortometraje de ficcion",
    gradient: "from-[#2b2118] via-[#5c4632] to-[#1a1510]",
  },
  {
    title: "Albatros",
    meta: "2025 - Cortometraje de ficcion",
    gradient: "from-[#202733] via-[#3e4f5f] to-[#1a2028]",
  },
  {
    title: "Proyectos comerciales",
    meta: "2022-2026 - Mexico y Espana",
    gradient: "from-[#423121] via-[#7a5c41] to-[#2a2018]",
  },
];

export const processSteps: ProcessStep[] = [
  { label: "Idea y concepto", icon: "idea" },
  { label: "Desarrollo y planificacion", icon: "script" },
  { label: "Produccion y rodaje", icon: "camera" },
  { label: "Postproduccion y edicion", icon: "edit" },
  { label: "Entrega y difusion", icon: "publish" },
];

export const navLinks = [
  { href: "#inicio", label: "Home" },
  { href: "#filmografia", label: "Filmografia" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export const serviceLinks = [
  "Produccion cinematografica",
  "Eventos",
  "Publicidad y marca",
  "Postproduccion",
];

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "#" },
  { name: "Vimeo", href: "#" },
  { name: "LinkedIn", href: "#" },
];
