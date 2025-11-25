import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethan Hutchison | Mission-Driven Developer",
  description:
    "A mission-driven technologist passionate about creating solutions with real-world positive impact. Expertise in full-stack development, agile methodologies, and cross-functional collaboration.",
  keywords: [
    "Ethan Hutchison",
    "Full Stack Developer",
    "Software Engineer",
    "FedEx",
    "LymeTrack",
    "React",
    "Java",
    "SpringBoot",
  ],
  authors: [{ name: "Ethan Hutchison" }],
  openGraph: {
    title: "Ethan Hutchison | Mission-Driven Developer",
    description:
      "Creating technology with purpose. Mission-driven developer focused on real-world impact.",
    url: "https://ethanh.co",
    siteName: "Ethan Hutchison",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Hutchison | Mission-Driven Developer",
    description:
      "Creating technology with purpose. Mission-driven developer focused on real-world impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${caveat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
