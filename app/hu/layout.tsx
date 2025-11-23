import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "STRV.AI – AI Támogatott Fitness és Coaching Platform",
  description:
    "A STRV.AI egy AI Támogatott fitnesz és coaching platform, sportolóknak, edzőknek és mindenkinek, aki fejlődésre törekszik.",
  openGraph: {
    title: "STRV.AI – AI Támogatott fitnesz és coaching platform",
    description:
      "A STRV.AI egyetlen intelligens platformba integrálja a táplálkozás követést, edzést és a coachingot, hogy a fejlődés zökkenő mentes legyen.",
    url: "https://strv.ai/hu",
    siteName: "STRV.AI",
    images: [
      {
        url: "/strv-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "STRV.AI – AI Támogatott fitnesz és coaching platform",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRV.AI – AI Támogatott fitnesz és coaching platform",
    images: ["/strv-thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
