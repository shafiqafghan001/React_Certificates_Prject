import React from "react";
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import styles from "../style";
import { certificate, reacticon1, reacticon2 } from "../assets/index.js";

export default function Hero() {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-center mt-5 ${styles.paddingY}`}
    >
      {/* Left text column */}
      <div className="flex-1 flex flex-col px-6 sm:px-16 xl:px-0">
        <div className="flex items-center justify-center bg-gray-800 rounded-[6px] w-fit p-2">
          <p className="text-white text-xs md:text-sm font-medium mb-1">
            JUNIOR, MID-LEVEL AND SENIOR EXAMS NOW AVAILABLE
          </p>
        </div>

        <div className="flex flex-col w-full mt-4">
          <h1>
            <span className="font-poppins font-semibold ss:text-[72px] text-[52px] text-cyan-500 leading-[75px]">
              React
            </span>
          </h1>
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white leading-[75px]">
            Certification
          </h1>
          <h3 className="font-poppins font-semibold text-white mt-4 text-2xl md:text-3xl inline-block">
            Certification of competence for React
          </h3>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <button className="flex flex-row items-center justify-center gap-2 text-white p-3 md:p-3 text-sm md:text-base rounded-md w-full border-2 border-cyan-600 hover:bg-cyan-600 transition-all duration-300">
            <FaGithub size={18} />
            Sign Up With GitHub
          </button>

          <button className="flex flex-row items-center justify-center gap-2 text-white p-3 md:p-3 text-sm md:text-base rounded-md w-full border-2 border-cyan-600 hover:bg-cyan-600 transition-all duration-300">
            <FaDiscord size={18} />
            Sign Up With Discord
          </button>

          <p className="text-gray-200 mt-2 text-xs md:text-sm">
            Or create an account with your email
          </p>
        </div>

        <div className="flex gap-3 mt-2">
          <div className="flex items-center gap-2 border border-white rounded-md px-3 py-2 w-[80%]">
            <FaEnvelope className="text-white text-lg" />
            <input
              type="text"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 px-2"
            />
          </div>
          <div className="w-[20%]">
            <button className="text-white bg-cyan-600 p-3 rounded font-bold px-4 hover:bg-cyan-500 transition-colors duration-300">
              Sign Up
            </button>
          </div>
        </div>

        <p className="text-white mt-3">
          Powered by{" "}
          <a href="" className="text-white">
            certificates.dev
          </a>
        </p>
      </div>
      {/* Right image column */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 bg-[#00040f] rounded-lg p-6 group">
        <div className="relative w-[450px] h-[350px] md:w-[600px] md:h-[450px] rounded-full bg-transparent">
          <img
            src={certificate}
            alt="certificate big"
            className="absolute z-10 w-[90%] md:w-[85%] h-auto object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_120px_rgb(34,211,238)] transition-all duration-500"
          />

          <img
            src={reacticon2}
            alt="React top-left"
            className="absolute z-20 w-[28%] md:w-[24%] h-auto top-[10%] left-[10%] object-contain transition-transform duration-700 ease-out group-hover:rotate-[-15deg]"
          />

          <img
            src={reacticon1}
            alt="React right-side"
            className="absolute z-30 w-[50%] md:w-[44%] h-auto top-[50%] left-[58%] object-contain transition-transform duration-700 ease-out group-hover:rotate-[15deg]"
          />
        </div>
      </div>
    </section>
  );
}
