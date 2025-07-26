import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", formData);
      localStorage.setItem("token", response.data.token);
      navigate("/admin/messages");
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center px-4 md:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md md:max-w-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-700 pt-2 md:pt-5">Admin Login</h2>

        {error && <p className="text-red-600 text-center mb-4 text-sm md:text-base">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm md:text-base">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="text-blue-800 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-800 text-sm md:text-base"
              placeholder="Enter admin email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium text-sm md:text-base">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="text-blue-800 font-bold w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-800 text-sm md:text-base"
              placeholder="Enter password"
            />
            <label className="text-xs md:text-sm text-gray-600 mt-2 inline-flex items-center gap-2 hover:text-blue-600 cursor-pointer">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              Show Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition text-sm md:text-base font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
