
const express = require('express');
const app = express();
const pool = require('./database'); // is database.js failo importuojam pool kintamaji




// prisijungimas prie duomenu bazes later






//middleware
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
        res.status(200).json(result.rows);
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
        res.status(200).json(result.rows);

    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'Database error' });
    }
});



app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.status(200).json(result.rows);
    }
    catch (error) {
        res.status(400).json({ error: 'error' });
    }
})

app.post('/users/create', async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
        res.status(201).json(result.rows);
    }
    catch (error) {
        res.status(400).json({ error: 'error' });
    }
});

app.put('/users/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;
        const result = await pool.query('UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *', [username, password, id]);
        res.status(200).json(result.rows);
    }
    catch (error) {
        res.status(400).json({ error: 'error' });
    }
});

app.delete('/users/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        res.status(200).json(result.rows);
    }
    catch (error) {
        res.status(400).json({ error: 'error' });
    }
});


//end game things



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

