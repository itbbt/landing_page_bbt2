import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buana Biru Teknindo",
  description: "Buana Biru Teknindo adalah leading technology company yang memiliki spesialisasi pada digitalisasi industri dan pemantauan lingkungan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}</body>
      <Footer/>
    </html>
  );
}
