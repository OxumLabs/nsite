import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from 'next/head';
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
  title: "NEiT - Language of future",
  description: "Whether you're a noob still figuring out semicolons or a battle-hardened coding ninja, Neit is here to save your day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="neit, language, ai, fast, compiler, interpreter" />
        <meta name="author" content="Anmol Raj" />

        <link rel="canonical" href="https://www.yourwebsite.com/" />

        {/* Social Media Open Graph (OG) Tags */}
        <meta property="og:title" content="NEiT" />
        <meta property="og:description" content="Whether you're a noob still figuring out semicolons or a battle-hardened coding ninja, Neit is here to save your day." />
        <meta property="og:image" content="/main.png" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="nsite" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
