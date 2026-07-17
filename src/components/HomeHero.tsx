import Image from "next/image";
import { siteConfig } from "../lib/config";
import type { Dictionary } from "../lib/i18n/dictionaries/en";
import { CtaButtons } from "./CtaButtons";

type HomeHeroProps = {
  dict: Dictionary;
};

export function HomeHero({ dict }: HomeHeroProps) {
  return (
    <section className="relative min-h-[min(92vh,880px)] overflow-hidden bg-brand-black text-white">
      <Image
        src="/images/hda-flyer-car2.png"
        alt={`${siteConfig.name} training car in ${siteConfig.city}`}
        fill
        priority
        className="object-cover object-[72%_center]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden
      />

      <div className="container relative z-10 flex min-h-[min(92vh,880px)] flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-20">
        <div className="max-w-2xl">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={120}
            height={120}
            className="mb-6 h-24 w-24 object-contain reveal sm:h-28 sm:w-28"
            priority
          />
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-gold-soft uppercase reveal reveal-delay-1">
            {siteConfig.name}
          </p>
          <h1 className="font-display mb-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl reveal reveal-delay-1">
            {dict.home.headline}
          </h1>
          <p className="mb-8 max-w-xl text-base text-white/80 sm:text-lg reveal reveal-delay-2">
            {dict.home.subhead}
          </p>
          <div className="reveal reveal-delay-2">
            <CtaButtons
              callLabel={dict.common.call}
              whatsappLabel={dict.common.whatsapp}
              variant="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
