import { defaultLocale } from "../lib/i18n/locales";

/**
 * Root → default locale.
 * Use a relative path so GitHub project Pages keeps /hamza_driving_academy/
 * (absolute "/en/" would jump to github.io/en/).
 */
export default function RootPage() {
  const target = `./${defaultLocale}/`;

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-black p-8 text-white">
      <div className="text-center">
        <p className="font-display text-2xl">Hamza Driving Academy</p>
        <p className="mt-3 text-white/70">
          <a className="text-brand-gold-soft underline-offset-4 hover:underline" href={target}>
            Continue to site
          </a>
        </p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(target)});`,
          }}
        />
      </div>
    </main>
  );
}
