"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

type Status = "idle" | "loading" | "success" | "error";

export default function InquiryForm({
  itinerarySlug,
}: {
  itinerarySlug?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const pathname = usePathname();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          interested_itinerary: itinerarySlug,
          path: pathname,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "送出失敗，請稍後再試");
        return;
      }
      setStatus("success");
      setMessage(data.message || "已收到！");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("網路連線發生問題，請稍後再試");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
        <div className="flex-1">
          <label htmlFor="inquiry-email" className="sr-only">
            電子郵件地址
          </label>
          <input
            id="inquiry-email"
            type="email"
            required
            placeholder="你的電子郵件"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus-ring w-full rounded-sm border border-paper/25 bg-transparent px-3 py-2.5 text-sm text-paper placeholder:text-paper/40"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-ring shrink-0 rounded-sm bg-rail px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" ? "送出中…" : "留下資訊"}
        </button>
      </div>
      {message && (
        <p role="status" className={`text-xs ${status === "error" ? "text-rail" : "text-glacier"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
