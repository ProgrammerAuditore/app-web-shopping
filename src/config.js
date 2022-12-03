import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
export const PORT = process.env.PORT || 3000
export const MYSQLUSER = process.env.MYSQLUSER || "root"
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD || ""
export const MYSQLHOST = process.env.MYSQLHOST || "localhost"
export const MYSQLPORT = process.env.MYSQLPORT || 3306
export const MYSQLDATABASE = process.env.MYSQLDATABASE || "dbboutique"
