require('dotenv').config();
const express = require("express");
const app = express();
const conexion = require("./conexion");
const {APP_PORT} = process.env;
conexion.connect();

conexion.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

conexion.end();

app.listen(APP_PORT, () => { console.log(`Server: ON port ${APP_PORT}`) });