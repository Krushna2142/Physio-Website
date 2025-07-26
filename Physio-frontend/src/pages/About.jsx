import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen px-4 sm:px-8 md:px-16 pt-28 pb-20 bg-gradient-to-br from-purple-50 to-blue-100 text-gray-800">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">About PhysioCare</h1>

      {/* Introduction */}
      <p className="text-base sm:text-lg mb-10 max-w-4xl">
        PhysioCare is a dedicated physiotherapy clinic committed to helping you
        live a pain-free, active, and fulfilling life. Our expert team uses
        advanced techniques to treat injuries, manage chronic pain, and enhance
        overall physical performance.
      </p>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mb-20">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2">Our Mission</h2>
          <p>
            To provide top-tier physiotherapy care using compassion, evidence-based
            methods, and a personalized approach.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-800 mb-2">Our Vision</h2>
          <p>
            To become the most trusted physiotherapy provider empowering people
            toward lifelong wellness and mobility.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Compassion",
              desc: "We care deeply about each patient’s well-being and recovery journey.",
            },
            {
              title: "Excellence",
              desc: "We use evidence-based techniques and deliver the highest standards of care.",
            },
            {
              title: "Integrity",
              desc: "We are honest, transparent, and committed to ethical practice.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-4">
          Ready to start your healing journey?
        </h3>
        <button
          onClick={() => navigate("/contact")}
          className="bg-black text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition border-2 border-white"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
}