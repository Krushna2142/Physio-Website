import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 py-8 md:py-10 px-4 md:px-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900">PhysioCare</h2>
          <p className="mt-2 text-sm">
            Empowering you to live pain-free through personalized care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-base md:text-lg font-semibold text-blue-800 mb-2">Contact Us</h3>
          <p className="text-sm">Email: contact@physiocare.com</p>
          <p className="text-sm">Phone: +91-9876543210</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-blue-800 text-lg md:text-xl">
            <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-600" /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-blue-700" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
