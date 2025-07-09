import React from "react";

export default function Services() {
  const services = [
    { title: "Orthopedic Rehab", icon: "🦴", desc: "Bone and joint recovery" },
    { title: "Sports Therapy", icon: "🏃‍♂️", desc: "Injury prevention & recovery" },
    { title: "Pain Management", icon: "💆‍♀️", desc: "Chronic pain relief" },
    { title: "Home Visits", icon: "🏠", desc: "Physio at your doorstep" },
  ];

  return (
    <div className="w-screen h-screen px-16 py-20 bg-blue-50">
      <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Services</h2>
      <div className="grid grid-cols-4 gap-10">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
