"use client";

import { motion } from "framer-motion";
import { Building2, Cloud, Workflow, ShieldCheck } from "lucide-react";
import { containerVariants } from "@/lib/site";

const experiences = [
  {
    title: "Software Developer II — Cloud & DevOps",
    company: "FedEx",
    note: "Promoted Intern → Dev I → Dev II",
    location: "Remote",
    duration: "Jun 2021 – Present",
    icon: Building2,
    color: "bg-purple-100 text-purple-700",
    highlights: [
      "Contributed to a $500M mainframe-retirement initiative, migrating mission-critical Freight systems to modern cloud infrastructure.",
      "Led the org's first Jenkins → GitHub Actions CI/CD migration across ~15 applications.",
      "Administered 13 critical enterprise Java/Spring Boot apps — config, security patching, IAM, production troubleshooting.",
      "Built Splunk/AppDynamics analytics dashboards; AI-assisted code analysis for ~50% refactoring gains and 80% test coverage.",
      "Architected GitSync (PowerShell) for auditable batch Git-repo migration during a multi-billion-dollar corporate separation.",
      "Delivered quarterly roadmap presentations to 400+ stakeholders.",
    ],
  },
  {
    title: "Founder & Lead Cloud / AI Engineer",
    company: "Light Works Studio",
    note: "",
    location: "Remote",
    duration: "Jan 2023 – Present",
    icon: Cloud,
    color: "bg-forest-100 text-forest-700",
    highlights: [
      "Designed & deployed a multi-tenant AWS platform end-to-end with Terraform — ECS Fargate, RDS PostgreSQL, S3, EFS, VPC, ALB, CloudWatch/CloudTrail — across isolated stage + prod VPCs.",
      "Implemented defense-in-depth: KMS envelope encryption with per-tenant data keys, Secrets Manager, IAM least-privilege + ABAC, and GitHub OIDC for keyless CI/CD.",
      "Engineered Orqestrate, an Anthropic-powered agentic platform running specialized agents in isolated Docker/Fargate workers.",
      "Shipped production apps built on Anthropic (LymeTrack, FermentBuddy) from architecture through App Store release, with Sentry/PostHog observability.",
      "Engineered cost-optimized infrastructure (full dual-environment footprint at ~$130–160/mo).",
    ],
  },
  {
    title: "Data Engineering Consultant — ETL Pipeline",
    company: "DMP (Manufacturing & Distribution)",
    note: "Contract",
    location: "Remote",
    duration: "Oct 2024 – Present",
    icon: Workflow,
    color: "bg-amber-100 text-amber-700",
    highlights: [
      "Built a Python email-to-ERP ETL pipeline: OCR-extracts structured purchase orders (~95% accuracy) and loads them into Epicor — targeting 220 orders/day (~$33K/yr).",
      "Designed the data flow, schema migrations, validation/warning layer, and human-in-the-loop feedback loop.",
      "Implemented multi-source extraction, OCR provider selection, and per-order error handling for reliable production processing.",
    ],
  },
  {
    title: "Cloud & Security Consultant / Sysadmin",
    company: "Talking Bibles International",
    note: "",
    location: "Remote",
    duration: "Jan 2023 – Present",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-700",
    highlights: [
      "Recovered a fully compromised AWS environment (EC2, S3, Lightsail, Route53, IAM) — restored root access, disabled compromised users, shut down unauthorized crypto-mining, added emergency controls and cost monitoring.",
      "Consolidated 25+ email accounts and legacy systems across multiple domains/registrars with zero data loss.",
      "Designed a 3-month stabilization program: disaster recovery, centralized secrets, 24/7 monitoring, and staff training.",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-white">
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
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Enterprise scale, consultant speed.
            </h2>
            <p className="text-forest-600 mt-4 max-w-2xl mx-auto">
              From FedEx&apos;s $500M cloud migration to AWS infrastructure I own
              end-to-end and data pipelines in production.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-forest-200 hidden md:block" />

              {experiences.map((exp) => (
                <motion.div
                  key={`${exp.company}-${exp.title}`}
                  variants={itemVariants}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex gap-6">
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full ${exp.color} flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      <exp.icon className="w-7 h-7" />
                    </div>

                    <div className="flex-1 bg-cream-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-forest-900">
                            {exp.title}
                          </h3>
                          <p className="text-forest-600 font-medium">
                            {exp.company}
                            {exp.note ? (
                              <span className="text-forest-400 font-normal">
                                {" "}
                                · {exp.note}
                              </span>
                            ) : null}
                          </p>
                        </div>
                        <div className="text-right text-sm text-forest-500">
                          <p>{exp.duration}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-forest-700 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
