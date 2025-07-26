import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-4 md:px-16 py-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide">
          Physio<span className="text-purple-500">Care</span>
        </h1>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-300 hover:text-blue-800 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 hover:text-blue-800 transition duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-50/95 backdrop-blur-md border-t border-blue-200">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-md text-gray-700 hover:bg-blue-300 hover:text-blue-800 transition duration-300 text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
