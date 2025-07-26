import React from "react";
import servicesData from "../data/servicesData.json";
import {
  FaBone,
  FaBrain,
  FaChild,
  FaHeartbeat,
  FaHandsHelping
} from "react-icons/fa";

// Map icon names from JSON to actual components
const iconMap = {
  FaBone: <FaBone />,
  FaBrain: <FaBrain />,
  FaChild: <FaChild />,
  FaHeartbeat: <FaHeartbeat />,
  FaHandsHelping: <FaHandsHelping />
};

export default function Services() {
  return (
    <div className="w-screen min-h-screen px-4 md:px-16 py-20 bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 ">
      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12 text-center mt-12">
        Our Services
      </h1>

      {/* Service Categories from JSON */}
      {servicesData.map((group, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6 border-l-4 border-blue-600 pl-4">
            {group.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {group.items.map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className={`mr-4 text-4xl ${service.color}`}>
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Why Choose Us */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 mt-20 mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Why Choose PhysioCare?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "Expert Therapists",
              desc: "All our staff are certified and highly experienced."
            },
            {
              title: "Advanced Techniques",
              desc: "We use modern techniques and equipment for faster recovery."
            },
            {
              title: "Patient-Centered",
              desc: "Each patient receives a custom recovery plan tailored to their goals."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Ready to Begin Your Healing Journey?
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Book your appointment with our experienced physiotherapists today!
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-gray-800 transition"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
}
