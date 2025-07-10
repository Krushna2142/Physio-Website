const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactController");
const Contact = require("../models/Contact");

// POST route to save contact message
router.post("/", submitContact);

// GET route to fetch all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// ✅ DELETE route to remove message by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully", deleted });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
});

module.exports = router;
