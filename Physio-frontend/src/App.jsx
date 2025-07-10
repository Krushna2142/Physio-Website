import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AllMessages from "./pages/AllMessages";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <ScrollToTop/>
        <Routes>
           
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/messages" element={<AllMessages />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
