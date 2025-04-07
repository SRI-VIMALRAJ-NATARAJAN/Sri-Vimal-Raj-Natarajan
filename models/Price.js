const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    amount: { type: Number, required: true }
});

module.exports = mongoose.model("Price", PriceSchema);
