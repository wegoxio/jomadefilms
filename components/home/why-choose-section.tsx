import { reasons, stats } from "@/components/home/content";
import { CheckIcon, SparkleIcon, StatIcon } from "@/components/home/icons";

export function WhyChooseSection() {
  return (
    <section className="border-t border-[#bd9953]/12 px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#bd9953]">
            <SparkleIcon className="h-3.5 w-3.5" />
            Por que elegirnos
          </p>
          <h2 className="mt-4 text-3xl leading-tight tracking-[0.03em] text-white/95 sm:text-5xl">
            CALIDAD. CREATIVIDAD. COMPROMISO.
          </h2>

          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm text-white/72">
                <CheckIcon />
                <span className="leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-[#bd9953]/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(189,153,83,0.24),rgba(8,8,8,0)_46%),linear-gradient(125deg,#0f0f0f,#18120d_58%,#090909)]" />
          <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#bd9953]/30" />
          <div className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#bd9953]/45" />
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1240px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-lg border border-[#bd9953]/18 bg-black/22 p-4"
          >
            <p className="inline-flex items-center gap-2 text-3xl leading-none text-[#bd9953]">
              <StatIcon icon={stat.icon} />
              {stat.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/68">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
