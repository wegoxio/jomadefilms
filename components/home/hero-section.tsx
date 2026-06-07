"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { heroSlides } from "@/components/home/content";
import { ArrowRightIcon, PlayIcon } from "@/components/home/icons";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setActiveSlide(index);
  const goPrevious = () =>
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1,
    );
  const goNext = () =>
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  const slide = heroSlides[activeSlide];

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[92svh] overflow-hidden bg-[#030303] px-4 pt-28 text-white sm:px-6 lg:px-8"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 z-0 transition-[opacity,transform] duration-[1400ms] ease-out ${
            index === activeSlide
              ? "scale-100 opacity-100"
              : "scale-[1.025] opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.62)_42%,rgba(0,0,0,0.22)_100%),linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.3)_54%,#050505_100%)]" />

      <div className="relative z-20 mx-auto grid min-h-[calc(92svh-7rem)] max-w-[1240px] items-center pb-20">
        <div key={slide.src} className="max-w-[680px]">
          <p className="hero-reveal text-xs uppercase tracking-[0.28em] text-[#d7bb7b]">
            {slide.eyebrow}
          </p>
          <h1 className="hero-reveal hero-reveal-delay-1 mt-5 max-w-[760px] text-4xl leading-[1.04] tracking-normal text-[#f5efe1] sm:text-6xl lg:text-[76px]">
            {slide.title}
          </h1>
          <p className="hero-reveal hero-reveal-delay-2 mt-6 max-w-[540px] text-sm leading-7 text-[#ded4c2]/82 sm:text-base">
            {slide.description}
          </p>

          <div className="hero-reveal hero-reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/portafolio"
              className="hero-primary-cta inline-flex items-center gap-2 rounded-sm border border-[#d7bb7b]/90 bg-[#d7bb7b] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <PlayIcon className="h-3 w-3" />
              Ver portafolio
            </Link>
            <Link
              href="/filosofia"
              className="inline-flex items-center gap-2 rounded-sm border border-[#f5efe1]/20 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#f5efe1]/86 transition-colors hover:border-[#d7bb7b]/70 hover:text-[#d7bb7b]"
            >
              Filosofia
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Slide anterior"
        onClick={goPrevious}
        className="absolute left-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#f5efe1]/16 bg-black/35 text-[#f5efe1] backdrop-blur transition-colors hover:border-[#d7bb7b]/70 hover:text-[#d7bb7b] md:inline-flex"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="m12 5-5 5 5 5" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Siguiente slide"
        onClick={goNext}
        className="absolute right-4 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center border border-[#f5efe1]/16 bg-black/35 text-[#f5efe1] backdrop-blur transition-colors hover:border-[#d7bb7b]/70 hover:text-[#d7bb7b] md:inline-flex"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="m8 5 5 5-5 5" />
        </svg>
      </button>

      <div className="absolute bottom-9 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ver slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? "w-10 bg-[#d7bb7b]"
                : "w-1.5 bg-[#f5efe1]/42 hover:bg-[#f5efe1]/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
