import Link from "next/link";
import { lineConfig } from "@/lib/seo";
import LineIcon from "./LineIcon";

export default function Hero() {
  return (
    <section className="border-b border-stone/60 bg-slate text-paper">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-glacier">
          Switzerland Travel Guide · 瑞士旅遊規劃
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          瑞士旅遊，
          <br />
          從認識瑞士開始規劃
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/70">
          阿爾卑斯山、湖光小鎮、準點的登山鐵路——瑞士旅遊的第一步，先搞懂季節、交通與預算，
          再從 6 條主題行程中，找到最適合你的瑞士自由行安排。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/guide"
            className="focus-ring rounded-sm border border-paper/30 px-5 py-2.5 text-sm font-medium text-paper/90 transition-colors hover:border-paper/60"
          >
            先看瑞士旅遊懶人包
          </Link>
          <Link
            href="/itineraries"
            className="focus-ring rounded-sm bg-rail px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            瀏覽 6 條主題行程
          </Link>
          <a
            href={lineConfig.addFriendUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-2 rounded-sm bg-line px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <LineIcon className="h-4 w-4" />
            加 LINE 免費諮詢
          </a>
        </div>
      </div>
    </section>
  );
}
