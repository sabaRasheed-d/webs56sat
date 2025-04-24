"use client";
import { useState } from "react";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Basic Plan",
      tag: "Plan",
      gradient: "from-gray-700 to-gray-400",
      monthlyPrice: 19,
      yearlyPrice: 190,
    },
    {
      name: "Professional Plan",
      tag: "Plan",
      gradient: "from-gray-700 to-gray-400",
      monthlyPrice: 49,
      yearlyPrice: 490,
    },
    {
      name: "Enterprise Plan",
      tag: "Plan",
      gradient: "from-gray-700 to-gray-400",
      monthlyPrice: 75,
      yearlyPrice: 750,
    },
  ];

  const features = [
    "Email & Communication Services",
    "Basic Data Backup And Storage",
    "Standard Security Measures",
    "Limited Software Support",
    "Suitable For Small Businesses",
  ];

  return (
    <div className="bg-gray-380 text-white py-16 px-6 md:px-20">
      <h2 className="text-center text-2xl font-bold text-gray-400">
        Pricing Plans
      </h2>
      <h1 className="text-center text-3xl font-bold mb-12 mt-2">
        Choose Your Best Plans
      </h1>
      <div className="flex justify-end mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span
            className={billing === "monthly" ? "text-white font-semibold" : ""}
          >
            Monthly
          </span>
          <div
            className="bg-gradient-to-r from-indigo-600 to-blue-500 w-14 h-7 rounded-full flex items-center p-1 cursor-pointer transition-all"
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
          >
            <div
              className={`bg-white w-5 h-5 rounded-full transform transition-transform ${
                billing === "yearly" ? "translate-x-7" : ""
              }`}
            />
          </div>
          <span
            className={billing === "yearly" ? "text-white font-semibold" : ""}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, index) => {
          const price =
            billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${plan.gradient} p-8 rounded-2xl shadow-xl relative`}
            >
              <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                {plan.tag}
              </div>
              <div className="text-4xl font-bold mb-2">${price}</div>
              <div className="text-gray-200 mb-6">
                Per {billing === "monthly" ? "Month" : "Year"}
              </div>
              <button className="bg-gray-950 text-white w-full py-3 rounded-full font-semibold mb-3 hover:bg-gray-800 transition">
                PAY NOW →
              </button>
              <button className="bg-gradient-to-r from-indigo-600 to-blue-500 w-full py-3 rounded-full font-semibold hover:brightness-110 transition">
                CLICK HERE
              </button>
              <div className="mt-6">
                <h4 className="text-white font-bold mb-3 uppercase text-sm tracking-widest">
                  {plan.name}
                </h4>
                <ul className="text-gray-200 space-y-2 text-sm">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span>🔹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
