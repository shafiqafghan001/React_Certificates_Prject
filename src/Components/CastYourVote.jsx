import React from "react";
import { FaCode } from "react-icons/fa";
import { competence } from "../assets";

export default function CastYourVote() {
  return (
    <section className="py-10 px-6 md:px-12 bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-white space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-600 p-3  flex items-center justify-center w-[60px] h-[60px] rounded-[100%]">
              <FaCode className="text-white " size={"80px"} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">Certificates.dev</h1>
          </div>

          <h2 className=" text-3xl md:text-4xl font-bold leading-snug">
            What other <span className="text-cyan-400">Certifications</span> do{" "}
            <br />
            you want?
          </h2>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Let us know for which frameworks and technologies you’d like to
            receive validation for your skills by voting in the poll.
          </p>

          <button className="bg-blue-800 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-9 rounded-md shadow-md">
            Cast Your Vote
          </button>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={competence}
            alt="Competence illustration"
            className="w-full max-w-sm rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
