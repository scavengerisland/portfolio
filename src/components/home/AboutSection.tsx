"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Bot, GitBranch } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/site";

const highlights = [
  {
    icon: Cloud,
    title: "AWS, end-to-end",
    description:
      "Well-Architected, multi-tenant infrastructure built with Terraform: ECS Fargate, RDS, S3, VPC, KMS, IAM/ABAC.",
  },
  {
    icon: Database,
    title: "Data & ETL pipelines",
    description:
      "Production ETL into ERP/Postgres with OCR extraction, schema migrations, and validation layers.",
  },
  {
    icon: Bot,
    title: "Production GenAI",
    description:
      "Agentic and AI-powered apps built on Anthropic, shipped from architecture to release.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description:
      "Keyless GitHub OIDC pipelines, Jenkins→GitHub Actions migrations, and observability by default.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-cream-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-forest-600 font-medium text-sm uppercase tracking-wider">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Cloud engineer who ships.
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="max-w-none mb-16">
            <p className="text-forest-700 text-lg leading-relaxed">
              I&apos;m a cloud &amp; data engineer with 5+ years building and
              operating production systems on AWS. At FedEx I&apos;ve worked
              inside a $500M mainframe-retirement initiative, migrating
              mission-critical Freight systems to modern cloud infrastructure,
              leading the org&apos;s first Jenkins→GitHub Actions migration, and
              maintaining 13 enterprise Java/Spring Boot applications.
            </p>
            <p className="text-forest-700 text-lg leading-relaxed mt-4">
              Outside of that I design and run real AWS infrastructure
              end-to-end: a multi-tenant platform provisioned entirely with
              Terraform across isolated stage and prod VPCs, with per-tenant KMS
              envelope encryption, ABAC task roles, and keyless OIDC deploys. On
              top of it I ship data pipelines and production applications built
              on Anthropic, and I keep the whole footprint
              cost-optimized.
            </p>
            <p className="text-forest-700 text-lg leading-relaxed mt-4">
              Based in Waco, TX. AWS certifications in progress (Cloud
              Practitioner and Solutions Architect Associate, 2026). I&apos;m
              looking for a cloud, data, or AWS-consulting role where I can take
              solutions from architecture to production.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-14 h-14 bg-forest-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-forest-200 transition-colors">
                  <item.icon className="w-7 h-7 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-forest-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
