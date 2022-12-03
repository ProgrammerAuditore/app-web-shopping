
import  express from "express";
import { pool } from "./db.js"; 
const app = express();

console.log(process.env);

app.get("/", (req, res) => {
    res.send("Home")
});

app.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT * FROM tblempleados as RESULT");
    console.log(result);
    res.send("Conexion  a db");
});

app.listen(3000, () => { console.log(`Server: ON port 3000`) });