const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/services", require("./routes/serviceRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/team", require("./routes/teamRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/socialmedia", require("./routes/socialmediaRoutes"));
app.use("/api/prices", require("./routes/priceRoutes"));

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
