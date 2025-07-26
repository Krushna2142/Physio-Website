const express = require("express");
const router = express.Router();
const { submitContact, getAllMessages, deleteMessage } = require("../controllers/contactController");
const verifyToken = require("../middleware/authMiddleware");

// Public contact form submission
router.post("/", submitContact);

// Admin: Get all messages (protected)
router.get("/messages", verifyToken, getAllMessages);
router.delete("/messages/:id", verifyToken, deleteMessage);

module.exports = router;