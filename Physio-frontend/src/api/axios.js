// src/api/axios.js or src/api/contactApi.js
const BASE_URL = import.meta.env.VITE_API_URL || "https://physio-website.onrender.com/api";
export const sendContactForm = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Error sending message:", err);
    throw err;
  }
};