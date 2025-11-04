// FAQAccordion.jsx
import React, { useState } from "react";
import { faqs } from "../constants/index";

export default function FAQs() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState({});

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const toggleQuestion = (sectionIndex, questionIndex) => {
    setActiveQuestion((prev) => ({
      ...prev,
      [sectionIndex]:
        prev[sectionIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <div className="py-6 px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl text-cyan-400 font-bold mt-4 mb-6 sm:mb-8">
          FAQs
        </h1>

        <div className="w-full text-white p-1 sm:p-4 flex flex-col gap-4">
          {faqs.map((section, sectionIndex) => {
            const SectionIcon = section.icon;
            const DownIcon = section.downarrow;
            const isOpen = activeSection === sectionIndex;

            return (
              <div
                key={sectionIndex}
                className="w-full p-4 sm:p-6 rounded-lg shadow-md bg-gray-900 flex flex-col gap-3"
              >
                {/* Header */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleSection(sectionIndex)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      toggleSection(sectionIndex);
                  }}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer gap-3"
                >
                  <div className="flex items-start sm:items-center gap-3 w-full">
                    {SectionIcon && (
                      <SectionIcon className="text-cyan-400 text-2xl sm:text-3xl md:text-4xl flex-shrink-0" />
                    )}

                    <h2 className="text-white font-bold text-base sm:text-xl md:text-2xl leading-tight break-words">
                      {section.title}
                    </h2>
                  </div>

                  <div
                    className={`text-cyan-400 text-lg sm:text-xl transition-transform duration-200 self-end sm:self-auto ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {DownIcon && <DownIcon />}
                  </div>
                </div>

                {/* Section Questions */}
                {isOpen && (
                  <div className="flex flex-col gap-3 mt-1">
                    {section.questions.map((q, questionIndex) => {
                      const PlusIcon = q.plusicon;
                      const isActive =
                        activeQuestion[sectionIndex] === questionIndex;

                      return (
                        <div
                          key={questionIndex}
                          className="flex flex-col gap-1"
                        >
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              toggleQuestion(sectionIndex, questionIndex)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ")
                                toggleQuestion(sectionIndex, questionIndex);
                            }}
                            className="flex items-start sm:items-center gap-3 cursor-pointer w-full"
                          >
                            <div className="p-2 sm:p-3 rounded-full bg-cyan-400 text-white flex items-center justify-center flex-shrink-0 min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px]">
                              {PlusIcon && (
                                <PlusIcon className="text-sm sm:text-base" />
                              )}
                            </div>

                            <span className="text-white font-medium text-sm sm:text-base break-words w-full sm:flex-1">
                              {q.ques}
                            </span>
                          </div>

                          {isActive && (
                            <div className="pl-12 pt-2 text-white text-sm sm:text-base break-words max-w-full">
                              {q.quesdetail}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
