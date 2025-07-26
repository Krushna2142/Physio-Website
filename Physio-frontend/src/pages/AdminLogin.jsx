import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://physio-website.onrender.com/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("admin_token", data.token);
        navigate("/admin");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Network error",err);
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", background: "#fff", padding: 32, borderRadius: 8, boxShadow: "0 2px 12px #0002" }}>
      <h2 style={{ textAlign: "center" }}>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 16 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 10, borderRadius: 4, background: "#7c3aed", color: "#fff", border: "none", fontWeight: "bold" }}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div style={{ color: "red", marginTop: 12, textAlign: "center" }}>{error}</div>}
      </form>
    </div>
  );
}