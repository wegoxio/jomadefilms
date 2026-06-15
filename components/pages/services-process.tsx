"use client";

import { useEffect, useRef, useState } from "react";

import type { ProcessStep } from "@/components/home/types";
import { ProcessIcon } from "@/components/home/icons";

type ServicesProcessProps = {
  steps: ProcessStep[];
};

const descriptions = [
  "Ordenamos objetivo, tono, alcance y referencias para que la idea tenga dirección desde el inicio.",
  "Convertimos la intención en plan: equipo, tiempos, recursos, narrativa y necesidades técnicas.",
  "Ejecutamos rodaje con criterio visual, cuidado del detalle y control de ritmo en set.",
  "Damos forma final con montaje, color, sonido, ritmo y acabado para cada canal.",
  "Preparamos formatos, piezas finales y materiales listos para difusión o presentación profesional.",
];

export function ServicesProcess({ steps }: ServicesProcessProps) {
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    () => steps.map(() => false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number((entry.target as HTMLElement).dataset.index);

          setVisibleItems((current) => {
            if (current[index]) {
              return current;
            }

            const next = [...current];
            next[index] = true;
            return next;
          });
        });
      },
      { rootMargin: "0px 0px -24% 0px", threshold: 0.3 },
    );

    itemRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  const activeCount = visibleItems.filter(Boolean).length;
  const progress =
    steps.length > 1 ? ((activeCount - 1) / (steps.length - 1)) * 100 : 0;

  return (
    <div className="relative mt-12">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#d7bb7b]/14 lg:block" />
      <div
        className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#d7bb7b] transition-[height] duration-700 lg:block"
        style={{ height: `${Math.max(0, progress)}%` }}
      />

      <div className="space-y-8">
        {steps.map((step, index) => {
          const isVisible = visibleItems[index];
          const isRight = index % 2 === 1;

          return (
            <article
              key={step.label}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              data-index={index}
              className={`relative grid gap-5 transition-all duration-700 lg:grid-cols-2 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={`group relative overflow-hidden border border-[#d7bb7b]/12 bg-[#201f1d] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d7bb7b]/42 hover:bg-[#23211f] ${
                  isRight ? "lg:col-start-2" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#d7bb7b] transition-transform duration-700 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center border border-[#d7bb7b]/24 text-[#d7bb7b] transition-colors duration-500 group-hover:bg-[#d7bb7b] group-hover:text-[#090806]">
                    <ProcessIcon icon={step.icon} />
                  </span>
                  <span className="text-6xl leading-none text-[#d7bb7b]/22">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-3xl leading-tight text-[#f5efe1]">
                  {step.label}
                </h3>
                <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#ded4c2]/72">
                  {descriptions[index]}
                </p>
              </div>

              <span
                className={`absolute left-1/2 top-8 hidden h-9 w-9 -translate-x-1/2 items-center justify-center border text-[10px] transition-all duration-700 lg:flex ${
                  isVisible
                    ? "scale-100 border-[#d7bb7b] bg-[#d7bb7b] text-[#090806]"
                    : "scale-75 border-[#d7bb7b]/28 bg-[#282725] text-[#d7bb7b]/38"
                }`}
              >
                0{index + 1}
              </span>
            </article>
          );
        })}
      </div>
    </div>
  );
}
