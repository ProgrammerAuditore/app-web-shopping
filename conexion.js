require('dotenv').config();
const mysql = require('mysql2');
const { MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD,  MYSQL_DATABASE } = process.env;

// create the connection to database
const conexion = mysql.createConnection({
    host: MYSQL_HOST || 'localhost',
    user: MYSQL_USERNAME || 'root',
    password: MYSQL_PASSWORD || 'root',
    database: MYSQL_DATABASE || 'test',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = conexion;