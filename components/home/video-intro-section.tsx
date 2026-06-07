import { PlayIcon } from "@/components/home/icons";

export function VideoIntroSection() {
  return (
    <section className="bg-[#282725] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative overflow-hidden border border-[#d7bb7b]/16 bg-[#20201e] shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
              title="Jomade Films reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 border border-[#d7bb7b]/30 bg-black/50 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#f5efe1]/78 backdrop-blur">
            <PlayIcon className="h-3 w-3 text-[#d7bb7b]" />
            Reel
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#d7bb7b]">
            Detras de camaras
          </p>
          <h2 className="mt-4 text-3xl leading-tight text-[#f5efe1] sm:text-4xl lg:text-5xl">
            Imagen, sonido y narrativa al servicio de cada historia.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#ded4c2]/76 sm:text-base">
            Trabajamos cada proyecto como una pieza cinematografica: concepto,
            planificacion, rodaje, edicion y entrega. El resultado es contenido
            con intencion visual, ritmo y una identidad clara.
          </p>
          <div className="mt-7 grid gap-3 text-sm text-[#f5efe1]/78 sm:grid-cols-2">
            {["Cine", "Eventos", "Marca", "Postproduccion"].map((item) => (
              <div
                key={item}
                className="border border-[#d7bb7b]/14 bg-[#1f1e1c]/72 px-4 py-3"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
