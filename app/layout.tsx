import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dharmishta R Nath | Network Engineer Portfolio",
  description:
    "Professional portfolio of Dharmishta R Nath — Network Engineer skilled in Telecom Operations, ITSM, and Incident Management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-white via-sky-50 to-white text-gray-800`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content wrapper (centered but with full bg) */}
        <main className="min-h-[80vh] max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
