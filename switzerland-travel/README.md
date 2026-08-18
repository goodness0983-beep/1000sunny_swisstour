# 瑞士旅遊專賣店｜Switzerland Travel

以 Next.js（App Router）+ Tailwind CSS 打造的「瑞士旅遊」SEO 網站，部署於 Vercel，並整合 Supabase 收集行程諮詢名單，全站導流至 LINE 官方帳號「瑞士旅遊專賣店」（@switzerlandtravel）。

## 網站結構

- `/` 首頁：品牌介紹 + 瑞士基本介紹 + 精選行程 + LINE CTA
- `/guide` 瑞士旅遊懶人包：認識瑞士、最佳季節、交通攻略（Swiss Travel Pass）、預算、必去景點
- `/itineraries` 行程總覽：目前上架 2 條真實在售行程（9天冬雪奇緣、18天純鐵道漫遊）
- `/itineraries/[slug]` 每條行程的詳細每日規劃，內容整理自 switzerland-travel.tw 官網對應頁面
- `/articles` 瑞士旅遊知識庫：Supabase 資料庫驅動，每天自動上架一篇新文章（詳見下方「SEO 文章自動上架系統」）
- `/about` 關於我們 + LINE 資訊
- 全站固定右下角有「加 LINE 好友」浮動按鈕，每個內容頁結尾也都有 LINE CTA 區塊
- Header 使用你提供的正式 Logo（`public/logo.png`）

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

## SEO 文章自動上架系統

網站有一套「每日自動發布」機制，讓 Google 能持續發現新內容，同時避免大量低品質 AI 自動產文帶來的風險：

1. 到 Supabase Table Editor，找到 `blog_articles` 資料表。
2. 新增一列文章：填 `slug`（英文網址代稱）、`title`、`excerpt`（摘要）、`content`（內文，段落間空一行）、`tags`（陣列），**`status` 填 `scheduled`**。
3. 可以一次先寫好一整批文章，全部設成 `scheduled`，它們會依「建立時間」排隊。
4. Vercel Cron 每天固定時間（UTC 01:00，約台灣時間早上 9 點）呼叫 `/api/cron/publish-articles`，自動把排隊最久的一篇文章 `status` 改成 `published`，網站的 `/articles`、sitemap.xml 會立刻反映。

**為什麼不做成全自動 AI 寫文章？** Google 的 spam 政策明確會處理「規模化、缺乏人工把關」的內容，過度自動化反而可能被降權。這套設計讓你保留「內容品質把關」，但仍然享有「穩定更新頻率」帶來的 SEO 訊號——這是實際對排名有幫助、且風險可控的做法。如果你之後想接自己的 AI 草稿流程（例如用 Claude API 先生成草稿、人工修訂後存進資料庫），也可以直接沿用這套 `scheduled → 自動上架` 的機制。

**啟用 Cron 前必做**：
1. 到 Vercel 專案 **Settings → Environment Variables**，新增 `CRON_SECRET`（自己設一組隨機亂碼）。
2. `vercel.json` 已經設定好排程（`0 1 * * *`，每天一次），推送到 GitHub 後 Vercel 會自動啟用 Cron Job（Hobby 方案每個 cron 限制為一天觸發一次，剛好符合每日發文的需求）。

## Google Analytics 4 與 Google Search Console

**GA4**：
1. 到 [Google Analytics](https://analytics.google.com) 建立資源，取得測量 ID（格式 `G-XXXXXXXXXX`）。
2. 到 Vercel **Settings → Environment Variables** 新增 `NEXT_PUBLIC_GA_ID`，值填這組測量 ID。
3. 重新部署後，`components/GoogleAnalytics.tsx` 會自動載入追蹤碼；沒有設定這個變數時完全不會載入，不影響網站速度。

**Google Search Console**：
1. 到 [Search Console](https://search.google.com/search-console) 新增資源，選「網址前置字元」，輸入你的正式網域。
2. 驗證方式選「HTML 標籤」，只複製 `content="這一串"` 裡面的內容（不含引號、不含其他 HTML）。
3. 到 Vercel 新增環境變數 `NEXT_PUBLIC_GSC_VERIFICATION`，貼上那串代碼，重新部署後回 GSC 點「驗證」。
4. 驗證成功後，到 GSC 的「Sitemap」頁面提交 `https://你的網域/sitemap.xml`，之後每次有新文章上架都會自動被收錄進 sitemap，Google 會定期重新抓取。

**關於「排到 Google 第一頁」的老實話**：技術面（結構化資料、sitemap、乾淨的 URL、內容新鮮度）我們都已經做好了，這是排名的必要條件，但不是充分條件。實際排名還取決於內容品質、其他網站的反向連結、使用者停留與互動、以及跟同業關鍵字的競爭程度，這些通常需要持續經營 3-6 個月以上才會看到明顯成效，任何人承諾「保證第一頁」都不切實際。建議搭配 GSC 的「成效」報表，觀察哪些關鍵字有曝光但排名較後面，針對性地補強對應文章內容。

## Email 表單（`trip_inquiries`）除錯checklist

如果留 Email 表單一直顯示錯誤，部署後打開 `https://你的網域/api/health`，會直接告訴你卡在哪一步（環境變數沒設 / 資料表沒建立 / 連線正常但其他問題），不需要用瀏覽器開發者工具慢慢猜。常見原因：

1. Vercel 沒有設定 `NEXT_PUBLIC_SUPABASE_URL`、`NEXT_PUBLIC_SUPABASE_ANON_KEY`、`SUPABASE_SERVICE_ROLE_KEY` 三組環境變數。
2. 有設定，但**設定完沒有重新部署**（環境變數變更必須 Redeploy 才會生效）。
3. Supabase 專案裡還沒執行過 `supabase/schema.sql`，資料表根本不存在。
4. 複製環境變數時多了空白或漏了字元。

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
