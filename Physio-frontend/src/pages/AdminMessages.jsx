import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminMessages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Use a consistent token key
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }

    // Fetch contact messages
    fetch("https://physio-website.onrender.com/api/admin/messages", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Failed to fetch messages.");
        }
        return res.json();
      })
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch messages. You may not be logged in, or your session expired.",err);
        setLoading(false);
      });
  }, [navigate]);

  return (
    <div className="flex flex-col items-center min-h-[70vh] bg-gradient-to-br from-indigo-50 to-purple-50 py-10">
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-4xl px-8 py-10 mt-16">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          Contact Messages
        </h2>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : messages.length === 0 ? (
          <div className="text-center text-gray-500">No messages found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Message</th>
                  <th className="px-4 py-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, idx) => (
                  <tr key={msg._id || idx}>
                    <td className="px-4 py-2 border">{msg.name}</td>
                    <td className="px-4 py-2 border">{msg.email}</td>
                    <td className="px-4 py-2 border">{msg.message}</td>
                    <td className="px-4 py-2 border">
                      {msg.date
                        ? new Date(msg.date).toLocaleString()
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/admin")}
            className="px-6 py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700 transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}