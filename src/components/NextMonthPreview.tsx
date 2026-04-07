import Link from "next/link";
import {
  getNextBucket,
  getGuidesByBucket,
  type MonthBucket,
} from "@/lib/guides";

export default function NextMonthPreview({
  currentBucket,
}: {
  currentBucket: MonthBucket;
}) {
  const nextBucket = getNextBucket(currentBucket);

  if (!nextBucket) {
    return (
      <div className="bg-card border border-border rounded-lg p-4 text-center">
        <p className="text-sm text-muted">
          7~12개월 가이드가 곧 추가됩니다 ✨
        </p>
      </div>
    );
  }

  const nextGuides = getGuidesByBucket(nextBucket);
  const titles = nextGuides.slice(0, 4).map((g) => g.title);

  return (
    <Link href={`/${nextBucket.slug}`}>
      <div className="bg-card border border-border rounded-lg p-4 active:bg-accent-light transition-colors">
        <h3 className="text-sm font-semibold text-muted mb-2">
          다음 달에는...
        </h3>
        <p className="font-semibold text-accent">{nextBucket.label} 가이드</p>
        <ul className="mt-2 space-y-1">
          {titles.map((t, i) => (
            <li key={i} className="text-sm text-muted">
              → {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
