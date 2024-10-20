import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Art School",
  description: "Master the art of expression with our innovative courses, guided by expert artists. Unlock your creative potential and develop your unique style through comprehensive training designed to transform your artistic vision into realitypp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex justify-center items-center">
      <Navbar />
      </div>
        {children}
        <Footer />
        </body>
    </html>
  );
}
