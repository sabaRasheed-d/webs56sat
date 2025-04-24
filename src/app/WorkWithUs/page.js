"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function WorkWithUs() {
  return (
    <div className="relative h-[500px] bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/finger-pointing-contact-us-nmgnzu9fqlu25pri.jpg')",
        }}
      />
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
        <h1 className="text-9xl md:text-9xl font-black tracking-widest text-transparent stroke-text uppercase whitespace-nowrap">
          Let&apos;s Start Talk Work With Us...
        </h1>
      </motion.div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-60 h-60 rounded-full bg-gradient-to-r from-blue-800 to-blue-500 flex flex-col justify-center items-center text-white font-semibold text-lg shadow-xl"
        >
          <span className="text-base">Contact</span>
          <span className="text-xl">With Us →</span>
        </motion.button>
      </div>
    </div>
  );
}
