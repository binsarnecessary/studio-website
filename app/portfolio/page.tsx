import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { portfolio } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio website coffee shop, restaurant, property, travel, klinik, dan lainnya — semua production ready.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Portfolio"
            title="Project yang Sudah Kami Bangun"
            description="Setiap project memiliki brand identity, responsive design, SEO, dan semua elemen production ready."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <div
                key={p.slug}
                className="overflow-hidden rounded-2xl border border-neutral-200 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary to-neutral-700">
                  <span className="font-heading text-2xl font-bold text-white">
                    {p.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
