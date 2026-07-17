function env(key: string, fallback = ""): string {
  return process.env[key]?.trim() || fallback;
}

function envList(key: string, fallback: string[]): string[] {
  const raw = process.env[key]?.trim();
  if (!raw) return fallback;
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export const siteConfig = {
  name: env("NEXT_PUBLIC_SITE_NAME", "Hamza Driving Academy"),
  url: env("NEXT_PUBLIC_SITE_URL", "https://hamza-driving-academy.pages.dev").replace(
    /\/$/,
    "",
  ),
  tagline: env(
    "NEXT_PUBLIC_TAGLINE",
    "Learn Today, Drive Tomorrow, Succeed Forever",
  ),
  ctaText: env("NEXT_PUBLIC_CTA_TEXT", "Call now to book your lessons"),
  phone: env("NEXT_PUBLIC_PHONE", "07438431446"),
  whatsapp: env("NEXT_PUBLIC_WHATSAPP", "447438431446"),
  email: env("NEXT_PUBLIC_EMAIL"),
  address: env(
    "NEXT_PUBLIC_ADDRESS",
    "109 Littleover Ln, Littleover, Derby DE23 6JJ",
  ),
  city: env("NEXT_PUBLIC_CITY", "Derby"),
  mapsUrl: env(
    "NEXT_PUBLIC_MAPS_URL",
    "https://www.google.com/maps/place/Hamza+Driving+Academy/@52.9004932,-1.5001285,17z",
  ),
  reviewsUrl: env(
    "NEXT_PUBLIC_REVIEWS_URL",
    env(
      "NEXT_PUBLIC_MAPS_URL",
      "https://www.google.com/maps/place/Hamza+Driving+Academy/@52.9004932,-1.5001285,17z",
    ),
  ),
  googlePlaceId: env("NEXT_PUBLIC_GOOGLE_PLACE_ID"),
  instructorName: env("NEXT_PUBLIC_INSTRUCTOR_NAME", "Hamza"),
  experienceYears: env("NEXT_PUBLIC_EXPERIENCE_YEARS", "5"),
  openingHours: env("NEXT_PUBLIC_OPENING_HOURS", "6am to 9pm"),
  areas: envList("NEXT_PUBLIC_AREAS", [
    "Derby",
    "Littleover",
    "Mickleover",
    "Normanton",
    "Sunny Hill",
    "Allenton",
    "Sinfin",
    "Osmaston",
    "Chellaston",
    "Alvaston",
  ]),
  showReviews: env("NEXT_PUBLIC_SHOW_REVIEWS", "true") !== "false",
} as const;

export function phoneHref(phone = siteConfig.phone): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function whatsappHref(
  message?: string,
  whatsapp = siteConfig.whatsapp,
): string {
  const base = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
