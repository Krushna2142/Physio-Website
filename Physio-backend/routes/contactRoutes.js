const express = require("express");
const router = express.Router();
const {
  submitContact,
  getAllMessages,
  deleteMessage,
} = require("../controllers/contactController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", submitContact);
router.get("/messages", verifyToken, getAllMessages);
router.delete("/messages/:id", verifyToken, deleteMessage);

module.exports = router;
