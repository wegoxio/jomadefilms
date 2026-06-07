import Image from "next/image";

import { philosophyPillars, stats } from "@/components/home/content";
import { ArrowRightIcon, SparkleIcon, StatIcon } from "@/components/home/icons";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { PhilosophyTimeline } from "@/components/pages/philosophy-timeline";

const pillarImages = [
  "/images/hero-production.png",
  "/images/hero-location.png",
  "/images/hero-postproduction.png",
  "/images/hero-production.png",
];

const manifesto = [
  "Desarrollar proyectos con identidad propia.",
  "Convertir sensibilidad narrativa en piezas de alto impacto.",
  "Unir produccion, direccion, postproduccion y marketing.",
  "Construir recorrido en festivales, mercados y circuitos profesionales.",
];

export function PhilosophyPage() {
  return (
    <main className="relative flex-1 overflow-x-clip bg-[#282725] text-white">
      <SiteNavbar />

      <section className="relative isolate min-h-[96svh] overflow-hidden px-4 pb-20 pt-30 sm:px-6 lg:px-8 lg:pt-36">
        <Image
          src="/images/hero-location.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-[0.42]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.66)_48%,rgba(0,0,0,0.35)_100%),linear-gradient(180deg,rgba(40,39,37,0.18)_0%,#282725_94%)]" />
        <div className="pointer-events-none absolute left-[8%] top-[22%] -z-10 h-[320px] w-[320px] border border-[#d7bb7b]/16 philosophy-orbit" />

        <div className="mx-auto grid min-h-[calc(96svh-9rem)] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-page-in">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d7bb7b]">
              Filosofia
            </p>
            <h1 className="mt-6 max-w-[720px] text-5xl leading-[0.96] text-[#f5efe1] sm:text-7xl lg:text-[92px]">
              Cine como forma de pensar.
            </h1>
            <p className="mt-7 max-w-[560px] text-base leading-8 text-[#ded4c2]/78">
              Jomade Films nace en Madrid para crear piezas audiovisuales con
              identidad, precision tecnica y una carga emocional que permanezca
              despues del ultimo corte.
            </p>
          </div>

          <div className="relative min-h-[540px] animate-page-in animate-page-in-delay">
            <div className="absolute right-0 top-0 h-[62%] w-[74%] overflow-hidden border border-[#d7bb7b]/22 bg-[#201f1d] shadow-[0_26px_90px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hero-production.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.58)_100%)]" />
            </div>
            <div className="absolute bottom-0 left-0 w-[62%] border border-[#d7bb7b]/18 bg-[#1d1c1a]/92 p-6 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7bb7b]">
                Fundacion / Madrid / 2025
              </p>
              <p className="mt-5 text-3xl leading-tight text-[#f5efe1]">
                Creatividad, innovacion y sensibilidad narrativa.
              </p>
            </div>
            <div className="absolute bottom-18 right-8 hidden w-44 border border-[#d7bb7b]/18 bg-black/36 p-4 text-xs uppercase tracking-[0.18em] text-[#ded4c2]/72 backdrop-blur sm:block">
              Alto impacto cinematografico
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-[#d7bb7b]/12 bg-[#242321] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 90}>
              <div className="group relative overflow-hidden border border-[#d7bb7b]/12 bg-[#1f1e1c] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#d7bb7b]/42">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#d7bb7b] transition-transform duration-500 group-hover:scale-x-100" />
                <p className="inline-flex items-center gap-2 text-[#d7bb7b]">
                  <StatIcon icon={stat.icon} />
                  <span className="text-4xl leading-none">{stat.value}</span>
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#ded4c2]/68">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                  Manifiesto
                </p>
                <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                  Lo que sostiene cada plano.
                </h2>
              </div>
              <p className="max-w-[660px] text-base leading-8 text-[#ded4c2]/74">
                La filosofia de Jomade no es decorativa: define como se decide
                una idea, como se produce una imagen y como se protege la
                emocion hasta la entrega final.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {philosophyPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 130}>
                <article className="philosophy-card group relative h-[430px] overflow-hidden border border-[#d7bb7b]/14 bg-[#171614] shadow-[0_18px_60px_rgba(0,0,0,0.26)] transition-all duration-700 hover:-translate-y-2 hover:border-[#d7bb7b]/45 hover:shadow-[0_30px_90px_rgba(0,0,0,0.46)]">
                  <Image
                    src={pillarImages[index]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover opacity-78 transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.78)_72%,rgba(0,0,0,0.92)_100%)] transition-opacity duration-700 group-hover:opacity-60" />
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#d7bb7b] transition-transform duration-700 group-hover:scale-x-100" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    <p className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#d7bb7b]">
                      Filosofia / 0{index + 1}
                      <SparkleIcon className="h-3.5 w-3.5 transition-transform duration-700 group-hover:rotate-45" />
                    </p>

                    <div>
                      <h3 className="max-w-[240px] text-3xl leading-tight text-[#f5efe1] transition-transform duration-700 group-hover:-translate-y-6">
                        {pillar.title}
                      </h3>
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="mt-5 text-sm leading-7 text-[#ded4c2]/82">
                            {pillar.description}
                          </p>
                          <p className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#d7bb7b]">
                            Mantener en cada proyecto
                            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#d7bb7b]/12 bg-[#1f1e1c] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-28">
          <Image
            src="/images/hero-postproduction.png"
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#1f1e1c_0%,rgba(31,30,28,0.92)_42%,rgba(31,30,28,0.62)_100%)]" />

        <div className="relative mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                Mision / Vision
              </p>
              <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                Una ambicion precisa.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            <ScrollReveal delay={120}>
              <article className="group border border-[#d7bb7b]/14 bg-[#282725]/86 p-7 backdrop-blur transition-all duration-500 hover:-translate-x-2 hover:border-[#d7bb7b]/42">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                  Mision
                </p>
                <p className="mt-5 text-2xl leading-10 text-[#f5efe1]">
                  Liderar la creacion de piezas audiovisuales de alto impacto
                  cinematografico, con excelencia tecnica y narrativa.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <article className="group border border-[#d7bb7b]/14 bg-[#282725]/86 p-7 backdrop-blur transition-all duration-500 hover:translate-x-2 hover:border-[#d7bb7b]/42">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                  Vision
                </p>
                <p className="mt-5 text-2xl leading-10 text-[#f5efe1]">
                  Consolidarse como productora reconocida por calidad,
                  innovacion y compromiso creativo en el mercado europeo e
                  internacional.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <ScrollReveal className="lg:sticky lg:top-28">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                  Codigo creativo
                </p>
                <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                  La ruta interna de cada proyecto.
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#ded4c2]/70">
                  No es una lista de valores: es la secuencia que guia como
                  Jomade decide, produce y protege la fuerza de una historia.
                </p>
              </div>
            </ScrollReveal>

            <PhilosophyTimeline items={manifesto} images={pillarImages} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
