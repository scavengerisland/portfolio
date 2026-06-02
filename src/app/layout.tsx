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
    "Cloud & Data Engineer building Well-Architected, multi-tenant AWS infrastructure with Terraform, ETL/data pipelines, and production generative AI on Anthropic. Enterprise-proven at FedEx. Open to AWS, cloud, and data-engineering roles.",
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
      "AWS infrastructure, data pipelines, and production GenAI on Anthropic. Open to AWS, cloud, and data-engineering roles.",
    url: "https://ethanh.co",
    siteName: "Ethan Hutchison",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethan Hutchison | Cloud & Data Engineer (AWS)",
    description:
      "AWS infrastructure, data pipelines, and production GenAI on Anthropic. Open to AWS, cloud, and data-engineering roles.",
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
