// Testimonial.jsx
import React from "react";
import { testimonialdata } from "../constants";

export default function Testimonial() {
  return (
    <div className="p-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-cyan-400 mb-12">
        Testimonials
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {testimonialdata.map((item, idx) => {
          const QuoteIcon = item.qouticon;

          return (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 shadow-lg flex-1 flex flex-col min-w-0"
            >
              {/* Quote Icon */}
              {QuoteIcon && (
                <QuoteIcon className="text-cyan-400 w-8 h-8 mb-4" />
              )}

              {/* Description */}
              <p className="text-gray-200 mb-6 flex-1">{item.description}</p>

              {/* Author Section */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.author.img}
                  alt={item.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">
                    {item.author.name}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {item.author.profession}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
