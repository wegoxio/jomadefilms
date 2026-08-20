"use client";

import { useState } from "react";

import { PortfolioDetailGallery } from "@/components/pages/portfolio-detail-gallery";

type GalleryAsset = {
  type: string;
  label: string;
  src: string;
  poster?: string;
};

type CorporateProjectShowcaseProps = {
  corporateAssets: GalleryAsset[];
  embassyAssets: GalleryAsset[];
};

export function CorporateProjectShowcase({
  corporateAssets,
  embassyAssets,
}: CorporateProjectShowcaseProps) {
  const collections = [
    {
      id: "corporativo",
      index: "01",
      title: "Contenido de marca",
      eyebrow: "Comunicación audiovisual",
      description:
        "Piezas corporativas creadas para presentar proyectos, comunicar valor y reforzar la identidad de marca con claridad y acabado cinematográfico.",
      year: "2022–2026",
      status: "Comunicación visual",
      client: "Empresas y marcas",
      location: "España",
      deliverables: ["Vídeo corporativo", "Edición", "Postproducción"],
      assets: corporateAssets,
    },
    {
      id: "embajada",
      index: "02",
      title: "Proyecto País",
      eyebrow: "Sesderma · Proyecto institucional",
      description:
        "Cobertura del Proyecto País de Sesderma en la Embajada de Colombia en Madrid, con la participación del embajador de Colombia y del doctor encargado de presentar la iniciativa.",
      year: "Madrid",
      status: "Cobertura institucional",
      client: "Sesderma",
      location: "Embajada de Colombia, Madrid",
      deliverables: ["Cobertura", "Fotografía", "Contenido de marca"],
      assets: embassyAssets,
    },
  ] as const;
  const [activeId, setActiveId] = useState<"corporativo" | "embajada">(
    "corporativo",
  );
  const active = collections.find(({ id }) => id === activeId) ?? collections[0];

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 border-y border-[#d7bb7b]/14">
          <div className="grid md:grid-cols-2">
            {collections.map((collection, index) => {
              const selected = collection.id === active.id;
              return (
                <button
                  key={collection.id}
                  type="button"
                  onClick={() => setActiveId(collection.id)}
                  aria-pressed={selected}
                  className={`group relative flex min-h-36 items-end justify-between gap-6 px-5 py-6 text-left transition-colors duration-500 sm:px-8 ${
                    index ? "md:border-l md:border-[#d7bb7b]/14" : ""
                  } ${selected ? "bg-[#d7bb7b]/8" : "hover:bg-white/[0.025]"}`}
                >
                  <span>
                    <span className={`block text-[10px] uppercase tracking-[0.28em] ${selected ? "text-[#d7bb7b]" : "text-[#ded4c2]/42"}`}>
                      Proyecto {collection.index}
                    </span>
                    <span className={`mt-3 block text-3xl sm:text-4xl ${selected ? "text-[#f5efe1]" : "text-[#ded4c2]/52"}`}>
                      {collection.title}
                    </span>
                  </span>
                  <span className={`mb-1 h-3 w-3 shrink-0 rounded-full border transition-all ${selected ? "border-[#d7bb7b] bg-[#d7bb7b] shadow-[0_0_0_6px_rgba(215,187,123,0.1)]" : "border-[#d7bb7b]/30"}`} />
                  <span className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#d7bb7b] transition-transform duration-500 ${selected ? "scale-x-100" : "scale-x-0"}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div key={active.id} className="grid gap-10 animate-gallery-in lg:grid-cols-[1.12fr_0.88fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <PortfolioDetailGallery assets={[...active.assets]} title={active.title} />
          </div>
          <aside className="relative overflow-hidden border border-[#d7bb7b]/14 bg-[#201f1d] p-6 sm:p-8">
            <span className="pointer-events-none absolute -right-4 -top-10 text-[150px] leading-none text-[#d7bb7b]/[0.035]">{active.index}</span>
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7bb7b]">{active.eyebrow}</p>
              <h2 className="mt-5 text-5xl leading-none text-[#f5efe1] sm:text-6xl">{active.title}</h2>
              <p className="mt-7 text-base leading-8 text-[#ded4c2]/78">{active.description}</p>
              <div className="mt-8 grid gap-5 border-y border-[#d7bb7b]/12 py-7 sm:grid-cols-2">
                <Fact label="Periodo" value={active.year} />
                <Fact label="Estado" value={active.status} />
                <Fact label="Cliente" value={active.client} />
                <Fact label="Ubicación" value={active.location} />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {active.deliverables.map((item) => (
                  <span key={item} className="border border-[#d7bb7b]/18 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d7bb7b]">{item}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#ded4c2]/45">{label}</p>
      <p className="mt-2 text-sm leading-6 text-[#f5efe1]">{value}</p>
    </div>
  );
}
