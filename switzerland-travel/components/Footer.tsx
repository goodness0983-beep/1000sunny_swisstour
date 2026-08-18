import { lineConfig, tagline, footerLinks, companyInfo } from "@/lib/seo";
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
            <p className="mb-1 text-paper/80">{lineConfig.displayName}</p>
            <p className="mb-2 font-body text-[13px] text-paper/50">{tagline}</p>
            <p>LINE ID：{lineConfig.lineId}</p>
            <p className="mt-3">
              {companyInfo.agentTitle}：{companyInfo.agentName}
            </p>
            <p>
              報名諮詢專線：
              <a href={`tel:${companyInfo.bookingPhoneHref}`} className="hover:text-paper">
                {companyInfo.bookingPhone}
              </a>
            </p>
          </div>
        </div>

        {/* 快速連結 */}
        <nav
          aria-label="常用連結"
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper/10 pt-6 font-mono text-[12px] text-paper/60"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 旅行社法定登記資訊 */}
        <div className="mt-8 border-t border-paper/10 pt-6 text-[11px] leading-relaxed text-paper/45">
          <p>
            {companyInfo.companyName}　{companyInfo.companyType}
          </p>
          <p>地址：{companyInfo.address}</p>
          <p>
            代表人：{companyInfo.representative}　觀光署註冊編號：{companyInfo.travelBureauNo}
            　品保協會：{companyInfo.qualityAssuranceNo}
          </p>
          <p>
            諮詢專線：
            <a href={`tel:${companyInfo.mainPhoneHref}`} className="hover:text-paper/70">
              {companyInfo.mainPhone}
            </a>
            　公司代表號：
            <a href={`tel:${companyInfo.mainPhoneHref}`} className="hover:text-paper/70">
              {companyInfo.mainPhone}
            </a>
            　傳真：{companyInfo.fax}
          </p>
          <p>
            電子信箱：
            <a href={`mailto:${companyInfo.email}`} className="hover:text-paper/70">
              {companyInfo.email}
            </a>
          </p>
        </div>

        <p className="mt-8 text-[11px] text-paper/40">
          © {new Date().getFullYear()} {lineConfig.displayName} — 你的瑞士自由行規劃顧問。
        </p>
      </div>
    </footer>
  );
}
