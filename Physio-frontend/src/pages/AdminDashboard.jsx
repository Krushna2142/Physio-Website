import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      navigate("/admin-login");
      return;
    }
    // Optionally, fetch user data
    setAdmin({ email: "admin@example.com" }); // Replace with real data if needed
  }, [navigate]);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", background: "#fff", padding: 32, borderRadius: 8, boxShadow: "0 2px 12px #0002" }}>
      <h2>Welcome to Admin Dashboard</h2>
      <p>Hello, {admin?.email || "Admin"}!</p>
      {/* Add dashboard features here */}
      <button
        onClick={() => {
          localStorage.removeItem("admin_token");
          navigate("/admin-login");
        }}
        style={{ padding: 8, borderRadius: 4, background: "#ef4444", color: "#fff", border: "none" }}
      >
        Logout
      </button>
    </div>
  );
}