const mysql = require('mysql2/promise')

import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
});

module.exports = db;