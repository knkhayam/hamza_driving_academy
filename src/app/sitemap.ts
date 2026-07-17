import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/config";
import { locales } from "../lib/i18n/locales";

const paths = ["", "about/", "lessons/", "areas/", "contact/"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of paths) {
      entries.push({
        url: `${siteConfig.url}/${locale}/${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
}
