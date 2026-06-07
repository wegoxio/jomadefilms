type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-[#d7bb7b]/12 bg-[#282725] px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-40">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="animate-page-in">
          <p className="text-xs uppercase tracking-[0.28em] text-[#d7bb7b]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-[720px] text-4xl leading-tight text-[#f5efe1] sm:text-6xl lg:text-[72px]">
            {title}
          </h1>
        </div>
        <p className="animate-page-in animate-page-in-delay max-w-[620px] text-base leading-8 text-[#ded4c2]/76">
          {description}
        </p>
      </div>
    </section>
  );
}
