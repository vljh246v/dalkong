import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "달콩 - 월령별 아기 육아 가이드",
  description:
    "아기 생년월일만 입력하면, 월령별 수유량·발달·인지·놀이 가이드를 출처와 함께 바로 보여드립니다.",
  openGraph: {
    title: "달콩 - 월령별 아기 육아 가이드",
    description:
      "수유량, 발달 마일스톤, 놀이 방법을 출처와 함께. 인스타 검색 대신 달콩.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFF8F0" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9364520099576698"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
