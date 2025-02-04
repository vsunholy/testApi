require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
    process.exit(-1);
});
pool.on('connect', () => {
    console.log('Connected to the database');
});

module.exports = pool;