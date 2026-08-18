import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingLineButton from "@/components/FloatingLineButton";
import { siteConfig, lineConfig } from "@/lib/seo";

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif-tc",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-tc",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s｜${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: lineConfig.displayName,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: [lineConfig.addFriendUrl],
    areaServed: "Switzerland",
  };

  return (
    <html lang="zh-Hant">
      <body
        className={`${notoSerifTC.variable} ${notoSansTC.variable} ${plexMono.variable} font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingLineButton />
      </body>
    </html>
  );
}
