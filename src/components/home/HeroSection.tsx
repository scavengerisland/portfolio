import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { site } from "@/lib/site";
import { appStore } from "@/lib/work";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center py-28 lg:py-32"
    >
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-5 font-signature text-4xl text-forest-700">
              Ethan Hutchison
            </p>
            <p className="mb-6 text-sm font-semibold text-forest-700">
              Software engineer · Waco, Texas
            </p>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-forest-900 sm:text-5xl lg:text-6xl">
              AI agents, web apps, and mobile products.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-forest-700">
              I build software around real business workflows. My work spans
              enterprise systems at FedEx, client applications, and two iOS apps
              published in the App Store.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="portfolio-button" href="#projects">
                Explore my work <ArrowRight size={18} />
              </a>
              <a
                className="portfolio-button portfolio-button-light"
                href={site.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} /> Download resume
              </a>
            </div>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-forest-600">
              Five years of software engineering. Hands-on AI and full-stack
              delivery, backed by AWS infrastructure and CI/CD experience.
            </p>
            <a
              className="mt-5 inline-block text-sm font-semibold text-forest-800 underline underline-offset-4"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
          <div className="glass rounded-3xl p-5 sm:p-7">
            <h2 className="text-xl font-semibold text-forest-900">
              Two apps. Published.
            </h2>
            <p className="mt-2 text-sm text-forest-600">
              Built and released through Light Works Studio.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { name: "LymeTrack", slug: "lymetrack", href: appStore.lyme },
                {
                  name: "FermentBuddy",
                  slug: "fermentbuddy",
                  href: appStore.ferment,
                },
              ].map((app) => (
                <a
                  key={app.slug}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl"
                >
                  <Image
                    src={`/work/${app.slug}-screen.jpg`}
                    alt={`${app.name} public App Store preview`}
                    width={221}
                    height={480}
                    priority
                    className="w-full rounded-2xl border border-white/80 transition-transform group-hover:-translate-y-1"
                  />
                  <span className="mt-3 block text-sm font-semibold text-forest-900">
                    {app.name}
                  </span>
                  <span className="mt-1 block text-xs text-forest-600 underline underline-offset-4">
                    View in the App Store
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
