const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const ORDERS_FILE = path.join(__dirname, "../data/orders.json");

//  load orders dari file
function loadOrders() {
  try {
    if (fs.existsSync(ORDERS_FILE)) {
      const data = fs.readFileSync(ORDERS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Failed to read orders file", err);
  }
  return [];
}

// save orders ke file
function saveOrders(orders) {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (err) {
    console.error("Failed to write orders file", err);
  }
}

let orders = loadOrders();

// POST order baru
router.post("/", (req, res) => {
  const { name, email, phone, product, quantity } = req.body;
  if (!name || !email || !phone || !product || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newOrder = {
    id: Date.now(),
    name,
    email,
    phone,
    product,
    quantity,
    createdAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  saveOrders(orders);
  res.status(201).json({ message: "Order received", order: newOrder });
});

// GET semua order (untuk admin/testing)
router.get("/", (req, res) => {
  res.json(orders);
});

module.exports = router;
