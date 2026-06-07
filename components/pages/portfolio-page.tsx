import Image from "next/image";
import Link from "next/link";

import { portfolioProjects } from "@/components/home/content";
import { ArrowRightIcon, PlayIcon, SparkleIcon } from "@/components/home/icons";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";

export function PortfolioPage() {
  const featured = portfolioProjects[0];

  return (
    <main className="relative flex-1 overflow-x-clip bg-[#282725] text-white">
      <SiteNavbar />

      <section className="relative isolate min-h-[100svh] overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-34">
        <Image
          src={featured.image}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-[0.44]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.36)_45%,#282725_100%),linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.5)_55%,rgba(0,0,0,0.14)_100%)]" />

        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-[1240px] items-end gap-10 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-page-in">
            <p className="text-xs uppercase tracking-[0.34em] text-[#d7bb7b]">
              Portafolio
            </p>
            <h1 className="mt-6 max-w-[900px] text-6xl leading-[0.9] text-[#f5efe1] sm:text-8xl lg:text-[118px]">
              Archivo de historias en movimiento.
            </h1>
          </div>

          <div className="animate-page-in animate-page-in-delay border border-[#d7bb7b]/16 bg-[#1d1c1a]/82 p-6 backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
              Seleccion 2022-2026
            </p>
            <p className="mt-5 text-lg leading-8 text-[#ded4c2]/82">
              Ficcion, contenido comercial y piezas corporativas entre Madrid,
              Mexico y España. Un portafolio inicial con ambicion de industria.
            </p>
            <div className="mt-7 grid grid-cols-3 border-t border-[#d7bb7b]/12 pt-5 text-center">
              <PortfolioMetric value="03" label="Proyectos" />
              <PortfolioMetric value="02" label="Mercados" />
              <PortfolioMetric value="2025" label="Inicio" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">
              <aside className="lg:sticky lg:top-28 lg:h-fit">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                  Case studies
                </p>
                <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-5xl">
                  Tres entradas, tres direcciones.
                </h2>
                <p className="mt-6 text-sm leading-7 text-[#ded4c2]/70">
                  La pagina de portafolio funciona como archivo curatorial:
                  cada proyecto muestra etapa, categoria y proyeccion.
                </p>
              </aside>

              <div className="space-y-8">
                {portfolioProjects.map((project, index) => (
                  <ScrollReveal key={project.title} delay={index * 120}>
                    <article className="group grid overflow-hidden border border-[#d7bb7b]/12 bg-[#201f1d] transition-all duration-700 hover:border-[#d7bb7b]/42 lg:grid-cols-[0.92fr_1.08fr]">
                      <div
                        className={`relative min-h-[360px] overflow-hidden bg-[#171614] ${
                          index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.72)_100%)]" />
                        <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center border border-[#d7bb7b]/30 bg-black/42 text-[#d7bb7b] backdrop-blur">
                          <PlayIcon className="h-4 w-4" />
                        </div>
                        <p className="absolute bottom-5 left-5 text-7xl leading-none text-[#d7bb7b]/24">
                          0{index + 1}
                        </p>
                      </div>

                      <div className="flex flex-col justify-between p-6 sm:p-8">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#d7bb7b]">
                            <span>{project.year}</span>
                            <span className="h-px w-8 bg-[#d7bb7b]/44" />
                            <span>{project.status}</span>
                          </div>
                          <h3 className="mt-6 text-4xl leading-tight text-[#f5efe1] sm:text-5xl">
                            {project.title}
                          </h3>
                          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#ded4c2]/52">
                            {project.category}
                          </p>
                          <p className="mt-7 max-w-[620px] text-base leading-8 text-[#ded4c2]/76">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-9 flex flex-wrap items-end justify-between gap-5">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-[#d7bb7b]/18 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d7bb7b]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Link
                            href="/contacto"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#d7bb7b]"
                          >
                            Consultar
                            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-[#d7bb7b]/12 bg-[#1f1e1c] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1040px]">
          <ScrollReveal>
            <div className="relative overflow-hidden border border-[#d7bb7b]/16 p-8 text-center sm:p-12">
              <div className="absolute left-8 top-8 text-[#d7bb7b]/28">
                <SparkleIcon className="h-12 w-12" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                Siguiente obra
              </p>
              <h2 className="mx-auto mt-5 max-w-[760px] text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                El portafolio sigue creciendo proyecto a proyecto.
              </h2>
              <Link
                href="/contacto"
                className="mt-9 inline-flex items-center gap-2 bg-[#d7bb7b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Proponer proyecto
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PortfolioMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl text-[#d7bb7b]">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#ded4c2]/58">
        {label}
      </p>
    </div>
  );
}
