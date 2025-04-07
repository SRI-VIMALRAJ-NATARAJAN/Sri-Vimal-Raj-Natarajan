const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    order_status: { type: String, default: "Pending" },
    order_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
