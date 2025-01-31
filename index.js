console.log('test');



const express = require('express');
const app = express();







// prisijungimas prie duomenu bazes later


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






















const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

