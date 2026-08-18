import Link from "next/link";
import Hero from "@/components/Hero";
import ItineraryCard from "@/components/ItineraryCard";
import LineCTA from "@/components/LineCTA";
import { itineraries } from "@/lib/itineraries";
import { guideSections } from "@/lib/guide";

export default function HomePage() {
  const featured = itineraries.slice(0, 3);
  const intro = guideSections[0];

  return (
    <>
      <Hero />

      {/* 認識瑞士：導流到 /guide 的精簡介紹，兼顧首頁 SEO 內容深度 */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
          About Switzerland
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
          {intro.title}
        </h2>
        <div className="mt-4 max-w-3xl space-y-4">
          {intro.paragraphs.slice(0, 2).map((p, i) => (
            <p key={i} className="text-[15px] leading-8 text-ink/80">
              {p}
            </p>
          ))}
        </div>
        <Link
          href="/guide"
          className="focus-ring mt-4 inline-block font-mono text-[12px] font-medium text-rail hover:underline"
        >
          閱讀完整瑞士旅遊懶人包 →
        </Link>
      </section>

      {/* 精選行程 */}
      <section className="border-t border-stone/60 bg-white/40 py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
                Featured Itineraries
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
                精選旅遊行程
              </h2>
            </div>
            <Link
              href="/itineraries"
              className="focus-ring shrink-0 font-mono text-[12px] text-rail hover:underline"
            >
              查看全部 6 條行程 →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((itinerary) => (
              <ItineraryCard key={itinerary.slug} itinerary={itinerary} />
            ))}
          </div>
        </div>
      </section>

      {/* 主要 CTA 區塊 */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <LineCTA
          title="還在猶豫要怎麼排瑞士行程嗎？"
          description="加入 LINE 好友，直接跟真人顧問聊聊你的天數、預算與想去的地方，我們幫你量身規劃。"
        />
      </section>
    </>
  );
}
