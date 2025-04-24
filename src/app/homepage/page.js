// "use client";
// import Link from "next/link";
// import Image from "next/image";
// export default function Homepage() {
//   return (
//     <>
//       <div>
//         <div className="flex justify-between py-3 mt-62 ">
//           {/* Left Logo */}

//           {/* Right Logo */}
//           <div className="flex-shrink-0 flex items-center space-x-4">
//             {/* First div with the blue background */}
//             <div className="w-[1000px] h-[80px] p-5 rounded-[4px]">
//             <h1 className="ml-10 font-bold text-6xl">Set Your Business with Innovative Idea</h1>
//             <p className="ml-10 font-bold w-[600px] h-[80px] mt-3">Curabitur sed facilisis erat. Vestibulum pharetra eros ringilla porttitor. oltorrent gongi Duis a orci nunc. Suspendisse ac convallis sapien, commodo libero. Donec nec duomoi luctus, pellentesque lacus sed,</p>
//             </div>

//             {/* Second div with rounded edges for the equal sign
//               <div className="w-[440px] h-[30px] flex items-center justify-center rounded-full p-6 bg-blue-600">
//               <p>Curabitur sed facilisis erat. Vestibulum pharetra eros ringilla porttitor. oltorrent gongi Duis a orci nunc. Suspendisse ac convallis sapien, commodo libero. Donec nec duomoi luctus, pellentesque lacus sed,</p>
//               </div> */}
//           </div>

//           <div className="flex-shrink-0 mt-20 mr-10">
//             <Link href="/">
//               <Image
//                 src="https://images.stockcake.com/public/e/e/b/eeb7a947-236d-4e52-8306-bec9f68e485c_medium/tech-team-working-stockcake.jpg"
//                 alt="Logo"
//                 width={340}
//                 height={60}
//                 priority
//                 className="rounded-tl-full rounded-bl-full"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";

export default function Homepage() {
  const rotatingRef = useRef(null);

  useEffect(() => {
    const rotate = () => {
      if (rotatingRef.current) {
        rotatingRef.current.style.transform = `rotate(${Date.now() / 100}deg)`;
      }
    };
    const interval = setInterval(rotate, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 py-12 bg-white mt-22 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="max-w-2xl z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Set Your Business with{" "}
            <span className="text-blue-600">Innovative Ideas</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Curabitur sed facilisis erat. Vestibulum pharetra eros ringilla
            porttitor. Duis a orci nunc. Suspendisse ac convallis sapien,
            commodo libero. Donec nec luctus, pellentesque lacus sed.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1">
                VIEW ALL Work
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-blue-600 border-2 border-blue-600 transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg transform hover:translate-x-1">
                MEET WITH US
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-[300px] h-[300px] lg:w-[100px] lg:h-[100px] flex items-center justify-center mt-20 mr-0">
          <div className="absolute w-full h-full border-2 border-dotted border-cyan-500 rounded-full animate-spin-slow"></div>
          <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl text-center">
            <svg viewBox="0 0 300 300" className="w-[80%] h-[80%]">
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150
           m -120, 0
           a 120,120 0 1,1 240,0
           a 120,120 0 1,1 -240,0"
                />
              </defs>
              <text fill="white" fontSize="56" fontWeight="bold">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Business Development • IT Solutions •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div
          ref={rotatingRef}
          className="absolute w-[100px] h-[100px] rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218dfb"
            alt="Avatar"
            width={0}
            height={0}
            className="rounded-full"
          />
        </div>
        <div className="flex-shrink-0 z-10">
          <Link href="/">
            <Image
              src="https://images.stockcake.com/public/e/e/b/eeb7a947-236d-4e52-8306-bec9f68e485c_medium/tech-team-working-stockcake.jpg"
              alt="Business Team"
              width={420}
              height={300}
              className="rounded-tl-[100px] rounded-bl-[100px] hover:scale-105 transition-transform duration-300 shadow-lg"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
