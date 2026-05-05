import Link from "next/link";
import { MONTH_BUCKETS, CATEGORY_META } from "@/lib/guides";
import BirthdateForm from "@/components/BirthdateForm";

const SOURCES = [
  {
    name: "대한소아청소년과학회",
    desc: "국내 소아과 전문의 학회. 영아 수유·발달 표준 가이드 제공.",
    url: "https://www.pediatrics.or.kr",
  },
  {
    name: "아이사랑 포털 (childcare.go.kr)",
    desc: "보건복지부 운영. 월령별 영유아 건강·발달 공식 자료.",
    url: "https://www.childcare.go.kr",
  },
  {
    name: "질병관리청 국가건강정보포털",
    desc: "이유식·예방접종 등 공공 의료 정보.",
    url: "https://health.kdca.go.kr",
  },
  {
    name: "WHO (세계보건기구)",
    desc: "모유수유·성장곡선 국제 기준.",
    url: "https://www.who.int",
  },
];

const FAQ = [
  {
    q: "달콩은 어떤 서비스인가요?",
    a: "생후 0~6개월 아기의 월령별 수유·발달·인지·놀이 정보를 출처와 함께 한 화면에서 볼 수 있는 가이드입니다. 아기 생년월일을 입력하면 현재 월령에 맞는 정보만 보여드려요.",
  },
  {
    q: "정보의 출처는 어디인가요?",
    a: "모든 가이드는 대한소아청소년과학회, 아이사랑 포털, 질병관리청, WHO 등 공신력 있는 기관의 자료를 바탕으로 작성되며, 각 항목마다 원본 링크가 표기됩니다.",
  },
  {
    q: "의료 상담을 대신할 수 있나요?",
    a: "아니요. 달콩이 제공하는 내용은 일반 참고용 정보이며, 의료 조언이 아닙니다. 아기의 건강 상태나 이상 증상이 의심되면 반드시 소아과 전문의와 상담하세요.",
  },
  {
    q: "왜 생후 6개월까지만 지원하나요?",
    a: "현재 72개 항목의 월령별 가이드가 신생아~6개월 구간에 집중되어 있어, 검증된 범위만 우선 공개했습니다. 이후 12개월·24개월 범위까지 확장할 예정입니다.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8 lg:max-w-6xl lg:px-6 lg:py-14">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-10">
        <header className="mb-7 text-center lg:mb-0 lg:pt-8 lg:text-left">
          <p className="mb-2 text-xs font-semibold text-accent">
            0~6개월 아기 월령 가이드
          </p>
          <h1 className="text-4xl font-bold tracking-normal lg:text-6xl">
            달콩
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted lg:text-lg">
            아기 생년월일만 입력하면,
            <br />
            월령별 육아 가이드를 바로 보여드려요.
          </p>
          <ul className="mt-5 grid grid-cols-3 gap-2 text-xs lg:max-w-md">
            <li className="rounded-lg border border-border bg-card px-2 py-2 font-semibold">
              72개 항목
            </li>
            <li className="rounded-lg border border-border bg-card px-2 py-2 font-semibold">
              출처 링크
            </li>
            <li className="rounded-lg border border-border bg-card px-2 py-2 font-semibold">
              저장 없음
            </li>
          </ul>
        </header>

        <section
          aria-label="생년월일 입력"
          className="mb-12 rounded-lg border border-border bg-card px-4 py-5 shadow-sm lg:sticky lg:top-6 lg:mb-0 lg:px-5 lg:py-6"
        >
          <BirthdateForm />
        </section>
      </div>

      <section className="mb-10 lg:mt-14" aria-labelledby="months-heading">
        <h2 id="months-heading" className="text-lg font-semibold mb-3">
          월령별 가이드 바로가기
        </h2>
        <p className="text-sm text-muted mb-4">
          생년월일을 입력하지 않아도, 아래에서 해당 월령 가이드를 바로 볼 수 있어요.
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {MONTH_BUCKETS.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/${b.slug}`}
                className="block min-h-[64px] rounded-lg border border-border bg-card p-4 transition-colors active:bg-accent-light lg:hover:border-accent"
              >
                <div className="font-semibold text-base">{b.label}</div>
                <div className="text-xs text-muted mt-1">
                  {b.dayMin}~{b.dayMax}일
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-lg font-semibold mb-3">
          어떤 정보를 담고 있나요?
        </h2>
        <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold text-base">
              {CATEGORY_META.feeding.emoji} {CATEGORY_META.feeding.label}
            </div>
            <p className="text-sm text-muted mt-1">
              월령별 분유량, 모유 수유 횟수와 간격, 이유식 시작 시점 등 먹이는 기준.
              체중 기반 하루 분유 총량 계산기 포함.
            </p>
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold text-base">
              {CATEGORY_META.development.emoji} {CATEGORY_META.development.label}
            </div>
            <p className="text-sm text-muted mt-1">
              목 가누기, 뒤집기, 앉기 등 월령별 신체 발달 마일스톤. 언제 되어야 하는지,
              늦을 때 어떻게 확인하는지.
            </p>
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold text-base">
              {CATEGORY_META.cognitive.emoji} {CATEGORY_META.cognitive.label}
            </div>
            <p className="text-sm text-muted mt-1">
              시각·청각 발달, 옹알이, 낯가림 등 월령별 인지·감각 변화. 부모가 해줄
              상호작용 팁 포함.
            </p>
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold text-base">
              {CATEGORY_META.action.emoji} {CATEGORY_META.action.label}
            </div>
            <p className="text-sm text-muted mt-1">
              월령에 맞는 장난감, 놀이 방법, 자극 주는 법. 과도한 자극 피하는 기준도
              함께 안내.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-10" aria-labelledby="sources-heading">
        <h2 id="sources-heading" className="text-lg font-semibold mb-3">
          정보 출처
        </h2>
        <p className="text-sm text-muted mb-4">
          달콩의 모든 가이드는 다음 공신력 있는 기관의 공개 자료를 근거로 작성되며,
          각 항목마다 원본 링크를 함께 표기합니다.
        </p>
        <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          {SOURCES.map((s) => (
            <li key={s.name} className="bg-card border border-border rounded-lg p-4">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-base text-accent underline"
              >
                {s.name}
              </a>
              <p className="text-sm text-muted mt-1">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-lg font-semibold mb-3">
          자주 묻는 질문
        </h2>
        <ul className="space-y-3 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          {FAQ.map((item) => (
            <li
              key={item.q}
              className="bg-card border border-border rounded-lg p-4"
            >
              <h3 className="font-semibold text-base">{item.q}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="pt-4 border-t border-border text-center space-y-3">
        <p className="text-xs text-muted leading-relaxed">
          이 정보는 의료 조언이 아닙니다. 아기의 건강에 대한 결정은 반드시 소아과
          전문의와 상담하세요.
          <br />
          대한소아청소년과학회 · WHO · childcare.go.kr 기준 · 72개 항목, 출처 포함
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
