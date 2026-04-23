import { MONTH_BUCKETS } from "@/lib/guides";
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dalkong-one.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const monthPages = MONTH_BUCKETS.map((bucket) => ({
    url: `${BASE_URL}/${bucket.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticPages = ["/about", "/disclaimer", "/privacy", "/terms"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })
  );

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...monthPages,
    ...staticPages,
  ];
}
