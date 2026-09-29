import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astraphone.com"),
  title: "Astra Phone Ultra — The Titanium Intelligence Flagship",
  description: "Experience Astra Phone Ultra. Forged in aerospace grade-5 titanium, supercharged by the custom 3nm Astra N1 Neural Silicon, and equipped with a 200MP Triple Periscope optic system.",
  keywords: ["Astra Phone", "Astra Phone Ultra", "Flagship Smartphone", "Titanium Phone", "200MP Camera", "Astra N1 Silicon"],
  authors: [{ name: "Astra Tech Industrial Design Group" }],
  openGraph: {
    title: "Astra Phone Ultra — The Titanium Intelligence Flagship",
    description: "Forged in aerospace titanium with custom 3nm Astra N1 silicon and 200MP Triple Periscope optics.",
    images: [{ url: "/phone_hero.jpg", width: 1200, height: 630, alt: "Astra Phone Ultra" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060813",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
