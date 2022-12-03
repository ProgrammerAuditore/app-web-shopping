import { createPool } from "mysql2/promise";
import { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE } from "./config.js";

export const pool = createPool({
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

