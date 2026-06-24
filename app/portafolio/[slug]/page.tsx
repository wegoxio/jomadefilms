import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { portfolioProjects } from "@/components/home/content";
import { ArrowRightIcon } from "@/components/home/icons";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteNavbar } from "@/components/navigation/site-navbar";
import { PortfolioDetailGallery } from "@/components/pages/portfolio-detail-gallery";

type PortfolioDetailRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PortfolioDetailRouteProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Jomade Films`,
    description: project.description,
  };
}

export default async function PortfolioDetailRoute({
  params,
}: PortfolioDetailRouteProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative flex-1 overflow-x-clip bg-[#282725] text-white">
      <SiteNavbar />

      <section className="relative isolate overflow-hidden px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-[0.26]"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.58)_45%,#282725_100%),linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.34)_100%)]" />

        <div className="mx-auto max-w-[1240px]">
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d7bb7b]"
          >
            <ArrowRightIcon className="h-3.5 w-3.5 rotate-180" />
            Portafolio
          </Link>

          <div className="mt-14 max-w-[900px] animate-page-in">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d7bb7b]">
              {project.category}
            </p>
            <h1 className="mt-5 text-6xl leading-[0.9] text-[#f5efe1] sm:text-8xl lg:text-[112px]">
              {project.title}
            </h1>
            <p className="mt-7 max-w-[720px] text-lg leading-8 text-[#ded4c2]/78">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <PortfolioDetailGallery
              assets={project.gallery}
              title={project.title}
            />
          </div>

          <aside className="border border-[#d7bb7b]/14 bg-[#201f1d] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[#d7bb7b]">
              Detalles del proyecto
            </p>
            <p className="mt-6 text-base leading-8 text-[#ded4c2]/78">
              {project.detail}
            </p>

            <div className="mt-8 grid gap-4 border-y border-[#d7bb7b]/12 py-7 sm:grid-cols-2">
              <ProjectFact label="Año" value={project.year} />
              <ProjectFact label="Estado" value={project.status} />
              <ProjectFact label="Cliente" value={project.client} />
              <ProjectFact label="Ubicación" value={project.location} />
            </div>

            {project.festivalHighlights?.length ? (
              <div className="mt-8 rounded-[1.1rem] border border-[#d7bb7b]/14 bg-[#171614] p-5">
                {project.festivalHighlights.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#d7bb7b]">
                      {section.title}
                    </p>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-7 text-[#ded4c2]/78"
                        >
                          <span className="mr-2 text-[#d7bb7b]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}

            {project.cast?.length ? (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                  Reparto
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.cast.map((person) => (
                    <span
                      key={person}
                      className="border border-[#d7bb7b]/16 bg-[#d7bb7b]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#f5efe1]"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                Entregables
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.deliverables.map((item) => (
                  <span
                    key={item}
                    className="border border-[#d7bb7b]/18 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d7bb7b]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[#d7bb7b]">
                Enfoque
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#d7bb7b]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#ded4c2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contacto"
              className="mt-10 inline-flex items-center gap-2 bg-[#d7bb7b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Consultar proyecto
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ProjectFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#ded4c2]/46">
        {label}
      </p>
      <p className="mt-2 text-sm text-[#f5efe1]">{value}</p>
    </div>
  );
}
