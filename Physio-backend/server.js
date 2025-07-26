const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Request Logging Middleware (for debugging) ---
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// --- CORS ---
app.use(cors({
  origin: [
    'https://physio-website-estng9idk-krushna2142s-projects.vercel.app',
    // Add other domains as needed
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
}));

app.use(express.json());

// --- Helmet with CSP rules ---
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", "data:", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        connectSrc: [
          "'self'",
          "https://physio-website-estng9idk-krushna2142s-projects.vercel.app",
          "https://physio-website.onrender.com"
        ],
        imgSrc: ["'self'", "data:", "blob:"],
      },
    },
  })
);

// --- API Routes ---
app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin/login", adminRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

// --- Catch 404 for unknown API routes ---
app.use("/api", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

// --- Error-Handler Middleware ---
app.use((err, req, res, next) => {
  console.error("Error middleware:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// --- MongoDB connection ---
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "physioWebsite",
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));