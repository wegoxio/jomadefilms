import { ContactPage } from "@/components/pages/contact-page";

export const metadata = {
  title: "Contacto",
  description:
    "Contacta con Jomade Films para producir tu próximo proyecto audiovisual desde Madrid.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoRoute() {
  return <ContactPage />;
}
