"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import MainLogoWhite from "../assets/logo/my-portfolio-logo-white.png";
import MainLogoBlack from "../assets/logo/my-portfolio-logo-black.png";
import DownloadResumeWhite from "../assets/icon/download-resume-white.svg";
import DownloadResumeBlack from "../assets/icon/download-resume-black.svg";
import BurgerWhite from "../assets/icon/burger-white.svg";
import BurgerBlack from "../assets/icon/burger-black.svg";
import Image from "next/image";

interface HeaderProps {
  isMobile: boolean;
  isScrolled: boolean;
  colors: {
    lightColor: string;
    darkColor: string;
  };
  page: string;
  setPage: (page: string) => void;
}

export default function Header(props: HeaderProps) {
  const { isMobile, isScrolled, colors, page, setPage } = props;
  const [openNavItem, setOpenNavItem] = useState(false);
  console.log(page, "page");
  return (
    <header
      className={`nav-bar-cntnr sticky top-0 ${
        isScrolled
          ? `bg-stone-950 ${!isMobile && "text-white"}`
          : "bg-transparent text-stone"
      } transition duration-1000 ease-in-out`}
    >
      <nav className="max-w-7xl px-4 py-4 sm:py-2 mx-auto flex justify-between items-center relative">
        <Image
          src={isScrolled ? MainLogoWhite.src : MainLogoBlack.src}
          width={128}
          height={32}
          alt="MainLogo"
          className="transition duration-1000 ease-in-out"
        />
        <ul
          className={`flex flex-col sm:flex-row sm:gap-4 gap-12  p-8 sm:p-0 w-screen sm:w-max h-[calc(100vh-64px)] sm:h-fit bg-white sm:bg-transparent absolute sm:static text-base sm:text-18px  ${
            openNavItem ? "bottom-full left-0" : "left-full bottom-full"
          }`}
          style={
            {
              "--nav-item-color": isScrolled
                ? colors.lightColor
                : colors.darkColor,
            } as React.CSSProperties
          }
        >
          <li
            className={`${styles.navItem} ${
              page === "home" ? styles.navActive : ""
            }`}
            onClick={() => setPage("home")}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${styles.navItem} ${
              page === "about" ? styles.navActive : ""
            }`}
            onClick={() => setPage("about")}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${styles.navItem} ${
              page === "skills" ? styles.navActive : ""
            }`}
            onClick={() => setPage("skills")}
          >
            <Link href="/skills">Skills</Link>
          </li>
          <li
            className={`${styles.navItem} ${
              page === "projects" ? styles.navActive : ""
            }`}
            onClick={() => setPage("projects")}
          >
            <Link href="/projects">Projects</Link>
          </li>
          <li
            className={`${styles.navItem} ${
              page === "contact" ? styles.navActive : ""
            }`}
            onClick={() => setPage("contact")}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li
            className={`${styles.navItem} ${
              page === "settings" ? styles.navActive : ""
            }`}
            onClick={() => setPage("settings")}
          >
            <Link href="/settings">Settings</Link>
          </li>
          {!isMobile && (
            <li>
              <a
                className={`flex items-center cursor-pointer px-4 py-0 xs:border-0 sm:border-2 rounded-2xl hover:scale-105  ${
                  isScrolled ? "border-white" : "border-stone-950"
                }`}
              >
                <Image
                  src={
                    !isMobile && isScrolled
                      ? DownloadResumeWhite.src
                      : DownloadResumeBlack.src
                  }
                  width={24}
                  height={24}
                  alt="DownloadLogo"
                  className="transition duration-1000 ease-in-out"
                />
                <h3>Resume</h3>
              </a>
            </li>
          )}
        </ul>
        <a
          className="xs:block sm:hidden"
          onClick={() => setOpenNavItem(!openNavItem)}
        >
          <Image
            src={isMobile && isScrolled ? BurgerWhite.src : BurgerBlack.src}
            width={32}
            height={32}
            alt="BurgerLogo"
            className="transition duration-1000 ease-in-out"
          />
        </a>
      </nav>
    </header>
  );
}
