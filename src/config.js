import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
export const PORT = process.env.PORT || 3000
export const MYSQLUSER = process.env.MYSQL_USERNAME || "root"
export const MYSQLPASSWORD = process.env.MYSQL_PASSWORD || ""
export const MYSQLHOST = process.env.MYSQL_HOST || "localhost"
export const MYSQLPORT = process.env.MYSQL_PORT || 3306
export const MYSQLDATABASE = process.env.MYSQL_DATABASE || "dbboutique"
