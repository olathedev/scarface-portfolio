import type { Metadata } from "next";
import { Geist, Geist_Mono, Maitree } from "next/font/google";
import "./globals.css";
import { satoshi } from "@/lib/fonts";

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
    icon: "logo.png",
    shortcut: "/images/logo.png",
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
        className={`${satoshi.className} ${maitree.variable} antialiased bg-[#08090D]`}
      >
        {children}
      </body>
    </html>
  );
}
