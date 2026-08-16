"use client";

import Image from "next/image";
import { useState } from "react";

import { PortfolioDetailGallery } from "@/components/pages/portfolio-detail-gallery";

type GalleryAsset = {
  type: string;
  label: string;
  src: string;
  poster?: string;
};

type CineProjectShowcaseProps = {
  pisoPilotoAssets: GalleryAsset[];
};

const albatrosAssets: GalleryAsset[] = Array.from({ length: 6 }, (_, index) => ({
  type: "image",
  label: `Albatros ${String(index + 1).padStart(2, "0")}`,
  src: `/images/portfolio/cine/albatross-${String(index + 1).padStart(2, "0")}.png`,
}));

const pisoPilotoFestivals = [
  "FFICAB · Festival Ficción Cortos de Albacete · Sección Nacional · 25–29 mayo",
  "Frame Film Festival · Festival itinerante · Vila-Rodona · 5–6 junio",
  "Festival Internacional de Cine de Huesca · Concurso de Cortometraje Documental · 5–13 junio",
];

const pisoPilotoCast = ["Lucía Díez", "Nicolás Illoro", "Janick"];

const films = [
  {
    id: "piso-piloto",
    index: "01",
    title: "Piso Piloto",
    genre: "Drama / Comedia",
    year: "Producido 2025",
    status: "Comercializado 2026",
    logline: "Han encontrado el piso perfecto, pero no pueden salir de él.",
    synopsis:
      "Cortometraje de drama y comedia que explora, con humor y misterio, los miedos y contradicciones de dar el paso hacia la convivencia.",
  },
  {
    id: "albatros",
    index: "02",
    title: "Albatros",
    genre: "Drama / Comedia",
    year: "Producido 2025",
    status: "En proceso de comercialización",
    synopsis:
      "Alba B. Morena, una autora reconocida, ha estado alejada del mundo literario durante dos años tras el fracaso de su último libro. Enfrentando una depresión y una vida personal en ruinas, recibe un ultimátum de su editora: tiene seis meses para entregar una nueva obra o perderá su contrato.",
  },
] as const;

export function CineProjectShowcase({
  pisoPilotoAssets,
}: CineProjectShowcaseProps) {
  const [activeId, setActiveId] = useState<(typeof films)[number]["id"]>(
    "piso-piloto",
  );
  const activeFilm = films.find((film) => film.id === activeId) ?? films[0];
  const assets =
    activeFilm.id === "piso-piloto" ? pisoPilotoAssets : albatrosAssets;

  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 border-y border-[#d7bb7b]/14">
          <div className="grid md:grid-cols-2">
            {films.map((film) => {
              const isActive = film.id === activeFilm.id;

              return (
                <button
                  key={film.id}
                  type="button"
                  onClick={() => setActiveId(film.id)}
                  aria-pressed={isActive}
                  className={`group relative flex min-h-36 items-end justify-between gap-6 px-5 py-6 text-left transition-colors duration-500 sm:px-8 ${
                    film.index === "02" ? "md:border-l md:border-[#d7bb7b]/14" : ""
                  } ${isActive ? "bg-[#d7bb7b]/8" : "hover:bg-white/[0.025]"}`}
                >
                  <span>
                    <span
                      className={`block text-[10px] uppercase tracking-[0.28em] transition-colors ${
                        isActive ? "text-[#d7bb7b]" : "text-[#ded4c2]/42"
                      }`}
                    >
                      Cortometraje {film.index}
                    </span>
                    <span
                      className={`mt-3 block text-3xl transition-colors sm:text-4xl ${
                        isActive ? "text-[#f5efe1]" : "text-[#ded4c2]/52"
                      }`}
                    >
                      {film.title}
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
          key={activeFilm.id}
          className="grid gap-10 animate-gallery-in lg:grid-cols-[1.12fr_0.88fr]"
        >
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <PortfolioDetailGallery
              key={activeFilm.id}
              assets={assets}
              title={activeFilm.title}
            />
          </div>

          <aside className="relative overflow-hidden border border-[#d7bb7b]/14 bg-[#201f1d] p-6 sm:p-8">
            <span className="pointer-events-none absolute -right-4 -top-10 text-[150px] leading-none text-[#d7bb7b]/[0.035]">
              {activeFilm.index}
            </span>
            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7bb7b]">
                Cortometraje / {activeFilm.index}
              </p>
              <h2 className="mt-5 text-5xl leading-none text-[#f5efe1] sm:text-6xl">
                {activeFilm.title}
              </h2>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#ded4c2]/55">
                {activeFilm.genre}
              </p>

              {"logline" in activeFilm ? (
                <blockquote className="mt-8 border-l border-[#d7bb7b]/55 pl-5 text-2xl leading-9 text-[#f5efe1]">
                  “{activeFilm.logline}”
                </blockquote>
              ) : null}

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                  Sinopsis
                </p>
                <p className="mt-4 text-base leading-8 text-[#ded4c2]/78">
                  {activeFilm.synopsis}
                </p>
              </div>

              <div className="mt-9 grid gap-4 border-t border-[#d7bb7b]/12 pt-7 sm:grid-cols-2">
                <FilmFact label="Producción" value={activeFilm.year} />
                <FilmFact label="Estado" value={activeFilm.status} />
              </div>

              {activeFilm.id === "piso-piloto" ? (
                <div className="mt-9 space-y-8 border-t border-[#d7bb7b]/12 pt-8">
                  <div className="overflow-hidden border border-[#d7bb7b]/14 bg-[#171614]">
                    <div className="relative aspect-[1.7/1] min-h-56 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(215,187,123,0.1),transparent_68%)]">
                      <Image
                        src="/images/piso-piloto-award.png"
                        alt="Reconocimientos y selecciones de Piso Piloto"
                        fill
                        sizes="(min-width: 1024px) 34vw, 100vw"
                        className="scale-110 object-contain p-4"
                      />
                    </div>
                    <div className="border-t border-[#d7bb7b]/12 p-5">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                        Recorrido en festivales
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#ded4c2]/76">
                        Una ficción española de 15 minutos dirigida por Paula
                        Rodrigo y producida por Catastral Media junto a Jomade
                        Films, presente en selecciones y muestras nacionales e
                        internacionales.
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                      Selección oficial de festivales
                    </p>
                    <ul className="mt-5 space-y-4">
                      {pisoPilotoFestivals.map((festival) => (
                        <li
                          key={festival}
                          className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-6 text-[#ded4c2]/76"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d7bb7b]" />
                          {festival}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                      Reparto
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                      {pisoPilotoCast.map((person) => (
                        <span
                          key={person}
                          className="border-b border-[#d7bb7b]/28 pb-1 text-sm text-[#f5efe1]"
                        >
                          {person}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                      Áreas
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#ded4c2]/72">
                      Dirección · Producción · Postproducción
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FilmFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#ded4c2]/45">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#f5efe1]">{value}</p>
    </div>
  );
}
