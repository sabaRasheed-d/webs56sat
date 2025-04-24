
"use client";

import Head from "next/head";
import Image from "next/image";


export default function Ratting() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <Head>
        <title>Testimonials</title>
      </Head>
      <h2 className="text-center text-sm text-gray-400">Our Testimonials</h2>
      <h1 className="text-center text-3xl font-bold mb-12">
        What our client&apos;s say about us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-16 shadow-lg relative">
          <div className="flex items-center mb-4 space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-gray-300 mb-6">
            And process-centric web services. Rapidiously utilize customized
            leadership and standardized paradigms. Efficiently enable premium
            process improvements through.
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-testi-img1.png"
              alt="Farjana Khatun"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">Farjana Khatun</p>
              <p className="text-sm text-blue-400">Mymensingh</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 011.414 0L10 13l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>


        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-16 shadow-lg relative">
          <div className="flex items-center mb-4 space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-gray-300 mb-6">
            And process-centric web services. Rapidiously utilize customized
            leadership and standardized paradigms. Efficiently enable premium
            process improvements through.
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-testi-img2.png"
              alt="Marco Jansen"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">Marco Jansen</p>
              <p className="text-sm text-blue-400">South Africa</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 011.414 0L10 13l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-16 shadow-lg relative">
          <div className="flex items-center mb-4 space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-gray-300 mb-6">
            And process-centric web services. Rapidiously utilize customized
            leadership and standardized paradigms. Efficiently enable premium
            process improvements through.
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-testi-img3.png"
              alt="Marco Jansen"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">Virat Kholi</p>
              <p className="text-sm text-blue-400">Delhi-India</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 011.414 0L10 13l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-16 shadow-lg relative">
          <div className="flex items-center mb-4 space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-gray-300 mb-6">
            And process-centric web services. Rapidiously utilize customized
            leadership and standardized paradigms. Efficiently enable premium
            process improvements through.
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src="https://ittech.ditsolution.net/wp-content/uploads/2024/10/software-company-testi-img4.png"
              alt="Marco Jansen"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-bold">MH Hassan</p>
              <p className="text-sm text-blue-400">Ulipur Kurigram</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-blue-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 011.414 0L10 13l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
