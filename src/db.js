import { createPool } from "mysql2/promise";
import { MYSQLUSER, MYSQLPASSWORD, MYSQLHOST, MYSQLPORT, MYSQLDATABASE } from "./config.js";

export const pool = createPool({
    user: MYSQLUSER,
    password: MYSQLPASSWORD,
    host: MYSQLHOST,
    port: MYSQLPORT,
    database: MYSQLDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

