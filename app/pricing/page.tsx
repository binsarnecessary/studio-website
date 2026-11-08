import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { pricing } from "@/lib/data";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Harga transparan: Landing Page Rp2.500.000, Company Profile Rp5.000.000, Business Website Rp8.000.000, Custom Web App mulai Rp10.000.000.",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Pricing"
            title="Harga Transparan, Tanpa Biaya Tersembunyi"
            description="Pilih paket sesuai kebutuhan. Semua paket termasuk design premium, responsive, dan SEO friendly."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  p.popular
                    ? "border-accent shadow-lg"
                    : "border-neutral-200"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    Rekomendasi
                  </span>
                )}
                <h3 className="font-bold">{p.name}</h3>
                <p className="mt-3 text-2xl font-bold">{p.price}</p>
                <p className="text-xs text-neutral-500">{p.unit}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="mt-0.5 text-accent">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Halo, saya tertarik dengan paket ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 rounded-full px-6 py-2.5 text-center text-sm font-medium transition-colors ${
                    p.popular
                      ? "bg-accent text-white hover:bg-blue-700"
                      : "bg-primary text-white hover:bg-accent"
                  }`}
                >
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-secondary p-8 text-center">
            <h3 className="font-bold">AI Automation & Maintenance</h3>
            <p className="mt-2 text-sm text-neutral-600">
              AI Automation dihargai sesuai kebutuhan (by requirement).
              Maintenance website mulai <strong>Rp300.000/bulan</strong>.
              Harga dapat berubah sewaktu-waktu.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
