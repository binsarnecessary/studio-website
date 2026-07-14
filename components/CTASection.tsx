import Link from "next/link";
import { waLink } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Siap Membangun Digital Presence yang Lebih Baik?
        </h2>
        <p className="mt-4 text-neutral-400">
          Konsultasi gratis. Ceritakan kebutuhan bisnis Anda, kami bantu
          rekomendasikan solusi yang tepat — tanpa komitmen.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink("Halo Studio Website, saya ingin konsultasi gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-8 py-3 font-medium transition-colors hover:bg-blue-700"
          >
            Konsultasi Gratis via WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-neutral-600 px-8 py-3 font-medium transition-colors hover:border-white"
          >
            Kirim Pesan
          </Link>
        </div>
      </div>
    </section>
  );
}
