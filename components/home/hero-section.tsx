import Link from "next/link";

import {
  ArrowRightIcon,
  GlobeIcon,
  MapPinIcon,
  PlayIcon,
} from "@/components/home/icons";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden px-4 pb-20 pt-30 sm:px-6 sm:pt-36 lg:min-h-[108svh] lg:px-8 lg:pb-24"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 -z-30 h-full w-full object-cover"
      >
        <source src="/herovideo.mov" type="video/quicktime" />
      </video>

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_68%_40%,rgba(255,241,214,0.32),rgba(6,6,6,0)_24%),radial-gradient(circle_at_56%_50%,rgba(189,153,83,0.22),rgba(6,6,6,0)_56%),linear-gradient(104deg,rgba(3,3,3,0.88)_0%,rgba(4,4,4,0.62)_48%,rgba(2,2,2,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_26%,rgba(0,0,0,0.56)_100%)]" />

      <div className="mx-auto grid min-h-[calc(100svh-11rem)] max-w-[1240px] items-center lg:min-h-[calc(108svh-13rem)]">
        <div className="relative z-10 max-w-[840px]">
          <p className="hero-reveal text-center text-xs uppercase tracking-[0.2em] text-[#bd9953] sm:text-left">
            Cine. Emocion. Impacto.
          </p>
          <h1 className="hero-reveal hero-reveal-delay-1 mt-6 text-center text-4xl leading-[1.01] tracking-[0.03em] sm:text-left sm:text-6xl lg:text-[88px]">
            <span className="block">CREAMOS HISTORIAS</span>
            <span className="block bg-gradient-to-r from-[#bd9953] to-[#68522c] bg-clip-text text-transparent">
              QUE PERDURAN.
            </span>
          </h1>
          <p className="hero-reveal hero-reveal-delay-2 mx-auto mt-7 max-w-[560px] text-center text-sm leading-relaxed text-white/74 sm:mx-0 sm:text-left sm:text-base">
            Productora audiovisual especializada en cine, eventos y comunicacion
            de marca. Convertimos ideas en experiencias cinematograficas
            inolvidables.
          </p>

          <div className="hero-reveal hero-reveal-delay-3 mt-9 flex flex-wrap  gap-3">
            <Link
              href="#filmografia"
              className="hero-primary-cta inline-flex items-center gap-2 rounded-md border border-[#bd9953]/90 bg-gradient-to-r from-[#bd9953] to-[#68522c] px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              <PlayIcon className="h-3 w-3" />
              Ver nuestros trabajos
            </Link>
            <Link
              href="#nosotros"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white/85 transition-colors hover:border-[#bd9953]/60 hover:text-[#bd9953]"
            >
              Conoce mas
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="hero-reveal hero-reveal-delay-4 mt-10 flex flex-wrap justify-center gap-6 sm:justify-start">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/72">
              <MapPinIcon className="h-3.5 w-3.5 text-[#bd9953]" />
              Madrid - Espana
            </p>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/72">
              <GlobeIcon className="h-3.5 w-3.5 text-[#bd9953]" />
              Disponibles para proyectos globales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
