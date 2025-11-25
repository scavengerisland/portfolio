"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Software Developer II",
    company: "FedEx",
    location: "Remote",
    duration: "June 2021 - Present",
    highlights: [
      "Led GitHub Actions adoption from Jenkins, reducing deployment times by 40%",
      "Collaborated on $500M savings initiative through mainframe retirement",
      "Reduced codebase by 68% using SpringBoot and MVC design patterns",
      "Delivered quarterly presentations to 400+ organizational stakeholders",
    ],
    icon: Building2,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Computer Science Teaching Assistant",
    company: "College of the Ozarks",
    location: "Point Lookout, MO",
    duration: "Jan 2020 - Dec 2020",
    highlights: [
      "Presented complex technical concepts to diverse audiences",
      "Supported students in programming fundamentals and advanced CS concepts",
    ],
    icon: GraduationCap,
    color: "bg-forest-100 text-forest-700",
  },
  {
    title: "Information Technology Intern",
    company: "Kanakuk Kamps",
    location: "Branson, MO",
    duration: "May 2020 - Aug 2020",
    highlights: [
      "Delivered support to dozens of end users across Windows and MacOS",
      "Optimized performance using Ubiquiti and Cisco network solutions",
    ],
    icon: Briefcase,
    color: "bg-blue-100 text-blue-700",
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-forest-600 font-medium text-sm uppercase tracking-wider">
              Career Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-2">
              Work Experience
            </h2>
            <p className="text-forest-600 mt-4 max-w-2xl mx-auto">
              From enterprise systems to education, building solutions that matter
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-forest-200 hidden md:block" />

              {experiences.map((exp) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="relative mb-12 last:mb-0"
                >
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full ${exp.color} flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      <exp.icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-cream-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-forest-900">
                            {exp.title}
                          </h3>
                          <p className="text-forest-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right text-sm text-forest-500">
                          <p>{exp.duration}</p>
                          <p>{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-forest-700 text-sm flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mt-2 shrink-0" />
                            {highlight}
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
