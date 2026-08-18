import type { Metadata } from "next";
import Link from "next/link";
import LineCTA from "@/components/LineCTA";
import { getPublishedArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

// 每小時重新驗證一次，新文章上架後最多 1 小時內會反映在列表頁，
// 同時仍享有靜態頁面的載入速度與 SEO 效益。
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "瑞士旅遊知識庫｜景點、交通、文化深度文章",
  description:
    "瑞士旅遊知識庫：持續更新的景點介紹、交通攻略、文化小知識與行程靈感，帶你更深入認識瑞士。",
  alternates: { canonical: `${siteConfig.url}/articles` },
};

export default async function ArticlesPage() {
  const articles = await getPublishedArticles();

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        Knowledge Base
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        瑞士旅遊知識庫
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">
        我們持續整理瑞士各地景點、交通、文化與行程規劃的深度文章，幫助你更了解這個國家，
        也歡迎搭配{" "}
        <Link href="/guide" className="text-rail hover:underline">
          瑞士旅遊懶人包
        </Link>{" "}
        一起閱讀。
      </p>

      {articles.length === 0 ? (
        <div className="mt-12 rounded-md border border-dashed border-stone/60 p-8 text-center">
          <p className="text-sm text-ink/60">
            知識庫文章準備中，很快就會開始每日更新。
          </p>
          <p className="mt-1 text-[12px] text-ink/40">
            想先了解瑞士旅遊，可以看看{" "}
            <Link href="/guide" className="text-rail hover:underline">
              瑞士旅遊懶人包
            </Link>
            。
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="focus-ring group block border border-stone/60 bg-white/50 p-5 transition-colors hover:border-rail"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
                {new Date(article.published_at).toLocaleDateString("zh-TW")}
                {article.tags.length > 0 ? ` · ${article.tags.join(" · ")}` : ""}
              </p>
              <h2 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-rail">
                {article.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink/65">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-16">
        <LineCTA
          title="看文章之餘，也想直接聊聊行程？"
          description="加入 LINE 好友，讓真人顧問幫你把想法變成一份可以出發的行程表。"
        />
      </div>
    </div>
  );
}
