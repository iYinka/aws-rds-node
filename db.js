const mysql = require('mysql2/promise')
// const mysql = require('mysql');

const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    port: process.env.PORT,
});

module.exports = db;