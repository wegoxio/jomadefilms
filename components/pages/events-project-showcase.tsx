"use client";

import { useState } from "react";

import { PortfolioDetailGallery } from "@/components/pages/portfolio-detail-gallery";

type GalleryAsset = {
  type: string;
  label: string;
  src: string;
  poster?: string;
};

type Collection = {
  id: "eventos" | "bodas" | "bautizo";
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  year: string;
  status: string;
  client: string;
  location: string;
  deliverables: string[];
  assets: GalleryAsset[];
};

type EventsProjectShowcaseProps = {
  eventAssets: GalleryAsset[];
  weddingAssets: GalleryAsset[];
  baptismAssets: GalleryAsset[];
};

export function EventsProjectShowcase({
  eventAssets,
  weddingAssets,
  baptismAssets,
}: EventsProjectShowcaseProps) {
  const collections: Collection[] = [
    {
      id: "eventos",
      index: "01",
      title: "Performance escénica",
      eyebrow: "Evento cultural",
      description:
        "Una cobertura de carácter escénico construida desde la atmósfera, el movimiento y la fuerza visual de sus protagonistas. Una mirada documental que preserva la identidad singular del evento.",
      year: "2022-2026",
      status: "Momentos reales",
      client: "Producción escénica",
      location: "España",
      deliverables: ["Cobertura", "Resumen", "Entrega digital"],
      assets: eventAssets,
    },
    {
      id: "bodas",
      index: "02",
      title: "Bodas",
      eyebrow: "Narrativa de bodas",
      description:
        "Dos bodas celebradas en Francia en 2025: París y Morlaix. Dos historias distintas retratadas con emoción, sensibilidad documental y una mirada cinematográfica que acompaña cada celebración sin invadirla.",
      year: "2025",
      status: "Cobertura internacional",
      client: "Dos parejas, dos historias",
      location: "París y Morlaix, Francia",
      deliverables: ["Cobertura", "Edición", "Entrega digital"],
      assets: weddingAssets,
    },
    {
      id: "bautizo",
      index: "03",
      title: "Bautizo",
      eyebrow: "Celebración familiar",
      description:
        "Una celebración íntima retratada en Zamora con una mirada natural y luminosa. Fotografías que reúnen los gestos, los vínculos y los pequeños detalles de un día pensado para conservarse en familia.",
      year: "—",
      status: "Memoria familiar",
      client: "Celebración privada",
      location: "Zamora, España",
      deliverables: ["Fotografía", "Cobertura", "Entrega digital"],
      assets: baptismAssets,
    },
  ];
  const [activeId, setActiveId] = useState<Collection["id"]>("eventos");
  const activeCollection =
    collections.find((collection) => collection.id === activeId) ??
    collections[0];

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 border-y border-[#d7bb7b]/14">
          <div className="grid md:grid-cols-3">
            {collections.map((collection) => {
              const isActive = collection.id === activeCollection.id;

              return (
                <button
                  key={collection.id}
                  type="button"
                  onClick={() => setActiveId(collection.id)}
                  aria-pressed={isActive}
                  className={`group relative flex min-h-36 items-end justify-between gap-6 px-5 py-6 text-left transition-colors duration-500 sm:px-8 ${
                    collection.id !== "eventos"
                      ? "md:border-l md:border-[#d7bb7b]/14"
                      : ""
                  } ${isActive ? "bg-[#d7bb7b]/8" : "hover:bg-white/[0.025]"}`}
                >
                  <span>
                    <span
                      className={`block text-[10px] uppercase tracking-[0.28em] transition-colors ${
                        isActive ? "text-[#d7bb7b]" : "text-[#ded4c2]/42"
                      }`}
                    >
                      Colección {collection.index}
                    </span>
                    <span
                      className={`mt-3 block text-3xl transition-colors sm:text-4xl ${
                        isActive ? "text-[#f5efe1]" : "text-[#ded4c2]/52"
                      }`}
                    >
                      {collection.title}
                    </span>
                  </span>
                  <span
                    className={`mb-1 h-3 w-3 shrink-0 rounded-full border transition-all duration-500 ${
                      isActive
                        ? "border-[#d7bb7b] bg-[#d7bb7b] shadow-[0_0_0_6px_rgba(215,187,123,0.1)]"
                        : "border-[#d7bb7b]/30 group-hover:border-[#d7bb7b]"
                    }`}
                  />
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#d7bb7b] transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={activeCollection.id}
          className="grid gap-10 animate-gallery-in lg:grid-cols-[1.12fr_0.88fr]"
        >
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <PortfolioDetailGallery
              key={activeCollection.id}
              assets={activeCollection.assets}
              title={activeCollection.title}
            />
          </div>

          <aside className="relative overflow-hidden border border-[#d7bb7b]/14 bg-[#201f1d] p-6 sm:p-8">
            <span className="pointer-events-none absolute -right-4 -top-10 text-[150px] leading-none text-[#d7bb7b]/[0.035]">
              {activeCollection.index}
            </span>
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7bb7b]">
                {activeCollection.eyebrow}
              </p>
              <h2 className="mt-5 text-5xl leading-none text-[#f5efe1] sm:text-6xl">
                {activeCollection.title}
              </h2>
              <p className="mt-7 text-base leading-8 text-[#ded4c2]/78">
                {activeCollection.description}
              </p>

              <div className="mt-8 grid gap-5 border-y border-[#d7bb7b]/12 py-7 sm:grid-cols-2">
                <CollectionFact label="Año" value={activeCollection.year} />
                <CollectionFact label="Estado" value={activeCollection.status} />
                <CollectionFact label="Cliente" value={activeCollection.client} />
                <CollectionFact label="Ubicación" value={activeCollection.location} />
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                  Servicios
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeCollection.deliverables.map((item) => (
                    <span
                      key={item}
                      className="border border-[#d7bb7b]/18 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d7bb7b]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CollectionFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#ded4c2]/45">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#f5efe1]">{value}</p>
    </div>
  );
}
