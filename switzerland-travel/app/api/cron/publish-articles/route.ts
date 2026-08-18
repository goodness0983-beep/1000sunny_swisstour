import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

/**
 * 每日自動上架排程。
 *
 * 運作邏輯：編輯把文章寫好後，存進 Supabase 的 blog_articles 資料表，
 * status 設為 'scheduled'（透過 Supabase Table Editor 手動輸入，或串接你自己的後台/AI 草稿流程）。
 * 這支 API 由 Vercel Cron 每天呼叫一次，會挑「最早建立、還在排隊」的一篇文章，
 * 自動把它的 status 改成 'published' 並寫入 published_at，讓網站每天穩定生出一篇新文章、
 * 對 Google 展現「持續更新、有建設性」的訊號。
 *
 * 為什麼不做成「全自動 AI 生成文章」？
 * Google 的 spam policy 明確點名「規模化產出、缺乏人工把關的內容」屬於濫用行為，
 * 可能適得其反被降權。這裡採用「先寫好、排隊、每天固定節奏上架」的做法，
 * 讓你保有內容品質的最終把關，同時仍然享有「穩定更新」帶來的 SEO 訊號。
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;

  if (!process.env.CRON_SECRET || authHeader !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase 尚未設定" },
      { status: 503 }
    );
  }

  const { data: queued, error: fetchError } = await supabase
    .from("blog_articles")
    .select("id, slug")
    .eq("status", "scheduled")
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (!queued) {
    return NextResponse.json({ ok: true, message: "沒有排隊中的文章，今天略過。" });
  }

  const { error: updateError } = await supabase
    .from("blog_articles")
    .update({ status: "published", published_at: new Date().toISOString() })
    .eq("id", queued.id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: `已上架文章：${queued.slug}`,
  });
}
