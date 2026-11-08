import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kebijakan privasi Ukirkode.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20">
      <div className="prose mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-neutral-500">Terakhir diperbarui: Juli 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-700">
          <p>
            Ukirkode menghargai privasi Anda. Halaman ini menjelaskan
            bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
            Anda saat menggunakan website ini.
          </p>
          <h2 className="text-xl font-bold text-primary">Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara sukarela
            melalui form kontak atau WhatsApp, seperti nama, nama bisnis, dan
            kebutuhan project. Kami juga menggunakan analytics untuk memahami
            penggunaan website secara agregat dan anonim.
          </p>
          <h2 className="text-xl font-bold text-primary">Penggunaan Informasi</h2>
          <p>
            Informasi Anda digunakan hanya untuk merespons pertanyaan,
            menyiapkan quotation, dan berkomunikasi terkait project. Kami tidak
            menjual atau membagikan data Anda kepada pihak ketiga.
          </p>
          <h2 className="text-xl font-bold text-primary">Cookies & Analytics</h2>
          <p>
            Website ini dapat menggunakan cookies untuk keperluan analytics.
            Anda dapat menonaktifkan cookies melalui pengaturan browser.
          </p>
          <h2 className="text-xl font-bold text-primary">Kontak</h2>
          <p>
            Pertanyaan tentang kebijakan ini dapat dikirim ke{" "}
            <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
