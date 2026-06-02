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
  title: "Ethan Hutchison | Cloud & Data Engineer (AWS)",
  description:
    "Cloud & Data Engineer with 5+ years shipping enterprise cloud, DevOps, backend, and data platforms. Recent hands-on AWS delivery with Terraform, ECS Fargate, RDS, secure GitHub OIDC CI/CD, ETL/data pipelines, and production GenAI.",
  keywords: [
    "Ethan Hutchison",
    "Cloud Engineer",
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
    title: "Ethan Hutchison | Cloud & Data Engineer (AWS)",
    description:
      "Enterprise cloud/platform background with recent hands-on AWS infrastructure, data pipelines, and production GenAI.",
    url: "https://ethanh.co",
    siteName: "Ethan Hutchison",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Hutchison | Cloud & Data Engineer (AWS)",
    description:
      "Enterprise cloud/platform background with recent hands-on AWS infrastructure, data pipelines, and production GenAI.",
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
