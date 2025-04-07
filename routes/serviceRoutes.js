const express = require("express");
const Service = require("../models/Service");
const router = express.Router();

// Get all services
router.get("/", async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

// Create a new service
router.post("/", async (req, res) => {
    const { name, description, price } = req.body;
    const service = new Service({ name, description, price });
    await service.save();
    res.status(201).json(service);
});

module.exports = router;
