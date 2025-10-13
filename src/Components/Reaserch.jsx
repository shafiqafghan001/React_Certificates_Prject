import React from "react";
import { researchdata } from "../constants";

export default function Research() {
  return (
    <div className="px-5 mt-10">
      <div>
        <h1 className="text-center text-white mb-5 mt-5 font-bold text-6xl">
          Research show <span className="text-cyan-400">clear interest</span> in{" "}
          <br /> achieving certification
        </h1>

        <p className="text-gray-400 text-center mb-5">
          We received more than 2,300 responses from React Developers to a{" "}
          <br />
          pre-launch survey conducted about the Certification Program.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        {researchdata.map((item, idx) => {
          const Icon = item.reacticon;

          return (
            <div
              key={idx}
              className="w-full bg-gray-800 rounded-2xl p-8 flex flex-col  text-white shadow-md hover:shadow-lg transition-all"
            >
              <Icon size={48} className="mb-4 text-cyan-400" />
              <h1 className="text-5xl mb-2 text-cyan-400">{item.percentage}</h1>
              <p className=" text-gray-400">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
