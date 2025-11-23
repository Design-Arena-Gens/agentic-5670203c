import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic Project Workspace",
  description:
    "A polished developer workspace showcasing AI-assisted engineering workflows.",
  metadataBase: new URL("https://agentic-5670203c.vercel.app"),
  openGraph: {
    title: "Agentic Project Workspace",
    description:
      "Explore a high-quality developer hub built with Next.js and modern UI patterns.",
    url: "https://agentic-5670203c.vercel.app",
    siteName: "Agentic Workspace"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Project Workspace",
    description:
      "A polished developer experience crafted with Next.js, React, and TypeScript."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
