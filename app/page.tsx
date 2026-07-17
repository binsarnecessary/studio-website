import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { services, portfolio, testimonials, clientFlow } from "@/lib/data";
import { waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 text-center md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Website • Automation • Digital Solution
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Build Better Digital Presence.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Kami membantu bisnis Anda memiliki website profesional, sistem
            digital, dan AI Automation yang benar-benar membantu operasional —
            bukan sekadar membuat website.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={waLink("Halo Studio Website, saya ingin konsultasi gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-3 font-medium transition-colors hover:bg-blue-700"
            >
              Konsultasi Gratis
            </a>
            <Link
              href="/portfolio"
              className="rounded-full border border-neutral-600 px-8 py-3 font-medium transition-colors hover:border-white"
            >
              Lihat Portfolio
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-neutral-500">
            <span>✓ Website Cepat</span>
            <span>✓ Design Premium</span>
            <span>✓ Harga Transparan</span>
            <span>✓ Proses Mudah</span>
            <span>✓ Support Baik</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Services"
            title="Solusi Digital untuk Bisnis Anda"
            description="Dari landing page sampai AI automation — semua dibangun dengan standar production-ready."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group rounded-2xl border border-neutral-200 p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-bold group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {s.description}
                </p>
                <p className="mt-4 font-semibold text-accent">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="font-medium text-accent hover:underline">
              Lihat semua layanan →
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Portfolio"
            title="Karya Terbaru Kami"
            description="Setiap project dibangun responsive, SEO friendly, dan production ready."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.slice(0, 6).map((p) => (
              <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-primary to-neutral-700">
                  <span className="font-heading text-2xl font-bold text-white">{p.title}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
                  <h3 className="mt-1 font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{p.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">Lihat demo live →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/portfolio" className="font-medium text-accent hover:underline">
              Lihat semua portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Process"
            title="Proses yang Jelas dari Awal"
            description="Alur kerja transparan — Anda selalu tahu project ada di tahap mana."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {clientFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm">
                  <span className="mr-2 font-bold text-accent">{i + 1}</span>
                  {step}
                </div>
                {i < clientFlow.length - 1 && (
                  <span className="hidden text-neutral-300 md:inline">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="Testimonial" title="Apa Kata Client Kami" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-white p-8 shadow-sm">
                <blockquote className="text-sm leading-relaxed text-neutral-700">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-semibold">{t.name}</p>
                  <p className="tex