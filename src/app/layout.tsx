import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Titillium_Web, Poppins } from "next/font/google";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-titillium",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.variable} ${poppins.variable} `}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default Layout;
