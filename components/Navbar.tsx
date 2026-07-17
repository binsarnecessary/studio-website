"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
          Studio<em className="not-italic text-accent">Website</em>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname === l.href ? "text-accent" : "text-neutral-700"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full border border-primary px-5 py-2.5 text-[13px] font-semibold transition-colors hover:bg-primary hover:text-white md:block"
        >
          Konsultasi Gratis
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-6 pb-5 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-neutral-700"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full border border-primary px-5 py-2.5 text-center text-sm font-semibold"
          >
            Konsultasi Gratis
          </Link>
        </div>
      )}
    </header>
  );
}
