-- ============================================================
-- 瑞士旅遊專賣店網站 — Supabase Schema
-- 在 Supabase Dashboard 的 SQL Editor 貼上並執行即可建立所需資料表
-- ============================================================

-- 行程諮詢名單（網站上的「留下 Email，我們幫你規劃」表單會寫入這張表，
-- 主要導流動作仍是 LINE 加好友按鈕，這張表作為備援名單／名單再行銷用）
create table if not exists public.trip_inquiries (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  interested_itinerary text, -- 使用者感興趣的行程 slug，例如 'classic-8-days'
  source_path text,           -- 送出當下所在的頁面路徑
  created_at timestamptz not null default now()
);

alter table public.trip_inquiries enable row level security;

-- 只允許透過 anon key 的請求「新增」資料，不可讀取／修改／刪除既有紀錄。
-- 實際寫入是透過伺服器端 API Route（使用 service role key）完成，
-- 這裡的 anon insert policy 主要作為備援。
create policy "Allow insert for anon" on public.trip_inquiries
  for insert
  to anon
  with check (true);


-- ============================================================
-- SEO 知識庫文章（每日自動排程上架用）
-- ============================================================
--
-- status 說明：
--   'draft'      → 草稿，尚未排隊，網站上完全看不到
--   'scheduled'  → 已排隊等待自動上架（由 app/api/cron/publish-articles 每天挑最舊的一篇發布）
--   'published'  → 已上架，會出現在 /articles 與 sitemap.xml
--
-- 使用方式：直接在 Supabase Dashboard 的 Table Editor 新增一列，
-- status 填 'scheduled'，之後每天 Vercel Cron 就會自動挑最早建立的一篇上架，
-- 完全不需要碰程式碼或重新部署。
create table if not exists public.blog_articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null, -- 內文，段落之間請用空白行分隔
  tags text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft', 'scheduled', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.blog_articles enable row level security;

-- 只開放讀取「已發布」的文章，草稿與排隊中的文章不會被外部讀取到
create policy "Allow public read of published articles" on public.blog_articles
  for select
  to anon
  using (status = 'published');
