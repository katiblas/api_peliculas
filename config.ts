require("dotenv").config();

export const DB_USERNAME = process.env.DB_USERNAME || "";
export const DB_DATABASE = process.env.DB_DATABASE || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_SERVER = process.env.DB_SERVER || "";
export const SALT = +(process.env.SALT ?? 11);
