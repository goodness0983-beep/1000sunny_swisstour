import { lineConfig } from "@/lib/seo";
import LineIcon from "./LineIcon";
import InquiryForm from "./InquiryForm";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-stone/60 bg-slate text-paper">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-glacier">
              Free Consultation · 免費行程諮詢
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              留下 Email，我們幫你抓行程與預算
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/70">
              也歡迎直接加 LINE 好友，回覆速度更快，客服真人隨時可以聊行程細節。
            </p>
            <div className="mt-5">
              <InquiryForm />
            </div>
            <a
              href={lineConfig.addFriendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-2 rounded-full bg-line px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <LineIcon className="h-4 w-4" />
              加入 LINE 好友：{lineConfig.displayName}
            </a>
          </div>
          <div className="font-mono text-[13px] leading-loose text-paper/60">
            <p className="mb-2 text-paper/80">瑞士旅遊專賣店</p>
            <p>LINE ID：{lineConfig.lineId}</p>
            <p className="mt-3 text-paper/50">
              網站內容整理自公開旅遊資訊，實際行程內容與報價請以 LINE 諮詢後確認為準。
            </p>
          </div>
        </div>
        <p className="mt-12 text-[11px] text-paper/40">
          © {new Date().getFullYear()} 瑞士旅遊專賣店 — 你的瑞士自由行規劃顧問。
        </p>
      </div>
    </footer>
  );
}
