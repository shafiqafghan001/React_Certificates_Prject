import React from "react";
import { company } from "../constants";

export default function Companies() {
  return (
    <div className="text-center text-white py-10">
      <h1 className="font-bold text-4xl mb-8">
        Companies that use <span className="text-cyan-600">React</span>
      </h1>

      <div className="flex justify-center items-center gap-12 flex-wrap">
        {company.map((com) => {
          const Icon = com.icon;
          return (
            <div
              key={com.id}
              className="flex items-center gap-3 text-lg font-medium text-gray-400 px-4 py-2 rounded-lg transition"
            >
              <Icon className="text-3xl" />
              <span>{com.title}</span>
            </div>
          );
        })}
      </div>
      <h4 className="mt-4 text-gray-400">+4,000,000 websites</h4>
    </div>
  );
}
