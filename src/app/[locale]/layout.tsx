import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookieNotice } from "../../components/CookieNotice";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { JsonLd } from "../../components/JsonLd";
import { LocaleDocumentAttrs } from "../../components/LocaleDocumentAttrs";
import { siteConfig } from "../../lib/config";
import { getDictionary } from "../../lib/i18n/get-dictionary";
import {
  isLocale,
  isRtl,
  locales,
  type Locale,
} from "../../lib/i18n/locales";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);

  return {
    title: {
      default: dict.meta.homeTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `${siteConfig.url}/${raw}/`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/`]),
      ),
    },
    openGraph: {
      type: "website",
      locale: raw === "en" ? "en_GB" : raw,
      url: `${siteConfig.url}/${raw}/`,
      siteName: siteConfig.name,
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      images: [{ url: `${siteConfig.url}/images/hda-flyer-car2.png` }],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);
  const rtl = isRtl(locale);

  return (
    <div
      lang={locale}
      dir={rtl ? "rtl" : "ltr"}
      className={`site-shell ${rtl ? "is-rtl" : ""}`}
    >
      <LocaleDocumentAttrs locale={locale} />
      <JsonLd />
      <Header locale={locale} dict={dict} />
      <main className="site-main">{children}</main>
      <Footer locale={locale} dict={dict} />
      <CookieNotice dict={dict} />
    </div>
  );
}
