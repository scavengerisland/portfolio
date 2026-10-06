import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { caseStudies } from "@/lib/work";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24">
      <div className="container px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">
            Work you can explore.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-forest-700">
            Published mobile products, client applications, and the systems
            behind AI workflows.
          </p>
        </div>
        <a
          href="/Ethan-Hutchison-Selected-Work.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-block font-semibold text-forest-800 underline underline-offset-4"
        >
          Download selected work (PDF)
        </a>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((work) => (
            <article key={work.slug} className="glass rounded-2xl p-6 sm:p-8">
              <p className="text-sm font-medium text-forest-600">
                {work.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-forest-900">
                {work.name}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-forest-700">
                {work.summary}
              </p>
              <p className="mt-4 text-sm text-forest-600">{work.role}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-forest-200 bg-white/60 px-3 py-1 text-xs text-forest-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-5">
                <Link
                  href={`/work/${work.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-forest-800 underline underline-offset-4"
                >
                  Read the case study <ArrowRight size={16} />
                </Link>
                {"href" in work && (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700 underline underline-offset-4"
                  >
                    App Store <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <h3 className="mb-6 mt-16 text-2xl font-semibold text-forest-900">
          Client websites
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              name: "AnkerPak",
              slug: "ankerpak",
              href: "https://ankerpak.com",
              copy: "A Next.js website for a packaging and logistics business. My work includes service pages, forms, analytics, technical SEO, and accessibility fixes.",
              stack: "Next.js, React, TypeScript, Resend",
            },
            {
              name: "Luke’s Film Lab",
              slug: "lukes-film-lab",
              href: "https://lukesfilmlab.com",
              copy: "A photography portfolio with a client-editable CMS, album collections, image optimization, and a lightbox with film details.",
              stack: "Astro, Sveltia CMS, PhotoSwipe, Cloudflare",
            },
          ].map((web) => (
            <article
              key={web.slug}
              className="overflow-hidden rounded-2xl border border-forest-200 bg-white/70"
            >
              <Image
                src={`/work/${web.slug}.png`}
                width={1280}
                height={800}
                alt={`${web.name} website homepage`}
                className="aspect-[16/10] w-full border-b border-forest-200 object-cover object-top"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-forest-900">
                  {web.name}
                </h4>
                <p className="mt-3 leading-relaxed text-forest-700">
                  {web.copy}
                </p>
                <p className="mt-4 text-sm text-forest-600">{web.stack}</p>
                <a
                  href={web.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-forest-800 underline underline-offset-4"
                >
                  Visit the website <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-8 border-t border-forest-200 pt-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-forest-900">
              Business automation
            </h3>
            <p className="mt-3 leading-relaxed text-forest-700">
              For DMP, I built a Python pipeline that turns purchase-order
              emails into Epicor ERP records. The work includes validation,
              schema migrations, and human review for exceptions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-forest-900">
              AI integration and memory
            </h3>
            <p className="mt-3 leading-relaxed text-forest-700">
              Context Hub connects a PostgreSQL ledger, session capture, and an
              MCP gateway. It uses the external Hindsight memory engine with
              pgvector and OAuth access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
