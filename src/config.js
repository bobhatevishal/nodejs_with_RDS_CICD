import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
};

export const port = process.env.PORT || 4000;

export const SECRET = process.env.SECRET;
