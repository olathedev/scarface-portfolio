import type { Metadata } from "next";
import { Geist, Geist_Mono, Maitree } from "next/font/google";
import "./globals.css";
import { satoshi } from "@/lib/fonts";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const maitree = Maitree({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Scarface",
  description: "Innovating the future, Empowering growth",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
    other: [
      { rel: "icon", url: "/images/logo.png" },
      { rel: "shortcut icon", url: "/images/logo.png" },
      { rel: "apple-touch-icon", url: "/images/logo.png" },
    ],
  },
  openGraph: {
    title: "Scarface",
    description: "Innovating the future, Empowering growth",
    url: "https://scarface-portfolio.vercel.app/",
    siteName: "Scarface",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Scarface Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scarface",
    description: "Innovating the future, Empowering growth",
    images: ["/images/logo.png"],
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} ${maitree.variable} antialiased bg-background`}
      >
        <ThemeProvider>
          <Nav />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
