import type { Metadata } from "next";
import ItineraryCard from "@/components/ItineraryCard";
import LineCTA from "@/components/LineCTA";
import { itineraries } from "@/lib/itineraries";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "瑞士旅遊行程總覽｜9天冬雪奇緣、18天純鐵道深度之旅",
  description:
    "瑞士旅遊行程總覽：9天冬雪奇緣超值團（NT$86,800元起）與18天瑞士純鐵道漫遊（NT$258,000元起），也可加 LINE 免費諮詢客製化調整。",
  alternates: { canonical: `${siteConfig.url}/itineraries` },
};

export default function ItinerariesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        Itineraries
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        瑞士旅遊行程總覽
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">
        目前主打 2 條行程：小資首遊族最愛的 9 天冬雪奇緣，以及深度玩家專屬的 18 天純鐵道漫遊。每條行程都可以依照你的天數、預算與同行人數客製化調整，
        點進去看看哪一條最對味。
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {itineraries.map((itinerary) => (
          <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
        ))}
      </div>

      <div className="mt-16">
        <LineCTA
          title="這 2 條都不完全符合你的想法？"
          description="沒關係，加 LINE 好友直接跟我們說你的天數與偏好，我們可以在這些行程基礎上幫你客製化調整。"
        />
      </div>
    </div>
  );
}
