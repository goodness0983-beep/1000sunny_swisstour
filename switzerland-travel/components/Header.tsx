import Link from "next/link";
import Image from "next/image";
import { lineConfig } from "@/lib/seo";
import LineIcon from "./LineIcon";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/guide", label: "認識瑞士" },
  { href: "/itineraries", label: "旅遊行程" },
  { href: "/articles", label: "知識庫" },
  { href: "/about", label: "關於我們" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone/60 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="focus-ring block shrink-0" aria-label="瑞士旅遊專賣店首頁">
          <Image
            src="/logo.png"
            alt="瑞士旅遊專賣店 SWITZERLAND TRAVEL"
            width={1115}
            height={207}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <nav aria-label="主導覽" className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 font-mono text-[13px] tracking-wide sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded px-3 py-2 text-ink/80 transition-colors hover:text-rail"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={lineConfig.addFriendUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1.5 rounded-full bg-line px-3.5 py-2 text-[12px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            <LineIcon className="h-4 w-4" />
            加好友
          </a>
        </nav>
      </div>
      <div className="h-[3px] w-full bg-gradient-to-r from-rail via-rail to-slate" />
    </header>
  );
}
