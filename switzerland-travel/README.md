# 瑞士旅遊專賣店｜Switzerland Travel

以 Next.js（App Router）+ Tailwind CSS 打造的「瑞士旅遊」SEO 網站，部署於 Vercel，並整合 Supabase 收集行程諮詢名單，全站導流至 LINE 官方帳號「瑞士旅遊專賣店」（@switzerlandtravel）。

## 網站結構

- `/` 首頁：品牌介紹 + 瑞士基本介紹 + 精選行程 + LINE CTA
- `/guide` 瑞士旅遊懶人包：認識瑞士、最佳季節、交通攻略（Swiss Travel Pass）、預算、必去景點
- `/itineraries` 行程總覽：經典全覽 8 日、蜜月 6 日、親子 7 日、深度鐵道 9 日、小資 5 日、雪季 6 日
- `/itineraries/[slug]` 每條行程的詳細每日規劃
- `/about` 關於我們 + LINE 資訊
- 全站固定右下角有「加 LINE 好友」浮動按鈕，每個內容頁結尾也都有 LINE CTA 區塊

## 技術棧

- **框架**：Next.js 14（App Router）
- **樣式**：Tailwind CSS
- **資料庫**：Supabase（`trip_inquiries` 資料表，收集「留 Email 幫你規劃」表單）
- **部署**：Vercel

---

## ⚠️ 上傳到 GitHub 時最容易出錯的地方

如果你是透過 GitHub 網頁「拖曳上傳」而不是用 git 指令，**請直接把這個資料夾「裡面」的所有檔案和子資料夾**（`app/`、`components/`、`lib/`、`package.json`、`tsconfig.json` 等）**拖進 repo 根目錄**，不要連同最外層的 `switzerland-travel` 資料夾一起拖上去。

- ✅ 正確：GitHub repo 首頁點開就能直接看到 `app`、`package.json`
- ❌ 錯誤：要點進一層 `switzerland-travel/` 才看得到 `app`、`package.json`

如果不小心上傳成錯誤結構，導致 Vercel 出現 `Couldn't find any pages or app directory` 或 `No Next.js version detected` 的錯誤，解法是去 Vercel 專案 **Settings → Build and Deployment → Root Directory**，填入檔案實際所在的子資料夾名稱，然後 **Redeploy**。

## 本機開發

```bash
npm install
cp .env.example .env.local   # 填入你的 Supabase 專案資訊
npm run dev
```

開啟 http://localhost:3000

## 設定 Supabase

1. 到你的 Supabase 專案 → **SQL Editor**，貼上並執行 `supabase/schema.sql`，建立 `trip_inquiries` 資料表。
2. 到 **Project Settings → API**，複製：
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`（**僅**用於伺服器端，勿外流、勿加 `NEXT_PUBLIC_` 前綴）
3. 將這三組值填進 `.env.local`（本機）以及 Vercel 專案的 Environment Variables（正式環境）。

## 部署到 Vercel

1. 建立一個新的 GitHub repo，把這個專案的**所有檔案**（不要多包一層資料夾）推上去。
2. 到 [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → 選擇這個 repo，Vercel 會自動偵測為 Next.js 專案。
3. 在 **Environment Variables** 設定頁，加入 `.env.example` 中列出的四組變數（`NEXT_PUBLIC_SITE_URL` 填正式網域）。
4. 點擊 **Deploy**。

## 修改 LINE 官方帳號資訊

所有 LINE 相關文字與連結都集中在 `lib/seo.ts` 的 `lineConfig`，要更改顯示名稱、LINE ID 或加入好友連結，只需要改這一個檔案：

```ts
export const lineConfig = {
  displayName: "瑞士旅遊專賣店",
  lineId: "@switzerlandtravel",
  addFriendUrl: "https://lin.ee/r5lfH6e",
};
```

## SEO 重點設計

- `app/layout.tsx`：全站預設 metadata、Open Graph、`TravelAgency` JSON-LD 結構化資料。
- `app/itineraries/[slug]/page.tsx`：每條行程獨立 metadata、canonical URL、`TouristTrip` 與 `BreadcrumbList` JSON-LD。
- `app/sitemap.ts`、`app/robots.ts`：自動依行程資料產生 sitemap 與 robots.txt。
- 鎖定「瑞士旅遊」「瑞士自由行」「瑞士旅遊懶人包」等關鍵字，並在 `/guide` 頁面提供長文內容以強化主題權威性。

部署完成後建議：
1. 到 Google Search Console 加入網站並提交 `https://你的網域/sitemap.xml`。
2. 將 `NEXT_PUBLIC_SITE_URL` 換成正式網域後重新部署，確保 canonical URL 與 JSON-LD 網址正確。
