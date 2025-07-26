import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-700 tracking-wide">
          Physio<span className="text-purple-500">Care</span>
        </h1>

        {/* Hamburger for mobile */}
        <button
  className="md:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-300"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle navigation"
>
  {/* Hamburger icon */}
  <svg className="h-6 w-6" viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

        {/* Nav Links */}
        <div className={`flex-col md:flex-row gap-2 md:gap-6 text-base md:text-lg font-medium absolute md:static top-full left-0 w-full md:w-auto bg-blue-50/90 md:bg-transparent shadow-md md:shadow-none md:flex ${isOpen ? "flex" : "hidden"} md:items-center transition-all duration-300`}>
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-300 hover:text-blue-800 transition duration-300 block md:inline-block"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}