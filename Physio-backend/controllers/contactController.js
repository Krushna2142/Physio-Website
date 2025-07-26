const ContactMessage = require("../models/contactModel");

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Error in submitContact:", error, req.body);
    res.status(500).json({ error: "Failed to send message" });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Error fetching messages" });
  }
};

const deleteMessage = async (req, res) => {
  try {
    await ContactMessage.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Message deleted" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Error deleting message" });
  }
};

module.exports = { submitContact, getAllMessages, deleteMessage };