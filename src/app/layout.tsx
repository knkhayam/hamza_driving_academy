import type { Metadata } from "next";
import { Barlow, Noto_Nastaliq_Urdu, Oswald } from "next/font/google";
import { withBasePath } from "../lib/config";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-noto-nastaliq",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://knkhayam.github.io/hamza_driving_academy",
  ),
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico") },
      {
        url: withBasePath("/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: withBasePath("/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [{ url: withBasePath("/apple-touch-icon.png"), sizes: "180x180" }],
  },
  manifest: withBasePath("/site.webmanifest"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${barlow.variable} ${notoNastaliq.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
