import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "달콩 소개",
  description:
    "달콩은 대한소아청소년과학회·WHO 등 공신력 있는 출처를 바탕으로 생후 0~6개월 아기의 월령별 수유·발달·놀이 정보를 제공하는 육아 가이드입니다.",
  alternates: { canonical: "https://dalkong-one.vercel.app/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <nav className="mb-6">
        <Link href="/" className="text-sm text-accent font-medium">
          ← 홈으로
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold">달콩 소개</h1>
        <p className="text-sm text-muted mt-2">
          출처 기반 월령별 아기 육아 가이드
        </p>
      </header>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">서비스 목적</h2>
        <p className="text-sm leading-relaxed">
          달콩은 생후 0~6개월 아기를 키우는 부모가 신뢰할 수 있는 출처를 통해 수유량,
          발달 마일스톤, 인지 발달, 월령별 놀이 방법을 한 화면에서 쉽게 확인할 수
          있도록 돕는 서비스입니다.
        </p>
        <p className="text-sm leading-relaxed">
          인터넷에는 육아 정보가 넘쳐나지만, 출처가 불분명하거나 상업적 목적의 정보가
          많습니다. 달콩은 대한소아청소년과학회·아이사랑 포털·질병관리청·WHO 등
          공신력 있는 기관의 공개 자료만을 근거로 콘텐츠를 작성하며, 각 항목마다
          원본 링크를 함께 제공합니다.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">콘텐츠 기준</h2>
        <ul className="space-y-3 text-sm">
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold">출처 필수 원칙</div>
            <p className="text-muted mt-1">
              모든 가이드 항목에는 <code>source_name</code>(출처명)과{" "}
              <code>source_url</code>(원문 링크)이 반드시 포함됩니다.
              출처 없는 항목은 추가하지 않습니다.
            </p>
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold">1차 출처 우선</div>
            <p className="text-muted mt-1">
              대한소아청소년과학회, 아이사랑 포털(보건복지부), 질병관리청
              국가건강정보포털, WHO 등 공공·학술 기관의 1차 자료를 우선합니다.
            </p>
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold">의료 조언 금지</div>
            <p className="text-muted mt-1">
              달콩이 제공하는 모든 정보는 일반 참고용 교육 자료입니다. 개별 아기의
              건강 상태에 대한 의료적 판단이나 진단을 제공하지 않습니다.
            </p>
          </li>
          <li className="bg-card border border-border rounded-lg p-4">
            <div className="font-semibold">정기 검토</div>
            <p className="text-muted mt-1">
              가이드 콘텐츠는 출처 기관의 업데이트에 맞추어 정기적으로 검토 및 수정됩니다.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">참고 출처</h2>
        <ul className="space-y-2 text-sm">
          {[
            { name: "대한소아청소년과학회", url: "https://www.pediatrics.or.kr" },
            { name: "아이사랑 포털 (보건복지부)", url: "https://www.childcare.go.kr" },
            { name: "질병관리청 국가건강정보포털", url: "https://health.kdca.go.kr" },
            { name: "질병관리청 예방접종도우미", url: "https://nip.kdca.go.kr" },
            { name: "국민건강보험공단 영유아검진", url: "https://www.nhis.or.kr" },
            { name: "세계보건기구 (WHO)", url: "https://www.who.int" },
          ].map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-lg font-semibold">운영자 정보</h2>
        <div className="bg-card border border-border rounded-lg p-4 text-sm space-y-1">
          <div>
            <span className="text-muted">서비스명:</span> 달콩
          </div>
          <div>
            <span className="text-muted">이메일:</span>{" "}
            <a href="mailto:vljh246v@gmail.com" className="text-accent underline">
              vljh246v@gmail.com
            </a>
          </div>
          <div>
            <span className="text-muted">배포 URL:</span>{" "}
            <a
              href="https://dalkong-one.vercel.app"
              className="text-accent underline"
            >
              dalkong-one.vercel.app
            </a>
          </div>
        </div>
      </section>

      <footer className="pt-4 border-t border-border">
        <nav className="flex flex-wrap gap-4 text-xs text-muted justify-center">
          <Link href="/" className="hover:text-accent">홈</Link>
          <Link href="/disclaimer" className="hover:text-accent">의료 면책 고지</Link>
          <Link href="/privacy" className="hover:text-accent">개인정보처리방침</Link>
          <Link href="/terms" className="hover:text-accent">이용약관</Link>
        </nav>
      </footer>
    </div>
  );
}
