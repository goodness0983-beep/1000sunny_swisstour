import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: { email?: string; interested_itinerary?: string; path?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "請求格式錯誤" }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "請輸入有效的電子郵件地址" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase 尚未設定，請聯絡網站管理員" },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("trip_inquiries").insert({
    email,
    interested_itinerary: body.interested_itinerary || null,
    source_path: body.path || null,
  });

  if (error) {
    return NextResponse.json({ error: "送出失敗，請稍後再試" }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    message: "已收到你的資訊！也歡迎直接加 LINE 好友，回覆更快喔～",
  });
}
