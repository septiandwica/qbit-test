const express = require("express");
const router = express.Router();
const donuts = require("../data/donuts");

let donutList = [...donuts];

// GET all products
router.get("/", (req, res) => {
  res.json(donutList);
});

// GET single product by id
router.get("/:id", (req, res) => {
  const donut = donutList.find((d) => d.id === parseInt(req.params.id));
  if (!donut) return res.status(404).json({ message: "Product not found" });
  res.json(donut);
});

// POST create new product
router.post("/", (req, res) => {
  const { name, description, price, image, popular } = req.body;
  if (!name || !description || !price || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newDonut = {
    id: donutList.length ? donutList[donutList.length - 1].id + 1 : 1,
    name,
    description,
    price,
    image,
    popular: !!popular,
  };
  donutList.push(newDonut);
  res.status(201).json(newDonut);
});

// PUT update product by id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const idx = donutList.findIndex((d) => d.id === id);
  if (idx === -1) return res.status(404).json({ message: "Product not found" });
  const { name, description, price, image, popular } = req.body;
  donutList[idx] = {
    ...donutList[idx],
    name: name ?? donutList[idx].name,
    description: description ?? donutList[idx].description,
    price: price ?? donutList[idx].price,
    image: image ?? donutList[idx].image,
    popular: typeof popular === "boolean" ? popular : donutList[idx].popular,
  };
  res.json(donutList[idx]);
});

// DELETE product by id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const idx = donutList.findIndex((d) => d.id === id);
  if (idx === -1) return res.status(404).json({ message: "Product not found" });
  const deleted = donutList.splice(idx, 1);
  res.json({ message: "Product deleted", product: deleted[0] });
});

module.exports = router;
