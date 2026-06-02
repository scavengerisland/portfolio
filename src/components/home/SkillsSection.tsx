"use client";

import { motion } from "framer-motion";
import { Cloud, Terminal, Database, Sparkles } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/site";

/**
 * Skill groups mirror the AWS-aligned resume exactly.
 * HONESTY: no Spark/Kafka/Glue/Athena/Redshift/EMR/dbt/Airflow/Snowflake/Databricks.
 */
const skillCategories = [
  {
    title: "AWS & Cloud Infrastructure",
    level: "Advanced",
    icon: Cloud,
    color: "bg-[#FF9900]", // AWS orange
    skills: [
      "EC2 & ECS Fargate",
      "S3, EFS & RDS PostgreSQL",
      "VPC, ALB & Route53",
      "IAM, ABAC & KMS Encryption",
      "Secrets Manager",
      "CloudWatch & CloudTrail",
      "Lightsail",
      "Multi-Tenant Architecture",
      "Well-Architected & Cost Optimization",
    ],
  },
  {
    title: "Infrastructure as Code & DevOps",
    level: "Advanced",
    icon: Terminal,
    color: "bg-[#5C4EE5]", // terraform-ish purple
    skills: [
      "Terraform",
      "GitHub Actions (OIDC) CI/CD",
      "Docker & Containerization",
      "Multi-Environment (stage / prod)",
      "Jenkins",
      "Cloud Migration",
      "Sentry · Splunk · AppDynamics · PostHog",
    ],
  },
  {
    title: "Data Engineering & Backend",
    level: "Advanced",
    icon: Database,
    color: "bg-forest-600",
    skills: [
      "ETL / ELT Pipelines",
      "PostgreSQL & SQL",
      "SQL / NoSQL Data Modeling",
      "Data Migration & Schema Design",
      "Python",
      "Java & Spring Boot",
      "REST APIs & Webhooks",
      "Convex (real-time data)",
    ],
  },
  {
    title: "Generative AI & Application Dev",
    level: "Advanced",
    icon: Sparkles,
    color: "bg-[#D97757]", // Anthropic clay
    skills: [
      "Anthropic API",
      "Agentic / Multi-Agent AI",
      "Anthropic on Amazon Bedrock",
      "Prompt Engineering",
      "AI-Assisted Development",
      "TypeScript & React / React Native",
      "Agile / SCRUM",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-white">
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
              Technical Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Built for AWS &amp; data.
            </h2>
            <p className="text-forest-600 mt-4 max-w-2xl mx-auto">
              A focused toolkit, proven on enterprise cloud migrations and on
              infrastructure I design, deploy, and operate end-to-end.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-cream-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white shadow-sm`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-900 leading-tight">
                      {category.title}
                    </h3>
                    <span className="text-xs font-medium text-forest-500 uppercase tracking-wide">
                      {category.level}
                    </span>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white text-forest-700 text-sm rounded-full border border-forest-200 hover:border-forest-400 hover:bg-forest-50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications note */}
          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-forest-500 mt-12"
          >
            AWS certifications in progress: Cloud Practitioner &amp; Solutions
            Architect Associate (2026).
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
