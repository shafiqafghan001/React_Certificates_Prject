import React from "react";
import { benefits } from "../constants";

export default function Benefits() {
  return (
    <section className=" text-white py-10 px-6 md:px-16">
      <div className="flex flex-col gap-12">
        {benefits.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text  */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-500">
                {item.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Image  */}
            <div className="flex-1 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-[300px] md:max-w-[400px] w-full h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
