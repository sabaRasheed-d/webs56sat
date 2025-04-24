"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="Footer" className="bg-[#111417] text-white">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-8 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <span className="text-blue-500 text-xl">📞</span>
          <div>
            <p className="text-sm text-gray-400">Call us anytime</p>
            <p className="font-semibold">+325 25148.5874</p>
          </div>
        </div>

        <div className="text-center my-4 md:my-0">
          <h4 className="font-bold text-lg">See Our New updates</h4>
        </div>

        <form className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
          />
          <button className="bg-gradient-to-r from-indigo-600 to-blue-500 px-5 py-2 rounded-md font-semibold">
            Subscribe
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-12">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <span className="text-white">🧊</span> IT-Tech
          </h2>
          <p className="text-gray-400">
            At Top Tech Solutions, we are about Us technology and dedicated to
            providing IT solutions for businesses of all sizes.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Our Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Case Study</li>
            <li>New & Article</li>
            <li>Our Team</li>
            <li>All Portfolio</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>Cloud Solutions</li>
            <li>Data Analytic</li>
            <li>Syber Security</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Subscribe</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Support Area</li>
            <li>Support Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Conditions & Rules</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 px-4 pb-3">
        <p>© 2025 IT-Tech. Designed By Dream IT Solution</p>
        <div className="flex gap-3">
          <a
            href="#"
            className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600"
          >
            <i className="fab fa-facebook-f text-white text-xs">
              <FaFacebookF />
            </i>
          </a>
          <a
            href="#"
            className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600"
          >
            <i className="fab fa-x-twitter text-white text-xs">
              <FaTwitter />
            </i>
          </a>
          <a
            href="#"
            className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600"
          >
            <i className="fab fa-linkedin-in text-white text-xs">
              <FaLinkedinIn />
            </i>
          </a>
          <a
            href="#"
            className="bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600"
          >
            <i className="fab fa-pinterest-p text-white text-xs">
              <FaPinterestP />
            </i>
          </a>
        </div>
      </div>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-md hover:scale-105 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
