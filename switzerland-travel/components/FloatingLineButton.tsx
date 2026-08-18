import { lineConfig } from "@/lib/seo";
import LineIcon from "./LineIcon";

export default function FloatingLineButton() {
  return (
    <a
      href={lineConfig.addFriendUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="focus-ring pulse-line fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-line px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
      aria-label={`加入 LINE 好友：${lineConfig.displayName}`}
    >
      <LineIcon className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">加 LINE 免費諮詢行程</span>
      <span className="sm:hidden">加 LINE 諮詢</span>
    </a>
  );
}
