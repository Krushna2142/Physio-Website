const express = require("express");
const router = express.Router();
const { getAllMessages, deleteMessage } = require("../controllers/contactController");
const { loginAdmin } = require("../controllers/adminController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/login", loginAdmin); // /api/admin/login
router.get("/messages", verifyToken, getAllMessages); // /api/admin/messages
router.delete("/messages/:id", verifyToken, deleteMessage); // /api/admin/messages/:id

module.exports = router;