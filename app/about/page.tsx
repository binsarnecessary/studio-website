import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Studio Website adalah studio digital yang membantu bisnis berkembang melalui teknologi — website, web app, dan AI automation.",
};

const values = [
  { title: "Website Cepat", desc: "Target Lighthouse Performance 90+ di setiap project." },
  { title: "Design Premium", desc: "Clean, modern, dan sesuai identitas brand Anda." },
  { title: "Harga Transparan", desc: "Quotation jelas di awal, tanpa biaya tersembunyi." },
  { title: "Proses Mudah", desc: "Alur kerja 10 hari yang terstruktur dan terukur." },
  { title: "Support Baik", desc: "Masa support gratis dan paket maintenance tersedia." },
  { title: "Solusi Modern", desc: "Next.js, TypeScript, dan AI automation terkini." },
];

const stack = [
  { group: "Frontend", items: "Next.js, TypeScript, TailwindCSS" },
  { group: "Backend", items: "Node.js, Prisma, PostgreSQL" },
  { group: "Deployment", items: "Vercel, VPS" },
  { group: "Automation & AI", items: "n8n, OpenAI, Claude API, Gemini API" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Bukan Sekadar Membuat Website
          </h1>
          <p className="mt-6 leading-relaxed text-neutral-400">
            Studio Website adalah studio digital yang membantu UMKM, startup,
            personal brand, dan bisnis lokal memiliki website profesional,
            sistem digital, dan AI automation yang benar-benar membantu
            operasional. Kami membantu bisnis berkembang melalui teknologi.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Mission"
            title="Nilai yang Kami Pegang"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Teknologi Modern & Teruji"
            description="Kami memilih teknologi yang cepat, aman, dan mudah dikembangkan."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((s) => (
              <div key={s.group} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{s.group}</p>
                <p className="mt-2 text-sm font-medium text-neutral-800">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
