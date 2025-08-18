// // components/LayoutClient.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import Header from "./Navbar";
// import Footer from "./Footer";
// import { useIsMobile } from "@/hooks/useMobile";

// const colors = {
//   lightColor: "#f8f8ff",
//   darkColor: "#171717",
// };

// const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [page, setPage] = useState("home");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const isMobile = useIsMobile();

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <>
//       <Header
//         isScrolled={isScrolled}
//         isMobile={isMobile}
//         colors={colors}
//         page={page}
//         setPage={setPage}
//       />
//       <main>{children}</main>
//       <Footer />
//     </>
//   );
// };

// export default ClientLayout;
