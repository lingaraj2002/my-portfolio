import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio of a frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
