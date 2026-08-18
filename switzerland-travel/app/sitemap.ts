import type { MetadataRoute } from "next";
import { getAllItinerarySlugs } from "@/lib/itineraries";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/guide`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/itineraries`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/about`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const itineraryRoutes: MetadataRoute.Sitemap = getAllItinerarySlugs().map((slug) => ({
    url: `${siteConfig.url}/itineraries/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...itineraryRoutes];
}
