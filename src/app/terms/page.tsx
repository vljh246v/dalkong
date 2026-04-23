import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "이용약관",
  description: "달콩 서비스 이용약관입니다. 서비스 범위, 사용 조건, 책임 한계를 안내합니다.",
  alternates: { canonical: "https://dalkong-one.vercel.app/terms" },
};

export default function TermsPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <nav className="mb-6">
        <Link href="/" className="text-sm text-accent font-medium">
          ← 홈으로
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold">이용약관</h1>
        <p className="text-sm text-muted mt-2">최종 업데이트: 2026년 4월</p>
      </header>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">제1조 서비스 목적</h2>
        <p className="text-sm leading-relaxed">
          달콩(이하 &ldquo;서비스&rdquo;)은 생후 0~6개월 아기를 키우는 부모에게
          월령별 수유·발달·인지·놀이에 관한 일반 정보를 제공하는 교육 목적의
          무료 서비스입니다.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">제2조 서비스 이용</h2>
        <ul className="space-y-2 text-sm">
          <li className="bg-card border border-border rounded-lg p-3">
            달콩은 별도의 회원가입 없이 이용할 수 있습니다.
          </li>
          <li className="bg-card border border-border rounded-lg p-3">
            서비스는 개인적, 비상업적 목적으로만 이용할 수 있습니다.
          </li>
          <li className="bg-card border border-border rounded-lg p-3">
            달콩의 콘텐츠를 무단으로 복제·배포·상업적으로 이용하는 것을 금지합니다.
          </li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">제3조 의료 면책 고지</h2>
        <div className="bg-card border-2 border-accent rounded-lg p-4 text-sm">
          <p className="font-semibold mb-2">
            달콩이 제공하는 정보는 의료 조언이 아닙니다.
          </p>
          <p className="leading-relaxed">
            모든 콘텐츠는 일반 교육 목적의 참고 자료이며, 의료 진단, 치료 권고,
            처방을 포함한 어떠한 의료 행위도 제공하지 않습니다. 아기의 건강과 관련된
            모든 결정은 반드시 소아과 전문의와 상담하여 이루어져야 합니다.
          </p>
        </div>
        <p className="text-sm">
          자세한 내용은{" "}
          <Link href="/disclaimer" className="text-accent underline">
            의료 면책 고지
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">제4조 책임 한계</h2>
        <p className="text-sm leading-relaxed">
          달콩은 제공된 정보의 정확성을 위해 공신력 있는 출처만을 사용하지만,
          다음의 경우에 대한 책임을 지지 않습니다.
        </p>
        <ul className="space-y-2 text-sm">
          {[
            "달콩의 정보를 바탕으로 이루어진 의료적 판단 및 그 결과",
            "서비스 중단, 오류, 누락 또는 지연으로 인한 손해",
            "인터넷 연결 상태 또는 기기 환경에 따른 서비스 이용 장애",
            "제3자 링크(출처 URL)의 내용 변경 또는 삭제로 인한 문제",
          ].map((item) => (
            <li
              key={item}
              className="bg-card border border-border rounded-lg p-3 flex gap-2"
            >
              <span className="text-accent shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">제5조 서비스 변경 및 중단</h2>
        <p className="text-sm leading-relaxed">
          달콩은 사전 고지 없이 서비스 내용을 변경하거나 중단할 수 있습니다.
          중요한 변경 사항은 서비스 내 공지 또는 운영자 이메일을 통해 안내합니다.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">제6조 준거법 및 분쟁 해결</h2>
        <p className="text-sm leading-relaxed">
          본 약관은 대한민국 법률에 따라 해석되며, 서비스 이용과 관련한 분쟁은
          관련 법령에 따릅니다.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-lg font-semibold">제7조 운영자 정보</h2>
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
      </section>

      <footer className="pt-4 border-t border-border">
        <nav className="flex flex-wrap gap-4 text-xs text-muted justify-center">
          <Link href="/" className="hover:text-accent">홈</Link>
          <Link href="/about" className="hover:text-accent">달콩 소개</Link>
          <Link href="/disclaimer" className="hover:text-accent">의료 면책 고지</Link>
          <Link href="/privacy" className="hover:text-accent">개인정보처리방침</Link>
        </nav>
      </footer>
    </div>
  );
}
