import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efan Rice Factory | Premium Rice Production in Owa, Delta State, Nigeria",
  description: "We are a leading rice-producing company in Owa, Delta State, Nigeria, supplying high-quality rice locally and globally. Contact us via WhatsApp, social media, or email to order today.",
  keywords: [
    "rice producers in Nigeria",
    "rice company in Agbor",
    "Delta State rice supply",
    "buy rice Nigeria",
    "local rice Agbor",
    "high quality rice suppliers",
    "Nigeria agriculture",
    "premium rice farming"
  ],
  authors: [
    { name: "Efan Rice Factory", url: "https://yourwebsite.com" }
  ],
  creator: "Efan Rice Factory",
  publisher: "Efan Rice Factory",
  robots: "index, follow",
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  openGraph: {
    title: "Efan Rice Factory | Premium Rice Production",
    description: "Leading rice producers in Agbor, Delta State, Nigeria, delivering top-quality rice worldwide.",
    url: "https://yourwebsite.com",
    siteName: "Efan Rice Factory",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // replace with a proper image
        width: 1200,
        height: 630,
        alt: "Premium Rice from Delta State Nigeria",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efan Rice Factory | Premium Rice Producers",
    description: "Top rice producers in Agbor, Delta State, Nigeria.",
    images: [""],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  category: "agriculture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Navbar />
          <main>
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}
