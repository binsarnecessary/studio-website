"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", business: "", service: "Landing Page", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Studio Website!\n\nNama: ${form.name}\nBisnis: ${form.business}\nLayanan: ${form.service}\n\n${form.message}`;
    window.open(waLink(text), "_blank");
  };

  const input =
    "w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-neutral-200 p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Nama</label>
        <input
          id="name"
          required
          className={input}
          placeholder="Nama Anda"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="business" className="mb-1.5 block text-sm font-medium">Nama Bisnis</label>
        <input
          id="business"
          className={input}
          placeholder="Nama bisnis / brand"
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium">Layanan</label>
        <select
          id="service"
          className={input}
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
        >
          <option>Landing Page</option>
          <option>Company Profile Website</option>
          <option>Business Website</option>
          <option>Custom Web Application</option>
          <option>AI Automation</option>
          <option>Lainnya</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Pesan</label>
        <textarea
          id="message"
          required
          rows={4}
          className={input}
          placeholder="Ceritakan kebutuhan project Anda..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
      >
        Kirim via WhatsApp
      </button>
    </form>
  );
}
