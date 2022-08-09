const Pool = require("pg").Pool;
const PG_KEY = require('dotenv').config();

const pool = new Pool({
    user: "hazelwilderspin",
    password: PG_KEY,
    host: "localhost",
    port: 5432,
    database: "pern_data"
});

module.exports = pool;