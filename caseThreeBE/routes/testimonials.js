const express = require("express");
const router = express.Router();
const testimonialsData = require("../data/testimonials");

let testimonials = [...testimonialsData];

// GET all testimonials
router.get("/", (req, res) => {
  res.json(testimonials);
});

// POST new testimonial
router.post("/", (req, res) => {
  const { name, text, avatar } = req.body;
  if (!name || !text) {
    return res.status(400).json({ message: "Name and text are required" });
  }
  const newTesti = { name, text, avatar: avatar || "" };
  testimonials.push(newTesti);
  res.status(201).json(newTesti);
});

// DELETE testimonial by index
router.delete("/:idx", (req, res) => {
  const idx = parseInt(req.params.idx);
  if (isNaN(idx) || idx < 0 || idx >= testimonials.length) {
    return res.status(404).json({ message: "Testimonial not found" });
  }
  const deleted = testimonials.splice(idx, 1);
  res.json({ message: "Testimonial deleted", testimonial: deleted[0] });
});

module.exports = router;
