import React from "react";
import { step } from "../constants";

export default function Steps() {
  const topSteps = step.slice(0, 2);
  const third = step[2];

  const img1 = third?.img1 || null;
  const img2 = third?.img2 || null;

  return (
    <div className="p-4">
      <h1 className="text-center text-white font-bold text-5xl mb-12">
        Steps to <span className="text-cyan-400">Certification</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {topSteps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-gray-800 text-white rounded-2xl p-6 sm:p-9 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex flex-col min-w-[120px] sm:min-w-[140px]">
                <span className="font-bold text-cyan-400 mb-2 text-sm sm:text-base">
                  {item.title}
                </span>
                <Icon size={30} className="text-cyan-400 sm:text-2xl" />
              </div>
              <div className="flex-1 flex flex-col justify-start mt-4 sm:mt-0">
                <h2 className="text-white font-bold text-lg sm:text-xl mb-2">
                  {item.heading}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {third && (
        <div className="bg-gray-800 text-white rounded-2xl p-4 sm:p-6 w-full">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex flex-col min-w-[140px] md:min-w-[160px]">
              <span className="text-cyan-400 font-bold mb-2 text-sm sm:text-base">
                {third.title}
              </span>
              <third.icon size={30} className="text-cyan-400 sm:text-2xl" />
            </div>
            <div className="flex-1 flex flex-col justify-start mt-4 md:mt-0">
              <h2 className="text-white font-bold text-lg sm:text-xl mb-2">
                {third.heading}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                {third.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {img1 && (
              <img
                src={img1}
                alt="examination 1"
                className="w-full sm:w-[48%] rounded-lg object-cover"
              />
            )}
            {img2 && (
              <img
                src={img2}
                alt="examination 2"
                className="w-full sm:w-[48%] rounded-lg object-cover"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
