import React from "react";

export default function Contact() {
  return (
    <div className="w-screen h-screen px-16 py-20 bg-white flex items-center justify-center">
      <div className="w-full max-w-xl bg-blue-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <input className="w-full p-3 rounded border focus:outline-none text-blue-600  hover:bg-blue-300" placeholder="Your Name" />
          <input className="w-full p-3 rounded border focus:outline-none text-blue-600  hover:bg-blue-300" type="email" placeholder="Email" />
          <textarea className="w-full p-3 rounded border focus:outline-none text-blue-600  hover:bg-blue-300" rows="4" placeholder="Message" />
          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Send</button>
        </form>
      </div>
    </div>
  );
}
