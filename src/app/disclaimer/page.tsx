import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "의료 면책 고지",
  description:
    "달콩이 제공하는 모든 정보는 일반 교육 목적의 참고 자료이며 의료 조언이 아닙니다. 아기 건강에 관한 판단은 반드시 소아과 전문의와 상담하시기 바랍니다.",
  alternates: { canonical: "https://dalkong-one.vercel.app/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <nav className="mb-6">
        <Link href="/" className="text-sm text-accent font-medium">
          ← 홈으로
        </Link>
      </nav>

      <header className="mb-8">
        <h1 className="text-2xl font-bold">의료 면책 고지</h1>
        <p className="text-sm text-muted mt-2">최종 업데이트: 2026년 4월</p>
      </header>

      <div className="bg-card border-2 border-accent rounded-lg p-4 mb-8">
        <p className="text-sm font-semibold leading-relaxed">
          달콩이 제공하는 모든 정보는 일반 교육 목적의 참고 자료입니다.
          의료 진단, 치료 권고, 처방을 포함한 어떠한 형태의 의료 조언도 제공하지 않습니다.
        </p>
      </div>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">정보의 성격과 한계</h2>
        <p className="text-sm leading-relaxed">
          달콩의 가이드는 대한소아청소년과학회, 아이사랑 포털, 질병관리청, CDC, AAP, WHO 등
          공신력 있는 기관의 공개 자료를 바탕으로 작성된 일반적인 교육 정보입니다.
          모든 아기는 개별적인 건강 상태, 성장 속도, 환경을 가지고 있으므로,
          같은 월령이라도 정상 범위가 개인마다 다를 수 있습니다.
        </p>
        <p className="text-sm leading-relaxed">
          달콩이 제시하는 수유량, 발달 마일스톤, 이유식 시작 시점, 수면 안전 기준은
          통계적 평균 또는 권장 범위이며, 특정 아기에게 최적화된 의료적 지침이
          아닙니다.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">소아과 전문의 상담이 필요한 경우</h2>
        <p className="text-sm leading-relaxed">
          다음과 같은 상황에서는 반드시 소아과 전문의와 상담하시기 바랍니다.
        </p>
        <ul className="space-y-2">
          {[
            "발열, 구토, 설사, 호흡 이상 등 신체 증상이 있을 때",
            "수유를 거부하거나 체중이 정상적으로 늘지 않을 때",
            "발달 마일스톤(목 가누기, 뒤집기, 앉기 등)이 현저히 늦어질 때",
            "이유식 후 알레르기 반응(두드러기, 구토, 호흡 곤란)이 의심될 때",
            "아기 건강에 대해 걱정이 생기는 모든 경우",
          ].map((item) => (
            <li
              key={item}
              className="bg-card border border-border rounded-lg p-3 text-sm flex gap-2"
            >
              <span className="text-accent shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">응급 상황</h2>
        <div className="bg-card border-2 border-border rounded-lg p-4">
          <p className="text-sm leading-relaxed font-semibold mb-2">
            즉시 119에 신고하거나 응급실을 방문해야 하는 상황:
          </p>
          <ul className="space-y-1 text-sm">
            {[
              "신생아의 38°C 이상 발열",
              "호흡 곤란, 청색증(입술·손톱이 파래짐)",
              "의식 저하, 경련",
              "심한 탈수 (6시간 이상 소변 없음, 울어도 눈물 없음)",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent shrink-0">!</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-lg font-semibold">책임 한계</h2>
        <p className="text-sm leading-relaxed">
          달콩은 제공된 정보의 정확성을 위해 공신력 있는 출처만을 사용하지만,
          의료 지식은 지속적으로 업데이트되므로 일부 내용이 최신 임상 지침과
          다를 수 있습니다. 달콩의 정보를 바탕으로 내린 결정에 대한 의료적 책임은
          달콩에 있지 않으며, 최종 판단은 항상 담당 소아과 전문의와 함께 하시기
          바랍니다.
        </p>
      </section>

      <footer className="pt-4 border-t border-border">
        <nav className="flex flex-wrap gap-4 text-xs text-muted justify-center">
          <Link href="/" className="hover:text-accent">홈</Link>
          <Link href="/about" className="hover:text-accent">달콩 소개</Link>
          <Link href="/privacy" className="hover:text-accent">개인정보처리방침</Link>
          <Link href="/terms" className="hover:text-accent">이용약관</Link>
        </nav>
      </footer>
    </div>
  );
}
