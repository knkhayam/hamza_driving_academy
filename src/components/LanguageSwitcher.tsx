"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "../lib/i18n/locales";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const rest = pathname?.replace(/^\/(en|ur)/, "") || "/";

  return (
    <div className="flex items-center gap-1 rounded-sm border border-white/20 bg-black/30 p-1 text-sm">
      {locales.map((code) => {
        const href = `/${code}${rest === "/" ? "/" : rest}`;
        const active = code === locale;
        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            className={`rounded-sm px-2.5 py-1 transition-colors ${
              active
                ? "bg-brand-gold text-brand-black font-semibold"
                : "text-white/85 hover:text-brand-gold-soft"
            }`}
            aria-current={active ? "true" : undefined}
          >
            {localeLabels[code]}
          </Link>
        );
      })}
    </div>
  );
}
