"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function GlassNavigation() {
  return (
    <nav
      aria-label="Primary navigation"
      className="glass-pill fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 items-center justify-between gap-0.5 rounded-full p-1.5 sm:top-5"
    >
      <a
        href="#top"
        aria-label="Back to top"
        className="hidden rounded-full px-3 py-1.5 font-signature text-xl leading-none text-forest-700 transition-colors hover:text-forest-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 sm:block"
      >
        EH
      </a>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full px-2.5 py-2 text-[11px] font-semibold text-forest-800 transition-colors hover:bg-white/60 hover:text-forest-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-600 sm:px-3.5 sm:text-xs"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
