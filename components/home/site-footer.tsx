import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { navLinks, serviceLinks, socialLinks } from "@/components/home/content";
import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SocialIcon,
} from "@/components/home/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d7bb7b]/12 bg-[#201f1d] px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 border-b border-[#d7bb7b]/12 pb-10 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <Link href="/" className="relative block h-14 w-[250px]">
              <Image
                src="/brand/logo-horizontal.png"
                alt="Jomade Films"
                fill
                sizes="250px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-[340px] text-sm leading-7 text-[#ded4c2]/72">
              Productora audiovisual con sede en Madrid. Cine, eventos y marca
              con una mirada narrativa y una ejecucion cuidada.
            </p>
            <div className="mt-6 flex gap-2 text-[#f5efe1]/68">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center border border-[#d7bb7b]/22 transition-colors duration-300 hover:border-[#d7bb7b]/70 hover:bg-[#d7bb7b]/8 hover:text-[#d7bb7b]"
                >
                  <SocialIcon name={social.name} />
                </Link>
              ))}
            </div>
          </div>

          <FooterGroup title="Mapa">
            {navLinks.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterGroup>

          <FooterGroup title="Servicios">
            {serviceLinks.map((service) => (
              <li key={service} className="flex items-center gap-2">
                <ArrowRightIcon className="h-3 w-3 text-[#d7bb7b]/70" />
                <span>{service}</span>
              </li>
            ))}
          </FooterGroup>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#d7bb7b]">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[#ded4c2]/72">
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-3.5 w-3.5 text-[#d7bb7b]" />
                Madrid, Espana
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-3.5 w-3.5 text-[#d7bb7b]" />
                +34 600 000 000
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-3.5 w-3.5 text-[#d7bb7b]" />
                hola@jomadefilms.com
              </li>
            </ul>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 border border-[#d7bb7b]/34 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#d7bb7b] transition-colors duration-300 hover:border-[#d7bb7b] hover:bg-[#d7bb7b]/8"
            >
              Formulario
              <ArrowRightIcon className="h-3 w-3" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-[#ded4c2]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Jomade Films SL. Todos los derechos reservados.</p>
          <p className="uppercase tracking-[0.18em] text-[#d7bb7b]/66">
            Cine / Eventos / Marca
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.22em] text-[#d7bb7b]">
        {title}
      </p>
      <ul className="mt-5 space-y-2.5 text-sm text-[#ded4c2]/72">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#d7bb7b]"
      >
        <ArrowRightIcon className="h-3 w-3 text-[#d7bb7b]/70 transition-transform duration-300 group-hover:translate-x-0.5" />
        {children}
      </Link>
    </li>
  );
}
