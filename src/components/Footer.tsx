import Link from "next/link";
import { phoneHref, siteConfig, whatsappHref } from "../lib/config";
import type { Dictionary } from "../lib/i18n/dictionaries/en";
import type { Locale } from "../lib/i18n/locales";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const base = `/${locale}`;

  return (
    <footer className="border-t border-white/10 bg-brand-black text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl">{siteConfig.name}</p>
          <p className="mt-2 max-w-sm text-white/70">{dict.footer.tagline}</p>
          <p className="mt-4 text-sm text-brand-gold-soft">{dict.common.limitedSlots}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
            {dict.nav.home}
          </p>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link href={`${base}/about/`} className="hover:text-brand-gold-soft">
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link href={`${base}/lessons/`} className="hover:text-brand-gold-soft">
                {dict.nav.lessons}
              </Link>
            </li>
            <li>
              <Link href={`${base}/areas/`} className="hover:text-brand-gold-soft">
                {dict.nav.areas}
              </Link>
            </li>
            <li>
              <Link href={`${base}/contact/`} className="hover:text-brand-gold-soft">
                {dict.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/50">
            {dict.nav.contact}
          </p>
          <ul className="space-y-2 text-white/80">
            <li>
              <a href={phoneHref()} className="hover:text-brand-gold-soft">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold-soft"
              >
                WhatsApp
              </a>
            </li>
            {siteConfig.email ? (
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-gold-soft"
                >
                  {siteConfig.email}
                </a>
              </li>
            ) : null}
            <li className="text-sm leading-relaxed text-white/65">
              {siteConfig.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{dict.footer.rights}</p>
          <p>{dict.footer.privacy}</p>
        </div>
      </div>
    </footer>
  );
}
