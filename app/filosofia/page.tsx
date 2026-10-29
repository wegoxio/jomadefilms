import { PhilosophyPage } from "@/components/pages/philosophy-page";

export const metadata = {
  title: "Filosofía y equipo",
  description:
    "Conoce la misión, visión y equipo de Jomade Films, productora audiovisual y cinematográfica fundada en Madrid.",
  alternates: { canonical: "/filosofia" },
};

export default function FilosofiaRoute() {
  return <PhilosophyPage />;
}
