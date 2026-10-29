import Link from "next/link";

import { ArrowRightIcon, SparkleIcon } from "@/components/home/icons";

export function AboutSection() {
  return (
    <section id="nosotros" className="border-t border-[#bd9953]/12 px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#bd9953]">
            <SparkleIcon className="h-3.5 w-3.5" />
            Sobre nosotros
          </p>
          <h2 className="mt-4 max-w-[500px] text-3xl leading-tight tracking-[0.03em] text-white/95 sm:text-5xl">
            SOBRE NOSOTROS
          </h2>
          <p className="mt-6 max-w-[560px] text-sm leading-relaxed text-white/72 sm:text-base">
            Fundada en Madrid, España, somos una empresa conformada por
            profesionales talentosos apasionados al cine, la creatividad y la
            innovación, por lo que acompañarte en cada proyecto es nuestra
            prioridad. Creemos en el poder de las historias y en la magia de los
            momentos que merecen ser recordados. Cada proyecto es una oportunidad
            para contar algo especial, con dedicación, sensibilidad y estilo propio.
          </p>
          <p className="mt-5 max-w-[560px] text-sm leading-relaxed text-white/65">
            Desarrollar y dirigir contenido creativo con estándares
            cinematográficos que genere conexiones emocionales auténticas con
            cada audiencia específica según cada concepto único.
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
