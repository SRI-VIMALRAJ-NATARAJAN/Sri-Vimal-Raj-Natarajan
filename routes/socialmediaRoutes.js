const express = require("express");
const SocialMedia = require("../models/SocialMedia");
const router = express.Router();

// Get all social media links
router.get("/", async (req, res) => {
    const socialMedia = await SocialMedia.find();
    res.json(socialMedia);
});

module.exports = router;
