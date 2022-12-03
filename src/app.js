
import  express from "express";
import { pool } from "./db.js"; 
import { PORT } from "./config.js";
const app = express();

app.get("/", (req, res) => {
    res.send("Home")
});

app.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT * FROM tblempleados as RESULT");
    console.log(result);
    res.send("Conexion  a db");
});

app.listen(PORT, () => { console.log(`Server: ON port ${PORT}`) });