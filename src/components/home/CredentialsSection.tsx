"use client";

import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, Award } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/site";

const certs = [
  {
    name: "AWS Certified Cloud Practitioner",
    status: "In progress, exam scheduled 2026",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    status: "In progress 2026",
  },
];

export function CredentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-forest-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-forest-300 font-medium text-sm uppercase tracking-wider">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-50 mt-2">
              Certifications, education &amp; recognition.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-forest-700/50 p-6 ring-1 ring-forest-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-600 text-cream-50">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-cream-50 mb-3">
                AWS Certifications
              </h3>
              <ul className="space-y-3">
                {certs.map((c) => (
                  <li key={c.name}>
                    <p className="text-sm font-medium text-cream-100">
                      {c.name}
                    </p>
                    <p className="text-xs text-forest-300">{c.status}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-forest-700/50 p-6 ring-1 ring-forest-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-600 text-cream-50">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-cream-50 mb-3">Education</h3>
              <p className="text-sm font-medium text-cream-100">
                B.S. Computer Information Science
              </p>
              <p className="text-sm text-forest-200">College of the Ozarks</p>
              <p className="mt-1 text-xs text-forest-300">
                Point Lookout, MO · 2018–2022
              </p>
              <p className="mt-3 text-xs text-forest-300 leading-relaxed">
                Data structures, database design, systems analysis, and software
                engineering.
              </p>
            </motion.div>

            {/* Awards */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-forest-700/50 p-6 ring-1 ring-forest-700"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-600 text-cream-50">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-cream-50 mb-3">Recognition</h3>
              <ul className="space-y-3">
                <li>
                  <p className="text-sm font-medium text-cream-100">
                    Leader in Society Award
                  </p>
                  <p className="text-xs text-forest-300">
                    Keeter Center · 2022
                  </p>
                </li>
                <li>
                  <p className="text-sm font-medium text-cream-100">
                    Associates Work Award
                  </p>
                  <p className="text-xs text-forest-300">
                    College of the Ozarks · 2021
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
