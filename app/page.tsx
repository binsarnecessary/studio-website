import Link from "next/link";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import { services, portfolio, testimonials } from "@/lib/data";
import { waLink } from "@/lib/site";

const romanNum = ["i", "ii", "iii", "iv", "v", "vi"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone md:text-xs">
            Website · Automation · Digital Solution
          </p>
          <h1 className="mt-6 font-heading text-[46px] font-semibold leading-[1.04] tracking-tight sm:text-6xl md:text-8xl">
            Build better
            <br />
            <span className="italic font-medium">digital</span> presence.
          </h1>
          <div className="mt-8 flex flex-col items-start justify-between gap-8 md:mt-12 md:flex-row md:items-end">
            <p className="max-w-md font-prose text-xl leading-relaxed text-neutral-600 md:text-2xl">
              Studio digital yang membantu bisnis memiliki website profesional,
              sistem digital, dan AI automation — yang benar-benar membantu
              operasional, bukan sekadar tampilan.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Lihat Karya Kami
              </Link>
              <a
                href={waLink("Halo Studio Website, saya ingin konsultasi gratis.")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 border-primary pb-1 text-sm font-semibold transition-colors hover:text-accent hover:border-accent"
              >
                Konsultasi →
              </a>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 text-[13px] text-stone">
            <span><b className="font-semibold text-primary">10+</b> Project Selesai</span>
            <span><b className="font-semibold text-primary">90+</b> Skor Lighthouse</span>
            <span><b className="font-semibold text-primary">10 Hari</b> Rata-rata Pengerjaan</span>
            <span><b className="font-semibold text-primary">Gratis</b> Konsultasi &amp; Revisi</span>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="max-w-[16ch] font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Solusi digital untuk bisnis Anda
            </h2>
            <p className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone md:block">
              01 — Services
            </p>
          </div>
          <div>
            {services.map((s, i) => (
              <div
                key={s.slug}
                className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 border-t border-line py-7 transition-all last:border-b hover:bg-cream md:grid-cols-[56px_1fr_auto] md:gap-6 md:py-9 md:hover:pl-3.5"
              >
                <span className="font-heading text-lg italic text-stone md:text-xl">
                  {romanNum[i]}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-[52ch] font-prose text-lg text-stone md:text-xl">
                    {s.description}
                  </p>
                </div>
                <span className="col-start-2 whitespace-nowrap text-sm font-semibold text-accent md:col-start-3">
                  {s.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="overflow-hidden bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <PortfolioShowcase items={portfolio} variant="carousel" />
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="border-b-2 border-primary pb-1 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Lihat semua portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Apa kata client kami
            </h2>
            <p className="hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone md:block">
              03 — Testimonial
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-line bg-white p-8">
                <blockquote className="font-heading text-lg italic leading-relaxed text-neutral-800">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-stone">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-8 md:py-32">
          <h2 className="mx-auto max-w-[16ch] font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Siap membangun{" "}
            <span className="italic font-medium text-blue-300">presence</span>{" "}
            yang lebih baik?
          </h2>
          <p className="mx-auto mt-6 max-w-md font-prose text-xl leading-relaxed text-neutral-400 md:text-2xl">
            Konsultasi gratis. Ceritakan kebutuhan bisnis Anda, kami bantu
            rekomendasikan solusi yang tepat — tanpa komitmen.
          </p>
          <a
            href={waLink("Halo Studio Website, saya ingin konsultasi gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
