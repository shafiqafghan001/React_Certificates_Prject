import React from "react";

export default function SeeMore() {
  return (
    <div className="flex gap-4 items-center justify-center bg-gray-700 p-3">
      <p className="text-white font-bold">
        Would you like to see more{" "}
        <span className="text-blue-700"> Certifications?</span>
      </p>
      <button className="border-2 border-cyan-400 text-black py-2 px-3 rounded text-[14px] font-semibold mb-2 hover:bg-cyan-400 hover:text-white">
        Learn More
      </button>
    </div>
  );
}
