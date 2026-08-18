import type { Metadata } from "next";
import Link from "next/link";
import LineCTA from "@/components/LineCTA";
import { guideSections } from "@/lib/guide";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "瑞士旅遊懶人包｜認識瑞士、最佳季節、交通與預算攻略",
  description:
    "瑞士旅遊懶人包一次看：認識瑞士基本介紹、最佳旅遊季節、Swiss Travel Pass 交通攻略、消費預算與必去景點總覽，第一次規劃瑞士自由行必看。",
  alternates: { canonical: `${siteConfig.url}/guide` },
};

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        Switzerland Travel Guide
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        瑞士旅遊懶人包
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink/65">
        第一次規劃瑞士自由行，從這裡開始：認識瑞士、挑對季節、搞懂交通票券，
        再到{" "}
        <Link href="/itineraries" className="text-rail hover:underline">
          主打行程
        </Link>{" "}
        中找到適合你的安排。
      </p>

      <nav aria-label="章節導覽" className="mt-8 flex flex-wrap gap-2">
        {guideSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="focus-ring rounded-full border border-stone/60 px-3 py-1.5 font-mono text-[11px] text-ink/60 hover:border-rail hover:text-rail"
          >
            {section.title}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-14">
        {guideSections.map((section, idx) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-8 text-ink/85">
                  {p}
                </p>
              ))}
            </div>
            {idx === 2 && (
              <div className="mt-6">
                <LineCTA compact title="交通票券怎麼選最划算？" />
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-16">
        <LineCTA
          title="看完懶人包，還是不知道怎麼開始？"
          description="加入 LINE 好友，直接把你的想法告訴我們，讓真人顧問幫你把懶人包變成一份可以出發的行程表。"
        />
      </div>
    </div>
  );
}
