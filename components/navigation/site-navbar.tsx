"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks } from "@/components/home/content";
import { ArrowRightIcon } from "@/components/home/icons";

export function SiteNavbar() {
  const pathname = usePathname();
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
          className={`flex items-center justify-between rounded-sm px-4 py-2.5 transition-all duration-500 md:px-6 ${
            isScrolled
              ? "border border-[#d7bb7b]/28 bg-[#11100f]/88 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.42)]"
              : "border-0 bg-transparent shadow-none"
          }`}
        >
          <Link href="/" className="inline-flex items-center">
            <div className="relative h-12 w-[210px] overflow-hidden sm:h-14 sm:w-[248px]">
              <Image
                src="/brand/logo-horizontal.png"
                alt="Jomade Films"
                fill
                sizes="248px"
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
                  className="group inline-flex flex-col items-center text-[11px] uppercase tracking-[0.2em] text-[#f5efe1]/72 transition-colors duration-300 hover:text-[#d7bb7b]"
                >
                  {item.label}
                  <span
                    className={`mt-1.5 h-px transition-all duration-300 ${
                      pathname === item.href || (index === 0 && pathname === "/")
                        ? "w-8 bg-[#d7bb7b] opacity-100"
                        : "w-0 bg-[#d7bb7b] opacity-0 group-hover:w-8 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contacto"
              className="hidden items-center gap-2 rounded-sm border border-[#d7bb7b] bg-[#d7bb7b] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#090806] transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
            >
              Hablemos
              <ArrowRightIcon className="h-3 w-3" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d7bb7b]/50 bg-black/70 text-[#d7bb7b] transition-colors hover:bg-[#d7bb7b]/12 lg:hidden"
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
          <div className="rounded-sm border border-[#d7bb7b]/30 bg-[#090909]/95 p-4 backdrop-blur-xl">
            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-sm px-3 py-2 text-xs uppercase tracking-[0.18em] text-[#f5efe1]/78 transition-colors hover:bg-[#d7bb7b]/10 hover:text-[#d7bb7b]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-sm border border-[#d7bb7b] bg-[#d7bb7b] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#090806]"
            >
              Hablemos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
