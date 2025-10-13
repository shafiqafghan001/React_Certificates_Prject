import React from "react";
import { newsdata } from "../constants";
import { FaArrowRight } from "react-icons/fa";

export default function ReadNews() {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-8 sm:mb-12">
        Read the latest from <br />
        <span className="text-cyan-400">Certificates.dev</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {newsdata.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:bg-gray-700 transition-colors duration-300 w-full sm:w-[48%] md:w-[32%] lg:w-[23%] flex flex-col"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover"
            />

            <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h1>
                <p className="text-gray-200 text-sm sm:text-[16px] md:text-[18px] mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <img
                    src={item.author.img}
                    alt={item.author.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <h6 className="text-sm sm:text-[16px] md:text-[18px] text-white">
                    {item.author.name}
                  </h6>
                </div>
                <span className="text-xs sm:text-sm text-gray-400">
                  {item.author.data}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="flex items-center gap-2 bg-cyan-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-cyan-500 transition text-sm sm:text-base">
          See More Articles <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
