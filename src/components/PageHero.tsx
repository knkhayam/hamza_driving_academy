type PageHeroProps = {
  title: string;
  lead: string;
  kicker?: string;
};

export function PageHero({ title, lead, kicker }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-black text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(200,16,46,0.45), transparent 50%), radial-gradient(ellipse at 80% 0%, rgba(232,155,12,0.28), transparent 45%)",
        }}
        aria-hidden
      />
      <div className="container relative py-16 sm:py-20">
        {kicker ? <p className="kicker !text-brand-gold-soft">{kicker}</p> : null}
        <h1 className="section-title !text-white">{title}</h1>
        <p className="section-lead !max-w-2xl !text-white/75">{lead}</p>
      </div>
    </section>
  );
}
