// OptionalCards.jsx
import React from "react";
import { optional } from "../constants/index"; // adjust path if needed

export default function Optional() {
  return (
    <div>
      {/* Header */}
      <div className="mt-5 p-6">
        <h1 className="text-6xl font-bold text-white text-center">
          <span className="text-cyan-400 mb-4">Optional Preparation</span>{" "}
          <br />
          Training Products
        </h1>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {optional.map((item, idx) => {
            const Icon = item.icon;
            const Tick = item.tickicon;

            return (
              <div key={idx} className="w-full h-full">
                <div className="w-full h-full bg-white/5 text-gray-400 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                  {/* Icon */}
                  <div className="mb-4">
                    {Icon ? (
                      <Icon
                        className="w-10 h-10 text-cyan-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-800" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl text-white font-semibold mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Info items with ticks */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {[item.info1, item.info2, item.info3].map((info, i) =>
                      info ? (
                        <div
                          key={i}
                          className="flex items-center gap-3 px-0 py-0"
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-400">
                            {Tick ? (
                              <Tick
                                className="w-4 h-4 text-black"
                                aria-hidden="true"
                              />
                            ) : (
                              <span className="w-4 h-4" />
                            )}
                          </div>
                          <span className="text-sm">{info.trim()}</span>
                        </div>
                      ) : null
                    )}
                  </div>

                  {/* Button */}
                  <div>
                    <button
                      type="button"
                      className="inline-block px-4 py-2 rounded-md border border-cyan-700 text-white transition w-full"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
