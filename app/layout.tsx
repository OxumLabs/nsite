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
        <link rel="canonical" href="https://nsite-lac.vercel.app/" />
        <meta property="og:title" content="NEiT" />
        <meta property="og:description" content="Whether you're a noob still figuring out semicolons or a battle-hardened coding ninja, Neit is here to save your day." />
        <meta property="og:image" content="/main.png" />
        <meta property="og:url" content="https://nsite-lac.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="nsite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
