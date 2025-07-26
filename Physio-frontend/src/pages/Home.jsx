import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const images = [
    "./images/physio1.jpg",
    "./images/physio2.jpg",
    "./images/physio3.jpg",
    "./images/physio4.jpg",
    "./images/pexels1.jpg",
    "./images/pexels2.jpg",
    "./images/pexels3.jpg",
    "./images/pexels4.jpg",
    "./images/pexels5.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-screen min-h-screen px-4 sm:px-8 md:px-16 pt-28 pb-20 bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-20 gap-6">
        <div className="w-full md:w-1/2 md:pr-10 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
            Revive. Restore. Rejuvenate.
          </h1>
          <p className="text-base md:text-xl mb-8">
            Personalized physiotherapy solutions for a pain-free and active life.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            Book an Appointment
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={images[currentIndex]}
            alt="Clinic"
            className="w-full max-w-xs sm:max-w-sm md:max-w-full mx-auto h-56 sm:h-80 rounded-2xl object-cover shadow-xl transition-all duration-500"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="my-20 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: "Amit Sharma",
              review:
                "PhysioCare helped me recover from a serious knee injury. Their care and support were excellent!",
            },
            {
              name: "Riya Kulkarni",
              review:
                "The therapists are professional, friendly, and very knowledgeable. Highly recommended!",
            },
            {
              name: "Sameer Patil",
              review:
                "Modern equipment and a personalized treatment plan made my recovery fast and easy.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic mb-4">"{item.review}"</p>
              <h3 className="text-blue-800 font-semibold">– {item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Why Choose PhysioCare?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              title: "Experienced Staff",
              desc: "Licensed physiotherapists with years of hands-on experience.",
            },
            {
              title: "Personalized Care",
              desc: "Tailored treatment plans designed for your specific needs.",
            },
            {
              title: "Modern Facilities",
              desc: "Clean, well-equipped clinic with the latest therapy tools.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <img
                src={`https://randomuser.me/api/portraits/women/${id + 30}.jpg`}
                alt="Expert"
                className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
              />
              <h3 className="text-lg font-bold text-blue-800">
                Dr. Smitha Patel
              </h3>
              <p className="text-gray-600 text-sm">Senior Physiotherapist</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📊 Counters Section */}
      <section className="mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-center">
        {[
          { label: "Happy Patients", value: "1200+" },
          { label: "Years of Experience", value: "10+" },
          { label: "Therapists", value: "15+" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-8 sm:p-10 rounded-xl shadow">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700">{stat.value}</p>
            <p className="mt-2 text-gray-600 text-base sm:text-lg">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* 🖼️ Gallery Preview */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.slice(0, 4).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Preview ${idx}`}
              className="h-32 sm:h-40 w-full object-cover rounded-xl shadow hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* 📣 Final Call to Action */}
      <section className="text-center mt-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-4">
          Begin your recovery journey today!
        </h2>
        <button
          onClick={() => navigate("/contact")}
          className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full shadow-lg transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}