require('dotenv').config(); // Carga variables de .env solo en desarrollo
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Render te dará el puerto en process.env.PORT
// Usamos 3000 solo como alternativa para nuestro entorno local
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI; // La variable secreta

// Conexión a la base de datos (MongoDB Atlas)
mongoose.connect(DB_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error('Error de conexión:', err));

// Tus vistas, middlewares y rutas van aquí...
app.set('view engine', 'ejs');
// ...

app.get('/', (req, res) => {
    res.render('index');
});

// Render necesita que el servidor escuche en 0.0.0.0
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});