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
    <div className="text-center p-5">
      <h1 className="text-6xl text-cyan-400 font-bold mt-8 mb-8">FAQs</h1>
      <div className="w-full text-white    p-6 flex flex-col gap-6">
        {faqs.map((section, sectionIndex) => {
          const SectionIcon = section.icon;
          const DownIcon = section.downarrow;

          return (
            <div
              key={sectionIndex}
              className="w-full p-8 rounded-lg shadow-md bg-gray-900 flex flex-col gap-4"
            >
              {/*  Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(sectionIndex)}
              >
                <div className="flex items-center gap-3">
                  <SectionIcon className="text-cyan-400 text-4xl" />
                  <h2 className="text-white font-bold text-3xl">
                    {section.title}
                  </h2>
                </div>
                <DownIcon className="text-cyan-400 text-xl" />
              </div>

              {/* Section Questions */}
              {activeSection === sectionIndex && (
                <div className="flex flex-col gap-4 mt-2">
                  {section.questions.map((q, questionIndex) => {
                    const PlusIcon = q.plusicon;
                    const isActive =
                      activeQuestion[sectionIndex] === questionIndex;

                    return (
                      <div key={questionIndex} className="flex flex-col gap-1">
                        <div
                          className="flex items-center gap-3 cursor-pointer"
                          onClick={() =>
                            toggleQuestion(sectionIndex, questionIndex)
                          }
                        >
                          <div className="p-2 rounded-full bg-cyan-400 text-white flex items-center justify-center">
                            <PlusIcon />
                          </div>
                          <span className="text-white font-medium">
                            {q.ques}
                          </span>
                        </div>
                        {isActive && (
                          <div className="pl-12 pt-2 text-white">
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
  );
}
