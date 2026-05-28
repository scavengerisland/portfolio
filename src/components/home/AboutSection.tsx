"use client";

import { motion } from "framer-motion";
import { Leaf, Wrench, Briefcase, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Wrench,
    title: "Senior engineer",
    description: "6+ years shipping production systems, mostly full-stack web and mobile.",
  },
  {
    icon: Leaf,
    title: "Missouri-born",
    description: "Grew up on a farm. Springfield, MO is still home.",
  },
  {
    icon: Briefcase,
    title: "Fractional CTO",
    description: "Currently consulting through Light Works for nonprofits and small businesses.",
  },
  {
    icon: Rocket,
    title: "Indie founder",
    description: "Currently shipping LymeTrack and Ferment Buddy on the side.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-forest-600 font-medium text-sm uppercase tracking-wider">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              The short version.
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="prose prose-lg prose-forest max-w-none mb-16"
          >
            <p className="text-forest-700 text-lg leading-relaxed">
              I grew up on a farm in Missouri, which turns out to be a worse
              predictor of becoming a software engineer than you&apos;d think.
              I&apos;ve spent the last three years at FedEx working on a $500M
              modernization program, which is where I learned how big systems
              actually break.
            </p>
            <p className="text-forest-700 text-lg leading-relaxed mt-4">
              On the side, I build software products of my own and consult with
              small organizations that need senior technology help. The two
              reinforce each other. Building products teaches me what real users
              actually need; consulting keeps me grounded in problems that have
              to be solved this week, not next quarter.
            </p>
            <p className="text-forest-700 text-lg leading-relaxed mt-4">
              Based in Springfield, Missouri. People. Tech. Coffee.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center group"
              >
                <div className="w-14 h-14 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-200 transition-colors">
                  <item.icon className="w-7 h-7 text-forest-600" />
                </div>
                <h3 className="font-semibold text-forest-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-forest-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
