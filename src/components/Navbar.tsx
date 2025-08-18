// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import styles from "../styles/Header.module.sass";
// // import MainLogoWhite from "../assets/logo/my-portfolio-logo-white.png";
// import MainLogoBlack from "../assets/logo/my-portfolio-logo-black.png";
// // import DownloadResumeWhite from "../assets/icon/download-resume-white.svg";
// import DownloadResumeBlack from "../assets/icon/download-resume-black.svg";
// // import BurgerWhite from "../assets/icon/burger-white.svg";
// import BurgerBlack from "../assets/icon/burger-black.svg";
// import Image from "next/image";

// interface HeaderProps {
//   isMobile: boolean;
//   colors: { lightColor: string; darkColor: string };
//   page: string;
//   setPage: (page: string) => void;
// }

// export default function Header(props: HeaderProps) {
//   const { colors, page, setPage } = props;
//   const [openNavItem, setOpenNavItem] = useState(false);
//   // const [isScrolled, setIsScrolled] = useState(false);

//   // useEffect(() => {
//   //   if (typeof window === "undefined") return;

//   //   const handleScroll = () => {
//   //     const isScrolled = window.scrollY > 50;
//   //     // setIsScrolled(isScrolled);
//   //     console.log(isScrolled, "isScrolled");
//   //   };

//   //   window.addEventListener("scroll", handleScroll, { passive: true });

//   //   // Run on mount
//   //   handleScroll();

//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   return (
//     <header className="nav-bar-cntnr sticky top-0 text-black bg-stone-100 transition duration-1000 ease-in-out z-50">
//       <nav className="max-w-7xl px-4 py-4 sm:py-2 mx-auto flex justify-between items-center relative">
//         <Image
//           src={MainLogoBlack.src}
//           width={128}
//           height={32}
//           alt="Logo"
//           className="transition duration-1000 ease-in-out z-1"
//         />
//         <ul
//           className={`flex flex-col sm:flex-row sm:gap-4 gap-12  p-8 sm:p-0 w-screen sm:w-max h-[calc(100vh-64px)] sm:h-fit bg-white sm:bg-transparent absolute sm:static text-base sm:text-18px  ${
//             openNavItem ? "top-full left-0" : "left-full bottom-full"
//           }`}
//           style={
//             {
//               "--nav-item-color": colors.darkColor,
//             } as React.CSSProperties
//           }
//         >
//           <li
//             className={`${styles.navItem} ${
//               page === "home" ? styles.navItem__active : ""
//             }`}
//             onClick={() => setPage("home")}
//           >
//             <Link href="/">Home</Link>
//           </li>
//           <li
//             className={`${styles.navItem} ${
//               page === "about" ? styles.navItem__active : ""
//             }`}
//             onClick={() => setPage("about")}
//           >
//             <Link href="/about">About</Link>
//           </li>
//           <li
//             className={`${styles.navItem} ${
//               page === "skills" ? styles.navItem__active : ""
//             }`}
//             onClick={() => setPage("skills")}
//           >
//             <Link href="/skills">Skills</Link>
//           </li>
//           <li
//             className={`${styles.navItem} ${
//               page === "projects" ? styles.navItem__active : ""
//             }`}
//             onClick={() => setPage("projects")}
//           >
//             <Link href="/projects">Projects</Link>
//           </li>
//           <li
//             className={`${styles.navItem} ${
//               page === "contact" ? styles.navItem__active : ""
//             }`}
//             onClick={() => setPage("contact")}
//           >
//             <Link href="/contact">Contact</Link>
//           </li>
//           <li
//             className={`${styles.navItem} ${
//               page === "settings" ? styles.navItem__active : ""
//             }`}
//             onClick={() => setPage("settings")}
//           >
//             <Link href="/settings">Settings</Link>
//           </li>
//           <li>
//             <a className="hidden sm:flex items-center cursor-pointer px-4 py-0 xs:border-0 sm:border-2 rounded-2xl hover:scale-105 border-black">
//               <Image
//                 src={DownloadResumeBlack.src}
//                 width={24}
//                 height={24}
//                 alt="DownloadLogo"
//                 className="transition duration-1000 ease-in-out"
//               />
//               <h3>Resume</h3>
//             </a>
//           </li>
//         </ul>
//         <a
//           className="block sm:hidden"
//           onClick={() => setOpenNavItem(!openNavItem)}
//         >
//           <Image
//             src={BurgerBlack.src}
//             width={32}
//             height={32}
//             alt="BurgerLogo"
//             className="transition duration-1000 ease-in-out"
//           />
//         </a>
//       </nav>
//     </header>
//   );
// }

"use client";
import Link from "next/link";
import MainLogoBlack from "../assets/logo/my-portfolio-logo-black.png";
import MainLogoWhite from "../assets/logo/my-portfolio-logo-white.png";
import "../styles/globals.css";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["home", "about", "skills", "projects", "settings"];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 flex justify-between items-center px-6 py-4">
      <Image
        src={MainLogoBlack.src}
        width={128}
        height={32}
        alt="Logo"
        className="transition duration-1000 ease-in-out z-1"
      />

      {/* Hamburger for mobile */}
      <button
        className="block md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Nav links */}
      <ul
        className={`hidden md:flex md:space-x-6 absolute md:static left-0 w-full md:w-auto transition-all duration-300 `}
      >
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec}`}
              className="block px-6 py-2 hover:text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
