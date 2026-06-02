"use client";

import { motion } from "framer-motion";
import { Building2, Cloud } from "lucide-react";
import { containerVariants } from "@/lib/site";

const experiences = [
  {
    title: "Software Developer II, Cloud & DevOps",
    company: "FedEx",
    note: "Promoted Intern → Dev I → Dev II",
    location: "Remote",
    duration: "Jun 2021 – Present · 5 yrs",
    icon: Building2,
    color: "bg-purple-100 text-purple-700",
    highlights: [
      "Led the org's first migration from Jenkins → GitHub Actions across ~15 applications, standardizing automated CI/CD (build, test, deploy) and a build-once-promote release flow that became the template for future conversions.",
      "Contributed to a $500M mainframe-retirement initiative, migrating mission-critical FedEx Freight systems to modern cloud infrastructure.",
      "Administered 13 critical enterprise Java/Spring Boot apps (config, security patching, IAM, production troubleshooting); 80% test coverage and ~50% refactoring gains via AI-assisted analysis.",
      "Built GitSync (PowerShell) for auditable batch Git-repo migration during FedEx Freight's multi-billion-dollar corporate separation.",
      "Drove DevOps modernization (retired 90+ redundant config-server instances) and presented roadmaps to 400+ stakeholders.",
    ],
  },
  {
    title: "Independent Cloud & Data Consultant",
    company: "Light Works Studio",
    note: "client engagements & self-built products",
    location: "Remote",
    duration: "2024 – Present",
    icon: Cloud,
    color: "bg-forest-100 text-forest-700",
    highlights: [
      "AWS platform & Orqestrate (product): Designed and deployed a multi-tenant AWS platform end-to-end in Terraform (ECS Fargate, RDS Postgres, S3/EFS, VPC, ALB) with KMS per-tenant envelope encryption, IAM/ABAC, and GitHub OIDC keyless CI/CD across two isolated environments. Built Orqestrate, an Anthropic-powered agentic platform that runs fleets of AI agents in isolated Fargate/Docker workers.",
      "DMP (client engagement, 2026): Built a Python email-to-ERP ETL pipeline: OCR extraction (~95% accuracy) of purchase orders into Epicor at ~220 orders/day. Designed the data flow, schema migrations, and the validation / human-in-the-loop layer.",
      "Talking Bibles Intl. (client engagement, 2025–Present): Recovered a fully compromised AWS environment (EC2, S3, Lightsail, Route53, IAM) and designed a 3-month stabilization program (DR, centralized secrets, 24/7 monitoring).",
      "Shipped production apps built on Anthropic (LymeTrack, FermentBuddy) from architecture through release, with Sentry/PostHog observability.",
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
