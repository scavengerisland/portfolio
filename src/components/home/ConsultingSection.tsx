"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ConsultingSection() {
  return (
    <section id="consulting" className="py-20 lg:py-32 bg-forest-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium text-forest-200 bg-forest-700 px-4 py-1.5 rounded-full mb-6"
          >
            Light Works · Currently taking 1–2 new clients
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 mb-6"
          >
            Senior engineering for organizations too small to hire it full-time.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-cream-200 leading-relaxed mb-4"
          >
            I run Light Works as a fractional CTO and managed IT practice. The
            three things clients hire me for are strategy and architecture, the
            IT that has to actually work, and custom development when there&apos;s
            no good off-the-shelf option.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-cream-200 leading-relaxed mb-10"
          >
            Current clients include Talking Bibles International and a few small
            businesses I can&apos;t name yet. Retainers start around $2,500/mo.
          </motion.p>

          <motion.a
            href="https://light-works.co"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-cream-50 text-forest-800 font-medium px-8 py-3.5 rounded-full hover:bg-cream-100 transition-colors duration-300"
          >
            See Light Works
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
