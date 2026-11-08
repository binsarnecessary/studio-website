import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Syarat dan ketentuan layanan Ukirkode.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-neutral-500">Terakhir diperbarui: Juli 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-700">
          <h2 className="text-xl font-bold text-primary">1. Layanan</h2>
          <p>
            Ukirkode menyediakan jasa pembuatan landing page, company
            profile website, custom web application, dan AI automation. Scope
            pekerjaan setiap project ditentukan dalam quotation yang disetujui
            kedua pihak.
          </p>
          <h2 className="text-xl font-bold text-primary">2. Pembayaran</h2>
          <p>
            Pembayaran dilakukan dengan DP 50% di awal dan pelunasan 50%
            setelah pekerjaan selesai, sebelum deployment ke domain client.
            Harga dapat berubah sewaktu-waktu untuk project baru.
          </p>
          <h2 className="text-xl font-bold text-primary">3. Revisi</h2>
          <p>
            Setiap paket termasuk sesi revisi sesuai kesepakatan dalam
            quotation. Revisi di luar scope akan dihitung sebagai pekerjaan
            tambahan.
          </p>
          <h2 className="text-xl font-bold text-primary">4. Timeline</h2>
          <p>
            Timeline standar adalah 10 hari kerja dan dapat berubah sesuai
            kompleksitas project serta kecepatan client dalam memberikan
            materi dan feedback.
          </p>
          <h2 className="text-xl font-bold text-primary">5. Hak Kekayaan Intelektual</h2>
          <p>
            Setelah pelunasan, hak penggunaan website berpindah ke client.
            Ukirkode berhak menampilkan project sebagai portfolio kecuali
            diminta sebaliknya.
          </p>
          <h2 className="text-xl font-bold text-primary">6. Kontak</h2>
          <p>
            Pertanyaan tentang ketentuan ini dapat dikirim ke{" "}
            <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
