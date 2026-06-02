"use client";

import { motion } from "framer-motion";
import { Activity, Timer, Workflow, LineChart } from "lucide-react";
import { OrqestrateDiagram } from "@/components/home/OrqestrateDiagram";
import { containerVariants, itemVariants } from "@/lib/site";

/**
 * HONESTY BOUNDARIES:
 *  - "Built on Anthropic" only for Orqestrate, LymeTrack, FermentBuddy.
 *  - Genni uses OpenAI — tagged accordingly, never Anthropic.
 *  - No Spark/Kafka/Glue/Athena/Redshift/EMR/dbt/Airflow/Snowflake/Databricks.
 */

const secondaryProjects = [
  {
    title: "LymeTrack",
    tagline: "Health tracking app · Anthropic",
    icon: Activity,
    accent: "bg-rose-500",
    description:
      "Full-stack health app for Lyme patients. Complex day-centric data model, real-time analytics, and AI features on Anthropic.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Convex",
      "Clerk",
      "Anthropic",
      "200+ tests",
    ],
  },
  {
    title: "FermentBuddy",
    tagline: "Fermentation app · Anthropic",
    icon: Timer,
    accent: "bg-amber-500",
    description:
      "React Native 0.81 + Expo SDK 54 app built with Anthropic. Convex serverless backend, EAS build/deploy, Superwall payments — concept to store-ready.",
    tags: [
      "React Native",
      "Expo / EAS",
      "Convex",
      "Superwall",
      "Anthropic",
      "PostHog / Sentry",
    ],
  },
  {
    title: "DMP Email → Epicor ETL",
    tagline: "Data-engineering consulting",
    icon: Workflow,
    accent: "bg-forest-600",
    description:
      "Python email-to-ERP ETL pipeline: OCR-extracts structured purchase orders (~95% accuracy) into Epicor. Targeting 220 orders/day (~$33K/yr) with schema migrations and a human-in-the-loop validation layer.",
    tags: [
      "Python",
      "ETL Pipeline",
      "OCR",
      "Epicor ERP",
      "Schema Migrations",
      "~95% accuracy",
    ],
  },
  {
    title: "Genni",
    tagline: "B2B SaaS · multi-agent",
    icon: LineChart,
    accent: "bg-indigo-500",
    description:
      "Enterprise B2B lead-gen platform (Turborepo): React frontend, Python FastAPI multi-agent worker, Convex backend, Stripe billing. 8-table data model with an atomic two-phase-commit credit system.",
    tags: [
      "Python",
      "FastAPI",
      "Multi-Agent AI",
      "OpenAI",
      "Convex",
      "Stripe",
    ],
  },
];

const orqStack = [
  "AWS",
  "Terraform",
  "ECS Fargate",
  "RDS Postgres",
  "S3 / EFS",
  "VPC",
  "KMS (per-tenant)",
  "IAM / ABAC",
  "GitHub OIDC CI/CD",
  "Anthropic",
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-cream-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-forest-600 font-medium text-sm uppercase tracking-wider">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Production systems, shipped.
            </h2>
            <p className="text-forest-600 mt-4 max-w-2xl mx-auto">
              Real AWS infrastructure, data pipelines, and AI products — taken
              from architecture to production.
            </p>
          </motion.div>

          {/* Flagship: Orqestrate */}
          <motion.article
            variants={itemVariants}
            className="mb-12 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-forest-100"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: copy */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-forest-800 px-3 py-1 text-xs font-semibold text-cream-50">
                    Flagship
                  </span>
                  <span className="rounded-full bg-[#FF9900]/15 px-3 py-1 text-xs font-semibold text-[#b36b00]">
                    AWS · Anthropic
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-forest-900">
                  Orqestrate
                </h3>
                <p className="mt-1 text-sm font-medium text-forest-500">
                  Agentic AI platform on AWS · Founder &amp; Architect
                </p>

                <p className="mt-4 text-forest-700 leading-relaxed">
                  A multi-tenant platform that orchestrates a fleet of
                  specialized AI agents (architect, builder, orchestrator) in
                  isolated Fargate workers — powered by Anthropic. I
                  designed and deployed the whole AWS footprint end-to-end with
                  Terraform across isolated stage and prod VPCs.
                </p>

                <ul className="mt-5 space-y-2">
                  {[
                    "100% Terraform IaC — modules across shared / stage / prod",
                    "Defense-in-depth: per-tenant KMS envelope encryption, IAM least-privilege + ABAC",
                    "Keyless GitHub OIDC CI/CD — zero long-lived credentials",
                    "Cost-optimized dual-environment footprint (~$130–160/mo)",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-forest-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {orqStack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-forest-200 bg-cream-50 px-3 py-1 text-xs font-medium text-forest-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: architecture diagram */}
              <div className="flex flex-col justify-center bg-forest-50 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-forest-100">
                <OrqestrateDiagram className="w-full h-auto" />
                <p className="mt-3 text-center text-xs text-forest-500">
                  Architecture · AWS us-east-2 · stage + prod
                </p>
              </div>
            </div>
          </motion.article>

          {/* Secondary projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="group flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${project.accent} text-white shadow-sm`}
                  >
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-forest-900">
                      {project.title}
                    </h3>
                    <p className="text-sm text-forest-500">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-forest-700">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-forest-200 bg-cream-50 px-2.5 py-1 text-xs font-medium text-forest-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
