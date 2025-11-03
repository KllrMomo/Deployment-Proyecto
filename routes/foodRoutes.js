const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Crear un nuevo platillo
router.post('/food_items', async (req, res) => {
  try {
    const newFood = new FoodItem(req.body);
    await newFood.save();
    res.status(201).json({ message: 'Platillo agregado correctamente', food: newFood });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el platillo', details: error });
  }
});

module.exports = router;
