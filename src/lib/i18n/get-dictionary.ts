import type { Locale } from "./locales";
import type { Dictionary } from "./dictionaries/en";
import { en } from "./dictionaries/en";
import { ur } from "./dictionaries/ur";

const dictionaries: Record<Locale, Dictionary> = { en, ur };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
