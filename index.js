
const express = require('express');
const app = express();
require('dotenv').config();
const { Pool } = require('pg');




// prisijungimas prie duomenu bazes later

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});









app.use(express.json());


//ROUTES
// /products GET
// /products/:id GET
// /products/create POST
// /products/update/:id PUT/PATCH
// /products/delete/:id DELETE

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            status: 'success',
            data: result.rows,
        });
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'Database error' });
    }
});

app.get('/products', async (req, res) => {
    try {
        res.status(200).json({ message: 'Sekmingai pasiekiamas produktu puslapis' });
    }
    catch (error) {
        res.status(400).json({ error: 'error' });
    }
});


app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json({
            status: 'success',
            data: result.rows,
        });
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'Database error' });
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

