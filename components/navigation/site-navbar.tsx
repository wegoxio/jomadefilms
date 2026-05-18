"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navLinks } from "@/components/home/content";

export function SiteNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-4 ${
        isScrolled ? "pt-2.5 sm:pt-3.5" : "pt-4 sm:pt-6"
      }`}
    >
      <div className="mx-auto max-w-[1240px]">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 md:px-6 ${
            isScrolled
              ? "border border-[#bd9953]/45 bg-[#080808]/90 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.55)]"
              : "border-0 bg-transparent shadow-none"
          }`}
        >
          <Link href="#inicio" className="inline-flex items-center">
            <div className="relative h-12 w-[152px] overflow-hidden sm:h-14 sm:w-[176px]">
              <Image
                src="/logo.png"
                alt="Jomade Films"
                fill
                sizes="176px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex flex-col items-center text-[11px] uppercase tracking-[0.2em] text-white/72 transition-colors hover:text-[#bd9953]"
                >
                  {item.label}
                  <span
                    className={`mt-1 h-1 w-1 rounded-full transition-opacity ${
                      index === 0
                        ? "bg-[#bd9953] opacity-100"
                        : "bg-[#bd9953] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="#contacto"
              className="hidden rounded-md border border-[#bd9953] bg-gradient-to-r from-[#bd9953] to-[#68522c] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
            >
              Hablemos
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#bd9953]/50 bg-black/70 text-[#bd9953] transition-colors hover:bg-[#bd9953]/12 lg:hidden"
            >
              {isMobileMenuOpen ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 lg:hidden ${
            isMobileMenuOpen
              ? "mt-2 max-h-[360px] opacity-100"
              : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-[#bd9953]/30 bg-[#090909]/95 p-4 backdrop-blur-xl">
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/78 transition-colors hover:bg-[#bd9953]/10 hover:text-[#bd9953]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-[#bd9953] bg-gradient-to-r from-[#bd9953] to-[#68522c] px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-black"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
