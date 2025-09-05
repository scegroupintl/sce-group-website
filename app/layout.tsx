import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/lib/components/Footer";
import { Toaster } from "react-hot-toast";

const fontFamily = IBM_Plex_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCE Group International",
  description:
    "SCE Group International es un grupo empresarial dedicado a ofrecer soluciones integrales en diversas áreas de servicios, adaptándose a las necesidades de cada cliente.",
  openGraph: {
    images: [
      {
        url: `${process.env.PAGES_BASE_PATH || ""}/sce_intl_square.jpg`,
        width: 982,
        height: 982,
        alt: "SCE Group International Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${process.env.PAGES_BASE_PATH || ""}/sce_intl_square.jpg`],
  },
  icons: {
    icon: `${process.env.PAGES_BASE_PATH || ""}/sce-favicon-192.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={fontFamily.className + " scroll-smooth"}
      data-scroll-behavior="smooth"
    >
      <body>
        <Toaster
          position="bottom-center"
          toastOptions={{ className: "text-xl" }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
