import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const config = {
  port: process.env.PORT, // Port for your server
  db: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
};

export default config;
