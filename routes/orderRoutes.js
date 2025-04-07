const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
    const orders = await Order.find().populate("user_id service_id");
    res.json(orders);
});

// Create a new order
router.post("/", async (req, res) => {
    const { user_id, service_id } = req.body;
    const order = new Order({ user_id, service_id });
    await order.save();
    res.status(201).json(order);
});

module.exports = router;
