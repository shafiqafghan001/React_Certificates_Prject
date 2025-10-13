import React from "react";
import { aurora } from "../assets";

export default function Meet() {
  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl bg-gray-800 p-3 md:p-8 rounded-[12px]">
        {/* Left: Image & Info */}
        <div className="flex flex-col gap-4 items-center text-center md:w-[35%]">
          <img
            src={aurora}
            alt="Aurora"
            className="w-[90px] h-[90px] rounded-full"
          />
          <h4 className="text-white text-lg md:text-xl font-semibold">
            <span className="text-cyan-400">Aurora </span> Scharff
          </h4>
          <p className="text-gray-400 text-sm md:text-base">
            React Expert and <br />
            Microsoft MVP in <br />
            Web Technologies
          </p>
        </div>

        {/* Right: Description */}
        <div className="md:w-[65%] md:text-left">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Meet your instructor
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Aurora Scharff is a recognized React expert, Microsoft MVP in Web
            Technologies, and international conference speaker based in Norway.
            With extensive experience in React, Next.js, and React Server
            Components, she played a key role in shaping the React Certification
            program. The program is both comprehensive and practical-focused on
            real-world skills and aligned with industry best practices to
            deliver top-tier training. Her strong technical background and
            hands-on expertise make her a trusted voice in the React community
            and a core contributor to the React Certification.
          </p>
        </div>
      </div>
    </div>
  );
}
