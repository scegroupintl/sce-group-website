import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/lib/components/Footer";

const fontFamily = IBM_Plex_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCE International",
  description: "Deploy your static Next.js site to GitHub Pages.",
  icons: {
    icon: "/sce-favicon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontFamily.className + " scroll-smooth"} data-scroll-behavior="smooth">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
