import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="font-heading text-xl font-bold text-white">
            Studio<span className="text-accent">Website</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {site.tagline}
            <br />
            {site.subTagline}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Services</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-accent">Landing Page</Link></li>
            <li><Link href="/services" className="hover:text-accent">Company Profile</Link></li>
            <li><Link href="/services" className="hover:text-accent">Custom Web App</Link></li>
            <li><Link href="/services" className="hover:text-accent">AI Automation</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-accent">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Connect</p>
          <ul className="space-y-2 text-sm">
            <li><a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-accent">TikTok</a></li>
            <li><a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Instagram</a></li>
            <li><a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-accent">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
