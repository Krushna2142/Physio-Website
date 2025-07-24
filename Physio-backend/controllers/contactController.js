const ContactMessage = require("../models/contactModel");

const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
};

const deleteMessage = async (req, res) => {
  try {
    await ContactMessage.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting message" });
  }
};

module.exports = { submitContact, getAllMessages, deleteMessage };
