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
