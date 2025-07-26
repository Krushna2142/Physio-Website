import { useEffect, useState } from "react";
import React from "react";
export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      window.location.href = "/admin-login";
      return;
    }
    fetch("https://physio-website.onrender.com/api/contact/messages", {
      headers: { "Authorization": "Bearer " + token }
    })
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => setError("Failed to load messages",err));
  }, []);
  return (
    <div>
      <h2>Contact Messages</h2>
      {error && <div>{error}</div>}
      <ul>
        {messages.map(msg => (
          <li key={msg._id}>{msg.name}: {msg.message}</li>
        ))}
      </ul>
    </div>
  );
}