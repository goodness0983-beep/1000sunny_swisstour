import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBlogArticleBySlug,
  getPublishedArticleSlugs,
} from "@/lib/blog";
import LineCTA from "@/components/LineCTA";
import { siteConfig } from "@/lib/seo";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getPublishedArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getBlogArticleBySlug(params.slug);
  if (!article) return {};

  const url = `${siteConfig.url}/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url,
      publishedTime: article.published_at,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getBlogArticleBySlug(params.slug);
  if (!article) notFound();

  const paragraphs = article.content.split(/\n{2,}/).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.published_at,
    inLanguage: "zh-TW",
    author: { "@type": "Organization", name: siteConfig.shortName },
    publisher: { "@type": "Organization", name: siteConfig.shortName },
    mainEntityOfPage: `${siteConfig.url}/articles/${article.slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="麵包屑" className="font-mono text-[11px] text-ink/45">
        <Link href="/" className="focus-ring hover:text-rail">首頁</Link>
        <span className="mx-1.5">/</span>
        <Link href="/articles" className="focus-ring hover:text-rail">知識庫</Link>
      </nav>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-glacier">
        {new Date(article.published_at).toLocaleDateString("zh-TW")}
        {article.tags.length > 0 ? ` · ${article.tags.join(" · ")}` : ""}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-snug text-ink sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-8 space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-8 text-ink/85">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-16">
        <LineCTA />
      </div>
    </article>
  );
}
