import { notFound } from "next/navigation";
import {
  getBucketBySlug,
  getGuidesByBucket,
  MONTH_BUCKETS,
  CATEGORY_META,
} from "@/lib/guides";
import MonthPage from "@/components/MonthPage";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dalkong-one.vercel.app";

type Params = Promise<{ month: string }>;

export function generateStaticParams() {
  return MONTH_BUCKETS.map((b) => ({ month: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { month } = await params;
  const bucket = getBucketBySlug(month);
  if (!bucket) return {};

  const categories = Object.values(CATEGORY_META)
    .map((m) => m.label)
    .join(", ");

  return {
    title: `${bucket.label} 아기 육아 가이드`,
    description: `${bucket.label} 아기의 ${categories} 정보를 출처와 함께. 소아과학회, WHO 기준.`,
    openGraph: {
      title: `${bucket.label} 아기 육아 가이드 - 달콩`,
      description: `${bucket.label} 아기 육아 가이드 - 수유량, 발달, 놀이방법 한눈에 확인 (출처: 소아과학회)`,
    },
    alternates: {
      canonical: `${BASE_URL}/${bucket.slug}`,
    },
  };
}

function JsonLd({ bucket }: { bucket: { slug: string; label: string } }) {
  const guides = getGuidesByBucket(getBucketBySlug(bucket.slug)!);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${bucket.label} 아기 육아 가이드`,
    description: `${bucket.label} 아기의 수유, 발달, 인지, 놀이 정보를 출처와 함께 제공합니다.`,
    url: `${BASE_URL}/${bucket.slug}`,
    inLanguage: "ko",
    about: {
      "@type": "MedicalCondition",
      name: "영아 발달",
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: guides.slice(0, 5).map((g) => ({
        "@type": "Question",
        name: g.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${g.summary}. ${g.detail}`,
        },
      })),
    },
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Organization",
      name: "대한소아청소년과학회",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function MonthPageRoute({
  params,
}: {
  params: Params;
}) {
  const { month } = await params;
  const bucket = getBucketBySlug(month);
  if (!bucket) notFound();

  return (
    <>
      <JsonLd bucket={bucket} />
      <MonthPage bucket={bucket} />
    </>
  );
}
