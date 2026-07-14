export const site = {
  name: "Studio Website",
  tagline: "Build Better Digital Presence.",
  subTagline: "Website • Automation • Digital Solution",
  description:
    "Studio digital yang membantu bisnis memiliki website profesional, sistem digital, dan AI Automation. Website cepat, design premium, harga transparan.",
  url: "https://studiowebsite.id",
  email: "binsar16febuary@gmail.com",
  whatsapp: "6281234567890", // TODO: ganti dengan nomor WhatsApp asli
  socials: {
    tiktok: "https://tiktok.com/@studiowebsite",
    instagram: "https://instagram.com/studiowebsite",
    linkedin: "https://linkedin.com/company/studiowebsite",
  },
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
