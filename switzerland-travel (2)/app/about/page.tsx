import type { Metadata } from "next";
import LineCTA from "@/components/LineCTA";
import { lineConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "關於瑞士旅遊專賣店",
  description: "關於瑞士旅遊專賣店的服務理念，以及如何透過 LINE 免費諮詢客製化瑞士旅遊行程。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        About Us
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        關於瑞士旅遊專賣店
      </h1>

      <div className="mt-8 space-y-5 text-[15px] leading-8 text-ink/85">
        <p>
          瑞士旅遊專賣店專注於瑞士自由行的行程規劃與諮詢服務，我們整理了瑞士旅遊的基礎知識、
          交通票券攻略，以及 6 條依天數與主題分類的行程範本，希望幫助每一位第一次規劃瑞士旅遊的人，
          更快找到適合自己的安排方向。
        </p>
        <p>
          網站上的每一條行程都只是「範本」，實際出發前，我們建議加入 LINE 好友，
          讓真人顧問依照你的天數、預算、同行人數與偏好，進一步調整住宿、交通票券與每日節奏，
          規劃出真正適合你的瑞士旅遊行程。
        </p>
        <p>
          LINE 官方帳號：<strong>{lineConfig.displayName}</strong>
          <br />
          LINE ID：<strong>{lineConfig.lineId}</strong>
        </p>
      </div>

      <div className="mt-12">
        <LineCTA />
      </div>
    </div>
  );
}
