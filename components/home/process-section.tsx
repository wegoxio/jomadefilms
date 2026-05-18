import { processSteps } from "@/components/home/content";
import { ProcessIcon, SparkleIcon } from "@/components/home/icons";

export function ProcessSection() {
  return (
    <section className="border-t border-[#bd9953]/12 px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#bd9953]">
          <SparkleIcon className="h-3.5 w-3.5" />
          Nuestro proceso
        </p>
        <h2 className="mt-3 max-w-[600px] text-3xl leading-tight tracking-[0.03em] text-white/95 sm:text-4xl">
          ASI CONVERTIMOS TU IDEA EN UNA GRAN HISTORIA.
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <article
              key={step.label}
              className="rounded-lg border border-[#bd9953]/18 bg-black/22 px-4 py-5"
            >
              <p className="inline-flex items-center gap-2 text-sm text-[#bd9953]">
                <ProcessIcon icon={step.icon} />
                0{index + 1}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/72">
                {step.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
