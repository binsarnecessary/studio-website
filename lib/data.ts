export type Service = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  price: string;
};

export const services: Service[] = [
  {
    slug: "landing-page",
    title: "Landing Page",
    description:
      "Landing page cepat, modern, dan fokus konversi untuk personal brand, event, produk, dan UMKM.",
    features: [
      "1 halaman fokus konversi",
      "Design premium & responsive",
      "SEO friendly",
      "Contact form & WhatsApp CTA",
      "Loading cepat (Lighthouse 90+)",
    ],
    price: "Rp2.500.000",
  },
  {
    slug: "company-profile",
    title: "Company Profile Website",
    description:
      "Website company profile profesional untuk company, klinik, restaurant, coffee shop, property, dan travel.",
    features: [
      "5-8 halaman lengkap",
      "About, Services, Gallery, FAQ",
      "Testimonial & Pricing",
      "SEO & Open Graph",
      "Google Analytics",
    ],
    price: "Rp5.000.000",
  },
  {
    slug: "custom-web-app",
    title: "Custom Web Application",
    description:
      "Aplikasi web sesuai kebutuhan bisnis: dashboard, CRM, booking system, inventory, dan internal system.",
    features: [
      "Dashboard & CRM",
      "Booking & Inventory System",
      "Internal System",
      "Database PostgreSQL",
      "Deploy ke Vercel / VPS",
    ],
    price: "Mulai Rp10.000.000",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    description:
      "Otomatisasi bisnis dengan AI: WhatsApp automation, email automation, n8n workflow, chatbot AI, dan lead automation.",
    features: [
      "WhatsApp Automation",
      "Email Automation",
      "n8n Workflow",
      "Chatbot AI (OpenAI / Claude / Gemini)",
      "Lead Automation",
    ],
    price: "By Requirement",
  },
];

export const pricing = [
  {
    name: "Landing Page",
    price: "Rp2.500.000",
    unit: "sekali bayar",
    popular: false,
    features: [
      "1 halaman fokus konversi",
      "Design premium",
      "Responsive semua device",
      "SEO friendly",
      "WhatsApp CTA",
      "Deploy & domain setup",
    ],
  },
  {
    name: "Company Profile",
    price: "Rp5.000.000",
    unit: "sekali bayar",
    popular: true,
    features: [
      "5-8 halaman lengkap",
      "Design premium custom",
      "Gallery, FAQ, Testimonial",
      "SEO & Open Graph",
      "Google Analytics",
      "1 bulan support gratis",
    ],
  },
  {
    name: "Business Website",
    price: "Rp8.000.000",
    unit: "sekali bayar",
    popular: false,
    features: [
      "Semua fitur Company Profile",
      "Blog / CMS",
      "Booking / katalog produk",
      "Copywriting dibantu",
      "Optimasi kecepatan penuh",
      "3 bulan support gratis",
    ],
  },
  {
    name: "Custom Web App",
    price: "Rp10.000.000+",
    unit: "sesuai scope",
    popular: false,
    features: [
      "Dashboard / CRM / Booking",
      "Database & authentication",
      "Custom fitur sesuai bisnis",
      "AI Automation opsional",
      "Deploy Vercel / VPS",
      "Maintenance tersedia",
    ],
  },
];

