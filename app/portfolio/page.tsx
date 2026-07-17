import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio website coffee shop, restaurant, property, travel, klinik, dan lainnya — semua production ready.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone">
              Portfolio
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">
              Project yang sudah kami bangun
            </h1>
            <p className="mt-5 font-prose text-lg text-neutral-600 md:text-xl">
              Setiap project memiliki brand identity, responsive design, SEO, dan
              semua elemen production ready. Klik <strong>Lihat</strong> untuk
              melihat langsung di sini, atau <strong>Kunjungi</strong> untuk
              membuka situsnya.
            </p>
          </div>
          <PortfolioShowcase items={portfolio} variant="grid" />
        </div>
      </section>
      <CTASection />
    </>
  );
}
