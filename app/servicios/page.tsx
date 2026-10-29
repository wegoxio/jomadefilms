import { ServicesPage } from "@/components/pages/services-page";

export const metadata = {
  title: "Servicios audiovisuales",
  description:
    "Ficción, documentales, eventos, bodas, contenido corporativo y postproducción audiovisual con acabado cinematográfico.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosRoute() {
  return <ServicesPage />;
}
