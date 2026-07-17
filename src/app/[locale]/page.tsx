import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaButtons } from "../../components/CtaButtons";
import { HomeHero } from "../../components/HomeHero";
import { Reviews } from "../../components/Reviews";
import { siteConfig } from "../../lib/config";
import { getDictionary } from "../../lib/i18n/get-dictionary";
import { isLocale, locales } from "../../lib/i18n/locales";

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
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <>
      <HomeHero dict={dict} />

      <section className="section">
        <div className="container">
          <p className="kicker">{dict.home.brandSupport}</p>
          <h2 className="section-title">{dict.home.featuresTitle}</h2>
          <p className="section-lead">{dict.home.featuresLead}</p>

          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.features.map((feature) => (
              <li key={feature.title} className="border-t border-line pt-5">
                <h3 className="font-display m-0 text-xl text-brand-red">
                  {feature.title}
                </h3>
                <p className="mt-2 mb-0 text-ink-muted">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title !text-white">{dict.home.pathTitle}</h2>
          <p className="section-lead">{dict.home.pathLead}</p>

          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.home.pathSteps.map((step, index) => (
              <li key={step.label} className="border-s-2 border-brand-gold ps-4">
                <p className="m-0 text-sm text-brand-gold-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 mb-2 text-2xl">{step.label}</h3>
                <p className="m-0 text-white/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Reviews dict={dict} />

      <section className="section">
        <div className="container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker">{siteConfig.city}</p>
            <h2 className="section-title">{dict.home.ctaTitle}</h2>
            <p className="section-lead">{dict.home.ctaLead}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link
                href={`/${raw}/lessons/`}
                className="font-semibold text-brand-red underline-offset-4 hover:underline"
              >
                {dict.common.learnMore}
              </Link>
              <Link
                href={`/${raw}/areas/`}
                className="font-semibold text-brand-red underline-offset-4 hover:underline"
              >
                {dict.common.viewAreas}
              </Link>
            </div>
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
