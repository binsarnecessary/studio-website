# Studio Website

Website utama Studio Website — *Build Better Digital Presence.*

Dibangun sesuai blueprint di `docs.md`: Next.js 15 (App Router), TypeScript, TailwindCSS v4.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Build Production

```bash
npm run build
npm start
```

Deploy termudah: push ke GitHub lalu import ke [Vercel](https://vercel.com).

## Yang Perlu Diganti Sebelum Launch

1. **Nomor WhatsApp** — edit `lib/site.ts` → `whatsapp` (masih placeholder `6281234567890`)
2. **Domain** — edit `lib/site.ts` → `url`
3. **Link media sosial** — edit `lib/site.ts` → `socials`
4. **Testimonial & portfolio** — masih dummy, edit di `lib/data.ts`
5. **Logo & favicon** — tambahkan `app/icon.png` (Next.js otomatis pakai sebagai favicon)

## Struktur

```
app/            → halaman (Home, About, Services, Portfolio, Pricing, FAQ, Blog, Contact, Privacy, Terms)
components/     → komponen reusable (Navbar, Footer, WhatsAppFloat, ContactForm, dll)
lib/site.ts     → konfigurasi brand, kontak, sosmed
lib/data.ts     → konten (services, pricing, portfolio, FAQ, blog, testimonial)
docs.md         → business blueprint
```

## Brand

- Primary `#111111` · Secondary `#F5F5F5` · Accent `#2563EB`
- Heading: Playfair Display · Body: Inter
