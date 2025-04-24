// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FiChevronDown } from "react-icons/fi";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 px-4 py-3 transition-colors duration-300 ${
//         scrolled ? "bg-transparent" : "bg-[#0b1220]"
//       } text-white shadow`}
//     >
//         <div className="container mx-auto">

//           {/* Dropdown Menu (First row) */}
//           <div className="flex justify-center space-x-6 mt-5 font-bold text-xl">
//             {["HOME", "ELEMENT", "COMPANY", "SERVICES", "PORTFOLIO", "BLOG"].map((item) => (
//               <div
//                 key={item}
//                 className="relative cursor-pointer"
//                 onMouseEnter={() => toggleDropdown(item)}
//                 onMouseLeave={() => toggleDropdown(null)}
//               >
//                 <span className="hover:text-blue-400">{item}</span>
//                 <FiChevronDown className="inline ml-1 text-sm" />
//                 {open === item && (
//                   <ul className="absolute top-6 left-0 bg-[#1a1f2e] text-white p-3 space-y-2 rounded-md shadow-md z-10 w-40">
//                     <li><a href="#">Subitem 1</a></li>
//                     <li><a href="#">Subitem 2</a></li>
//                     <li><a href="#">Subitem 3</a></li>
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Logo (Second row, aligned left and right) */}
//           <div className="flex justify-between py-3">
//             {/* Left Logo */}
//             <div className="flex-shrink-0">
//               <Link href="/">
//                 <Image
//                   src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2hv7kq5gBIg5i2SZTGvC0CSSnL_9CzWos5tc3lbERxyJwk4DE"
//                   alt="Logo"
//                   width={140}
//                   height={20}
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Right Logo */}
//             <div className="flex-shrink-0 flex items-center space-x-4">
//               {/* First div with the blue background */}
//               <div className="w-[140px] h-[80px] bg-blue-600 p-5 rounded-[4px]">
//                 <h1 className="ml-10 mr-4">Get A</h1>
//                 <h1 className="ml-10 mr-4">QUOT</h1>
//               </div>

//               {/* Second div with rounded edges for the equal sign */}
//               <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full p-6 bg-blue-600">
//                 <h1>==</h1>
//               </div>
//             </div>
//           </div>

//           {/* Contact (Third row, centered) */}
//           <div className="flex justify-center py-3">
//             <div className="text-xl font-bold">
//               <Link href="#contact" className="hover:text-blue-400">CONTACT</Link>
//             </div>
//           </div>

//         </div>
//       </nav>
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import About from "../About/page";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-sm" : "bg-[#0b1220]"
      } text-white shadow px-4 py-3`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/">
            <Image
              src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/it-tech-logo-3.png"
              alt="Logo"
              width={140}
              height={20}
              className="cursor-pointer"
              priority
            />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6 font-bold text-lg transition-all`}
        >
          <Link href="/" className="hover:text-blue-400 text-xl md:text-base">
            Home
          </Link>
          <Link
            href="About"
            className="hover:text-blue-400 text-xl md:text-base"
          >
            About
          </Link>
          <Link
            href="#Footer"
            className="hover:text-blue-400 text-xl md:text-base"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
          <div className="bg-blue-600 text-white px-5 py-3 rounded-md text-center leading-tight">
            <p className="text-sm font-semibold">Get A</p>
            <p className="text-lg font-bold">QUOTE</p>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold">
            =
          </div>
        </div>
      </div>
    </nav>
  );
}
