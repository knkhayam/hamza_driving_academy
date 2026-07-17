import { phoneHref, siteConfig, whatsappHref } from "../lib/config";

type CtaButtonsProps = {
  callLabel: string;
  whatsappLabel: string;
  whatsappMessage?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function CtaButtons({
  callLabel,
  whatsappLabel,
  whatsappMessage = `Hi ${siteConfig.name}, I'd like to book a driving lesson.`,
  variant = "light",
  className = "",
}: CtaButtonsProps) {
  const ghost = variant === "dark";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a className="btn btn-primary" href={phoneHref()}>
        {callLabel}
      </a>
      <a
        className={ghost ? "btn btn-ghost" : "btn btn-whatsapp"}
        href={whatsappHref(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {whatsappLabel}
      </a>
    </div>
  );
}
