"use client";

import { motion } from "framer-motion";
import { Leaf, Code, Users, Coffee } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full Stack Developer",
    description: "Java, SpringBoot, React, Flutter",
  },
  {
    icon: Leaf,
    title: "Agricultural Roots",
    description: "Missouri farm background",
  },
  {
    icon: Users,
    title: "Mission-Driven",
    description: "Technology for positive impact",
  },
  {
    icon: Coffee,
    title: "People. Tech. Coffee.",
    description: "Bringing teams together",
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
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              A passionate team of one
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="prose prose-lg prose-forest max-w-none text-center mb-16"
          >
            <p className="text-forest-700 text-lg leading-relaxed">
              My diverse background bridges technology and agriculture, from
              growing up on a Missouri farm to refactoring critical enterprise
              applications. I bring hands-on experience with farm equipment
              maintenance, technical problem-solving, and a passion for creating
              innovative solutions that make a real difference. My work reflects
              my commitment to mission-driven technology that creates positive
              impact.
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
