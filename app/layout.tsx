import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://jomadefilms.com"),
  title: {
    default: "Jomade Films | Productora audiovisual en Madrid",
    template: "%s | Jomade Films",
  },
  description:
    "Jomade Films es una productora audiovisual en Madrid especializada en cine, eventos, bodas, marcas y postproducción.",
  keywords: [
    "productora audiovisual Madrid",
    "productora cinematográfica",
    "vídeos para eventos",
    "vídeos de bodas",
    "vídeos corporativos",
    "postproducción audiovisual",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Jomade Films",
    title: "Jomade Films | Productora audiovisual en Madrid",
    description:
      "Cine, eventos, bodas, marcas y postproducción audiovisual con identidad propia.",
    images: [{ url: "/images/CLAQUETA 1.png", width: 1200, height: 630, alt: "Jomade Films" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jomade Films | Productora audiovisual en Madrid",
    description:
      "Cine, eventos, bodas, marcas y postproducción audiovisual con identidad propia.",
    images: ["/images/CLAQUETA 1.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jomade Films",
              description:
                "Productora audiovisual y cinematográfica en Madrid especializada en cine, eventos, bodas, marcas y postproducción.",
              email: "jomadefilms@hotmail.com",
              telephone: ["+34 695 951 166", "+34 601 472 419"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Madrid",
                addressCountry: "ES",
              },
              sameAs: ["https://www.instagram.com/jomade.films/"],
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jomadefilms.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
