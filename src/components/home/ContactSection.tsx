"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, containerVariants, itemVariants } from "@/lib/site";

const contactLinks = [
  {
    name: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/ethanhutchison",
    href: site.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    name: "GitHub",
    value: "github.com/scavengerisland",
    href: site.github,
    icon: Github,
    external: true,
  },
  {
    name: "Resume",
    value: "Download PDF",
    href: site.resumeHref,
    icon: FileText,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-forest-900 text-cream-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-4 py-1.5 text-sm font-medium text-forest-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to AWS / cloud / data-engineering roles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Let&apos;s talk.
            </h2>
            <p className="text-forest-200 mt-4 max-w-2xl mx-auto text-lg">
              If you&apos;re hiring for cloud, data engineering, or AWS
              consulting — or want a Well-Architected build taken from
              architecture to production — I&apos;d love to connect.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group bg-forest-800/60 hover:bg-forest-800 rounded-xl p-6 text-center transition-all duration-200 hover:scale-105 ring-1 ring-forest-800"
              >
                <div className="w-14 h-14 bg-forest-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-600 transition-colors">
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
            <span>{site.location} · open to remote</span>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button variant="secondary" size="xl" asChild className="group">
              <a href={`mailto:${site.email}`}>
                Email me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Signature */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 pt-8 border-t border-forest-800"
          >
            <span className="font-signature text-2xl text-forest-400">
              {"< "}Ethan Hutchison{" />"}
            </span>
            <p className="text-forest-500 text-sm mt-2">
              Cloud &amp; Data Engineer · AWS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
