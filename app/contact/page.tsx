import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Ukirkode untuk konsultasi gratis, website audit gratis, atau diskusi project Anda.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Mari Diskusikan Project Anda"
          description="Konsultasi gratis dan website audit gratis — tanpa komitmen."
        />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <a
              href={waLink("Halo Ukirkode, saya ingin konsultasi gratis.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-bold">WhatsApp</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Respon tercepat — langsung chat dengan tim kami.
              </p>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-bold">Email</h3>
              <p className="mt-1 text-sm text-neutral-600">{site.email}</p>
            </a>
            <div className="rounded-2xl bg-secondary p-6">
              <h3 className="font-bold">Website Audit Gratis</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Sudah punya website? Kirimkan link-nya, kami audit kecepatan,
                SEO, dan design secara gratis.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
