import { config } from "dotenv";

config()


export const Port = process.env.PORT || 3000
export const dbPort = process.env.DB_PORT || 3306
export const user = process.env.DB_USER || "root"
export const host = process.env.DB_HOST || "localhost"
export const password = process.env.DB_PASSWORD || "admin"
export const database = process.env.DB_DATABASE || "Companydb"

