import { notFound } from "next/navigation";
import {
  getBucketBySlug,
  MONTH_BUCKETS,
  CATEGORY_META,
} from "@/lib/guides";
import MonthPage from "@/components/MonthPage";
import type { Metadata } from "next";

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
    title: `${bucket.label} 아기 육아 가이드 - 달콩`,
    description: `${bucket.label} 아기의 ${categories} 정보를 출처와 함께. 소아과학회, WHO 기준.`,
    openGraph: {
      title: `${bucket.label} 아기 육아 가이드 - 달콩`,
      description: `${bucket.label} 아기 육아 가이드 - 수유량, 발달, 놀이방법 한눈에 확인 (출처: 소아과학회)`,
    },
  };
}

export default async function MonthPageRoute({
  params,
}: {
  params: Params;
}) {
  const { month } = await params;
  const bucket = getBucketBySlug(month);
  if (!bucket) notFound();

  return <MonthPage bucket={bucket} />;
}
