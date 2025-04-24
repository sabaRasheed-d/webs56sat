"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Homea() {
  return (
    <div className="w-full px-6 py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-1">
        <div className="relative w-500 max-w-md rounded-xl py-12 px-4">
          <div className="flex flex-col items-center justify-center gap-10 relative z-10">
            <div className="self-start ml-6">
              <Image
                src="https://img.freepik.com/free-photo/social-integration-working-team_23-2149341140.jpg"
                alt="Team 1"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-xl border-4 border-gray-800"
              />
            </div>

            <div className="self-end mr-0">
              <Image
                src="https://img.freepik.com/premium-photo/business-team-working-laptop-check-results-their-work_484651-15837.jpg"
                alt="Team 2"
                width={260}
                height={260}
                className="rounded-full object-cover shadow-xl border-4 border-gray-800"
              />
            </div>

            <div className="self-start ml-6">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjdd1AKbwx0UQh7XuxtEwVBn09z9RvdbmsQ&s"
                alt="Team 3"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-xl border-4 border-gray-800"
              />
            </div>
          </div>
        </div>
        <div className="max-w-2xl z-10 text-center lg:text-left">
          <h6 className="text-4xl md:text-1xl font-bold text-gray-900 leading-tight mb-4">
            Creative Vision
          </h6>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Confirm superlative support With our technology.
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Maecenas euismod viverra purus, volutpat posuere mauris tristique
            quisokaft.Mauris facilisis consequat dolor, et luctus tortor
            imperdiet eget. Nulla europe venenatis libero. Proin nec nisi
            auctor, pulvinar masa at, eleifend nisl. Nullaga facilisi. Aliquam
            ac nisi sd enim ullamcorper condimentum. Donec et tortor vel lacus
            placerat pelletesque id et mi. Aenean consequat and interdum
            tincidunt Donec eget lorem non ligula sodales hendrerit. Donec utrot
            scelerisque urna.Aenean et feugiat massa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1">
                MORE ABIUT US
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
