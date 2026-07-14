import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel tentang website, AI, business, automation, technology, case study, dan tutorial.",
};

export default function BlogPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Blog"
          title="Insight & Tutorial"
          description="Belajar tentang website, AI automation, dan strategi digital untuk bisnis."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-neutral-200 p-6 transition-shadow hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {post.category}
              </p>
              <h2 className="mt-2 flex-1 text-lg font-bold">{post.title}</h2>
              <p className="mt-3 text-sm text-neutral-600">{post.excerpt}</p>
              <time className="mt-4 text-xs text-neutral-400" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-neutral-500">
          Artikel lengkap segera hadir. Follow media sosial kami untuk update.
        </p>
      </div>
    </section>
  );
}
