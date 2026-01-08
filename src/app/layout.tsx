import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadcn UI Component Library",
  description: "A curated collection of beautiful, accessible Shadcn UI components with a public registry for easy CLI integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
