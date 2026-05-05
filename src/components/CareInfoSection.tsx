import {
  MONTH_CARE_INFO,
  WARNING_SOURCES,
  type MonthBucket,
} from "@/lib/guides";

export default function CareInfoSection({ bucket }: { bucket: MonthBucket }) {
  const info = MONTH_CARE_INFO[bucket.slug];

  if (!info) return null;

  return (
    <section className="mt-4 space-y-3" aria-label="건강 일정과 상담 신호">
      <div className="bg-card border border-border rounded-lg p-4">
        <h2 className="text-lg font-semibold">이번 달 체크 일정</h2>
        <p className="text-xs text-muted mt-1">
          개인별 접종일은 이전 접종일과 백신 종류에 따라 달라질 수 있어요.
        </p>
        <ul className="mt-3 space-y-3">
          {info.schedules.map((item) => (
            <li key={item.title} className="text-sm">
              <div className="font-semibold">{item.title}</div>
              <p className="text-muted mt-1 leading-relaxed">{item.detail}</p>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent underline mt-1 inline-block"
              >
                출처: {item.sourceName}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card border border-border rounded-lg p-4">
        <h2 className="text-lg font-semibold">이럴 땐 소아과 상담</h2>
        <p className="text-xs text-muted mt-1">
          아래 신호가 있으면 진료가 필요할 수 있어요. 위급해 보이면 119 또는
          응급실을 이용하세요.
        </p>
        <ul className="mt-3 space-y-2">
          {info.warnings.map((item) => (
            <li key={item.text} className="flex gap-2 text-sm leading-relaxed">
              <span
                className={
                  item.urgency === "now"
                    ? "text-red-600 font-semibold shrink-0"
                    : "text-accent font-semibold shrink-0"
                }
              >
                {item.urgency === "now" ? "즉시" : "상담"}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 text-xs text-muted">
          출처:{" "}
          {WARNING_SOURCES.map((source, index) => (
            <span key={source.sourceUrl}>
              {index > 0 && " · "}
              <a
                href={source.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                {source.sourceName}
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
