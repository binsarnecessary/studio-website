"use client";

import { useRef } from "react";
import LivePreview from "@/components/LivePreview";

type Item = {
  slug: string;
  title: string;
  category: string;
  description: string;
  url: string;
};

export default function PortfolioCarousel({ items }: { items: Item[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const amount = slide ? slide.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div>
      {/* header + arrows */}
      <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
        <h2 className="max-w-[16ch] font-heading text-3xl font-semibold tracking-tight md:text-5xl">
          Karya terbaru kami
        </h2>
        <div className="flex shrink-0 items-center gap-3">
          <p className="mr-2 hidden text-[11px] font-semibold uppercase tracking-[0.24em] text-stone lg:block">
            02 — Selected Work
          </p>
          <button
            aria-label="Sebelumnya"
            onClick={() => scroll(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            ←
          </button>
          <button
            aria-label="Berikutnya"
            onClick={() => scroll(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      {/* track */}
      <div
        ref={track}
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((p) => (
          <a
            key={p.slug}
            data-slide
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(20,20,20,0.12)] sm:w-[68%] lg:w-[46%]"
          >
            <div className="relative border-b border-line">
              <LivePreview src={p.url} title={p.title} />
              <span className="pointer-events-none absolute bottom-3.5 right-3.5 flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-semibold opacity-0 transition-all group-hover:opacity-100">
                Kunjungi situs ↗
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 px-6 py-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-stone">
                  {p.category} · Demo
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold">
                  {p.title}
                </h3>
              </div>
              <span className="font-heading text-2xl text-accent transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-stone md:hidden">
        ← geser untuk lihat lainnya →
      </p>
    </div>
  );
}
