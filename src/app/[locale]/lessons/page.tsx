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
    title: dict.meta.lessonsTitle,
    description: dict.meta.lessonsDescription,
  };
}

export default async function LessonsPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <>
      <PageHero title={dict.lessons.title} lead={dict.lessons.lead} />

      <section className="section">
        <div className="container">
          <p className="section-lead !max-w-3xl">{dict.lessons.intro}</p>

          <h2 className="section-title mt-12">{dict.lessons.typesTitle}</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {dict.lessons.types.map((type) => (
              <li
                key={type.title}
                className="border border-line bg-bg-elevated p-6"
              >
                <h3 className="font-display m-0 text-xl text-brand-red">
                  {type.title}
                </h3>
                <p className="mt-3 mb-0 text-ink-muted">{type.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="section-title !text-white">{dict.lessons.hoursTitle}</h2>
            <p className="section-lead">{dict.lessons.hoursBody}</p>
            <p className="mt-6 mb-0 text-brand-gold-soft">{dict.lessons.pricingNote}</p>
          </div>
          <div className="border border-white/15 p-6">
            <p className="m-0 text-sm uppercase tracking-wider text-white/50">
              {siteConfig.name}
            </p>
            <p className="font-display mt-3 mb-1 text-3xl">{siteConfig.openingHours}</p>
            <p className="m-0 text-white/70">{siteConfig.city}</p>
            <div className="mt-6">
              <CtaButtons
                callLabel={dict.common.call}
                whatsappLabel={dict.common.whatsapp}
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
