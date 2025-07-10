import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-16 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-700 tracking-wide">
          Physio<span className="text-purple-500">Care</span>
        </h1>

        {/* Nav Links */}
        <div className="flex gap-6 text-lg font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-blue-300 hover:text-blue-800 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
