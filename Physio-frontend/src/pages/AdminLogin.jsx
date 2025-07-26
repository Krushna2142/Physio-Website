import { useState } from "react";
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const res = await fetch("https://physio-website.onrender.com/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("admin_token", data.token);
      window.location.href = "/admin"; // Redirect to admin page
    } else {
      setError(data.error || "Login failed");
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
      <button type="submit">Login</button>
      {error && <div style={{color:"red"}}>{error}</div>}
    </form>
  );
}