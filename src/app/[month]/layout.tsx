import Script from "next/script";

export default function MonthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9364520099576698"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
