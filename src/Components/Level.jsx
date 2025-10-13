import React, { useState } from "react";
import { leveldata } from "../constants/index";
import {
  FaBook,
  FaCircle,
  FaArrowRight,
  FaCheck,
  FaExclamation,
  FaPlus,
  FaCaretUp,
} from "react-icons/fa";

export default function Level() {
  const [selected, setSelected] = useState("mid");

  const colors = {
    junior: "#58CDC4",
    mid: "#2DC790",
    senior: "#FF765D",
  };

  const getCards = () => {
    if (selected === "junior") {
      const data = leveldata[0];
      return [data.first, data.second].filter(Boolean);
    }
    if (selected === "mid") {
      const data = leveldata[1];
      return [
        data.first2 || data.first,
        data.second2 || data.second,
        data.third3 || data.third,
      ].filter(Boolean);
    }
    if (selected === "senior") {
      const data = leveldata[2];
      return [
        data.first3 || data.first,
        data.second3 || data.second,
        data.third3 || data.third,
      ].filter(Boolean);
    }
    return [];
  };

  const cards = getCards();
  const accent =
    selected === "junior"
      ? colors.junior
      : selected === "mid"
      ? colors.mid
      : colors.senior;

  const renderType = (type) => {
    if (!type) return null;
    const CircleIcon = type.icon;
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm mb-2 text-white/90">
        <span>{type.individual}</span>
        <div className="flex gap-1 items-center">
          {CircleIcon && (
            <CircleIcon
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.6)" }}
            />
          )}
          <div className="w-3" />
        </div>
        <span>{type.team}</span>
      </div>
    );
  };

  const renderInfoRow = (info) => {
    if (!info) return null;
    const Tick = info.tickicon;
    const Ex = info.exicon;
    return (
      <div
        className="flex justify-between items-center w-full mt-2"
        key={info.title}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center p-1"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {Tick && (
              <Tick className="text-lg font-bold" style={{ color: accent }} />
            )}
          </div>
          <span className="text-white text-sm">{info.title}</span>
        </div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          {Ex && <Ex className="text-sm" style={{ color: accent }} />}
        </div>
      </div>
    );
  };

  const renderCard = (cardData, idx) => {
    if (!cardData) return null;

    const CardIcon = cardData.icon || null;
    const BtnIcon = cardData.btn?.btnicon || null;
    const LearnMoreIcon = cardData.learnmorebtn?.plusicon || null;

    const isTopBorder = !!cardData?.cardtitle;
    const topBorderStyle = isTopBorder
      ? {
          borderTop: `30px solid ${accent}`,
          borderLeft: `2px solid ${accent}`,
          borderRight: `2px solid ${accent}`,
          borderBottom: `2px solid ${accent}`,
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        }
      : {};

    const isSecondCard = idx === 1;

    return (
      <div
        className={`flex flex-col items-start w-full sm:w-[300px] md:w-[330px] relative ${
          !isTopBorder ? "mt-6 sm:mt-8" : ""
        }`}
        key={idx}
      >
        <div
          className={`flex flex-col items-center p-4 sm:p-6 bg-gray-800 relative w-full ${
            !isTopBorder ? "rounded-lg" : ""
          }`}
          style={topBorderStyle}
        >
          {cardData.cardtitle && (
            <div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-black font-bold text-center text-lg"
              style={{
                lineHeight: 1,
                background: accent,
                padding: "4px 10px",
                borderRadius: 6,
              }}
            >
              {cardData.cardtitle}
            </div>
          )}

          <div className="w-full flex items-center justify-between mb-4 relative">
            <span className="font-bold text-lg" style={{ color: accent }}>
              {cardData.title}
            </span>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              {CardIcon && (
                <CardIcon className="text-3xl" style={{ color: accent }} />
              )}
            </div>
          </div>

          {cardData.subtitle && (
            <div
              className="text-sm mb-2"
              style={{ color: idx === 2 ? accent : "rgba(255,255,255,0.7)" }}
            >
              {cardData.subtitle}
            </div>
          )}

          {cardData.heading && (
            <h3 className="text-center font-semibold mb-2 text-white">
              {cardData.heading}
            </h3>
          )}

          {renderType(cardData.type)}

          {cardData.price && (
            <p className="font-bold text-2xl sm:text-3xl mb-4 text-center text-white">
              {cardData.price}
            </p>
          )}

          {cardData.btn && (
            <button
              className={`w-full px-4 sm:px-6 py-2 sm:py-3 mb-4 text-lg flex items-center justify-center gap-2 transition-colors duration-300 ${
                isSecondCard
                  ? "bg-cyan-500 hover:bg-cyan-600 text-black"
                  : "bg-transparent hover:bg-cyan-400 text-cyan-400 hover:text-black border border-cyan-400"
              }`}
              style={{
                backgroundColor: isSecondCard ? accent : "transparent",
                color: isSecondCard ? "#000" : accent,
                border: `1px solid ${accent}`,
              }}
            >
              <span>{cardData.btn.btntext}</span>
              {BtnIcon && (
                <BtnIcon
                  className="inline-block"
                  style={{ color: isSecondCard ? "rgba(0,0,0,0.45)" : accent }}
                />
              )}
            </button>
          )}

          <div className="w-full flex flex-col gap-2 sm:gap-3 mb-3">
            {[
              cardData?.info,
              cardData?.info2,
              cardData?.info3,
              cardData?.info4,
              cardData?.info5,
              cardData?.info6,
              cardData?.info7,
              cardData?.info8,
            ]
              .filter(Boolean)
              .map((info) => renderInfoRow(info))}
          </div>

          {cardData.learnmorebtn && (
            <button className="px-3 sm:px-4 py-2 flex items-center gap-2 text-white text-sm sm:text-base">
              <span>{cardData.learnmorebtn.btntext}</span>
              {LearnMoreIcon && (
                <LearnMoreIcon
                  className="inline-block"
                  style={{ color: "#fff" }}
                />
              )}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-5 flex flex-col items-center text-center space-y-6 w-full">
      <h1 className="text-white text-4xl sm:text-5xl md:text-5xl font-bold">
        Choose Your <span className="text-cyan-400">Level</span>
      </h1>

      <div className="flex flex-col sm:flex-row w-full sm:w-[80%] bg-gray-700 rounded-full text-2xl sm:text-3xl font-bold overflow-hidden mb-5 h-14 sm:h-16">
        {["junior", "mid", "senior"].map((lvl) => (
          <button
            key={lvl}
            className={`flex-1 font-semibold transition-colors h-full ${
              selected === lvl ? "rounded-full" : ""
            }`}
            style={{
              backgroundColor: selected === lvl ? colors[lvl] : "transparent",
            }}
            onClick={() => setSelected(lvl)}
          >
            {lvl === "mid"
              ? "Mid-Level"
              : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
          </button>
        ))}
      </div>

      <p className="text-gray-400 px-2 sm:px-4 w-full sm:w-[65%] text-sm sm:text-base">
        The Senior React Developer certification package includes both Mid-level
        and Senior certifications. This comprehensive offering provides a clear
        path from Mid-level to Senior expertise. While you can upgrade from
        Mid-level to Senior later, investing in the Senior package from the
        start offers the most streamlined and cost-effective learning journey.
      </p>

      <div className="flex flex-col md:flex-row flex-wrap justify-center w-full p-4 sm:p-6 items-start gap-4">
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    </div>
  );
}
