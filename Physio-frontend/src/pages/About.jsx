import React from "react";

export default function About() {
  return (
    <div className="w-screen h-screen px-16 py-20 bg-white text-gray-800">
      <div className="w-full h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">About PhysioCare</h1>
        <p className="text-xl mb-4 max-w-4xl">
          At PhysioCare, we’re committed to helping you recover faster and live better. Our team of expert physiotherapists uses modern techniques tailored to your unique needs.
        </p>
        <p className="text-xl max-w-4xl">
          We specialize in orthopedic, neurological, and sports-related therapy with a compassionate approach.
        </p>
      </div>
    </div>
  );
}
