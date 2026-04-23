import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "달콩의 개인정보 수집·이용·보관 방침입니다. 서버에 개인정보를 저장하지 않으며, 기기에 아기 생년월일만 보관합니다.",
  alternates: { canonical: "https://dalkong-one.vercel.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <nav className="mb-6">
        <Link href="/" className="text-sm text-accent font-medium">
          ← 홈으로
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold">개인정보처리방침</h1>
        <p className="text-sm text-muted mt-2">최종 업데이트: 2026년 4월</p>
      </header>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">1. 개인정보 수집 항목 및 방법</h2>
        <div className="bg-card border border-border rounded-lg p-4 text-sm space-y-2">
          <p>
            달콩은 서버에 개인정보를 수집·저장하지 않습니다. 아기 생년월일을 입력하면
            해당 정보는 <strong>사용자의 기기(브라우저 localStorage)</strong>에만
            저장되며, 달콩 서버로 전송되지 않습니다.
          </p>
          <p>
            localStorage 데이터는 사용자가 브라우저의 사이트 데이터 삭제 기능을 통해
            언제든지 직접 삭제할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">2. 제3자 서비스 — Google AdSense</h2>
        <p className="text-sm leading-relaxed">
          달콩은 서비스 운영을 위해 Google AdSense 광고를 게재합니다. Google은
          광고 게재 및 관심 기반 광고 제공을 위해 쿠키를 사용할 수 있습니다.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="bg-card border border-border rounded-lg p-3">
            <span className="font-semibold">광고 게재 위치:</span> 아기 월령별 가이드
            페이지 (홈 페이지 제외)
          </li>
          <li className="bg-card border border-border rounded-lg p-3">
            <span className="font-semibold">쿠키 사용:</span> Google이 사용하는
            쿠키에 관한 자세한 내용은{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              Google 광고 정책
            </a>
            을 참고하세요.
          </li>
          <li className="bg-card border border-border rounded-lg p-3">
            <span className="font-semibold">맞춤 광고 거부:</span>{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              Google 광고 설정
            </a>
            에서 관심 기반 광고를 비활성화할 수 있습니다.
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">3. 제3자 서비스 — Google Analytics (미사용)</h2>
        <p className="text-sm leading-relaxed">
          현재 달콩은 Google Analytics 또는 기타 분석 도구를 사용하지 않습니다.
          향후 도입 시 본 방침을 업데이트하고 사전 고지하겠습니다.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">4. 개인정보 보관 및 파기</h2>
        <p className="text-sm leading-relaxed">
          달콩 서버는 사용자의 개인정보를 보관하지 않습니다. 기기 localStorage에
          저장된 아기 생년월일은 사용자가 브라우저 설정에서 직접 삭제하거나,
          브라우저 사이트 데이터 초기화를 통해 즉시 파기됩니다.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">5. 개인정보 보호책임자</h2>
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
        </div>
        <p className="text-sm text-muted">
          개인정보 관련 문의사항은 위 이메일로 연락해 주시면 빠르게 답변드리겠습니다.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">6. 방침 변경</h2>
        <p className="text-sm leading-relaxed">
          본 개인정보처리방침은 법령 또는 서비스 변경에 따라 업데이트될 수 있으며,
          변경 시 페이지 상단의 &ldquo;최종 업데이트&rdquo; 날짜를 갱신합니다.
        </p>
      </section>

      <footer className="pt-4 border-t border-border">
        <nav className="flex flex-wrap gap-4 text-xs text-muted justify-center">
          <Link href="/" className="hover:text-accent">홈</Link>
          <Link href="/about" className="hover:text-accent">달콩 소개</Link>
          <Link href="/disclaimer" className="hover:text-accent">의료 면책 고지</Link>
          <Link href="/terms" className="hover:text-accent">이용약관</Link>
        </nav>
      </footer>
    </div>
  );
}
