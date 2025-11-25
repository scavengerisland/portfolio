"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/scavengerisland",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ethanhutchison/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:ethan@ethanh.co",
    icon: Mail,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-0 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-forest-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-sage-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Signature Logo */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="font-signature text-3xl sm:text-4xl text-forest-600">
                {"< "}
                <span className="text-forest-800">Ethan Hutchison</span>
                {" />"}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-900 mb-6"
            >
              Creating technology with{" "}
              <span className="text-forest-600">purpose</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-forest-700 mb-8 max-w-xl leading-relaxed"
            >
              Mission-driven developer focused on real-world impact. Passionate
              technologist with 3+ years driving innovation at FedEx&apos;s $500M
              modernization initiative.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#experience">View Experience</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-forest-800 text-cream-50 flex items-center justify-center hover:bg-forest-700 hover:scale-110 transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/manOnTable.svg"
                alt="Developer illustration"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-forest-600 hover:text-forest-800 transition-colors"
        >
          <span className="text-sm mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-forest-400 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-forest-600 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
