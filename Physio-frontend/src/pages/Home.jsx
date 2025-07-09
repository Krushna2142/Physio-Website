import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-12">
      <div className="flex items-center justify-between w-full">
        {/* Left Side */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Revive. Restore. Rejuvenate.
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Personalized physiotherapy solutions for a pain-free and active life.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Book an Appointment
          </button>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1588776814546-6c6ad5401785?auto=format&fit=crop&w=800&q=80"
            alt="Physiotherapy"
            className="rounded-2xl shadow-lg w-[90%] max-h-[450px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
