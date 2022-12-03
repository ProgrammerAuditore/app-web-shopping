import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
export const PORT = process.env.PORT || 3000
export const MYSQL_USERNAME = process.env.MYSQL_USERNAME || "root"
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || ""
export const MYSQL_HOST = process.env.MYSQL_HOST || "localhost"
export const MYSQL_PORT = process.env.MYSQL_PORT || 3306
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "dbboutique"
