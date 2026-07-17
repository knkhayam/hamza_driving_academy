import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaButtons } from "../../../components/CtaButtons";
import { PageHero } from "../../../components/PageHero";
import { siteConfig, withBasePath } from "../../../lib/config";
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
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  return (
    <>
      <PageHero title={dict.about.title} lead={dict.about.lead} />

      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="section-lead !max-w-none">{dict.about.body}</p>
            <h2 className="section-title mt-10">{dict.about.instructorTitle}</h2>
            <p className="section-lead !max-w-none">{dict.about.instructorBody}</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-ink-muted">Instructor</dt>
                <dd className="m-0 text-xl font-semibold">{siteConfig.instructorName}</dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-ink-muted">Experience</dt>
                <dd className="m-0 text-xl font-semibold">
                  {siteConfig.experienceYears}+ years
                </dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-ink-muted">{dict.contact.hoursLabel}</dt>
                <dd className="m-0 text-xl font-semibold">{siteConfig.openingHours}</dd>
              </div>
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-ink-muted">{dict.contact.cityLabel}</dt>
                <dd className="m-0 text-xl font-semibold">{siteConfig.city}</dd>
              </div>
            </dl>
          </div>
          <div className="relative min-h-[320px] overflow-hidden bg-brand-black">
            <Image
              src={withBasePath("/images/hda-flyer-car.png")}
              alt={`${siteConfig.name} car`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2 className="section-title">{dict.about.valuesTitle}</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {dict.about.values.map((value) => (
              <li key={value.title} className="border-t-4 border-brand-red pt-5">
                <h3 className="font-display m-0 text-xl">{value.title}</h3>
                <p className="mt-2 mb-0 text-ink-muted">{value.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CtaButtons
              callLabel={dict.common.call}
              whatsappLabel={dict.common.whatsapp}
            />
          </div>
        </div>
      </section>
    </>
  );
}
