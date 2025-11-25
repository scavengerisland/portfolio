"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Wrench, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Full Stack Development",
    icon: Code,
    skills: [
      "Java",
      "SpringBoot",
      "React",
      "TypeScript",
      "Python",
      "Flutter",
      "Firebase",
      "MySQL",
      "HTML/CSS",
      "JUnit5",
    ],
    color: "bg-blue-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "GitHub Actions",
      "Jenkins",
      "Azure",
      "PCF",
      "Splunk",
      "AppDynamics",
      "CI/CD",
      "Docker",
    ],
    color: "bg-purple-500",
  },
  {
    title: "Platforms & Tools",
    icon: Wrench,
    skills: [
      "GitHub",
      "Salesforce",
      "IntelliJ",
      "VS Code",
      "Jira",
      "Confluence",
      "Squarespace",
      "WordPress",
    ],
    color: "bg-forest-500",
  },
  {
    title: "Interests & Expertise",
    icon: Lightbulb,
    skills: [
      "Agile/Scrum",
      "AI Integration",
      "Data Architecture",
      "Team Leadership",
      "Agricultural Tech",
      "Technical Writing",
    ],
    color: "bg-amber-500",
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-forest-600 font-medium text-sm uppercase tracking-wider">
              Technical Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Tools of the Trade
            </h2>
            <p className="text-forest-600 mt-4 max-w-2xl mx-auto">
              A diverse toolkit built through enterprise experience and personal
              projects
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-cream-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white shadow-sm`}
                  >
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-forest-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
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
        </motion.div>
      </div>
    </section>
  );
}
