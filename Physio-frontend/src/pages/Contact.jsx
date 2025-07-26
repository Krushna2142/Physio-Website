import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    try {
      await axios.post("https://physio-website.onrender.com/api/contact", formData);
      setSuccessMessage("✅ Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("❌ Failed to send message. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 md:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-10 text-center pt-10">
        Contact Us
      </h1>

      <div className="flex flex-col items-center gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white p-6 sm:p-8 shadow-md rounded-lg"
        >
          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {successMessage && (
            <div className="mb-4 text-green-600 font-semibold">{successMessage}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Google Map */}
        <div className="w-full max-w-xl h-64 sm:h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.590591965655!2d73.84759511489157!3d18.506679787408144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c069db43f351%3A0xa5a2340b918f2e6a!2sAISSMS%20Polytechnic!5e0!3m2!1sen!2sin!4v1628763361817!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;