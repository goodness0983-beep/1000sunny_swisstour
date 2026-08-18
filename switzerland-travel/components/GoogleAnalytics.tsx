import Script from "next/script";

/**
 * Google Analytics 4（GA4）追蹤碼。
 * 只有在設定了 NEXT_PUBLIC_GA_ID 環境變數時才會載入，
 * 避免本機開發或尚未申請 GA4 時噴錯誤或污染正式數據。
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
