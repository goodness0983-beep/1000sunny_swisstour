import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  itineraries,
  getItineraryBySlug,
  getAllItinerarySlugs,
} from "@/lib/itineraries";
import LineCTA from "@/components/LineCTA";
import InquiryForm from "@/components/InquiryForm";
import { siteConfig } from "@/lib/seo";

export function generateStaticParams() {
  return getAllItinerarySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const itinerary = getItineraryBySlug(params.slug);
  if (!itinerary) return {};

  const url = `${siteConfig.url}/itineraries/${itinerary.slug}`;
  const title = `${itinerary.title}｜${itinerary.days}天瑞士旅遊行程規劃`;

  return {
    title,
    description: itinerary.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description: itinerary.summary,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: itinerary.summary,
    },
  };
}

export default function ItineraryPage({
  params,
}: {
  params: { slug: string };
}) {
  const itinerary = getItineraryBySlug(params.slug);
  if (!itinerary) notFound();

  const index = itineraries.findIndex((i) => i.slug === itinerary.slug);
  const prev = itineraries[index - 1];
  const next = itineraries[index + 1];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: itinerary.title,
    description: itinerary.summary,
    itinerary: itinerary.schedule.map((d) => ({
      "@type": "TouristAttraction",
      name: d.title,
      description: d.description,
    })),
    touristType: itinerary.theme,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "旅遊行程", item: `${siteConfig.url}/itineraries` },
      {
        "@type": "ListItem",
        position: 3,
        name: itinerary.title,
        item: `${siteConfig.url}/itineraries/${itinerary.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav aria-label="麵包屑" className="font-mono text-[11px] text-ink/45">
        <Link href="/" className="focus-ring hover:text-rail">首頁</Link>
        <span className="mx-1.5">/</span>
        <Link href="/itineraries" className="focus-ring hover:text-rail">旅遊行程</Link>
      </nav>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-glacier">
        {itinerary.theme} · {itinerary.days} 天
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-snug text-ink sm:text-4xl">
        {itinerary.title}
      </h1>
      <p className="mt-4 text-[15px] leading-8 text-ink/80">{itinerary.summary}</p>
      <p className="mt-3 font-mono text-[12px] text-ink/50">
        適合對象：{itinerary.suitFor}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {itinerary.highlights.map((h) => (
          <span
            key={h}
            className="rounded-full border border-stone/60 px-3 py-1 text-[12px] text-ink/70"
          >
            {h}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <LineCTA compact />
      </div>

      <h2 className="mt-12 font-display text-xl font-semibold text-ink">
        每日行程規劃
      </h2>
      <ol className="relative mt-6 space-y-8 border-l border-stone/60 pl-6">
        {itinerary.schedule.map((d) => (
          <li key={d.day} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-rail font-mono text-[10px] font-bold text-paper"
            >
              {d.day}
            </span>
            <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
              Day {d.day}
            </p>
            <h3 className="mt-1 font-display text-base font-semibold text-ink">
              {d.title}
            </h3>
            <p className="mt-1 text-[14px] leading-7 text-ink/75">{d.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 rounded-md border border-stone/60 bg-white/50 p-6">
        <h2 className="font-display text-lg font-semibold text-ink">
          想預約這條行程或客製化調整？
        </h2>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/65">
          留下 Email，我們會將 {itinerary.title} 的詳細報價與注意事項寄給你；
          也歡迎直接加 LINE 好友，馬上跟真人顧問聊聊細節。
        </p>
        <div className="mt-4">
          <InquiryForm itinerarySlug={itinerary.slug} />
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between gap-4 border-t border-stone/60 pt-8 font-mono text-[13px]">
        {prev ? (
          <Link href={`/itineraries/${prev.slug}`} className="focus-ring text-ink/70 hover:text-rail">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/itineraries/${next.slug}`} className="focus-ring text-right text-ink/70 hover:text-rail">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
