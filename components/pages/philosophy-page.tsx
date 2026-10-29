import Image from "next/image";

import { philosophyPillars, stats } from "@/components/home/content";
import { ArrowRightIcon, StatIcon } from "@/components/home/icons";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { PhilosophyTimeline } from "@/components/pages/philosophy-timeline";

const pillarImages = [
  "/images/CLAQUETA 1.png",
  "/images/pexels-luisbecerrafotografo-6918174.jpg",
  "/images/2S2A8555.JPG",
  "/images/pexels-fukajaz-31718971.jpg",
];

const manifesto = [
  "Desarrollar proyectos con identidad propia.",
  "Convertir sensibilidad narrativa en piezas de alto impacto.",
  "Unir producción, dirección, postproducción y marketing.",
  "Construir recorrido en festivales, mercados y circuitos profesionales.",
];

const team = [
  {
    name: "Josemir YC.",
    role: "Coordinación de marketing y operaciones",
    description:
    "Planificación de estrategias de comunicación, organización logística y gestión de equipos.",
    image: "/images/team/JOSEMIR.jpeg",
    position: "object-[center_28%]",
    imageScale: "scale-[1.45] group-hover:scale-[1.5]",
  },
  {
    name: "Terumi YC.",
    role: "Dirección y producción",
    description:
      "Coordinación integral de proyectos de ficción, documental y marcas. Planificación, creatividad y seguimiento de cada proceso.",
    image: "/images/team/TERUMI.jpeg",
    position: "object-[center_32%]",
  },
  {
    name: "Juan GQ.",
    role: "Dirección, producción y postproducción",
    description:
      "Especializado en postproducción, etalonaje y narrativa visual para ficción, documental y marcas.",
    image: "/images/team/JUAN.webp",
    position: "object-[center_28%]",
  },
];

export function PhilosophyPage() {
  return (
    <main className="relative flex-1 overflow-x-clip bg-[#282725] text-white">
      <SiteNavbar />

      <section className="relative isolate min-h-svh overflow-hidden px-4 pb-20 pt-30 sm:px-6 lg:px-8 lg:pt-36">
        <Image
          src="/images/FILOSOFÍA.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.72)_47%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(40,39,37,0.08)_0%,#282725_100%)]" />

        <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-[1240px] items-center">
          <div className="max-w-[760px] animate-page-in">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d7bb7b]">
              Filosofía
            </p>
            <h1 className="mt-6 max-w-[720px] text-5xl leading-[0.98] text-[#f5efe1] sm:text-7xl lg:text-[84px]">
              Cine como forma de pensar.
            </h1>
            <p className="mt-7 max-w-[560px] text-base leading-8 text-[#ded4c2]/78">
              Jomade Films nace en Madrid para crear piezas audiovisuales con
              identidad, precisión técnica y una carga emocional que permanezca
              después del último corte.
            </p>
            <div className="mt-10 max-w-[570px] border-l border-[#d7bb7b]/55 pl-6">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7bb7b]">
                Fundación / Madrid / 2025
              </p>
              <p className="mt-4 text-2xl leading-tight text-[#f5efe1] sm:text-3xl">
                Creatividad, innovación y sensibilidad narrativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-24 h-px w-[min(90vw,980px)] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(215,187,123,0.28),transparent)]" />
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                Equipo
              </p>
              <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                Tres miradas, una misma dirección.
              </h2>
              <p className="mx-auto mt-6 max-w-[620px] text-base leading-8 text-[#ded4c2]/70">
                Dirección, estrategia y acabado trabajan como un solo equipo
                para acompañar cada historia de principio a fin.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-8 lg:mt-20">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 130}>
                <article
                  className={`group mx-auto max-w-[330px] text-center ${
                    index === 1 ? "md:mt-14" : ""
                  }`}
                >
                  <div className="relative mx-auto aspect-square w-[min(72vw,270px)]">
                    <div className="absolute -inset-3 rounded-full border border-[#d7bb7b]/25 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105" />
                    <div className="absolute -inset-6 rounded-full border border-[#d7bb7b]/10 transition-transform duration-700 group-hover:-rotate-6" />
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-[#171614] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
                      <Image
                        src={member.image}
                        alt={`Retrato de ${member.name}`}
                        fill
                        sizes="(min-width: 768px) 270px, 72vw"
                        className={`object-cover ${member.position} ${member.imageScale ?? "group-hover:scale-105"} transition-transform duration-1000`}
                      />
                      <div className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.32)_100%)]" />
                    </div>
                  </div>

                  <h3 className="mt-10 text-3xl text-[#f5efe1]">
                    {member.name}
                  </h3>
                  <p className="mt-3 flex min-h-10 items-center justify-center text-xs uppercase leading-5 tracking-[0.2em] text-[#d7bb7b]">
                    {member.role}
                  </p>
                  <p className="min-h-[8rem] text-sm leading-7 text-[#ded4c2]/72">
                    {member.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
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
                La filosofía de Jomade no es decorativa: define cómo se decide
                una idea, cómo se produce una imagen y cómo se protege la
                emoción hasta la entrega final.
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
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div>
                      <h3 className="max-w-[240px] text-3xl leading-tight text-[#f5efe1] transition-transform duration-700 lg:group-hover:-translate-y-6">
                        {pillar.title}
                      </h3>
                      <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]">
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
            src="/images/Captura de pantalla 2026-02-17 a las 13.51.49.png"
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
                Misión / Visión
              </p>
              <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                Una ambición precisa.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            <ScrollReveal delay={120}>
              <article className="group border border-[#d7bb7b]/14 bg-[#282725]/86 p-7 backdrop-blur transition-all duration-500 hover:-translate-x-2 hover:border-[#d7bb7b]/42">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                  Misión
                </p>
                <p className="mt-5 text-2xl leading-10 text-[#f5efe1]">
                  Liderar la industria de los eventos y el entretenimiento
                  mediante la creación de piezas cinematográficas de alto
                  impacto. Nuestra misión es desarrollar proyectos de excelencia
                  técnica y narrativa que no solo satisfagan a nuestros clientes,
                  sino que sean reconocidos y valorados en los mercados y
                  festivales de cine más prestigiosos a nivel global.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <article className="group border border-[#d7bb7b]/14 bg-[#282725]/86 p-7 backdrop-blur transition-all duration-500 hover:translate-x-2 hover:border-[#d7bb7b]/42">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                  Visión
                </p>
                <p className="mt-5 text-2xl leading-10 text-[#f5efe1]">
                  Tener una cartera de clientes sólida y ser los mejores en
                  Europa. Nuestra meta es convertirnos en una de las productoras
                  más reconocidas del continente y, con el paso del tiempo, llegar
                  a ser una de las más importantes del mundo.
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
                  Código creativo
                </p>
                <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                  La ruta interna de cada proyecto.
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#ded4c2]/70">
                  No es una lista de valores: es la secuencia que guía cómo
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
