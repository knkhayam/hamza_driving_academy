"use client";

import { useEffect } from "react";
import type { Locale } from "../lib/i18n/locales";
import { isRtl } from "../lib/i18n/locales";

type LocaleDocumentAttrsProps = {
  locale: Locale;
};

export function LocaleDocumentAttrs({ locale }: LocaleDocumentAttrsProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
