import React, { useState } from "react";
import reactDeveloper from "../constants/index";

export default function DeveloperCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <h1 className="text-center text-white text-6xl font-bold mt-20 mb-10">
        React Certification<span className="text-cyan-400">Levels</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {reactDeveloper.map((card, idx) => {
          const Icon = card.reacticons;
          const TimeIcon = card.timeicon;
          const QIcon = card.qicon;
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderColor: isHovered ? card.color : "transparent",
                boxShadow: isHovered
                  ? `inset 0 0 15px rgba(255,255,255,0.2)`
                  : "none",
              }}
              className="w-80 border-2 rounded-2xl p-6 mt-5 transition-all shadow-sm hover:shadow-lg bg-gray-800 flex flex-col"
            >
              <div className="flex flex-col gap-12">
                <Icon size={60} style={{ color: card.color }} />
                <h1
                  className="font-bold text-3xl"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h1>
              </div>

              <div className="mt-3 text-sm flex flex-wrap items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <TimeIcon />
                  <span>{card.time}</span>
                </div>

                <div className="flex items-center gap-2">
                  <QIcon />
                  <span>{card.questions}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-[16px] text-gray-400">
                {card.description}
              </p>

              <div className="mt-auto pt-4">
                <button
                  style={{ borderColor: card.color }}
                  className="text-center px-4 py-2 rounded border-2 font-medium transition-colors text-white hover:bg-opacity-5"
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
