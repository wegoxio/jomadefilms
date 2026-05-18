import Link from "next/link";

import { ArrowRightIcon } from "@/components/home/icons";

export function ContactCtaSection() {
  return (
    <section id="contacto" className="border-t border-[#bd9953]/12 px-4 py-18 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-2xl border border-[#bd9953]/22 bg-[linear-gradient(120deg,rgba(19,14,10,0.72),rgba(9,9,9,0.54))] px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14">
        <div className="pointer-events-none absolute -right-6 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[#bd9953]/18 blur-[48px]" />
        <div className="relative">
          <p className="text-3xl leading-tight tracking-[0.03em] text-white/95 sm:text-5xl">
            TIENES UNA HISTORIA
            <br />
            QUE CONTAR?
          </p>
          <p className="mt-4 text-sm text-white/72 sm:text-base">
            Hablemos y hagamosla inolvidable.
          </p>
        </div>
        <Link
          href="#inicio"
          className="relative mt-7 inline-flex items-center gap-2 rounded-md border border-[#bd9953]/92 bg-gradient-to-r from-[#bd9953] to-[#68522c] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black lg:mt-0"
        >
          Hablemos de tu proyecto
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
