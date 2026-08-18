import { getSupabaseServerClient } from "./supabase";

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // 以雙換行分段的純文字／簡易 markdown
  tags: string[];
  published_at: string;
};

/**
 * 取得所有已發布文章（依發布時間新到舊）。
 * 若 Supabase 尚未設定或資料表不存在，回傳空陣列而不是丟出例外，
 * 讓 /articles 頁面在還沒接好資料庫之前也能正常顯示「尚無文章」的空狀態。
 */
export async function getPublishedArticles(): Promise<BlogArticle[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_articles")
    .select("slug, title, excerpt, content, tags, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data as BlogArticle[];
}

export async function getBlogArticleBySlug(
  slug: string
): Promise<BlogArticle | null> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blog_articles")
    .select("slug, title, excerpt, content, tags, published_at")
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return null;
  return data as BlogArticle;
}

export async function getPublishedArticleSlugs(): Promise<string[]> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blog_articles")
    .select("slug")
    .eq("status", "published");

  if (error || !data) return [];
  return data.map((row) => row.slug as string);
}
