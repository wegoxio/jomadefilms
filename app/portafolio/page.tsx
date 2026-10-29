import { PortfolioPage } from "@/components/pages/portfolio-page";

export const metadata = {
  title: "Portafolio audiovisual",
  description:
    "Descubre el portafolio de Jomade Films: cine, eventos, bodas, música y proyectos corporativos.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioRoute() {
  return <PortfolioPage />;
}
