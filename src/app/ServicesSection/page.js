"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Cloud Solutions",
    description:
      "Services are professional offering provided by businesses to meet specific needs or requirements.",
    icon: "https://img.icons8.com/ios-filled/50/cloud.png",
  },
  {
    title: "Cyber Security",
    description:
      "Services are professional offering provided by businesses to meet specific needs or requirements.",
    icon: "https://img.icons8.com/ios-filled/50/lock.png",
  },
  {
    title: "Data Analytics",
    description:
      "Services are professional offering provided by businesses to meet specific needs or requirements.",
    icon: "https://img.icons8.com/ios-filled/50/combo-chart.png",
  },
  {
    title: "Web Development",
    description:
      "Build and maintain websites that are responsive, functional, and visually engaging.",
    icon: "https://img.icons8.com/ios-filled/50/source-code.png",
  },
  {
    title: "Software Development",
    description:
      "Design, create, and deploy scalable software tailored to business processes.",
    icon: "https://img.icons8.com/ios-filled/50/code.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your online presence through SEO, social media, and paid advertising strategies.",
    icon: "https://png.pngtree.com/png-clipart/20230403/original/pngtree-digital-marketing-line-icon-png-image_9020927.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-900 text-white text-center py-16 px-4">
      <p className="text-sm text-gray-400 mb-2">Solution We Offer</p>
      <h1 className="text-3xl font-extrabold mb-1">
        Bring The Revolution With The
      </h1>
      <h2 className="text-3xl font-extrabold mb-12">Diligence Service</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gray-700 p-4 rounded-full">
                <Image
                  src={service.icon}
                  width={50}
                  height={50}
                  alt={service.title}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      <Link href="/contact">
        <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1 mt-5">
          VIEW ALL SERVICES
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </Link>
    </section>
  );
}
