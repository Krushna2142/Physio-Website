import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 py-10 px-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900">PhysioCare</h2>
          <p className="mt-2 text-sm">
            Empowering you to live pain-free through personalized care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Contact Us</h3>
          <p className="text-sm">Email: contact@physiocare.com</p>
          <p className="text-sm">Phone: +91-9876543210</p>
          <div className="flex gap-4 mt-4 text-blue-800 text-xl">
            <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-600" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-700" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
