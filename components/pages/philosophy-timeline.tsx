"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PhilosophyTimelineProps = {
  items: string[];
  images: string[];
};

const descriptions = [
  "La identidad se define antes de encender la camara: tono, intencion y mirada.",
  "La sensibilidad narrativa se traduce en ritmo, atmosfera y decisiones visuales precisas.",
  "El equipo trabaja de forma integral para que direccion, produccion y postproduccion avancen juntas.",
  "Cada pieza se piensa con ambicion profesional y potencial de recorrido real.",
];

export function PhilosophyTimeline({ items, images }: PhilosophyTimelineProps) {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    () => items.map(() => false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);

          if (entry.isIntersecting) {
            setVisibleItems((current) => {
              if (current[index]) {
                return current;
              }

              const next = [...current];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { rootMargin: "0px 0px -28% 0px", threshold: 0.34 },
    );

    itemRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  const activeCount = visibleItems.filter(Boolean).length;
  const progress = items.length > 1 ? ((activeCount - 1) / (items.length - 1)) * 100 : 0;

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-[#d7bb7b]/14 md:block" />
      <div
        className="absolute left-4 top-0 hidden w-px origin-top bg-[#d7bb7b] transition-[height] duration-700 md:block"
        style={{ height: `${Math.max(0, progress)}%` }}
      />

      <div className="space-y-7">
        {items.map((item, index) => {
          const isVisible = visibleItems[index];

          return (
            <article
              key={item}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              data-index={index}
              className={`timeline-step group relative grid gap-5 border border-[#d7bb7b]/12 bg-[#201f1d] p-5 transition-all duration-700 md:ml-12 md:grid-cols-[0.48fr_1fr] ${
                index % 2 === 1 ? "lg:translate-x-10" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              } hover:border-[#d7bb7b]/42 hover:bg-[#23211f]`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span
                className={`absolute -left-[45px] top-7 hidden h-8 w-8 items-center justify-center border text-[10px] transition-all duration-700 md:flex ${
                  isVisible
                    ? "scale-100 border-[#d7bb7b] bg-[#d7bb7b] text-[#090806]"
                    : "scale-75 border-[#d7bb7b]/30 bg-[#282725] text-[#d7bb7b]/42"
                } group-hover:bg-[#d7bb7b] group-hover:text-[#090806]`}
              >
                0{index + 1}
              </span>

              <div className="relative min-h-40 overflow-hidden bg-[#171614]">
                <Image
                  src={images[index]}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22vw, 100vw"
                  className="object-cover opacity-72 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.66)_100%)]" />
                <p
                  className={`absolute bottom-4 left-4 text-6xl leading-none text-[#d7bb7b]/32 transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                >
                  0{index + 1}
                </p>
              </div>

              <div className="flex flex-col justify-center py-2">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d7bb7b]">
                  Etapa 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl leading-tight text-[#f5efe1]">
                  {item}
                </h3>
                <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#ded4c2]/70">
                  {descriptions[index]}
                </p>
                <div
                  className={`mt-6 h-px bg-[#d7bb7b]/50 transition-all duration-700 ${
                    isVisible ? "w-20" : "w-0"
                  } group-hover:w-28`}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
