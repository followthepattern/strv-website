import type { Metadata } from "next";
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

export const metadata = {
  title: "STRV.AI – AI Powered fitness & coaching platform",
  description:
    "STRV.AI is an AI-assisted fitness and coaching platform designed for athletes, coaches, and anyone striving for growth.",
  openGraph: {
    title: "STRV.AI – AI Powered fitness & coaching platform",
    description:
      "STRV.AI integrates nutrition, fitness, and coaching into one intelligent platform to help you stay on track.",
    url: "https://strv.ai",
    siteName: "STRV.AI",
    images: [
      {
        url: "/strv-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "STRV.AI – AI Powered fitness & coaching platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRV.AI – AI Powered fitness & coaching platform",
    images: ["/strv-thumbnail.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
