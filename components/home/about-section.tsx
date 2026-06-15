import Link from "next/link";

import { ArrowRightIcon, SparkleIcon } from "@/components/home/icons";

export function AboutSection() {
  return (
    <section id="nosotros" className="border-t border-[#bd9953]/12 px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#bd9953]">
            <SparkleIcon className="h-3.5 w-3.5" />
            Nuestra historia
          </p>
          <h2 className="mt-4 max-w-[500px] text-3xl leading-tight tracking-[0.03em] text-white/95 sm:text-5xl">
            CINE CON IDENTIDAD. PROPÓSITO Y VISIÓN.
          </h2>
          <p className="mt-6 max-w-[560px] text-sm leading-relaxed text-white/72 sm:text-base">
            Jomade Films SL es una productora audiovisual fundada en Madrid en
            2025 por un equipo de profesionales apasionados por contar historias
            con sensibilidad, innovación y excelencia técnica.
          </p>
          <p className="mt-5 max-w-[560px] text-sm leading-relaxed text-white/65">
            Nacemos con la intención de desarrollar proyectos cinematográficos
            con identidad propia y proyección internacional, con una mirada
            estratégica para eventos, publicidad y marcas.
          </p>
          <Link
            href="#contacto"
            className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#bd9953]"
          >
            Conoce al equipo
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-[#bd9953]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_30%,rgba(189,153,83,0.3),rgba(14,14,14,0)_44%),linear-gradient(130deg,#101010,#15120d_64%,#090909)]" />
          <div className="absolute inset-y-10 left-10 right-10 rounded-xl border border-[#bd9953]/18 bg-black/22" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-gradient-to-r from-[#bd9953] to-[#68522c] bg-clip-text text-[140px] font-semibold italic text-transparent">
              JM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
