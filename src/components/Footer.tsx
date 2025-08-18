// export default function Footer() {
//   return (
//     <footer className="bg-white text-black p-4 text-center">
//       <p>
//         &copy; 2025 My Portfolio. All rights reserved. Designed & Developed By
//         Lingraj
//       </p>
//     </footer>
//   );
// }

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
