const express = require("express");
const Price = require("../models/price.js")
const router = express.Router();

// Get all prices
router.get("/", async (req, res) => {
    const Prices = await Price.find().populate("service_id");
    res.json(Price);
});

// Create a new price
router.post("/", async (req, res) => {
    const { service_id, amount } = req.body;
    const Price = new Price({ service_id, amount });
    await Price.save();
    res.status(201).json(Price);
});

module.exports = router;
