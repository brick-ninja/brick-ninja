import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Liang | Full Stack Engineer",
  description: "Full Stack Engineer specializing in building scalable, human-centered applications with practical AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a192f] text-[#8892b0]">{children}</body>
    </html>
  );
}