export const portfolio = [
  { slug: "coffee-shop", title: "Kopi Senja", category: "Coffee Shop", description: "Website coffee shop dengan menu digital, gallery, dan reservasi via WhatsApp.", url: "https://coffe-shop-three-lake.vercel.app" },
  { slug: "restaurant", title: "Rasa Nusantara", category: "Restaurant", description: "Company profile restaurant dengan menu, reservasi online, dan lokasi cabang.", url: "https://my-restaurant-beryl.vercel.app" },
  { slug: "property", title: "Griya Land", category: "Property", description: "Website listing property dengan katalog unit, brosur digital, dan lead form.", url: "https://property-taupe-five.vercel.app" },
  { slug: "travel", title: "Jelajah Trip", category: "Travel", description: "Website travel agency dengan paket tour, itinerary, dan booking online.", url: "https://anywhere-travel.vercel.app" },
  { slug: "gym", title: "Forge Fitness", category: "Gym", description: "Landing page gym dengan jadwal kelas, membership pricing, dan free trial CTA.", url: "https://gym-neon-theta.vercel.app" },
  { slug: "dental-clinic", title: "Smile Dental", category: "Dental Clinic", description: "Website klinik gigi dengan layanan, dokter, dan booking appointment.", url: "https://clinic-seven-sooty.vercel.app" },
  { slug: "barbershop", title: "Crown Barber", category: "Barbershop", description: "Landing page barbershop dengan price list, gallery, dan booking WhatsApp.", url: "https://barbershop-nine-rho.vercel.app" },
  { slug: "law-firm", title: "Adhikara Law", category: "Law Firm", description: "Company profile firma hukum dengan practice area dan konsultasi online.", url: "https://lawfirm-opal-nine.vercel.app" },
  { slug: "interior-design", title: "Ruang Studio", category: "Interior Design", description: "Portfolio interior design dengan project showcase dan konsultasi desain.", url: "https://interior-dessign.vercel.app" },
  { slug: "saas", title: "Alurin", category: "SaaS", description: "Landing page SaaS dengan fitur produk, pricing tiers, dan demo request.", url: "https://do-with-saas.vercel.app" },
];

export const testimonials = [
  {
    name: "Andi Pratama",
    role: "Owner, Kopi Senja",
    text: "Websitenya cepat banget dan designnya premium. Sejak launch, reservasi lewat WhatsApp naik signifikan.",
  },
  {
    name: "Sarah Wijaya",
    role: "Marketing, Griya Land",
    text: "Prosesnya jelas dari awal: quotation transparan, timeline jelas, revisi cepat. Sangat profesional.",
  },
  {
    name: "Budi Santoso",
    role: "Founder, Jelajah Trip",
    text: "Bukan cuma bikin website, tapi juga dibantu automation WhatsApp untuk booking. Operasional jadi jauh lebih ringan.",
  },
];

export const faqs = [
  {
    q: "Berapa lama proses pembuatan website?",
    a: "Standar 10 hari kerja: requirement, wireframe, design, development, revisi, testing, dan deploy. Project custom bisa lebih lama sesuai scope.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "DP 50% di awal setelah quotation disetujui, pelunasan 50% setelah website selesai dan sebelum deploy ke domain Anda.",
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Setup domain dan deploy sudah termasuk. Biaya sewa domain/hosting tahunan dibayar terpisah sesuai provider yang dipilih.",
  },
  {
    q: "Apakah website bisa saya update sendiri?",
    a: "Bisa. Untuk kebutuhan update konten rutin, kami sediakan CMS (Payload CMS atau Sanity) sehingga Anda bisa update tanpa coding.",
  },
  {
    q: "Apakah ada garansi atau support setelah launch?",
    a: "Ada. Setiap paket termasuk masa support gratis, dan tersedia paket maintenance mulai Rp300.000/bulan.",
  },
  {
    q: "Apakah websitenya SEO friendly dan mobile friendly?",
    a: "Ya. Semua website kami responsive, SEO friendly, dan menargetkan skor Lighthouse: Performance 90+, SEO 95+.",
  },
];

export const blogPosts = [
  {
    slug: "kenapa-bisnis-butuh-website-2026",
    title: "Kenapa Bisnis Anda Butuh Website di 2026",
    category: "Business",
    date: "2026-06-15",
    excerpt: "Media sosial saja tidak cukup. Website adalah aset digital yang Anda kontrol penuh — ini alasannya.",
  },
  {
    slug: "landing-page-vs-company-profile",
    title: "Landing Page vs Company Profile: Mana yang Anda Butuhkan?",
    category: "Website",
    date: "2026-06-20",
    excerpt: "Keduanya berbeda tujuan. Panduan singkat memilih jenis website yang tepat untuk bisnis Anda.",