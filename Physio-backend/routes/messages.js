const express = require("express");
const router = express.Router();
const { submitContact, getAllMessages, deleteMessage } = require("../controllers/contactController");
const verifyToken = require("../middleware/authMiddleware");

// Public route for contact form submissions
router.post("/api/contact", submitContact);

// Admin route to fetch all contact messages
router.get("/api/admin/messages", verifyToken, getAllMessages);

// Admin route to delete a contact message (optional)
router.delete("/api/admin/messages/:id", verifyToken, deleteMessage);

module.exports = router;