import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaButtons } from "../../../components/CtaButtons";
import { PageHero } from "../../../components/PageHero";
import { phoneHref, siteConfig, whatsappHref } from "../../../lib/config";
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
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = getDictionary(raw);

  type ContactRow = {
    label: string;
    value: string;
    href?: string;
    external?: boolean;
  };

  const rows: ContactRow[] = [
    {
      label: dict.contact.phoneLabel,
      value: siteConfig.phone,
      href: phoneHref(),
    },
    {
      label: dict.contact.whatsappLabel,
      value: siteConfig.phone,
      href: whatsappHref(
        `Hi ${siteConfig.name}, I'd like to book a driving lesson.`,
      ),
      external: true,
    },
  ];

  if (siteConfig.email) {
    rows.push({
      label: dict.contact.emailLabel,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    });
  }

  rows.push(
    {
      label: dict.contact.addressLabel,
      value: siteConfig.address,
      href: siteConfig.mapsUrl,
      external: true,
    },
    {
      label: dict.contact.hoursLabel,
      value: siteConfig.openingHours,
    },
    {
      label: dict.contact.cityLabel,
      value: siteConfig.city,
    },
  );

  return (
    <>
      <PageHero title={dict.contact.title} lead={dict.contact.lead} />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <ul className="m-0 grid list-none gap-0 p-0">
              {rows.map((row) => (
                <li
                  key={row.label}
                  className="grid gap-1 border-t border-line py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline"
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-lg font-semibold text-ink hover:text-brand-red"
                      {...(row.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-lg font-semibold">{row.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-muted">{dict.contact.formHint}</p>
            <div className="mt-6">
              <CtaButtons
                callLabel={dict.common.call}
                whatsappLabel={dict.common.whatsapp}
              />
            </div>
          </div>

          <div className="bg-brand-black p-6 text-white sm:p-8">
            <p className="kicker !text-brand-gold-soft">{siteConfig.ctaText}</p>
            <p className="font-display mt-2 text-3xl leading-tight">
              {dict.common.limitedSlots}
            </p>
            <p className="mt-4 text-white/70">{siteConfig.tagline}</p>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-8"
            >
              {dict.common.openMaps}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
