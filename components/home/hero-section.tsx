import Link from "next/link";

import { ArrowRightIcon, PlayIcon } from "@/components/home/icons";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-svh overflow-hidden bg-[#030303] px-4 pt-28 text-white sm:px-6 lg:px-8"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/CLAQUETA 1.png"
        aria-hidden="true"
      >
        <source src="/videos/hero-section.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.62)_42%,rgba(0,0,0,0.22)_100%),linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.3)_54%,#050505_100%)]" />

      <div className="relative z-20 mx-auto grid min-h-[calc(100svh-7rem)] max-w-[1240px] items-center pb-20">
        <div className="max-w-[680px]">
          <p className="hero-reveal text-xs uppercase tracking-[0.28em] text-[#d7bb7b]">
            Cine. Emoción. Impacto.
          </p>
          <h1 className="hero-reveal hero-reveal-delay-1 mt-5 max-w-[760px] text-4xl leading-[1.04] tracking-normal text-[#f5efe1] sm:text-6xl lg:text-[76px]">
            Creamos historias que perduran.
          </h1>
          <p className="hero-reveal hero-reveal-delay-2 mt-6 max-w-[540px] text-sm leading-7 text-[#ded4c2]/82 sm:text-base">
            Productora audiovisual y cinematográfica fundada en Madrid, con
            una mirada narrativa para cine, eventos y marca.
          </p>

          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/portafolio"
              className="hero-primary-cta inline-flex items-center gap-2 rounded-sm border border-[#d7bb7b]/90 bg-[#d7bb7b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <PlayIcon className="h-3 w-3" />
              Ver portafolio
            </Link>
            <Link
              href="/filosofia"
              className="inline-flex items-center gap-2 rounded-sm border border-[#f5efe1]/20 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#f5efe1]/86 transition-colors hover:border-[#d7bb7b]/70 hover:text-[#d7bb7b]"
            >
              Filosofía
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-30 h-px w-20 -translate-x-1/2 bg-[#d7bb7b]/70" />
    </section>
  );
}
