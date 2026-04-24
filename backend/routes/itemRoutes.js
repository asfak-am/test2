const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST add item
router.post("/", async (req, res) => {
  const { name, quantity, price, colour, size } = req.body;

  const newItem = new Item({ name, quantity, price, colour, size });
  await newItem.save();

  res.json(newItem);
});

module.exports = router;