import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Jasa pembuatan landing page, company profile website, custom web application, dan AI automation untuk bisnis Anda.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Services"
            title="Layanan Kami"
            description="Semua layanan dibangun dengan Next.js, TypeScript, dan standar modern: responsive, SEO friendly, dan cepat."
          />
          <div className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.slug}
                id={s.slug}
                className="grid gap-8 rounded-2xl border border-neutral-200 p-8 md:grid-cols-2 md:p-12"
              >
                <div>
                  <p className="text-sm font-semibold text-accent">
                    Service {i + 1}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-neutral-600">
                    {s.description}
                  </p>
                  <p className="mt-6 text-xl font-bold">{s.price}</p>
                  <a
                    href={waLink(`Halo, saya tertarik dengan layanan ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
                  >
                    Diskusikan Project Ini
                  </a>
                </div>
                <ul className="space-y-3 self-center">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 text-accent">✓</span>
                      <span className="text-neutral-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
