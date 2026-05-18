import Link from "next/link";

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
    <footer className="border-t border-[#bd9953]/12 px-4 pb-10 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#bd9953]">
              Jomade Films
            </p>
            <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-white/70">
              Productora audiovisual con sede en Madrid. Creamos historias que
              conectan, inspiran y perduran.
            </p>
            <div className="mt-5 flex gap-2 text-white/68">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#bd9953]/28 transition-colors hover:border-[#bd9953]/72 hover:text-[#bd9953]"
                >
                  <SocialIcon name={social.name} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#bd9953]">
              Navegacion
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/72">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-[#bd9953]"
                  >
                    <ArrowRightIcon className="h-3 w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#bd9953]">
              Servicios
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/72">
              {serviceLinks.map((service) => (
                <li key={service} className="inline-flex items-center gap-2">
                  <ArrowRightIcon className="h-3 w-3 text-[#bd9953]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#bd9953]">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/72">
              <li className="inline-flex items-center gap-2">
                <MapPinIcon className="h-3.5 w-3.5 text-[#bd9953]" />
                Madrid, Espana
              </li>
              <li className="inline-flex items-center gap-2">
                <PhoneIcon className="h-3.5 w-3.5 text-[#bd9953]" />
                +34 600 000 000
              </li>
              <li className="inline-flex items-center gap-2">
                <MailIcon className="h-3.5 w-3.5 text-[#bd9953]" />
                hola@jomadefilms.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#bd9953]/14 pt-5 text-xs text-white/50">
          (c) 2026 Jomade Films SL. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
