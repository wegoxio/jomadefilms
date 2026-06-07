import Image from "next/image";
import Link from "next/link";

import { processSteps, serviceCards } from "@/components/home/content";
import { ArrowRightIcon, ServiceIcon } from "@/components/home/icons";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { ServicesProcess } from "@/components/pages/services-process";

const serviceImages = [
  "/images/hero-production.png",
  "/images/hero-location.png",
  "/images/hero-postproduction.png",
  "/images/hero-production.png",
];

const serviceMeta = [
  "Ficcion / Desarrollo / Rodaje",
  "Eventos / Cobertura / Highlights",
  "Marca / Publicidad / Campana",
  "Edicion / Color / Entrega",
];

export function ServicesPage() {
  return (
    <main className="relative flex-1 overflow-x-clip bg-[#282725] text-white">
      <SiteNavbar />

      <section className="relative isolate min-h-[94svh] overflow-hidden px-4 pb-20 pt-30 sm:px-6 lg:px-8 lg:pt-36">
        <Image
          src="/images/hero-postproduction.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-[0.38]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.68)_48%,rgba(0,0,0,0.24)_100%),linear-gradient(180deg,rgba(40,39,37,0.12)_0%,#282725_96%)]" />

        <div className="mx-auto grid min-h-[calc(94svh-9rem)] max-w-[1240px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-page-in">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d7bb7b]">
              Servicios
            </p>
            <h1 className="mt-6 max-w-[820px] text-5xl leading-[0.98] text-[#f5efe1] sm:text-7xl lg:text-[88px]">
              Produccion audiovisual con lenguaje de cine.
            </h1>
            <p className="mt-7 max-w-[600px] text-base leading-8 text-[#ded4c2]/78">
              Desde una pieza de ficcion hasta contenido para eventos o marca,
              Jomade trabaja cada proyecto con direccion creativa, precision
              tecnica y una estetica cinematografica.
            </p>
            <Link
              href="/contacto"
              className="mt-9 inline-flex items-center gap-2 bg-[#d7bb7b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Solicitar propuesta
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="relative hidden min-h-[540px] animate-page-in animate-page-in-delay lg:block">
            <div className="absolute right-0 top-0 h-[54%] w-[72%] overflow-hidden border border-[#d7bb7b]/18">
              <Image
                src="/images/hero-production.png"
                alt=""
                fill
                sizes="42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/24" />
            </div>
            <div className="absolute bottom-10 left-0 h-[52%] w-[66%] overflow-hidden border border-[#d7bb7b]/18">
              <Image
                src="/images/hero-location.png"
                alt=""
                fill
                sizes="38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.58))]" />
            </div>
            <div className="absolute bottom-0 right-8 border border-[#d7bb7b]/18 bg-[#1d1c1a]/90 p-5 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                Integral
              </p>
              <p className="mt-3 max-w-[240px] text-2xl leading-tight text-[#f5efe1]">
                Idea, rodaje, postproduccion y entrega.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                  Que hacemos
                </p>
                <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                  Cuatro lineas, una misma mirada.
                </h2>
              </div>
              <p className="max-w-[640px] text-base leading-8 text-[#ded4c2]/74">
                Cada servicio se adapta al proyecto, pero todos comparten el
                mismo criterio: narrativa clara, imagen cuidada y ejecucion
                profesional.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {serviceCards.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 120}>
                <article className="group relative min-h-[430px] overflow-hidden border border-[#d7bb7b]/12 bg-[#171614] transition-all duration-700 hover:-translate-y-2 hover:border-[#d7bb7b]/45 hover:shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
                  <Image
                    src={serviceImages[index]}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-68 transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.76)_65%,rgba(0,0,0,0.94)_100%)] transition-opacity duration-700 group-hover:opacity-72" />
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#d7bb7b] transition-transform duration-700 group-hover:scale-x-100" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-start justify-between gap-6">
                      <span className="inline-flex h-12 w-12 items-center justify-center border border-[#d7bb7b]/28 text-[#d7bb7b] transition-colors duration-500 group-hover:bg-[#d7bb7b] group-hover:text-[#090806]">
                        <ServiceIcon icon={service.icon} />
                      </span>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#d7bb7b]">
                        0{index + 1}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#d7bb7b]/82">
                        {serviceMeta[index]}
                      </p>
                      <h3 className="mt-4 max-w-[520px] text-4xl leading-tight text-[#f5efe1]">
                        {service.title}
                      </h3>
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-out group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#ded4c2]/82">
                            {service.description}
                          </p>
                          <p className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#d7bb7b]">
                            Explorar alcance
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
        <div className="absolute inset-y-0 left-0 w-1/2 opacity-20">
          <Image
            src="/images/hero-production.png"
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,30,28,0.7)_0%,#1f1e1c_44%,#1f1e1c_100%)]" />

        <div className="relative mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                  Metodo
                </p>
                <h2 className="mt-5 max-w-[640px] text-4xl leading-tight text-[#f5efe1] sm:text-6xl">
                  Una produccion que avanza con ritmo.
                </h2>
              </div>
              <p className="max-w-[440px] text-sm leading-7 text-[#ded4c2]/70">
                El proceso se revela paso a paso: de la primera idea a la pieza
                final lista para circular.
              </p>
            </div>
          </ScrollReveal>

          <ServicesProcess steps={processSteps} />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1180px]">
          <ScrollReveal>
            <div className="grid overflow-hidden border border-[#d7bb7b]/14 bg-[#201f1d] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[360px] overflow-hidden">
                <Image
                  src="/images/hero-location.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.74)_100%)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#d7bb7b]">
                    Brief de produccion
                  </p>
                  <p className="mt-4 max-w-[420px] text-3xl leading-tight text-[#f5efe1]">
                    Cuatro datos convierten una idea en una propuesta viable.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                  Para avanzar
                </p>
                <h2 className="mt-5 max-w-[720px] text-4xl leading-tight text-[#f5efe1] sm:text-5xl">
                  No necesitamos una idea perfecta. Necesitamos un punto de
                  partida claro.
                </h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Objetivo de la pieza",
                    "Fecha o ventana de rodaje",
                    "Ubicacion y alcance",
                    "Referencias visuales",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="group border border-[#d7bb7b]/12 bg-[#282725] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7bb7b]/38"
                    >
                      <p className="text-[#d7bb7b]">0{index + 1}</p>
                      <p className="mt-4 text-sm leading-6 text-[#ded4c2]/78">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contacto"
                  className="mt-8 inline-flex items-center gap-2 bg-[#d7bb7b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Abrir briefing
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
