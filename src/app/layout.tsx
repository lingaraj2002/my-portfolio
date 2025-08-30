import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../styles/globals.css";
import { Pixelify_Sans, VT323 } from "next/font/google";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio of a frontend developer",
};

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixelify-sans",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixelifySans.variable} ${vt323.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
