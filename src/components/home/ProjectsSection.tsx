"use client";

import { motion } from "framer-motion";
import { Heart, Users, Briefcase } from "lucide-react";

const projects = [
  {
    title: "LymeTrack",
    subtitle: "Healthcare Mobile App",
    description:
      "Leading development of a mission-driven healthcare app helping Lyme disease patients track symptoms and improve treatment outcomes. Built on Flutter/Firebase with AI-driven analytics for personalized insights.",
    highlights: [
      "Conducted user interviews with 25+ Lyme patients",
      "Designed for 10,000+ users with 99.5% uptime target",
      "AI-driven analytics for treatment suggestions",
    ],
    icon: Heart,
    status: "In Development",
    statusColor: "bg-green-100 text-green-700",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Technical Advisor",
    subtitle: "Social Media Startup",
    description:
      "Providing strategic technical guidance to an early-stage social media platform focused on community building. Advising on technology stack selection, scalability planning, and privacy-by-design principles.",
    highlights: [
      "Technology stack selection & roadmap development",
      "Privacy-by-design implementation",
      "Translating technical concepts for non-technical founders",
    ],
    icon: Users,
    status: "Ongoing",
    statusColor: "bg-blue-100 text-blue-700",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Job Board Startup",
    subtitle: "Co-Founder",
    description:
      "Co-founded a niche job board connecting students with work opportunities during college. Built the initial MVP and implemented automated job matching algorithms using lean startup methodologies.",
    highlights: [
      "Built initial MVP with modern web technologies",
      "Implemented automated job matching algorithms",
      "Rapid development with lean startup methods",
    ],
    icon: Briefcase,
    status: "Completed",
    statusColor: "bg-forest-100 text-forest-700",
    gradient: "from-forest-500 to-emerald-500",
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
    <section id="projects" className="py-20 lg:py-32 bg-cream-100">
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
              Projects & Ventures
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Building with Purpose
            </h2>
            <p className="text-forest-600 mt-4 max-w-2xl mx-auto">
              Creating technology that addresses genuine human needs and delivers
              positive impact
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
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
                  <p className="text-forest-700 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
