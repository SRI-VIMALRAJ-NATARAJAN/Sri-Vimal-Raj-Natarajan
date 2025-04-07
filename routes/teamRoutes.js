const express = require("express");
const Team = require("../models/Team");
const router = express.Router();

// Get all team members
router.get("/", async (req, res) => {
    const team = await Team.find();
    res.json(team);
});

module.exports = router;
