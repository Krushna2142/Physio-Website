import React from "react";

export default function Contact() {
  return (
    <div className="w-screen min-h-screen pt-28 pb-20 px-10 bg-gradient-to-br from-purple-100 to-blue-100 text-gray-800 overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">
          Contact Us
        </h2>

        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-12">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                placeholder="What's the purpose of your message?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-800 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-900 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
