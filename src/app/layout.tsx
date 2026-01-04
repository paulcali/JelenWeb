import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Zámečnictví Zdeněk Daněk - Kovové výrobky na míru | Schodiště, Zábradlí & Nábytek",
  description:
    "Profesionální zámečník s 7 lety zkušeností specializující se na schodiště na míru, zábradlí a kovový nábytek. Přesné svařování a kovovýroba v Praze.",
  keywords: [
    "zámečnictví",
    "kovové výrobky",
    "schodiště na míru",
    "zábradlí",
    "kovový nábytek",
    "svařování",
    "Praha zámečník",
    "kovovýroba",
    "ocelové konstrukce",
  ],
  authors: [{ name: "Zdeněk Daněk" }],
  openGraph: {
    title: "Zámečnictví Zdeněk Daněk - Prémiová kovovýroba",
    description:
      "7 let mistrovského řemesla v oblasti kovových schodišť, zábradlí a nábytku na míru",
    type: "website",
    locale: "cs_CZ",
    siteName: "Zámečnictví Zdeněk Daněk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zámečnictví Zdeněk Daněk - Prémiová kovovýroba",
    description:
      "7 let mistrovského řemesla v oblasti kovových schodišť, zábradlí a nábytku na míru",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
