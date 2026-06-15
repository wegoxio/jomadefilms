import Link from "next/link";

import { serviceCards } from "@/components/home/content";
import { ServiceIcon, SparkleIcon } from "@/components/home/icons";

export function ServicesSection() {
  return (
    <section id="servicios" className="border-t border-[#bd9953]/12 px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <p className="inline-flex w-full items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.2em] text-[#bd9953]">
          <SparkleIcon className="h-3.5 w-3.5" />
          Qué hacemos
        </p>
        <h2 className="mx-auto mt-4 max-w-[760px] text-center text-3xl leading-tight tracking-[0.03em] text-white/95 sm:text-5xl">
          SOLUCIONES AUDIOVISUALES A LA ALTURA DE TU HISTORIA.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-[#bd9953]/22 bg-[linear-gradient(130deg,rgba(9,9,9,0.7),rgba(16,13,10,0.58))] p-5"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#bd9953]/55 bg-[#bd9953]/10 text-[#bd9953]">
                <ServiceIcon icon={service.icon} />
              </span>
              <h3 className="mt-4 text-sm uppercase tracking-[0.14em] text-[#bd9953]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/66">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center rounded-md border border-[#bd9953]/60 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#bd9953] transition-colors hover:bg-[#bd9953]/10"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
