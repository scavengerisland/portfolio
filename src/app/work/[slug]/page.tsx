import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/work";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = caseStudies.find((item) => item.slug === slug);
  const title = work
    ? `${work.name} | Ethan Hutchison`
    : "Work | Ethan Hutchison";
  return {
    title,
    description: work?.summary,
    openGraph: {
      title,
      description: work?.summary,
      url: `https://ethanh.co/work/${slug}`,
    },
    twitter: { title, description: work?.summary },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = caseStudies.find((item) => item.slug === slug);
  if (!work) notFound();
  return (
    <main className="container max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/#projects"
        className="font-semibold text-forest-800 underline underline-offset-4"
      >
        Back to selected work
      </Link>
      <article className="mt-12">
        <p className="text-sm font-medium text-forest-600">{work.category}</p>
        <h1 className="mt-3 text-4xl font-bold text-forest-900 sm:text-6xl">
          {work.name}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-forest-700">
          {work.summary}
        </p>
        <p className="mt-4 text-forest-600">{work.role}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {work.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-forest-200 bg-white/70 px-3 py-1 text-sm text-forest-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className={`mt-12 grid gap-10 ${"image" in work ? "md:grid-cols-[1fr_240px]" : ""}`}
        >
          <div className="space-y-9">
            {[
              { title: "The problem", text: work.problem },
              { title: "My work", text: work.contribution },
            ].map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-forest-900">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-relaxed text-forest-700">
                  {section.text}
                </p>
              </section>
            ))}
            <section>
              <h2 className="text-2xl font-semibold text-forest-900">
                Engineering decisions
              </h2>
              <ul className="mt-3 list-disc space-y-3 pl-5 text-lg leading-relaxed text-forest-700">
                {work.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-forest-900">
                Evidence and current status
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-forest-700">
                {work.evidence}
              </p>
              <p className="mt-3 leading-relaxed text-forest-600">
                {work.status}
              </p>
            </section>
            {"href" in work && (
              <a
                className="portfolio-button"
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View {work.name} in the App Store
              </a>
            )}
          </div>
          {"image" in work && (
            <figure>
              <Image
                src={work.image}
                alt={`${work.name} public App Store preview`}
                width={221}
                height={480}
                className="w-full max-w-[240px] rounded-2xl"
              />
              <figcaption className="mt-3 text-sm text-forest-600">
                Public App Store preview
              </figcaption>
            </figure>
          )}
        </div>
      </article>
      <footer className="mt-16 border-t border-forest-200 pt-8">
        <a
          className="font-semibold text-forest-800 underline underline-offset-4"
          href={`mailto:${site.email}`}
        >
          Discuss a project: {site.email}
        </a>
      </footer>
    </main>
  );
}
