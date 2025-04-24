"use client";

import Navbar from "../navbar/page";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronUp } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const words = [
  "SAFE ONLINE BROWSING",
  "DATA PROTECTION",
  "NETWORK SEGMENTATION",
  "CYBER SECURITY",
  "WLEGAL DESCLIMERS",
];

export default function About() {
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

  const posts = [
    {
      title: "Our Technology Solutions",
      description:
        "Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital",
      date: "August 15, 2024",

      image:
        "https://ittech.ditsolution.net/wp-content/uploads/2025/01/icon1_About-Us.png",
    },
    {
      title: "Why should choose Our Services",
      description:
        "Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital",
      date: "August 15, 2024",

      image:
        "https://ittech.ditsolution.net/wp-content/uploads/2025/01/icon2_About-Us.png",
    },
    {
      title: "IT tech Mission and vission",
      description:
        "Authoritatively disintermediate business to optimal web-readiness task vertical service timely human capital",
      date: "August 15, 2024",

      image:
        "https://ittech.ditsolution.net/wp-content/uploads/2025/01/icon3_About-Us.png",
    },
  ];

  return (
    <>
      <div id="About">
        <Navbar />
        <div
          className="bg-cover bg-center text-white py-16 px-6 sm:px-10 md:px-20 mt-22 max-w-full"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/top-view-blue-monday-concept-composition-with-telephone_23-2149139104.jpg')",
          }}
        >
          <h2 className="text-center text-4xl sm:text-4xl font-bold text-black">
            About Us
          </h2>

          <div className="flex justify-center mt-5">
            <div className="border-l-4 border-blue-500 pl-0 w-full max-w-xl ml-80">
              <h1 className="text-3xl sm:text-3xl font-md mb-2 mt-2 text-center mr-70 text-black">
                Home <span className="text-black mx-2">&gt;</span> About Us
              </h1>
            </div>
          </div>
        </div>

        <section className="w-full bg-white text-black py-20 px-6 overflow-hidden relative">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 relative z-10">
              <div className="relative w-full max-w-lg mx-auto rounded-[100px] overflow-hidden bg-gray-800 border-1 border-[#1a1a1a] shadow-2xl">
                <Image
                  src="https://ittech.ditsolution.net/wp-content/uploads/2025/01/About-Us-02.png"
                  alt="Team Video Preview"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 z-10">
              <p className="text-md text-blue-500 uppercase font-semibold mb-2">
                ...OUR EXPERTS
              </p>
              <h2 className="text-6xl md:text-4xl font-bold leading-tight mb-6">
                Ransform Your Website into a Revenue-Generating Machine Achieve
                Online Success
              </h2>
              <p className="text-gray-600 text-md mb-8">
                Competently leverage existing top-line bandwidth vis-a-vis
                client-centric supply chains. Enthusiastically maximize cost
                effective technologies
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black text-base">
                <div className="flex items-center gap-3 font-bold text-xl">
                  <Image
                    src="https://ittech.ditsolution.net/wp-content/uploads/2025/01/icon-1-About-Us.png" //
                    alt="Tick icon"
                    width={24}
                    height={24}
                  />
                  Real time Performance Report send
                </div>
                <div className="flex items-center gap-3 font-bold text-xl">
                  <Image
                    src="https://ittech.ditsolution.net/wp-content/uploads/2025/01/icon-2-About-Us.png"
                    alt="Tick icon"
                    width={24}
                    height={24}
                  />
                  Corporate Identity
                </div>
                <div className="flex items-center gap-3 font-bold text-xl">
                  <Image
                    src="https://ittech.ditsolution.net/wp-content/uploads/2025/01/icon-3-About-Us.png"
                    alt="Tick icon"
                    width={24}
                    height={24}
                  />
                  Rebranding Design
                </div>
                <div className="flex items-center gap-3 font-bold text-xl">
                  <Image
                    src="https://ittech.ditsolution.net/wp-content/uploads/2025/01/icon-4-About-Us.png"
                    alt="Tick icon"
                    width={24}
                    height={24}
                  />
                  Unique Production
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ml-170 mt-8">
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1">
                CONTACT US
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/contact" className="mt-2">
              <Image
                src="https://ittech.ditsolution.net/wp-content/uploads/2025/01/arrow.png"
                alt="Arrow Icon"
                width={120}
                height={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>

        <div className="relative h-[100px] bg-blue-900 overflow-hidden p-14 text-white">
          <motion.div
            className="absolute inset-0 flex items-center"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            }}
          >
            <h1 className="text-1xl md:text-5xl font-bold uppercase whitespace-nowrap flex items-center gap-4 min-w-max">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 whitespace-nowrap"
                >
                  {word}
                  <Image
                    src="https://www.svgrepo.com/show/346516/apps.svg"
                    alt="Flower"
                    width={34}
                    height={34}
                    className="pl-2 invert"
                  />
                </span>
              ))}
            </h1>
          </motion.div>
        </div>

        <div className="bg-white text-black py-16 px-6 md:px-20">
          <h2 className="text-center text-2xl font-bold text-blue-600">
            ...More About...
          </h2>
          <h1 className="text-center text-4xl font-bold mb-1 mt-2">
            Driving Change with Innovative
          </h1>
          <h1 className="text-center text-4xl font-bold mb-12 mt-0">
            Successful Softwares
          </h1>
          <div className="grid md:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-50 px-18 pt-18 pb-8 h-52 "
                />

                <div className="pl-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2"></div>

                  <h2 className="text-lg font-bold textblack hover:underline cursor-pointer mb-2 px-3">
                    {post.title}
                  </h2>
                  <p className="text-sm font-bold text-gray-700 mb-4">
                    {post.description}
                  </p>

                  <div className="flex justify-between items-center text-sm">
                    <Link href="/contact">
                      <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1">
                        WHY CHOOSE US
                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#020c1b] text-white py-16 px-6 md:px-20">
          <p className="text-blue-500 font-medium uppercase mb-2">
            Our History
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
            Focus on the Innovations Introduced, <br />
            Entering New Markets
          </h2>

          <div className="relative border-l border-dotted border-gray-600 ml-2 pl-6 space-y-10">
            <div className="relative">
              <span className="absolute left-[-13px] top-2 w-3 h-3 bg-gray-400 rounded-full"></span>
              <p className="text-lg font-semibold mb-1">2017 - 2019</p>
              <div className="bg-[#1b263b] p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  Company Founding and Vision
                </h3>
                <p className="text-sm text-gray-300">
                  Authoritatively disintermediate business to optimal
                  web-readiness task vertical service timely human capital scale
                  cross-platform materials and process-centric
                </p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute left-[-13px] top-2 w-3 h-3 bg-gray-400 rounded-full"></span>
              <p className="text-lg font-semibold mb-1">2020 - 2022</p>
              <div className="bg-[#1b263b] p-6 rounded-2xl shadow-lg relative">
                <h3 className="text-xl font-bold mb-2">
                  Milestones and Growth
                </h3>
                <p className="text-sm text-gray-300">
                  Authoritatively disintermediate business to optimal
                  web-readiness task vertical service timely
                </p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute left-[-13px] top-2 w-3 h-3 bg-gray-400 rounded-full"></span>
              <p className="text-lg font-semibold mb-1">2023 - 2025</p>
              <div className="bg-[#1b263b] p-6 rounded-2xl shadow-lg relative">
                <h3 className="text-xl font-bold mb-2">
                  Present and Future Goals
                </h3>
                <p className="text-sm text-gray-300">
                  Authoritatively disintermediate business to optimal
                  web-readiness task vertical service timely human capital scale
                  cross-platform materials and process-centric
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="text-white">
          <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-800 py-10 px-6 text-start">
            <h2 className="text-6xl md:text-2xl font-semibold mt-4">
              View Our Achievement of Top <br />
              <span className="font-bold">Technology Milestone’s</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-10 text-center text-white ml-85 mb-6">
              <div>
                <h3 className="text-4xl font-extrabold">10K+</h3>
                <p className="text-3xl text-end">All Completed Works</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold">36+</h3>
                <p className="text-3xl text-en">Expert Members</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold">97%</h3>
                <p className="text-3xl text-en">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-100 via-transparent to-blue-100 text-black pt-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-2/3">
                <p className="text-blue-600 font-semibold text-sm mb-2">
                  • MEET OUR TEAM
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  High Professional Team Ready <br />
                  To Develope Your Business
                </h2>
              </div>
              <div className="mt-10 md:mt-0 flex items-center gap-4">
                <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1">
                  Contact Us <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
            <div className="bg-white py-12 px-4 md:px-10 mt-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-4">
                  Meet Our Experts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-b from-gray-100 to-gray-300 p-6 rounded-2xl shadow-md text-center">
                    <img
                      src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/team.png"
                      alt="Team Member 1"
                      className="w-64 h-64  mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold">Kamal Raj</h3>
                    <p className="text-sm text-gray-700">WordPress Developer</p>
                  </div>
                  <div className="bg-gradient-to-b from-gray-100 to-gray-300 p-6 rounded-2xl shadow-md text-center">
                    <img
                      src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/team2-1.png"
                      alt="Team Member 2"
                      className="w-64 h-64  mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold">Nur Islam Nur</h3>
                    <p className="text-sm text-gray-700">Pro Designer</p>
                  </div>
                  <div className="bg-gradient-to-b from-gray-100 to-gray-300 p-6 rounded-2xl shadow-md text-center">
                    <img
                      src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/team4.png"
                      alt="Team Member 3"
                      className="w-64 h-64  mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold">Chloe Phoenix</h3>
                    <p className="text-sm text-gray-700">Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-r from-white via-green-50 to-green-100 pt-20 px-6 text-center">
          <p className="text-blue-700 text-sm font-semibold mb-4">
            ● CONTACT US
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Do You Want to Take Your Business to <br /> Next Level? Connect with
            Us
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-8">
            Authoritatively disintermediate business to optimal web-readiness
            task vertical service timely human capital business plans with us
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              CONTACT US <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="mt-1 flex justify-center gap-4">
            <img
              src="https://media.licdn.com/dms/image/D5612AQHyPliYKNnClg/article-cover_image-shrink_720_1280/0/1699274024969?e=2147483647&v=beta&t=YNnLJHevDIRdgBZcl2IlTc0fqXEhC50UH90yaRJBkbY"
              alt="Team Member"
              className="w-480 h-120  object-cover"
            />
          </div>
        </section>

        <footer className="bg-[#06142E] text-white pt-16 pb-10 px-6 md:px-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="text-xl font-bold mb-4 flex items-center gap-2">
                <img
                  src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/it-tech-logo-3.png"
                  alt="IT-Tech"
                  className="w-28 h-8"
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-300 mb-6">
                Monotonectally synergize granular top visualize strategic
                infomediaries afters task state of the art infrastructures
                digital agency in north
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded shadow">
                Discover More →
              </button>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → Pricing Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → Latest Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → IT Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → IT Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    → SEO Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-3">
                Subscribe our Latest Newsletter
              </p>
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="w-full px-4 py-2 rounded bg-[#0A1A3A] text-white border border-gray-600 mb-3"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 IT-Tech. Designed By Dream IT Solution</p>

            {/* Social Icons */}
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
      </div>
    </>
  );
}
