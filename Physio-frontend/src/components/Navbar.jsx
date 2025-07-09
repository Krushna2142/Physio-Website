import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full px-16 py-6 bg-white shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">PhysioCare</h1>
      <div className="space-x-8 text-lg">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}
