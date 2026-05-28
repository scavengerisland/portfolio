"use client";

import { motion } from "framer-motion";
import { Activity, Timer } from "lucide-react";

const projects = [
  {
    title: "LymeTrack",
    subtitle: "iOS · Free forever",
    description:
      "A symptom tracker built for Lyme disease patients. Log symptoms, treatments, and daily factors. Spot patterns. Walk into your next appointment with a real report instead of trying to remember the last six weeks.",
    highlights: [
      "Free, no ads, no data sale",
      "Built on Flutter with privacy-first architecture",
      "Launched in May 2026 during Lyme Awareness Month",
    ],
    icon: Activity,
    href: "https://lymetrack.app",
    status: "Live",
    statusColor: "bg-green-100 text-green-700",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Ferment Buddy",
    subtitle: "iOS · Freemium",
    description:
      "The timing brain for home fermentation. Sourdough starter, kombucha brew, kraut, kefir, miso — Ferment Buddy replaces sticky notes and phone alarms with fermentation-aware timers and guided workflows. So you never kill another starter.",
    highlights: [
      "13 ferment types supported",
      "Temperature-adaptive timing",
      "Free tier covers one active project; Pro removes the limit",
    ],
    icon: Timer,
    href: "https://fermentbuddy.app",
    status: "Live",
    statusColor: "bg-green-100 text-green-700",
    gradient: "from-amber-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ProjectsSection() {
  return (
    <section id="building" className="py-20 lg:py-32 bg-cream-100">
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
              What I&apos;m building
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Two apps, shipped.
            </h2>
            <p className="text-forest-600 mt-4 max-w-2xl mx-auto">
              Both live in the App Store today. One is free forever, one is
              freemium.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Card Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />

                <div className="p-6">
                  {/* Icon & Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white shadow-sm`}
                    >
                      <project.icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${project.statusColor}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-forest-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-forest-600 text-sm mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-forest-700 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-forest-600 text-xs flex items-start gap-2"
                      >
                        <span className="w-1 h-1 bg-forest-400 rounded-full mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
