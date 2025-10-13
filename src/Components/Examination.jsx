import React from "react";
import { examinationdata } from "../constants/index";

export default function Examination() {
  return (
    <div className="p-4 sm:p-5">
      {/* Heading */}
      <h1 className="text-center text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-5">
        <span className="text-cyan-400 ">Examination </span>Board
      </h1>

      {/* Container */}
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {examinationdata.map((person, idx) => {
            const GitHub = person.githubicon;
            const Twitter = person.twittericon;

            return (
              <article
                key={idx}
                className="bg-gray-800/60 rounded-2xl overflow-hidden text-white shadow-sm"
              >
                {/* Image */}
                <div className="w-full h-40 sm:h-48 md:h-44 lg:h-56 overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold">
                    {person.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-300 leading-snug">
                    {person.description}
                  </p>

                  {/* Icons */}
                  <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3">
                    {GitHub && (
                      <button
                        aria-label={`${person.name} GitHub`}
                        className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-cyan-400 transition"
                        type="button"
                      >
                        <GitHub className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    )}
                    {Twitter && (
                      <button
                        aria-label={`${person.name} Twitter`}
                        className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-cyan-400 transition"
                        type="button"
                      >
                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
