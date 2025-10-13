import React, { useState } from "react";
import { pricing } from "../constants/index";

export default function PricingSection() {
  return (
    <div className="px-4 py-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-cyan-400 mb-5">Pricing</h1>
        <h2 className="text-3xl font-bold text-white">
          Get your React Certification now during the <br /> Launch and enjoy
          these <span className="text-cyan-400 font-semibold">benefits:</span>
        </h2>
      </div>

      {/* Cards - flex layout */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-stretch px-2 py-6 overflow-x-auto">
        {pricing.map((item, idx) => (
          <PricingCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

// Individual card
function PricingCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;
  const PlusIcon = item.plusicon;

  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-56 p-4 bg-gray-800 text-white rounded-2xl cursor-pointer mx-auto flex-shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* card inner */}
      <div className="relative w-full h-44">
        <div
          className={`absolute inset-0 px-0 py-0 flex flex-col gap-2 transition-transform duration-300 ease-out
            ${
              hovered
                ? "opacity-0 -translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0"
            }
          `}
          aria-hidden={hovered}
        >
          <div className="flex items-start gap-2">
            {Icon && <Icon className="w-6 h-6 text-cyan-400" />}
          </div>

          <h3 className="text-sm font-semibold">{item.heading}</h3>

          <div className="mt-auto flex items-center gap-2">
            {PlusIcon && (
              <div className="w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                <PlusIcon className="w-3 h-3 text-cyan-400" />
              </div>
            )}
          </div>
        </div>

        {/* hover state */}
        <div
          className={`absolute inset-0 px-0 py-0 flex flex-col gap-2 transition-transform duration-300 ease-out
            ${
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }
          `}
          aria-hidden={!hovered}
        >
          <div className="flex-1">
            <h3 className="text-sm font-semibold">{item.afterhover.heading}</h3>
            <p className="text-xs leading-snug mt-2">
              {item.afterhover.description}
            </p>
          </div>
          <div className="mt-auto"></div>
        </div>
      </div>
    </div>
  );
}
