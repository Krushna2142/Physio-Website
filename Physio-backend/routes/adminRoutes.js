const express = require("express");
const router = express.Router();
const { getAllMessages, deleteMessage } = require("../controllers/contactController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/messages", verifyToken, getAllMessages);
router.delete("/messages/:id", verifyToken, deleteMessage);

module.exports = router;