"use client";

import { useState } from "react";
import {
  getGuidesByBucket,
  getGuidesByCategory,
  CATEGORY_META,
  type MonthBucket,
  type Category,
} from "@/lib/guides";
import Link from "next/link";
import MonthNav from "./MonthNav";
import CategoryTabs from "./CategoryTabs";
import GuideCard from "./GuideCard";
import FormulaCalculator from "./FormulaCalculator";
import ShareButton from "./ShareButton";
import NextMonthPreview from "./NextMonthPreview";
import AdBanner from "./AdBanner";

export default function MonthPage({ bucket }: { bucket: MonthBucket }) {
  const [activeCategory, setActiveCategory] = useState<Category>("feeding");

  const allGuides = getGuidesByBucket(bucket);
  const filteredGuides = getGuidesByCategory(allGuides, activeCategory);
  const meta = CATEGORY_META[activeCategory];

  const shareUrl = typeof window !== "undefined"
    ? `${window.location.origin}/${bucket.slug}`
    : `/${bucket.slug}`;
  const shareDescription = `${bucket.label} 아기 육아 가이드 - 수유량, 발달, 놀이방법 한눈에 확인 (출처: 소아과학회)`;

  return (
    <div className="max-w-lg mx-auto px-4 pb-8">
      <MonthNav current={bucket} />

      <header className="pt-2 pb-2">
        <h1 className="text-2xl font-bold">{bucket.label} 아기 가이드</h1>
        <p className="text-sm text-muted mt-1">
          출처 기반 육아 레퍼런스
        </p>
      </header>

      <CategoryTabs active={activeCategory} onSelect={setActiveCategory} />

      <section className="mt-4">
        <h2 className="text-lg font-semibold mb-3">
          {meta.emoji} {meta.label}
        </h2>
        <div className="space-y-3">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>

      {activeCategory === "feeding" && (
        <section className="mt-6">
          <FormulaCalculator />
        </section>
      )}

      <AdBanner slot="9987313069" />

      <section className="mt-6">
        <ShareButton
          label={`${bucket.label} 아기 육아 가이드`}
          url={shareUrl}
          description={shareDescription}
        />
      </section>

      <section className="mt-6">
        <NextMonthPreview currentBucket={bucket} />
      </section>

      <footer className="mt-8 pt-4 border-t border-border text-center space-y-3">
        <p className="text-xs text-muted">
          이 정보는 의료 조언이 아닙니다. 아기의 건강에 대한 결정은 소아과 전문의와 상담하세요.
        </p>
        <nav className="flex flex-wrap gap-4 text-xs text-muted justify-center">
          <Link href="/about" className="hover:text-accent">달콩 소개</Link>
          <Link href="/disclaimer" className="hover:text-accent">의료 면책 고지</Link>
          <Link href="/privacy" className="hover:text-accent">개인정보처리방침</Link>
          <Link href="/terms" className="hover:text-accent">이용약관</Link>
        </nav>
      </footer>
    </div>
  );
}
