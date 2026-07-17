"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "../lib/i18n/dictionaries/en";
import type { Locale } from "../lib/i18n/locales";
import { siteConfig, withBasePath } from "../lib/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: `${base}/`, label: dict.nav.home },
    { href: `${base}/about/`, label: dict.nav.about },
    { href: `${base}/lessons/`, label: dict.nav.lessons },
    { href: `${base}/areas/`, label: dict.nav.areas },
    { href: `${base}/contact/`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-black/95 text-white backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-3">
        <Link href={`${base}/`} className="flex items-center gap-3 shrink-0">
          <Image
            src={withBasePath("/images/logo.png")}
            alt={siteConfig.name}
            width={56}
            height={56}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="font-display text-base leading-tight sm:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-brand-gold-soft"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link href={`${base}/contact/`} className="btn btn-primary !min-h-10 !px-4 !text-sm">
            {dict.nav.book}
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-white/25"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="block h-0.5 bg-white" />
            <span className="block h-0.5 bg-white" />
            <span className="block h-0.5 bg-white" />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-brand-black px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-base text-white/90"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <LanguageSwitcher locale={locale} />
            <Link
              href={`${base}/contact/`}
              className="btn btn-primary"
              onClick={() => setOpen(false)}
            >
              {dict.nav.book}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
