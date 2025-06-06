"use client";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Pixelify_Sans, VT323 } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-pixelify",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
});

const colors = {
  lightColor: "#f8f8ff",
  darkColor: "#171717",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code runs only on client

    // Function for check mobile
    const handleCheckMobile = () => {
      const isMobileWidth = window.innerWidth <= 1639;
      setIsMobile(isMobileWidth);
      console.log(
        "Detected width:",
        window.innerWidth,
        "→ isMobile:",
        isMobileWidth
      );
    };

    // Function for check page is scrolled
    const handleScrollPage = () => setIsScrolled(window.scrollY > 50);

    // Set initial values
    setTimeout(() => {
      handleCheckMobile();
    }, 0);
    handleScrollPage();

    // Add event listeners
    window.addEventListener("resize", handleCheckMobile);
    window.addEventListener("scroll", handleScrollPage);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleCheckMobile);
      window.removeEventListener("scroll", handleScrollPage);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${PixelifySans.variable} ${vt323.variable} `}>
        <Header
          isMobile={isMobile}
          isScrolled={isScrolled}
          colors={colors}
          page={page}
          setPage={setPage}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default Layout;
