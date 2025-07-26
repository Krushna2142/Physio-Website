import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin-login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome, Admin!</h2>
        <p className="text-lg text-center mb-8">This is your dashboard. You can add dashboard features here.</p>
        <button
          onClick={() => {
            localStorage.removeItem("admin_token");
            navigate("/admin-login");
          }}
          className="block mx-auto px-6 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}