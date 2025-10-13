import React from "react";
import { footer } from "../constants/index";

export default function Footer() {
  const first = footer[0] || {};
  const second = footer[1] || {};
  const third = footer[2] || {};

  const socialLinks = first.link
    ? [
        ["twitter", first.link.twitter],
        ["linkedin", first.link.linkedin],
        ["facebook", first.link.facebook],
        ["youtube", first.link.youtube],
        ["instagram", first.link.instagram],
      ]
    : [];

  return (
    <footer className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {first.img && (
          <div className="mb-8">
            <img
              src={first.img}
              alt={first.title || "logo"}
              className="w-16 h-auto object-contain"
            />
          </div>
        )}

        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:flex-[1.5] flex flex-col">
            {first.title && (
              <h3 className="text-3xl text-cyan-400 font-bold mb-4">
                {first.title}
              </h3>
            )}

            {first.link.heading && (
              <p className="text-sm mb-2">{first.link.heading}</p>
            )}

            <div className="flex gap-3 mt-2">
              {socialLinks.map(([key, IconComponent]) =>
                IconComponent ? (
                  <a
                    key={key}
                    href="#"
                    aria-label={key}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-cyan-400 transition no-underline"
                  >
                    <IconComponent className="w-6 h-6 text-black" />
                  </a>
                ) : null
              )}
            </div>
          </div>

          {/* Column 2  */}
          <div className="flex-1 flex flex-col gap-3 justify-start">
            {second.title1 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {second.title1}
              </a>
            )}
            {second.title2 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {second.title2}
              </a>
            )}
            {second.title3 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {second.title3}
              </a>
            )}
            {second.title4 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {second.title4}
              </a>
            )}
          </div>

          {/* Column 3  */}
          <div className="flex-1 flex flex-col gap-3 justify-start">
            {third.title1 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {third.title1}
              </a>
            )}
            {third.title2 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {third.title2}
              </a>
            )}
            {third.title3 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {third.title3}
              </a>
            )}
            {third.title4 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {third.title4}
              </a>
            )}
            {third.title5 && (
              <a href="#" className="text-white hover:text-white no-underline">
                {third.title5}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
