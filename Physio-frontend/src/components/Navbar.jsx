import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide">
          Physio<span className="text-purple-500">Care</span>
        </h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-lg font-medium">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-3 lg:px-4 py-2 rounded-md text-gray-700 hover:bg-blue-300 hover:text-blue-800 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 bg-blue-50/95 backdrop-blur-md border-t border-blue-200">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={closeMenu}
              className="block px-4 py-3 rounded-md text-gray-700 hover:bg-blue-300 hover:text-blue-800 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
