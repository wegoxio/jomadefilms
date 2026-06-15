import Image from "next/image";
import type { ReactNode } from "react";

import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SparkleIcon,
} from "@/components/home/icons";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";

const projectTypes = ["Cine", "Evento", "Marca", "Postproducción"];
const briefItems = ["Objetivo", "Fecha", "Ubicación", "Referencias"];

export function ContactPage() {
  return (
    <main className="relative flex-1 overflow-x-clip bg-[#282725] text-white">
      <SiteNavbar />

      <section className="relative isolate overflow-hidden px-4 pb-16 pt-30 sm:px-6 lg:px-8 lg:pt-36">
        <Image
          src="/images/hero-location.png"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-[0.28]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.68)_50%,rgba(40,39,37,0.86)_100%),linear-gradient(180deg,rgba(40,39,37,0.2)_0%,#282725_100%)]" />

        <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-[1240px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-page-in">
            <p className="text-xs uppercase tracking-[0.34em] text-[#d7bb7b]">
              Contacto
            </p>
            <h1 className="mt-6 max-w-[760px] text-5xl leading-[0.98] text-[#f5efe1] sm:text-7xl lg:text-[92px]">
              Convierte una idea en plan de rodaje.
            </h1>
            <p className="mt-7 max-w-[560px] text-base leading-8 text-[#ded4c2]/78">
              Comparte el objetivo, fechas, ubicación y referencias. Te
              devolvemos una ruta clara para producir una pieza con criterio
              cinematográfico.
            </p>
          </div>

          <div className="animate-page-in animate-page-in-delay border border-[#d7bb7b]/16 bg-[#1d1c1a]/86 p-6 backdrop-blur">
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#d7bb7b]">
              Brief express
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {briefItems.map((item, index) => (
                <div
                  key={item}
                  className="border border-[#d7bb7b]/12 bg-[#282725]/62 p-4"
                >
                  <p className="text-[#d7bb7b]">0{index + 1}</p>
                  <p className="mt-4 text-sm text-[#f5efe1]/86">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <ScrollReveal>
            <aside className="lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
                Canal directo
              </p>
              <h2 className="mt-5 text-4xl leading-tight text-[#f5efe1] sm:text-5xl">
                Hablemos con información suficiente para avanzar.
              </h2>
              <div className="mt-8 space-y-3">
                <ContactLine
                  icon={<MapPinIcon className="h-4 w-4" />}
                  text="Madrid, España"
                />
                <ContactLine
                  icon={<PhoneIcon className="h-4 w-4" />}
                  text="+34 600 000 000"
                />
                <ContactLine
                  icon={<MailIcon className="h-4 w-4" />}
                  text="hola@jomadefilms.com"
                />
              </div>
            </aside>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <form className="border border-[#d7bb7b]/14 bg-[#201f1d] p-5 sm:p-7">
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Nombre" placeholder="Tu nombre" />
                <Input label="Email" placeholder="tu@email.com" />
              </div>

              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d7bb7b]">
                  Tipo de proyecto
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-4">
                  {projectTypes.map((type) => (
                    <label
                      key={type}
                      className="group cursor-pointer border border-[#d7bb7b]/14 bg-[#282725] px-4 py-4 text-center text-xs uppercase tracking-[0.16em] text-[#ded4c2]/72 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7bb7b]/42 hover:text-[#d7bb7b]"
                    >
                      <input type="radio" name="type" className="sr-only" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <Input label="Fecha estimada" placeholder="Mes / año" />
                <Input label="Ubicación" placeholder="Madrid, México..." />
              </div>

              <label className="mt-7 block">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#d7bb7b]">
                  Mensaje
                </span>
                <textarea
                  className="mt-2 min-h-44 w-full border border-[#d7bb7b]/16 bg-[#282725] px-4 py-3 text-sm text-[#f5efe1] outline-none transition-colors placeholder:text-[#ded4c2]/40 focus:border-[#d7bb7b]/70"
                  placeholder="Cuéntanos qué quieres producir, para quién, dónde se verá y qué resultado esperas."
                />
              </label>

              <div className="mt-7 flex flex-col gap-4 border-t border-[#d7bb7b]/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[420px] text-xs leading-6 text-[#ded4c2]/58">
                  Este formulario es visual por ahora. Cuando definan proveedor
                  de email o backend, lo conectamos a envío real.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-[#d7bb7b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Enviar brief
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-[#d7bb7b]/12 bg-[#1f1e1c] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-3">
          {["Respuesta clara", "Alcance definido", "Ruta de producción"].map(
            (item, index) => (
              <ScrollReveal key={item} delay={index * 100}>
                <div className="group border border-[#d7bb7b]/12 bg-[#201f1d] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d7bb7b]/40">
                  <SparkleIcon className="h-5 w-5 text-[#d7bb7b]" />
                  <h3 className="mt-8 text-2xl text-[#f5efe1]">{item}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#ded4c2]/70">
                    {index === 0
                      ? "Revisamos el contexto y respondemos con los próximos pasos."
                      : index === 1
                        ? "Aterrizamos necesidades, formatos, recursos y tiempos."
                        : "Convertimos la conversación en un camino viable de producción."}
                  </p>
                </div>
              </ScrollReveal>
            ),
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ContactLine({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 border border-[#d7bb7b]/12 bg-[#201f1d] px-4 py-3 text-sm text-[#ded4c2]/76">
      <span className="text-[#d7bb7b]">{icon}</span>
      {text}
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label>
      <span className="text-[10px] uppercase tracking-[0.22em] text-[#d7bb7b]">
        {label}
      </span>
      <input
        className="mt-2 w-full border border-[#d7bb7b]/16 bg-[#282725] px-4 py-3 text-sm text-[#f5efe1] outline-none transition-colors placeholder:text-[#ded4c2]/40 focus:border-[#d7bb7b]/70"
        placeholder={placeholder}
      />
    </label>
  );
}
