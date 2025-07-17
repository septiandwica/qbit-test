const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

const testimonialsRoute = require("./routes/testimonials");
app.use("/api/testimonials", testimonialsRoute);

const ordersRoute = require("./routes/orders");
app.use("/api/orders", ordersRoute);

app.get("/", (req, res) => {
  res.send("Buevn Bakehouse API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
