import { config } from "dotenv";

config()


export const Port = process.env.PORT 
export const dbPort = process.env.DB_PORT 
export const user = process.env.DB_USER 
export const host = process.env.DB_HOST 
export const password = process.env.DB_PASSWORD 
export const database = process.env.DB_DATABASE 

