require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const FoodItem = require('./models/FoodItem');
const foodRoutes = require('./routes/foodRoutes');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de vistas
app.set('view engine', 'ejs');

// Conexión a MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error de conexión:', err));

// Ruta principal: mostrar los platillos
app.get('/', async (req, res) => {
  const foodItems = await FoodItem.find();
  res.render('index', { foodItems });
});

// Rutas POST
app.use('/', foodRoutes);

// Puerto dinámico (Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
