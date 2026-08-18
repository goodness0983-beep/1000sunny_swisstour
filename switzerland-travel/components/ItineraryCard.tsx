import Link from "next/link";
import type { Itinerary } from "@/lib/itineraries";

export default function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
  return (
    <Link
      href={`/itineraries/${itinerary.slug}`}
      className="focus-ring group block border border-stone/60 bg-white/50 p-5 transition-colors hover:border-rail"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
          {itinerary.theme}
        </p>
        <p className="font-mono text-[11px] text-ink/45">{itinerary.days} 天</p>
      </div>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink group-hover:text-rail">
        {itinerary.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-ink/65">
        {itinerary.summary}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-mono text-[11px] text-ink/45">適合：{itinerary.suitFor}</p>
        <p className="shrink-0 font-mono text-[12px] font-semibold text-rail">
          {itinerary.priceFrom}
        </p>
      </div>
    </Link>
  );
}
