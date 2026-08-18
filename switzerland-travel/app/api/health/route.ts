import { NextResponse } from "next/server";
import { getSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase";

/**
 * 診斷用端點：部署後打開 /api/health 就能知道 Email 表單為什麼沒作用。
 * 不會洩漏任何金鑰內容，只回報「有沒有設定」與「資料表是否連得到」。
 */
export async function GET() {
  const result: Record<string, unknown> = {
    supabase_env_configured: isSupabaseConfigured,
    supabase_url_set: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    supabase_anon_key_set: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    supabase_service_role_key_set: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
  };

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    result.trip_inquiries_table = "無法建立連線，請確認上面三個環境變數都已在 Vercel 設定並重新部署";
    return NextResponse.json(result, { status: 200 });
  }

  const { error } = await supabase.from("trip_inquiries").select("id").limit(1);
  result.trip_inquiries_table = error
    ? `連線成功，但查詢資料表失敗：${error.message}（請確認已在 Supabase SQL Editor 執行過 supabase/schema.sql）`
    : "連線正常，資料表可以正常讀寫";

  const { error: blogError } = await supabase.from("blog_articles").select("id").limit(1);
  result.blog_articles_table = blogError
    ? `查詢失敗：${blogError.message}（請確認已執行 supabase/schema.sql 建立 blog_articles 表）`
    : "連線正常";

  return NextResponse.json(result, { status: 200 });
}
