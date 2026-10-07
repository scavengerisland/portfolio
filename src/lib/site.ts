/**
 * Central site configuration: identity, contact, and link data.
 * Shared identity and links for the portfolio.
 */

export const site = {
  name: "Ethan Hutchison",
  role: "Lead Developer",
  headline: "AI Orchestration, Full-Stack & Mobile",
  location: "Waco, TX",
  email: "ethan@ethanh.co",
  // Serve the current resume from /public.
  resumeHref: "/Ethan-Hutchison-Resume-AI-Full-Stack.pdf",
  github: "https://github.com/scavengerisland",
  linkedin: "https://linkedin.com/in/ethanhutchison",
} as const;

export const socialLinks = [
  { name: "GitHub", href: site.github, icon: "github" as const },
  { name: "LinkedIn", href: site.linkedin, icon: "linkedin" as const },
  { name: "Email", href: `mailto:${site.email}`, icon: "mail" as const },
];

/** Shared framer-motion variants used across sections. */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
} as const;

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
} as const;
