import type { MetadataRoute } from "next";
import { getAllItinerarySlugs } from "@/lib/itineraries";
import { getPublishedArticleSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/guide`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/itineraries`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/articles`, changeFrequency: "daily", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const itineraryRoutes: MetadataRoute.Sitemap = getAllItinerarySlugs().map((slug) => ({
    url: `${siteConfig.url}/itineraries/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 動態拉取 Supabase 裡已發布的知識庫文章，讓新文章能自動出現在 sitemap 裡，
  // 是幫助搜尋引擎快速發現新內容的重要訊號。
  const articleSlugs = await getPublishedArticleSlugs();
  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${siteConfig.url}/articles/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...itineraryRoutes, ...articleRoutes];
}
