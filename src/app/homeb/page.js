"use client";

import Image from "next/image";
import { FaPlay, FaCheckCircle } from "react-icons/fa";

export default function BusinessHero() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-20 px-6 overflow-hidden relative">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 z-10">
          <p className="text-sm text-white-500 uppercase font-semibold mb-2">
            More Creative Vision
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Unlock your business potential road and plan.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam nostrud it solution tempor incididunt ut.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-base">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" />
              Creative Strategy
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" />
              Corporate Identity
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" />
              Rebranding Design
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" />
              Unique Production
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="relative w-full max-w-lg mx-auto rounded-[300px] overflow-hidden bg-gray-800 border-4 border-[#1a1a1a] shadow-2xl">
            <Image
              src="https://static2.bigstockphoto.com/4/9/3/large1500/394887461.jpg" 
              alt="Team Video Preview"
              width={600}
              height={400}
              className="w-full h-auto object-cover grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full text-white text-xl shadow-lg hover:scale-105 transition">
                <FaPlay />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
