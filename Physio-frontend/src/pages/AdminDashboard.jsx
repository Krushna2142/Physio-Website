import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin-login");
    }
    setAdminEmail("admin@physiocare.com");
  }, [navigate]);

  return (
    <div className="flex flex-col items-center min-h-[70vh] bg-gradient-to-br from-indigo-50 to-purple-50 py-10">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-3xl px-8 mt-10 py-10">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-3 text-center">
          Welcome, Admin!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Email: <span className="font-semibold text-indigo-600">{adminEmail}</span>
        </p>

        {/* Dashboard Summary Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-100 p-6 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-indigo-700 mb-2">54</div>
            <div className="text-gray-600">Patients</div>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-purple-700 mb-2">12</div>
            <div className="text-gray-600">Appointments Today</div>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-indigo-700 mb-2">3</div>
            <div className="text-gray-600">Pending Requests</div>
          </div>
        </div>

        {/* Management Sections with Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">Manage Patients</h3>
            <p className="text-gray-500 mb-3">View, edit, or add patient records.</p>
            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm"
              onClick={() => navigate("/admin/patients")}
            >
              Go to Patients
            </button>
          </div>
          <div className="bg-white border rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold text-purple-600 mb-2">Manage Appointments</h3>
            <p className="text-gray-500 mb-3">Review and schedule appointments.</p>
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm"
              onClick={() => navigate("/admin/appointments")}
            >
              Go to Appointments
            </button>
          </div>
        </div>

        {/* Site Settings */}
        <div className="bg-white border rounded-lg p-6 shadow mb-8">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Site Settings</h3>
          <p className="text-gray-500 mb-3">Update clinic info, admin settings, etc.</p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
            onClick={() => navigate("/admin/settings")}
          >
            Go to Settings
          </button>
        </div>

        {/* Logout */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              localStorage.removeItem("admin_token");
              navigate("/admin-login");
            }}
            className="px-6 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}