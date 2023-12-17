import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "todo_app",
    password: process.env.DB_PASSWORD || "password",
    port: process.env.DB_PORT || 5432,
  },
};
