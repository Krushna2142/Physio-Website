const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../controllers/adminController");

// Admin login only
router.post("/login", loginAdmin);

module.exports = router;