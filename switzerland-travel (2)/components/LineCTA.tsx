import { lineConfig } from "@/lib/seo";
import LineIcon from "./LineIcon";

export default function LineCTA({
  title = "想客製化屬於你的瑞士行程嗎？",
  description = "加入 LINE 好友，告訴我們你的天數、預算與偏好，專人幫你規劃最適合的瑞士旅遊行程。",
  compact = false,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`rounded-md border border-line/30 bg-line/5 ${
        compact ? "p-4" : "p-6"
      }`}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className={`font-display font-semibold text-ink ${compact ? "text-base" : "text-lg"}`}>
            {title}
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-ink/65">{description}</p>
          <p className="mt-1 font-mono text-[12px] text-ink/45">
            {lineConfig.displayName} · LINE ID：{lineConfig.lineId}
          </p>
        </div>
        <a
          href={lineConfig.addFriendUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring flex shrink-0 items-center gap-2 rounded-sm bg-line px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <LineIcon className="h-4 w-4" />
          加入好友
        </a>
      </div>
    </div>
  );
}
