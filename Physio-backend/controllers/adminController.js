const jwt = require("jsonwebtoken");

const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@physio.com" && password === "admin1234") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
};

module.exports = { loginAdmin };
