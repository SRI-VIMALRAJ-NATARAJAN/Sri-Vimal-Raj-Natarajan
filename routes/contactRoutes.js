const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

// Get all contacts
router.get("/", async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// Create a new contact
router.post("/", async (req, res) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json(contact);
});

module.exports = router;
