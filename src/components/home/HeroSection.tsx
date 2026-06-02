"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, containerVariants, itemVariants } from "@/lib/site";

const socials = [
  { name: "GitHub", href: site.github, Icon: Github, external: true },
  { name: "LinkedIn", href: site.linkedin, Icon: Linkedin, external: true },
  { name: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
];

const stats = [
  { value: "5+ yrs", label: "Production AWS" },
  { value: "$500M", label: "FedEx cloud migration" },
  { value: "100%", label: "Terraform IaC" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-0 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-forest-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-sage-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Signature logo */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="font-signature text-3xl sm:text-4xl text-forest-600">
                {"< "}
                <span className="text-forest-800">Ethan Hutchison</span>
                {" />"}
              </span>
            </motion.div>

            {/* Open-to-work signal */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-forest-100 px-4 py-1.5 text-sm font-medium text-forest-700 ring-1 ring-forest-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-forest-600" />
                </span>
                Open to AWS / cloud / data-engineering roles
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-3 text-balance"
            >
              Cloud &amp; Data Engineer building on{" "}
              <span className="text-forest-600">AWS</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-semibold text-forest-500 mb-6"
            >
              AWS Infrastructure · Data Pipelines · Production GenAI on Anthropic
              Anthropic
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-forest-700 mb-8 max-w-xl leading-relaxed"
            >
              I design Well-Architected, multi-tenant AWS infrastructure
              end-to-end with Terraform, ship ETL and data pipelines, and deliver
              production generative AI built on Anthropic. Enterprise-proven
              at FedEx&apos;s $500M cloud migration, and hands-on as a consultant
              who takes systems from architecture to production fast.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-7"
            >
              <Button size="lg" asChild>
                <a href="#projects">
                  See the work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Hire me</a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href={site.resumeHref} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {socials.map(({ name, href, Icon, external }) => (
                <a
                  key={name}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-forest-800 text-cream-50 flex items-center justify-center hover:bg-forest-700 hover:scale-110 transition-all duration-200"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats / proof panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-3xl bg-forest-900 p-8 shadow-2xl ring-1 ring-forest-800">
              {/* faux terminal header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-forest-300">
                  ethan@aws:~
                </span>
              </div>

              <div className="font-mono text-sm leading-relaxed text-forest-100 space-y-1">
                <p>
                  <span className="text-forest-400">$</span> terraform apply
                </p>
                <p className="text-forest-300">
                  + ECS Fargate · RDS Postgres · S3 · VPC
                </p>
                <p className="text-forest-300">
                  + KMS per-tenant envelope encryption
                </p>
                <p className="text-forest-300">+ IAM/ABAC · GitHub OIDC CI/CD</p>
                <p className="text-emerald-300">
                  Apply complete. stage + prod ✓
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-forest-800 pt-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-bold text-cream-50">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] leading-tight text-forest-300">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-forest-400">
                AWS certifications in progress — Cloud Practitioner &amp;
                Solutions Architect Associate (2026).
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-forest-600 hover:text-forest-800 transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-sm mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-forest-400 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-forest-600 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
