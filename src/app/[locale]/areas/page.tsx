import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaButtons } from "../../../components/CtaButtons";
import { PageHero } from "../../../components/PageHero";
import { siteConfig } from "../../../lib/config";
import { getDictionary } from "../../../lib/i18n/get-dictionary";
import { isLocale, locales } from "../../../lib/i18n/locales";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.areasTitle,
    description: dict.meta.areasDescription,
  };
}

export default async function AreasPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <>
      <PageHero title={dict.areas.title} lead={dict.areas.lead} />

      <section className="section">
        <div className="container">
          <p className="section-lead !max-w-3xl">{dict.areas.intro}</p>

          <ul className="mt-10 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {siteConfig.areas.map((area) => (
              <li
                key={area}
                className="border-b-2 border-brand-red bg-bg-elevated px-4 py-5 text-center font-semibold"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">{dict.areas.ctaLead}</h2>
            <p className="section-lead">
              {siteConfig.name} · {siteConfig.city} · {siteConfig.openingHours}
            </p>
          </div>
          <CtaButtons
            callLabel={dict.common.call}
            whatsappLabel={dict.common.whatsapp}
          />
        </div>
      </section>
    </>
  );
}
