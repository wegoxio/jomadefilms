import { SparkleIcon } from "@/components/home/icons";

export function TestimonialsSection() {
  return (
    <section className="border-t border-[#bd9953]/12 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#bd9953]">
          <SparkleIcon className="h-3.5 w-3.5" />
          Lo que dicen nuestros clientes
        </p>
        <blockquote className="mt-5 text-2xl leading-snug text-white/92 sm:text-3xl">
          &quot;Trabajar con Jomade Films es trabajar con un equipo que entiende
          la emocion, el detalle y la excelencia.&quot;
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/62">
          Marta Cruz - Directora de Marketing
        </p>
      </div>
    </section>
  );
}
