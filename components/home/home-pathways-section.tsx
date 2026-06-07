import Link from "next/link";

import { ArrowRightIcon } from "@/components/home/icons";

const pathways = [
  {
    label: "Filosofia",
    title: "Una productora nacida desde la mirada cinematografica.",
    href: "/filosofia",
  },
  {
    label: "Servicios",
    title: "Produccion, eventos, publicidad y postproduccion.",
    href: "/servicios",
  },
  {
    label: "Portafolio",
    title: "Ficcion y proyectos comerciales entre Mexico y España.",
    href: "/portafolio",
  },
];

export function HomePathwaysSection() {
  return (
    <section className="border-t border-[#d7bb7b]/12 bg-[#242321] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-4 lg:grid-cols-3">
          {pathways.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group min-h-52 border border-[#d7bb7b]/12 bg-[#201f1d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7bb7b]/36"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                {item.label}
              </p>
              <h2 className="mt-10 text-2xl leading-tight text-[#f5efe1]">
                {item.title}
              </h2>
              <p className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#d7bb7b]">
                Entrar
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
