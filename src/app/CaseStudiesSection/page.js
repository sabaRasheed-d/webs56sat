"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const caseStudies = [
  {
    title: "Innovative SEO and Content Marketing Strategies",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-roIOU6I_fuVBYWZpdClOscrIxDHIAsR-fg&s", // Place this in your public folder
    link: "https://ittech.ditsolution.net/em_case_study/knowledge-base-live-chat/",
  },
  {
    title: "Comprehensive SEO Audit and Keyword Strategy",
    image:
      "https://img.freepik.com/free-photo/front-view-musicians-working-with-laptop_23-2150206745.jpg?semt=ais_hybrid&w=740",
    link: "#",
  },
  {
    title: "The Complete Guide Technical Page Optimization",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFENg0DGynQuAd-pOK4RqLIwuGJrW8MwAMA&s",
    link: "#",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#030B1B] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-400 mb-2">Examples Of Our Work</p>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold leading-snug max-w-xl">
            Every Great Design Begins With <br />A Great Story.
          </h2>
          <Link href="/contact">
            <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1 mt-5">
              VIEW ALL SERVICES
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              href={study.link}
              key={index}
              className="relative rounded-xl overflow-hidden group"
            >
              <Image
                src={study.image}
                alt={study.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition"></div>
              <div className="absolute bottom-4 left-4 right-16 text-white text-lg font-semibold">
                {study.title}
              </div>
              <div className="absolute top-0 right-0 bg-blue-600 text-white p-2 rounded-bl-xl group-hover:bg-blue-700 transition">
                <FiArrowRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
