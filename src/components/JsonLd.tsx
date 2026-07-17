import { siteConfig } from "../lib/config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email || undefined,
    image: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "109 Littleover Ln",
      addressLocality: "Littleover",
      addressRegion: "Derby",
      postalCode: "DE23 6JJ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.90049,
      longitude: -1.4975536,
    },
    openingHours: "Mo-Su 06:00-21:00",
    areaServed: siteConfig.areas.map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs: [siteConfig.mapsUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
