import React from "react";

export default function AdminSettings() {
  return (
    <div className="flex flex-col items-center min-h-[70vh]  bg-gradient-to-br from-indigo-50 to-purple-50 py-10">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-2xl px-8 py-10 mt-16">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Site Settings
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Update clinic info, admin settings, and more.
        </p>
        {/* Replace below with your actual settings form */}
        <div className="text-center text-gray-500">Settings management coming soon...</div>
      </div>
    </div>
  );
}