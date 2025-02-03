
const express = require('express');
const app = express();
require('dotenv').config();
const { Pool } = require('pg');




// prisijungimas prie duomenu bazes later

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});









app.use(express.json());


//ROUTES
// /products GET
// /products/:id GET
// /products/create POST
// /products/update/:id PUT/PATCH
// /products/delete/:id DELETE



app.get('/products', async (req, res) => {
    try {
        res.status(200).json({ message: 'Sekmingai pasiekiamas produktu puslapis' });
    }
    catch (error) {
        res.status(400).json({ error: 'error' });
    }
});

















pool.on('error', (err, client) => {
    console.error('Error:', err);
}); 
pool.on('connect', () => {
    console.log('Connected to the database');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

