import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://strv.ai"),
  title: "STRV.AI - AI Powered Productivity App",
  description:
    "STRV brings business, tasks, health, and business workflows together for people striving to reach their potential.",
  openGraph: {
    title: "STRV.AI - AI Powered Productivity App",
    description:
      "STRV brings business, tasks, health, and business workflows together for people striving to reach their potential.",
    url: "https://strv.ai",
    siteName: "STRV.AI",
    images: [
      {
        url: "/strv-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "STRV.AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRV.AI - AI Powered Productivity App",
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
        className={`${archivo.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
