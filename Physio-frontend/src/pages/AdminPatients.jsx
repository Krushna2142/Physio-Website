import React from "react";

export default function AdminPatients() {
  return (
    <div className="flex flex-col items-center min-h-[70vh] bg-gradient-to-br from-indigo-50 to-purple-50 py-10">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-2xl px-8 py-10">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          Manage Patients
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Here you can view, edit, or add patient records.
        </p>
        {/* Replace below with your actual patients table/list */}
        <div className="text-center text-gray-500">Patient management coming soon...</div>
      </div>
    </div>
  );
}