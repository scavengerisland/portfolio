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
  metadataBase: new URL("https://ethanh.co"),
  title: "Ethan Hutchison | AI, Full-Stack & Mobile Engineer",
  description:
    "Software engineer building AI agents, web apps, and mobile products. Two published iOS apps, enterprise experience at FedEx, and hands-on AWS infrastructure.",
  keywords: [
    "Ethan Hutchison",
    "Software Engineer",
    "AI Agents",
    "React Native",
    "Next.js",
    "Data Engineer",
    "AWS",
    "Terraform",
    "ECS Fargate",
    "ETL",
    "Anthropic",
    "DevOps",
    "FedEx",
  ],
  authors: [{ name: "Ethan Hutchison" }],
  openGraph: {
    title: "Ethan Hutchison | AI, Full-Stack & Mobile Engineer",
    description:
      "AI agents, client applications, and two published iOS apps. Enterprise engineering experience at FedEx.",
    url: "https://ethanh.co",
    siteName: "Ethan Hutchison",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Hutchison | AI, Full-Stack & Mobile Engineer",
    description:
      "AI agents, client applications, and two published iOS apps. Enterprise engineering experience at FedEx.",
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
        <div className="site-aurora" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
