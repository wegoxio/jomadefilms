import Link from "next/link";

import { films } from "@/components/home/content";
import { ArrowRightIcon, PlayIcon, PlusIcon, SparkleIcon } from "@/components/home/icons";

export function FilmsSection() {
  return (
    <section id="filmografia" className="border-t border-[#bd9953]/12 px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#bd9953]">
              <SparkleIcon className="h-3.5 w-3.5" />
              Filmografía destacada
            </p>
            <h2 className="mt-3 text-3xl leading-tight tracking-[0.03em] text-white/95 sm:text-4xl">
              HISTORIAS QUE ESTÁN COMENZANDO.
            </h2>
          </div>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#bd9953]"
          >
            Ver toda la filmografía
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {films.map((film) => (
            <article
              key={film.title}
              className="overflow-hidden rounded-xl border border-[#bd9953]/20 bg-black/22"
            >
              <div className={`relative h-48 bg-gradient-to-br ${film.gradient}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.08))]" />
                <button
                  type="button"
                  aria-label={`Reproducir ${film.title}`}
                  className="absolute left-1/2 top-1/2 inline-flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white"
                >
                  <PlayIcon className="ml-0.5 h-4 w-4" />
                </button>
              </div>
              <div className="flex items-end justify-between gap-2 px-4 pb-4 pt-3">
                <div>
                  <h3 className="text-lg text-white/95">{film.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/65">
                    {film.meta}
                  </p>
                </div>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#bd9953]/45 text-[#bd9953]">
                  <PlusIcon />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
