import React from "react";
// import AdminDashboard from "./AdminDashboard"; // ✅ import AllMessages component
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ must import this
import App from "./App";
import "./index.css"; // ✅ tailwind styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
      
  </BrowserRouter>
);
