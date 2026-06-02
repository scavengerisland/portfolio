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
      "Led the organization's first migration from Jenkins to GitHub Actions across ~15 applications, standardizing automated CI/CD and a build-once-promote release flow that became the template for future conversions.",
      "Contributed to a $500M mainframe-retirement initiative, moving mission-critical FedEx Freight systems from legacy infrastructure toward modern cloud and platform engineering patterns.",
      "Administered 13 enterprise Java/Spring Boot apps across configuration, security patching, identity/access controls, and production troubleshooting; improved maintainability and raised test coverage to 80% across production services.",
      "Automated safe, auditable Git repository migration workflows during FedEx Freight's multi-billion-dollar corporate separation.",
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
      "AWS platform & Orqestrate: Applied cloud/platform engineering experience to design and deploy a multi-tenant AWS platform end-to-end in Terraform (ECS Fargate, RDS Postgres, S3/EFS, VPC, ALB) with KMS per-tenant encryption, IAM/ABAC, and secure GitHub OIDC-based CI/CD across two isolated environments. Built an Anthropic-powered platform that runs containerized AI workloads in isolated ECS Fargate workers.",
      "DMP client engagement: Built an enterprise email-to-ERP data pipeline in Python, processing ~220 purchase orders/day into Epicor. Designed the ingestion flow, validation controls, schema migrations, and human-in-the-loop exception handling.",
      "Talking Bibles Intl. (client engagement, 2025–Present): Recovered a fully compromised AWS environment (EC2, S3, Lightsail, Route53, IAM) and designed a 3-month stabilization program (DR, centralized secrets, 24/7 monitoring).",
      "Built production infrastructure for shipped software products with enterprise-grade observability, monitoring, release workflows, and data-modeling practices across Anthropic-powered applications.",
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
              From FedEx&apos;s $500M modernization work to AWS infrastructure,
              enterprise data pipelines, and production observability.
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
