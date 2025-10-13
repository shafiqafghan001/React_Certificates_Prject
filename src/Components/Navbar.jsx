import React, { useState, useEffect } from "react";
import { reacticon2, close, menu } from "../assets/index";
import { navLinks } from "../constants/index";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("stepToCertification");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark mode globally
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`list-none font-normal font-poppins text-[16px] cursor-pointer ${
          active === nav.title ? "text-white" : "text-dimWhite"
        } ${
          index === navLinks.length - 1 ? "mr-0" : isMobile ? "mb-2" : "mr-10"
        }`}
        onClick={() => {
          setActive(nav.title);
          if (isMobile) setToggle(false);
        }}
      >
        <a href={nav.id} className="no-underline text-white">
          {nav.title}
        </a>
      </li>
    ));

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full py-4 px-6 sm:px-16 flex justify-between items-center">
        <img src={reacticon2} alt="Logo" className="w-[124px] h-[32px]" />

        {/* Desktop Menu */}
        <div className="sm:flex hidden flex-1 justify-end items-center gap-6">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {renderNavLinks()}
          </ul>

          {/* Buy Now Button */}
          <button className="bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold">
            Buy Now
          </button>

          {/* Dark/Light Mode Toggle */}
          <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-md">
            <FaMoon
              className={`w-5 h-5 cursor-pointer ${
                darkMode
                  ? "opacity-100 text-yellow-400"
                  : "opacity-50 text-gray-300"
              }`}
              onClick={() => setDarkMode(true)}
            />
            <FaSun
              className={`w-5 h-5 cursor-pointer ${
                !darkMode
                  ? "opacity-100 text-yellow-400"
                  : "opacity-50 text-gray-300"
              }`}
              onClick={() => setDarkMode(false)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative gap-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Sidebar */}
          <div
            className={`${
              toggle ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            } transform origin-top transition-all duration-300 absolute top-16 left-0 w-[200px] p-6 bg-black-gradient rounded-xl shadow-lg`}
          >
            <ul className="flex flex-col justify-start items-start">
              {renderNavLinks(true)}
            </ul>

            <button className="bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold mt-4 w-full">
              Buy Now
            </button>

            <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-md mt-4 justify-center">
              <FaMoon
                className={`w-5 h-5 cursor-pointer ${
                  darkMode
                    ? "opacity-100 text-yellow-400"
                    : "opacity-50 text-gray-300"
                }`}
                onClick={() => setDarkMode(true)}
              />
              <FaSun
                className={`w-5 h-5 cursor-pointer ${
                  !darkMode
                    ? "opacity-100 text-yellow-400"
                    : "opacity-50 text-gray-300"
                }`}
                onClick={() => setDarkMode(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
