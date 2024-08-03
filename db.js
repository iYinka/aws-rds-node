const mysql = require('mysql2/promise')
// const mysql = require('mysql');

const dotenv = require("dotenv");
dotenv.config();

// const db = mysql.createPool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DBNAME,
//     port: process.env.PORT,
// });

const db = mysql.createPool({
    host: "employeedb.cx6osya6kdrn.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password1234",
    database: "employee_db",
    port: 3306
});
module.exports = db;