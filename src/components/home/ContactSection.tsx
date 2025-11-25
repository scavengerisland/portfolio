"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    name: "Email",
    value: "ethan@ethanh.co",
    href: "mailto:ethan@ethanh.co",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/ethanhutchison",
    href: "https://www.linkedin.com/in/ethanhutchison/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/scavengerisland",
    href: "https://github.com/scavengerisland",
    icon: Github,
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

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-forest-800 text-cream-50">
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
            <span className="text-forest-300 font-medium text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-forest-200 mt-4 max-w-2xl mx-auto text-lg">
              I&apos;m particularly interested in connecting with mission-driven
              teams creating technology that makes a positive real-world impact.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group bg-forest-700/50 hover:bg-forest-700 rounded-xl p-6 text-center transition-all duration-200 hover:scale-105"
              >
                <div className="w-14 h-14 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-500 transition-colors">
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-cream-50 mb-1">{link.name}</h3>
                <p className="text-forest-300 text-sm truncate">{link.value}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-forest-300 mb-12"
          >
            <MapPin className="w-5 h-5" />
            <span>Atlanta, Georgia, United States</span>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-forest-200 mb-6 max-w-xl mx-auto">
              My passion lies at the intersection of innovation and purpose,
              especially in areas like agricultural technology, healthcare
              solutions, and sustainable systems.
            </p>
            <Button
              variant="secondary"
              size="xl"
              asChild
              className="group"
            >
              <a href="mailto:ethan@ethanh.co">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Signature */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-forest-700"
          >
            <span className="font-signature text-2xl text-forest-400">
              {"< "}Ethan Hutchison{" />"}
            </span>
            <p className="text-forest-500 text-sm mt-2">
              people. tech. coffee.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
